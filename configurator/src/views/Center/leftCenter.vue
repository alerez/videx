<template>
  <div class="leftCenter">
    <div class="mobileLeft">
      <div class="mobileBackground" v-on:click="onMobileBackground(true)">
        <div>
          <div>
            <i class="arrow down leftArrow"></i>
          </div>
          <p>Встановіть готовий фон</p>
        </div>
      </div>
      <div class="mobileColorBackground" v-on:click="onMobileColorBackground(true)">
        <div>
          <p>Виберіть колір стін</p>
          <div>
            <i class="arrow down rightArrow"></i>
          </div>
        </div>
      </div>
    </div>
    <div id="background-Block" class="background-Block">
      <div style="display:flex; flex-direction:column">
        <div style="display:flex">
          <background class="background" :key="componentKey"></background>
          <color-background class="color-backgroundTwo"></color-background>
        </div>
        <up-bag class="up-bag"></up-bag>
      </div>
      <div class="color-backgroundBlock">
        <color-background class="color-background"></color-background>
      </div>
    </div>
    <div class="frame-number">
      <frame-orientation class="frame-orientation"></frame-orientation>
      <number-posts class="number-post"></number-posts>
    </div>
    <div class="mobileRight1">
      <div class="mobileFrame1" v-on:click="onSelectFrame(true)">
        <div>
          <p>Виберіть рамку</p>
          <div>
            <i class="arrow down"></i>
          </div>
        </div>
      </div>
      <div class="mobileMechanism1" v-on:click="onSelectMechanism(true)">
        <div>
          <p>Виберіть механізм</p>
          <div>
            <i class="arrow down"></i>
          </div>
        </div>
      </div>
    </div>
    <download-project class="download-project"></download-project>
  </div>
</template>

