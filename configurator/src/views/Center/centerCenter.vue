<template>
  <div>
    <configurator style="display:flex; justify-items:center; align-items:center;
    align-content:center; justify-content:center;
    align-self:center; justify-self:center"></configurator>
    <div class="mobileCenter">
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
    <attributes></attributes>
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

<style scoped>

</style>
