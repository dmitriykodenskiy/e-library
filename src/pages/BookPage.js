import { useNavigate } from "react-router-dom"
import useDeliveredBooks from '../hooks/useDeliveredBooks'

const BookPage = () => {
    const imageWidth = 400
    const navigate = useNavigate()
    const deliveredBooks = useDeliveredBooks()

    if (deliveredBooks.length === 0) {
        return (<p>No book found</p>)
    }
    const {number_of_pages: pages, short_description: desc, title, link, image: {url}} = deliveredBooks

    return(
        <main className="singleBookPage">
            <button className="backHome" onClick={() => navigate('/e-library')}>Home</button>
            <section className="singleBookSection">
                <img className="singleBookImg" src={`${url}?width=${imageWidth}`} alt={title}/>
                <div className="bookDesc">
                    <div className="bookTitle bookPageTitle">{title}</div>
                    <div className="shorDesc">{desc}</div>
                    <div className="pageCount">Pages: {pages}</div>
                    <a className="getLink" href={link.href}>{link.title}</a>
                </div>
            </section>
        </main>
    )
}

export default BookPage