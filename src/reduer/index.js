/*
 * @Author: 24min
 * @Date: 2020-04-06 09:07:57
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 13:50:54
 * @Description: 最后合并的总的reducer
 */
import { combineReducers } from 'redux' 
import testReducer from './testResucer'

 
const reducer = combineReducers({
    test:testReducer
})
export default  reducer