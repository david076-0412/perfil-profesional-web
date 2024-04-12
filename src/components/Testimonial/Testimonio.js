// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";

import Service1 from "../images/civil.jpg";
import Service2 from "../images/penal.jpg";

import Service3 from "../images/familiar.jpg";
import Service4 from "../images/laboral.jpg";
import Service5 from "../images/administrativo.jpg";


import "./Testimonio.css";

const Testimonio = () => {
    return (
        <div>

            <section className="section bg-c-light border-top">
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
            </section>





        </div>

    );
}



export default Testimonio;