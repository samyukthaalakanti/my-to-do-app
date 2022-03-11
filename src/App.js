import { Component } from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import './Bootstrap.css'

class App extends Component() {
  render(){
  return (
    <div className="App">
      
      <TodoApp/>
    </div>
  );
}
}
export default App;
