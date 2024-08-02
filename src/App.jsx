import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const [game, setGame] = useState(false);
  useEffect(() => {
    let intervalid;
    if (game && time > 0) {
      intervalid = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setGame(false);
    }
    return () => clearInterval(intervalid);
  }, [time, game]);
  function startGame() {
    setGame(true);
    setTime(10);
    setCount(0);
  }
  return (
    <>
      <h1> time : {time}</h1>
      <h1> score : {count}</h1>
      <button onClick={() => setCount(count + 1)} disabled={!game}>
        {" "}
        click me{" "}
      </button>
      <br />
      <br />
      <br />
      <button onClick={startGame} disabled={game}>start game </button>
    </>
  );
}
