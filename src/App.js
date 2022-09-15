import React, {useState} from 'react';


import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
 
  const [userList, setUserList] = useState([]);
  const AddUserHandler = (username,auserge) =>{
    setUserList((prevUserList) => {
       return [{ name: username, age: auserge, id:Math.random.toString() }, ...prevUserList];
    })
      
     
  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
