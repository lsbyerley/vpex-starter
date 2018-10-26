<template>
  <div>
    <nav></nav>
    <main>
      <div class="container">
        <h1>{{ message }}</h1>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
    this.getData()
  },
  data() {
    return {
      message: 'Cron Zone',
    };
  },
  methods: {
    async getData() {
      const res = await axios.get('http://localhost:3000/api/test')
      console.log(res.data)
    }
  }
};
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
