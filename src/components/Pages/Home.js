import React, { useEffect, useState } from "react";
import Roll from "react-reveal/Roll";

export default function Home() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    img: {
      width: "auto",
      border: "2px solid lightseagreen",
      // height: "45vh",
      // width: '100%',
      padding: "32px",
      height: windowWidth < 450 ? "35vh" : windowWidth < 850 ? "35vh" : "45vh",
      marginBottom:
        windowWidth < 450 ? "3em" : windowWidth < 850 ? "19em" : "2em",
    },
    hello: {
      background: "#22222B",
      padding: "2em",
    },
    welcome: {
      display: "flex",
      fontSize: "2.1em",
      letterSpacing: ".5em",
      color: "lightseagreen",
      justifyContent: "center",
    },
    row: {
      justifyContent: "center",
      padding:
        windowWidth < 450 ? "2em 0" : windowWidth < 850 ? "5em 0" : "3.5em 0",
    },
    divBackground: {
      background: "#22222B",
      height: windowWidth < 450 ? "auto" : windowWidth < 850 ? "89vh" : "83vh",
    },
  };

  return (
    <div style={styles.divBackground}>
      <div class="container text-center">
        <div style={styles.row} class="row" className="row">
          <div style={styles.welcome} class="col-sm">
            <Roll left cascade>
              Welcome
            </Roll>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div style={styles.hello}>
              <h5
                style={{
                  color: "lightseagreen",
                  fontSize: "2em",
                  lineHeight: "1.3em",
                }}
              >
                H E L L O,
              </h5>
              <h2 style={{ color: "white", lineHeight: "2em" }}>
                I'm Kristin De Salme
              </h2>
              <h5 style={{ color: "lightseagreen", lineHeight: "1.8em" }}>
                | FullStack Web Developer |
              </h5>
              <p style={{ color: "white", lineHeight: "2em" }}>
                Just Trying To Squash One Bug At A Time
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div
              // class="col-4"
              style={{
                background:
                  "linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1",
              }}
            >
              <div>
                <img
                  src="./assets/photo.png"
                  alt="picture"
                  style={styles.img}
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
