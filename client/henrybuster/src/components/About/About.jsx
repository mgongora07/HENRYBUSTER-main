import Jose from "../../img/Jose.jpeg";
import Frankly from "../../img/Franklyn.jpg"
import Ezequiel from "../../img/Ezequiel.jpg";
import Miguel from "../../img/Miguel.jpg";
import Kevin from "../../img/Kevin.jpg";
import Saraid from "../../img/Saraid.jpg";
import Mauricio from "../../img/Mauricio.jpg";
import Franco from "../../img/Franco.jpg";

import Argentina from "../../img/Argentina.jpg";
import Mexico from "../../img/Mexico.png";
import RepublicaDominicana from "../../img/RepublicaDominicana.png";
import Logo from "../../img/Logo.png";
import github from "../../img/github.jpg";
import Linkedin from "../../img/Linkedin.png";
import "./About.css";

export default function About(){

    return (
       <div className="containerAbout">
             <img className="logo" src={Logo} alt="Logo" />
            <h1 className="h1About">FILM PROJECT</h1>
            <div className="project-infoAbout">
                   <p className="pAbout">  <strong style={{ fontSize: '20px' }}>GENERAL OBJECTIVE:
                    The Movie Prime project is based on introducing the community to the audiovisual world,
                    needs a <br /> theoretical framework with history, film language tools,
                    operation of the production process, areas involved<br />and basic production techniques,
                    to later apply it in the practical field, projecting movies in high definition
                    as<br />integrative activities to raise money and generate employment.
                    It is aimed at people who like retro and who still buy movies in physical format. </strong> </p> 

                <div className="img-gridAbout">
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Kevin} alt="Kevin" />
                        <h3 className="h3About"> KEVIN REYES</h3>
                    <div className="social-icons img">    
                        <img className="imgenBanderaAbout" src={RepublicaDominicana} alt="BanderaRepublicaDominicana" /> 
                        <a href="https://github.com/kevin2003123">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a> 
                        <a href="https://www.linkedin.com/in/kevin-reyes-2a1470125/">
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" />  
                        </a> 
                        </div>
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Saraid} alt="Saraid" />
                        <h3 className="h3About"> SARAID GUTIERREZ </h3>
                    <div className="social-icons img">    
                        <img className="imgenBanderaAbout" src={Mexico} alt="BanderaMexico" />
                        <a href="https://github.com/SaraidGutierrez">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a>  
                        <a href="https://www.linkedin.com/in/saraidmateos23/">                        
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" />     
                        </a>
                        </div>
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Jose} alt="jose" />
                        <h3 className="h3About"> JOSE PEREZ </h3>
                      <div className="social-icons img">
                        <img className="imgenBanderaAbout" src={Argentina} alt="BanderaArgentina" />
                        <a href="https://github.com/Jope2022">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/jose-perez-4a4741278/">
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" />   
                        </a>
                        </div>
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Frankly} alt="Frankly" />
                        <h3 className="h3About"> FRANKLYN CASTRO</h3>
                    <div className="social-icons img">
                        <img className="imgenBanderaAbout" src={RepublicaDominicana} alt="BanderaRepublicaDominicana" /> 
                        <a href="https://github.com/franklyncastro">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/franklyncastro/">
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" /> 
                        </a>
                    </div>
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Ezequiel} alt="Ezequiel" />
                        <h3 className="h3About"> EZEQUIEL RUBIO</h3>
                     <div className="social-icons img">
                        <img className="imgenBanderaAbout" src={Argentina} alt="BanderaArgentina" /> 
                        <a href="https://github.com/erubio07">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a> 
                        <a href="https://www.linkedin.com/in/ezequiel-rubio-97a70a266/">
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" />  
                        </a>
                        </div>
                    </div> 
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Mauricio} alt="Mauricio" />
                        <h3 className="h3About"> MAURICIO GONGORA</h3> 
                    <div className="social-icons img">                      
                         <img className="imgenBanderaAbout" src={Mexico} alt="BanderaMexico" />
                        <a href="https://github.com/mgongora07">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a> 
                        <a href="https://www.linkedin.com/in/mauricio-góngora-loria-1a9ab24b">                        
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" /> 
                        </a>
                        </div>
                   </div>
                  
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Miguel} alt="Miguel" />
                        <h3 className="h3About"> MIGUEL CASTILLO</h3>
                    <div className="social-icons img">  
                        <img className="imgenBanderaAbout" src={Mexico} alt="BanderaMexico" />
                         <a href="https://github.com/mcastilloperez">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/mcastilloperez">                        
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" /> 
                        </a>
                        </div>
                    </div>
                    <div className="img-itemAbout">
                        <img className="imgDimensionAbout" src={Franco} alt="Franco" />
                        <h3 className="h3About"> FRANCO BAUDINO</h3>
                    <div className="social-icons img">        
                        <img className="imgenBanderaAbout" src={Argentina} alt="BanderaArgentina" />
                        <a href="https://github.com/francogb98">
                        <img className="imgenBanderaAbout" src={github} alt="github" /> 
                        </a> 
                        <a href="https://www.linkedin.com/in/franco-baudino-228115212">
                        <img className="imgenBanderaAbout" src={Linkedin} alt="Linkedin" />      
                        </a>  
                    </div>
                    </div>
                </div>
                </div>
            </div>
             );
}
