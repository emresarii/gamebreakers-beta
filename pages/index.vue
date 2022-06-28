<template>
  <div>
    <GameSwiper :adventuregames="adventuregames" :fpsgames="FPSgames"></GameSwiper>
  </div>
</template>

<script>
import PopularGames from "../components/PopularGames.vue"
import Slider from "../components/Slider.vue"
import AdventureGames from "../components/AdventureGames.vue";
import GameSwiper from "../components/GameSwiper.vue";

export default {
  name: "IndexPage",
  components: { PopularGames, Slider, AdventureGames, GameSwiper },
  async asyncData({ $axios }) {
    const populargames = await $axios.$request({
      url: "/v4/games",
      method: "POST",
      headers: {
        "Client-ID": "n5s5x8a3wspit4m4j0ib0pgiwcipha",
        "Authorization": "Bearer l0ei8zx65ktjc4c9soahemnxe8lswd",
      },
      data: "fields name,rating,genres.name,cover.url;\nsort total_rating_count desc; limit 100 ;\nwhere total_rating != null;",
    });
    const adventuregames = await $axios.$request({
      url: "/v4/games",
      method: "POST",
      headers: {
        "Client-ID": "n5s5x8a3wspit4m4j0ib0pgiwcipha",
        "Authorization": "Bearer l0ei8zx65ktjc4c9soahemnxe8lswd",
      },
      data: "fields name,rating,genres.name,cover.url;sort total_rating_count desc; where genres = (5) & total_rating != null;;",
    });
    const FPSgames = await $axios.$request({
      url: "/v4/games",
      method: "POST",
      headers: {
        "Client-ID": "n5s5x8a3wspit4m4j0ib0pgiwcipha",
        "Authorization": "Bearer l0ei8zx65ktjc4c9soahemnxe8lswd",
      },
      data: "fields name,rating,genres.name,cover.url;sort total_rating_count desc; where genres = (12) & total_rating != null;;",
    });
    ;
    return { populargames, adventuregames,FPSgames }
  },
  
};


</script>
