<template>
  <div>
    <div class="attributesBlock attributesBlock1">
      <div class="attributesBlockOne">
        <p>{{ attributes.frame }}:</p>
        <div style="color:#FF7A00">
          <p v-if="numberPostsFrame === '1'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
          <p v-else-if="frameOrientation !== 'horizontal'">{{frame.vertical[material][colorsFrame][numberPostsFrame].article}}</p>
          <p v-else-if="frameOrientation !== 'vertical'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
        </div>
      </div>
      <div class="attributesBlockRez"></div>
      <div class="attributesBlockTwo">
        <p>{{ attributes.mechanism }}:</p>
        <div style="color:#FF7A00; display:flex; flex-direction:column; flex-wrap:wrap; margin-top: -5px">
            <p v-if="this.mechanismBlockOne.article" class="attributesBlockText">{{this.mechanismBlockOne.article}}</p>
            <p v-if="this.mechanismBlockTwo.article" class="attributesBlockText">{{this.mechanismBlockTwo.article}}</p>
            <p v-if="this.mechanismBlockThree.article" class="attributesBlockText">{{this.mechanismBlockThree.article}}</p>
            <p v-if="this.mechanismBlockFour.article" class="attributesBlockText">{{this.mechanismBlockFour.article}}</p>
            <p v-if="this.mechanismBlockFive.article" class="attributesBlockText">{{this.mechanismBlockFive.article}}</p>
        </div>
      </div>
      <div class="attributesBlockRez"></div>
      <div class="attributesBlockThree">
        <p>{{ total }}:</p>

      </div>
    </div>
    <div class="attributesBlock attributesBlock2">
      <div class="attributesBlockOne">
        <p>{{ attributes.frame }}:</p>
        <div style="color:#FF7A00">
          <p v-if="numberPostsFrame === '1'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
          <p v-else-if="frameOrientation !== 'horizontal'">{{frame.vertical[material][colorsFrame][numberPostsFrame].article}}</p>
          <p v-else-if="frameOrientation !== 'vertical'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
        </div>
      </div>
      <div class="attributesBlockRez"></div>
      <div class="attributesBlockTwo">
        <p>{{ attributes.mechanism }}:</p>
        <div style="color:#FF7A00; display:flex; flex-direction:column; flex-wrap:wrap; margin-top: -5px">
          <p v-if="this.mechanismBlockOne.article" class="attributesBlockText">{{this.mechanismBlockOne.article}}</p>
          <p v-if="this.mechanismBlockTwo.article" class="attributesBlockText">{{this.mechanismBlockTwo.article}}</p>
          <p v-if="this.mechanismBlockThree.article" class="attributesBlockText">{{this.mechanismBlockThree.article}}</p>
          <p v-if="this.mechanismBlockFour.article" class="attributesBlockText">{{this.mechanismBlockFour.article}}</p>
          <p v-if="this.mechanismBlockFive.article" class="attributesBlockText">{{this.mechanismBlockFive.article}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return{
      attributes: {
        frame: 'Рамка',
        mechanism: 'Механізм',
        total: 'Усього',
      }
    }
  },
  computed: {
    ...mapGetters(
        [
            'frame',
            'frameOrientation',
            'material',
            'colorsFrame',
            'numberPostsFrame',
            'mechanismBlockOne',
            'mechanismBlockTwo',
            'mechanismBlockThree',
            'mechanismBlockFour',
            'mechanismBlockFive',
            'attribute'
        ]
    ),
    ...mapGetters(['background']),
  },
  methods: {

  },
};
</script>

<style>
.attributesBlockText{
  display: block;
  margin-top: 5px;
}
.attributesBlock{
  user-select: none;
  width: 851px;
  height: 130px;
  margin-top: 32px;

  background: #FFFFFF;
  border: 1px solid #E1E1E1;
  box-sizing: border-box;

  border-radius: 5px 5px 15px 15px;

  display: flex;
}
.attributesBlockOne{
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  /* identical to box height, or 799% */

  color: #5B6770;

  flex-basis: 29%;

  margin-left:31px;

  padding-top:15px;
}
.attributesBlockTwo{
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  /* identical to box height, or 799% */

  display: flex;

  color: #5B6770;

  flex-basis: 39%;

  margin-left:38px;

  padding-top:15px;
}
.attributesBlockThree{
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  /* identical to box height, or 799% */

  display: flex;

  color: #5B6770;

  flex-basis: 20%;

  text-align:center;
  margin:0 auto;
  justify-content:center;

  padding-top:15px;
}
.attributesBlockRez{
  width: 2px;
  height: 108px;

  background: #E1E1E1;

  flex-basis: 0.1%;

  margin: auto;
}
.attributesBlock2{
  display: none;
}
</style>
