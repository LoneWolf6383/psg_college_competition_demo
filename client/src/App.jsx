import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App(){
  return(
    <div className="login" style={{height:'100%',width:'100%'}}>
      <div className="sub-login">
        <h1 className="login_font">LOGIN</h1>
        <hr></hr><br></br>
        <label style={{fontSize:'30px'}}>USERNAME</label><br></br><br></br>
        <TextField id="outlined-basic" label="Username" variant="outlined" /><br></br><br></br>
        <label style={{fontSize:'30px'}}>PASSWORD</label><br></br><br></br>
        <TextField type="password" id="outlined-basic" label="Password" variant="outlined" required/><br></br><br></br>
        <a href="https://www.google.com/" style={{textAlign:'right'}}>Need Help?</a><br></br>
        <Button variant="contained">Login</Button><br></br><br></br>
        <Button href="#text-buttons">Create An Account?</Button>
      </div>
    </div>
  );
}

export default App;
