import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './App.css' 

const intialState = {
            title: "",
            status: false,
            id: ""
          };

function App() {
  const[todo, setTodo] = useState(intialState);
  const todoArr = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(todoArr);
  const submitHandler = () => {
   
    let todoObj = {
      title : todo.title,
      status : false,
      id : Math.random()
    }
    dispatch({type : 'ADD_TODO',payload: todoObj});
    setTodo(intialState);
  }
  return (
    <>
      <input placeholder='Enter todo' value={todo.title} onChange={(e) => setTodo({...todo,title:e.target.value})}/>
      <button onClick={submitHandler}>Add</button>
      <ul style={{listStyle : 'none'}}> { todoArr.length > 0 ? todoArr.map((todo,i) => <li key={i}>
                                    <div style={{display:"flex",justifyContent:'space-around',width:'300px', marginBottom: '13px'}}>
                                    <h3 style={{display:"contents"}}>{todo.title}</h3>
                                    <button onClick={() => dispatch({type:'UPDATE_TODO', payload:todo.id})}>{todo.status ? 'Completed' : 'Uncompleted'}</button>
                                    <button onClick={() => dispatch({type:'DELETE_TODO', payload:todo.id})}>Delete</button>   
                                    </div>
                                </li>) : "Please Add todos"}
      </ul>
    </>
  )
}

export default App
