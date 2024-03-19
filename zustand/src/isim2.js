// Isimler2.js
import React, { useState } from "react";
import useIsimStore from "./store";
import { useEffect } from "react";

const Isimler2 = ({ handleEkle }) => {
  const [isim, setIsim] = useState("");
  const [soyisim, setSoyisim] = useState("");

  const [isimListesi2, isimListesi1, ekleIsim2] = useIsimStore((state) => [
    state.isimListesi2,
    state.ekleIsim2,
  ]);
  useEffect(() => {
    console.log("isimler1", isimListesi1);
    console.log("isimler2", isimListesi2);
    // isimListesi1 değiştiğinde yeniden render et
  }, [isimListesi2, isimListesi2]);

  const handleEkleClick = () => {
    handleEkle(isim, soyisim); // handleEkle fonksiyonunu props olarak alarak çağır
    setIsim("");
    setSoyisim("");
    console.log("fonk geldş");
  };

  return (
    <div>
      <h2>İsim Ekle (Bileşen 2)</h2>
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
      <button onClick={handleEkleClick}>Ekle</button>
    </div>
  );
};

export default Isimler2;
