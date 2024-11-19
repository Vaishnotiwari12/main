import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const [counter,setCounter] = useState(10)
  // let counter = 10

  const addValue = () => {
      // counter =counter+1
     const addValue = () => {
      if(counter < 20 )
        setCounter(prevCounter => prevCounter+1)
     }

     setCounter( prevCounter => prevCounter+1)
     
    //  setCounter( prevCounter => prevCounter+1)
    //  setCounter( prevCounter => prevCounter+1)
    //  setCounter( prevCounter => prevCounter+1)
   
  }
  
  const removeValue = () => {
    setCounter(counter-1)
  }


  return (
    <>
    <h1> chai aur react</h1>
    <h2> Counter value:{counter}</h2>

 <button
    onClick={addValue}>
      Add value {counter}</button>

  <button
  onClick={removeValue}>
    remove value{counter}</button>
    <p>footer:{counter}</p>
    </>
    
  )

}
export default App

