<template>
  <div class="content">
    <div class="toggle-light" @click="changeDarkMode">toggle lights</div>
    <Input />
    <List />
  </div>
</template>

<script>
import Input from '@/components/TheInput.vue';
import List from '@/components/TheList.vue';

export default {
  name: 'App',
  components: {
    Input,
    List,
  },
  methods: {
    changeDarkMode() {
      document.documentElement.classList.toggle('--dark-mode');
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;700&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --font-family: 'Hanken Grotesk', sans-serif;
  --radius: 0.333rem;
}

html {
  display: grid;
  justify-items: center;
  padding-top: 12vh;
  min-height: 100vh;
  font: 400 16px/1.3 var(--font-family);
  background-color: #f5fcff;
  color: rgba(0, 0, 0, 0.8);
  transition: background-color 0.5s ease;
}

html.--dark-mode {
  background: #0e303e;

  .toggle-light {
    color: #fff;
  }
}

.v-enter-active,
.v-leave-active {
  max-height: 400px;
  transition: all 0.75s ease;
  overflow: hidden;
}

.v-enter,
.v-leave-to {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  transition: all 0.333s ease;
}

h2 {
  font-size: 1.25rem;
}

input,
button {
  font: 400 16px var(--font-family);
  max-width: 100%;
  padding: 0.666rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;
  border-radius: var(--radius);
  color: rgba(0, 0, 0, 0.8);
}

input {
  width: 100%;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.333);
  }
}

button {
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.333);
  }
}

.toggle-light {
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.75;
}

a,
button {
  cursor: pointer;
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.rounded {
  border-radius: var(--radius);
}

.content {
  width: 400px;
  max-width: 100%;
  padding: 8%;
  border-radius: 14px;
  min-height: 75vh;
  background-color: #f5fcff;
}
</style>
