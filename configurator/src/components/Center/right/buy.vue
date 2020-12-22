<template>
  <div>
    <div class="buyBlock">
      <div class="buyBlockCost">
        <p class="buyBlockCostOne">Разом до сплати:</p>
        <p class="buyBlockCostTwo"><span>
        {{mechanismBlockPrice + frame[frameOrientation][material][colorsFrame][numberPostsFrame].price}}
        </span> грн</p>
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
    ...mapGetters(['frame', 'frameOrientation', 'material', 'colorsFrame', 'numberPostsFrame', 'mechanismBlockOne', 'mechanismBlockTwo', 'mechanismBlockThree', 'mechanismBlockFour', 'mechanismBlockFive', 'mechanismBlockPrice']),
    ...mapGetters(['background']),
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
  font-size: 15.9247px;
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

  border: none;
  border-radius: 10px;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 48px;
  /* or 240% */

  color: #FFFFFF;

  margin-left: 25px;
  cursor:pointer;
}
.buyBlockButtom > button:hover{
  background:#FFFFFF;
  color:#FF7A00;
  border:1px solid #FF7A00;

}
.buyBlockFavorites{
  display: flex;
  margin-left:8px;
}
.buyBlockFavorites > img{
  width:23.36px;
  height:20.8px;
  margin-top:15px;
}
.buyBlockFavorites > p{
  font-family: PT Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: 1.35px;
  margin-left: 11px;

  color: #B2B2B2;
}
</style>
