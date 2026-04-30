import React, { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const users = [
    {
      id: 1,
      name: "Aman Sharma",
      age: 20,
      email: "aman@example.com",
    },
    {
      id: 2,
      name: "Priya Verma",
      age: 22,
      email: "priya@example.com",
    },
    {
      id: 3,
      name: "Rahul Singh",
      age: 21,
      email: "rahul@example.com",
    },
    {
      id: 4,
      name: "Neha Gupta",
      age: 23,
      email: "neha@example.com",
    },
    {
      id: 5,
      name: "Karan Mehta",
      age: 24,
      email: "karan@example.com",
    },
  ];
  return (
    <UserDataContext.Provider value={users}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
