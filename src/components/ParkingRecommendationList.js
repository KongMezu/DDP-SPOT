    import useParkingStore from "../store/parkingStore";
    import { recommendations } from "../mock/recommendations";

    export default function ParkingRecommendationList() {
    const selectedDistance = useParkingStore((s) => s.selectedDistance);
    const lots = recommendations[selectedDistance] || recommendations.default;

    return (
        <section className="mt-4">
        <h2 className="font-bold text-base mb-2 ml-1">인근 주차장 추천</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {lots.map((lot, idx) => (
            <div
                key={lot.name + idx}
                className="min-w-[180px] bg-[#eaf7f2] rounded-xl p-4 shadow flex flex-col gap-2 border border-green-100"
            >
                <span
                className={`text-xs px-2 py-1 rounded-full mb-1 w-fit ${
                    lot.type === "지상"
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-blue-100 text-blue-700 border border-blue-200"
                }`}
                >
                {lot.type} 주차장
                </span>
                <div className="bg-white rounded-lg h-20 flex items-center justify-center text-gray-400 text-xs border border-gray-100 overflow-hidden">
                {lot.image ? (
                    <img
                    src={`/${lot.image}`}
                    alt={lot.name}
                    className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <span className="text-gray-300">이미지 없음</span>
                )}
                </div>
                <div className="font-semibold text-gray-800 mt-1">{lot.name}</div>
                <div className="text-xs text-gray-500">
                {lot.distance}, {lot.price}
                </div>
            </div>
            ))}
        </div>
        </section>
    );
    }
