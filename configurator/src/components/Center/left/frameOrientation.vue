<template>
  <div class="frameOrientation">
    <p class="frameOrientationText">{{ frameOrientationText }}:</p>
    <div class="frameOrientationBlock">
      <div class="frameOrientationBlockOne" @click="frameOrientationFun()">
        <img v-if="this.frameOrientation === 'horizontal'" class="frameOrientationBlockOneOne" :src="horizontalColor">
        <img v-if="this.frameOrientation === 'vertical'" class="frameOrientationBlockOneOne" :src="horizontal">
      </div>
      <div class="frameOrientationBlockRoz"></div>
      <div class="frameOrientationBlockTwo" @click="frameOrientationFun()">
        <img v-if="this.frameOrientation === 'horizontal'" class="frameOrientationBlockTwoTwo" :src="vertical" >
        <img v-if="this.frameOrientation === 'vertical'" class="frameOrientationBlockTwoTwo" :src="verticalColor">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      frameOrientationText: 'Орієнтація рамки',
      horizontalColor: require('../../../assets/img/horizontalColor.png'),
      horizontal: require('../../../assets/img/horizontal.png'),
      vertical: require('../../../assets/img/vertical.png'),
      verticalColor: require('../../../assets/img/verticalColor.png'),
    }
  },
  methods: {
    ...mapActions(['EMIT_frameOrientation','EMIT_closedMechanismBlock','EMIT_numberPostsFrame']),
    frameOrientationFun: function frameOrientationFun() {
        if (this.frameOrientation === 'horizontal'){
          this.EMIT_frameOrientation('vertical')
          if(this.material === 'glases' || this.material === 'aluminium'){
            if(this.colorsFrame === 'red' || this.colorsFrame === 'green'){
              this.EMIT_numberPostsFrame('1')
            }
            else if(this.numberPostsFrame === '5'){
              this.EMIT_numberPostsFrame('3')
            }
            else if(this.numberPostsFrame === '4'){
              this.EMIT_numberPostsFrame('3')
            }
            else if(this.numberPostsFrame === '3'){
              this.EMIT_numberPostsFrame('3')
            }
            else if(this.numberPostsFrame === '2'){
              this.EMIT_numberPostsFrame('2')
            }
            else if(this.numberPostsFrame === '1') {
              this.EMIT_numberPostsFrame('1')
            }
          }
          else if(this.numberPostsFrame === '1'){
            this.EMIT_numberPostsFrame('1')
          }
          else if(this.numberPostsFrame === '2'){
            this.EMIT_numberPostsFrame('2')
          }
          else if(this.numberPostsFrame === '3'){
            this.EMIT_numberPostsFrame('3')
          }
        }
        else if (this.frameOrientation === 'vertical'){
          this.EMIT_frameOrientation('horizontal')
        }
    },
  },
  computed: {
    ...mapGetters(
        [
            'frameOrientation',
            'colorsFrame',
            'numberPostsFrame',
            'material'
        ]
    )
  }
};
</script>

<style>
.frameOrientationText{
  user-select: none;
  margin-left: 4px;
  margin-top: 10px;
  margin-bottom:10px;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15.9247px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.38927px;

  color: #303030;
}
.frameOrientationBlock{
  user-select: none;
  width: 320px;
  height: 117px;

  display: flex;

  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;

  border-radius: 5px 5px 5px 15px;
}
.frameOrientationBlockOne{
  flex-basis: 49%;
  padding-top:30px;
  cursor:pointer;
}
.frameOrientationBlockOneOne{
  transition: 0.5s;
  display: block;
  margin:auto;
}
.frameOrientationBlockTwo{
  transition: 0.5s;
  flex-basis: 49%;
  padding-top:10px;
  cursor:pointer;
}
.frameOrientationBlockTwoTwo{
  display: block;
  margin: auto;
}
.frameOrientationBlockRoz{
  width: 2px;
  height: 91px;

  background-color: #E9E9E9;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;

  margin: auto;
}
</style>
