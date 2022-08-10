import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
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
