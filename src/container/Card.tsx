import teamWork from "../assets/cardImage/teamWork.svg";
import Label from "../component/Label";

function Card() {
  return (
    <div className="w-full bg-transparent rounded-lg border border-gold h-fit flex flex-col items-center p-4">
      <div className="w-full h-fit flex item-center justify-center rounded-lg">
        <div className="w-96">
          <img className="w-full h-full" src={teamWork} alt="teamWork" />
        </div>
      </div>
      <Label text="Team work" />
      <div className="text-lg text-center pt-6">
        Teamwork is the collaborative effort of individuals working together to
        achieve a common goal, leveraging each person&apos;s strengths and abilities
        for greater success.
      </div>
    </div>
  );
}

export default Card;
