import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'


const Stateeg1 = () => {
    var [pname,setPname]= useState("GOOD MNG");
    var [val,setVal]= useState()
    const inputHandler = (e)=>{
        setInterval(e.target.value);
        console.log(val)
    }
    const changeName=()=>
    {
        setPname(val)
        setVal("")
    }
  return (
    <div>
        <Typography variant='h4'>WELCOME{pname}</Typography>
        <TextField variant='outlined' value={val} label='Name' onChange={inputHandler}/>
        <br/><br/>
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default Stateeg1