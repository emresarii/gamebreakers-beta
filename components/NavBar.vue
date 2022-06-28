<template>
<header class="bg-black font-roboto">
  <div
    class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
  >
    <div class="flex items-center">
      <button type="button" class="p-2 sm:mr-4 lg:hidden">
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <nuxt-link to="/" class="flex w-32 h-14  transition-all delay-50"  v-tilt="{speed: 10, scale:1.02 , max:5}" >
        <img class="img object-scale-down px-3 pb-1" src= "../static/icon.png"/>
      </nuxt-link>
    </div>

    <form class="hidden mb-0 lg:flex ml-8 w-8/12" @submit.prevent>
        <div class="relative w-full">
          <input
            class="h-10 pr-10 w-full pl-2 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
            placeholder="Search..."
            type="text"
            v-model="searchModel"
            @keyup.enter="onSearch"
          />

          <button
            class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
            type="submit"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>

    <div class="flex items-center justify-end flex-1">
      <nav
        class="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
      >
        <nuxt-link
          to="/about"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-white hover:border-gradient-tl-blue-green-gray-900 transition-all delay-50"
        >
          About
        </nuxt-link>

        <nuxt-link
          to="/games"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-white hover:border-gradient-tl-blue-green-gray-900 transition-all delay-50"
        >
          Games
        </nuxt-link>

        <nuxt-link
          to="/publishers"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-white hover:border-gradient-tl-blue-green-gray-900 transition-all delay-50"
        >
          Publishers
        </nuxt-link>

        <nuxt-link
          to="/contact"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-white hover:border-gradient-tl-blue-green-gray-900 transition-all delay-50"
        >
          Contact
        </nuxt-link>
      </nav>

      <div class="flex items-center ml-8">
        
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data() {
    return {
      searchModel: ''
    }
  },
  methods: {
    onSearch(e) {
      e.preventDefault()
      this.$router.push({path: 'search', query: {q: this.searchModel}});
      this.searchModel ="";
    }
  }
}
</script>