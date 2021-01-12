<template>
  <div>
    <div class="numberPostsBlockDesktop">
      <p class="numberPostsText">{{ numberPostsText }}:</p>
      <div class="numberPostsBlock" v-if="frameOrientation === 'horizontal'">
        <div class="numberPostsBlockText" v-if="this.numberPostsFrame !== '1'" v-on:click="numberPosts('1')">1</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '1'" v-on:click="numberPosts('1')">1</div>
        <div class="numberPostsBlockRoz"></div>
        <div class="numberPostsBlockText" v-if="this.numberPostsFrame !== '2'" v-on:click="numberPosts('2')">2</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '2'" v-on:click="numberPosts('2')">2</div>
        <div class="numberPostsBlockRoz"></div>
        <div class="numberPostsBlockText" v-if="this.numberPostsFrame !== '3'" v-on:click="numberPosts('3')">3</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '3'" v-on:click="numberPosts('3')">3</div>
        <div class="numberPostsBlockRoz"></div>
        <div class="numberPostsBlockText" v-if="this.numberPostsFrame !== '4'" v-on:click="numberPosts('4')">4</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '4'" v-on:click="numberPosts('4')">4</div>
        <div class="numberPostsBlockRoz"  v-show="this.colorsFrame !== 'red' && this.colorsFrame !== 'green'"></div>
        <div class="numberPostsBlockText"  v-show="this.colorsFrame !== 'red' && this.colorsFrame !== 'green'" v-if="this.numberPostsFrame !== '5'" v-on:click="numberPosts('5')">5</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '5'" v-on:click="numberPosts('5')">5</div>
      </div>
      <div class="numberPostsBlock" v-if="this.frameOrientation === 'vertical'">
        <div v-show="this.material === 'glases' || this.material === 'aluminium'" class="numberPostsBlockRoz"></div>
        <div class="numberPostsBlockText" v-if="this.numberPostsFrame !== '1'" v-on:click="numberPosts('1')">1</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '1'" v-on:click="numberPosts('1')">1</div>
        <div class="numberPostsBlockRoz" ></div>
        <div class="numberPostsBlockText" v-show="colorsFrame !== 'red' && colorsFrame !== 'green'" v-if="this.numberPostsFrame !== '2'" v-on:click="numberPosts('2')">2</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '2'" v-on:click="numberPosts('2')">2</div>
        <div class="numberPostsBlockRoz"  v-show="colorsFrame !== 'red' && colorsFrame !== 'green'"></div>
        <div class="numberPostsBlockText"  v-show="colorsFrame !== 'red' && colorsFrame !== 'green'" v-if="this.numberPostsFrame !== '3'" v-on:click="numberPosts('3')">3</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '3'" v-on:click="numberPosts('3')">3</div>
        <div class="numberPostsBlockRoz"  v-show="colorsFrame !== 'red' && colorsFrame !== 'green'"></div>
        <div class="numberPostsBlockText" v-show="this.material !== 'glases' && this.material !== 'aluminium'" v-if="this.numberPostsFrame !== '4'" v-on:click="numberPosts('4')">4</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '4'" v-on:click="numberPosts('4')">4</div>
        <div v-show="this.material !== 'glases' && this.material !== 'aluminium'" class="numberPostsBlockRoz"></div>
        <div class="numberPostsBlockText" v-show="this.material !== 'glases' && this.material !== 'aluminium'" v-if="this.numberPostsFrame !== '5'" v-on:click="numberPosts('5')">5</div>
        <div class="numberPostsBlockText numberPostsBlockTextColor" v-if="this.numberPostsFrame === '5'" v-on:click="numberPosts('4')">5</div>
      </div>
    </div>
    <div class="numberPostsBlockMobile">
      <p class="numberPostsText">{{ numberPostsText }}:</p>
      <div class="numberPostsBlock numberPostsBlockColMobile" v-if="frameOrientation === 'horizontal'"  style="display: flex; flex-direction: column">
        <div style="display: flex" class="numberPostsTextBlockMobile">
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '1'" v-on:click="numberPosts('1')"><p style="margin-left: 7.5px">1</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '1'" v-on:click="numberPosts('1')"><p style="margin-left: 7.5px">1</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 40px; margin-top: -8px"></div>
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '2'" v-on:click="numberPosts('2')"><p style="margin-left: 5px">2</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '2'" v-on:click="numberPosts('2')"><p style="margin-left: 5px">2</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 90px; margin-top: -8px"></div>
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '3'" v-on:click="numberPosts('3')"><p style="margin-left: 0">3</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '3'" v-on:click="numberPosts('3')"><p style="margin-left: 0">3</p></div>
        </div>
        <div style="width: 133px; height: 1px; background: #E9E9E9"></div>
        <div style="display: flex" class="numberPostsTextBlockMobile">
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '4'" v-on:click="numberPosts('4')"><p style="margin-left: 7.5px">4</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '4'" v-on:click="numberPosts('4')"><p style="margin-left: 7.5px">4</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 40px; margin-top: -6px"></div>
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '5'" v-on:click="numberPosts('5')"><p style="margin-left: 5px">5</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '5'" v-on:click="numberPosts('5')"><p style="margin-left: 5px">5</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 90px; margin-top: -6px"></div>
          <div class="numberPostsBlockTextMobile"> </div>
        </div>
      </div>
      <div class="numberPostsBlock numberPostsBlockCol" v-if="this.frameOrientation === 'vertical'">
        <div style="display: flex;" class="numberPostsTextBlockMobile">
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '1'" v-on:click="numberPosts('1')"><p style="margin-left: 7.5px; margin-top: -5px">1</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '1'" v-on:click="numberPosts('1')"><p style="margin-left: 7.5px; margin-top: -5px">1</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 40px; margin-top: -8px"></div>
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '2'" v-on:click="numberPosts('2')"><p style="margin-left: 5px; margin-top: -5px">2</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '2'" v-on:click="numberPosts('2')"><p style="margin-left: 5px; margin-top: -5px">2</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 90px; margin-top: -8px"></div>
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '3'" v-on:click="numberPosts('3')"><p style="margin-left: 0; margin-top: -5px">3</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '3'" v-on:click="numberPosts('3')"><p style="margin-left: 0; margin-top: -5px">3</p></div>
        </div>
        <div style="width: 133px; height: 1px; background: #E9E9E9"></div>
        <div style="display: flex" class="numberPostsTextBlockMobile">
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '4'" v-on:click="numberPosts('4')"><p style="margin-left: 7.5px; margin-top: -5px">4</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '4'" v-on:click="numberPosts('4')"><p style="margin-left: 7.5px; margin-top: -5px">4</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 40px; margin-top: -6px"></div>
          <div class="numberPostsBlockTextMobile" v-if="this.numberPostsFrame !== '5'" v-on:click="numberPosts('5')"><p style="margin-left: 5px; margin-top: -5px">5</p></div>
          <div class="numberPostsBlockTextMobile numberPostsBlockTextColor" v-if="this.numberPostsFrame === '5'" v-on:click="numberPosts('5')"><p style="margin-left: 5px; margin-top: -5px">5</p></div>
          <div style="width: 1px; height: 24px; background: #E9E9E9; position:absolute; margin-left: 90px; margin-top: -6px"></div>
          <div class="numberPostsBlockTextMobile"> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data(){
    return{
      numberPostsText: 'Кількість постів',
    }
  },
  methods: {
    ...mapActions(['EMIT_numberPostsFrame','EMIT_closedMechanismBlock']),
    numberPosts: function numberPosts(data) {
      this.EMIT_numberPostsFrame(data);
      if(data === '1'){
          this.EMIT_closedMechanismBlock('mechanismBlockTwo');
          this.EMIT_closedMechanismBlock('mechanismBlockThree');
          this.EMIT_closedMechanismBlock('mechanismBlockFour');
          this.EMIT_closedMechanismBlock('mechanismBlockFive');
      }
      else if(data === '2'){
        this.EMIT_closedMechanismBlock('mechanismBlockThree');
        this.EMIT_closedMechanismBlock('mechanismBlockFour');
        this.EMIT_closedMechanismBlock('mechanismBlockFive');
      }
      else if(data === '3'){
        this.EMIT_closedMechanismBlock('mechanismBlockFour');
        this.EMIT_closedMechanismBlock('mechanismBlockFive');
      }
      else if(data === '4'){
        this.EMIT_closedMechanismBlock('mechanismBlockFive');
      }
    },
  },
  computed: {
    ...mapGetters(
        [
            'material',
            'colorsFrame',
            'numberPostsFrame',
            'frameOrientation',
            'mechanismBlockOne',
            'mechanismBlockTwo',
            'mechanismBlockThree',
            'mechanismBlockFour',
            'mechanismBlockFive',
        ]
    )
  }
};
</script>

<style>
.numberPostsText{
  user-select: none;
  margin-bottom:8px;
  margin-top:11px;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15.9247px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.38927px;

  color: #303030;
}
.numberPostsBlock{
  user-select: none;

  width: 320px;
  height: 70px;

  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;

  border-radius: 5px 5px 5px 15px;

  display: flex;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  /* identical to box height, or 82% */

  align-items: center;
  letter-spacing: 1.65px;

  color: #5B6770;
}
.numberPostsBlockText{
  flex-basis: 19%;
  text-align:center;
  cursor: pointer;
}
.numberPostsBlockTextColor{
  font-weight:600;
  color: #FF7A00;
}
.numberPostsBlockRoz{
  width: 1px;
  height: 46px;

  background: #E1E1E1;
  margin: auto;

  flex-basis: 0.15%;
}
.numberPostsBlockCol{
  display:flex;
  flex-direction:column;
}
.numberPostsBlockCol > div > div > p{
  width:20px;
  height:14px;
  padding-top:5px;
}
.numberPostsBlockMobile{
  display:none;
}
</style>
