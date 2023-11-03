import { get } from "../../utils/axios"; 
import { GraphState } from "../../store/store";
import { GET_GRAPH } from "../constant";

export const getGraph = (params: Omit<GraphState,'data'>) =>{
    return get(GET_GRAPH,{
        prefecture_cd: 28,
        displayMethod: 0,
        ...params,
    })
}