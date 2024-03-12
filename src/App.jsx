import './App.css'
import Team from './Team'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert("Button Clicked")
  }
  let handleClick2 = () => {
    alert("Button 2 Clicked")
  }

  let addToFive = (num) =>{
    alert (num + 5)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert("Third Button Clicked")}}>Click Me 3</button>
      <button onClick={() => addToFive(5)}>Click Me 4</button> {/* Different */}
      
      
    </>
  )
}

export default App