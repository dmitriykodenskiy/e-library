import './App.css';
// import Stack from "./sdk/entry"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { testAction } from './reducers/headerReducer';

function App() {
  // const getStack = async () => {
  //   const header = await Stack.getEntry("header", "en-us")
  //   console.log(header[0][0]);
  // }
  // getStack()
  console.log('test');
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(testAction())
  }, [dispatch])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
