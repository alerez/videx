<template>
  <div>
    <div class="buyBlock">
      <div class="buyBlockCost">
        <p class="buyBlockCostOne">Разом до сплати:</p>
        <p class="buyBlockCostTwo">
          <span v-if="numberPostsFrame === '1'">{{mechanismBlockPrice + frame.horizontal[material][colorsFrame]["1"].price}}</span>
          <span v-else-if="frameOrientation !== 'horizontal'">{{mechanismBlockPrice + frame.vertical[material][colorsFrame][numberPostsFrame].price}}</span>
          <span v-else-if="frameOrientation !== 'vertical'">{{mechanismBlockPrice + frame.horizontal[material][colorsFrame][numberPostsFrame].price}}</span>
          грн</p>
      </div>
      <div class="buyBlockButtom">
        <button>Купити</button>
      </div>
    </div>
    <div class="buyBlockFavorites" style="cursor:pointer">
      <img :src="favorites">
      <p>Додати в обранне</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      favorites: require('../../../assets/img/Избранное.png'),
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
            'mechanismBlockPrice',
            'background'
        ]
    ),
  },
};
</script>

<style>
.buyBlock{
  user-select: none;
  display: flex;
  align-items: center;
}
.buyBlockCostOne{
  user-select: none;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16.9247px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.38927px;

  color: #303030;

  padding: 0;
  margin: 11px 11px 11px 0;
}
.buyBlockCostTwo{
  user-select: none;
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;

  color: #5B6770;

  padding: 0;
  margin: 11px 11px 11px 0;
}
.buyBlockButtom > button{
  width: 145px;
  height: 52px;

  background: #FF7A00;

  border-radius: 10px;

  font-family: Ubuntu-Bold, sans-serif;
  font-weight: 600;

  font-size: 18px;
  line-height: 48px;
  /* or 240% */

  color: #FFFFFF;

  margin-left: 25px;
  cursor:pointer;
  transition: 0.5s;
  border:3px solid #FF7A00;
}
.buyBlockButtom > button:hover{
  background:#FFFFFF;
  color:#FF7A00;
  transition: 0.5s;

}
.buyBlockFavorites{
  display: flex;
  flex-direction: row;

  margin-left:8px;
  margin-top: 15px;
}
.buyBlockFavorites > img{
  width:23.36px;
  height:20.8px;

  display: flex;
}
.buyBlockFavorites > p{
  font-family: PT Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: 1.35px;

  margin-left: 11px;

  color: #B2B2B2;
}





@media screen and (max-width:1590px){

}

@media screen and (max-width:1023px){

}

@media screen and (max-width:848px){

}

@media screen and (max-width:648px){

}

@media screen and (max-width:380px){

}
</style>
