import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { setEmail, setPsd } from '../../reduxModel/store/globalState';

import './login.css';


function Login (){
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const loginClickHandle=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    navigator('/graph')
  }
  
  //
  const setEmailHandle = (v:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setEmail(v.target.value));
  }

  //
  const setPsdHandle = (v:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setPsd(v.target.value));
  }

  return (
    <div className="login">
      <form className="login-box">
        <p className="login-input-title">ログイン</p>
        <label htmlFor="email" className="login-input-box">
          <span>メールアドレス</span>
          <input 
            id="email" 
            type="text" 
            className="login-focus"
            onChange={setEmailHandle}
          />
        </label>
        <label htmlFor="password" className="login-input-box">
          <span>パスワード</span>
          <input 
            id="password" 
            type="password" 
            className="login-focus"
            onChange={setPsdHandle}
             />
        </label>
        <button 
          className="login-btn login-focus"
          onClick={loginClickHandle}
          >
            ログイン
          </button>
      </form>
    </div>
  );
} 


export default Login;
