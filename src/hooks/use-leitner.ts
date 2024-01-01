import { useProgressQuery } from "./use-progress-qurey"

export const useLeitner = ()=>{
    const progressQuery = useProgressQuery()
    const {active_cell} = progressQuery.data
    
}