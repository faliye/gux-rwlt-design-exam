export type GetGraphResultChangesData = {
    value: number,
    year: value
}

export type GetGraphResultChange = {
    label: string,
    prefCode: string,
    data: GetGraphResultChangesData[],
}

export interface GetGraphResult {
    message?: string,
    result: {
        changes: GetGraphResultChange[]
    }
}