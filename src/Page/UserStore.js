import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    deletedCount: 1,
};

const mutations = {
  DELETE_USER: () => {
      //Someaction
      state.deletedCount++;
  }
};

const getters = {
    deletedCount: (state) => state.deletedCount
}

const actions = {
    delete: () => {
        store.commit('DELETE_USER')
    }
}

let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true,
});

global.userStore = store;
export default store;
