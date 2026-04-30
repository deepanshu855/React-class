import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const AllSections = () => {
  const userData = useContext(UserDataContext);

  return <div className="section">
    {userData.map((user)=>{
        return <h1>Username: {user.name}</h1>
    })}
    {console.log(userData)}
  </div>;
};

export default AllSections;
