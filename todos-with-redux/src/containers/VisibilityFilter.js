import { connect } from 'react-redux'
import Footer from '../components/Footer'
//import {toggleTodo} from '../actions'
const mapStateToProps = state => {
  debugger;
  return {
    todos: state.todos
  }
}
/* const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      debugger;
      dispatch(toggleTodo(id))
    }
  }
} */
const TodoList = connect(
  mapStateToProps,
  null
)(Footer)
export default VisibilityFilter