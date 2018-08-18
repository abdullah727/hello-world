
import React, { Component } from 'react';
import unchecked from './unchecked.png'
import checked from './checked.png';
class TodoItems extends Component   {
  
    render(){
       let items,items2,items3;
        const itemList=this.props.itemList;
        const completedList=this.props.completedList;
     // console.log("itemList::"+itemList)
     if(this.props.clickRender===0)
     {//debugger;
        //console.log(unchecked);
         items=itemList.map((i)=>{
            return (
                <div className="itemlist" > <a id="todoLink" onClick={this.props.handleClick} href="#">  <img src={unchecked} alt="Trulli" width="20" height="20"/> </a> {i}
            </div>
            )
          });
      
        }
        else if(this.props.clickRender===3)
        {/* debugger; */
            //in case of clear click
            items=itemList.map((i)=>{
                //debugger;
               return (
                   <div className="itemlist" style={{textDecoration:"none"}}> <a id="todoLink" onClick={this.props.handleClick} href="#"><img src={unchecked} alt="Trulli" width="20" height="20"/> </a>  {i}
               </div>
               )
             });
         
           }
        else if(this.props.clickRender===2){
          //  debugger;
          //in case of all click
           items=itemList.map((i)=>{
               let find=false;
             //  debugger;
                    for(let k=0;k<completedList.length;k++)
                   
            {      
        
                if(i===completedList[k])
                {
                    find=true;
                    return (
                        <div className="itemlist" style={{textDecoration:"line-through", color: "#808080"}} > <a id="todoLink" onClick={this.props.handleClick} href="#"><img src={checked} alt="Trulli" width="20" height="20"/></a> {i}
                    </div>
                    )
                }
            }
            
                if(!find){
                    return (
                        <div className="itemlist" > <a id="todoLink" onClick={this.props.handleClick} href="#">    <img src={unchecked} alt="Trulli" width="20" height="20"/></a> {i}
                    </div>
                    )
                }
            
                  });
            
        }
        else{
           // debugger;
        items2=completedList.map((i)=>{
            
            return (
            <div className="itemlist" style={{textDecoration:"line-through", color: "#808080"}}>  <img src={checked} alt="Trulli" width="20" height="20"/> {i}
                </div>
          
            )
          });
          
        }
        return(

            <div>
                {items}
                {items2}
         </div>        
            );
    }
}


export default TodoItems;