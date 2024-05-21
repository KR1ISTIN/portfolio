import React from "react";
import Roll from "react-reveal/Roll";

const windowWidth = window.innerWidth;

const styles = {
  img: {
    width: "auto",
    border: "2px solid lightseagreen",
    // height: "45vh",
    // width: '100%',
    height: windowWidth < 380 ? '25vh' : windowWidth < 768 ? '35vh' : '45vh',
    padding: windowWidth < 380 ? '0' : windowWidth < 768 ? '32px' : '32px',
    marginBottom: windowWidth < 400 ? '-1.5em' : windowWidth < 830 ? '19em' : '2em',
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
  },
  row: {
    justifyContent: "center",
    padding: windowWidth < 400 ? '1em 0 0 0' : windowWidth < 830 ? '5em 0' : '3.5em 0',
  }
};

export default function Home() {
  return (
    <div style={{ background: "#22222B", height: "auto" }}>
      <div style={{ paddingTop: "12%" }} class="container text-center">
        <div style={styles.row} class="row" className="row">
          <div style={styles.welcome} class="col-sm-8">
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
