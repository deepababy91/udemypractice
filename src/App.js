import Adduser from './Components/Users/Adduser';
import './App.css';
import Userslist from './Components/Users/Userslist'
import React, {useState} from 'react';

function App() {
  const [usersList,setUsersList]=useState([]);
  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()},
      ]
    })
  }
  return (
    <div>
     <Adduser onAddUser={addUserHandler}/> 
     <Userslist users={usersList}/>
    </div>
  );
}

export default App;
