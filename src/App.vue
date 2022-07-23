<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/floors">Floor Map</router-link> |
    <router-link to="/messages">Messages (+1)</router-link> |
    <router-link to="/calendar">Calendar</router-link> |
    <router-link to="/trade">Trade</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
nav a {
  margin: 1rem;
}
</style>
