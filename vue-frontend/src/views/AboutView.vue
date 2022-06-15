<template>
  <div class="about">
    <v-row>
      <v-col cols="12" md="6">
        <wheel-component-2 />
      </v-col>
      <v-col cols="12" md="6">
        
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import WheelComponent from "@/components/WheelComponent.vue";
import WheelComponent2 from "@/components/WheelComponent2.vue";
export default {
  components: { 
    // WheelComponent, 
    WheelComponent2
  }
};
</script>