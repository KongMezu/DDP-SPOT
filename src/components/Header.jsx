    // components/Header.jsx
    export default function Header() {
    return (
        <header
        style={{
            width: "430px",
            height: "86px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "6px 0 0 100px", // 위쪽 여백 6px, 왼쪽 여백 20px 조절
            boxSizing: "border-box",
        }}
        >
        <img
            src="/logo.svg"
            alt="DDP Spot"
            style={{
            width: "62.14px",
            height: "73.89px",
            objectFit: "contain",
            }}
        />
        </header>
    );
    }
