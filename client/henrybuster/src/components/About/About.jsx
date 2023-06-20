import Jose from "../../img/Jose.jpeg";
import Frankly from "../../img/Franklyn.jpg";
import Ezequiel from "../../img/Ezequiel.jpg";
import Miguel from "../../img/Miguel.jpg";
import Kevin from "../../img/Kevin.jpg";
import Saraid from "../../img/Saraid.jpg";
import Mauricio from "../../img/Mauricio.jpg";
import Franco from "../../img/Franco.jpg";
import Argentina from "../../img/Argentina.jpg";
import Mexico from "../../img/Mexico.png";
import RepublicaDominicana from "../../img/RepublicaDominicana.png";
import react1 from '../../img/React.svg.png'
import redux1 from '../../img/redux.png'
import firebase1 from '../../img/firebase.png'
import emailjs1 from '../../img/emailjs.png'
import stripe1 from '../../img/Stripe.png'
import kommunicate1 from '../../img/kommunicate.png'
import bootsrap1 from '../../img/Bootstrap_logo.svg.png'
import chart1 from '../../img/charjs.png'
import esbuild1 from '../../img/esbuild.png'
import localforage1 from '../../img/localforage.png'
import axios1 from '../../img/axios.png'
import express1 from '../../img/expr.png'
import post1 from '../../img/Postgresql.png'
import sequ1 from '../../img/sequelize.jpeg'
import dotenv1 from '../../img/dotenv.svg'
import cloudinary1 from '../../img/cloudinary.png'
import github1 from '../../img/github.png'
import render1 from '../../img/render.png'
import vercel1 from '../../img/vercel.png'
// import Logo from "../../img/Logo.png";
// import github from "../../img/github.jpg";
// import Linkedin from "../../img/Linkedin.png";
import "./icon.css";
import style from "../Styles/About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={style.container}>
      <div>
        {/* <img className={style.logoImg} src={Logo} alt="Logo" /> */}
        <h1 className={style.title}>ABOUT MOVIE PRIME</h1>
      </div>

      <div className={style.infoAbout}>
        <p className={style.description}>
          <strong className={style.strong}>
            General Objective
            </strong> <br />
            <br />
            The Movie Prime project is based on introducing
            the community to the audiovisual world, needs a  theoretical
            framework with history, film language tools, operation of the
            production process, areas involved
           
            and basic production techniques, to later apply it in the practical
            field, projecting movies in high definition as
        
            integrative activities to raise money and generate employment. It is
            aimed at people who like retro and who still buy movies in physical
            format. 
          <br />
          <br />
          <strong className={style.strong}>
            MAIN TECHNOLOGIES USED IN THIS PROYECT:
            </strong> <br />
            <br />
            <img className={style.icon} src={react1} alt="react" /> React: Library for building user interfaces. <br /><br />
            <img className={style.icon} src={redux1} alt="react" /> Redux: These libraries are used for implementing the state management . <br /><br />
            <img className={style.icon} src={firebase1} alt="firebase" /> Firebase: A set of tools and services for web and mobile app development offered by Google, used for authentication, cloud data storage, and more. <br /><br />
            <img className={style.icon} src={emailjs1} alt="emailjs" /> Emailjs: A library that allows sending emails from the client using third-party services. <br /><br />
            <img className={style.icon} src={stripe1} alt="Stripe" />Stripe: These libraries enable online payment integration using the Stripe payment platform. <br /><br />
            <img className={style.icon} src={kommunicate1} alt="kommunicate" /> Kommunicate: A chatbot plugin that enables integration of a chatbot into the application. <br /><br />
            <img className={style.icon} src={bootsrap1} alt="bootstrap" /> Bootstrap: A popular CSS framework that provides predefined styles and reusable components for design and UI. <br /><br />

            <img className={style.icon} src={chart1} alt="Chart" /> Chart.js: These libraries allow creating interactive and visually appealing charts in the application. <br /><br />
            <img className={style.icon} src={esbuild1} alt="esbuild" /> Esbuild: A fast and efficient bundling package that transforms and packages the application's source code. <br /><br />
            <img className={style.icon} src={localforage1} alt="localforage" /> Localforage: An offline data storage library that uses a localStorage-like API but with support for larger storage and improved persistence. <br /><br />
    

