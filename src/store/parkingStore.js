import { create } from "zustand";

const useParkingStore = create((set) => ({
  // --- 상태 (State) ---
  selectedDistance: 1000,      // 초기 반경 거리 (예: 1km)
  selectedParkingLot: null,  // 선택된 주차장 정보 (초기값 null)
  showInfoPanel: false,        // 정보 패널 표시 여부 (초기값 false)
  userLocation: null,          // 사용자 현재 위치

  // --- 상태 변경 함수 (Actions) ---
  
  /** 검색 반경 거리를 변경하는 함수 */
  setDistance: (distance) => set({ selectedDistance: distance }),

  /** 사용자가 선택한 주차장 정보를 저장하는 함수 */
  setSelectedParkingLot: (parkingLot) => set({ selectedParkingLot: parkingLot }),

  /** 주차장 상세 정보 패널의 표시 여부를 설정하는 함수 */
  setShowInfoPanel: (show) => set({ showInfoPanel: show }),

  /** 사용자의 현재 위치 좌표를 저장하는 함수 */
  setUserLocation: (location) => set({ userLocation: location }),
}));

export default useParkingStore;