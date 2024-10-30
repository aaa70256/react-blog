import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import "../style/componentStyle/alert.scss"

export const ErrorAlert = ({ content, showAlert }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const controlData = showAlert ? true : false;
    setOpen(controlData);
  }, [showAlert])
  return (
    <>
      <Collapse in={open}>
        <Alert severity="error" variant="filled" className="error_alert">
          {content}
        </Alert>
      </Collapse>
    </>
  )
}

export const SuccessAlert = ({ content, showAlert }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (showAlert == true) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [showAlert])
  return (
    <Collapse in={open} className='success_alert_container'>
      <Alert severity="success">
        {content}
      </Alert>
    </Collapse>
  )
}