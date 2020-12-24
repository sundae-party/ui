<template>
  
    <h1 class="text-4xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
            Home
        </span>
    </h1>
    
    <hr class="border-b-2 border-gray-200 my-8 mx-4">

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

</template>

<script>

import LightCard from '../components/entities/light-card.vue';
import WeatherCard from '../components/entities/weather-card.vue';

export default {
  name: 'Home',
  components: {LightCard, WeatherCard},
  data() {
    return {}
  },
}
</script>