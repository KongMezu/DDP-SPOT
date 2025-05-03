    import Header from "../components/Header";
    import ParkingMap from "../components/ParkingMap";
    import RealTimeInfoScroll from "../components/RealTimeInfoScroll";
    import DistanceSelector from "../components/DistanceSelector";
    import ParkingRecommendationList from "../components/ParkingRecommendationList";

    export default function Home() {
    return (
        <div className="min-h-screen bg-white flex justify-center">
        <div className="w-full max-w-[430px] mx-auto px-2 py-4 flex flex-col gap-4">
            <Header />
            <ParkingMap />
            <RealTimeInfoScroll />
            <DistanceSelector />
            <ParkingRecommendationList />
        </div>
        </div>
    );
    }
