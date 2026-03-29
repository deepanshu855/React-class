import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [allUser, setAllUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    // let newUser= [...allUser]
    // newUser.push({name, email})
    let newUser = [...allUser, { name, email }];
    setAllUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <div className="h-screen w-screen bg-black text-white p-16">
      <form
        className="bg-gray-700 p-12 rounded-2xl flex items-center justify-center gap-2 mb-4 border-gray-400 border-2"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          className="p-4 text-white rounded-xl border-2 w-94"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          className="p-4 text-white rounded-xl border-2 w-94"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="p-4 bg-blue-600 rounded-xl active:scale-[0.9] transition duration-150">
          Submit
        </button>
      </form>

      <h1>
        {allUser.map((elem) => {
          return <Card name={elem.name} email={elem.email}/>
        })}
      </h1>
    </div>
  );
};

export default App;
