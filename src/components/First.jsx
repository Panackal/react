import React from 'react'
import { TextField, Typography } from '@mui/material';
const First = () => {
  return (
    <div><h1>joshua</h1>
    <input placeholder='name'/>
    <br/>
    <br/>
     <input type='password' placeholder='password'/>
      <br/>
      <br/> 
      <button>login</button>
      <br></br>
      <Typography variant='h1'>joshua </Typography>
      <br></br>
      <TextField variant='outlined' label='name'/> <br/><br/>
      <TextField variant='filled' label='address'/> <br/><br/>
      <TextField variant='standard' label='number'/><br/><br/>
      <button variant='contained'>submit</button><br/><br/>
      <button variant='contained'></button>
      </div>
  )
}

export default First