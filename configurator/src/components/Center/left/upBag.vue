<template>
  <div class="upBag">
    <div class="backgroundBlockUp">
      <div class="block2 mobBlock2" style="display:flex; flex-direction:row">
        <div v-for="(imagesUP, idx) in imagesUP" v-bind:key="idx">
          <img
                v-bind:src="imagesUP.url"
                v-on:click="emitImg(imagesUP.url)"
                class="backgroundBlockImages upBagBackgroundBlockImages"
          />
        </div>
      </div>
    </div>
    <div class="upMobileUpBag">
      <label class="upText upB" >
        <div class="upText">{{ upText }}
          <img class="upImg pos" :src="upImgpos" alt="downloads">
          <img class="upImg dis" :src="upImgdis" alt="downloads">
        </div>
        <input multiple type="file"
               accept=".jpg, .jpeg, .png"
               @change="onFileChange"
               style="display:none;">
      </label>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      upText: 'Завантажити власний фон',
      upImgpos: require('../../../assets/img/upB.png'),
      upImgdis: require('../../../assets/img/upBwhite.png'),
      imagesUP: [
        { url: null },
        { url: null },
        { url: null },
        { url: null },
      ],
    };
  },
  methods: {
    ...mapActions(['EMIT_upBag']),
    onFileChange(e) {
      const file = e.target.files[0];
      this.imagesUP[0].url = URL.createObjectURL(file);
      const file1 = e.target.files[1];
      this.imagesUP[1].url = URL.createObjectURL(file1);
      const file2 = e.target.files[2];
      this.imagesUP[2].url = URL.createObjectURL(file2);
      const file3 = e.target.files[3];
      this.imagesUP[3].url = URL.createObjectURL(file3);
      const file4 = e.target.files[4];
      this.imagesUP[3].url = URL.createObjectURL(file4);
    },
    emitImg: function emitImg(data) {
      this.EMIT_upBag(data)

    },
  },
};
</script>

<style>
.desBlock2{
  display:block;
}
.upB{
  user-select: none;
  width: 320px;
  height: 41px;

  background: #FFFFFF;
  border: 1px solid #84C400;
  box-sizing: border-box;

  margin-top: 30px;
  border-radius: 5px 5px 5px 15px;
  cursor:pointer;
}
.upB:hover{
  background: #84C400;
  border: 1px solid #FFFFFF;
  color:#FFFFFF;
  transition:0.6s
}
.upB:hover .upText{
  color:#FFFFFF;
}
.pos{
  display: flex;
}
.dis{
  display: none;
}
.upB:hover .pos{
  display:none;
}
.upB:hover .dis{
  display:flex;
}
.upText{
  width: 320px;
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* identical to box height, or 87% */

  display: flex;
  justify-content:center;
  align-items: center;


  letter-spacing: 1px;

  color: #84C400;
}
.upImg{
  width:20px;
  height:20px;
  margin-left:10px;
  margin-top:-2px;
}
.block2{
  width: 321px;
  height: 92px;

  background-color:rgb(255, 255, 255);
  border: 1px solid rgb(233, 233, 233);
  box-sizing: border-box;
  border-radius: 5px 5px 5px 15px;

  padding-left: 13px;
  padding-top: 12px;

  margin-top:15px;
  margin-bottom:12px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.backgroundBlockImages{
  width: 63px;
  margin: 3px;
  background-color:rgb(192,192,192);
}
</style>
