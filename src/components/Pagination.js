import store from '../store'
import { useSelector } from 'react-redux'
import LoadMorePagination from './LoadMorePagination'
import PerPagePagination from './PerPagePagination'

const Pagination = ({loadMore}) => {
    const data = store.getState().data
    const paginationType = useSelector(store => store.pagination)
    const booksData = data?.all_book?.items

    if (booksData.length >= data?.all_book?.total) return null

    if (paginationType === 'load_more') {
       return <LoadMorePagination loadMore={loadMore} booksData={booksData} />
    } else if(paginationType === 'per_page') {
        return <PerPagePagination />
    }
}

export default Pagination