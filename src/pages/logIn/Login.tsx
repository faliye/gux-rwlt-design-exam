import React,{useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { setEmail, setPsd } from '../../store/userInfoSlice';

import './login.css';

function Login (){
  const navigator = useNavigate();
  const dispatch = useDispatch();
  
  // ログイン btn 
  const loginClickHandle=useCallback((e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    navigator('/graph');
  },[navigator]);
  
  // メールアドレス Inputbox
  const setEmailHandle = useCallback((v:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setEmail(v.target.value));
  },[dispatch]);

  // パスワード Inputbox
  const setPsdHandle = useCallback((v:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setPsd(v.target.value));
  },[dispatch]);

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
