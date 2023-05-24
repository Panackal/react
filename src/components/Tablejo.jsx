import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Tablejo = () => {
  var[names,setName]=useState(["jo","jojo","po"])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                      <TableCell style={{color:"greenyellow",fontSize:"60px"}}>name</TableCell>
                      <TableCell style={{color:"blue",fontSize:"60px"}}>age</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
  )  
}

export default Tablejo