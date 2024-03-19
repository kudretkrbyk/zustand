import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Isimler1 from "./isim1";
import Isimler2 from "./isim2";
import Goruntule from "./goruntule";
import useIsimStore from "./store";

function App() {
  const { initialize } = useIsimStore();
  console.log(Isimler1);

  useEffect(() => {
    initialize(); // Depoyu başlat
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Isimler1 />} />
        <Route path="/isimler2" element={<Isimler2 />} />
        <Route path="/gor" element={<Goruntule />} />
      </Routes>
    </Router>
  );
}

export default App;
