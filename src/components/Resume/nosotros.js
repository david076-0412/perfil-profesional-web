
import React from "react";
import "./Nosotros.css";
import NosotrosApi from "./NosotrosApi.js";
import Card from "./Card";

import "../perfil/Inicio.css";
import hero from "../pic/hero.png";
import { Typewriter } from "react-simple-typewriter";

const Nosotros = () => {
  return (
    <>
      <section className="Nosotros" id="Nosotros">
        <div className="container top">
          <div className="heading text-center">
            <h4>7+ YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>

          <div className="content-section mtop d_flex">
            <div className="left">
              <div className="heading">
                <h4>2007-2010</h4>
                <h1>Education Quality</h1>
              </div>

              <div className="content">
                {NosotrosApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}

                {/*<div className='box btn_shadow'>
      <div className='title_content d_flex'>
        <div className='title'>
          <h2>Personal Portfolio April Fools</h2>
          <span>University of DVI (1997 - 2001)</span>
        </div>
        <div className='rate'>
          <button className='btn_shadow '>4.30/5</button>
        </div>
      </div>
      <hr />
      <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
    </div>*/}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h4>2007-2010</h4>
                <h1>Job Experience</h1>
              </div>

              <div className="content">
                {NosotrosApi.map((val, index) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Jone Lee</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Developer."]}
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
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
