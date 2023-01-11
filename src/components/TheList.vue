<template>
  <div>
    <div class="filter d-flex">
      <a @click.prevent="changeFilter('todo', $event)" class="active">To do</a>
      <a @click.prevent="changeFilter('done', $event)">Done</a>
      <a @click.prevent="changeFilter('', $event)">All</a>
    </div>
    <h2 class="title">List: To do</h2>
    <div class="list">
      <Task />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Task from './TheTask.vue';

export default {
  components: {
    Task,
  },
  methods: {
    ...mapMutations(['CHANGE_FILTER']),
    changeFilter(status, e) {
      !!document.querySelector('.active') &&
        document.querySelector('.active').classList.remove('active');

      e.currentTarget.classList.add('active');

      this.CHANGE_FILTER(status);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.666);
}

.filter {
  margin: 0.5rem 0;
  a {
    padding: 0.666rem;
    display: inline-block;
    border-radius: 0.3333rem;
    color: rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: center;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    & + a {
      margin-left: 0.5rem;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.666);
      border: 1px solid rgba(0, 0, 0, 0.3);
    }

    &.active {
      background: #7da7b7;
      border-color: #7da7b7;
      color: white;
    }
  }
}

.list {
  overflow: auto;
  max-height: 50vh;
}
</style>
