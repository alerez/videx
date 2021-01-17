<template>
  <div class="centerBlock">
    <left-center class="left-center"></left-center>
    <center-center class="center"></center-center>
    <right-center class="right-center"></right-center>
    <div v-if="mobileSelectFrame === true" class="mobileChooseMechanism">
      <div v-on:click="onSelectFrame(false)">
        <div class="mobileChooseMechanism_closed_border"></div>
        <div class="mobileChooseMechanism_closed">
          <div>
            <svg width="211" height="133" viewBox="0 0 211 133" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M113.031 129.469L207.885 20.8422C212.038 16.0758 212.038 8.35334 207.885 3.57485C203.732 -1.19162 196.987 -1.19162 192.834 3.57485L105.505 103.585L18.1769 3.58688C14.0239 -1.17958 7.27831 -1.17958 3.11477 3.58688C-1.03826 8.35334 -1.03826 16.0878 3.11477 20.8543L97.9694 129.481C102.079 134.175 108.931 134.175 113.031 129.469Z" fill="#FF7A00"/>
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
        <div class="mobileChooseMechanism_closed_border"></div>
        <div class="mobileChooseMechanism_closed">
          <div>
            <svg width="211" height="133" viewBox="0 0 211 133" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M113.031 129.469L207.885 20.8422C212.038 16.0758 212.038 8.35334 207.885 3.57485C203.732 -1.19162 196.987 -1.19162 192.834 3.57485L105.505 103.585L18.1769 3.58688C14.0239 -1.17958 7.27831 -1.17958 3.11477 3.58688C-1.03826 8.35334 -1.03826 16.0878 3.11477 20.8543L97.9694 129.481C102.079 134.175 108.931 134.175 113.031 129.469Z" fill="#FF7A00"/>
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
        <div class="mobileChooseMechanism_closed_border"></div>
        <div class="mobileChooseMechanism_closed">
          <div>
            <svg width="211" height="133" viewBox="0 0 211 133" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M113.031 129.469L207.885 20.8422C212.038 16.0758 212.038 8.35334 207.885 3.57485C203.732 -1.19162 196.987 -1.19162 192.834 3.57485L105.505 103.585L18.1769 3.58688C14.0239 -1.17958 7.27831 -1.17958 3.11477 3.58688C-1.03826 8.35334 -1.03826 16.0878 3.11477 20.8543L97.9694 129.481C102.079 134.175 108.931 134.175 113.031 129.469Z" fill="#FF7A00"/>
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
        <div class="mobileChooseMechanism_closed_border"></div>
        <div class="mobileChooseMechanism_closed">
          <div>
            <svg width="211" height="133" viewBox="0 0 211 133" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M113.031 129.469L207.885 20.8422C212.038 16.0758 212.038 8.35334 207.885 3.57485C203.732 -1.19162 196.987 -1.19162 192.834 3.57485L105.505 103.585L18.1769 3.58688C14.0239 -1.17958 7.27831 -1.17958 3.11477 3.58688C-1.03826 8.35334 -1.03826 16.0878 3.11477 20.8543L97.9694 129.481C102.079 134.175 108.931 134.175 113.031 129.469Z" fill="#FF7A00"/>
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
    border: 3px solid #5B6770;
    border-bottom:none;
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
  .mobileChooseMechanism_closed{
    width:35px;
    height:35px;
    display:block;
    margin:-24px auto 0;
    background: #FFFFFF;
    z-index: 1000;
    padding: 5px;
    cursor: pointer;
  }
  .mobileChooseMechanism_closed_border{
    width:35px;
    height:12px;
    display:block;
    margin:-25px auto 0;
    border-top: 2px solid #5b6770;
    border-left: 2px solid #5b6770;
    border-right: 2px solid #5b6770;
    padding: 5px;
    cursor: pointer;
    position: relative;
  }
  .mobileChooseMechanism_closed > div > svg{
    width:35px;
    height:35px;
    display:block;
    position:relative;
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
    margin-top:-20px;
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
    border:3px solid #5B6770;
    border-bottom:none;
  }

  .mobileChooseMechanism2 > div{
    margin-top:-30px;
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
  .mobileChooseMechanism4 > div{
    margin-top:-35px;
  }


  .mobileChooseMechanism_closed{
    margin-bottom:20px;
  }
}
</style>
