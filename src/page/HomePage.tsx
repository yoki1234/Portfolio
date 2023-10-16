import React, { useState } from "react";
import classNames from "classnames";

import IntroSection from "../container/IntroSection";

function HomePage() {
  const [isHighlight, setIsHighlight] = useState(false);
  const handleHighlight = () => setIsHighlight(!isHighlight);

  const homePageContainer = classNames(
    "bg-off-white w-full h-full relative px-10",
    {"before:absolute before:contents-[] before:w-full before:h-full before:bg-gradient-to-t before:from-gold before:to-black before:opacity-80 before:inset-0 before:z-10":isHighlight}
  );

  return (
    <div className={homePageContainer}>
      <IntroSection isHighlight={isHighlight} handleClick={handleHighlight} />
    </div>
  );
}

export default HomePage;
