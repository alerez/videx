<template>
  <div>
    <p class="selectFrameTextTop">{{ data.selectFrameTextTop }}:</p>
    <div>
      <label>
        <select class="selectFrameSelect" style="cursor:pointer" v-model="selectFrame.material" required="true" @change="materialGet(selectFrame.material)">
          <option v-for="(option, idx) in selectFrame.options" v-bind:value="option.value" :key="idx">
            {{option.text}}
          </option>
        </select>
      </label>
    </div>
    <div class="selectFrameBlockBlock">
      <div v-if="selectFrame.material === 'glases'" class="selectFrameBlock">
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('white')">
            <img v-if="colorsFrame !== 'white'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].white.fileURL">
            <img v-if="colorsFrame === 'white'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].white.fileURL">
            <p v-if="colorsFrame !== 'white'" class="selectFrameText">{{ chooseFrame[selectFrame.material].white.description.ru }}</p>
            <p v-if="colorsFrame === 'white'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].white.description.ru }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('black')">
            <img v-if="colorsFrame !== 'black'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].black.fileURL">
            <img v-if="colorsFrame === 'black'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].black.fileURL">
            <p v-if="colorsFrame !== 'black'" class="selectFrameText">{{ chooseFrame[selectFrame.material].black.description.ru }}</p>
            <p v-if="colorsFrame === 'black'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].black.description.ru }}</p>
          </div>
        </div>
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('red')">
            <img v-if="colorsFrame !== 'red'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].red.fileURL">
            <img v-if="colorsFrame === 'red'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].red.fileURL">
            <p v-if="colorsFrame !== 'red'" class="selectFrameText">{{ chooseFrame[selectFrame.material].red.description.ru }}</p>
            <p v-if="colorsFrame === 'red'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].red.description.ru }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('green')">
            <img v-if="colorsFrame !== 'green'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].green.fileURL">
            <img v-if="colorsFrame === 'green'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].green.fileURL">
            <p v-if="colorsFrame !== 'green'" class="selectFrameText">{{ chooseFrame[selectFrame.material].green.description.ru }}</p>
            <p v-if="colorsFrame === 'green'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].green.description.ru }}</p>
          </div>
        </div>
      </div>
      <div v-if="selectFrame.material === 'plastic'" class="selectFrameBlock">
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('white')">
            <img v-if="colorsFrame !== 'white'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].white.fileURL">
            <img v-if="colorsFrame === 'white'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].white.fileURL">
            <p v-if="colorsFrame !== 'white'" class="selectFrameText">{{ chooseFrame[selectFrame.material].white.description.ru }}</p>
            <p v-if="colorsFrame === 'white'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].white.description.ru }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('silver')">
            <img v-if="colorsFrame !== 'silver'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].silver.fileURL">
            <img v-if="colorsFrame === 'silver'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].silver.fileURL">
            <p v-if="colorsFrame !== 'silver'" class="selectFrameText">{{ chooseFrame[selectFrame.material].silver.description.ru }}</p>
            <p v-if="colorsFrame === 'silver'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].silver.description.ru }}</p>
          </div>
        </div>
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('crema')">
            <img v-if="colorsFrame !== 'crema'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].crema.fileURL">
            <img v-if="colorsFrame === 'crema'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].crema.fileURL">
            <p v-if="colorsFrame !== 'crema'" class="selectFrameText">{{ chooseFrame[selectFrame.material].crema.description.ru }}</p>
            <p v-if="colorsFrame === 'crema'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].crema.description.ru }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('black')">
            <img v-if="colorsFrame !== 'black'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].black.fileURL">
            <img v-if="colorsFrame === 'black'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].black.fileURL">
            <p v-if="colorsFrame !== 'black'" class="selectFrameText">{{ chooseFrame[selectFrame.material].black.description.ru }}</p>
            <p v-if="colorsFrame === 'black'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].black.description.ru }}</p>
          </div>
        </div>
      </div>
      <div v-if="selectFrame.material === 'aluminium'" class="selectFrameBlock">
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('black')">
            <img v-if="colorsFrame !== 'black'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].black.fileURL">
            <img v-if="colorsFrame === 'black'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].black.fileURL">
            <p v-if="colorsFrame !== 'black'" class="selectFrameText">{{ chooseFrame[selectFrame.material].black.description.ru }}</p>
            <p v-if="colorsFrame === 'black'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].black.description.ru }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('brown')">
            <img v-if="colorsFrame !== 'brown'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].brown.fileURL">
            <img v-if="colorsFrame === 'brown'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].brown.fileURL">
            <p v-if="colorsFrame !== 'brown'" class="selectFrameText">{{ chooseFrame[selectFrame.material].brown.description.ru }}</p>
            <p v-if="colorsFrame === 'brown'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].brown.description.ru }}</p>
          </div>
        </div>
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('pink')">
            <img v-if="colorsFrame !== 'pink'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].pink.fileURL">
            <img v-if="colorsFrame === 'pink'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].pink.fileURL">
            <p v-if="colorsFrame !== 'pink'" class="selectFrameText">{{ chooseFrame[selectFrame.material].pink.description.ru }}</p>
            <p v-if="colorsFrame === 'pink'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].pink.description.ru }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('gray')">
            <img v-if="colorsFrame !== 'gray'" class="selectFrameImg" :src="chooseFrame[selectFrame.material].gray.fileURL">
            <img v-if="colorsFrame === 'gray'" style="border: 2px solid #ff7a00; border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[selectFrame.material].gray.fileURL">
            <p v-if="colorsFrame !== 'gray'" class="selectFrameText">{{ chooseFrame[selectFrame.material].gray.description.ru }}</p>
            <p v-if="colorsFrame === 'gray'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[selectFrame.material].gray.description.ru }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
computed: {
  data(){
    return{
      selectFrameTextTop: 'Виберите рамку',
    }
  },
  ...mapGetters(
      [
          'materialFrameItems',
          'chooseFrame',
          'colorsFrame',
          'selectFrame'
      ]
  )
},
  created() {
    this.SET_FRAMES_COLOR();
  },
  methods: {
    ...mapActions(['EMIT_frameMaterial', 'EMIT_frameMaterialColor', 'SET_FRAMES_COLOR']),
    materialGet: function materialGet(data){
      this.EMIT_frameMaterial(data)
    },
    materialGetColor: function materialGetColor(data){
      this.EMIT_frameMaterialColor(data)
    }
  }

};
</script>

<style>
.selectFrameTextTop{
  user-select: none;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15.9247px;
  display: flex;
  letter-spacing: -0.38927px;

  color:#303030;

  margin-left:5px;
  margin-bottom:12px;
  margin-top:-20px;
}
.selectFrameSelect{
  user-select: none;
  width: 321px;
  height: 40px;

  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;

  color: #5B6770;

  border-radius: 5px 5px 15px 5px;
}
.selectFrameBlock{
  width: 321px;
  height: 133px;

  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;

  border-radius: 5px 5px 15px 5px;

  margin-top: 6px;

  padding:12px;
}
.selectFrameColor{
  display: flex;
}
.selectFrameColorBlock{
  display: flex;
  flex-basis: 50%;
  margin:10px;
}
.selectFrameBlockColorBlock{
  border-radius: 50%;
  border: 1px solid rgb(167,169,171);
  width: 40px;
  height: 40px;
}
.selectFrameBlockColorText{
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



.selectChooseFrame{
  display:flex;
  flex-basis:50%;
  margin-bottom:20px;
  cursor:pointer;
}
.selectFrameImg{
  width:40px;
  height:40px;
}
.selectFrameImgSize{
  width:36px;
  height:36px;
}
.selectFrameText{
  font-family: Inter, sans-serif;
  font-size: 15.5px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: -0.38927px;

  margin-left:5px;

  color: #303030;

}

@media screen and (max-width: 1590px){
  .selectFrameBlock{
    padding:12px;
  }

  .selectChooseFrame{
    display:flex;
    flex-basis:50%;
    margin-bottom:-2px;
  }
  .selectFrameImgSize{
    width:26px;
    height:26px
  }
  .selectFrameImg{
    width:30px;
    height:30px;
  }
  .selectFrameText{
    display:flex;
    margin:-39px;
    font-size: 12px;
  }
}

</style>
