import Book from './Book'

const Bookslist = ({ loadMore, data }) => {
    let booksData = data?.all_book?.items
    return(
        <main>
            <h1>Books</h1>
            <section>
                <div className='paginationToggle'>
                    <span className='paginationLabel'>Pagination:</span>
                    <button className='pagination__btn pagination__btn_loadMore active'>Load more</button>
                    <button className='pagination__btn pagination__btn_perPage'>Per-page</button>
                </div>
                <ul className='booksList'>
                    {booksData.map(book => <Book bookData={book} key={book.title}/>)}
                </ul>
                {booksData.length < data?.all_book?.total && (<button className='load_more' onClick={loadMore}>Load More</button>)}
            </section>
        </main>
    )
}

export default Bookslist