import Jose from "../../img/Jose.jpeg";
import Frankly from "../../img/Frankly.jpg"
import Ezequiel from "../../img/Ezequiel.jpg";
import Miguel from "../../img/Miguel.jpg";
import Kevin from "../../img/Kevin.jpg";
 import Saraid from "../../img/Saraid.jpg";
import Mauricio from "../../img/Mauricio.jpg";
import Franco from "../../img/Franco.jpg";

import Argentina from "../../img/Argentina.jpg"
import Mexico from "../../img/Mexico.png"
import RepublicaDominicana from "../../img/RepublicaDominicana.png"
import Logo from "../../img/Logo.jpg"
import "./About.css"

export default function About(){

    return (
       <div className="containerAbout">
             <img className="logoAbout" src={Logo} alt="Logo" /> 
            <h1 className="h1About">PROYECTO DE CINE</h1>
            <div className="project-infoAbout">
                   <p className="pAbout">  <strong style={{ fontSize: '20px' }}>OBJETIVO GENERAL:
                    El proyecto HenryBuster se basa en introducir a la comunidad en el mundo audiovisual,
                    proporcionando un <br /> marcos teórico con historia, herramientas del lenguaje cinematográfico,
                    funcionamineto del proceso productivo, área involucradas<br />y técnicas básicas  de realización,
                    para posteriormente aplicarlo en el campo práctico, proyectando peliculas en alta definicion
                    como<br />actividades integradoras  para recaudar dinero y generar empleo.
                    Esta dirigido a personas que les gusta lo retro y que todavía compran películas en formato físico. </strong> </p> 

                <div className="img-gridAbout">
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Kevin} alt="Kevin" />
                        <h3> KEVIN REYES</h3>
                        <img className="imgenBanderaAbout" src={RepublicaDominicana} alt="BanderaRepublicaDominicana" /> 
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Saraid} alt="Saraid" />
                        <h3> SARAID GUTIERREZ </h3>
                        <img className="imgenBanderaAbout" src={Mexico} alt="BanderaMexico" />
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Jose} lt="jose" />
                        <h3> JOSE PEREZ </h3>
                        <img className="imgenBanderaAbout" src={Argentina} alt="BanderaArgentina" />                      
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Frankly} alt="Frankly" />
                        <h3> FRANKLYN CASTRO</h3>
                        <img className="imgenBanderaAbout" src={RepublicaDominicana} alt="BanderaRepublicaDominicana" />
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Ezequiel} alt="Ezequiel" />
                        <h3> EZEQUIEL RUBIO</h3>
                        <img className="imgenBanderaAbout" src={Argentina} alt="BanderaArgentina" /> 
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Mauricio} alt="Mauricio" />
                        <h3> MAURICIO GONGORA</h3> 
                        <img className="imgenBanderaAbout" src={Mexico} alt="BanderaMexico" />
                    </div>
                  
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Miguel} alt="Miguel" />
                        <h3> MIGUEL CASTILLO</h3>
                        <img className="imgenBanderaAbout" src={Mexico} alt="BanderaMexico" />
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Franco} alt="Franco" />
                        <h3> FRANCO BAUDINO</h3>
                        <img className="imgenBanderaAbout" src={Argentina} alt="BanderaArgentina" />
                    </div>
                </div>
                </div>
            </div>
        
            );
}
