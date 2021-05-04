<template>
<v-app app class="myFont" style="background: linear-gradient(180deg, #263238, #455A64)">
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs11 sm9 md6 lg4 xl4>
        <v-row>
        <v-col>
            <h2 align="center" class="text-uppercase"
            >Raw Dog Food Calculator </h2>
            <br>
        <v-divider></v-divider>
    
        <v-layout align-center justify-center>
            <v-radio-group row mandatory v-model="currentUnit">
            <v-radio label="kilograms" value="kgs"></v-radio>
            <v-radio label="pounds" value="lbs"></v-radio>
            </v-radio-group>
        </v-layout>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="field" clearable rounded filled dense required
            :suffix="suffix" :rules="inputRules" type="number" label="Dog weight" :min="min" :max="max" > 
            </v-text-field>
                            
            <v-select v-model="select" filled dense rounded clearable required
            :items="items" :rules="inputRules"
            :menu-props="{ bottom: true, offsetY: true }" type="number" 
            label="Dog body weight %">
            </v-select>
        </v-form>
       

        <v-dialog v-model="dialog" max-width="600px" overlay-opacity="0.98">
        <template v-slot:activator="{ on }" >
            <v-btn slot="activator"
            :disabled="!valid" small fab color="transparent" class="btn float-right"
            @click.capture="submit"
            v-on="on">
                <v-icon color="amber" x-large>
                mdi-chevron-double-down</v-icon>
            </v-btn>
        </template>

        <v-card-text>Your dog should eat 
        <strong class="amber--text" > {{ weight || 0 }} </strong> {{currentUnit}} raw food per day included:
        </v-card-text>    
            
        <v-card class="rounded-pill"
        outlined style="background: transparent" hover>
            <v-card-text>
            Meat: <strong class="amber--text"> {{ meat || 0 }} </strong> {{currentUnit}}
            </v-card-text>    
        </v-card>
        <br>
            
        <v-card class="rounded-pill"
        outlined style="background: transparent" hover>
            <v-card-text>
            Bones: <strong class="amber--text"> {{ other || 0 }} </strong> {{currentUnit}}
            </v-card-text>    
        </v-card>
        <br>

        <v-card class="rounded-pill"
        outlined style="background: transparent" hover>
            <v-card-text>
            Offal: <strong class="amber--text"> {{ other || 0 }} </strong> {{currentUnit}}
            </v-card-text>     
        </v-card>

        <v-card-actions>
        <v-spacer></v-spacer>
            <v-btn color="transparent" small fab @click="dialog = false">
                <v-icon color="amber" x-large>
                mdi-chevron-double-right</v-icon>
            </v-btn>
        </v-card-actions>

        </v-dialog>
        </v-col>
        </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>
</template>


<script>

  export default {
    data () {
      return { 
        valid: true,
        dialog: false,
        field: '',
        select: '',
        items: ['2', '2.5','3','3.5','4','4.5','5'],
        currentUnit: '',
        factor: 2.20462, 
        inputRules: [
        v => !!v || 'Field is required',
        ],
}},
    
    computed: {
        meat () {
            if (this.currentUnit == 'lbs'){
                return (this.field * this.select / 100 * 0.8 * this.factor).toFixed(3); }
                else return (this.field * this.select / 100 * 0.8).toFixed(3)
                ;
            }, 
        other () {
            if (this.currentUnit == 'lbs'){
                return (this.field * this.select / 100 * 0.1 * this.factor).toFixed(3); }
                else return (this.field * this.select / 100 * 0.1).toFixed(3);
            },
        weight () {
            if (this.currentUnit == 'lbs'){
                return (this.field * this.select / 100 * this.factor).toFixed(3); }
                else return (this.field * this.select / 100).toFixed(3);
            },
        suffix () {
            if (this.currentUnit == 'lbs'){
                return 'lbs'; }
                else return 'kg';
            },
        
},

    methods: {
        submit () {
        this.$refs.form.validate()
  },
    
        
        
  
  
  }}
        
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
    * {
        font-family: 'Montserrat', sans-serif;
        line-height: 1.2;
    }
</style>