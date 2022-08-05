import React from 'react'
import loader from '../assets/loader.gif'
import '../App.css'
import { Typography } from '@mui/material'

function Loader() {
  return (
    <div className='loader'>
       <div>
         <Typography
         mt={3}
         variant='h5'
         color='primary'>
            Tez is Searching For  Results<br/>
            Please wait...
            </Typography>
            </div>
            <div>
        <img alt='loading...' src={loader}/>
        </div>
    </div>
  )
}

export default Loader