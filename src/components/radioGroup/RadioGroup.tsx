import { ChangeEvent, MouseEvent } from 'react';

import './radioGroup.css';

interface RadioGroupProps {
  title: string,
  groupData: { value: string, title: string }[],
  value: string,
  onChange: (v: string) => void,
  grap?: number | number[],
}

function RadioGroup(props: RadioGroupProps) {
  return (
    <div className="radio-Group">
      <div className="radio-Group-title">{props.title}</div>
      <div className="radio-Group-box">
        {
          props.groupData.map((item) => {
            return (
              <div
                className="radio-Group-item"
                key={item.value}
                onClick={() => props.onChange(item.value)}
              >
                <input
                  type="radio"
                  value={item.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
                  onClick={(e: MouseEvent<HTMLInputElement>) => e.stopPropagation()}
                  checked={props.value === item.value}
                />
                <span
                  className="radio-Group-item-icon"
                  style={{
                    backgroundColor: props.value === item.value ? 'rgb(37, 99, 235)' : '',
                    border: props.value === item.value ? '3px solid white' : '',
                    outline: props.value === item.value ? '2px solid rgb(37, 99, 235)' : 'none',
                  }}
                >
                  {
                    props.value === item.value ? <span /> : null
                  }
                </span>
                <span className="radio-Group-item-title">{item.title}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}


export default RadioGroup;
