<template>
  <div class="Test">
    <TestComponents msg="Vue.js Test"/>
  </div>
</template>


<script>
// @ is an alias to /src
import TestComponents from '@/components/TestComponents.vue'

export default {
  name: 'TestView',
  components: {
    TestComponents
  }
}
</script>
