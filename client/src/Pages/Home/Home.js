import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import Sections from "./Sections";
import sectionData from "./SectionLayoutConfig";
import Footer from "./Footer";

export default function Home({ showOpenAppButton }) {
  useEffect(() => {
    showOpenAppButton(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full overflow-x-clip scroll-smooth">
      <HeroSection />
      <div className="flex w-auto flex-col h-auto">
        {sectionData.map((section, i) => (
          <Sections data={section} key={i} id={i + 1} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
