<template>
    <div class ="select">
        <v-container fluid>
            <v-row 
                align="center"
            >
                <v-col>
                </v-col>
                
                <v-col
                    class="d-flex"
                    cols="12"
                    sm="4"
                >
                    <v-select
                    :items="items"
                    v-model="selected"
                    label="Select One"
                    dense
                    ></v-select>
                    Selected: {{selected}}
                </v-col>

                <v-col>
                </v-col>
            
            </v-row>
            <v-row>
                <v-col>
                    {{DataList}}
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

var DataArray = axios.get("http://localhost:3000/test").data;

console.log("DataArray : " + DataArray)

export default {
    data () {
        this.$axios.get("http://localhost:3000/test")
		.then((data) => {
			this.DataList = data.data
		})
        
        return {
            DataList: [],
            items:[],
            selected: '',
        }
    } 
}
</script>