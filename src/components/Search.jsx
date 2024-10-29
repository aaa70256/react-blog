import React from 'react'
import Input from '@mui/material/Input';

function Search() {
  return (
    <>
      <Input
        id="standard-adornment-weight"
        aria-describedby="standard-weight-helper-text"
        className='home_search'
        placeholder='請輸入搜尋內容...'
      />
    </>
  )
}

export default Search