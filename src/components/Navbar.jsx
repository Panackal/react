import { AppBar,Button, Toolbar, Typography, colors } from '@mui/material';

import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography color={'red'} sx={{ felsxGrow:1}} align='left' fontSize={'60px'}>PANACKAL</Typography>
                   
                    <Button variant='text'><Link to={'/'}>home</Link></Button>
                    <Button variant='text'><Link to={'/first'}>first</Link></Button>
                    <Button variant='text'><Link Link to={'/table'}>table</Link></Button>
                    <Button variant='text'><Link Link to={'/axois'}></Link>ApiGet</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar