// components/RealTimeInfoScroll.jsx
"use client";
import useParkingStore from "../store/parkingStore";

export default function RealTimeInfoScroll() {
  const { selectedParkingLot } = useParkingStore();

  const defaultInfoList = [
    { label: "주차장 점유율", value: "80%" },
    { label: "남은 주차 공간", value: "23" },
    { label: "예상 대기 시간", value: "15분" },
  ];

  const selectedInfoList = selectedParkingLot
    ? [
        { label: "남은 주차 공간", value: selectedParkingLot.spacesLeft },
        { label: "예상 대기 시간", value: `${selectedParkingLot.waitTime}분` },
        { label: "혼잡 시간대", value: selectedParkingLot.peakTime || "-" },
      ]
    : [];

  const infoList = selectedParkingLot ? selectedInfoList : defaultInfoList;

  return (
    <section>
      <h2
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          color: "#000000",
          marginBottom: 12,
        }}
      >
        실시간 정보
      </h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 12,
          paddingBottom: 12,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {infoList.map((info) => (
          <div
            key={info.label}
            style={{
              minWidth: 120,
              height: 76,
              border: "2px solid rgba(50, 132, 59, 0.67)",
              borderRadius: 12,
              padding: 12,
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontFamily: "Roboto, sans-serif",
                color: "rgba(0,0,0,0.5)",
                marginBottom: 4,
              }}
            >
              {info.label}
            </span>
            <span
              style={{
                fontSize: 20,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                color: "#000000",
              }}
            >
              {info.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
