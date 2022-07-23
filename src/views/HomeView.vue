<template>
  <div class="home">
    <h1>Hi Neighbor!</h1>
    <div>
      Use the navigation ⬆ to see whats going on in your house!
    </div>
    <div>
      Don't have a house set up yet?
      <button>create 🏠</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped>
.home div {
  margin: 1rem;
}
</style>
