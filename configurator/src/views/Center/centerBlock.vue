<template>
  <div class="centerBlock">
    <left-center></left-center>
    <center-center></center-center>
    <right-center></right-center>
  </div>
</template>

<script>

import LeftCenter from '@/views/Center/leftCenter.vue';
import CenterCenter from '@/views/Center/centerCenter.vue';
import RightCenter from '@/views/Center/rightCenter.vue';

export default {
  name: 'centerBlock',
  components: {
    RightCenter,
    CenterCenter,
    LeftCenter,
  },
};
</script>

<style scoped>
.centerBlock{
  display: flex;
}
@media screen and (max-width: 1044px){
  .centerBlock{
    display:flex;
    flex-direction:column;
  }
}
</style>
