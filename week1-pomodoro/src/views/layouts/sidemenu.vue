<script>
export default {
  data() {
    return {
      active: ['home'],
      routes: [
        {
          name: 'home',
          title: 'Home',
          icon: 'home',
        },
        {
          name: 'statistics',
          title: 'Statistics',
          icon: 'bar-chart',
        },
        {
          name: 'settings',
          title: 'Settings',
          icon: 'setting',
        },
      ],
    }
  },
}
</script>

<template>
  <a-menu v-model="active" mode="inline">
    <a-menu-item v-for="route in routes" :key="route.name">
      <router-link :to="{ name: route.name }">
        <a-icon :type="route.icon" />
        <span>{{ route.title }}</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
