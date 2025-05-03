    import { create } from "zustand";

    const useParkingStore = create((set) => ({
    selectedDistance: 1000,
    setDistance: (distance) => set({ selectedDistance: distance }),
    selectedParkingLot: {
        name: "동대문구 공영 주차장",
        occupancy: 80,
        spacesLeft: 23,
        waitTime: 15,
    },
    }));

    export default useParkingStore;
