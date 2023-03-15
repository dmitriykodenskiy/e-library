const BookPage = ({book: {number_of_pages: pages, short_description: desc, title, link, imageConnection}}) => {
    const imageLink = imageConnection.edges[0]?.node?.url
    const imageWidth = 400
    return(
        <main className="singleBookPage">
            <img className="singleBookImg" src={`${imageLink}?width=${imageWidth}`} alt={title}/>
            <div className="bookDesc">
                <div className="shorDesc">{desc}</div>
                <div className="pageCount">Pages: {pages}</div>
                <a className="getLink" href={link.href}>{link.title}</a>
            </div>
        </main>
    )
}

export default BookPage