import Book from './Book'

const Bookslist = ({ loadMore, data }) => {
    let booksData = data?.all_book?.items
    return(
        <main>
            <h1>Books</h1>
            <section>
                <ul className='booksList'>
                    {booksData.map(book => <Book bookData={book} key={book.title}/>)}
                </ul>
                {booksData.length < data?.all_book?.total && (<button className='load_more' onClick={loadMore}>Load More</button>)}
            </section>
        </main>
    )
}

export default Bookslist