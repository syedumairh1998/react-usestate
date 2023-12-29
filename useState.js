import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({ count1: 0, count2: 0, name: 'no user' })

  const handleChange = (key, value) => {
    if (value) {
     return setState({
        ...state,
        [key]: value
      })
    }
    setState({
      ...state,
      [key]: state[key] + 1
    })

  }


  return (
    <div>
      <h1>Count 1: {state.count1}</h1>
      <h1>Count 2: {state.count2}</h1>
      <h1>{state.name}</h1>
      <button onClick={() => handleChange('count1')}>Increment 1</button>
      <button onClick={() => handleChange('count2')}>Increment 2</button>
      <button onClick={() => handleChange('name', 'Umair')}>update name</button>
    </div>
  )
}

export default App
