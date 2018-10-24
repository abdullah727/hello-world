
import React, { Component } from 'react';
import {addTodo} from '../actions';
import { createStore } from 'redux';
import { connect } from 'react-redux'
import todoApp from '../reducers'
import TodoItems from '../containers/AddTodos'
//const store = createStore(todoApp)
//import TodoItems from './TodoItems';
//import img from './uncheck.png'

class AddTodos extends Component   {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
 
  highlight(e){
e.currentTarget.style.boxShadow = "1px 1px 18px lightblue";
//"box-shadow": ""
  }
  highlightOut(e){
    e.currentTarget.style.boxShadow = null;
  }
 addTodo(e){
 //  console.log(this.props.getState)
 e.preventDefault();

   this.props.dispatch(addTodo(this.textInput.current.value));
   this.textInput.current.value="";
 //  debugger;
 }
    render(){
        //console.log(this.props.itemsCount)
      
        return(

    <div>
        <div>
        <form onSubmit={(e)=>this.addTodo(e)}>
        <input type="text" id="addTodo" ref={this.textInput} placeholder="   Add todo" onFocus={(e)=>this.highlight(e)} onBlur={(e)=>this.highlightOut(e)}/>
 {/*     <button onClick={this.props.show}>ADD</button> */}
       
        </form>
        </div>
      {/*    <div>
     
             <TodoItems/> 
            </div>  */}
     </div>  
           
        );
    }
}

AddTodos = connect()(AddTodos)
export default AddTodos;