import React from "react";

const Card = (props) => {
  return (
    <div key={props.idx} className="h-18 w-full flex items-center justify-around border-2 border-gray-400 bg-gray-700 p-8 rounded-2xl mb-1">
      <div>
        <h2 className="text-2xl">{props.name}</h2>
        <h2 className="text-2xl">{props.email}</h2>
      </div>
      <button
        className="px-4 py-2 bg-red-600 rounded-xl active:scale-[0.9] transition duration-150"
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
