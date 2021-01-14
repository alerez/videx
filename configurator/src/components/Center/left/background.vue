<template>
  <div>
    <p class="backgroundText">{{ BackgroundText }}:</p>
    <div class="backgroundBlock">
      <div class="block1">
        <div v-for="(index, idx) in this.background[0].images" v-bind:key="idx" class="backgroundBlockImagesHover">
          <div v-if="activityBackground !== index.id" class="backgroundBlockImages" >
            <img v-on:click="emitImg(index.id)" :src="index.fileURL">
          </div>
          <div v-else-if="activityBackground === index.id" class="backgroundBlockImagesHoverImg">
            <img v-on:click="emitImg(index.id)" :src="index.fileURL">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      BackgroundText: 'Встановіть готовий фон',
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
    onFileChange(e) {
      const file = e.target.files[0];
      this.imagesUP[0].url = URL.createObjectURL(file);
      const file1 = e.target.files[1];
      this.imagesUP[1].url = URL.createObjectURL(file1);
      const file2 = e.target.files[2];
      this.imagesUP[2].url = URL.createObjectURL(file2);
      const file3 = e.target.files[3];
      this.imagesUP[3].url = URL.createObjectURL(file3);
    },
    emitImga: function emitImga(data) {
      this.EMIT_upBag(data)
    },
    ...mapActions(['EMIT_background','EMIT_upBag', 'SET_BACKGROUNDS']),

    emitImg: function emitImg(data) {
      this.EMIT_background(data);
    },
  },
  created() {
    this.SET_BACKGROUNDS();
  },
  computed: {
    ...mapGetters(['background', 'activityBackground'])
  },
};
</script>

<style>
.backgroundBlock{
  user-select: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px 5px 6px 16px;
  width: 321px;
}

.block1{
  width: 321px;
  height: 229px;

  border-bottom: 10px solid rgb(255, 255, 255);
  border-left: 13px solid rgb(255, 255, 255);
  border-top:10px solid rgb(255, 255, 255);
  border-right:10px solid rgb(255, 255, 255);

  background:rgb(255, 255, 255);
  box-sizing: border-box;
  border-radius: 5px 5px 5px 15px;
  overflow: auto;

  display: flex;
  flex-wrap: wrap;
}
.block1::-webkit-scrollbar {
  width: 16px;
}
.block1::-webkit-scrollbar-track {
  background-color: #969696;
  width: 14px;
  border: #FFFFFF solid 6px;
  padding: 20px;
  border-radius: 24px;
}
.block1::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border: 2px solid #84C400;
  border-radius: 24px;
}
.block1::-webkit-scrollbar-thumb:vertical:hover  {
  background:#84C400;
}
.backgroundText{
  user-select: none;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  letter-spacing: -0.38927px;

  color: #303030;

  margin-bottom: 10px;
  margin-left:4px;
  margin-top:-10px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.backgroundBlockImages{
  width: 63px;
  height:63px;
  background-color:rgb(192,192,192);
  border-radius: 8px;
  margin-top: -5px;
  padding-top:-5px;
  cursor:pointer;
}
.backgroundBlockImages > img{
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.backgroundBlockImagesHoverImg{
  width:59px;
  height:59px;
  display: block;
  margin-top:3px;
  margin-left:2px;
  border-radius:8px;
  border:#ff7a00 solid 2.5px;
  z-index: 1000;
}
.backgroundBlockImagesHoverImg > img{
  width:59px;
  height:59px;
  border-radius: 4px;
  z-index: -999;
}
.backgroundBlockImagesHover{
  width: 63px;
  height:63px;
  margin:2.5px;
}
</style>
