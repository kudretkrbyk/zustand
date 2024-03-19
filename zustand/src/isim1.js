// Isimler1.js
import React, { useState, useEffect } from "react";
import useIsimStore from "./store";

const Isimler1 = () => {
  const [isimListesi1, ekleIsim1] = useIsimStore((state) => [
    state.isimListesi1,
    state.ekleIsim1,
  ]);
  const [isim, setIsim] = useState("");
  const [soyisim, setSoyisim] = useState("");

  useEffect(() => {
    // isimListesi1 değiştiğinde yeniden render et
  }, [isimListesi1]);

  const handleEkle = () => {
    ekleIsim1(isim, soyisim);
    setIsim("");
    setSoyisim("");
  };

  return (
    <div>
      <h2>İsim Ekle (Bileşen 1)</h2>
      <input
        type="text"
        placeholder="İsim"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
      />
      <input
        type="text"
        placeholder="Soyisim"
        value={soyisim}
        onChange={(e) => setSoyisim(e.target.value)}
      />
      <button onClick={handleEkle}>Ekle</button>
    </div>
  );
};

export default Isimler1;
