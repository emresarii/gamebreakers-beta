<template>
  <div class="container mx-auto  max-w-[1120px] py-5 font-roboto">
    <h1 class="w-[10rem] h-[2rem] font-bold border-gradient-br-blue-green-white text-black border-solid border-[1.7px] border-transparent uppercase ml-[26px] mb-2 flex items-center justify-center rounded-xl shadow-xl" v-tilt="{speed:300, max:1,glare:true}"> Popular Games</h1>
    <div class="game-container flex flex-wrap justify-space-between mr-0 pt-7">
      <nuxt-link :to="'/games/' + game.id" v-for="game in populargames.slice(0,4)" :key="game.id" class="flex-inline max-w-[14.5rem] shadow-xl overflow-hidden rounded-xl mx-auto mb-3 mt-3 rounded-2xlbg-zinc-600/30 border-gradient-br-blue-green-gray-900 border-transparent border-solid border-[2px] hover:border-gradient-tl-blue-green-gray-900 " v-tilt="{speed: 300 , max:1, glare:true, ['max-glare']: 0.5}">
        <img class="object-contain" :src="game.cover.url.replace('t_thumb', 't_cover_big')" alt="" />
         <div class="p-4 bg-gray-900 rounded-b-xl min-h-[6rem]">
            <h5 class="text-sm text-white">{{ game.name }}</h5>
              <p class="mt-1 text-xs text-gray-500">{{ game.genres[0].name }}</p>
          </div>
       </nuxt-link>
    </div>
  </div>
</template>

<script >

export default {
props: ["populargames"]
};
</script>


















