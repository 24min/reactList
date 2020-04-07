/*
 * @Author: 24min
 * @Date: 2020-04-07 22:50:15
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 23:22:20
 * @Description: file content
 */
import {HOME_COMMON} from '../action/action'
 const initState =''
const homeCommonReducer = (state=initState,action)=>{
    console.log('ssssss')
    switch(action.type){
        case HOME_COMMON:{
            return `${state}fanjf`
        }
        default:
           return state;
    }
}
 export default homeCommonReducer