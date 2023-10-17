interface LabelProps{
    text: String;
}

function Label({text}:LabelProps) {
  return (
    <div className="text-3xl z-10 capitalize font-extrabold relative">
      <div className="w-8 h-8 bg-gold opacity-80 -z-10 rounded-full relative top-8 -left-[.4rem] shadow-black shadow-md before:absolute before:contents-[] before:w-6 before:h-6 before:bg-gold before:opacity-60 before:bottom-0 before:left-6 before:rounded-full before:shadow-black before:shadow-md after:contents-[] after:absolute after:w-4 after:h-4 after:bg-gold after:rounded-full after:opacity-70 after:top-0 after:left-5"/>
      {text}
    </div>
  );
}

export default Label;
