import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a rel="noopener" href="https://vitejs.dev" target="_blank">
          A
        </a>
        <a rel="noopener" href="https://reactjs.org" target="_blank">
          B
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;