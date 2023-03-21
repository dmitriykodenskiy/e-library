import { usePagination } from 'use-pagination-hook'
import Book from './Book'
  
const PerPagePagination = () => {
    // const { current, pages, display, next, previous } = usePagination({ items: booksData, size: 5 });
 
    return (
      <div>
        Per-page pagination
        {/* <ul className='booksList'>
            {display.map(book => <Book bookData={book} key={book.title}/>)}
        </ul>
        <button onClick={previous}>Previous Page</button>
        <button onClick={next}>Next Page</button> */}
      </div>
     )
}

export default PerPagePagination