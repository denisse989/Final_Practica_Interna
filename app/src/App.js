import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from './App1.js';
import App2 from './App2.js';
import Votos from './Votos.js';
import Votos2 from './Votos2.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/second" element={<App2 />} />
          <Route path="/votos" element={<Votos />} />
          <Route path="/votos2" element={<Votos2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
