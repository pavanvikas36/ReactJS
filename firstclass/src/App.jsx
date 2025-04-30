// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import Navbar from "./Navbar"
// import Frontend from "./Frontend"
// import {Backend} from "./Backend"
// import {Database} from "./Database"
// function App(){
//   return (
//     <div>
//       <Navbar/>
//       <div id="cards_container">
//         <Frontend></Frontend>
//         <Backend></Backend>
//         <Database></Database>
//       </div>
//     </div>
//   )
// }
// export default App;
//component always returns jsx
import Navbar from "./Navbar";
import FrontEnd from "../FrontEnd";
import Students from "./Students";
import Temp from "./Temp";
function App(){
  const s1 = {
    name: "Pavan",
    age: 22,
    batch: "32r"
  }
  const s2 = {
    name: "Vikas",
    age: 25,
    batch: "31r"
  }
  const tempDetails = {
    city: "Hyderabad",
    temp: '45c',
    day: 'Monday'
  }
  return (
    <div>
      <Students student1={s1} student2={s2}/>
      <Temp temp1={tempDetails} />
    </div>
  )
}
export default App;