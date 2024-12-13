import React, { useEffect, useState } from 'react'
import "../style/componentStyle/textarea.scss";
import { postServer } from "../service/api";
import { SuccessAlert } from "./Alert";
import { getItem } from "../utils/localStorage";


function TextArea({ checkSubmit, setOpen, setSubmit }) {
  const [post, setPost] = useState("");

  const [successA, setSuccessA] = useState(false);

  useEffect(() => {
    if (!checkSubmit || !post.trim()) return setSubmit(false);
    if (checkSubmit == true) {
      setOpen(true);
      const data = {
        content: post,
        posttime: new Date(),
        userId: JSON.parse(getItem("user")).id,
        headshot: JSON.parse(getItem("user")).headshot,
        name: JSON.parse(getItem("user")).name,
        likers: [],
        followers: [],
      }
      postServer.posts(data).then(res => {
        if (res.status == 201) {
          setPost("");
          setOpen(false);
          setSuccessA(true);
          setSubmit(false);
          setTimeout(() => {
            setSuccessA(false);
          }, 2000);
        }
      }).catch(err => {
        setSuccessA(false);
      })
    }
  }, [checkSubmit])

  return (
    <>
      <SuccessAlert content={"貼文已成功送出!"} showAlert={successA} />
      <textarea
        placeholder='內容...'
        rows={5}
        value={post}
        onChange={(e) => { setPost(e.target.value) }}
        className='textarea_container'
      />
    </>
  )
}

export default TextArea