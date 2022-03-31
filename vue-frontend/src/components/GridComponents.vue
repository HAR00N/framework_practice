<template>
    <v-app>
        <v-container>
            
            <v-row
                no-gutters
                style="height: 150px"
            >
                <v-col
                    cols="4"
                    sm="4"
                    align="left"    
                >
                    <v-card 
                        class="white--text"
                        outlined
                        color="teal darken-4"
                        rounded
                        >
                        1행 1열
                        <br> 시작점
                    </v-card>
                </v-col>
                <v-col
                    align="right"
                >
                    <v-card 
                        outlined tile
                        color='#80DEEA'
                    >
                        1행 2열
                    </v-card>
                </v-col>
            </v-row>
            <v-row
                no-gutters
                style="height: 150px"
            >
                <v-col>
                    <v-card
                        outlined
                        dark
                        shaped
                    >
                        2행 1열
                    </v-card>
                </v-col>
                <v-col>
                    <v-card 
                        outlined tile
                        color=#B2D7AC
                    >
                        2행 2열
                    </v-card>
                </v-col>
                <v-col>
                    <v-card
                        class="text-left"
                        outlined tile
                        height="70px"
                    >
                        2행 3열
                     
                    </v-card>
                </v-col>
                <v-col>
                    <v-card 
                        outlined tile
                        height="100px"
                    >
                        2행 4열
                    </v-card>
                </v-col>
            </v-row>
            <v-row
                no-gutters
                style="height: 150px"
            >
                <v-col>
                    <v-card outlined tile>
                        3행 1열
                    </v-card>
                </v-col>
                <v-col>
                    <v-card
                        outlined tile
                        height="300"
                        color="red lighten-4"
                    >
                        3행 2열
                    </v-card>
                </v-col>
                <v-col>
                    <v-card outlined tile>
                        3행 3열
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

</script>