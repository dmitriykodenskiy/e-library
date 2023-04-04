import Book from './Book'
import store from '../store'
import { jsonToHtml } from "@contentstack/json-rte-serializer";

const LoadMorePagination = ({loadMore}) => {
    const data = store.getState().data
    const booksData = data?.all_book?.items

    const variables = { 
        skip: booksData.length 
    }
    return (
        <div>
            <ul className='booksList'>
                {booksData.map(book => <Book bookData={book} key={book.title}/>)}
            </ul>
            {booksData.length < data?.all_book?.total && 
            <button className='load_more' onClick={() => loadMore(variables)}>Load More</button>}
        </div>
    )
}

export default LoadMorePagination