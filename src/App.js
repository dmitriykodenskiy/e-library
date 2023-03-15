import './App.css';
import Header from './components/Header';
import Bookslist from './components/Bookslist';
import BookPage from './components/BookPage';
import { Routes, Route, useMatch } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from './queries'

function App() {
  const { loading, error, data, fetchMore } = useQuery(ALL_BOOKS, {
      variables: {
          limit: 5,
          skip: 0
      }
  })

  const match = useMatch("/books/:title")

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>;

  let booksData = data?.all_book?.items

  if (!booksData) {
      return(
          <div>No books available</div>
      )
  }
  const singleBookData = match ? booksData.find(item => item.title === match.params?.title) : null
  const loadMore = () => {
      fetchMore({ 
          variables: { 
              skip: booksData.length 
          }
      })
  }
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Bookslist loadMore={loadMore} data={data}/>}></Route>
        <Route path="/books/:title" element={<BookPage book={singleBookData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
