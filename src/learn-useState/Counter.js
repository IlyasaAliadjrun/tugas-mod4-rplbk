import React, { useState, useContext } from "react";
import logo from "../logo.svg";
import "./Counter.css";
import { TemaContext, temas } from "../learn-useContext";
export default function Counter() {
  const [showImage, setShowImage] = useState(true);
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const hideImage = () => {
    setShowImage(!showImage);
  };

  //buat tugas mod 4
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  //
  //buat tugas mod 4
  const [tema, setTema] = useState(temas.forest)
  const ubahTema = () => {
    if(tema.id === temas.sky.id){
      setTema(temas.forest)
    }
    else{
      setTema(temas.sky)
    }
  }

  function ThemedButton2() {
    const { tema, ubahTema } = useContext(TemaContext);
    return (
      <button
        className="Button"
        style={{ background: tema.background, color: tema.foreground }}
        onClick={ubahTema}
      >
        i am styled by theme context!
      </button>
    );
  }
  //
  return (
    <TemaContext.Provider value={{ tema, ubahTema }}> {/* buat tugas mod 4 */}
      <div className="Main"
        style={{ background: tema.background, color: tema.foreground  }} > {/* buat tugas mod 4 */}
      <p className="Text">Counter with useState</p>
      <p>KELOMPOK 20</p>
      <ThemedButton2/> {/* buat tugas mod 4 */}
      <div className="ViewImage">
        <div className="ViewImage1">
          <img
            className="App-logo"
            style={{ display: showImage === true ? "flex" : "none" }}
            src={logo}
            alt="logo"
          />
        </div>
        <button className="Button" onClick={hideImage}>
          {showImage !== true ? "show" : "hide"}
        </button>
      </div>
      <p className="Text">{count}</p>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={countUp}>
            Up
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={countDown}>
            Down
          </button>
        </div>
      </div>
      {/* buat tugas modul 4 */}
      <br />
      <p className="Text">Mendapatkan input value dari useState</p>
      <p>KELOMPOK 20</p>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
      <br />
      <h3>{message}</h3>
      {/* -------------------------- */}
    </div>
    </TemaContext.Provider>
  );
}
