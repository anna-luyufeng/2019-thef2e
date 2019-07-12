<script>
export default {
  data() {
    return {
      current: ['home'],
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
  methods: {},
}
</script>

<template>
  <a-menu v-model="current" theme="dark" mode="inline">
    <a-menu-item v-for="route in routes" :key="route.name">
      <router-link :to="{ name: route.name }" exact>
        <a-icon :type="route.icon" />
        <span>{{ route.title }}</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
