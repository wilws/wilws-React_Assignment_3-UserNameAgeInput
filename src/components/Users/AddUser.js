import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
              title: 'Invalid Input',
              message: 'Please enter a Valid input'
            });
            return
        }

        if(+enteredAge < 0 ){
          setError({
            title: "Invalid Age",
            message: "Please enter a Valid Age",
          });
            return;
        }

        setEnteredUsername(""); 
        setEnteredAge("");
        props.onAddUser(enteredUsername, enteredAge);
    }


    const usernameInputHandler = (event) =>{
        setEnteredUsername(event.target.value);  
    };

    const ageInputHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () =>{
      setError(null); 
    }

    return (
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          ></ErrorModal>
        )}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameInputHandler}
            ></input>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageInputHandler}
            ></input>
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    );
};


export default AddUser