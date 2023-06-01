import React,{ useContext }  from "react";
import { userContext } from "./context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const User = ({ user }) => {
  const {users,setUsers}= useContext(userContext);
   // handle Delete:
   const handleDeleteUser = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    toast(`id ${id} is deleted`);
    setUsers(filteredUsers);
  };
  return (
    <div className="m-4 bg-warning p-3"> 
    <ToastContainer />
      <h5>id: {user.id}</h5>
      <h6>Name: {user.userName}</h6>
      <button className="btn btn-danger mt-3" 
      onClick={()=>{handleDeleteUser(user.id)}}>Delete</button>
    </div>
  );
};

export default User;
