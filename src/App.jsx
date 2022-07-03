import './app.css';
import React, { useContext } from "react";
import Aboutme from "./components/aboutme/Aboutme";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from './context';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ 
      backgroundColor: darkMode ? "#1d2023" : "white", 
      color: darkMode && "white",
      }} 
      className="container"
    >
      <Toggle/>
      <div className="section"><Intro/></div>
      <div className="section"><Aboutme/></div>
      <div className="section"><ProductList/></div>  
      <div className="section"><Contact/></div>
    </div>
  );
};

export default App;
