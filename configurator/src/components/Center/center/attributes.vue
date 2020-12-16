<template>
  <div>
    <div class="attributesBlock">
      <div class="attributesBlockOne">
        <p>Рамка:</p>
        <div style="color:#FF7A00">
          <p>{{frame[frameOrientation][material][colorsFrame][numberPostsFrame].article}}</p>
        </div>
      </div>
      <div class="attributesBlockRez"></div>
      <div class="attributesBlockTwo">
        <p>Механізм:</p>
        <div style="color:#FF7A00; display:flex; flex-direction:column; flex-wrap:wrap">
          <div v-for="(index, idx) in attribute" v-bind:key="idx">
            <p>{{index}}</p>
          </div>
        </div>
      </div>
      <div class="attributesBlockRez"></div>
      <div class="attributesBlockThree">
        <p>Усього:</p>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      attribute: [
        this.mechanismBlockOne.article,
        this.mechanismBlockTwo.article,
        this.mechanismBlockThree.article,
        this.mechanismBlockFour.article,
        this.mechanismBlockFive.article
      ]
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
            'mechanismBlockFive'
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
</style>
