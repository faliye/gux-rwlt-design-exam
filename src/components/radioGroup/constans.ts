export const RADIO_NORMAL_STYLE = {
    width: '16px',
    height: '16px',
    borderRadius: '16px',
    backgroundColor: '',
    border: '1px solid #b9b8b8',
    outline: 'none',
};

export const RADIO_ACTIVE_STYLE = {
    width: '20px',
    height: '20px',
    borderRadius: '20px',
    marginLeft: '-2px',
    backgroundColor: 'rgb(37, 99, 235)',
    border: '3px solid white',
    outline: 'none',
};

const OUTLINE_VALUE = '2px solid rgb(37, 99, 235)';

export const createStyle = (value: string, propsValue: string, isFirstMount: boolean) => {
    let styles;
    if (propsValue === value) {
      styles = {...RADIO_ACTIVE_STYLE};
      if (!isFirstMount) {
        styles.outline = OUTLINE_VALUE;
      }
    }else{
        styles = {...RADIO_NORMAL_STYLE};
    }
    return styles;
  }