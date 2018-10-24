
import React, { Component } from 'react';
import unchecked from '../unchecked.png'
import checked from '../checked.png';
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import todoApp from '../reducers'
/* class TodoItems extends Component   {
    render(){ */
     /*   let items,items2,items3;
        const itemList=this.props.itemList;
        const completedList=this.props.completedList; */
      //  debugger;
       // const store = createStore(todoApp)
        //const {store}=this.props;
      // console.log(this.props.getState)
  /*       const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
) */
        // /console.log(store.getState());
        /*  items=itemList.map((i)=>{
            return (
                <div className="itemlist" > <a id="todoLink" onClick={this.props.handleClick} href="#">  <img src={unchecked} alt="Trulli" width="20" height="20"/> </a> {i}
            </div>
            )
          });
      
          return(

            <div>
                {items}
         </div>        
            ); *//* 
            return(<div></div>);
      
}
} */
const TodoItems=({todos,onTodoClick,completed})=>{
  
    
    console.log(todos)
    let items,items2,items3;
        const itemList=todos;
       // const completedList=this.props.completedList
    return itemList.map((index,key)=>{
        if(index.completed)
        {debugger;
            return (
            <div className="itemlist" id={key} > <a id="todoLink" onClick={()=>onTodoClick(key)} href="#">  <img src={checked} alt="Trulli" width="20" height="20"/> </a> {index.text}
            </div>
            )
        }
        else{
        return (
            <div className="itemlist" id={key} > <a id="todoLink" onClick={()=>onTodoClick(key)} href="#">  <img src={unchecked} alt="Trulli" width="20" height="20"/> </a> {index.text}
        </div>
        )
    }
      });
 /*    return(<div>
        {items}
    </div>); */
}
//debugger;
TodoItems.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }
export default TodoItems;