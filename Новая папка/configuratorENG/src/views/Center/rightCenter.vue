<template>
  <div class="rightCenter">
    <select-frame class="select-frame"></select-frame>
    <choose-mechanism class="choose-mechanism"></choose-mechanism>
    <div class="footer">
      <download-project class="download-buy download-buy-tablet"></download-project>
      <buy class="buy-tablet"></buy>
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
  margin-top:-11px;
}
.download-buy{
  display:none;
}
@media screen and (max-width: 1590px){
  .rightCenter{
    margin-left:31px;
    margin-top:-30px;
  }
}

@media screen and (max-width: 1170px){
  .rightCenter{
    margin-left:18px;
    margin-top:-31px;
  }
}
@media screen and (max-width: 1023px){
  .download-buy-tablet{
    display:flex;
    flex-direction:row;
    justify-content:center;
    justify-items:center;
    justify-self:center;
    align-content:center;
    align-items:center;
    align-self:center;
    margin: 0 auto;
  }
  .rightCenter{
    display:flex;
    flex-direction:column;
    justify-content:center;
    justify-items:center;
    justify-self:center;
    align-content:center;
    align-items:center;
    align-self:center;
    margin: 0 auto;
  }
  .buy-tablet{
    margin-left:35px;
  }
  .select-frame{
    display:none;
  }
  .choose-mechanism{
    display:none;
  }
  .footer{
    display:flex;
    justify-content:center;
    justify-items:center;
    justify-self:center;
    align-content:center;
    align-items:center;
    align-self:center;
    margin: 0 auto;
  }
  .footer > div{
    margin-right:35px;

  }
  .rightCenter{
    margin-top:-30px;
  }
}
@media screen and (max-width: 648px){
  .download-buy-tablet{
    display:none;
  }
  .download-buy-mobile{
    display:block;
  }
}
@media screen and (max-width: 380px){

}
</style>
