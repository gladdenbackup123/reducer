import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ToDOList from './ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        <ToDOList/>
      </header>
    </div>
  );
}

export default App;
