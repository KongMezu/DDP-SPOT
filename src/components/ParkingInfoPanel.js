    import useParkingStore from '../store/parkingStore';

    function ParkingInfoPanel({ onMoveLeft }) {
    const { selectedParkingLot, selectPrevLot, selectNextLot } = useParkingStore();
    if (!selectedParkingLot) return null;

    return (
        <div className="relative bg-[#f7fbf9] rounded-xl shadow px-4 py-6 mb-2 flex flex-col items-center min-h-[320px]">

        <button
            onClick={onMoveLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-green-200 rounded-full w-10 h-10 flex items-center justify-center shadow"
            aria-label="지도 보기"
            type="button"
        >
            <img src="/left_move.svg" alt="왼쪽 이동" className="w-6 h-6" />
        </button>

        <div className="w-full max-w-xs mx-auto text-center">
            <div className="font-bold text-lg text-[#3b5d4f] mb-2">{selectedParkingLot.name}</div>
            <div className="divide-y divide-green-100">
            <div className="py-3">
                <div className="text-xs text-gray-400 mb-1">요금 정보</div>
                <div className="text-base font-semibold text-gray-700">{selectedParkingLot.feeInfo}</div>
            </div>
            <div className="py-3">
                <div className="text-xs text-gray-400 mb-1">운영 시간</div>
                <div className="text-base font-semibold text-gray-700">{selectedParkingLot.openingHours}</div>
            </div>
            <div className="py-3">
                <div className="text-xs text-gray-400 mb-1">주차장 유형</div>
                <div className="text-base font-semibold text-gray-700">{selectedParkingLot.type}</div>
            </div>
            <div className="py-3">
                <div className="text-xs text-gray-400 mb-1">차량 제한 정보</div>
                <div className="text-base font-semibold text-gray-700">{selectedParkingLot.limitInfo}</div>
            </div>
            </div>
        </div>

        </div>
    );
    }
    export default ParkingInfoPanel;
