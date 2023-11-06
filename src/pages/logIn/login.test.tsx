import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { setEmail } from '../../store/userInfoSlice';
import { act } from 'react-dom/test-utils';

import Login from './Login';
import Layout from '../../layout/layout/Layout';

test('Login test: is rendered', () => {
  const { getByText } = render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);
  expect(getByText(/ログイン/, { selector: 'p' })).toBeVisible();
  expect(getByText(/メールアドレス/)).toBeVisible();
  expect(getByText(/パスワード/)).toBeVisible();
  expect(getByText(/ログイン/, { selector: 'button.login-focus' })).toBeVisible();
});

test('Login test: btn click and email empty', async () => {
  const { getByText } = render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);
  const btn = getByText(/ログイン/, { selector: 'button.login-focus' })
  await waitFor(() => {
    fireEvent.click(btn);
  });
  expect(store.getState().userInfoState.email).toEqual('');
  expect(location.pathname).toEqual('/graph');
  const { getByText : getByTextGraph } = render(<Provider store={store}><Layout /></Provider>);
  expect(document.querySelector('.layout-avatar-box>span')?.innerHTML).toEqual('');
});

test('Login test: btn click and email "a@gmail.com"', async () => {
  const email = '"a@gmail.com"'
  const { getByText,rerender } = render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);
  await waitFor(() => {
    store.dispatch(setEmail(email));
  });
  expect(store.getState().userInfoState.email).toEqual(email);
  const btn = getByText(/ログイン/, { selector: 'button.login-focus' });
  act(() => {
    fireEvent.click(btn)
  });
  const { getByText : getByTextGraph } = render(<Provider store={store}><Layout /></Provider>);
  expect(getByTextGraph(email).textContent).toEqual(email);
});