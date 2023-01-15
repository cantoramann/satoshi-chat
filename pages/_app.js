import "../styles/globals.css";
import "../styles/fonts.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black min-h-screen text-white font-noto">
      <Component {...pageProps} />
    </div>
  );
}
