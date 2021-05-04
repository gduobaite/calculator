<template>
<v-app id="app">
  <v-main>
  <Calculator/>
  </v-main>
</v-app>
</template>

<script>
import Calculator from './components/Calculator.vue'


  export default {
    name: 'App',
    components: {
      Calculator,
      },
    data () {
      return {
    }
  }
}
</script>


