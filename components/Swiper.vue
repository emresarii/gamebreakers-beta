<template>
  <div class="swiper flex rounded-xl mt-4 place-items-end font-roboto">
    <div class="swiper-wrapper">
      <div v-for="screenshot in gamez.screenshots" :key="screenshot.cloudinary_id" class="img-wrapper swiper-slide">
        <img :src="screenshot.url.replace('t_thumb', 't_1080p')" alt=""/>
      </div>
    </div>
    <div class="absolute z-10 place-items-end font-roboto">
      <div v-for="age_rating in gamez.age_ratings" :key="age_rating.cloudinary_id" class="flex flex-row mb-2 z-10">
        <img :src="age_rating.rating_cover_url" alt="" />
      </div>
      <div
        class="bg-black w-[1088px] h-[135px] flex flex-col rounded-xl ml-4 mb-4 text-white text-xs glasseffect z-10"
      >
        <h1 class="text-5xl ml-4 pt-4">{{ gamez.name }}</h1>
        <a class="self-end mt-9 mr-4 font-thin italic">Release Date: {{
          new Date(gamez.first_release_date).toDateString()
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay,EffectFade]);
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      simulateTouch: false,
      autoplay: {
        delay: 3000,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  props: ["gamez"],
};
</script>

<style scoped>
.swiper {
  height: 600px;
  overflow: hidden;
  position: relative;
  width: 1120px;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
.slider-content {
  color: #000;
}

.swiper-button-prev {
  color: white;
}

.swiper-button-next {
  color: white;
}
</style>
