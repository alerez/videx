<template>
  <div class="mechanismName">
    <div class="mechanismName__param">
      <div>
        <div class="textCenter">Механизм название</div>
        <div class="paddingLabel">
          <label for="mechanismColorColor">Цвет</label>
          <input type="text" id="mechanismColorColor">
        </div>
        <div class="paddingLabel">
          <label for="mechanismColorDescriptionEn">Название на Англ</label>
          <input type="text" id="mechanismColorDescriptionEn">
        </div>
        <div class="paddingLabel">
          <label for="mechanismColorDescriptionRu">Название на Рус</label>
          <input type="text" id="mechanismColorDescriptionRu">
        </div>
        <div class="paddingLabel">
          <label for="mechanismColorDescriptionUa">Название на Укр</label>
          <input type="text" id="mechanismColorDescriptionUa">
        </div>
        <div class="paddingLabel">
          <input type="file" id="mechanismColorFile" name="file" multiple>
        </div>
        <button onclick="addMechanismColor()" class="buttomGet">Добавить новое название механизма</button>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "mechanismName",
  data() {
    return {
      token: ''
    }
  },
  methods: {
    addMechanismColor: function addMechanismColor() {
      const data = new FormData();
      data.append('file', document.querySelector("#mechanismColorFile").files[0]);
      data.append('data', JSON.stringify({
        "color": document.querySelector("#mechanismColorColor").value,
        "description": {
          "en": document.querySelector("#mechanismColorDescriptionEn").value,
          "ru": document.querySelector("#mechanismColorDescriptionRu").value,
          "ua": document.querySelector("#mechanismColorDescriptionUa").value
        },
      }));

      const config = {
        method: 'post',
        url: 'http://localhost:3000/admin/addMechanismColor',
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
.mechanismName{
  display:flex;
}
.mechanismName__param{
  width:30%;
  height:93.5vh;
  background:#5b6770;
}
</style>
