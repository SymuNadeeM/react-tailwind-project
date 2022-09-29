import React from "react";
import Analysis from "./Components/Analysis";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Tips from "./Components/Tips";

function App() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <Analysis/>
     <Tips/>
     <Card/>
     <Footer/>
    </>
  );
}

export default App;
