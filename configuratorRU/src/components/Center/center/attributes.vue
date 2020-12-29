<template>
  <div>
    <div class="attributesBlock">
      <div class="attributesBlockOne">
        <div>
          <p>{{ attributes.frame }}:</p>
        </div>
        <div style="color:#FF7A00" class="attributeFrame">
          <p v-if="numberPostsFrame === '1'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
          <p v-else-if="frameOrientation !== 'horizontal'">{{frame.vertical[material][colorsFrame][numberPostsFrame].article}}</p>
          <p v-else-if="frameOrientation !== 'vertical'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
        </div>
      </div>
      <div class="attributesBlockRez"></div>
      <div class="attributesBlockTwo" style="display: flex; flex-direction: column">
        <div style="width: 100%; margin-left: 15px; margin-bottom: 5px">
          <p>{{ attributes.mechanism }}:</p>
        </div>
        <div class="attributesMechanism">
            <p v-if="this.mechanismBlockOne.article" class="attributesBlockText">{{this.mechanismBlockOne.article}}</p>
            <p v-if="this.mechanismBlockTwo.article" class="attributesBlockText">{{this.mechanismBlockTwo.article}}</p>
            <p v-if="this.mechanismBlockThree.article" class="attributesBlockText">{{this.mechanismBlockThree.article}}</p>
            <p v-if="this.mechanismBlockFour.article" class="attributesBlockText">{{this.mechanismBlockFour.article}}</p>
            <p v-if="this.mechanismBlockFive.article" class="attributesBlockText">{{this.mechanismBlockFive.article}}</p>
        </div>
      </div>
      <div class="attributesBlockRez"></div>
      <div class="attributesBlockThree" style="display: flex; flex-direction: column">
        <div>
          <p>{{ attributes.total }}:</p>
        </div>
        <div style="display: flex" class="attributeNum">
          <p style="padding-right: 5px">{{ attributeNum }}</p>
          <span v-if="attributeNum === 1"> позиція</span>
          <span v-else-if="attributeNum === 2"> позиції</span>
          <span v-else-if="attributeNum === 3"> позиції</span>
          <span v-else-if="attributeNum === 4"> позиції</span>
          <span v-else-if="attributeNum === 5"> позицій</span>
          <span v-else-if="attributeNum === 6"> позицій</span>
        </div>
      </div>
    </div>
    <div class="attributesBlock1">
      <div style="display: flex">
        <div class="attributesBlockOne">
          <div>
            <p>{{ attributes.frame }}:</p>
          </div>
          <div class="attributeFrame">
            <p v-if="numberPostsFrame === '1'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
            <p v-else-if="frameOrientation !== 'horizontal'">{{frame.vertical[material][colorsFrame][numberPostsFrame].article}}</p>
            <p v-else-if="frameOrientation !== 'vertical'">{{frame.horizontal[material][colorsFrame][numberPostsFrame].article}}</p>
          </div>
        </div>
        <div class="attributesBlockRez"></div>
        <div class="attributesBlockTwo">
          <div style="width: 100%; margin-left: 15px; margin-bottom: 5px">
            <p>{{ attributes.mechanism }}:</p>
          </div>
          <div class="attributesMechanism">
            <p v-if="this.mechanismBlockOne.article" class="attributesBlockText">{{this.mechanismBlockOne.article}}</p>
            <p v-if="this.mechanismBlockTwo.article" class="attributesBlockText">{{this.mechanismBlockTwo.article}}</p>
            <p v-if="this.mechanismBlockThree.article" class="attributesBlockText">{{this.mechanismBlockThree.article}}</p>
            <p v-if="this.mechanismBlockFour.article" class="attributesBlockText">{{this.mechanismBlockFour.article}}</p>
            <p v-if="this.mechanismBlockFive.article" class="attributesBlockText">{{this.mechanismBlockFive.article}}</p>
          </div>
        </div>
      </div>
      <div class="attributesBlockThree">
        <div>
          <p>{{ attributes.total }}:</p>
        </div>
        <div class="attributeNum">
          <p style="padding-right: 5px">{{ attributeNum }}</p>
          <span v-if="attributeNum === 1"> позиція</span>
          <span v-else-if="attributeNum === 2"> позиції</span>
          <span v-else-if="attributeNum === 3"> позиції</span>
          <span v-else-if="attributeNum === 4"> позиції</span>
          <span v-else-if="attributeNum === 5"> позицій</span>
          <span v-else-if="attributeNum === 6"> позицій</span>
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
            'attribute',
            'attributeNum',
        ]
    ),
    ...mapGetters(['background']),
  },
  methods: {

  },
};
</script>

<style>
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
.attributesBlock1{
  display: none;
}
.attributesBlockOne{
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  /* identical to box height, or 799% */

  color: #5B6770;

  flex-basis: 29%;

  margin-left:31px;

  padding-top:15px;
}
.attributeFrame{
  color:#FF7A00;
  margin-top: 5px;
}
.attributesBlockTwo{
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  /* identical to box height, or 799% */

  color: #5B6770;

  flex-basis: 45%;

  margin-left:18px;

  padding-top:15px;

  display: flex;
  flex-direction: column;
}
.attributesMechanism{
  color:#FF7A00;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  margin-top: -3px;
  height: 70px;
}
.attributesMechanism > p{
  margin-top: 5px;
  margin-left: 13px;
}
.attributesBlockThree{
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  /* identical to box height, or 799% */
  color: #5B6770;

  flex-basis: 20%;

  text-align:center;
  margin:0 auto;

  padding-top:15px;

  display: flex;
  flex-direction: column;
}
.attributeNum{
  color: #FF7A00;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
}
.attributesBlockRez{
  width: 2px;
  height: 108px;

  background: #E1E1E1;

  flex-basis: 0.1%;

  margin: auto;
}
.attributesBlockText{
  display: block;
  margin-top: 5px;
  font-size:15px;
}
</style>
