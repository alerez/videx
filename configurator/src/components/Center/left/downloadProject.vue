<template>
  <div>
    <p class="downloadProjectText">{{ downloadText.ProjectText }}</p>
    <a v-show="numberPostsFrame === '1'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf1" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '2' && frameOrientation === 'horizontal'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf2H" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '2' && frameOrientation === 'vertical'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf2V" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '3' && frameOrientation === 'horizontal'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf3H" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '3' && frameOrientation === 'vertical'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf3V" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '4' && frameOrientation === 'horizontal'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf4H" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '4' && frameOrientation === 'vertical'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf4V" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '5' && frameOrientation === 'horizontal'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf5H" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
    <a v-show="numberPostsFrame === '5' && frameOrientation === 'vertical'" :href="'https://b931494ad10e.ngrok.io/pdf?' + pdf5V" style="text-decoration: none">
      <div class="downloadProjectBlock">
        <p class="downloadProjectBlockText poss">{{ downloadText.BlockText }}
          <img v-bind:src="download" class="downloadProjectBlockImg">
        </p>
        <p class="downloadProjectBlockText2 displ">{{ downloadText.BlockText }}
          <img v-bind:src="downloadGreen" class="downloadProjectBlockImg">
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      downloadText: {
        ProjectText: '*Змінюйте розташування механізмів пересуваючи їх порядок.',
        BlockText: 'Завантижити проект (PDF)'
      },
      download: require('../../../assets/img/download.png'),
      downloadGreen: require('../../../assets/img/downloadGreen.png'),
    }
  },
  computed: {
    ...mapGetters(
        [
            'pdf1',
            'pdf2H',
            'pdf2V',
            'pdf3H',
            'pdf3V',
            'pdf4H',
            'pdf4V',
            'pdf5H',
            'pdf5V',
            'frameOrientation',
            'numberPostsFrame',
        ]
    ),
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
  text-decoration: none;
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
