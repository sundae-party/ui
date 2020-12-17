<template>

  <div class="flex h-screen overflow-y-hidden bg-white">

    <SideNav />

    <div class="flex flex-col flex-1 h-full overflow-hidden">
      <TopNav />
      <Main />
    </div>

  </div>

</template>

<script>
import SideNav from './components/nav/sidenav.vue'
import TopNav from './components/nav/topnav.vue';
import Main from './components/main.vue'

export default {
  name: 'App',
  components: {
    SideNav,
    TopNav,
    Main
  }
}
</script>
