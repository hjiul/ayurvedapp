<template>
  <div id="formularios" class="formularios">
    <h1 style="text-align:center">
      <v-card color="#703C97" dark raised class="ma-5">Nuevos formularios</v-card>
    </h1>

    <h1 style="text-align:center">
        <v-btn center-active class="ma-3" rounded color="primary" dark @click="getForms">
         Actualizar datos de formularios
        </v-btn>
        <v-btn center-active class="ma-3" rounded color="succes" dark @click="formvisible=true">
         Ver datos de formularios
        </v-btn>
        <v-btn center-active class="ma-3" rounded color="yellow" @click="formvisible=false">
          Ocultar datos de formularios
        </v-btn>

    </h1>
    
    <v-card v-if="formvisible">
      <v-data-table :items="forms"
                  :headers="headers"
                  @click:row="selectForm"
                  class="ma-3">
          <!-- <template vslot:item.idform="{ item }">
              {{item[0]}}
          </template>
          <template vslot:item.dateform="{ item }">
              {{item[1]}}
          </template>
          <template vslot:item.nameform="{ item }">
              {{item[2]}}
          </template> -->
      </v-data-table>
    </v-card>

    <v-card v-if="detailsvisible" class="ma-3">
      <v-tabs background-color="deep-purple accent-4" dark>
        <v-tab >One</v-tab>
         <v-tab-item>
          <h1 style="text-align:center">
            <v-chip class="ma-5" outlined color="#703C97" large label>Datos Personnal</v-chip> 
          </h1>
          <h1>
            <v-divider></v-divider>
                <div text-color="purple darken-3" class="text-decoration-underline mx-2 font-weight-bold text-h6">Formulario N# :<v-chip class="mx-3 my-3" color="#703C97" outlined label>{{this.selectedform[0]}}</v-chip></div>
            
             
            
            <v-divider></v-divider>

            <v-chip class="ma-2" color="#703C97" dark label>Nombre : </v-chip><v-chip color="#703C97" outlined label>{{this.selectedform[2]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" color="#703C97" outlined dark label>Fecha de nacimiento : </v-chip><v-chip color="#703C97" dark label>{{this.selectedform[3] | dateParse('YYYY-MM-DD') | dateFormat('D-MMMM-YYYY')}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Hora de nacimiento : {{this.selectedform[4]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" color="#703C97" outlined label>Edad : {{this.selectedform[5]}} años</v-chip>
            <v-divider></v-divider>
            <div text-color="purple darken-3" class="mx-2 font-weight-bold text-h6"><v-chip class="mr-5" color="#703C97" dark label>Estado civil :</v-chip>{{this.selectedform[6]}}</div>
            <v-divider></v-divider>
            <v-chip class="ma-2" color="#703C97" dark label>Peso : {{this.selectedform[7]}} Kg</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
            <v-divider></v-divider>
            <v-chip class="ma-2" label>Nombre : {{this.selectedform[0]}}</v-chip>
          </h1>
        </v-tab-item>
        <v-tab>Two</v-tab>
        <v-tab>Three</v-tab>
        <v-tab>Four</v-tab>
        <v-tab>Five</v-tab>
        <v-tab>Six</v-tab>
        <v-tab>Seven</v-tab>
        <v-tab>Eight</v-tab>
        <v-tab>Nine</v-tab>
        <v-tab>Ten</v-tab>
        <v-tab>Eleven</v-tab>
        <v-tab>Twelve</v-tab>
        <v-tab>Thirteen</v-tab>
        <v-tab>Fourteen</v-tab>
        <v-tab>Fifteen</v-tab>
        <v-tab>Sixteen</v-tab>
        <v-tab>Seventeen</v-tab>
        <v-tab>Eighteen</v-tab>
        <v-tab>Nineteen</v-tab>
        <v-tab>Twenty</v-tab>
      </v-tabs>
    </v-card>

  </div>
</template>

<script>
import axios from "axios";
//import { Datetime } from 'vue-datetime';

export default {
  name:'formularios',
  data: () => ({
    forms: [[{1:'tt'},{2:'g'},{3:'1987-12-01'},'1987-12-01']],
    selectedform:[{1:'tt'},{2:'g'},{3:'1987-12-01'},'1987-12-01'],
    formvisible:false,
    detailsvisible:false,
  }),
  components: {
    //datetime: Datetime
  },
  methods:{
      getForms() {
        this.forms=[];
        axios
          .get(
            //"http://localhost:8080/macros/s/AKfycbzKSCjGar8CYdg0riLGtveKMGMvKuEqZOqwpbrmqO9U1ZAZkKc/exec"
            "https://script.google.com/macros/s/AKfycbzKSCjGar8CYdg0riLGtveKMGMvKuEqZOqwpbrmqO9U1ZAZkKc/exec"
          )
          .then(response => {
            this.forms = response.data.forms;
            //console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
          this.formvisible=true;
      },
      selectForm(item) {
        //var i;
        console.log("hurrayyy");
        console.log(item);
        this.selectedform = [];
        this.selectedform = item;
        this.detailsvisible=true;
      }
    },
    computed:{
      headers(){
        return[
          {text:'Id Formulario', value:'0'},
          {text:'Fecha', value:'1'},
          {text:'Nombre', value:'2'},
        ]
      }
    },
};
</script>
