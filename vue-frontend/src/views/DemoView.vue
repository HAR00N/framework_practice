<template>
  <div class="demo">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <DemoComponents msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>
// @ is an alias to /src
import DemoComponents from '@/components/DemoComponents.vue'

export default {
  name: 'DemoView',
  components: {
    DemoComponents
  }
}
</script>
