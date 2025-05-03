    import useParkingStore from "../store/parkingStore";

    export default function RealTimeInfoScroll() {
    const { selectedParkingLot } = useParkingStore();
    if (!selectedParkingLot) return null;

    const infoList = [
        { label: "주차장 점유율", value: `${selectedParkingLot.occupancy}%` },
        { label: "남은 주차 공간", value: selectedParkingLot.spacesLeft },
        { label: "예상 대기 시간", value: `${selectedParkingLot.waitTime}분` },
    ];

    return (
        <section className="w-full mb-2">
        <div className="flex gap-2">
            {infoList.map((info) => (
            <div
                key={info.label}
                className="flex-1 bg-white border border-green-400 rounded-lg p-3 flex flex-col items-center text-center shadow-sm"
            >
                <span className="text-xs text-gray-500 mb-2">{info.label}</span>
                <span className="text-lg font-bold text-green-700">{info.value}</span>
            </div>
            ))}
        </div>
        </section>
    );
    }
