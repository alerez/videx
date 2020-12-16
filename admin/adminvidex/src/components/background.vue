<template>
  <div class="background">
    <div class="background__param">
      <div>
        <div class="textCenter">Загрузить новый фон</div>
        <div class="paddingLabel">
          <label for="backgroundBadFile">Картинка плохого качества</label>
          <input type="file" id="backgroundBadFile" name="badFile" multiple>
        </div>
        <div class="paddingLabel">
          <label for="backgroundGoodFile">Картинка хорошего качества</label>
          <input type="file" id="backgroundGoodFile" name="goodFile" multiple>
        </div>
        <button onclick="addBackground()" class="buttomGet">Добавить новый фон</button>
      </div>
    </div>
    <div style="width:40%; height:400px">
      <div style="width:850px; height:800px; overflow:auto; margin: 0 auto; display:block">
        <div class="blockBACKGROUND" v-for="(index, idx) in background" v-bind:key="idx">
          <div class="blockBAD" v-show="index.type === 'bad'">
            <p class="backTEXT" style="color:#ff0033">Фон плохого качества</p>
            <p class="backTEXT">id фона - {{index.id}}</p>
            <img class="backIMG" :src="'http://localhost:3000' + index.fileURL">
          </div>
          <div class="blockGOOD" v-show="index.type === 'good'">
            <p class="backTEXT" style="color:#1d9807">Фон хорошего качества</p>
            <p class="backTEXT">id фона - {{index.id}}</p>
            <img class="backIMG" :src="'http://localhost:3000' + index.fileURL">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex';

export default {
name: "background",
  data() {
    return {
      token: ''
    }
  },
  created() {
    this.SET_BACKGROUNDS();
  },
  computed: {
    ...mapGetters(['background'])
  },
  methods: {
  ...mapActions(['SET_BACKGROUNDS']),
    addBackground: function addBackground() {
  const data = new FormData();
  data.append('badFile', document.querySelector("#backgroundBadFile").files[0]);
  data.append('goodFile', document.querySelector("#backgroundGoodFile").files[0]);

  const config = {
    method: 'post',
    url: 'http://localhost:3000/admin/addBackground',
    headers: {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'multipart/form-data'
    },
    data: data,
  };

  axios(config)
      .then(function (response) {
        console.log(`response ${response}`);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}
  }
}
</script>

<style scoped>
.background{
  display:flex;
}
.background__param{
  width:30%;
  height:93.5vh;
  background:#5b6770;
}
</style>
