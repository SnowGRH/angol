import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gepel from "./pages/Gepel.js";
import Nopage from "./pages/NoPage.js";
import Rendez from "./pages/Rendez.js";
import Valaszto from "./pages/Valaszto.js";
import Layout from "./Layout.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Gepel />} />
            <Route path="Rendez" element={<Rendez />} />
            <Route path="Valaszto" element={<Valaszto />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
