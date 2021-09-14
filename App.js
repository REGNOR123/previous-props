
import './App.css'
import User from "./User";
import {useState} from 'react'

function App()
{
    const[count,setcount]=useState(1)

    
    return(
        <>
        <h1>This is Functional Component</h1>
        <User data={count}/>
        <button onClick={()=> setcount(Math.floor(Math.random()*10))}>UPDATE</button>
        </>
    );
}
export default App