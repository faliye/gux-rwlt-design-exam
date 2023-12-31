import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RadioGroup } from '../../../../components';
import { RootState } from '../../../../store';
import { setParamsState } from '../../../../store/pages/graph/graphStateSlice';
import { GraphParamsKeys } from '../../../../store/store';

import {
    MATTER_SETTING,
    CLASSIFACTION_SETTING,
    DISPLAY_TYPE_SETTING,
    GERDER_SETTING
} from '../../../../store/pages/graph/constants'

import './leftSwitchMenu.less';

function LeftSwitchMenu() {
    const { matter, classification, displayType, gender } = useSelector((state: RootState) => state.graphStateSlice);
    const dispatch = useDispatch();
    const [displayTypeSetting, setDisplayTypeSetting] = useState(DISPLAY_TYPE_SETTING[0]);

    const onChange = useCallback((keyName: GraphParamsKeys, v: keyof typeof DISPLAY_TYPE_SETTING | string) => {
        // classification分類を変更して、パーティションを変更して、デフォルト値をリセットする。
        if (keyName === "classification") {
            if (v) {
                setDisplayTypeSetting(DISPLAY_TYPE_SETTING[v as keyof typeof DISPLAY_TYPE_SETTING])
                dispatch(setParamsState({
                    key: 'displayType',
                    value: DISPLAY_TYPE_SETTING[v as keyof typeof DISPLAY_TYPE_SETTING].data[0].value,
                }));
            }
        }
        // 自分自身に変更パラメータを渡す。
        dispatch(setParamsState({
            key: keyName,
            value: v as string,
        }));
    }, [dispatch]);

    return (
        <div className="left-menu-box">
            <p className="left-menu-title">フィルター</p>
            <RadioGroup
                title={MATTER_SETTING.title}
                groupData={MATTER_SETTING.data}
                value={matter}
                onChange={(v) => onChange('matter', v)}
            />
            <RadioGroup
                title={CLASSIFACTION_SETTING.title}
                groupData={CLASSIFACTION_SETTING.data}
                value={classification}
                onChange={(v) => onChange('classification', v)}
            />
            <RadioGroup
                title={displayTypeSetting.title}
                groupData={displayTypeSetting.data}
                value={displayType}
                onChange={(v) => onChange('displayType', v)}
            />
            <RadioGroup
                title={GERDER_SETTING.title}
                groupData={GERDER_SETTING.data}
                value={gender}
                onChange={(v) => onChange('gender', v)}
            />
        </div>
    )
}

export default LeftSwitchMenu;