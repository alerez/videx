<template>
  <div id="app">
    <topBlock></topBlock>
    <centerBlock style="display:flex; justify-items:center; align-items:center;
    align-content:center; justify-content:center;
    align-self:center; justify-self:center"></centerBlock>
    <buttonBlock></buttonBlock>
  </div>
</template>

<style>
body{
  background: #F9F9F9;
  padding:15px;
}

</style>
<script>
import TopBlock from '@/views/top/topBlock.vue';
import CenterBlock from '@/views/Center/centerBlock.vue';
import ButtonBlock from '@/views/Buttom/buttonBlock.vue';

export default {
  components:
    {
      ButtonBlock,
      CenterBlock,
      TopBlock,
    },
};
</script>
