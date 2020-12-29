<template>
  <div class="centerBlock">
    <left-center class="left-center"></left-center>
    <center-center class="center"></center-center>
    <right-center class="right-center"></right-center>
    <div v-if="mobileSelectFrame === true" class="mobileChooseMechanism">
      <div v-on:click="onSelectFrame(false)">
        <div class="mobileChooseMechanism_closed">
          <div>
            <svg width="520" height="518" viewBox="0 0 520 518" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M260 518C403.594 518 520 402.095 520 259.12C520 116.144 403.594 0.239929 260 0.239929C116.406 0.239929 0 116.144 0 259.12C0 402.095 116.406 518 260 518Z" fill="#FF7A00"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M392.031 212.392C400.641 220.965 400.641 234.864 392.031 243.437L260.838 374.066L260.826 374.053L260.08 374.795L128.477 243.759C119.867 235.186 119.867 221.287 128.477 212.714L138.31 202.924C146.92 194.351 160.879 194.351 169.489 202.924L260.093 293.137L351.019 202.602C359.629 194.029 373.589 194.029 382.199 202.602L392.031 212.392Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="mobileChooseMechanism_block">
        <selectFrame style="margin-top:-50px"></selectFrame>
      </div>
    </div>
    <div v-if="mobileSelectMechanism === true" class="mobileChooseMechanism2">
      <div v-on:click="onSelectMechanism(false)">
        <div class="mobileChooseMechanism_closed2">
          <div>
            <svg width="520" height="518" viewBox="0 0 520 518" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M260 518C403.594 518 520 402.095 520 259.12C520 116.144 403.594 0.239929 260 0.239929C116.406 0.239929 0 116.144 0 259.12C0 402.095 116.406 518 260 518Z" fill="#FF7A00"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M392.031 212.392C400.641 220.965 400.641 234.864 392.031 243.437L260.838 374.066L260.826 374.053L260.08 374.795L128.477 243.759C119.867 235.186 119.867 221.287 128.477 212.714L138.31 202.924C146.92 194.351 160.879 194.351 169.489 202.924L260.093 293.137L351.019 202.602C359.629 194.029 373.589 194.029 382.199 202.602L392.031 212.392Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="mobileChooseMechanism_block">
        <choose-mechanism></choose-mechanism>
      </div>
    </div>
    <div v-if="mobileBackground === true" class="mobileChooseMechanism3">
      <div v-on:click="onMobileBackground(false)">
        <div class="mobileChooseMechanism_closed3">
          <div>
            <svg width="520" height="518" viewBox="0 0 520 518" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M260 518C403.594 518 520 402.095 520 259.12C520 116.144 403.594 0.239929 260 0.239929C116.406 0.239929 0 116.144 0 259.12C0 402.095 116.406 518 260 518Z" fill="#FF7A00"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M392.031 212.392C400.641 220.965 400.641 234.864 392.031 243.437L260.838 374.066L260.826 374.053L260.08 374.795L128.477 243.759C119.867 235.186 119.867 221.287 128.477 212.714L138.31 202.924C146.92 194.351 160.879 194.351 169.489 202.924L260.093 293.137L351.019 202.602C359.629 194.029 373.589 194.029 382.199 202.602L392.031 212.392Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="mobileChooseMechanism_block">
        <background></background>
        <upBag></upBag>
      </div>
    </div>
    <div v-if="mobileColorBackground === true" class="mobileChooseMechanism4">
      <div v-on:click="onMobileColorBackground(false)">
        <div class="mobileChooseMechanism_closed4">
          <div>
            <svg width="520" height="518" viewBox="0 0 520 518" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M260 518C403.594 518 520 402.095 520 259.12C520 116.144 403.594 0.239929 260 0.239929C116.406 0.239929 0 116.144 0 259.12C0 402.095 116.406 518 260 518Z" fill="#FF7A00"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M392.031 212.392C400.641 220.965 400.641 234.864 392.031 243.437L260.838 374.066L260.826 374.053L260.08 374.795L128.477 243.759C119.867 235.186 119.867 221.287 128.477 212.714L138.31 202.924C146.92 194.351 160.879 194.351 169.489 202.924L260.093 293.137L351.019 202.602C359.629 194.029 373.589 194.029 382.199 202.602L392.031 212.392Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
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
  data () {
    return {
      close: 'https://d773dace96b9.ngrok.io/images/frameColors/close.jpg',
    }
  },
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
.mobileChooseMechanism2{
  display:none;
}
.mobileChooseMechanism3{
  display:none;
}
.mobileChooseMechanism4{
  display:none;
}
@media screen and (max-width: 1023px){
  .centerBlock{
    display:flex;
    flex-direction:column;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-self:center;
    align-content:center;
    align-items:center;
    margin: 0 auto;
  }
  .left-center{
    display:flex;
    flex-direction:column;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-self:center;
    align-content:center;
    align-items:center;
    margin: 0 auto;
  }
  .right-center{
    display:flex;
    flex-direction:column;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-self:center;
    align-content:center;
    align-items:center;
    margin: 0 auto;
  }
  .center{
    display:flex;
    flex-direction:column;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-self:center;
    align-content:center;
    align-items:center;
    margin:50px auto 0;
  }
  .mobileChooseMechanism{
    width:100%;
    height:350px;
    background:rgb(255,255,255);
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    margin-bottom:auto;
    border: 3px solid #5B6770;
    border-bottom:none;
  }
  .mobileChooseMechanism > div{
    margin-top:-20px;
  }
  .selectFrameCenterBlock{
    margin-top:-50px
  }
  .mobileChooseMechanism2{
    width:100%;
    height:350px;
    background:white;
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    border: 3px solid #5B6770;
    border-bottom:none;
  }
  .mobileChooseMechanism2 > div{
    margin-top:-20px;
  }
  .mobileChooseMechanism3{
    width:100%;
    height:380px;
    background:white;
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    border: 3px solid #5B6770;
    border-bottom:none;
  }
  .mobileChooseMechanism3 > div{
    margin-top:-10px;
  }

  .mobileChooseMechanism4{
    width:100%;
    height:350px;
    background:white;
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    border: 3px solid #5B6770;
    border-bottom:none;
  }
  .mobileChooseMechanism4 > div{
    margin-top:-45px;
  }
  .mobileChooseMechanism_closed{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed > div > svg{
    width:36px;
    height:36px;
    display:block;
    position:relative;
  }
  .mobileChooseMechanism_closed2{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed2 > div > svg{
    width:36px;
    height:36px;
    display:block;
    position:relative;
  }
  .mobileChooseMechanism_closed3{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed3 > div > svg{
    width:36px;
    height:36px;
    display:block;
    position:relative;
  }
  .mobileChooseMechanism_closed4{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed4 > div > svg{
    width:36px;
    height:36px;
    display:block;
    position:relative;
    margin-top:20px;
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
@media screen and (max-width: 380px){
  .left-center{
    margin-top:-40px;
    margin-bottom:10px;
  }




  .mobileChooseMechanism{
    width:100%;
    height:250px;
    background:white;
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    border:3px solid #5B6770;
    border-bottom:none;
  }
  .mobileChooseMechanism > div{
    margin-top:-40px;
  }

  .mobileChooseMechanism2{
    width:100%;
    height:300px;
    background:white;
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    border:3px solid #5B6770;
    border-bottom:none;
  }

  .mobileChooseMechanism2 > div{
    margin-top:-40px;
  }

  .mobileChooseMechanism3{
    width:100%;
    height:350px;
    background:white;
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    border:3px solid #5B6770;
    border-bottom:none;
  }
  .mobileChooseMechanism3 > div{
    margin-top:-10px;
  }

  .mobileChooseMechanism4{
    width:100%;
    height:220px;
    background:white;
    position: fixed;
    bottom:0;
    max-width: inherit;
    z-index:1000;
    display:block;
    border:3px solid #5B6770;
    border-bottom:none;
  }


  .mobileChooseMechanism_closed{
    margin-bottom:20px;
  }
  .mobileChooseMechanism_closed{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed > div > svg{
    width:40px;
    height:40px;
    display:block;
    position:relative;
    margin-top:13px;
  }
  .mobileChooseMechanism_closed2{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed2 > div > svg{
    width:40px;
    height:40px;
    display:block;
    position:relative;
    margin-top:12px;
  }
  .mobileChooseMechanism_closed3{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed3 > div > svg{
    width:40px;
    height:40px;
    display:block;
    position:relative;
    margin-top:-3px;
  }
  .mobileChooseMechanism_closed4{
    width:36px;
    height:80px;
    display:block;
    margin:-24px auto 0;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
    position:relative;
  }
  .mobileChooseMechanism_closed4 > div > svg{
    width:40px;
    height:40px;
    display:block;
    position:relative;
    margin-top:20px;
  }
}
</style>
