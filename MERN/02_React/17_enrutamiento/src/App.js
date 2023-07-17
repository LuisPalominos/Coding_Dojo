import React from "react";
import {Routes, Route,Navigate,useParams} from "react-router-dom";


const Home = () => { 
  return (
    <h1>Welcome</h1>
  );
}

const Anything = () => {
  const { id, color, background } = useParams();

  const style = {};
  if (color) {
    style.color = color;
  }
  if (background) {
    style.background = background;
  }

  if (!isNaN(id)) {
    return (
      <h1 style={Object.keys(style).length > 0 ? style : null}>
        The Number is {id}!
      </h1>
    );
  } else {
    return (
      <h1 style={Object.keys(style).length > 0 ? style : null}>
        The Word is {id}!
      </h1>
    );
  }
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id/:color?/:background?" element={<Anything />} />
      </Routes>
    </div>
  );
}

export default App;