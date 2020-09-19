<template>
  <v-container fluid>
    <h1 style="text-align:center">
        <v-btn center-active class="ma-3" rounded color="primary" dark @click="selectedpaciente_visible=false;listpaciente_visible=true">
         Ver los pacientes
        </v-btn>
        <v-btn center-active class="ma-3" rounded color="succes" dark @click="listpaciente_visible=true">
         Crear nuevo paciente
        </v-btn>

    </h1>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
      v-if="listpaciente_visible"
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color='#703C97'
          class="mb-2"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            small
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <v-divider></v-divider>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              small
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
              small
            >
              <v-btn
                small
                depressed
                color="blue"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                small
                depressed
                color="blue"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card 
            elevation="24"
            @click="
            selected_pacient=item; 
            listpaciente_visible=false; 
            selectedpaciente_visible=true;
            write_file('./selectedpaciente.json',selected_pacient)
            ">
              <v-card-title class="subheading font-weight-bold justify-center">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content class="font-weight-bold justify-center" :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end justify-left" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            small
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            small
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>

    <v-card 
            elevation="12"
            v-if="selectedpaciente_visible"
            class="ma-3">
              <v-card-title class="subheading font-weight-bold justify-center">{{ selected_pacient.name }}</v-card-title>

              <v-divider></v-divider>

              <v-row
              class="mb-12"
              no-gutters
              >
                 <v-col lg="6">
                      <v-list dense>
                <v-list-item>
                  <v-list-item-content class="font-weight-bold justify-center">Dosha :</v-list-item-content>
                  <v-list-item-content class="align-end justify-left">{{ selected_pacient.dosha }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="font-weight-bold justify-center">Fecha de nacimiento :</v-list-item-content>
                  <v-list-item-content class="align-end justify-left">{{ selected_pacient.birthdate }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="font-weight-bold justify-center">Nahual :</v-list-item-content>
                  <v-list-item-content class="align-end justify-left">{{ selected_pacient.nahual }}</v-list-item-content>
                </v-list-item>
              </v-list>
                 </v-col>
                 <v-col lg="6">
        <v-list dense>
                <v-list-item>
                  <v-list-item-content class="font-weight-bold justify-center">Coreo electronico :</v-list-item-content>
                  <v-list-item-content class="align-end justify-left">{{ selected_pacient.coreo }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="font-weight-bold justify-center">Edad :</v-list-item-content>
                  <v-list-item-content class="align-end justify-left">{{ selected_pacient.edad }}</v-list-item-content>
                </v-list-item>
              </v-list>
                 </v-col>
              </v-row>

              
            </v-card>
<v-divider></v-divider>
<v-card elevation="12">
  <v-simple-table fixed-header height="300px"  class="ma-4" v-if="selectedpaciente_visible">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Fecha</th>
          <th class="text-left">Prognosis</th>
          <th class="text-left">Tinturas</th>
          <th class="text-left">Hierbas</th>
          <th class="text-left">Ayurveda</th>
          <th class="text-left">Nota</th>
          <th class="text-left">Recomandacion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in selected_pacient.prognosticos" :key="item.fecha">
          <td>{{ item.fecha }}</td>
          <td>{{ item.prognosis }}</td>
          <td>{{ item.trat_tinturas }}</td>
          <td>{{ item.trat_hierbas }}</td>
          <td>{{ item.trat_tinturas }}</td>
          <td>{{ item.nota }}</td>
          <td>{{ item.recommandacion }}</td>
        </tr>
      </tbody>
    </template>
      </v-simple-table>
</v-card>
    
    
    
  </v-container>
</template>


<script>


  export default {
    data () {
      return {
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        selectedpaciente_visible: false,
        listpaciente_visible: false,
        itemsPerPage: 4,
        sortBy: 'name',
        selected_pacient:{
            id: '00001',
            name: 'Esteban Michel',
            dosha: 'tridosha',
            birthdate: '01/12/1987',
            nahual: 'qanil',
            coreo: 'esteban@gmail.com',
            edad: 32,
            prognosticos: [
                {fecha:'02/01/2020',prognosis:'Agotamiento',trat_tinturas:'Valeriana',trat_hierbas:'Rescue Remedy',trat_ayurveda:'Ashwaganda',nota:'',recommandacion:'Rutina de ejercicios'},
                {fecha:'03/02/2020',prognosis:'mala digestión',trat_tinturas:'Albahaca morada, hoja de aire, tilo',trat_hierbas:'',trat_ayurveda:'kitchari 5 dias, te detox, masaje ',nota:'Ha padecido de dolor bla bla',recommandacion:'Evitar hojas verder crudas.'},
            ],
          },
        keys: [
          'Name',
          'dosha',
          'birthdate',
          'nahual',
          'edad',
        ],
        items: [
          {
            id: '00001',
            name: 'Esteban Michel',
            dosha: 'tridosha',
            birthdate: '01/12/1987',
            nahual: 'qanil',
            coreo: 'esteban@gmail.com',
            edad: 32,
            prognosticos: [
                {fecha:'02/01/2020',prognosis:'Agotamiento',trat_tinturas:'Valeriana',trat_hierbas:'Rescue Remedy',trat_ayurveda:'Ashwaganda',nota:'',recommandacion:'Rutina de ejercicios'},
                {fecha:'03/02/2020',prognosis:'mala digestión',trat_tinturas:'Albahaca morada, hoja de aire, tilo',trat_hierbas:'',trat_ayurveda:'kitchari 5 dias, te detox, masaje ',nota:'Ha padecido de dolor bla bla',recommandacion:'Evitar hojas verder crudas.'},
            ],
          },
          {
            id: '00002',
            name: 'Monica Macal',
            dosha: 'vata',
            birthdate: '03/08/1986',
            nahual: 'dragon',
            coreo: 'monica@gmail.com',
            edad: 32,
            prognosticos: [
                {fecha:'02/04/2020',prognosis:'demencia',trat_tinturas:'Valeriana',trat_hierbas:'Rescue Remedy',trat_ayurveda:'Ashwaganda',nota:'',recommandacion:'Rutina de ejercicios'},
                {fecha:'03/06/2020',prognosis:'princessa',trat_tinturas:'Albahaca morada, hoja de aire, tilo',trat_hierbas:'',trat_ayurveda:'kitchari 5 dias, te detox, masaje ',nota:'Ha padecido de dolor bla bla',recommandacion:'Evitar hojas verder crudas.'},
            ],
          },
        ],
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      read_file (path){
        var fs = require("fs");
     return fs.readFileSync(path, 'utf8');
},

write_file (path, output){
  var fs = require("fs");
    fs.writeFileSync(path, output);
},
      save_selectedclient (){
          
      },
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      pacient_info (item) {
        //var i;
        console.log("hurrayyy");
        console.log(item);
      }
    },
  }
</script>