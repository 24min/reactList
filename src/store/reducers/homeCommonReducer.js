/*
 * @Author: 24min
 * @Date: 2020-04-07 22:50:15
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 22:57:50
 * @Description: file content
 */
import {HOME_COMMON} from '../action/action'
 const initState ='common'
const homeCommonReducer = (state=initState,action)=>{
    switch(action.type){
        case HOME_COMMON:{
            return `${state}fanjf`
        }
        default:
           return state;
    }
}
 export default homeCommonReducer