export const MATTER_SETTING = {
    title: '表示内容',
    data: [
        {
            title: '地元就職',
            value: '0',
        },
        {
            title: '流出',
            value: '1',
        },
        {
            title: '流入',
            value: '2',
        },
        {
            title: '純流出',
            value: '3',
        },
    ]
};

export const CLASSIFACTION_SETTING = {
    title: '表示分類',
    data: [
        {
            title: '就職・進学の合計',
            value: '0',
        },
        {
            title: '進学',
            value: '1',
        },
        {
            title: '就職',
            value: '2',
        },
    ]
}


export const DISPLAY_TYPE_SETTING = {
    // CLASSIFACTION_ARR === 0
    0: {
        title: '表示区分',
        data: [
            {
                title: 'すべての就職・進学',
                value: '00',
            },
        ]
    },
    // CLASSIFACTION_ARR === 1
    1: {
        title: '表示区分',
        data: [
            {
                title: 'すべての就職・進学',
                value: '10',
            },
            {
                title: '大学進学',
                value: '11',
            },
            {
                title: '短期大学進学',
                value: '12',
            },
        ]
    },
    // CLASSIFACTION_ARR === 2
    2: {
        title: '表示区分',
        data: [
            {
                title: '就職',
                value: '20',
            },
        ]
    }
};

export const GERDER_SETTING = {
    title: '性別',
    data: [
        {
            title: '総数',
            value: '0',
        },
        {
            title: '男性',
            value: '1',
        },
        {
            title: '女性',
            value: '2',
        },
    ],
}