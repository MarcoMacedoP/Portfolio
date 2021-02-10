import React from "react";
import "../styles/global.scss";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
