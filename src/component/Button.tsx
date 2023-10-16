import React from "react";
import classNames from "classnames";


interface ButtonProps{
    btnActiveText: string;
    btnNonActiveText: string;
    handleClick:() => void;
    isBtnActive: boolean;
}

function Button({
    btnActiveText,
    btnNonActiveText,
    handleClick,
    isBtnActive,
}: ButtonProps)
{

const ButtonStyle = classNames("w-fit h-fit py-1 px-6 drop-shadow-transparent rounded-lg drop-shadow-4md font-pixelify text-lg z-40 active:drop-shadow-5md bg-yellow-500")

const btnText = isBtnActive ?  btnNonActiveText : btnActiveText;

 return(
    <button 
    type="button"
    className={ButtonStyle}
    style={{WebkitTapHighlightColor: "transparent"}}
    onClick={handleClick}
    >
        {btnText}
    </button>
 )
}
export default Button;
