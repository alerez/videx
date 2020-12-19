<template>
  <div class="centerBlock">
    <left-center></left-center>
    <center-center class="center"></center-center>
    <right-center></right-center>
    <div class="mobileChooseMechanism">
      <div style="width:50px; height:50px; background:#FFFFFF; color:black; border-radius:50%; display:flex; align-items:center; text-align:center; margin-top:-30px; margin-left:90%; border:2px solid yellow">X</div>
      <div>
        <choose-mechanism></choose-mechanism>
        <selectFrame></selectFrame>
      </div>
    </div>
  </div>
</template>

<script>

import LeftCenter from '@/views/Center/leftCenter.vue';
import CenterCenter from '@/views/Center/centerCenter.vue';
import RightCenter from '@/views/Center/rightCenter.vue';
import ChooseMechanism from "@/components/Center/right/chooseMechanism.vue";
import selectFrame from "@/components/Center/right/selectFrame.vue";

export default {
  name: 'centerBlock',
  components: {
    ChooseMechanism,
    RightCenter,
    CenterCenter,
    LeftCenter,
    selectFrame,
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
  .center{
    margin-top:50px;
  }
  .mobileChooseMechanism{
    width:100%;
    height:620px;
    background:black;
    position:fixed;
    margin-bottom:-200px;
    z-index:1000;
  }
}
</style>
