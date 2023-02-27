import React from "react";
import NavBar from "./components/Navbar";
import Title from "./components/Title";
import Body from "./components/Body";
import NewsLetter from "./components/NewsLetter"
import Donation from "./components/Donation";
import Footer from "./components/Footer";


function App() {
  return (
    
    <div>
      <NavBar/>
      <Title/>
      <Body/>
      <NewsLetter/>
      <Donation/>
      <Footer/>
    </div>

  )
}

export default App;
