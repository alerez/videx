<template>
  <div>
    <p class="chooseMechanismText">{{ chooseMechanismText }}:</p>
    <div class="selectFrameBlock">
      <div style="display:flex">
        <div class="selectChooseFrame" @click="getMechanismColor('white')">
          <img v-if="mechanismColor !== 'white'"  class="selectFrameImg" :src="chooseFrame.plastic.white.fileURL">
          <img v-if="mechanismColor === 'white'" class="selectFrameImgSize" :src="chooseFrame.plastic.white.fileURL" style="border-radius:50%">
          <p v-if="mechanismColor !== 'white'" class="selectFrameText">{{ chooseFrame.plastic.white.description.ua }}</p>
          <p v-if="mechanismColor === 'white'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame.plastic.white.description.ua }}</p>
        </div>
        <div class="selectChooseFrame" @click="getMechanismColor('silver')">
          <img v-if="mechanismColor !== 'silver'" class="selectFrameImg" :src="chooseFrame.plastic.silver.fileURL">
          <img v-if="mechanismColor === 'silver'" class="selectFrameImgSize" :src="chooseFrame.plastic.silver.fileURL" style="border-radius:50%">
          <p v-if="mechanismColor !== 'silver'" class="selectFrameText">{{ chooseFrame.plastic.silver.description.ua }}</p>
          <p v-if="mechanismColor === 'silver'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame.plastic.silver.description.ua }}</p>
        </div>
      </div>
      <div style="display:flex">
        <div class="selectChooseFrame" @click="getMechanismColor('crema')">
          <img v-if="mechanismColor !== 'crema'" class="selectFrameImg" :src="chooseFrame.plastic.crema.fileURL">
          <img v-if="mechanismColor === 'crema'" class="selectFrameImgSize" :src="chooseFrame.plastic.crema.fileURL" style="border-radius:50%">
          <p v-if="mechanismColor !== 'crema'" class="selectFrameText">{{ chooseFrame.plastic.crema.description.ua }}</p>
          <p v-if="mechanismColor === 'crema'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame.plastic.crema.description.ua }}</p>
        </div>
        <div class="selectChooseFrame" @click="getMechanismColor('black')">
          <img v-if="mechanismColor !== 'black'"  class="selectFrameImg" :src="chooseFrame.plastic.black.fileURL">
          <img v-if="mechanismColor === 'black'" class="selectFrameImgSize" :src="chooseFrame.plastic.black.fileURL" style="border-radius:50%">
          <p v-if="mechanismColor !== 'black'" class="selectFrameText">{{ chooseFrame.plastic.black.description.ua }}</p>
          <p v-if="mechanismColor === 'black'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame.plastic.black.description.ua }}</p>
        </div>
      </div>
    </div>
    <div class="chooseMechanismBlockTwoRam">
      <div class="chooseMechanismBlockTwo chooseMechanismBlockMobile">
        <div class="chooseMechanismFlex" v-for="(index, idx) in chooseMechanism.plastic[mechanismColor]" v-bind:key="idx" v-on:click="doneChooseMechanism(index)">
          <img class="chooseMechanismFlexImg" :src="frame.horizontal.plastic[mechanismColor][1].fileURL">
          <img class="chooseMechanismImg" :src="index.fileURL">
          <p class="chooseMechanismFlexP">{{index.description.ua}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data(){
    return{
      chooseMechanismText: 'Виберіть механізм',
    }
  },
  computed: {
    ...mapGetters(['chooseMechanismItem', 'chooseFrame', 'chooseMechanism', 'material', 'mechanismColor', 'frame'])
  },
  created() {
    this.SET_MECHANISMS();
  },
  methods: {
    ...mapActions(['EMIT_selectedMechanism', 'EMIT_mechanism', 'SET_MECHANISMS', 'EMIT_mechanismColor']),
    doneChooseMechanism: function doneChooseMechanism(data){
      this.EMIT_selectedMechanism(data)
    },
    selectMechanism: function selectMechanism(data){
      this.EMIT_mechanism(data)
    },
    getMechanismColor: function getMechanismColor(data){
      const data2 = data
      this.EMIT_mechanismColor(data, data2)
    }
  }
};
</script>

<style>
.chooseMechanismText{
  user-select: none;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15.9247px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.38927px;

  color: #303030;

  margin-top:17px;
  margin-bottom:12px;
  margin-left:5px;
}
.chooseMechanismBlock{
  width: 321px;
  height: 133px;

  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;

  border-radius: 5px 5px 15px 5px;
}
.chooseMechanismBlockTwoRam{
  user-select: none;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px 5px 15px 5px;
  width: 322px;
  margin-top: 11px;
}
.chooseMechanismBlockTwo{
  user-select: none;
  width: 321px;
  height: 458px;

  background: #FFFFFF;

  border-bottom: 15px solid rgb(255, 255, 255);
  border-left: 10px solid rgb(255, 255, 255);
  border-top:10px solid rgb(255, 255, 255);
  border-right:12px solid rgb(255, 255, 255);

  box-sizing: border-box;

  border-radius: 5px 5px 15px 5px;

  overflow: auto;
}
.chooseMechanismBlockTwo::-webkit-scrollbar {
  width: 16px;
}
.chooseMechanismBlockTwo::-webkit-scrollbar-track {
  background-color: #969696;
  width: 14px;
  border: #FFFFFF solid 6px;
  padding: 20px;
  border-radius: 24px;
}
.chooseMechanismBlockTwo::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border: 2px solid #84C400;
  border-radius: 24px;
}
.chooseMechanismBlockTwo::-webkit-scrollbar-thumb:vertical:hover{
  background:#84C400;
}
.chooseMechanismColor{
  display: flex;
}
.chooseMechanismColorBlock{
  display: flex;
  flex-basis: 50%;
  margin:10px;
}
.chooseMechanismBlockColorBlock{
  border-radius: 50%;
  border: 1px solid rgb(167,169,171);
  width: 40px;
  height: 40px;
}
.chooseMechanismColorText{
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.38927px;

  color: #303030;

  margin-left: 9px;
}
.chooseMechanismBlockColorWithe{
  background-color: rgb(255,255,255);
}
.chooseMechanismBlockColorCreme{
  background-color: rgb(242,224,211);
}
.chooseMechanismBlockColorBlack{
  background-color: rgb(35,31,32);
}
.chooseMechanismBlockColorGray{
  background-color: rgb(188,189,192);
}

.chooseMechanismFlex{
  user-select: none;
  cursor:pointer;
  display: flex;
}
.chooseMechanismFlexImg{
  width: 70px;
  height: 70px;
  margin: 20px;
}
.chooseMechanismImg{
  width:44px;
  height:44px;
  margin-left:-78px;
  margin-top:32px;
}
.chooseMechanismFlexP{
  margin-left: 39px;

  font-family: Ubuntu,sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #5B6770;
}
</style>
