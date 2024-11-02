import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MyContext from '../utils/userContext';

export const AutocompleteInput = () => {
  const { value } = useContext(MyContext); // 使用 useContext 取得上下文中的 value 和 setValue
  const [inputValue, setInputValue] = useState('');
  const [changeValue, setChangeValue] = useState({});


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(inputValue);
    }
  }

  const changeValueHandle = (e, newValue) => {
    setChangeValue(newValue)
  }
  return (
    <>
      <Autocomplete
        disablePortal
        options={value}
        getOptionLabel={(option) => option.name || ''}
        sx={{ width: 300 }}
        freeSolo
        onChange={changeValueHandle}
        renderInput={(params) =>
          <TextField
            {...params}
            label="請輸入內容..."
            variant="standard"
            onChange={
              (e) => { setInputValue(e.target.value) }}
            onKeyDown={handleKeyPress}
          />
        }
      />
    </>
  )
}
