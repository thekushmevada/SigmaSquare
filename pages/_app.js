import "../styles/globals.css";
import LayoutContext from "../context/LayoutContext";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App({ Component, pageProps }) {
  return (
    <LayoutContext>
      <Component {...pageProps} />
    </LayoutContext>
  );
}
