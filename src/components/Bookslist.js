import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'
import Book from './Book'

const Bookslist = () => {
    const { loading, error, data } = useQuery(ALL_BOOKS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>;

    const booksData = data.all_home.items[0]?.books_list

    if (!booksData) {
        return(
            <div>No books available</div>
        )
    }

    return(
        <main>
            <h1>Books</h1>
            <section>
                <ul className='booksList'>
                    {booksData.map(book => <Book bookData={book.book} key={book.book.title}/>)}
                </ul>
            </section>
        </main>
    )
}

export default Bookslist