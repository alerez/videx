<template>
  <div class="leftCenter">
    <div class="background-Block">
      <div style="display:flex; flex-direction:column">
        <div style="display:flex">
          <background class="background"></background>
          <color-background class="color-backgroundTwo"></color-background>
        </div>
        <up-bag class="up-bag"></up-bag>
      </div>
      <div class="color-backgroundBlock">
        <color-background class="color-background"></color-background>
      </div>
    </div>
    <div class="frame-number">
      <frame-orientation class="frame-orientation"></frame-orientation>
      <number-posts class="number-post"></number-posts>
    </div>
    <download-project class="download-project"></download-project>
  </div>
</template>

<script>
import Background from '@/components/Center/left/background.vue';
import UpBag from '@/components/Center/left/upBag.vue';
import ColorBackground from '@/components/Center/left/colorBackground.vue';
import FrameOrientation from '@/components/Center/left/frameOrientation.vue';
import NumberPosts from '@/components/Center/left/numberPosts.vue';
import DownloadProject from '@/components/Center/left/downloadProject.vue';

export default {
  name: 'leftCenter',
  components: {
    DownloadProject,
    NumberPosts,
    FrameOrientation,
    ColorBackground,
    UpBag,
    Background,
  },
};
</script>

<style>
.leftCenter{
  margin-left: 0;
  margin-right:52px;
}
.color-backgroundTwo{
  display:none;
}
@media screen and (max-width: 1560px){
  .leftCenter{
    margin-right:16px;
    margin-top:32px;
  }
  .rightCenter{
    margin-top:20px;
  }
}
@media screen and (max-width: 1190px){
  .leftCenter{
    margin-right:1px;
  }
  .upMobile{
    display:none;
  }
}
@media screen and (max-width: 1044px){
  .leftCenter{
    display:flex;
    flex-direction:column;
  }
  .color-backgroundTwo{
    display:block;
    margin-top:-34px;
  }
  .color-background{
    display:none;
  }
  .color-backgroundBlock{
    display:flex;
    flex-direction:column;
    margin:14px;
  }
  .background-Block{
    display:flex;
    flex-direction:row;
  }
  .frame-number{
    display:flex;
    flex-direction:row;
    margin-top:-30px;
  }
  .download-project{
    display:none;
  }
  .number-post{
    margin:14px;
  }
  .frame-orientation{
    margin:9px 14px 14px;
  }
  .background{
    margin:14px;
  }
  .up-bag{
    margin:-10px 14px 14px;
  }
}
@media screen and (max-width: 788px){
  .background{
    display:none;
  }
  .color-backgroundTwo{
    display:none;
  }
  .color-background{
    display:none;
  }
  .leftCenter{
    margin:0 auto;
  }
  .frame-number{
    display:flex;
    flex-direction:row;
    justify-items:center;
    justify-self:center;
    justify-content:center;
    align-self:center;
    align-content:center;
    align-items:center;
    margin:20px;
  }
  .frame-orientation{
    margin-top:10px;
    margin-right:6px;
  }
  .number-post{
    margin-left:6px;
    margin-top:5px;
  }
}
</style>
