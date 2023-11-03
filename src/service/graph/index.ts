import { get } from "../../utils/axios";
import { GraphState } from "../../store/store";
import { GET_GRAPH } from "../constant";
import { GetGraphResult } from "./graph";

export const getGraph = (params: Omit<GraphState, 'data'>): Promise<GetGraphResult> => {
    return get<GetGraphResult>(GET_GRAPH, {
        prefecture_cd: 28,
        displayMethod: 0,
        ...params,
    })
}