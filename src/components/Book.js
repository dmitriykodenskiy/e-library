import ReactReadMoreReadLess from "react-read-more-read-less"
import { Link } from 'react-router-dom'

const Book = ({bookData: {author, number_of_pages: pages, short_description: desc, title, link, imageConnection}}) => {
    const imageLink = imageConnection.edges[0]?.node?.url
    const bookParam = encodeURIComponent(title)
    return (
        <li className="bookItem">
            <figure>
                <Link className="bookPageLink" to={`/books/${bookParam}`}>
                    {imageLink &&
                        <div className="bookImageWrapper">
                            <img src={imageLink} alt={title}/>
                        </div>
                    }
                    <figcaption>{title}</figcaption>
                </Link>
                <div className="bookDesc">
                    <div className="author">{author}</div>
                    <div className="shorDesc">
                        <ReactReadMoreReadLess
                            charLimit={200}
                            readMoreText={"Read more"}
                            readLessText={"Read less"}
                        >
                            {desc}
                        </ReactReadMoreReadLess>
                    </div>
                    <div className="pageCount">Pages: {pages}</div>
                    <a className="getLink" href={link.href}>{link.title}</a>
                </div>
            </figure>
        </li>
    )
}

export default Book