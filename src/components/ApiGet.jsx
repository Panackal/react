import { Table,TableHead,TableCell,TableContainer, TableRow, TableBody } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var [users,setUsers] = useState([]);
    useEffect(()=>{},[])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        setUsers(response.data)
        console.log(users)
    }
    )
    .catch(err=>console.log(err))
  return (
    <div style={{padding:'100px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Gmail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                
                                <TableCell>{value.username}</TableCell>
                                
                                <TableCell>{value.email}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>

            </Table>
        </TableContainer>

    </div>
  )
}

export default ApiGet