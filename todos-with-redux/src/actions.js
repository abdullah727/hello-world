/*
 * action types
 */
 export const ADD_TODO = 'ADD_TODO'
 export const TOGGLE_TODO = 'TOGGLE_TODO'
 /*
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const DELETE_COMPLETED = 'DELETE_COMPLETED' */
/*
 * other constants
 */
/*
 * action creators
 */
 export function addTodo(text) 
 {
   debugger;
  return { type: ADD_TODO, text }
}
 export function toggleTodo(index) {
   debugger;
  return { type: TOGGLE_TODO, index }
}/*
export function itemCounter() 
 {
   debugger;
  return { type: ADD_TODO, text }
} 
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
export function deleteCompleted() {
  return { type: DELETE_COMPLETED }
} */