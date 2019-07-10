<script>
export default {
  data() {
    return {
      current: 'home',
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
  methods: {
    updateCurrent(e) {
      this.current = e.key
    },
  },
}
</script>

<template>
  <a-menu theme="dark" :selected-keys="[current]" mode="inline" @click="updateCurrent">
    <a-menu-item v-for="route in routes" :key="route.name">
      <router-link :to="{ name: route.name }">
        <a-icon :type="route.icon" />
        <span>{{ route.title }}</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
