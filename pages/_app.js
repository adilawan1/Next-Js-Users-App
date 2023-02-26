//import "../styles/globals.css";
import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer className="d-flex justify-content-center back yellow pt-3">
        RandomUserGenerator&reg;
      </footer>
    </div>
  );
}

export default MyApp;
