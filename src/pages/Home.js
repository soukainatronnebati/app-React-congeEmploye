import React from "react";
import Accueil from "../Components/Accueil";
import Calendar from "../Components/Calendar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

const Home = () => {
  return (
    <div className="App">
      <Calendar />
      <Header />
      <Accueil />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
