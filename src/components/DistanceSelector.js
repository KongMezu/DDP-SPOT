    import useParkingStore from "../store/parkingStore";

    export default function DistanceSelector() {
    const selectedDistance = useParkingStore((s) => s.selectedDistance);
    const setDistance = useParkingStore((s) => s.setDistance);
    const options = [
        { value: 500, label: "500m" },
        { value: 1000, label: "1km" },
        { value: 2000, label: "2km" },
    ];
    return (
        <div className="flex flex-col items-center gap-1">
        <span className="text-xs text-gray-500 mb-1">
            현재 위치 기준 반경 내 주차장 검색
        </span>
        <div className="flex justify-center gap-2">
            {options.map((opt) => (
            <button
                key={opt.value}
                className={`
                px-4 py-1 rounded-full border font-semibold transition
                ${selectedDistance === opt.value
                    ? "bg-green-50 border-green-600 text-green-700"
                    : "bg-white border-green-200 text-gray-600 hover:border-green-400"}
                shadow-sm
                focus:outline-none focus:ring-2 focus:ring-green-200
                `}
                onClick={() => setDistance(opt.value)}
                type="button"
            >
                {opt.label}
            </button>
            ))}
        </div>
        </div>
    );
    }
