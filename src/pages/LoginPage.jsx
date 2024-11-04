import React, { useEffect, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import "../style/login.scss";
import { LoginInput } from "../components/Input";
import { ErrorAlert } from "../components/Alert";
import { useNavigate } from 'react-router-dom'
import { getServer } from "../service/api";
import { removeItem, setItem } from "../utils/localStorage";

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    account: '',
    password: '',
  });
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    removeItem("user");
    const api = getServer.users();
    setData(api);
  }, [])

  const loginHandler = () => {
    data.then(res => {
      if (res.status == 200) {
        const respomse = res.data;
        const filterData = respomse.filter(item => {
          return item.id == user.account
        })
        if (filterData.length > 0) {
          setLoading(true);
          routerHomePage();
          console.log(filterData[0]);

          const item = filterData[0]
          setItem("user", item)
        } else {
          setShowError(true)
        }
      }
    })
  }

  const routerHomePage = () => {
    navigate('/home');
    setLoading(false);
  }

  return (
    <div className='login_box'>
      <h1>LOGIN</h1>
      <ErrorAlert content="請輸入確認帳號或密碼輸入正確" showAlert={showError} />
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