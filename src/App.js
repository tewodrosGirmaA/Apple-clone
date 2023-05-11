import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Seaction1 from "./Component/Main/Seaction-1";
import Seaction2 from "./Component/Main/Seaction-2";
import Seaction3 from "./Component/Main/Seaction-3";
import Seaction4 from "./Component/Main/Seaction-4";
import Seaction5 from "./Component/Main/Seaction-5";
import Seaction6 from "./Component/Main/Seaction-6";
import SeactionSlide from "./Component/Main/SeactionSlide";

function App() {
  return (
    <>
    <Header />
    <Seaction1 />
    <Seaction2 />
    <Seaction3 />
    <Seaction4 />
    <Seaction5 />
    <Seaction6 />
    <SeactionSlide />
    <Footer />
    </>
  )
}

export default App;
