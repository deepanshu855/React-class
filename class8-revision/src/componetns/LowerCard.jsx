const LowerCard = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lower mb-2">
        <h2 className="mt-16 mb-2 text-center text-2xl font-bold">
          {props.userData.name}
        </h2>
        <h4 className="mb-2 text-center text-2xl text-red-500">
          {props.userData.role}
        </h4>
        <p className="text-center text-gray-600 text-large">
          {props.userData.description}
        </p>
      </div>
      <button className="px-2 py-2 rounded-xl bg-red-600 text-white cursor-pointer" onClick={(idx)=>{
        props.deleteHandler(idx)
      }}>
        Remove
      </button>
    </div>
  );
};

export default LowerCard;
