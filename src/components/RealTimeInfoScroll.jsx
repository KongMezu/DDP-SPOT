        "use client";
        import useParkingStore from "../store/parkingStore";
        import DistanceSelector from "./DistanceSelector";

        export default function RealTimeInfoScroll() {
        const { selectedParkingLot } = useParkingStore();
        if (!selectedParkingLot) return null;

        const infoList = [
            { label: "주차장 점유율", value: `${selectedParkingLot.occupancy}%` },
            { label: "남은 주차 공간", value: selectedParkingLot.spacesLeft },
            { label: "예상 대기 시간", value: `${selectedParkingLot.waitTime}분` },
            { label: "혼잡 시간대", value: selectedParkingLot.peakTime || "-" },
        ];

        return (
            <section
                style={{
                width: 430,
                height: 148,
                backgroundColor: "#F8F8F8",
                padding: "16px 0 0 16px",
                boxSizing: "border-box",
            }}
            >
            {/* 타이틀 */}
            <h2
                style={{
                fontFamily: "Roboto",
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
                paddingRight: 16,
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                
            }}
    >
    {infoList.map((info) => (
            <div
                key={info.label}
                style={{
                width: 150,
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
                scrollSnapAlign: "start",
                }}
            >
                <span
              style={{
                fontSize: 14,
                fontFamily: "Roboto",
                color: "rgba(0,0,0,0.5)",
                marginBottom: 4,
              }}
            >
              {info.label}
            </span>
            <span
              style={{
                fontSize: 20,
                fontFamily: "Roboto",
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
