import { useState } from "react";
import "./App.css";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
