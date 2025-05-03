    import Script from "next/script";
    import "../styles/globals.css";

    export default function App({ Component, pageProps }) {
    return (
        <>
        <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
            strategy="beforeInteractive"
        />
        <Component {...pageProps} />
        </>
    );
    }
