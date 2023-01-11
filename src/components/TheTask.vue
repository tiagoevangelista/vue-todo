<template>
  <div
    v-if="
      taskList.filter((item) => {
        return $store.state.filtering != ''
          ? item.status == $store.state.filtering
          : 'todo' || 'done';
      }).length > 0
    "
  >
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
        <button
          v-if="!task.doneDate"
          class="btn-done"
          @click.prevent="finishTask(task.title)"
        >
          ✔️
        </button>
        <button v-else @click="task.isEditing = !task.isEditing">👁️</button>
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
  <div v-else class="empty-list">
    Empty list <br />Create new task or change the filter
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
      const date = new Date();
      const taskIndex = this.taskList
        .map(function (task) {
          return task.title;
        })
        .indexOf(payload);
      this.taskList[taskIndex].status = 'done';
      this.taskList[taskIndex].doneDate = `${date.getFullYear()}-${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, 0)}-${date.getDay().toString().padStart(2, 0)}`;
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
.task {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: var(--radius);
  padding: 1rem;
  margin: 0.5rem 0 !important;
}

.task__info {
  display: flex;
  align-items: center;

  h2 {
    flex: 1;
    line-height: 100%;
    padding-right: 4px;
    word-break: break-word;
    cursor: pointer;
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

.empty-list {
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  padding: 1.25rem 0.5rem;
  opacity: 0.8;
  color: #00303d;
}
</style>
