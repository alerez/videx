<template>
  <div>
    <p class="downloadProjectText">*Змінюйте розташування механізмів пересуваючи їх порядок.</p>
    <div class="downloadProjectBlock poss">
      <p class="downloadProjectBlockText">Завантижити проект (PDF)
        <img v-bind:src="download" class="downloadProjectBlockImg">
      </p>
    </div>
    <div class="downloadProjectBlock displ">
      <p class="downloadProjectBlockText">Завантижити проект (PDF)
        <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  align-items: flex-end;
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

.downloadProjectBlockText{
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15.98px;
  /* identical to box height, or 87% */
  display: flex;
  justify-content:center;
  letter-spacing: 1.54375px;
  padding-top:18px;
  color: #FFFFFF;
}
.downloadProjectBlockImg{
  width:19px;
  height:19px;
  display:flex;
  margin-left:6px;
  margin-top:-1px;
}
.poss{
  display:block;
}
.displ{
  display:none;
}
</style>
