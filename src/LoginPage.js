import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";
import "./App.css";

function LoginPage(props) {

  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
      const navigate = useNavigate();
  
      const handleChange = e => {
        e.preventDefault();
        console.log(formData);
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
      };
  
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          // const response = await axios.post('http://localhost:3000/api/users', formData);
          // console.log(response.data);
          axios.post('http://localhost:3000/api/users',formData)
          .then((response) =>{
              navigate('/welcome', { state: { name: formData.name} });
          })
          .catch((error) => 
          {
            console.error(error);
          });
  
         
        } catch (err) {
          console.error(err);
        }
        finally
        {
           
        }
      };
  
      
  
    return (
      <div className="App">
        <h1>Welcome to a demo game</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            ></input>
          </label>
          <br></br>
  
          <label>
            Email
            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            ></input>
          </label>
          <br></br>
  
          <label>
            Password
            <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            ></input>
          </label>
          <br></br>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );  

}

export default LoginPage;