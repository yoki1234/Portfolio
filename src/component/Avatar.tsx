import defaultPic from "../assets/defaulPic.jpg";

function Avatar() {
  return (
    <div className="w-60 h-60 relative drop-shadow-3md">
      <div className="w-full h-full overflow-hidden rounded-full bg-gradient-to-t from-lime-300 to-blue-300 animate-spin" />
      <img className="w-56 h-56 absolute rounded-full top-2 left-2" src={defaultPic} alt="defaultPic" />
    </div>
  );
}

export default Avatar;
