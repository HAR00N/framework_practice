<template>
	<div class="demo">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="150"
        />

		<ul> 
			<br>
			<li v-for="DataList in DataList" v-bind:key="DataList.uid"> 
				{{DataList.uid}} {{DataList.user_id}} {{DataList.password}}
			</li>
		</ul>
	

        <v-container fluid>
            
            <!-- <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>선택함: {{ selected }}</span> -->

            <select v-model="selected">
                <option disabled value="">Select One</option>
                <option v-for="DataList in DataList" v-bind:key="DataList.uid"> 
                    {{DataList.user_id}}
                    
                </option>
            </select>
            <a> <br> Selected: {{ selected }}
                <nav>      
                    <router-link v-bind:to="`/test/${selected}`">{{selected}}</router-link>
                </nav>
            </a>

        </v-container>
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
			DataList: [],
            selected: '',
        }
	},
	
}

</script>