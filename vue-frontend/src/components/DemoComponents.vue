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
            <select 
                v-model="selected">
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

            <v-row align="center">
                <v-col>
                </v-col>
                
                <v-col
                    class="d-flex"
                    cols="12"
                    sm="4"
                >
                    <v-select
                    :items="items"
                    v-model="selected_items"
                    label="Select One"
                    dense
                    ></v-select>
                    Selected: {{selected_items}}
                </v-col>

                <v-col>
                </v-col>
            
            </v-row>
            
            <v-row>
                {{DataList}}
            </v-row>
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
            selected_items:'',
            items:['${id.userId}','B','C'],
        }
	},
	
}

</script>