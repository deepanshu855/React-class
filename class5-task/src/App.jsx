import React, { useState } from "react";
import Washroom from "./components/Washroom";

const App = () => {
  let [gender, setGender] = useState("Male");
  const changeGender = () => {
    if (gender === "Male") {
      setGender("Female");
    } else if (gender === "Female") {
      setGender("Other");
    } else {
      setGender("Male");
    }
  };

  return (
    <div>
      <h1>Your gender is ~ {gender}</h1>
      <button onClick={changeGender}>Change Gender</button>
      <Washroom gender={gender} />
    </div>
  );
};

export default App;
