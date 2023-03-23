import { useDispatch } from 'react-redux'
import { changePaginationType } from '../reducers/paginationReducer'
import Pagination from '../components/Pagination'

const Bookslist = ({ loadMore }) => {

    const dispatch = useDispatch()

    const togglePagination = async (event, type) => {
        const paginationOptions = document.querySelectorAll('.pagination__btn')
        paginationOptions.forEach(element => {
            element.classList.remove('active')
        });
        event.target.classList.add('active')
        dispatch(changePaginationType(type))
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
                <Pagination loadMore={loadMore} />
            </section>
        </main>
    )
}

export default Bookslist