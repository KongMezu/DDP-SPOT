        "use client";
        import { useEffect, useRef, useState } from "react";
        import Script from "next/script";
        import useParkingStore from "../store/parkingStore";
        import { parkingLots } from "../mocks/parkingLots";

        export default function ParkingMap({ onMoveRight }) {
        const mapRef = useRef(null);
    const [naverLoaded, setNaverLoaded] = useState(false);
    const setShowInfoPanel = useParkingStore((s) => s.setShowInfoPanel);
    const setSelectedParkingLot = useParkingStore((s) => s.setSelectedParkingLot);

    useEffect(() => {
        if (!naverLoaded || !window.naver || !mapRef.current) return;

        const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.570377, 127.009155),
        zoom: 16,
        minZoom: 13,
        zoomControl: false,
        });

        parkingLots.forEach((lot) => {
        const marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(lot.lat, lot.lng),
            map,
            icon: {
            url: `/${lot.pin}`,
            size: new window.naver.maps.Size(48, 48),
            anchor: new window.naver.maps.Point(24, 48),
            },
            title: lot.name,
        });

        window.naver.maps.Event.addListener(marker, "mouseover", () => {
            marker.setIcon({
            url: `/${lot.pin}`,
            size: new window.naver.maps.Size(48, 48),
            anchor: new window.naver.maps.Point(24, 48),
            });
        });
        window.naver.maps.Event.addListener(marker, "mouseout", () => {
            marker.setIcon({
            url: `/${lot.pin}`,
            size: new window.naver.maps.Size(48, 48),
            anchor: new window.naver.maps.Point(24, 48),
            });
        });

        window.naver.maps.Event.addListener(marker, "click", () => {
            setSelectedParkingLot(lot);
            setShowInfoPanel(true);
        });
        });
    }, [naverLoaded, setSelectedParkingLot, setShowInfoPanel]);

   return (
    <div
      style={{
        position: "relative", // 로고 절대 위치 기준
        width: 400,
        height: 400 + 50, // 로고 공간 고려 여유
        margin: "auto",
        paddingTop: 50, // 로고와 겹치지 않도록 아래로 밀기
      }}
    >
      {/* 로고를 지도 위쪽에 고정 */}
      <img
        src="/logo.svg"
        alt="DDP Spot"
        style={{
          position: "absolute",
          top: 0,
          left: 16,
          width: "62.14px",
          height: "73.89px",
          objectFit: "contain",
          zIndex: 10,
        }}
      />

        <div
        style={{
            width: 400,
            height: 400,
            background: "rgba(137, 252, 200, 0.05)", // #89FCC8 5%
            borderRadius: 16,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
        }}
        
        
        >
        <Script
            strategy="afterInteractive"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
            onReady={() => {
            console.log("Naver Maps API script loaded with ncpKeyId");
            setNaverLoaded(true);
            }}
            onError={(e) => {
            console.error("Naver Maps API script loading error:", e);
            }}
        />
        <div
            ref={mapRef}
            style={{
            width: 336,
            height: 336,
            borderRadius: 16,
            overflow: "hidden",
            }}
        />
        <button
            style={{
            position: "absolute",
            right: 16,
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
            onClick={onMoveRight}
            aria-label="다음"
            type="button"
        >
            <img src="/right_move.svg" alt="다음" width={40} height={40} />
        </button>
        </div>
        </div>
    );
    }