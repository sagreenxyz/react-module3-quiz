// Question 1
import {useState} from 'react'

import { useEffect } from "react";

function Stopwatch() {
  let [count, updateCount] = useState(0)
  useEffect(() => {
    setTimeout(() => updateCount(count+1), 1000)
  }, [])
  return (
    <div>
      {count} seconds(s) have elapsed
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
