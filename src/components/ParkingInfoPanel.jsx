
    "use client";
    import useParkingStore from "../store/parkingStore";

    function ParkingInfoPanel({ onMoveLeft }) {
    const { selectedParkingLot } = useParkingStore();
    if (!selectedParkingLot) return null;

    return (
        <div
        style={{
            width: 400,
            height: 400,
            background: "rgba(137, 252, 200, 0.05)", 
            borderRadius: 16,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
        }}
        >
        <button
            style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "none", 
            border: "none",     
            boxShadow: "none",    
            padding: 0,          
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            }}
            onClick={onMoveLeft}
            aria-label="다음"
            type="button"
        >
            <img src="/left_move.svg" alt="다음" width={40} height={40} />
        </button>
        
        <div
        style={{
    width: 336,
    height: 336,
    borderRadius: 16,
    overflow: "hidden",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>

<div className="py-6">
    <div className="text-[14px] font-semibold text-black mb-1">요금 정보</div>
    <div className="text-[12px] text-black/80 leading-relaxed whitespace-pre-line">
      {selectedParkingLot.feeInfo}
    </div>
  </div>
  <hr className="border-t border-[#d2e5d9] mx-2" />
  <div className="py-6">
    <div className="text-[14px] font-semibold text-black mb-1">운영 시간</div>
    <div className="text-[12px] text-black/80">{selectedParkingLot.openingHours}</div>
  </div>
  <hr className="border-t border-[#d2e5d9] mx-2" />
  <div className="py-6">
    <div className="text-[14px] font-semibold text-black mb-1">주차장 유형</div>
    <div className="text-[12px] text-black/80">{selectedParkingLot.type}</div>
  </div>
  <hr className="border-t border-[#d2e5d9] mx-2" />
  <div className="py-6">
    <div className="text-[14px] font-semibold text-black mb-1">차량 제한 정보</div>
    <div className="text-[12px] text-black/80">{selectedParkingLot.limitInfo}</div>
            </div>
        </div>
        </div>
    );
    }

    export default ParkingInfoPanel;
