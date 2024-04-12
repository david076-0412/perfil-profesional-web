// eslint-disable-next-line
import React from "react";
import Slider from "../inc/Slider.js";
import { Link } from "react-router-dom";
import VMC from "../inc/Vmc.js";



import Service1 from "../images/civil.jpg";
import Service2 from "../images/penal.jpg";

import Service3 from "../images/familiar.jpg";
import Service4 from "../images/laboral.jpg";
import Service5 from "../images/administrativo.jpg";



import "./Inicio.css";
import hero from "../pic/hero.png";

import { Typewriter } from "react-simple-typewriter";

import consex from "../pic/consex.jpg";


const Inicio = () => {

  return (
    <div>
      <Slider />

      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Abogado Legal de la mas alta calidad</h3>
            <h1>
              Hola, Yo soy <span>Edwin Salvador Pomalaza</span>
            </h1>
            <h2>
              un
              <span>
                <Typewriter
                  words={[" Profesional en derechos civiles.", " y penales."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Como abogado comprometido, mi objetivo es brindarle asesoramiento legal sólido y personalizado para resolver sus problemas con eficacia.
              Con experiencia en diversas áreas del derecho, me esfuerzo por proteger sus derechos y alcanzar soluciones justas. Confíe en mi dedicación para representarlo con integridad y profesionalismo en cada etapa del proceso legal.
              Estoy aquí para defender sus intereses y lograr resultados positivos para usted.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Redes Sociales</h4>
                <div className="button">
                  <button className="btn_shadow">

                    <a href="https://www.facebook.com/edwinfreddy.salvadorpomalaza" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>


                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>Redes Sociales</h4>
                <button className="btn_shadow">
                  <i className="fa-brands fa-linkedin"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fa-brands fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-headding">Consulte su expediente</h3>
              <div className="underline mx-auto"></div>
              <p>
                Si desea consultar el estado de su expediente, haga click aquí:
              </p>
              <div className="right">
                <div className="right_img">

                  <img src={consex} alt="" width="900" height="500" />

                </div>
              </div>
              <h3></h3><a
                href="https://cej.pj.gob.pe/cej/forms/busquedaform.html"
                target="_blank"
                rel="noopener noreferrer" className="btn btn-warning shadow"
              >
                Consulte su expediente
              </a>


            </div>
          </div>
        </div>
      </section >

      <><VMC /><section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Mis Especialidades</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom"
                  alt="Services" />
                <div className="card-body">
                  <h6> Civil</h6>
                  <div className="underline"></div>
                  <p> El derecho civil se ocupa de las relaciones legales
                    entre individuos y regula aspectos como contratos, propiedad, familia y responsabilidad civil.</p>
                  <Link className="btn btn-warning shadow">
                    ver mas
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service2}
                  className="w-100 border-bottom"
                  alt="Services" />
                <div className="card-body">
                  <h6>Penal</h6>
                  <div className="underline"></div>
                  <p> El derecho penal se enfoca en normas y sanciones que regulan conductas delictivas,
                    estableciendo responsabilidades penales y penas para aquellos que violan la ley penal.</p>
                  <Link className="btn btn-warning shadow">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service3}
                  className="w-100 border-bottom"
                  alt="Services" />
                <div className="card-body">
                  <h6>Familiar</h6>
                  <div className="underline"></div>
                  <p>El derecho familiar aborda cuestiones legales relacionadas con la familia,
                    como matrimonio, divorcio, custodia de hijos, adopción y pensiones alimenticias.</p>

                  <Link className="btn btn-warning shadow">

                    ver mas
                  </Link>
                </div>
              </div>
            </div>

            <h6></h6>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service4}
                  className="w-100 border-bottom"
                  alt="Services" />
                <div className="card-body">
                  <h6>Laboral</h6>
                  <div className="underline"></div>
                  <p>El derecho laboral se ocupa de las relaciones jurídicas entre empleadores y empleados,
                    regulando aspectos como contratos laborales,
                    condiciones de trabajo, salarios, y resolución de conflictos laborales.</p>
                  <Link className="btn btn-warning shadow">
                    ver mas
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service5}
                  className="w-100 border-bottom"
                  alt="Services" />
                <div className="card-body">
                  <h6>Administrativo</h6>
                  <div className="underline"></div>
                  <p>El derecho administrativo regula la organización y funcionamiento de la administración pública,
                    estableciendo normas para la toma de decisiones, actuación de autoridades y el ejercicio de potestades
                    administrativas.</p>
                  <Link className="btn btn-warning shadow">
                    ver mas
                  </Link>
                </div>
              </div>
            </div>









          </div>
        </div>
      </section></>














    </div >
  );
};

export default Inicio;
