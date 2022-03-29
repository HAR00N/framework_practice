<template>
  <div class="test">
		<v-img
          :src="require('../assets/tkLogo.jpg')"
          class="my-3"
          contain
          height="80"
        />

		<h2> <br> Board List :
			<a href="javascript:;" @click="getList"> Call data</a>
		</h2>
		
		<ul> 
			<!-- <br> uid {{DataList[0].uid}} is {{DataList[0].user_id}} -->
			<br>
			<li v-for="DataList in DataList" v-bind:key="DataList.uid"> 
				{{DataList.uid}} {{DataList.user_id}} {{DataList.password}}
				<nav>      
					<router-link v-bind:to="`/test/${DataList.user_id}`">{{DataList.user_id}}</router-link>
				</nav>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
	created () {
		this.$axios.get("http://localhost:3000/test")
		.then((data) => {
			this.DataList = data.data
		})
	},
	data () {
		return {
			DataList: []
		}
	},
	
	methods:{
		getList() {
			this.$axios.get("http://localhost:3000/test")
			.then((res)=>{
				console.log(res);
			})
			.then((err)=>{
				console.log(err);
			})
		}
	},
}

</script>
