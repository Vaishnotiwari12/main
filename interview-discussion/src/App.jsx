import { useState } from 'react'
import './App.css'

function App() {

  const [value ,setValue] = useState(1)
  // const [multipliedValue,setmultipliedValue] = useState(1)

let multipliedValue = value*5

  const multiplybyfive = () => {
  // setmultipliedValue(value*5)
    setValue(value +1)

  }




  return (
   
   <>
   <h1 className='text-2xl font-bold'> {value} Main Value</h1>
   <button onClick={multiplybyfive} className='border-4 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition ease-in-out duration-200 text-2xl font-bold'>Click to multiply by 5</button>
   <h2 className='text-2xl font-bold'>{multipliedValue}Multiplied Value:</h2>
   </>
      
    
  )
}

export default App
