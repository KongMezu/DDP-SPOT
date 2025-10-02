// components/Header.jsx
export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "86px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        

        padding: "6px 20px",
        
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