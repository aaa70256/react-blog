import React, { useState } from 'react'
import "../style/posts.scss"
import TextArea from '../components/TextArea'
import Button from '@mui/material/Button';
import CircularIndeterminate from '../components/circularProgress';


function PostPage() {
  const [checkSubmit,setSubmit] = useState(false);
  const [open,setOpen] = useState(false);

  return (
    <div className='post_container'>
      <CircularIndeterminate load={open} />
      <p>發布文章</p>
      <div className='post_content'>
        <TextArea checkSubmit={checkSubmit} setOpen={setOpen} setSubmit={setSubmit}/>
        <Button variant="contained" onClick={()=>{setSubmit(true)}}>送出</Button>
      </div>
    </div>
  )
}

export default PostPage