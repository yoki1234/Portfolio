import Lottie from "lottie-react";
import classNames from "classnames";

import myMan from "../animation/index";
import Button from "../component/Button";

interface IntroSectionProps {
  isHighlight: boolean;
  handleClick: () => void;
}

function IntroSection({ isHighlight, handleClick }: IntroSectionProps) {

  const contentContainerStyle = classNames(
    "w-full bg-gold pl-6 pr-4 py-6 rounded-lg drop-shadow-4md",
    {
      "h-fit overflow-hidden": isHighlight === false,
      "h-fit relative z-40":
        isHighlight === true,
    }
  );

  const contentStyle = classNames(
    "bg-gold w-full h-[17rem]",
    {
      "overflow-hidden": isHighlight === false,
      "overflow-x-hidden gold-thin-scroll pr-6": isHighlight === true,
    }
  )

  return (
    <div className="flex flex-col w-full h-full relative items-center justify-center gap-6 md:flex-row md:items-start">
      <Lottie
        animationData={myMan}
        className="relative before:absolute before:contents-[] before:w-full before:h-full before:-top-4 before:left-0 before:bg-peppermint before:opacity-0 before:rounded-full before:animate-pulse"
        style={{
          width: "25rem",
          height: "25rem",
          placeItems: "center",
          zIndex: 2,
        }}
      />
      <div className="flex flex-col items-center w-full md:w-1/2 gap-6 py-5 md:items-end">
        <div className={contentContainerStyle}>
          <div className={contentStyle}>
            <div className="font-pixelify text-[1.56rem]">
              <p>
                <span className="text-3xl text-red-700">W</span>elcome to the
                digital showcase of a web developer with two years of hands-on
                experience, where innovation and creativity converge with
                technical expertise to create exceptional online experiences. In
                this carefully curated portfolio, you will find a collection of
                projects that reflect not only my journey but also my passion
                for crafting web solutions that are both functional and visually
                appealing.
              </p>
              <br />
              <br />
              <p>
                Each project in this portfolio tells a unique story of
                problem-solving, creativity, and dedication. From responsive,
                mobile-friendly designs to intuitive user interfaces and
                seamless functionality, my work is a testament to my ability to
                transform concepts into dynamic, interactive digital
                experiences. I take pride in delivering websites that not only
                meet clients&apos; goals but also exceed their expectations.
              </p>
            </div>
          </div>
        </div>

        <Button
          handleClick={handleClick}
          isBtnActive={isHighlight}
          btnActiveText="Read more"
          btnNonActiveText="Got it"
        />
      </div>
    </div>
  );
}
export default IntroSection;
