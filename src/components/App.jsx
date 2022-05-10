import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const currenttime = new Date().toLocaleTimeString();
  const [state, settime] = useState(currenttime);
  function updateTime() {
    const newtime = new Date().toLocaleTimeString();
    settime(newtime);
  }

  return (
    <div className="container">
      <h1 style={{ color: "rgb(247, 215, 148)" }}>TIME</h1>
      <br />
      <h1>{state}</h1>
    </div>
  );
}

export default App;
