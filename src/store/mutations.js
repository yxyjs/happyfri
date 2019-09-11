const ADD_ITEMNUM = 'ADD_ITEMNUM'
const INIT_DATA = 'INIT_DATA'
const REMBER_ANSWER = 'REMBER_ANSWER'

export default {
  // 点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num
  },

  // 记录答案
  [REMBER_ANSWER](state, id) {
    state.answerid.push(id)
  },

  // 初始化信息
  [INIT_DATA](state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = []
  }
}