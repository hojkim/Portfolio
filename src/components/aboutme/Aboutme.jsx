import "./aboutme.css";
import Me from "../../img/uwgrad.jpg";
import cssIcon from "../../img/css.png";
import htmlIcon from "../../img/html.png";
import jsIcon from "../../img/js.png";
import reactIcon from "../../img/react.png";
import figmaIcon from "../../img/figma.png";

const Aboutme = () => {
   return (
      <div className="a">
         <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
               <img src={Me} alt="" className="a-img" />
            </div>
         </div>
         <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
               I'm a 2021 graduate at the University of Washington's Informatics
               program. Sko Dawgs!
            </p>
            <p className="a-desc-intro">
               My goal is to be simple and efficient!
            </p>
            <p className="a-desc">
               I am passionate about designing and developing web applications
               for all types of users.
            </p>
            <p className="a-desc">
               I have the drive to work with others to deploy highly
               interactable applications with intuitive designs.
            </p>
            <div className="a-skills">
               <p className="a-skills-desc">
                  The following are languages and frameworks I am comfortably
                  proficient in:
               </p>
               <div className="a-icons">
                  <img src={htmlIcon} alt="html icon" className="a-icon" />
                  <img src={cssIcon} alt="css icon" className="a-icon" />
                  <img src={jsIcon} alt="js icon" className="a-icon" />
                  <img src={reactIcon} alt="react icon" className="a-icon" />
                  <img src={figmaIcon} alt="figma icon" className="a-icon" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Aboutme;
