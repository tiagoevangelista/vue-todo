<template>
  <div>
    <div
      class="task"
      v-for="(task, index) in taskList.filter((item) => {
        return $store.state.filtering != ''
          ? item.status == $store.state.filtering
          : 'todo' || 'done';
      })"
      :key="index"
    >
      <div class="task__info">
        <h2 class="title" @click="task.isEditing = !task.isEditing">
          {{ task.title }}
        </h2>
        <button class="btn-done" @click.prevent="finishTask(task.title)">
          ✔️
        </button>
      </div>
      <Transition mode="out-in">
        <div v-if="task.isEditing">
          <div class="task__meta">
            <label>
              <strong>Created: </strong>
              <input type="date" :value="task.createdDate" disabled />
            </label>
            <label v-if="task.doneDate">
              <strong>Done: </strong>
              <input type="date" :value="task.doneDate" disabled />
            </label>
            <div class="task__editing d-flex">
              <button class="btn-delete" @click="deleteTask(task.title)">
                Delete
              </button>
              <button @click="task.isEditing = !task.isEditing">Finish</button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: this.$store.state.taskList,
    };
  },
  methods: {
    finishTask(payload) {
      const taskIndex = this.taskList
        .map(function (task) {
          return task.title;
        })
        .indexOf(payload);
      this.taskList[taskIndex].status = 'done';
    },
    deleteTask(payload) {
      if (
        window.confirm(
          `Are you sure you want to delete "Make a to do list app" task?`,
        )
      ) {
        const taskIndex = this.taskList
          .map(function (task) {
            return task.title;
          })
          .indexOf(payload);
        console.log(taskIndex);
        this.taskList.splice(taskIndex, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.task + .task {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.085);
}

.task__info {
  display: flex;
  align-items: center;

  h2 {
    flex: 1;
    line-height: 100%;
    padding-right: 4px;
    word-break: break-word;
  }
}

.task__meta {
  margin-top: 0.5rem;
  label {
    margin-bottom: 0.5rem;
    font-size: 85%;

    input {
      font-size: 100%;
      padding: 0.5em 0.75em;
      margin-bottom: 1rem;
    }

    strong {
      width: 30%;
    }
  }
}

.task__editing {
  button + button {
    margin-left: 0.5rem;
  }

  button {
    width: 50%;
  }
}

.btn-done {
  margin-left: auto;
}

.btn-delete {
  background-color: #fd2f2f;
  font-weight: 600;
  color: #fff;
}
</style>
