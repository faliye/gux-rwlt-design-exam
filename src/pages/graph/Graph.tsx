import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { LeftSwitchMenu, GraphBox} from './component';
import { getGraph } from '../../service/graph';

import './graph.css';

function Graph(){
  const {matter,classification,displayType,gender} = useSelector((state:RootState )=>state.graphStateSlice);
  useEffect(()=>{
    getGraph({matter,classification,displayType,gender}).then(res=>console.log(res));
    console.count()
  },[matter,classification,displayType,gender]);

  return (
    <div className="graph">
      <LeftSwitchMenu />
      <GraphBox />
    </div>
  );
}


export default Graph;
