/*
 * @Author: 24min
 * @Date: 2020-04-08 07:56:16
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 08:00:30
 * @Description: file content
 */
export default (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }