import PopularBooksItem from './PopularBooksItem'

const PopularBooks = ({ books }) => {
    return (
        <section className='additionalSection'>
            <h2>Popular Books</h2>
            <ul className='popularBooksList'>
                {books.map(book => <PopularBooksItem key={book?.bookConnection?.edges[0]?.node?.title} book={book?.bookConnection?.edges[0]?.node} />)}
            </ul>
        </section>
    )
}

export default PopularBooks