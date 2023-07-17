import React from "react";
import PaginaInicio from "./components/PaginaInicio";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
      </Routes>
    </div>
  );
}

export default App;
