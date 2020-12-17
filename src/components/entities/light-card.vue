<template>
    


    <div class="card justify-center p-10 bg-gradient-to-br from-primary to-secondary dark:bg-gradient-to-br dark:from-yellow-300 dark:to-yellow-100 rounded-lg shadow-2xl">
      <div class="prod-img">

            <svg class="h-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <h1 class="mt-6 mb-2 text-yellow-500 text-3xl font-bold">On</h1>
        
      </div>
      <div class="prod-title">
        <p class="text-2xl uppercase text-gray-900 font-bold">Living lights</p>
        <p class="uppercase text-sm text-gray-400">
          11 entities
        </p>
      </div>
    </div>

</template>


<script>
export default {
  name: 'LightCard',
  data() {
    return {}
  }
}
</script>