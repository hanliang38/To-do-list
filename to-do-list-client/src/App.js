import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className="todo-app">
      <Route path='/' render={() => (
        <TodoList />
      )}
    />
    </div>
  );
}

export default App;
