<template>
  <div id="app-wrap">
    <NavBar></NavBar>
    <main>
      <section class="section">
        <div class="container container-small align-center">
          <h3>{{ message }}</h1>
          <p>{{ apiTest }}</p>
          <p><a href="https://mustard-ui.com/" target="_blank">Mustard CSS</a></p>
        </div>
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '~/src/components/NavBar'
const apiHost = process.env.API_HOST || ''

export default {
  name: 'App',
  components: {
    NavBar
  },
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
      try {
        const res = await axios.get(`${apiHost}/api/test`)
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
