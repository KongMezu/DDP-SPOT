"use client";
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
    <div style={{ display: "flex", gap: 8 }}>
      {options.map((opt) => {
        const isSelected = selectedDistance === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => setDistance(opt.value)}
            type="button"
            style={{
              width: 64,
              height: 36,
              borderRadius: 10,
              backgroundColor: isSelected
                ? "rgba(137, 252, 200, 0.3)"
                : "rgba(0,0,0,0.05)",
              fontFamily: "Roboto, sans-serif",
              fontSize: 14,
              fontWeight: isSelected ? 500 : 400,
              color: "#000",
              transition: "all 0.15s ease-in-out",
              outline: "none",
              cursor: "pointer",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
