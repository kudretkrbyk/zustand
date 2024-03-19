import create from "zustand";

const useIsimStore = create((set) => ({
  isimListesi1: [],
  isimListesi2: [],
  ekleIsim1: (isim, soyisim) =>
    set((state) => ({
      ...state,
      isimListesi1: [...state.isimListesi1, { isim, soyisim }],
    })),
  ekleIsim2: (isim, soyisim) =>
    set((state) => ({
      ...state,
      isimListesi2: [...state.isimListesi2, { isim, soyisim }],
    })),
  initialize: () => {
    const storedData = JSON.parse(localStorage.getItem("isimListesi"));
    if (storedData) {
      set(storedData);
    }
  },
}));

export default useIsimStore;
