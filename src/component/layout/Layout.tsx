import {useSelector} from 'react-redux';
import { Outlet } from "react-router-dom";
import { RootState } from '../../store';

import avatar from '../../img/Avatar.svg';
import './layout.css';

function Layout(){
  const email = useSelector((state: RootState) =>state.userInfoState.email);
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
