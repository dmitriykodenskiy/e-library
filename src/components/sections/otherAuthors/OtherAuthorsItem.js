import { Link } from 'react-router-dom'

const OtherAuthorsItem = ({ author: { title, url, imageConnection } }) => {
    const imageLink = imageConnection.edges[0]?.node?.url ? imageConnection.edges[0]?.node?.url : 'https://images.contentstack.io/v3/assets/blt774c40ef55b77751/blt4d8d45db95fb81f5/642ed050c29b521140116ba4/no_image_icon.png'
    return (
        <li className="authorItem">
            <figure>
                <Link className="bookPageLink" to={url}>
                    <div className="authorImageWrapper">
                        <img src={imageLink} alt={title}/>
                    </div>
                    <figcaption className="bookTitle">{title}</figcaption>
                </Link>
            </figure>
        </li>
    )
}

export default OtherAuthorsItem