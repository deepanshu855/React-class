import { useState } from "react";
import Card from "./componetns/Card";
import Form from "./componetns/Form";

const App = () => {
  // State.
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  let localData = JSON.parse(localStorage.getItem("all-users")) || [];

  let [allUsers, setAllUsers] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault();

    let newUser = [...allUsers];
    newUser.push({ name, role, description, image });
    setAllUsers(newUser);
    localStorage.setItem("all-users", JSON.stringify(newUser));

    setDescription("");
    setImage("");
    setName("");
    setRole("");
  };

  const deleteHandler = (idx) => {
    const cfrm = confirm("Are you sure you want to delete");

    if (cfrm) {
      let removeUser = [...allUsers];
      removeUser.splice(idx, 1);
      setAllUsers(removeUser);
      localStorage.setItem("all-users", JSON.stringify(removeUser));
    } else {
      
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-16">
      <h1 className="text-6xl font-bold mb-4">Enter Details</h1>
      <Form
        submitHandler={submitHandler}
        setName={setName}
        setRole={setRole}
        setDescription={setDescription}
        setImage={setImage}
      />

      <div className="cards flex flex-wrap gap-4">
        {allUsers.map((elem, idx) => {
          return (
            <Card userData={elem} key={idx} deleteHandler={deleteHandler} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
