import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filtering: 'todo',
    taskList: [
      {
        title: 'Make an Todo app',
        createdDate: '2022-11-10',
        doneDate: '',
        status: 'todo',
        isEditing: false,
      },
      {
        title: 'Go to work',
        createdDate: '2022-11-20',
        doneDate: '2022-11-21',
        status: 'done',
        isEditing: false,
      },
    ],
  },
  mutations: {
    ADD_TASK(state, payload) {
      state.taskList.push(payload);
    },
    CHANGE_FILTER(state, payload) {
      state.filtering = payload;
    },
  },
});
