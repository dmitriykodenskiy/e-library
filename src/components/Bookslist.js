import Book from './Book'
import { useDispatch, useSelector } from 'react-redux'
import { changePaginationType } from '../reducers/paginationReducer'

const Bookslist = ({ loadMore }) => {

    const dispatch = useDispatch()
    const paginationType = useSelector(state => state.pagination)
    const data = useSelector(state => state.data)
    let booksData = data?.all_book?.items

    const togglePagination = async (event, type) => {
        const paginationOptions = document.querySelectorAll('.pagination__btn')
        paginationOptions.forEach(element => {
            element.classList.remove('active')
        });
        event.target.classList.add('active')
        dispatch(changePaginationType(type))
    }

    const paginationBlock = () => {
        if (booksData.length >= data?.all_book?.total) return null

        if (paginationType === 'load_more') {
            return (<button className='load_more' onClick={loadMore}>Load More</button>)
        } else if(paginationType === 'per_page') {
            return (<div>per page</div>)
        }
    }
    return(
        <main>
            <h1>Books</h1>
            <section>
                <div className='paginationToggle'>
                    <span className='paginationLabel'>Pagination:</span>
                    <button className='pagination__btn pagination__btn_loadMore active' onClick={(event) => togglePagination(event, 'load_more')}>Load more</button>
                    <button className='pagination__btn pagination__btn_perPage' onClick={(event) => togglePagination(event, 'per_page')}>Per-page</button>
                </div>
                <ul className='booksList'>
                    {booksData.map(book => <Book bookData={book} key={book.title}/>)}
                </ul>
                {paginationBlock()}
            </section>
        </main>
    )
}

export default Bookslist