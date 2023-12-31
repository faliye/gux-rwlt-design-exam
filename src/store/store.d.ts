


export interface GlobalState{
    loading: boolean,
}

export interface UseInfoState{
    email: string,
    password: string,
}

export interface GraphState{
    matter: string,
    classification: string,
    displayType: string,
    gender: string,
    data: any[],
}

export type GraphParamsKeys = keyof Omit<GraphState, 'data'>;

export interface GraphParamsAction {
    type: string,
    payload: {
        key: GraphParamsKeys,
        value: string
    },
};