<script setup>
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';

const routes = {
  '/login': login,
  '/dashboard': dashboard
}

</script>

<template>
  <router-view></router-view>

</template>
