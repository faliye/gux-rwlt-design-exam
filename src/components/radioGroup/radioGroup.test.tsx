import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from './RadioGroup';
import { MATTER_SETTING } from '../../store/pages/graph/constants';
import { RADIO_ACTIVE_STYLE } from './constans';

const initialData = {
  title: MATTER_SETTING.title,
  groupData: MATTER_SETTING.data,
  value: MATTER_SETTING.data[0].value,
  onChange(v: string) { },
};


test('test: render RadioGroups, content works right', () => {
  const { getByText } = render(<RadioGroup {...initialData} />);

  expect(getByText(MATTER_SETTING.title)).toBeInTheDocument();

  MATTER_SETTING.data.forEach((item) => {
    expect(getByText(item.title)).toBeInTheDocument();
  });

});

test('test: only one have inital style', () => {
  const { getByText, asFragment } = render(<RadioGroup {...initialData} />);

  expect(getByText(MATTER_SETTING.title)).toBeInTheDocument();
  const innerText = asFragment().firstElementChild?.children[1]?.innerHTML || '';
  const activeStyle = /border: 3px solid white; outline: none;/ig
  expect(activeStyle.test(innerText)).toEqual(true);

});

test('test: click all radio, actived num ==> 1', () => {
  const { getByText, asFragment } = render(<RadioGroup {...initialData} />);

  MATTER_SETTING.data.forEach((item) => {
    fireEvent.click(getByText(new RegExp('^' + item.title, 'i')));
  });

  // test
  const innerText = asFragment().firstElementChild?.innerHTML || '';
  const activeStyle = /border: 3px solid white; outline: 2px solid rgb\(37, 99, 235\);/ig
  expect(innerText.match(activeStyle)?.length).toEqual(1);
});