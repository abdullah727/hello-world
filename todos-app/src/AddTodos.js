
import React, { Component } from 'react';
import TodoItems from './TodoItems';
//import img from './uncheck.png'

class AddTodos extends Component   {
  componentDidMount(){
    var inp=document.getElementById("addTodo");
    inp.addEventListener("keyup",(e)=>{
        if(e.which===13)
        {//debugger;
            this.props.show();
            e.preventDefault();
        }
       
    })
  }
  highlight(e){
e.currentTarget.style.boxShadow = "1px 1px 18px lightblue";
//"box-shadow": ""
  }
  highlightOut(e){
    e.currentTarget.style.boxShadow = null;
  }
  enter(e)
  {
      if(e.which ===13)
      {
        e.preventDefault();
      }
  }
    render(){
        //console.log(this.props.itemsCount)
      
        return(

    <div>
        <div>
        <form onKeyPress={(e)=>this.enter(e)}>
        <input type="text" id="addTodo" ref="val" placeholder="   Add todo" onFocus={(e)=>this.highlight(e)} onBlur={(e)=>this.highlightOut(e)}/>
 {/*     <button onClick={this.props.show}>ADD</button> */}
       
        </form>
        </div>
        <div>
     
             <TodoItems
             itemList={this.props.itemList}
             handleClick={this.props.handleClick}
             clickRender={this.props.clickRender}
             completedList={this.props.completedList}
             /> 
            </div>
     </div>        
        );
    }
}


export default AddTodos;