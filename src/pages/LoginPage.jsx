import React, { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import "../style/login.scss";
import { LoginInput } from "../components/Input";
import { ErrorAlert } from "../components/Alert";
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);
  const [user, setUser] = useState({
    account: '',
    password: '',
  });
  const [showError,setShowError] = useState(false);

  const loginHandler =()=>{
    const data = user.account == "" || user.password == "" ? true:false;
    setShowError(data);
    setLoading(()=>{
      return data? false:true;
    })
    if(data == false){
      routerHomePage();
    }
  }

  const routerHomePage = ()=>{
    navigate('/');
  }
  
  return (
    <div className='login_box'>
      <h1>LOGIN</h1>
      <ErrorAlert content="請輸入確認帳號或密碼輸入正確" showAlert={showError}/>
      <LoginInput 
        setUser={setUser}
      />
      <LoadingButton
          size="medium"
          onClick={loginHandler}
          loading={loading}
          variant="contained"
        >
          Log In
        </LoadingButton>
    </div>
  )
}

export default LoginPage