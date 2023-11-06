import { render, waitFor, act, fireEvent, } from '@testing-library/react';
import LeftSwitchMenu from './LeftSwitchMenu';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import { MATTER_SETTING, CLASSIFACTION_SETTING, DISPLAY_TYPE_SETTING } from '../../../../store/pages/graph/constants';


test('LeftSwitchMenu test: title is rendered', async () => {
  const { asFragment, getByText } = render(<Provider store={store}><LeftSwitchMenu /></Provider>);
  expect(getByText(/フィルター/)).toBeVisible();
  expect(getByText(MATTER_SETTING.title)).toBeVisible();
});


test('LeftSwitchMenu test: click all CLASSIFACTION_SETTING', async () => {
  const { getByText } = render(<Provider store={store}><LeftSwitchMenu /></Provider>);

  expect(getByText(/フィルター/)).toBeVisible();
  // click 就職・進学の合計
  await waitFor(()=>{
    fireEvent.click(getByText(CLASSIFACTION_SETTING.data[0].title));
  });
  expect(store.getState().graphStateSlice.classification).toEqual('0');
  const dBtn0 = getByText(DISPLAY_TYPE_SETTING[0].data[0].title);
  expect(dBtn0).toBeVisible(); // すべての就職・進学
  await waitFor(()=>{
    fireEvent.click(dBtn0); // click  すべての就職・進学
  });
  expect(store.getState().graphStateSlice.displayType).toEqual('00');
  // click 進学
  await waitFor(()=>{
    fireEvent.click(getByText(/^進学$/));
  });
  expect(store.getState().graphStateSlice.classification).toEqual('1');
  const dBtn10 = getByText(DISPLAY_TYPE_SETTING[1].data[0].title);
  expect(dBtn10).toBeVisible(); // すべての就職・進学
  await waitFor(()=>{
    fireEvent.click(dBtn10); // click  すべての就職・進学
  });
 
  expect(store.getState().graphStateSlice.displayType).toEqual(DISPLAY_TYPE_SETTING[1].data[0].value); // 10
  const dBtn11 = getByText(DISPLAY_TYPE_SETTING[1].data[1].title);
  expect(dBtn11).toBeVisible(); // 大学進学
  await waitFor(()=>{
    fireEvent.click(dBtn11); // click  大学進学
  });
  expect(store.getState().graphStateSlice.displayType).toEqual(DISPLAY_TYPE_SETTING[1].data[1].value); // 11
  const dBtn12 = getByText(DISPLAY_TYPE_SETTING[1].data[2].title);
  expect(dBtn12).toBeVisible(); // 就職
  await waitFor(()=>{
    fireEvent.click(dBtn12); // click  就職
  });
  expect(store.getState().graphStateSlice.displayType).toEqual(DISPLAY_TYPE_SETTING[1].data[2].value); // 12

  // click 就職
  fireEvent.click(getByText(/^就職$/));
  expect(store.getState().graphStateSlice.classification).toEqual('2');
  const targetValue = DISPLAY_TYPE_SETTING[2].data[0].title;
  const parentEle2 = getByText(new RegExp('^' + DISPLAY_TYPE_SETTING[2].title + '$')).parentElement;
  expect(parentEle2?.innerHTML?.includes(targetValue)).toEqual(true); // targetValue ==就職

  // click 就職・進学の合計 again
  await waitFor(()=>{
    fireEvent.click(getByText(/就職・進学の合計/));
  });
  expect(store.getState().graphStateSlice.classification).toEqual('0');
  expect(getByText(DISPLAY_TYPE_SETTING[2].data[0].title)).toBeVisible(); // すべての就職・進学

});

test('LeftSwitchMenu test: get chart data', async () => {
  const { getByText } = render(<Provider store={store}><LeftSwitchMenu /></Provider>);
  await waitFor(()=>{
    const storeData = store.getState().graphStateSlice.data;
    expect(Array.isArray(storeData)).toEqual(true);
  });
});