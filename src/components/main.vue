<template>

  <div class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">

    Home
    
    <hr class="border-b-2 border-gray-400 my-8 mx-4">

    <div class="flex flex-row flex-wrap flex-grow mt-2">

      <div class="w-full md:w-1/3 p-3">
        <LightCard />
      </div>

      <div class="w-full md:w-1/3 p-3">
        <WeatherCard />
      </div>

      <div class="w-full md:w-1/3 p-3">
        <LightCard />
      </div>

      <div class="w-full md:w-1/2 p-3">
        <LightCard />
      </div>

      <div class="w-full md:w-1/2 p-3">
        <WeatherCard />
      </div>

    </div>

  </div>

</template>

<script>

import LightCard from './entities/light-card.vue';
import WeatherCard from './entities/weather-card.vue';

export default {
  name: 'Main',
  components: {LightCard, WeatherCard},
  data() {
    return {}
  },
}
</script>
