    "use client";
    import useParkingStore from "../store/parkingStore";
    import { recommendations } from "../mocks/recommendations";
    export default function ParkingRecommendationList() {
    const selectedDistance = useParkingStore((s) => s.selectedDistance);

    const lots =
        (recommendations && recommendations[String(selectedDistance)]) ||
        (recommendations && recommendations.default) ||
        [];

    return (
        <div
        style={{
            width: 430,
            height: 272,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
        }}
        >
        <div
            style={{
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "Roboto, sans-serif",
            color: "#000",
            marginBottom: 12,
            }}
        >
            인근 주차장 추천
        </div>
        <div
            style={{
            display: "flex",
            gap: 12,
            overflowX: "auto",
            paddingBottom: 8,
            }}
        >
            {lots.map((lot, idx) => (
            <div
                key={lot.name + idx}
                style={{
                minWidth: 164,
                height: 224,
                backgroundColor: "#eaf7f2",
                borderRadius: 12,
                border: "1px solid #b8e5d2",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                flexShrink: 0,
                }}
            >
                <span
                style={{
                    position: "absolute",
                    left: 12,
                    top: 12,
                    fontSize: 12,
                    height: 24,
                    width: 67,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6,
                    fontWeight: 500,
                    background: "rgba(37, 89, 66, 0.7)",
                    color: "#fff",
                }}
                >
                {lot.type} 주차장
                </span>
                <div
                style={{
                    width: 164,
                    height: 164,
                    marginTop: 0,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor: "#c6eddc",
                }}
                >
                <img
                    src={lot.type === "지상" ? "/지상 주차장 1.jpg" : "/지하 주차장 1.jpeg"}
                    alt={lot.type + " 주차장"}
                    style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    }}
                />
                </div>
                <div
                style={{
                    width: 164,
                    height: 60,
                    backgroundColor: "#fff",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: 12,
                    paddingRight: 12,
                }}
                >
                <div
                    style={{
                    fontSize: 12,
                    color: "#000",
                    fontWeight: 400,
                    fontFamily: "Roboto, sans-serif",
                    textAlign: "left",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    }}
                >
                    {lot.name}
                </div>
                <div
                    style={{
                    fontSize: 14,
                    color: "#000",
                    fontWeight: 500,
                    fontFamily: "Roboto, sans-serif",
                    textAlign: "left",
                    marginTop: 4,
                    }}
                >
                    <span style={{ fontWeight: "bold" }}>{lot.distance}</span>
                    <span style={{ fontWeight: 400 }}>, </span>
                    <span style={{ fontWeight: "bold" }}>{lot.price}</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }
