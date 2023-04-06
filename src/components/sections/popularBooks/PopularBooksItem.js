import Book from '../../Book'

const PopularBooksItem = ({ book }) => {
    return (<Book key={book.title} bookData={book}/>)
}
export default PopularBooksItem