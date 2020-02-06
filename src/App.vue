<template>
  <div class="flex flex-col min-h-screen app-wrap">
    <NavBar></NavBar>
    <main class="flex-1">
      <div class="py-20 hero">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-white">
            {{ message }}
          </h2>

          <div v-if="!apiError">
            <button class="bg-green-600 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              {{ apiMessage }}
            </button>
          </div>
          <div v-else>
            <button class="bg-red-600 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              {{ apiMessage }}
            </button>
          </div>
        </div>
      </div>
      <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">
              Repository Includes
            </h4>
            <p class="text-gray-600 mb-8">VueJS</p>
            <p class="text-gray-600 mb-8">Parcel Bundler</p>
            <p class="text-gray-600 mb-8">ExpressJS</p>
            <p class="text-gray-600 mb-8">TailwindCSS</p>
          </div>
          <div class="w-full md:w-1/2">
            <img src="https://www.dropbox.com/s/mimcvn6zxtoruis/health.svg?raw=1" alt="Monitoring"/>
          </div>
        </div>
      </section>
    </main>
    <FootBar></FootBar>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '~/src/components/NavBar'
import FootBar from '~/src/components/FootBar'
const apiHost = process.env.API_HOST || ''

export default {
  name: 'App',
  components: {
    NavBar,
    FootBar
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
      apiMessage: '',
      apiError: false
    };
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get(`${apiHost}/api/test`)
        this.apiMessage = res.data.message
        this.apiError = false
      } catch(e) {
        console.log('Error in the api')
        this.apiError = true
      }
    }
  }
};
</script>

<style lang="scss">
.hero {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)
}
</style>
