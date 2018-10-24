import Header from './Header';
import Footer from './Footer';
import TodoList from '../containers/TodoList';
import AddTodos from '../containers/AddTodos';
import TodoItems from './TodoItems';
import checked from '../checked.png';
import unchecked from '../unchecked.png'
import React, { Component } from 'react';
///////////////////////////////////container components//////////////////////
class App extends Component{
  
    render()
    {
    
    return(
        
        <div class="main">
        <div class="header">  <Header/> </div>
      <AddTodos />
      <TodoList/>
      <div class="footer"> <Footer
       /> </div>
    </div>
 
    );

    }
}


export default App;
