import { render,screen, waitFor } from '@testing-library/react';
import Graph from './Graph';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { setGrapnDataState } from '../../store/pages/graph/graphStateSlice';

const mockData = {
  "changes": [
    {
      "label": "兵庫県",
      "prefCode": "28",
      "data": [
        {
          "year": 2000,
          "value": 47.5
        },
        {
          "year": 2001,
          "value": 44.1
        },
        {
          "year": 2002,
          "value": 31
        },
        {
          "year": 2003,
          "value": 41.6
        },
        {
          "year": 2004,
          "value": 30
        },
        {
          "year": 2005,
          "value": 39.8
        },
        {
          "year": 2006,
          "value": 31.8
        },
        {
          "year": 2007,
          "value": 47
        },
        {
          "year": 2008,
          "value": 50.9
        },
        {
          "year": 2009,
          "value": 27.4
        },
        {
          "year": 2010,
          "value": 34.3
        },
        {
          "year": 2011,
          "value": 30.1
        },
        {
          "year": 2012,
          "value": 42.3
        },
        {
          "year": 2013,
          "value": 69.8
        },
        {
          "year": 2014,
          "value": 33.2
        },
        {
          "year": 2015,
          "value": 65.7
        },
        {
          "year": 2016,
          "value": 51.7
        },
        {
          "year": 2017,
          "value": 61.6
        },
        {
          "year": 2018,
          "value": 42.2
        },
        {
          "year": 2019,
          "value": 85.9
        },
        {
          "year": 2020,
          "value": 54.7
        }
      ]
    }
  ]
};

test('Graph test: Graph is rendered', async () => {
  render(<Provider store={store}><Graph /></Provider>);
  expect(screen.getByText(/フィルター/)).toBeVisible();

  await waitFor(() => {
    Promise.resolve(mockData).then(res => {
      store.dispatch(setGrapnDataState(res.changes))
    })
  });
  expect(store.getState().graphStateSlice.data).toEqual(mockData.changes)
});