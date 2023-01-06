<template>
  <div class="content">
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

body,
html {
  display: grid;
  justify-items: center;
  padding-top: 4rem;
  min-height: 100vh;
  font: 400 16px/1.3 var(--font-family);
  background-color: #f5fcff;
  color: rgba(0, 0, 0, 0.8);
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
  width: 360px;
  max-width: 100%;
}
</style>
