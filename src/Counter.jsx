import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0);
    let handleAdd = () =>{
        let newCount = count + 1;
        setCount(newCount);
    }
    let handleReduce = () =>{
        let newCount = count - 1;
        setCount(newCount);
    }

    
  return (
    <div style={{border:'2px solid maroon', marginBottom: '20px', padding: '20px'}}>
        <h2>Counter: {count}</h2>
        <button onClick={handleAdd}>Add Number</button>
        <button onClick={handleReduce}>Reduce Number</button>
    </div>

  )
}

export default Counter