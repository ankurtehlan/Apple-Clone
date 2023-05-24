import React from "react";
import PreNavBar from "./Components/PreNavBar";
import NavBarLine from "./Components/NavBarLine";
import HeroSection from "./Components/HeroSection";
import HeroSectionsecond from "./Components/HeroSectionsecond";
import HeroSectionWatch from "./Components/HeroSectionWatch";
import MiddleSection from "./Components/MiddleSection";
import IncrementNumber from "./Components/IncrementNumber";

const App = () => {
  return (
    <>
      <PreNavBar />
      <NavBarLine />
      <HeroSection />
      <HeroSectionsecond />
      <HeroSectionWatch />
      <MiddleSection />
      <IncrementNumber />
    </>
  );
};

export default App;
