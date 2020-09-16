<template>
  <v-app>
    <leftmenu />
    <v-main class="ma-5">
      <router-view>
        
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import leftmenu from '@/components/leftmenu'

export default {
  name: 'App',
  components:{ leftmenu },
  data: () => ({
    //
  }),
};
</script>
