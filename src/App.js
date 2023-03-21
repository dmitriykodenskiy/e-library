import './App.css';
import Header from './components/Header';
import Bookslist from './components/Bookslist';
import BookPage from './components/BookPage';
import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { initializeData } from './reducers/dataReducer';
import { ALL_BOOKS } from './queries'

const App = () => {
  const dispatch = useDispatch()
  // Fetch books with graphQL
  const { loading, error, data, fetchMore } = useQuery(ALL_BOOKS, {
      variables: {
          limit: 5,
          skip: 0
      }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>;

  dispatch(initializeData(data))
  let booksData = data?.all_book?.items

  if (!booksData) {
      return(
          <div>No books available</div>
      )
  }
  
  const loadMore = (variables) => {
      fetchMore({ 
          variables: variables
      })
  }
  
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/e-library" element={<Bookslist loadMore={loadMore}/>}></Route>
        <Route path="/e-library/books/:title" element={<BookPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
