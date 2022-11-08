import "./intro.css";
import Profile from "../../img/portrait.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

   return (
      <div className="i">
         <div className="i-left">
            <div className="i-left-wrapper">
               <h1 className="i-name">Hojun Kim</h1>
               <div className="i-title">
                  <div className="i-title-wrapper">
                     <div
                        className="i-title-item"
                        style={{ color: darkMode && "#caf0f8" }}
                     >
                        UX/UI Designer
                     </div>
                     <div
                        className="i-title-item"
                        style={{ color: darkMode && "#caf0f8" }}
                     >
                        Web Developer
                     </div>
                     <div
                        className="i-title-item"
                        style={{ color: darkMode && "#caf0f8" }}
                     >
                        Data Analyst
                     </div>
                  </div>
               </div>
               <p className="i-desc">
                  I am a UX/UI Designer and Frontend Developer in Seattle, WA.
               </p>
            </div>
            <svg
               style={{ fill: darkMode && "white" }}
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 129 129"
               className="i-scroll"
               fill="black"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               enable-background="new 0 0 129 129"
            >
               <g>
                  <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
               </g>
            </svg>
         </div>
         <div className="i-right">
            <div
               className="i-bg"
               style={{ background: darkMode && "#caf0f8" }}
            ></div>
            <img src={Profile} alt="" className="i-img" />
         </div>
      </div>
   );
};

export default Intro;
