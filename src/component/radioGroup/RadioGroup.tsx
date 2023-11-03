import { ChangeEvent } from 'react';
// import {useSelector} from 'react-redux';

import './radioGroup.css';

interface RadioGroupProps {
  title: string,
  groupData: { value: string, title: string }[],
  value: string,
  onChange: (v: ChangeEvent<HTMLInputElement>) => void,
  grap?: number | number[],

}

function RadioGroup(props: RadioGroupProps) {
  return (
    <div className="radio-Group">
      <div>{props.title}</div>
      <div className="radio-Group-box">
        {
          props.groupData.map((item) => {
            return <div className="radio-Group-item" key={item.value}>
              <input
                type="radio"
                value={item.value}
                onChange={props.onChange}
                checked={props.value === item.value}
              />
              <span>{item.title}</span>
            </div>
          })
        }
      </div>
    </div>
  );
}


export default RadioGroup;
