import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";



function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState(false);

  const onSubmit = (data) => {
      axios.post("http://localhost:3001/users/login", {username:username, password:password}).then((response) => {
        if (!response.data.auth) {setLoginStatus(false)}
        else {
          localStorage.setItem("token", response.data.token);
          setLoginStatus(true);
        }
      // console.log(navigate("/"));
      });
    };
    //
    const userAutenticated = () => {
      axios.get("http://localhost:3001/users/isUserAuth", {
        headers: {
          "x-access-token" : localStorage.getItem("token")
        }}).then((response) => {
          console.log(response);
        })
    };
  return (
    <div className='form-page'>
      <div className='main-form'>
        <input type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
        <input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)}/>
        <button onClick={username && password ? onSubmit : null}>Login</button>
        
      </div>
      {loginStatus && <button onClick={userAutenticated}>Check authentication</button>}
    </div>
  );
}; 
export default Login