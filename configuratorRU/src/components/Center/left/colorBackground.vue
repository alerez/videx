<template>
  <div>
    <p class="colorText">{{ colorBackground.text }}:</p>
    <div class="colorBlockBACK">
      <div class="colorBlock">
        <div v-for="(n, idx) in this.cols" v-bind:key="idx" style="display: flex">
          <div v-for="(nn, idx) in n" v-bind:key="idx"
               class="colorBack" v-bind:style="nn"
               v-on:click="emitColor(nn)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'colorBackground',
  data() {
    return {
      colorBackground: {
        text: 'Виберите цвет стен',
      },
      upImgpos: require('../../../assets/img/upB.png'),
      upImgdis: require('../../../assets/img/upBwhite.png'),
      imagesUP: [
        { url: null },
        { url: null },
        { url: null },
        { url: null },
      ],
      activeColor: true
    };
  },
  methods: {
    ...mapActions(['EMIT_backgroundColors']),

    emitColor: function emitColor(data) {
      this.EMIT_backgroundColors(data)
    },
    emitImg: function emitImg(data) {
      console.log(data)
      this.EMIT_upBag(data)
    },
  },
  computed: {
    ...mapGetters(['cols'])
  }
};
</script>

<style>
.colorText{
  user-select: none;
  margin-left: 4px;
  margin-top: 16px;
  margin-bottom:8px;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.38927px;

  color: #303030;
}
.colorBlockBACK{
  user-select: none;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px 5px 6px 16px;
  width: 320px;
}
.colorBlock{
  user-select: none;
  width: 318px;
  height: 162px;
  left: 2px;
  top: 24px;

  background: #FFFFFF;
  border: 8px solid #ffffff;
  box-sizing: border-box;
  overflow: auto;

  border-radius: 5px 5px 5px 15px;
}
.colorBlock::-webkit-scrollbar {
  width: 16px;
}
.colorBlock::-webkit-scrollbar-track {
  background-color: #969696;
  width: 14px;
  border: #FFFFFF solid 6px;
}
.colorBlock::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border: 2px solid #84C400;
  border-radius: 24px;
}
.colorBlock::-webkit-scrollbar-thumb:vertical:hover  {
  background:#84C400;
}
.colorBack{
  cursor:pointer;
  width: 35px;
  height: 37px;
}
.colorBack:hover{
  outline:black solid 1px;
  z-index:100;
}
.upMobileColorBlock{
  display:none;
}
</style>
