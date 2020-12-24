<template>
  <div id="app">
    <topBlock></topBlock>
    <centerBlock></centerBlock>
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

<style>
*{
  margin:0;
  padding:0;
}
body{
  margin:0;
  padding:0;
}
#app{
  display:flex;
  flex-direction:column;
  align-content:center;
  align-items:center;
  align-self:center;
  justify-content:center;
  justify-items:center;
  justify-self:center;
  margin: 0 auto;
}
</style>
