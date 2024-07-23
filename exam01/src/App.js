import { Fragment } from "react";
import Buttons from "./components/Buttons";

function App() {
  const name = "아따맘마";
  return (
    <>
      {name && <h1>안녕하세요!, {name}</h1>}
      <h2>감사해~요</h2>
      <h3>잘있어요</h3>
      <div>다시만나요.</div>
      <br></br>
      <Buttons />
    </>
  );
}

export default App;