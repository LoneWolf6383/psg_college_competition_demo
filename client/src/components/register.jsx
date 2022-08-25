import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Register() {
  return (
    <div style={{fontFamily:'sans-serif'}}>
        <h1>Register</h1><hr/>
        <TextField id="filled-basic" label="First Name" variant="filled" style={{margin:'23px 0'}}/><br/>
        <TextField id="filled-basic" label="Last Name" variant="filled" style={{marginBottom:'23px'}}/><br/>
        <TextField id="filled-basic" label="User Name" variant="filled" style={{marginBottom:'23px'}}/><br/>
        <TextField id="filled-basic" label="Password" variant="filled" style={{marginBottom:'23px'}}/><br/>
        <TextField id="filled-basic" label="Confirm Password" variant="filled" style={{marginBottom:'23px'}}/><br/>  
        <Button variant="contained" style={{marginBottom:'12px'}}>Sign Up</Button><br/>
        <Button href="#text-buttons">Already have an Account?</Button>
    </div>
  )
}

export default Register;