<template>
  <div>
    <p class="selectFrameTextTop">{{ data.selectFrameTextTop }}:</p>
    <div>
      <label>
        <select class="selectFrameSelect" style="cursor:pointer" v-model="frameNumMatOriColor.material" required="true" @change="materialGet(frameNumMatOriColor.material)">
          <option v-for="(option, idx) in selectFrame.options" v-bind:value="option.value" :key="idx">
            {{option.text}}
          </option>
        </select>
      </label>
    </div>
    <div class="selectFrameBlockBlock">
      <div v-if="frameNumMatOriColor.material === 'glases'" class="selectFrameBlock">
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('white')">
            <img v-if="colorsFrame !== 'white'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].white.fileURL">
            <img v-if="colorsFrame === 'white'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].white.fileURL">
            <p v-if="colorsFrame !== 'white'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].white.description.ua }}</p>
            <p v-if="colorsFrame === 'white'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].white.description.ua }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('black')">
            <img v-if="colorsFrame !== 'black'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].black.fileURL">
            <img v-if="colorsFrame === 'black'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].black.fileURL">
            <p v-if="colorsFrame !== 'black'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].black.description.ua }}</p>
            <p v-if="colorsFrame === 'black'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].black.description.ua }}</p>
          </div>
        </div>
        <div v-if="this.frameOrientation === 'horizontal'" v-show="this.numberPostsFrame !== '5'" style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('red')">
            <img v-if="colorsFrame !== 'red'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].red.fileURL">
            <img v-if="colorsFrame === 'red'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].red.fileURL">
            <p v-if="colorsFrame !== 'red'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].red.description.ua }}</p>
            <p v-if="colorsFrame === 'red'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].red.description.ua }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('green')">
            <img v-if="colorsFrame !== 'green'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].green.fileURL">
            <img v-if="colorsFrame === 'green'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].green.fileURL">
            <p v-if="colorsFrame !== 'green'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].green.description.ua }}</p>
            <p v-if="colorsFrame === 'green'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].green.description.ua }}</p>
          </div>
        </div>
        <div v-else-if="this.frameOrientation !== 'vertical'" v-show="this.numberPostsFrame !== '2' && this.numberPostsFrame !== '3' && this.numberPostsFrame !== '4' && this.numberPostsFrame !== '5'" style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('red')">
            <img v-if="colorsFrame !== 'red'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].red.fileURL">
            <img v-if="colorsFrame === 'red'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].red.fileURL">
            <p v-if="colorsFrame !== 'red'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].red.description.ua }}</p>
            <p v-if="colorsFrame === 'red'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].red.description.ua }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('green')">
            <img v-if="colorsFrame !== 'green'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].green.fileURL">
            <img v-if="colorsFrame === 'green'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].green.fileURL">
            <p v-if="colorsFrame !== 'green'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].green.description.ua }}</p>
            <p v-if="colorsFrame === 'green'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].green.description.ua }}</p>
          </div>
        </div>
      </div>
      <div v-if="frameNumMatOriColor.material === 'plastic'" class="selectFrameBlock">
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('white')">
            <img v-if="colorsFrame !== 'white'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].white.fileURL">
            <img v-if="colorsFrame === 'white'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].white.fileURL">
            <p v-if="colorsFrame !== 'white'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].white.description.ua }}</p>
            <p v-if="colorsFrame === 'white'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].white.description.ua }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('silver')">
            <img v-if="colorsFrame !== 'silver'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].silver.fileURL">
            <img v-if="colorsFrame === 'silver'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].silver.fileURL">
            <p v-if="colorsFrame !== 'silver'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].silver.description.ua }}</p>
            <p v-if="colorsFrame === 'silver'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].silver.description.ua }}</p>
          </div>
        </div>
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('crema')">
            <img v-if="colorsFrame !== 'crema'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].crema.fileURL">
            <img v-if="colorsFrame === 'crema'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].crema.fileURL">
            <p v-if="colorsFrame !== 'crema'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].crema.description.ua }}</p>
            <p v-if="colorsFrame === 'crema'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].crema.description.ua }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('black')">
            <img v-if="colorsFrame !== 'black'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].black.fileURL">
            <img v-if="colorsFrame === 'black'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].black.fileURL">
            <p v-if="colorsFrame !== 'black'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].black.description.ua }}</p>
            <p v-if="colorsFrame === 'black'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].black.description.ua }}</p>
          </div>
        </div>
      </div>
      <div v-if="frameNumMatOriColor.material === 'aluminium'" class="selectFrameBlock">
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('black')">
            <img v-if="colorsFrame !== 'black'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].black.fileURL">
            <img v-if="colorsFrame === 'black'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].black.fileURL">
            <p v-if="colorsFrame !== 'black'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].black.description.ua }}</p>
            <p v-if="colorsFrame === 'black'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].black.description.ua }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('brown')">
            <img v-if="colorsFrame !== 'brown'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].brown.fileURL">
            <img v-if="colorsFrame === 'brown'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].brown.fileURL">
            <p v-if="colorsFrame !== 'brown'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].brown.description.ua }}</p>
            <p v-if="colorsFrame === 'brown'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].brown.description.ua }}</p>
          </div>
        </div>
        <div style="display:flex">
          <div class="selectChooseFrame" @click="materialGetColor('pink')">
            <img v-if="colorsFrame !== 'pink'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].pink.fileURL">
            <img v-if="colorsFrame === 'pink'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].pink.fileURL">
            <p v-if="colorsFrame !== 'pink'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].pink.description.ua }}</p>
            <p v-if="colorsFrame === 'pink'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].pink.description.ua }}</p>
          </div>
          <div class="selectChooseFrame" @click="materialGetColor('gray')">
            <img v-if="colorsFrame !== 'gray'" class="selectFrameImg" :src="chooseFrame[frameNumMatOriColor.material].gray.fileURL">
            <img v-if="colorsFrame === 'gray'" style="border-radius:50%" class="selectFrameImgSize" :src="chooseFrame[frameNumMatOriColor.material].gray.fileURL">
            <p v-if="colorsFrame !== 'gray'" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].gray.description.ua }}</p>
            <p v-if="colorsFrame === 'gray'" style="color:#FF7A00" class="selectFrameText">{{ chooseFrame[frameNumMatOriColor.material].gray.description.ua }}</p>
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
      selectFrameTextTop: 'Виберіть рамку',
    }
  },
  ...mapGetters(
      [
          'materialFrameItems',
          'chooseFrame',
          'colorsFrame',
          'selectFrame',
          'numberPostsFrame',
          'frameOrientation',
          'frameNumMatOriColor',
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
  width:35px;
  height:35px;
  display: block;
  border: 2.5px solid #FF7A00;

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
    height:26px;
    border: #FF7A00 solid 2px;
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
