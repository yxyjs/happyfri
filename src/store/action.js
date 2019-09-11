export default {
  addNum({ commit, state }, id) {
    commit('REMBER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  },
  // 初始化信息
  initData({ commit }) {
    commit('INIT_DATA')
  }
}