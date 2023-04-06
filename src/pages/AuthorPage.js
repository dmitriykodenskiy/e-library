import { useNavigate, useMatch } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { ALL_AUTHORS } from "../queries"
import { initializeAuthorsData } from "../reducers/authorsDataReducer"
import { jsonToHtml } from "@contentstack/json-rte-serializer";
import parse from 'html-react-parser';
import PopularBooks from '../components/sections/popularBooks/PopularBooks'
import OtherAuthors from '../components/sections/otherAuthors/OtherAuthors'

const AuthorPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const match = useMatch("/e-library/authors/:name")
    const matchedTitle = match.params?.name

    // Fetch authors with graphQL
    const { loading, error, data } = useQuery(ALL_AUTHORS, {
        variables: {
            url: `/e-library/authors/${matchedTitle}`
        }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>;

    // Write author's data to the Redux Store
    dispatch(initializeAuthorsData(data))

    let authorsData = data?.all_author?.items[0]

    if (!authorsData) {
        return(
            <div>No author info available</div>
        )
    }

    const { title, description:{ json: description }, imageConnection, additional_sections = [] } = authorsData

    const imgUrl = imageConnection.edges[0]?.node?.url ? imageConnection.edges[0]?.node?.url : 'https://images.contentstack.io/v3/assets/blt774c40ef55b77751/blt4d8d45db95fb81f5/642ed050c29b521140116ba4/no_image_icon.png'
    const desc = parse(jsonToHtml(description))

    return(
        <main className="authorPage">
            <button className="backHome" onClick={() => navigate('/e-library')}>Home</button>
            <section className="authorSection">
                <img className="authorImage" src={imgUrl} alt={title}/>
                <div className="authorDesc">
                    <div className="authorPage__name">{title}</div>
                    <div className="shorDesc">{desc}</div>
                </div>
            </section>
            {additional_sections.map(section => {
                if (section.__typename === 'AuthorAdditionalSectionsPopularBooks') {
                    return (<PopularBooks key={section.__typename} books={section?.popular_books?.books}/>)
                } else if (section.__typename === 'AuthorAdditionalSectionsOtherAuthors') {
                    return (<OtherAuthors key={section.__typename} authors={section?.other_authors?.authors_list}/>)
                }
                return null
            })}
        </main>
    )
}

export default AuthorPage