"use client";
import Header from "../components/Header";
import ParkingMap from "../components/ParkingMap";
import ParkingInfoPanel from "../components/ParkingInfoPanel";
import RealTimeInfoScroll from "../components/RealTimeInfoScroll";
import DistanceSelector from "../components/DistanceSelector";
import ParkingRecommendationList from "../components/ParkingRecommendationList";
import useParkingStore from "../store/parkingStore";


export default function Home() {
  const { 
    showInfoPanel, 
    setShowInfoPanel, 
    selectedParkingLot,
    setSelectedParkingLot
  } = useParkingStore();

  const handleMoveRight = () => {
    if (selectedParkingLot) {
      setShowInfoPanel(true);
    } else {
      alert("먼저 지도에서 주차장을 선택해주세요.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 430,
        margin: "0 auto",
        backgroundColor: "#F8F8F8",
        gap: "24px",
        paddingBottom: "24px",
      }}
    >
      <Header />

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {showInfoPanel && selectedParkingLot ? (
          <ParkingInfoPanel onMoveLeft={() => {
            setShowInfoPanel(false);
          }} />
        ) : (
          <ParkingMap onMoveRight={handleMoveRight} />
        )}
      </div>

      <section style={{ width: '100%', padding: '0 15px', boxSizing: 'border-box' }}>
         <RealTimeInfoScroll />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <h3 style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>
          현재 위치 기준 반경 내 주차장 검색
        </h3>
        <DistanceSelector />
      </section>

      <section style={{ width: '100%', padding: '0 15px', boxSizing: 'border-box' }}>
        <ParkingRecommendationList />
      </section>
    </div>
  );
}