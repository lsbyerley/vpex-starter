<template>
  <div id="app-wrap">
    <nav></nav>
    <main>
      <div class="container">
        <h1>{{ message }}</h1>
        <p>{{ apiTest }}</p>
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
      message: 'Vue, Parcel, Express Starter',
      apiTest: ''
    };
  },
  methods: {
    async getData() {
      const host = process.env.API_HOST || ''
      try {
        const res = await axios.get(`${host}/api/test`)
        this.apiTest = res.data.message
      } catch(e) {
        console.log('Error in the api')
        this.apiTest = 'api is broke!'
      }
    }
  }
};
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
