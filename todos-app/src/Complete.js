
//import TodosItem from './TodosItem';
import React, { Component } from 'react';

class Complete extends Component   {
    
    render()
    {
         // console.log("handle  ")
    const clickRender=this.props.clickRender;
    const completedList=this.props.completedList;
   // console.log("complete value:"+this.props.clickRender)
    if(this.props.clickRender==1)
    {console.log("complete list:"+this.props.completedList);
    var items=completedList.map((i)=>{
       // console.log(i)
        return (
      <div>{i}</div>
        
        )
      });
      return(

        <div className="complete">
            {items}
     </div>        
        );
    }
    return null;
  }
}


export default Complete;
