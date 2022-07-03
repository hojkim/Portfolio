import "./contact.css";
import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm('service_hojkim98', 'template_w14sv6v', formRef.current, 'TxzIz1uiBEMmh8jUM')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">My Contact Information</h1>
            <div className="c-info">
              <div className="c-info-item">
                <svg
                  style={{stroke: darkMode && "white"}} 
                  xmlns="http://www.w3.org/2000/svg"   
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="black" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  className="c-icon">
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +1 425 999 7731
              </div>
              <div className="c-info-item">
                <svg 
                  viewBox="0 0 20 16" 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="c-icon-email">
                    <g id="Icons" fill="none">
                      <g id="Outlined" transform="translate(-918.000000, -1220.000000)">
                        <g id="Communication" transform="translate(100.000000, 1162.000000)">
                          <g id="Outlined-/-Communication-/-email" transform="translate(816.000000, 54.000000)">
                            <g>
                              <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                              <path 
                                style={{fill: darkMode && "white"}}
                                d="M22,6 C22,4.9 21.1,4 20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 Z M20,6 L12,11 L4,6 L20,6 Z M20,18 L4,18 L4,8 L12,13 L20,8 L20,18 Z"
                                fill="black">
                              </path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                </svg>
                hojkim98@gmail.com
              </div>
              <div className="c-info-item">
              <svg 
                style={{stroke: darkMode && "white"}}
                xmlns="http://www.w3.org/2000/svg"   
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                className="c-icon">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
                Kirkland, WA
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <strong>Keep in touch!</strong> Let me know if there's a project we can work together on.
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <br></br>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <br></br>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <br></br>
              <textarea style={{backgroundColor: darkMode && "#333", border: darkMode && "1px solid black"}} rows="5" placeholder="Message" name="message" />
              <br></br>
              <button>Submit</button>
              {done && <p className="c-confirm">Your message has been sent. Thank you!</p>}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact;