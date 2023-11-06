import { render, fireEvent,waitFor } from '@testing-library/react';
import RadioGroup from './RadioGroup';
import { MATTER_SETTING, CLASSIFACTION_SETTING, DISPLAY_TYPE_SETTING } from '../../store/pages/graph/constants';

const initialData = {
  title: MATTER_SETTING.title,
  groupData: MATTER_SETTING.data,
  value: MATTER_SETTING.data[0].value,
  onChange(v: string) { },
};

test('RadioGroups test: render, content works right', () => {
  const { getByText } = render(<RadioGroup {...initialData} />);

  expect(getByText(MATTER_SETTING.title)).toBeVisible();

  MATTER_SETTING.data.forEach((item) => {
    expect(getByText(item.title)).toBeVisible();
  });

});

test('RadioGroups test: only one have inital style', () => {
  const { getByText, asFragment } = render(<RadioGroup {...initialData} />);

  expect(getByText(MATTER_SETTING.title)).toBeVisible();
  const innerText = asFragment().firstElementChild?.children[1]?.innerHTML || '';
  const activeStyle = /border: 3px solid white; outline: none;/ig
  expect(activeStyle.test(innerText)).toEqual(true);

});

test('RadioGroups test: click all radio, actived num ==> 1', async () => {
  const { getByText, asFragment } = render(<RadioGroup {...initialData} />);

  await waitFor(()=>{
    MATTER_SETTING.data.forEach((item) => {
      fireEvent.click(getByText(new RegExp('^' + item.title, 'i')));
    });
  });
 

  // test
  const innerText = asFragment().firstElementChild?.innerHTML || '';
  const activeStyle = /border: 3px solid white; outline: 2px solid rgb\(37, 99, 235\);/ig
  expect(innerText.match(activeStyle)?.length).toEqual(1);
});
