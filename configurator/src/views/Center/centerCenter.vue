<template>
  <div>
    <configurator style="display:flex; justify-items:center; align-items:center;
    align-content:center; justify-content:center;
    align-self:center; justify-self:center" class="configuratorCenter">
    </configurator>
    <div class="mobileCenter">
      <div class="mobileFrame" v-on:click="onSelectFrame(true)">
        <div>
          <div>
            <i class="arrow down centerLeftArrow"></i>
          </div>
          <p>Виберіть рамку</p>
        </div>
      </div>
      <div class="mobileMechanism" v-on:click="onSelectMechanism(true)">
        <div>
          <p>Виберіть механізм</p>
          <div>
            <i class="arrow down centerRightArrow"></i>
          </div>
        </div>
      </div>
    </div>
    <attributes class="attributesCenter"></attributes>
  </div>
</template>

<script>
import Configurator from '@/components/Center/center/configurator.vue';
import Attributes from '@/components/Center/center/attributes.vue';
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'centerCenter',
  components: {
    Attributes,
    Configurator,
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
.mobileCenter{
  display:none;
}



.mobileFrame{
  width: 182.43px;
  height: 38px;
  border: solid 1px #5B6770;
  margin-top:10px;
  margin-right:10px;
  border-radius:5px 5px 5px 15px;
  background:#ffffff;
}
.mobileFrame > div{
  display:flex;
}
.mobileFrame > div > p{
  font-family:Inter, sans-serif;
  font-weight:500;
  font-size:13.93px;
  color:#5B6770;
  padding-top:12px;
  padding-left:45px;
  margin:0;
}
.mobileMechanism{
  width: 178.49px;
  height: 38px;
  border: solid 1px #5B6770;
  margin-top:10px;
  margin-left:10px;
  border-radius:5px 5px 15px 5px;
  background:#ffffff;
}
.mobileMechanism > div{
  display:flex;
}
.mobileMechanism > div > p{
  font-family:Inter, sans-serif;
  font-weight:500;
  font-size:13.93px;
  color:#5B6770;
  padding-top:12px;
  padding-left:16px;
  margin:0;
}
i {
  border: solid #5B6770;
  border-width: 0 2px 2px 0;
  border-radius:2px;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.centerLeftArrow{
  margin-left:12px;
  margin-top:14px;
}
.centerRightArrow{
  margin-top:14px;
  margin-left:20px;
}


@media screen and (max-width: 1023px){
    .configuratorCenter{
      margin-left:-8px;
      margin-top:-30px;
    }
}


@media screen and (max-width: 380px){
  .mobileFrame{
    width: 135px;
    height: 52px;
    margin-right:7.5px;
    margin-bottom:8px;
    margin-top:16px;
  }
  .mobileMechanism{
    width: 135px;
    height: 52px;
    margin-left:7.5px;
    margin-bottom:12px;
    margin-top:20px;
  }
  .mobileFrame > div > p {
    text-align:right;
    margin-right:17px;
    margin-top:-3px;
  }
  .mobileMechanism > div > p {
    margin-top:-3px;
    margin-left:0;
  }
  .centerLeftArrow{
    margin-top:20px;
  }
  .centerRightArrow{
    margin-top:20px;
    margin-right:10px;
    margin-left:10px;
  }
}
</style>
