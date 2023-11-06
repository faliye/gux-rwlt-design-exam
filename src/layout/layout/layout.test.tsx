import { render, waitFor, act } from '@testing-library/react';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { setEmail } from '../../store/userInfoSlice';


test('Layout test: title is rendered', async () => {
  const { asFragment,getByText } = render(<Provider store={store}><Layout /></Provider>);
  expect(getByText(/タイトル/)).toBeVisible();
});

test('Layout test: Avatar is rendered', async () => {
  const { asFragment } = render(<Provider store={store}><Layout /></Provider>);
  expect(asFragment().firstElementChild?.innerHTML.includes('Avatar.svg')).toEqual(true);
});

test('Layout test: userEmail is rendered', async () => {
  const { asFragment } = render(<Provider store={store}><Layout /></Provider>);
  const userEmail = 'aaa@gmail.com'

  act(() => {
    /* fire events that update state */
    expect(store.dispatch(setEmail(userEmail)));
  });

  expect(store.getState().userInfoState.email).toEqual(userEmail);
  expect(asFragment().firstElementChild?.innerHTML.includes(userEmail)).toEqual(true);
});