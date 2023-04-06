import OtherAuthorsItem from './OtherAuthorsItem'

const OtherAuthors = ({ authors }) => {
    return (
        <section className='additionalSection'>
            <h2>Other Authors</h2>
            <ul className='otherAuthorsList'>
                {authors.map(author => <OtherAuthorsItem key={author?.author_itemConnection?.edges[0]?.node?.title} author={author?.author_itemConnection?.edges[0]?.node} />)}
            </ul>
        </section>
    )
}

export default OtherAuthors