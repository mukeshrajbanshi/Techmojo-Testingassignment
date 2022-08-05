import React from 'react'
import { useState } from "react";

function Counter(props) {
    const [counter, setCounter] = useState(0);
  return (
    <div>
    <header className="App-header">
        <p>
        Hello Test
        </p>
        <a>Learn React</a> 
        <div>
        <a>
        let check react app</a>
        </div>

        <h1>welcome {props.name}</h1>
        <h2 id="initial_value">{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        </header>
    </div>
  )
}

export default Counter