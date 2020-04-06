/*
 * @Author: 24min
 * @Date: 2020-04-06 13:15:02
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 14:09:40
 * @Description: file content
 */
const TEST_SECOND_HEADER = "TEST_SECOND_HEADER"
 const initState = {
     secondHeader:[]
 }
const testReducer = (state=initState,action)=>{
    switch(action.type){
        case TEST_SECOND_HEADER:{
            return {
                ...state,
                secondHeader:action.payload
            }
        }
        default:
           return state;
    }
}
 export default testReducer