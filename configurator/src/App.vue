<template>
  <div id="app">
    <topBlock style="width:100%; margin-bottom:20px"></topBlock>
    <centerBlock>
      <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="7" speed="1" bg="#343a40" objectbg="#e9e7e2" opacity="100" disableScrolling="false" name="spinning"></loader>
    </centerBlock>
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
import {mapActions} from 'vuex';

export default {
  components:
    {
      ButtonBlock,
      CenterBlock,
      TopBlock,
    },
  methods: {
    ...mapActions(['SET_Mechanisms_LOCAL'])
  },
  created() {
    if(window.location.pathname !== '/dist/index.html'){
        this.SET_Mechanisms_LOCAL();
    }
  }

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
  background:#F9F9F9;
}
</style>
