import React, { useState } from "react";
import "./App.css";

function App() {
  const [userCredential, setUserCredential] = useState({
      name: '',
      pass: '',
      email: ''
  });
  
  const InputEvent = (event) => {
   
    const {name,value} = event.target;

        setUserCredential ((prevUserCredential) => {

          return {
            ...prevUserCredential,
            [name]: value,
          };
         
   })
    
  }

  const onSubmit = (event) => {
    event.preventDefault()
    alert('Form submission completed.')
  };


  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="output">
          <h4>Output</h4>
          <p>Name : {userCredential.name}</p>
          <p>Password: {userCredential.pass}</p>
          <p>Email: {userCredential.email}</p>
        </div>  
        <input
          class="form-control"
          type="text"
          placeholder="Enter Your Name"
          Value={userCredential.name}
          name="name"
          onChange={InputEvent}
          autoComplete="off"
        />

        <input
          class="form-control"
          type="password"
          placeholder="Enter Your Password"
          Value={userCredential.pass}
          name="pass"
          onChange={InputEvent}
          autoComplete="off"
        />

        <input
          class="form-control"
          type="email"
          placeholder="Enter Your Email"
          Value={userCredential.email}
          name="email"
          onChange={InputEvent}
          autoComplete="off"
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
