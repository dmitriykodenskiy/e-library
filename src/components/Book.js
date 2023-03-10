const Book = ({bookData: {author, number_of_pages: pages, short_description: desc, title, link, imageConnection}}) => {
    const imageLink = imageConnection.edges[0].node.url
    console.log(author, pages, desc, title, link, imageLink);
    return (
        <li className="bookItem">
            <figure>
                <img src={imageLink} alt={title}/>
                <figcaption>{title}</figcaption>
                <div className="bookDesc">
                    <div className="author">{author}</div>
                    <div className="shorDesc">{desc}</div>
                    <div className="pageCount">Pages: {pages}</div>
                    <a className="getLink" href={link.href}>{link.title}</a>
                </div>
            </figure>
        </li>
    )
}

export default Book