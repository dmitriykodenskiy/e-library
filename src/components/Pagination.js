import { useSelector } from 'react-redux'
import LoadMorePagination from './LoadMorePagination'
import PerPagePagination from './PerPagePagination'

const Pagination = ({loadMore}) => {
    const paginationType = useSelector(store => store.pagination)

    if (paginationType === 'load_more') {
       return <LoadMorePagination loadMore={loadMore} />
    } else if(paginationType === 'per_page') {
        return <PerPagePagination />
    }
}

export default Pagination