import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import {Route, Routes} from "react-router-dom";
import Submitted from "./routes/Submitted";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/reservations/submitted" element = {<Submitted />}/>
      </Routes>
    </>
  );
}

export default App;
