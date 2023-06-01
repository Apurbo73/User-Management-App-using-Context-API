import { useState } from "react";
import Users from "./component/Users";
import NewUser from "./component/NewUser";
import { userContext } from "./component/context/userContext";
function App() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Apurbo" },
    { id: 2, userName: "Deb Nath" }
  ]);
  // const handleDeleteUser = id => {
  //   const filteredUsers = users.filter(user => user.id !== id);
  //   toast(`id ${id} is deleted`);
  //   setUsers(filteredUsers);
  // };
  // const handleAddUser = newUser => {
  //   console.log(newUser);
  //   // toast("ok");
  //   setUsers(previousUsers => [...previousUsers, newUser]);
  // };
  return (
    <userContext.Provider value={{users,setUsers}}>
      <div className="text-center mt-5">
        <h4 className="text-primary">User Management App..</h4>
        <NewUser  />
        <Users />
      </div>
    </userContext.Provider>
  );
}

export default App;
