<template>
  <div class="Grid">
    <GridComponents msg="Vue.js Grid"/>
  </div>
</template>


<script>
// @ is an alias to /src
import GridComponents from '@/components/GridComponents.vue'

export default {
  name: 'GridView',
  components: {
    GridComponents
  }
}
</script>
