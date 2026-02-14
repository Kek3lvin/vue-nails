<script setup>
import AppHeader from './componentes/AppHeader.vue' //Importando o componente Header
import AppFooter from './componentes/AppFooter.vue' //Importanndo o componente Footer
import router from './router';
</script>
<template>
 <AppHeader />
 
  <router-view />

 <AppFooter />
</template>

<style scoped>
</style>
