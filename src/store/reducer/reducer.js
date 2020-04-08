/*
 * @Author: 24min
 * @Date: 2020-04-08 07:56:16
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 21:04:21
 * @Description: file content
 */
import { combineReducers } from 'redux'
const cartReducer = (state = 'state', action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (action.value) {
        return `${state}+${action.value}`
      } else {
        return `${state}@-@`
      }
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const initTestList = [{
  name: 'react',
  id: 1268439438,
  description: 'react框架'
}]

const testReducer = (state = initTestList, action) => {
  console.log('state',state)
  switch (action.type) {
    case 'CREATELIST':
      return [...state,action.value]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cartReducer,
  testReducer
})

export default rootReducer