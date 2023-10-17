import React, { useState } from "react";
import classNames from "classnames";

import IntroSection from "../container/IntroSection";
import Card from "../container/Card";

function HomePage() {
  const [isHighlight, setIsHighlight] = useState(false);
  const handleHighlight = () => setIsHighlight(!isHighlight);

  const homePageContainer = classNames(
    "bg-off-white w-full h-full relative px-10",
    {"overflow-hidden before:absolute before:contents-[] before:w-full before:h-full before:backdrop-blur-lg before:bg- before:inset-0 before:z-40":isHighlight}
  );

  return (
    <div className={homePageContainer}>
      <IntroSection isHighlight={isHighlight} handleClick={handleHighlight} />
      <Card/> 
    </div>
  );
}

export default HomePage;
