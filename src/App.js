import React from "react";
import { Routes, Route } from "react-router";

import Home from "./Home";
import Movies from "./Movies";
import NotFound from "./NotFound"
import SingleMovie from "./SingleMovie";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
    </Routes>
  );
};

export default App;
