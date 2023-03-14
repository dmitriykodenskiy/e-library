import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'
import Book from './Book'
// import { useEffect } from 'react'

const Bookslist = () => {
    const { loading, error, data, fetchMore } = useQuery(ALL_BOOKS, {
        variables: {
            limit: 6,
            skip: 0
        }
    })

    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>;

    let booksData = data?.all_book?.items

    if (!booksData) {
        return(
            <div>No books available</div>
        )
    }

    const loadMore = () => {
        fetchMore({ 
            variables: { 
                skip: 6 
            }
        })
        // .then(response => {
        //     booksData = response?.data?.all_book?.items;
        // })
    }
    return(
        <main>
            <h1>Books</h1>
            <section>
                <ul className='booksList'>
                    {booksData.map(book => <Book bookData={book} key={book.title}/>)}
                </ul>
                <button className='load_more' onClick={loadMore}>Load More</button>
            </section>
        </main>
    )
}

export default Bookslist