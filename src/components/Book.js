import ReactReadMoreReadLess from "react-read-more-read-less"
import { Link } from 'react-router-dom'

const Book = ({bookData: {number_of_pages: pages, rating, short_description: desc, title, link, imageConnection, authorrefConnection}}) => {
    const imageLink = imageConnection.edges[0]?.node?.url
    let starRatingPosition
    switch (rating) {
        case 1:
            starRatingPosition = '-230px'
            break;
        case 2:
            starRatingPosition = '-180px'
            break;
        case 3:
            starRatingPosition = '-123px'
            break;
        case 4:
            starRatingPosition = '-70px'
            break;
                
        case 5:
            starRatingPosition = '-15px'
            break;
    
        default:
            break;
    }
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
                            {authors.map(author => <Link className="author" to={author.url} key={author.title}>{author.title}<br/></Link>)}
                            <div className="shorDesc">
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={"Read more"}
                                    readLessText={"Read less"}
                                >
                                    {desc}
                                </ReactReadMoreReadLess>
                            </div>
                            {
                                rating ? 
                                <div className="rating" style={{backgroundPositionY: starRatingPosition}}></div> :
                                null
                            }
                            <div className="pageCount">Pages: {pages}</div>
                    </div>
                </div>
                <a className="getLink" href={link.href}>{link.title}</a>
            </figure>
        </li>
    )
}

export default Book