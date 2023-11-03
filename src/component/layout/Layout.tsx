import {useSelector} from 'react-redux';
import { Outlet } from "react-router-dom";


import avatar from '../../img/Avatar.svg';
import './layout.css';

// CustomizedLabelLineChart



function Layout(props:any){
  const email = useSelector((state: any) =>state.userInfoState.email);
  console.log(props)
  return (
    <div className="layout">
      <header className="layout-header">
        <span className="layout-header-title">タイトル</span>
        <div className="layout-avatar-box">
          <img src={avatar} className="layout-avatar" alt="avatar" />
          <span>
            {email}
          </span>
        </div>
      </header>
      <div id="layout-main">
        <Outlet />
      </div>
    </div>
  );
}


export default Layout;
