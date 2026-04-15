const Form = ({
  submitHandler,
  setName,
  setRole,
  setDescription,
  setImage,
}) => {
  return (
    <div>
      <form
        className="w-fit h-fit bg-gray-700 rounded-2xl flex items-center justify-center gap-4 flex-wrap p-4 mb-4"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter name"
            className="px-2 py-4 rounded-2xl border-2 border-gray-400 w-160 m-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter role"
            className="px-2 py-4 rounded-2xl border-2 border-gray-400 w-160 m-2"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter description"
            className="px-2 py-4 rounded-2xl border-2 border-gray-400 w-160 m-2"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="px-2 py-4 rounded-2xl border-2 border-gray-400 w-160 m-2"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <button className="px-2 py-4 rounded-2xl bg-blue-600 border-2 border-blue-700 w-3/4 cursor-pointer">
          Create Card
        </button>
      </form>
    </div>
  );
};

export default Form;
