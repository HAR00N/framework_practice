<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/dainLogo.png')"
          class="my-3"
          contain
          height="170"
        />
      </v-col>
    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome DainLeaders
        </h1>

        <p class="subheading font-weight-regular">
          <br>
          I want to go home right now
          <br> please join our
          <a href="https://dainleaders.co.kr" target="_blank"> 
          online homepage
          </a> 
          <br>{{datum}}
        </p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script> 
  // export default {
  //   datum: 'hello',
  //   data: function() {
  //     return {
  //         datum : "hello world"
  //     }
  //   }
  // }
  
  export default {
    datum: 'datum',
    data: function() {
      return {
          datum : this.$route.datum
      }
    }
  }


</script>
<style> </style>