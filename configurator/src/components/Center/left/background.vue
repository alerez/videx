<template>
  <div>
    <p class="backgroundText">Встановіть готовий фон:</p>
    <div class="backgroundBlock">
      <div class="block1">
          <img class="backgroundBlockImages"
              v-for="index in this.background[0].images" v-on:click="emitImg(index.id)" :key="index.fileURL" :src="index.fileURL">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  methods: {
    ...mapActions(['EMIT_background', 'SET_BACKGROUNDS']),

    emitImg: function emitImg(data) {
      this.EMIT_background(data);
    },
  },
  created() {
    this.SET_BACKGROUNDS();
  },
  computed: {
    ...mapGetters(['background'])
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

  border-bottom: 7px solid rgb(255, 255, 255);
  border-left: 13px solid rgb(255, 255, 255);
  border-top:5px solid rgb(255, 255, 255);
  border-right:10px solid rgb(255, 255, 255);

  background:rgb(255, 255, 255);
  box-sizing: border-box;
  border-radius: 5px 5px 5px 15px;
  overflow: auto;
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
</style>
