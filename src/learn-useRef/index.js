import React, {useRef, useState} from "react";
import "./index.css";

export default function Index(){
    const inputRef = useRef(null)
    const [inputan, setInputan] = useState("")

    function handleClick(){
        setInputan(inputRef.current.value)
    }
    return (
        <div className="Main">
          <p className="Text"> Learn useRef</p>
          <p>KELOMPOK20</p>

          <input 
            type="text"
            ref={inputRef}
            id="inputan"
            name="inputan" />
          <br/>
          <button onClick={handleClick} type="button">Click me</button>
          <h3>{inputan}</h3>

        </div>
    );
}
