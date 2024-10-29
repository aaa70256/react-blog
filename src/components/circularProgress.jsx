import React, {  useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

export default function CircularIndeterminate({load}) {
  const [open,setOpen] = useState(true);
  
  useEffect(()=>{
    if(load == true){
      setOpen(true);
    }else{
      setOpen(false);
    }
  },[load])

  return (
      <Fade
      in={open}
      unmountOnExit
    >
      <div className="loading">
      <CircularProgress />
      </div>
    </Fade>
  );
}