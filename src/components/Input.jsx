import OutlinedInput from '@mui/material/OutlinedInput';

export const LoginInput = ({ setUser })=>{
  return (
  <>
    <div className='input_box'>
      <span>Account : </span>
        <OutlinedInput placeholder="請輸入帳號..." id="account" onChange={(e) => setUser(prev => ({
          ...prev,
          account: e.target.value
      }))}/>
    </div>
    <div className='input_box'>
      <span >Password : </span>
        <OutlinedInput placeholder="請輸入密碼..." id="password" type='password' onChange={(e) => setUser(prev => ({
          ...prev,
          password: e.target.value
      }))}/>
    </div>
  </>
)
}