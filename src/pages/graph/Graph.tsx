import React from 'react';
import {useSelector} from 'react-redux'


import avatar from '../../img/Avatar.svg';
import './graph.css';

// CustomizedLabelLineChart



function Graph(){
  const email = useSelector((state: any) =>state.globalState.email);
  return (
    <div className="graph">
      <header className="graph-header">
        <span className="graph-header-title">タイトル</span>
        <div className="graph-avatar-box">
          <img src={avatar} className="graph-avatar" alt="avatar" />
          <span>
            {email}
          </span>
        </div>
      </header>
    </div>
  );
}


export default Graph;
