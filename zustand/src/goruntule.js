// Goruntule.js
import React from "react";
import useIsimStore from "./store";

const Goruntule = ({ listName }) => {
  const isimListesi = useIsimStore((state) => {
    if (listName === "1") return state.isimListesi1;
    else if (listName === "2") return state.isimListesi2;
    else return [];
  });

  return (
    <div>
      <h2>İsim Listesi {listName}</h2>
      <ul>
        {isimListesi.map((kisi, index) => (
          <li key={index}>
            {kisi.isim} {kisi.soyisim}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goruntule;
