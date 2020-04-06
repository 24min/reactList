/*
 * @Author: 24min
 * @Date: 2020-04-06 13:19:51
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 14:15:26
 * @Description: file content
 */
const TEST_SECOND_HEADER = "TEST_SECOND_HEADER"

const secondHead = (init="redux初始值") => dispatch => {
    dispatch({
        type: TEST_SECOND_HEADER,
        payload: [init]
    })
}
export default secondHead