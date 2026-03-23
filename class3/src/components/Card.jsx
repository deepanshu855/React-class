import React from "react";

const Card = (props) => {
  console.log(props)

  return (
    <div className="h-48 w-fit rounded-2xl border-5 border-pink-700 bg-white flex items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-center">
        My name is {props.name}, {props.age};
      </h1>
    </div>
  );
};

export default Card;
