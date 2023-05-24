import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname] = useState("");
    const changeWName = ()=>{
        setPname("TO COONTACTS")}
    
    const changeEName = ()=>{
        setPname("TO GALLERY")
        
    }
    const changeQName = ()=>{
        setPname("TO SMS")}
    const changeTName = ()=>{
        setPname("TO GAME")}    

  
    return (
    <div>
        <Button variant='contained' color='secondary' onClick={changeQName} >sms</Button>
        <br/><br/>
        <Button variant='contained' color='primary' onClick={changeWName} >contact</Button>
        <br/><br/>
        <Button variant='contained' color='error' onClick={changeEName} >gallery</Button>
        <br/><br/>
        <Button variant='contained' color='success' onClick={changeTName} >GAME</Button>
        <Typography variant='h4'>WELCOME  {pname}</Typography>
        

    </div>
  )
}

export default StateBasics