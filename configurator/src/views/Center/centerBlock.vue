<template>
  <div class="centerBlock">
    <left-center></left-center>
    <center-center class="center"></center-center>
    <right-center></right-center>
    <div v-if="mobileSelectFrame === true" class="mobileChooseMechanism">
      <div class="mobileChooseMechanism_closed" v-on:click="onSelectFrame(false)"><p>X</p></div>
      <div class="mobileChooseMechanism_block">
        <selectFrame></selectFrame>
      </div>
    </div>
    <div v-if="mobileSelectMechanism === true" class="mobileChooseMechanism">
      <div class="mobileChooseMechanism_closed" v-on:click="onSelectMechanism(false)"><p>X</p></div>
      <div class="mobileChooseMechanism_block">
        <choose-mechanism style="display:flex"></choose-mechanism>
      </div>
    </div>
    <div v-if="mobileBackground === true" class="mobileChooseMechanism">
      <div class="mobileChooseMechanism_closed" v-on:click="onMobileBackground(false)"><p>X</p></div>
      <div class="mobileChooseMechanism_block">
        <background></background>
        <upBag></upBag>
      </div>
    </div>
    <div v-if="mobileColorBackground === true" class="mobileChooseMechanism">
      <div class="mobileChooseMechanism_closed" v-on:click="onMobileColorBackground(false)"><p>X</p></div>
      <div class="mobileChooseMechanism_block">
        <color-background></color-background>
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
import ColorBackground from "@/components/Center/left/colorBackground.vue";
import background from "@/components/Center/left/background.vue";
import upBag from "@/components/Center/left/upBag.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'centerBlock',
  components: {
    ColorBackground,
    ChooseMechanism,
    RightCenter,
    CenterCenter,
    LeftCenter,
    selectFrame,
    background,
    upBag,
  },
  computed: {
    ...mapGetters(
        [
          'mobileSelectFrame',
          'mobileSelectMechanism',
          'mobileBackground',
          'mobileColorBackground',
        ]
    ),
  },
  methods: {
    ...mapActions(
        [
          'EMIT_onSelectFrame',
          'EMIT_onSelectMechanism',
          'EMIT_onMobileBackground',
          'EMIT_onMobileColorBackground',
        ]),
    onSelectFrame: function onSelectFrame(data){
      if(this.mobileSelectFrame === true){
        this.EMIT_onSelectFrame(false)
      }
      else {
        this.EMIT_onSelectFrame(data)
      }
      this.EMIT_onSelectMechanism(false)
      this.EMIT_onMobileBackground(false)
      this.EMIT_onMobileColorBackground(false)
    },
    onSelectMechanism: function onSelectMechanism(data){
      if(this.mobileSelectMechanism === true){
        this.EMIT_onSelectMechanism(false)
      }
      else {
        this.EMIT_onSelectMechanism(data)
      }
      this.EMIT_onSelectFrame(false)
      this.EMIT_onMobileBackground(false)
      this.EMIT_onMobileColorBackground(false)
    },
    onMobileBackground: function onMobileBackground(data){
      if(this.mobileBackground === true){
        this.EMIT_onMobileBackground(false)
      }
      else {
        this.EMIT_onMobileBackground(data)
      }
      this.EMIT_onSelectMechanism(false)
      this.EMIT_onSelectFrame(false)
      this.EMIT_onMobileColorBackground(false)
    },
    onMobileColorBackground: function onMobileColorBackground(data){
      if(this.mobileColorBackground === true){
        this.EMIT_onMobileColorBackground(false)
      }
      else {
        this.EMIT_onMobileColorBackground(data)
      }
      this.EMIT_onSelectMechanism(false)
      this.EMIT_onSelectFrame(false)
      this.EMIT_onMobileBackground(false)
    }
  }
};
</script>

<style scoped>
.centerBlock{
  display: flex;
}
.mobileChooseMechanism{
  display:none;
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
    width:75%;
    height:650px;
    background:white;
    position:fixed;
    z-index:1000;
    display:block;
    border: 3px solid #5B6770;
    border-top-right-radius:25px;
    border-top-left-radius:25px;
  }
  .mobileChooseMechanism_closed{
    width:50px;
    height:50px;
    background:#5B6770;
    color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    text-align:center;
    margin-top:-30px;
    float:right;
    border:2px solid #5B6770
  }
  .mobileChooseMechanism_closed > p{
    margin: 0 auto;
    display:flex;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-items:center;
  }
  .mobileChooseMechanism_block{
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-items:center;
  }
  .mobileChooseMechanism_block > div{
    display:flex;
    flex-direction:column;
    margin:0;
    justify-content:center;
    justify-items:center;
    justify-self:center;
    align-content:center;
    align-items:center;
    align-self:center;
  }
}
</style>
