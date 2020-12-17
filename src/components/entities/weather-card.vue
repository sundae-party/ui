<template>

<div class="card justify-center p-10 bg-white rounded-lg shadow-2xl">
  <div class="text-md font-bold flex flex-col text-gray-900">
    <span class="uppercase">Today</span>
    <span class="font-normal text-gray-700 text-sm">July 29</span>
  </div>
  <div class="w-32 flex items-center justify-center">

  </div>
  <p class="text-gray-700 mb-2">Partly cloud</p>
  <div class="text-3xl font-bold text-gray-900 mb-6">
    32º
    <span class="font-normal text-gray-700 mx-1">/</span>
    20º
  </div>
  <div class="flex justify-between w-full">
    <div class="flex items-center text-gray-700 px-2">
       100 l/m<sup>2</sup>
    </div>
    <div class="flex items-center text-gray-700 px-2">
      20 km/h
    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'WeatherCard',
  data() {
    return {}
  },
}
</script>
