<template>
  <div>
    <div class="d-flex">
      <input
        type="text"
        placeholder="e.g.: Take out the thrash"
        v-model="taskTitle"
      />
      <button @click="addTask">Add task</button>
    </div>
    <!-- <input type="datetime-local" /> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      taskTitle: '',
    };
  },
  methods: {
    ...mapMutations(['ADD_TASK']),
    addTask() {
      const date = new Date();
      const taskInfos = {
        title: this.taskTitle,
        createdDate: `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, 0)}-${date.getDay().toString().padStart(2, 0)}`,
        doneDate: '',
        status: 'todo',
        isEditing: false,
      };
      this.ADD_TASK(taskInfos);
      console.log(taskInfos.createdDate);
      this.taskTitle = '';
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-left: 0.25rem;
  white-space: nowrap;
  background-color: #faa810;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 600;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
}

.d-flex {
  margin-bottom: 1rem;
  input {
    font-weight: 600;

    &::placeholder {
      font-weight: 400;
    }
  }
}
</style>
