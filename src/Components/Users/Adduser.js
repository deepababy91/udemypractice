import React,{useState} from 'react'
import Card from '../UI/Card'
import classes from './Adduser.module.css'
import Button from '../UI/Button'
import Errormodal from '../UI/Errormodal'


const Adduser= (props) => {
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();
 const addHandler=(event)=>{
     event.preventDefault();
     if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){//validation
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age(non-empty values)'
        });
         return;
     }
     if(+enteredAge<1){//entered age is a number
        setError({
            title:'Invalid age',
            message:'Please enter a valid age(>0)'
        })
         return;
     }
    props.onAddUser(enteredUsername,enteredAge);
     setEnteredUsername('');//resetting
     setEnteredAge('');
 }
 const usernameChangeHandler=(event)=>{
 setEnteredUsername(event.target.value);
 }
 const ageChangeHandler=(event)=>{
 setEnteredAge(event.target.value);
 }
const errorHandler=()=>{
    setError(null);
}
    return (
        <div>
        {error && <Errormodal 
            title={error.title} 
            message={error.message} 
            onConfirm={errorHandler}/>}
        
        <Card className={classes.input}>
        <form onSubmit={addHandler}>
        <label htmlFor="username">Usersname</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age(Years) </label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
        </form>
        </Card>
         </div>   
        
    )
}

export default Adduser