<img className={style.icon} src={axios1} alt="Axios" /> Axios: A promise-based HTTP client library used on the server-side for making HTTP requests. <br /><br />
<img className={style.icon} src={express1} alt="Express" /> Express: A Node.js web framework used to create the API and handle HTTP requests on the server-side. <br /><br />
<img className={style.icon} src={post1} alt="PostgreSQL" /> PostgreSQL: PostgreSQL is a database system or database engine.<br /><br />
<img className={style.icon} src={sequ1} alt="Sequelize" /> Sequelize: These libraries are used to interact with a PostgreSQL database and perform object-relational mapping (ORM) operations on the server. <br /><br />
<img className={style.icon} src={cloudinary1} alt="Cloudinary" /> Cloudinary: It is a cloud platform that offers storage and manipulation services for images and videos. <br /><br />
<img className={style.icon} src={github1} alt="Github" /> Github: It is a collaborative development platform that allows hosting and managing source code repositories, facilitating version control and teamwork. <br /><br />
<img className={style.icon} src={vercel1} alt="Vercel" /> Vercel: It is a platform for hosting and deploying static web applications and serverless functions, which integrates seamlessly with Git repositories. <br /><br />
<img className={style.icon} src={render1} alt="Render" /> Render: It is a cloud platform that provides hosting and deployment services for web applications and backend services, offering scalability and high availability. <br /><br />

	
	
        </p>
        
      </div>
      <h1 className={style.title}>ABOUT THE TEAM</h1>
 <br />
      <div className={style.content}>
        
        
        <div className={style.card}>
          <img className={style.img} src={Kevin} alt="Kevin" />
          <h3 className={style.h3About}> KEVIN REYES</h3>
          <div className="social-icons img">
            <img
              className={style.imgBandera}
              src={RepublicaDominicana}
              alt="BanderaRepublicaDominicana"
            />
            <div className={style.socialBar}>
              <Link
                to="https://github.com/kevin2003123"
                className={style.link}
                target="blanck"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              
              <Link
                to="https://www.linkedin.com/in/kevin-reyes-2a1470125/"
                className={style.link}
                target="blanck"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img className={style.img} src={Saraid} alt="Saraid" />
          <h3 className={style.h3About}> SARAID GUTIERREZ </h3>
          <div className="social-icons img">
            <img
              className={style.imgBanderaMx}
              src={Mexico}
              alt="BanderaMexico"
            />

            <div className={style.socialBar}>
              <Link
                to="https://github.com/SaraidGutierrez"
                className={style.link}
                target="blanck"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/saraidmateos23/"
                className={style.link}
                target="blanck"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img className={style.img} src={Jose} alt="jose" />
          <h3 className={style.h3About}> JOSE PEREZ </h3>
          <div className="social-icons img">
            <img
              className={style.imgBandera}
              src={Argentina}
              alt="BanderaArgentina"
            />
          </div>
          <div className={style.socialBar}>
            <Link
              to="https://github.com/Jope2022"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/jose-perez-4a4741278/"
              className={style.link}
              target="blanck"
            >
              {" "}
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
        <div className={style.card}>
          <img className={style.img} src={Frankly} alt="Frankly" />
          <h3 className={style.h3About}> FRANKLYN CASTRO</h3>
          <div className="social-icons img">
            <img
              className={style.imgBandera}
              src={RepublicaDominicana}
              alt="BanderaRepublicaDominicana"
            />
          
          <div className={style.socialBar}>
            <Link
              to="https://github.com/franklyncastro"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/franklyncastro/"
              className={style.link}
              target="blanck"
            >
              {" "}
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
          </div>
        </div>
        <div className={style.card}>
          <img className={style.img} src={Ezequiel} alt="Ezequiel" />
          <h3 className={style.h3About}> EZEQUIEL RUBIO</h3>
          <div className="social-icons img">
            <img
              className={style.imgBandera}
              src={Argentina}
              alt="BanderaArgentina"
            />
          
          <div className={style.socialBar}>
            <Link
              to="https://github.com/erubio07"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/ezequiel-rubio-97a70a266/"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
          </div>
        </div>
        <div className={style.card}>
          <img className={style.img} src={Mauricio} alt="Mauricio" />
          <h3 className={style.h3About}> MAURICIO GONGORA</h3>
          <div className="social-icons img">
            <img
              className={style.imgBanderaMx}
              src={Mexico}
              alt="BanderaMexico"
            />
          
          <div className={style.socialBar}>
            <Link
              to="https://github.com/mgongora07"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/mauricio-góngora-loria-1a9ab24b"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
          </div>
        </div>

        <div className={style.card}>
          <img className={style.img} src={Miguel} alt="Miguel" />
          <h3 className={style.h3About}> MIGUEL CASTILLO</h3>
          <div className="social-icons img">
            <img
              className={style.imgBanderaMx}
              src={Mexico}
              alt="BanderaMexico"
            />
          <div className={style.socialBar}>
            <Link
              to="https://github.com/mcastilloperez"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/mcastilloperez"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
          </div>
        </div>
        <div className={style.card}>
          <img className={style.img} src={Franco} alt="Franco" />
          <h3 className={style.h3About}> FRANCO BAUDINO</h3>
          <div className="social-icons img">
            <img
              className={style.imgBandera}
              src={Argentina}
              alt="BanderaArgentina"
            />
          
          <div className={style.socialBar}>
            <Link
              to="https://github.com/francogb98"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/franco-baudino-228115212"
              className={style.link}
              target="blanck"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
