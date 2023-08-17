import './App.css';
import TodoInput from './component/TodoInput'
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
     <TodoInput />
    </div>
  );
}

export default App;
