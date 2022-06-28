<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="grid row-start-1 row-span-2 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-strech">
      <div class="grid row-start-1 row-span-2 p-8 bg-gray-100 rounded">
        <div class="mx-auto text-center lg:text-left">
          <h2 class="text-2xl font-bold">
            Popular Games
          </h2>

          <p class="mt-4 text-sm text-gray-700 max-w-[45ch]">
              Popular games around the neighborhood, explore more with us.
          </p>

          <a
            href="/"
            class="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
          >
            View the Range
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2  lg:col-span-3  lg:row-span-2 lg:grid-cols-5  ">
        <nuxt-link :to="'/games/' + game.game.id" v-for="game in games.slice(0,5)" :key="game.game.id"
          class="block max-w-[150px]"
        >
          <div class="aspect-w-1 aspect-h-1">
            <img
              loading="lazy"
              alt="Simple Watch"
              class="object-cover rounded"
              :src="game.game.cover.url.replace('t_thumb', 't_cover_big')"
            />
          </div>

          <div class="mt-2">
            <h5 class="font-medium">{{ game.game.name }}</h5>

        
          </div>
        </nuxt-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ["adventuregames","fpsgames"]
,
async asyncData({ 
    route,
    $axios
  }) {
    console.log(route);
    const games = await $axios.$request({
      url: "/v4/search",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": "n5s5x8a3wspit4m4j0ib0pgiwcipha",
        "Authorization": "Bearer l0ei8zx65ktjc4c9soahemnxe8lswd",
        "Content-Type": "text/plain",
      },
      data: `fields game.id,game.name,game.genres.name,game.cover.url; search "${route.query.q}"; limit 50; where game.cover.url != null;`,
    });
    console.log(games)
    return { games };
  }
};


</script>
