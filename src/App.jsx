import React from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Page2 from "./components/Page2";
import FrontTeches from "./components/frontTechs/FrontTeches";
import BackendTechs from "./components/backendTechs/BackendTechs";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import SocialLinks from "./components/SocilaLinks";
import CopyWrite from "./components/CopyWrite";
import CustomCursor from "./components/customeCursor/CustomCursore";
import Projects from "./components/Projects";



function App() {
  return (
    <div className="w-[100%] border">
      <CustomCursor/>
      <SocialLinks/>
      <Header />
      <Page1 />
      <Page2/>
      <FrontTeches/>
      <BackendTechs/>
      <Projects/>
      <About/>
      <ContactUs/>
      <CopyWrite/>
    </div>
  );
}

export default App;
