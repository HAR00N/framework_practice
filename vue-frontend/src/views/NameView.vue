<template>
  <div class="id">
    <h1>
        Your typing 
    </h1>

    <ul> 
      <br> {{DataList}}
      <br> <br> {{DataList[0].user_id}} 
      <nav>      
        <router-link to="/test"> back to test </router-link>
      </nav>
    </ul>
    
  </div>
</template>

<script>
export default {  
  created () {
		this.$axios.get("http://localhost:3000/test/" + this.$route.params.id)
		.then((data) => {
			this.DataList = data.data
		})
    .then((err) => {
      console.log(err)
    })
	},
	data () {
		return {
			DataList: [],
		}
	},
} 
</script> 

<style> </style>