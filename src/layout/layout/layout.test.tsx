import { render, act, screen } from '@testing-library/react';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { setEmail } from '../../store/userInfoSlice';


test('Layout test: title is rendered', async () => {
  render(<Provider store={store}><Layout /></Provider>);
  expect(screen.getByText(/タイトル/)).toBeVisible();
});

test('Layout test: Avatar is rendered', async () => {
  const { asFragment } = render(<Provider store={store}><Layout /></Provider>);
  expect(asFragment().firstElementChild?.innerHTML.includes('Avatar.svg')).toEqual(true);
});

test('Layout test: userEmail is rendered', async () => {
  const { asFragment } = render(<Provider store={store}><Layout /></Provider>);
  const userEmail = 'aaa@gmail.com';

  act(() => {
    store.dispatch(setEmail(userEmail));
  });

  expect(store.getState().userInfoState.email).toEqual(userEmail);
  expect(asFragment().firstElementChild?.innerHTML.includes(userEmail)).toEqual(true);
});