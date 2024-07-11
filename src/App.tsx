import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import PWABadge from "./PWABadge.tsx";
import gong1 from "./assets/audio/gong1.mp3";

import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="bg-red-500 border-2 border-red-300 p-16">
        <PWABadge />
      </div>
      <div>
        <button
          class="btn bg-accent text-3xl join-item"
          onClick={() => {
            var audio = new Audio(gong1);
            audio.play();
          }}
        >
          Start
        </button>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>gong-solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
      <PWABadge />
    </>
  );
}

export default App;
