import React from "react";
import Main from "./view/Main";
import NewPlayer from "./view/NewPlayer";

import {Routes, Route} from "react-router-dom";

function App() {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------



// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------



// ---------------------------------------------
// III) JSX
// ---------------------------------------------
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/new" element={<NewPlayer />}/>
        {/* <Route path="/:id" element={<SpecificAuthor />} />
        <Route path="/:id/edit" element={<UpdateAuthor />} /> */}
      </Routes>
    </div>
  );
}

export default App;
