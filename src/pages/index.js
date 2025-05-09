
        "use client";
        import Header from "../components/Header";
        import ParkingMap from "../components/ParkingMap";
        import ParkingInfoPanel from "../components/ParkingInfoPanel";
        import RealTimeInfoScroll from "../components/RealTimeInfoScroll";
        import DistanceSelector from "../components/DistanceSelector";
        import ParkingRecommendationList from "../components/ParkingRecommendationList";
        import useParkingStore from "../store/parkingStore";

        export default function Home() {
        const { showInfoPanel, setShowInfoPanel } = useParkingStore();

        return (
        <div
    style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 430,
        margin: "0 auto",
    }}
    >
    <div className="w-full flex justify-center">
        {showInfoPanel ? (
        <ParkingInfoPanel onMoveLeft={() => setShowInfoPanel(false)} />
        ) : (
        <ParkingMap onMoveRight={() => setShowInfoPanel(true)} />
        )}
    </div>

    <div style={{ marginBottom: 16 }}>
        <RealTimeInfoScroll />
    </div>

    <div style={{ marginBottom: 16 }}>
        <DistanceSelector />
    </div>

    <div style={{ marginBottom: 16 }}>
        <ParkingRecommendationList />
    </div>
    </div>


        );
        }

