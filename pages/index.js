import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe Ai</title>
        <meta
          name="description"
          content="A simple Next.js application using Geist UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div className="container-fluid">
          <div className="row">
            {/* Side panel */}
            <div
              className="col-md-3"
              style={{
                backgroundColor: "#F4E3D7",
                minHeight: "100vh",
                position: "relative",
              }}
            >
              <div>
                <img
                  src="/Recipeify.svg"
                  alt="Logo"
                  width={370}
                  height={147}
                  className="img-fluid mx-auto d-block"
                ></img>
                {/* <div style={{ position: "absolute", bottom: "20px", right: 0 }}>
                  <img
                    src="/pizza1.svg"
                    alt="Logo"
                    width={352.42}
                    height={366.66}
                    className="img-fluid mx-auto d-block"
                  ></img>
                  <img
                    src="/pizza2.svg"
                    alt="Logo"
                    width={352.42}
                    height={366.66}
                    className="img-fluid mx-auto d-block"
                  ></img>
                </div> */}

                {/* Pizza 1 di pojok kanan bawah */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "315px",
                    right: 0,
                    width: "60%",
                    maxWidth: "200px",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <img
                    src="/pizza1.svg"
                    alt="Pizza 1"
                    style={{ width: "100%", height: "auto", display: "block" }}
                    className="img-fluid"
                  />
                </div>

                {/* Pizza 2 di pojok kiri bawah */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: 0,
                    width: "60%",
                    maxWidth: "200px",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src="/pizza2.svg"
                    alt="Pizza 2"
                    style={{ width: "100%", height: "auto", display: "block" }}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Main chat */}
            <div className="col-md-9">
              <h1>kebiasaan</h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
