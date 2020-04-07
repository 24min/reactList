/*
 * @Author: 24min
 * @Date: 2020-04-06 09:07:57
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 23:28:11
 * @Description: 最后合并的总的reducer
 */
import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import homeCommonReducer from './homeCommonReducer'
console.log('sssss')
const reducer = combineReducers({
    // home: homeReducer,
    homeCommon: homeCommonReducer
})
export default reducer