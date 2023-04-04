import ReactReadMoreReadLess from "react-read-more-read-less"
import { Link } from 'react-router-dom'

const Book = ({bookData: {number_of_pages: pages, short_description: desc, title, link, imageConnection, authorrefConnection}}) => {
    const imageLink = imageConnection.edges[0]?.node?.url
    const authors = authorrefConnection.edges.map(item => item.node)
    const bookParam = encodeURIComponent(title)
    return (
        <li className="bookItem">
            <figure>
                <div className="bookInfo">
                    <Link className="bookPageLink" to={`/e-library/books/${bookParam}`}>
                        {imageLink &&
                            <div className="bookImageWrapper">
                                <img src={imageLink} alt={title}/>
                            </div>
                        }
                        <figcaption className="bookTitle">{title}</figcaption>
                    </Link>
                    <div className="bookDesc">
                            {authors.map(author => <a className="author" href={author.url} key={author.title}>{author.title}<br/></a>)}
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
                    </div>
                </div>
                <a className="getLink" href={link.href}>{link.title}</a>
            </figure>
        </li>
    )
}

export default Book