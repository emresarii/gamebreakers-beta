<template>
<div ref="container" class="w-[1120px] h-[600px] rounded-xl bg-cover flex flex-row" :style="`background:url(${backgroundImage}); background-size:cover;`">
    <a class="relative self-end  mb-4 ml-4 inline-flex items-center px-8 py-3 overflow-hidden text-white bg-gradient-yellow-pink hover:border-gradient-tl-blue-green transition-all delay-50 rounded group active:bg-indigo-500 focus:outline-none focus:ring" @click="loadVideo">
  <span class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>

  <span class="text-sm font-medium transition-all group-hover:ml-4">
    Watch Video
  </span>
</a>
</div>
</template>

<script>
export default {
    data(){
        return {
            clicked: false
        }
    },
    computed: {
    backgroundImage() {
      if (this.gamez.screenshots[0]) {
        return this.gamez.screenshots[0].url.replace("t_thumb", "t_1080p");
      }
      return "";
    },
  },
    head() {
    return {
      script: [
        {
          hid: 'youtube-iframe-api',
          src: 'https://www.youtube.com/iframe_api',
        }
      ]
    }
  },
    methods: {
    isClicked(){
        this.clicked= true
    },
    loadVideo() {
      console.log(this.gamez)
      if (!this.player) {
        this.$nextTick(() => {
          if (window.YT) {
            this.player = new YT.Player(this.$refs.container, {
              videoId: this.gamez.videos[0].video_id,
              playerVars: {
                playsinline: 1
              },
              events: {
                onReady: this.onReady,
                onStateChange: this.onPlayerStateChange,
                onError: this.onError
              }
            })
          }
        })
      }
    },
    onReady(event) {
      event.target.playVideo()
    },
    onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.ENDED) {
        this.player = null
        this.isVideoAvailable = false
      }
    },
    onError() {
      this.player = null
      this.isVideoAvailable = false
    }
  },
  data() {
    return {
      player: null,
      isVideoAvailable: false
    }
  },
  props:["gamez"]
}
</script>

<style scoped>

</style>