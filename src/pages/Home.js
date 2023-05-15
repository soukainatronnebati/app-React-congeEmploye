import React from "react";
import Accueil from "../Components/Accueil";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import UserComponent from "../Components/UserComponent";
import EmployeComponent from "../Components/EmployeComponent";


const Home = () => {
  return (
    <div className="App">
      
      
      <Header />
      <Accueil />
      <Menu />
      <Footer />
      
      
    </div>
  );
};

export default Home;
