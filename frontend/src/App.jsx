import { useEffect, useState } from "react";
import { getHealth } from "./api";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    getHealth().then(data => setStatus(data.msg));
  }, []);

  return (
    <div>
      <h1>Hirecraft Frontend</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default App;