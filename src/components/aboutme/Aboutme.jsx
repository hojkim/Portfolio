import "./aboutme.css";
import Me from "../../img/portrait2.jpg";

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
          I'm a 2022 graduate at the University of Washington's Informatics program. Sko Dawgs!
        </p>
        <p className="a-desc">
          My passion for UX/UI Design and Web Development derives from the handful of projects I have worked on 
          throughout my time in university.
        </p>
        <p className="a-desc">
          I'm driven to work with others to deploy interactable applications with simple and intuitive designs.
        </p>
      </div>
    </div>
  )
}

export default Aboutme;