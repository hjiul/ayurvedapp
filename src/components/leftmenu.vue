<template>
    <v-navigation-drawer
      absolute
      permanent
      app
      color='#703C97'
      dark
    >
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://i.ibb.co/5rQPyqR/logo.png">
      </v-list-item-avatar>

         <v-list-item-content>
            <v-list-item-title>Clara</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router :to='item.route'
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Menu principal', icon: 'mdi-abugida-thai', route:'/' },
          { title: 'Facturas', icon: 'mdi-account', route:'/factura'  },
          { title: 'Formularios', icon: 'mdi-account-group-outline', route:'/formularios'  },
          { title: 'Client', icon: 'mdi-account-group-outline', route:'/client'  },
          { title: 'Pacientes', icon: 'mdi-mushroom', route:'/pacientes'  },
        ],
      }
    },
  }
</script>