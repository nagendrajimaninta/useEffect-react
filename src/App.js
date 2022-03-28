import { useState, useEffect } from "react";
import "./styles.css";
function Hooks() {
  const [col, setCol] = useState("green");
  return (
    <>
      <h3>
        Hooks are the replacement of the lifecycle methods in class components
      </h3>
      <h3>My favorite color is : {col}</h3>
      <button
        onClick={() => {
          setCol("red");
        }}
      >
        Red
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setCol("block");
        }}
      >
        Block
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setCol("blue");
        }}
      >
        Blue
      </button>
    </>
  );
}
export default function App() {
  const [num, setNum] = useState(0);
  /*useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });*/
  useEffect(() => {
    let x = setTimeout(() => {
      setNum((num) => num + 1);
    }, 1000);
    return () => clearInterval(x);
  }, []);
  return (
    <div className="App">
      <Hooks />
      <h1 style={{ color: "green" }}>UsetEffect [Hook]</h1>
      <h2>
        The Number is increased to <span style={{ color: "red" }}>{num}</span>{" "}
        times
      </h2>
    </div>
  );
}
