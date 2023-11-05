import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

import { LeftSwitchMenu, GraphBox } from './components';
import { setGrapnDataState } from '../../store/pages/graphStateSlice';
import { getGraph } from '../../service/graph';

import './graph.css';
import { GetGraphResult } from '../../service/graph/graph';

function Graph() {
  const { matter, classification, displayType, gender,data } = useSelector((state: RootState) => state.graphStateSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    getGraph({ matter, classification, displayType, gender }).then((res: GetGraphResult) => {
      dispatch(setGrapnDataState(res.result.changes));
    });
  }, [matter, classification, displayType, gender,dispatch]);

  return (
    <div className="graph">
      <LeftSwitchMenu />
      <GraphBox data={data} />
    </div>
  );
}


export default Graph;
