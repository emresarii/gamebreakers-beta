<template>
  <div class="text-black antialiased bg-white">
    <NavBar></Navbar>
    <nuxt/>
     <img src= "../static/wave.svg">
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>