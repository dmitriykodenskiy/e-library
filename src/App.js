import './App.css';
import Stack from "./sdk/entry"

function App() {
  const getStack = async () => {
    const header = await Stack.getEntry("header", "en-us")
    console.log(header[0][0]);
  }
  getStack()
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
