import { useState, useCallback } from 'react';
import { createStyle } from './constans';

import './radioGroup.less';


interface RadioGroupProps {
  title: string,
  groupData: { value: string, title: string }[],
  value: string,
  onChange: (v: string) => void,
  grap?: number | number[],
}

function RadioGroup(props: RadioGroupProps) {
  // 最初の読み込み スタイルが異なる　outlineがない
  const [isFirstMount, setIsFirstMount] = useState<boolean>(true);
  const createStyleHandler = useCallback(createStyle, []);
  const onClickHandler = useCallback((value: string) => {
    props.onChange(value);
    setIsFirstMount(false);
  }, [props]);

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
                onClick={onClickHandler.bind(null, item.value)}
              >
                <input
                  type="radio"
                  value={item.value}
                />
                <span
                  className="radio-Group-item-icon"
                  style={createStyleHandler(item.value, props.value, isFirstMount)}
                >
                  {
                    props.value === item.value && <span />
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
