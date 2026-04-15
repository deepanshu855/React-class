import UpperCard from "./UpperCard";
import LowerCard from "./LowerCard";

const Card = (props) => {
  return (
    <div className="h-fit w-72 p-4 text-black bg-white rounded-2xl relative">
      <UpperCard profilePic={props.userData}/>
      <LowerCard userData={props.userData} deleteHandler={props.deleteHandler}/>
    </div>
  );
};

export default Card;