<script>
import Background from '@/components/Center/left/background.vue';
import UpBag from '@/components/Center/left/upBag.vue';
import ColorBackground from '@/components/Center/left/colorBackground.vue';
import FrameOrientation from '@/components/Center/left/frameOrientation.vue';
import NumberPosts from '@/components/Center/left/numberPosts.vue';
import DownloadProject from '@/components/Center/left/downloadProject.vue';
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'leftCenter',
  data() {
    return{
      componentKey: 0
    }
  },
  components: {
    DownloadProject,
    NumberPosts,
    FrameOrientation,
    ColorBackground,
    UpBag,
    Background,
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

<style>
.leftCenter{
  margin-left: 0;
  margin-right:54px;
  margin-top:-19px;
}
.color-backgroundTwo{
  display:none;
}
.mobileRight1{
  display:none;
}
.mobileLeft{
 display:none;
}
@media screen and (max-width: 1590px){
  .leftCenter{
    margin-right:16px;
    margin-top:4px;
  }
  .rightCenter{
    margin-top:20px;
  }
}
@media screen and (max-width: 1170px){
  .leftCenter{
    margin-right:16px;
    margin-top:8px;
  }
}
@media screen and (max-width: 1023px){
  .leftCenter{
    display:flex;
    flex-direction:column;
    justify-content:center;
    justify-items:center;
    justify-self:center;
    align-content:center;
    align-items:center;
    align-self:center;
    margin: 0 auto;
  }
  .color-backgroundTwo{
    display:block;
    margin-top:-38px;
    margin-left:14.5px;
  }
  .color-background{
    display:none;
  }
  .color-backgroundBlock{
    display:flex;
    flex-direction:column;
    margin:14px;
  }
  .background-Block{
    display:flex;
    flex-direction:row;
  }
  .frame-number{
    display:flex;
    flex-direction:row;
    justify-content:center;
    justify-items:center;
    justify-self:center;
    align-content:center;
    align-items:center;
    align-self:center;
    margin:-20px auto 0;
  }
  .download-project{
    display:none;
  }
  .frame-orientation{
    margin-top:10px;
    margin-right:6px;
  }
  .number-post{
    margin-left:6px;
    margin-top:5px;
  }
  .background{
    margin:14px;
  }
  .up-bag{
    margin:-10px 14px 14px;
  }
  .mobileRight1{
    display:flex;
    margin: 0 auto;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    align-content: center;
    align-items: center;
    align-self: center;
    height:60px;
  }
  .mobileFrame1{
    width:282px;
    height:40px;
    border: solid 1px #5B6770;
    margin-right:16px;
    margin-left:-16px;
    margin-top:23px;
    border-radius:5px 5px 5px 15px;
    background:white;
  }
  .mobileFrame1 > div{
    display:flex;
    height:40px;
  }
  .mobileFrame1 > div > p{
    font-family:Inter, sans-serif;
    font-weight:500;
    font-size:13.93px;
    color:#5B6770;
    padding-top:0;
    margin-top:11px;
    padding-left:15px;
    margin-right:20px;
  }
  .mobileMechanism1{
    width:282px;
    height:40px;
    border: solid 1px #5B6770;
    margin-left:10px;
    margin-top:23px;
    border-radius:5px 5px 15px 5px;
    background:#ffffff;
  }
  .mobileMechanism1 > div{
    display:flex;
    height:40px;
  }
  .mobileMechanism1 > div > p{
    font-family:Inter, sans-serif;
    font-weight:500;
    font-size:13.93px;
    color:#5B6770;
    padding-top:0;
    padding-left:20px;
    margin-top:11px;
  }
  i {
    border: solid #5B6770;
    border-width: 0 3px 3px 0;
    border-radius:2px;
    display: inline-block;
    padding: 3px;
    margin-top:15px;
    margin-left:125px;
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
@media screen and (max-width: 648px){
  .background{
    display:none;
  }
  #background-Block{
    display: none;
  }
  .color-backgroundTwo{
    display:none;
  }
  .color-background{
    display:none;
  }
  .leftCenter{
    margin:0 auto;
  }
  .frame-number{
    display:flex;
    flex-direction:row;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-self:center;
    align-content:center;
    align-items:center;
  }
  .frame-orientation{
    margin-top:10px;
    margin-right:5px;
  }
  .number-post{
    margin-left:5px;
    margin-top:5px;
  }


  .mobileBackground{
    width: 183px;
    height: 34px;
    border: solid 1px #5B6770;
    margin-top:10px;
    margin-right:6px;
    border-radius:5px 5px 5px 15px;
    background:#ffffff;
  }
  .mobileBackground > div{
    display:flex;
  }
  .mobileBackground > div > p{
    font-family:Inter, sans-serif;
    font-weight:500;
    font-size:13px;
    color:#5B6770;
    margin-left:6px;
    margin-top:10px;
  }
  .mobileColorBackground{
    width: 183px;
    height: 34px;
    border: solid 1px #5B6770;
    margin-top:10px;
    margin-left:6px;
    border-radius:5px 5px 15px 5px;
    background:#ffffff;
  }
  .mobileColorBackground > div{
    display:flex;
  }
  .mobileColorBackground > div > p{
    font-family:Inter, sans-serif;
    font-weight:500;
    font-size:13px;
    color:#5B6770;
    margin-left:5px;
    margin-top:10px;
  }
  i {
    border: solid #5B6770;
    border-width: 0 3px 3px 0;
    border-radius:2px;
    display: inline-block;
    padding: 3px;
    margin-left:0;
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .leftArrow{
    margin-left:10px;
    margin-top:11px;
    margin-right:5px;
  }
  .rightArrow{
    margin-left:40px;
    margin-top:11px;
    float:right;
  }
  @media screen and (max-width: 380px){
    .mobileBackground{
      width: 137px;
      height: 52px;
      margin-right:7.5px;
      margin-top:0;
      margin-left:0;
      background:#ffffff;
    }
    .mobileColorBackground{
      width: 137px;
      height: 52px;
      margin-left:7.5px;
      margin-top:0;
      margin-right:0;
      background:#ffffff;
    }
    .mobileBackground > div > p {
      text-align:right;
      margin-right:17px;
    }
    .mobileColorBackground > div > p {
      margin-left:21px;
    }
    .leftArrow{
      margin-top:20px;
    }
    .rightArrow{
      margin-top:20px;
      margin-right:10px;
      margin-left:10px;
    }
    .frame-number{
      display:flex;
      flex-direction:row;
      justify-items:center;
      justify-self:center;
      justify-content:center;
      align-self:center;
      align-content:center;
      align-items:center;
      margin:20px;
    }
  }
}
</style>
