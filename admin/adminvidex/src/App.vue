<template>
  <div id="app">
    <div>
      <admin></admin>
    </div>
      <router-view></router-view>
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
}
</style>
<script>
import Admin from "@/views/admin";
export default {
  components: {Admin}
}
</script>
