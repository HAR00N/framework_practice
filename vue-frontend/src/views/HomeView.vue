<template>
  <div class="home">
    <HomeComponents msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>
// @ is an alias to /src
import HomeComponents from '@/components/HomeComponents.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComponents
  }
}
</script>
