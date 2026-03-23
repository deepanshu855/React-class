import React from "react";

const Card = (props) => {
  console.log(props)

  return (
    <div className="h-96 w-72 p-4 text-black bg-white rounded-2xl relative">
      <div className="h-30 w-full rounded-2xl overflow-hidden">
        <img
          className="h-full w-full"
          src={props.backgroundPic}
          alt="background"
        />
      </div>

      <div className="h-24 w-24 rounded-full bg-red-700 overflow-hidden absolute top-1/4 left-1/3">
        <img
          className="h-full w-full"
          src={props.profilePic}
          alt=""
        />
      </div>

      <div>
        <h2 className="mt-16 mb-2 text-center text-2xl font-bold">
          {props.username}
        </h2>
        <p className="text-center text-gray-600 text-large">
          {props.description}
        </p>
      </div>

      <div className="flex gap-5 justify-center bg-gray-200 rounded-2xl shadow-lg mt-4">
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">{props.like}</h3>
          <h4 className="text-gray-600">Likes</h4>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">{props.post}</h3>
          <h4 className="text-gray-600">Posts</h4>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">{props.views}</h3>
          <h4 className="text-gray-600">Views</h4>
        </div>
      </div>


    </div>
  );
};

export default Card;
