<template>
  <div>
    <p class="downloadProjectText">{{ downloadText.ProjectText }}</p>
    <div class="downloadProjectBlock">
      <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
        <img v-bind:src="download" class="downloadProjectBlockImg">
      </p>
      <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
        <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloadText: {
        ProjectText: '*Изменяейте расположение механизмов перетаскивая их порядок.',
        BlockText: 'Загрузить проэкт (PDF)'
      },
      download: require('../../../assets/img/download.png'),
      downloadGreen: require('../../../assets/img/downloadGreen.png'),
    }
  }

};
</script>

<style>
.downloadProjectText{
  user-select: none;

  width: 320px;

  margin-top:15px;
  margin-bottom:13px;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;

  display: flex;

  color: #000000;
}
.downloadProjectBlock{
  user-select: none;

  width: 320px;
  height: 51px;

  background: #84C400;

  border-radius: 5px 5px 5px 15px;

  cursor:pointer;
}
.poss{
  display:flex;
}
.displ{
  display:none;
}
.downloadProjectBlock:hover{
  background: #FFFFFF;
  border: 1px solid #84C400;
  color:#84C400;
  transition:0.6s
}
.downloadProjectBlock:hover .poss{
  display:none;
}
.downloadProjectBlock:hover .displ{
  display:flex;
}
.downloadProjectBlock:hover .downloadProjectBlockText2{
  height: 51px;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15.98px;

  align-items: center;
  align-content: center;
  align-self: center;
  justify-items: center;
  justify-self: center;
  justify-content:center;


  letter-spacing: 1.54375px;

  color: #84C400;
}
.downloadProjectBlockText{
  height: 51px;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15.98px;

  align-items: center;
  align-content: center;
  align-self: center;
  justify-items: center;
  justify-self: center;
  justify-content:center;


  letter-spacing: 1.54375px;


  color: #FFFFFF;
}
.downloadProjectBlockImg{
  width:19px;
  height:19px;


  margin-left:6px;
  margin-top:-1px;
}
</style>
