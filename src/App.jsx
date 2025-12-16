import { useState, useEffect, use } from 'react'
import { bubbleSort } from './algorithms/bubbleSort'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { step } from './algorithms/types'

function App() {
  const [input, setInput] = useState("") // Input string for the array to be sorted
  const [steps, setSteps] = useState([]) // Array of sorting steps
  const [current, setCurrent] = useState(0) // Current step index
  const [count, setCount] = useState(0)

  const run = () => {
    // Parse input and generate sorting steps
    const array = input.split(",").map((num) => parseInt(num.trim(), 10))
    const sortingSteps = bubbleSort(array)
    setSteps(sortingSteps)
  };

  //creates a timer that fires every 500ms to update the current step
  useEffect(() => {
    // Animate through the steps
    if (steps.length === 0) return;
     const id = setInterval(() => {
        setCurrent(c => (c < steps.length - 1) ? c + 1 : c);
     }, 500);
      return () => clearInterval(id);
    }, [steps]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Algorithm Visualizer</h1>

      <input
        value={input}
        onChange = {e => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      
      <button onClick={run}>Run Bubble Sort</button>

      {steps.length > 0 && (
        <>
          <BarChart step = {steps[current]} />
          <p>{steps[current].message}</p>
        </>
      )}
    </div>
  )
}

export default App
