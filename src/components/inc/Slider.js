import React from "react";
import Slider1 from "../images/slider1.jpg";

import Slider2 from "../images/slider2.jpg";

import Slider3 from "../images/slider3.jpg";


function Slider() {
  return (
    <section className="section">
      <div className="container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
            ></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Slider1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Oficina Edwin Freddy</h5>
                <p id="textcar">
                  {" "}
                  Especialista en Derechos Civiles.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={Slider2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Trivunales</h5>
                <p>Casos de tribunales penal y civil</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={Slider3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Divorcio Rápido</h5>
                <p>
                  Persona firmando un documento legal.
                </p>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slider;
