<template>
  <div class="rightCenter">
    <select-frame class="select-frame"></select-frame>
    <choose-mechanism class="choose-mechanism"></choose-mechanism>
    <div class="footer">
      <download-project class="download-buy download-buy-tablet"></download-project>
      <buy></buy>
    </div>
    <download-project class="download-buy download-buy-mobile"></download-project>
  </div>
</template>

<script>
import Buy from '@/components/Center/right/buy.vue';
import ChooseMechanism from '@/components/Center/right/chooseMechanism.vue';
import SelectFrame from '@/components/Center/right/selectFrame.vue';
import DownloadProject from '@/components/Center/left/downloadProject.vue';

export default {
  name: 'rightCenter',
  components: {
    DownloadProject,
    SelectFrame,
    ChooseMechanism,
    Buy,
  },
};
</script>

<style>
.rightCenter{
  margin-left:54px;
  margin-top:10px;
}
.download-buy{
  display:none;
}
@media screen and (max-width: 1560px){
  .rightCenter{
    margin-left:31px;
    margin-top:20px;
  }
}
@media screen and (max-width: 1190px){
  .rightCenter{
    margin-left:18px;
    margin-top:70px;
  }
}
@media screen and (max-width: 1044px){
  .download-buy-tablet{
    display:flex;
    flex-direction:row;
  }
  .select-frame{
    display:none;
  }
  .choose-mechanism{
    display:none;
  }
  .footer{
    display:flex;
    margin-top:-65px;
  }
  .footer > div{
    margin:35px;
  }
}
@media screen and (max-width: 788px){
  .download-buy-tablet{
    display:none;
  }
  .download-buy-mobile{
    display:block;
  }
}
</style>
