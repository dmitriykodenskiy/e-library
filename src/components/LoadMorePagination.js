const LoadMorePagination = ({loadMore, booksData}) => {
    const variables = { 
        skip: booksData.length 
    }
    return (<button className='load_more' onClick={() => loadMore(variables)}>Load More</button>)
}

export default LoadMorePagination