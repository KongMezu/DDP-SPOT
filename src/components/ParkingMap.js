    import { Map, MapMarker } from "react-kakao-maps-sdk";

    export default function ParkingMap({ onMoveRight }) {
    return (
        <div className="relative w-full h-60 bg-[#f7fbf9] rounded-xl shadow overflow-hidden flex items-center justify-center mb-2">
        <Map
            center={{ lat: 37.591, lng: 127.036 }}
            style={{ width: "100%", height: "100%" }}
            level={4}
        >
            <MapMarker position={{ lat: 37.591, lng: 127.036 }} />
        </Map>
        <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-green-200 rounded-full w-10 h-10 flex items-center justify-center shadow z-10"
            aria-label="주차장 정보 보기"
            type="button"
            onClick={onMoveRight}
        >
            <img src="/right_move.svg" alt="오른쪽 이동" className="w-6 h-6" />
        </button>
        </div>
    );
    }
