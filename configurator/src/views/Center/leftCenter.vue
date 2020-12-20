<template>
  <div class="leftCenter">
    <div class="mobileLeft">
      <div class="mobileFrame" v-on:click="onSelectFrame(true)">
        <div>
          <p>Встановіть<br/>
            готовий фон</p>
          <div>
            <i class="arrow down"></i>
          </div>
        </div>
      </div>
      <div class="mobileMechanism" v-on:click="onSelectMechanism(true)">
        <div>
          <p>Виберіть<br/>
            колір стін</p>
          <div>
            <i class="arrow down"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="background-Block">
      <div style="display:flex; flex-direction:column">
        <div style="display:flex">
          <background class="background"></background>
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
    <div class="mobileRight">
      <div class="mobileFrame" v-on:click="onSelectFrame(true)">
        <div>
          <p>Виберіть рамку</p>
          <div>
            <i class="arrow down"></i>
          </div>
        </div>
      </div>
      <div class="mobileMechanism" v-on:click="onSelectMechanism(true)">
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
  margin-right:52px;
}
.color-backgroundTwo{
  display:none;
}
.mobileRight{
  display:none;
}
.mobileLeft{
 display:none;
}
@media screen and (max-width: 1560px){
  .leftCenter{
    margin-right:16px;
    margin-top:32px;
  }
  .rightCenter{
    margin-top:20px;
  }
}
@media screen and (max-width: 1190px){
  .leftCenter{
    margin-right:1px;
  }
  .upMobile{
    display:none;
  }
}
@media screen and (max-width: 1044px){
  .leftCenter{
    display:flex;
    flex-direction:column;
  }
  .color-backgroundTwo{
    display:block;
    margin-top:-34px;
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
    margin-top:-30px;
  }
  .download-project{
    display:none;
  }
  .number-post{
    margin:14px;
  }
  .frame-orientation{
    margin:9px 14px 14px;
  }
  .background{
    margin:14px;
  }
  .up-bag{
    margin:-10px 14px 14px;
  }
  .mobileRight{
    display:flex;
    margin-bottom:-30px;
  }
  .mobileFrame{
    width:282px;
    border: solid 1px #5B6770;
    margin:16px;
    border-radius:5px 5px 5px 15px;
  }
  .mobileFrame > div{
    display:flex;
  }
  .mobileFrame > div > p{
    font-family:Inter, sans-serif;
    font-weight:500;
    font-size:13.93px;
    color:#5B6770;
    padding-top:5px;
    padding-left:25px;
    margin-right:10px;
  }
  .mobileMechanism{
    width:282px;
    border: solid 1px #5B6770;
    margin:16px;
    border-radius:5px 5px 15px 5px;
  }
  .mobileMechanism > div{
    display:flex;
  }
  .mobileMechanism > div > p{
    font-family:Inter, sans-serif;
    font-weight:500;
    font-size:13.93px;
    color:#5B6770;
    padding-top:5px;
    padding-left:20px;
  }
  i {
    border: solid #5B6770;
    border-width: 0 3px 3px 0;
    border-radius:2px;
    display: inline-block;
    padding: 3px;
    margin-top:20px;
    margin-left:125px;
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
@media screen and (max-width: 788px){
  .background{
    display:none;
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
    margin:20px;
  }
  .frame-orientation{
    margin-top:10px;
    margin-right:6px;
  }
  .number-post{
    margin-left:6px;
    margin-top:5px;
  }
  .mobileLeft{
    display:block;
  }
}
</style>
