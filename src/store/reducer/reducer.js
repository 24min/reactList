/*
 * @Author: 24min
 * @Date: 2020-04-08 07:56:16
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 12:32:03
 * @Description: file content
 */
export default (state = 'state', action) => {
    switch (action.type) {
      case 'INCREMENT':
        if(action.value){
          return `${state}+${action.value}`
        }else{
          return `${state}@-@`
        }
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }