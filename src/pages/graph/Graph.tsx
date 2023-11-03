import React, {
  useEffect,
  useCallback,
} from 'react';
import {useSelector} from 'react-redux';

import { 
  LeftSwitchMenu,
  GraphBox,
 } from './component';


import './graph.css';

// CustomizedLabelLineChart



function Graph(){
  useEffect(()=>{
    console.log("fetch");
  },[]);
  
  return (
    <div className="graph">
      <LeftSwitchMenu />
      <GraphBox />
    </div>
  );
}


export default Graph;
