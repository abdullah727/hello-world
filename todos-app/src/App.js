import Header from './Header';
import Footer from './Footer';
import AddTodos from './AddTodos';
import checked from './checked.png';
import unchecked from './unchecked.png'
import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
          itemList:[],  
          completedList:[],
          itemsCount:0,
          clickRender:0
        };
      }
      show(){
          const itemList=this.state.itemList;   
          const itemsCount=this.state.itemsCount;
          const clickRender=this.state.clickRender;
        // debugger;
          //console.log(document.getElementById("addTodo").value);
          this.setState({
              itemList:itemList.concat(document.getElementById("addTodo").value),
              itemsCount:itemsCount+1,
                clickRender:2
          }
          );
          document.getElementById("addTodo").value="";
             // console.log(this.state.itemList)
      }


      handleClick(e){
         // console.log(e.currentTarget.parentNode);
       // debugger;
        const itemsCount=this.state.itemsCount;
        const completedList=this.state.completedList;
        const itemList=this.state.itemList;
        const clickRender=this.state.clickRender;
      /*   if(this.state.clickRender===2)
        { */
            debugger;
            if(this.state.clickRender===3)
            {
                    e.currentTarget.isCheck=false;
                    /*  this.setState({
           clickRender:0
         }
         ); */
            }
            for(let k=0;k<completedList.length;k++)
                   
            {      
        
                if(e.currentTarget.parentNode.lastChild.data===completedList[k])
                {
                    e.currentTarget.isCheck=true;
                }
            }

       // }
        if(!e.currentTarget.isCheck)
        {
        e.currentTarget.isCheck=true;
     //  debugger;
      // console.log(`img is ${checked}`)
         e.currentTarget.parentNode.style.textDecoration ="line-through";
         e.currentTarget.parentNode.style.color= "#808080";
        // e.currentTarget.childNodes[1].src=`${checked}`;
        e.currentTarget.getElementsByTagName("img")[0].src=`${checked}`;
    
         //console.log(e.currentTarget.parentNode.innerText);
         this.setState({
             itemsCount:itemsCount-1,
             completedList:completedList.concat(e.currentTarget.parentNode.lastChild.data)
         }
         );
        }
        else{
            e.currentTarget.isCheck=false;
         e.currentTarget.parentNode.style.textDecoration ="none";
         e.currentTarget.getElementsByTagName("img")[0].src=`${unchecked}`;
         //debugger;
       let arr=this.state.completedList.slice();
const index =arr.indexOf(e.currentTarget.parentNode.lastChild.data);// array.indexOf(5);
if (index > -1) {
  arr.splice(index, 1);

}
         this.setState({
            itemsCount:itemsCount+1,
            completedList:arr
        }
        );
        }
        // console.log(this.state.completedList)
     }
   
     completeClick(i)
     {   const clickRender=this.state.clickRender;
         this.setState({
             clickRender:i
         }
         );
         //console.log("click render:"+this.state.clickRender);
     }
    allClick(){
        const clickRender=this.state.clickRender;
        this.setState({
            clickRender:2
        }
        );
    }
    clearClick(){
       const completedList=this.state.completedList;
      const  itemList=this.state.itemList;
      const clickRender=this.state.clickRender;
        //console.log("clear complete")
       // debugger;
        let arr=this.state.itemList.slice();
        for(let i=0;i<completedList.length;i++)
        {
            
            const index =arr.indexOf(completedList[i]);// array.indexOf(5);
            if (index > -1) {
              arr.splice(index, 1);
          
            }
        }
     
        this.setState({
            itemList:arr,
            completedList:[],
           clickRender:3
        }
        );
    }

  
    render()
    {
    return(
        
        <div class="main">

     <div class="header">  <Header/> </div>
     <div><AddTodos
     itemList={this.state.itemList}
     show={()=>this.show()}
     handleClick={(e)=>this.handleClick(e)}
     clickRender={this.state.clickRender}
     completedList={this.state.completedList}
     /></div>
     <div class="footer"> <Footer
        itemsCount={this.state.itemsCount}
        completeClick={(i)=>this.completeClick("1")}
        allClick={()=>this.allClick()}
        clearClick={()=>this.clearClick()}
     /> </div>
     </div>
 
    );

    }
}


export default App;
