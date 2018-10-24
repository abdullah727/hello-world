import { combineReducers } from 'redux';
import {
  ADD_TODO,
   TOGGLE_TODO,
   /*
  SET_VISIBILITY_FILTER,
  VisibilityFilters */
} from './actions';
/* const { SHOW_ALL } = VisibilityFilters; */
function todos(state=[],action){
debugger;
  switch (action.type)
{
  case ADD_TODO:
  return(
    state.concat({text:action.text,completed:false})

    
  )
  case TOGGLE_TODO:
 
  
 return state.map((index,key)=>{
 if(action.index===key)
 {debugger;
   index.completed= !index.completed
 }
 return index
});
  
  default:
      return state
}
}
function itemCounter(state=[{count:0}],action){
 // debugger;
  switch (action.type)
  {
    case ADD_TODO:
  /*   return( state.count++
  ) */
    case TOGGLE_TODO:
    return( state.count--
    )
    default:
    return state
  }
}
const todoApp = combineReducers({
 // visibilityFilter,
 itemCounter,
  todos
})
export default todoApp