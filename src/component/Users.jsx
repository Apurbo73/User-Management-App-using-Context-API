import React, { useContext } from "react";
import User from "./User";
import { userContext } from "./context/userContext";

const Users = () => {
  const {users,setUsers}= useContext(userContext)
  return (
    <div className="d-flex mx-auto container">
      {users.map(user =>
        <User
          user={user}
          key={user.id}
        />
      )}
    </div>
  );
};

export default Users;
