import { render, fireEvent, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { setEmail } from '../../store/userInfoSlice';

import Login from './Login';
import Layout from '../../layout/layout/Layout';

test('Login test: is rendered', () => {
  render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);

  expect(screen.getByText(/ログイン/, { selector: 'p' })).toBeVisible();
  expect(screen.getByText(/メールアドレス/)).toBeVisible();
  expect(screen.getByText(/パスワード/)).toBeVisible();
  expect(screen.getByText(/ログイン/, { selector: 'button.login-focus' })).toBeVisible();
});

test('Login test: btn click and email empty', async () => {
  render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);

  const btn = screen.getByText(/ログイン/, { selector: 'button.login-focus' })

  fireEvent.click(btn);
  expect(store.getState().userInfoState.email).toEqual('');
  expect(window.location.pathname).toEqual('/graph');
  render(<Provider store={store}><Layout /></Provider>);
  expect(document.querySelector('.layout-avatar-box>span')?.innerHTML).toEqual('');
});

test('Login test: btn click and email "a@gmail.com"', async () => {
  const email = '"a@gmail.com"'
  render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);

  act(() => {
    store.dispatch(setEmail(email));
  });
  expect(store.getState().userInfoState.email).toEqual(email);
  const btn = screen.getByText(/ログイン/, { selector: 'button.login-focus' });
  fireEvent.click(btn);
  render(<Provider store={store}><Layout /></Provider>);
  expect(screen.getByText(email).textContent).toEqual(email);
});