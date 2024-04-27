import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import store from './Store'

function App() {
  const theme = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{backgroundColor: theme==="light" ? 'white' : 'black', color:theme==="light" ? 'black' : 'white'}}>Theme</div>
      <button onClick={() => dispatch({type:"TOGGLE"})}>Toggle</button>
    </>
  )
}

export default App
