import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>EDWIN</span>FREDDY
              </h3>
              <p>
                Con compromiso inquebrantable hacia la justicia,
                mi dedicación es ser su defensor incansable, brindándole soluciones legales efectivas
                y estratégicas para enfrentar cualquier desafío legal con confianza y determinación.
              </p>
              <div className="footer-icons">

                <a href="https://www.facebook.com/edwinfreddy.salvadorpomalaza" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>

                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/nosotros">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/testimonio">
                    Especialidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/blog">
                    Blog
                  </a>
                </li>

                <li className="nav-item">
                  <a className="" href="/tarifa">
                    Tarifas
                  </a>
                </li>

                <li className="nav-item">
                  <a className="" href="/contact">
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <p>
                <i className="fa-solid fa-phone-volume"></i>
                <a
                  className="invisible-link"
                  href="tel:+51970746661"
                  target="_blank"
                  alt="#"
                  rel="noopener noreferrer"
                >
                  +51 970746661
                </a>
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>
                <a
                  className="invisible-link"
                  href="mailto:abogadosalvador5706@gmail.com"
                  target="_blank"
                  alt="#"
                  rel="noopener noreferrer"
                >
                  abogadosalvador5706@gmail.com
                </a>
              </p>
              <p>
                <i className="fa-solid fa-map-location"></i>
                <a
                  className="invisible-link"
                  href="https://maps.app.goo.gl/et3BKcwTcznQ8b8V6"
                  target="_blank"
                  alt="#"
                  rel="noopener noreferrer"
                >
                  Jr.Junin 985-987 San Jeronimo de Tunán
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Derechos Reservados por Edwin Salvador Pomalaza</p>
      </div>
    </>
  );
};

export default Footer;
