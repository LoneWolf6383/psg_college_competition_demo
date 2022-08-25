import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import axios from "axios";
import { DrawerAppBar} from './components/Navbar'

export const LogInPage=()=> {
  const[username,setUserName] = useState('')
  const[password,setPassword] = useState('')
  async function handleSignIn(event) {
    event.preventDefault()
      const data = { username, password}
      const res = await axios.post(process.env.REACT_APP_NODEJS_URL+'/feedback/signin', data)
  }
}

function App(){
  return(
    <div className="login" style={{height:'100%',width:'100%'}}>
      <div className="sub-login">
        <h1 className="login_font">LOGIN</h1>
        <hr></hr><br></br>
        <label style={{fontSize:'25px'}}>USERNAME</label><br></br><br></br>
        <TextField id="filled-basic" label="Username" variant="filled" /><br></br><br></br>
        <label style={{fontSize:'25px'}}>PASSWORD</label><br></br><br></br>
        <TextField type="password" id="filled-basic" label="Password" variant="filled" required/><br></br><br></br>
        <Button variant="contained">Login</Button><br></br><br></br>
        <Button href="#text-buttons">Create An Account?</Button><br></br><br></br>
        <a href="https://www.google.com/" >Need Help?</a>
      </div>
    </div>
  );
}

export default App;
