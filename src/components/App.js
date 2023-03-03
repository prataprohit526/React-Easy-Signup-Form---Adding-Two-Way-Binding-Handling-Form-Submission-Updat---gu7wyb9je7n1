import React from 'react'
import { useState } from 'react';
import { signUpFormValidation } from '../utils/validation'
import '../styles/App.css';


const App = () => {
  const [state,setState]=useState({
    name : "",
    email : "",
    password : "",
  })

  const [error,setError]=useState({
    name : "",
    email : "",
    password : "",
  })

  const inputChange= (e) =>{
    let key=e.target.name;
    let value=e.target.value;
    setState({
      ...state,
      [key]:value,
    })
  }
  const submitForm = (e) =>{
    e.preventDefault();
    setError(signUpFormValidation(state))
  }
  
  return (
    <div id="main">
    <form>
      <label htmlFor='name'>Enter Name:</label>
      <input type={'text'} id="name" name="name" onChange={inputChange}></input>
      <div>{error.name}</div>
      <label htmlFor='email'>Enter Email:</label>
      <input type={'email'} id="email" name="email" onChange={inputChange}></input>
      <div>{error.email}</div>
      <label htmlFor='password'>Enter Password:</label>
      <input type={'password'} id="password" name="password" onChange={inputChange}></input>
      <div>{error.password}</div>
      <label htmlFor='consent'>Consent</label>
      <input type={'checkbox'} id="consent" unchecked="true"></input>
      <button type='submit' onClick={submitForm}>SingUp</button>
    </form>
    </div>

  )
}


export default App;