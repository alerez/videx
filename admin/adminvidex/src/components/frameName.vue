<template>
  <div class="frameName">
    <div class="frameName__param">
      <div>
        <div class="textCenter">Новый цвет для рамки</div>
        <div class="paddingLabel">
          <label for="frameColorMaterial">Материал</label>
          <input type="text" id="frameColorMaterial">
        </div>
        <div class="paddingLabel">
          <label for="frameColor">Название нового цвета</label>
          <input type="text" id="frameColor">
        </div>
        <div class="paddingLabel">
          <label for="frameColorDescriptionEn">Название на Англ</label>
          <input type="text" id="frameColorDescriptionEn">
        </div>
        <div class="paddingLabel">
          <label for="frameColorDescriptionRu">Название на Рус</label>
          <input type="text" id="frameColorDescriptionRu">
        </div>
        <div class="paddingLabel">
          <label for="frameColorDescriptionUa">Название на Укр</label>
          <input type="text" id="frameColorDescriptionUa">
        </div>
        <div class="paddingLabel">
          <input type="file" id="frameColorFile" name="file" multiple>
        </div>
        <button onclick="addFrameColor()" class="buttomGet">Добавить новый цвет для рамки</button>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: "frameName",
  addFrameColor: function addFrameColor() {
  const data = new FormData();
  data.append('file', document.querySelector("#frameColorFile").files[0]);
  data.append('data', JSON.stringify({
    "color": document.querySelector("#frameColor").value,
    "material": document.querySelector("#frameColorMaterial").value,
    "description": {
      "en": document.querySelector("#frameColorDescriptionEn").value,
      "ru": document.querySelector("#frameColorDescriptionRu").value,
      "ua": document.querySelector("#frameColorDescriptionUa").value
    },
  }));

  const config = {
    method: 'post',
    url: 'http://localhost:3000/admin/addFrameColor',
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
</script>

<style scoped>
.frameName{
  display:flex;
}
.frameName__param{
  width:30%;
  height:93.5vh;
  background:#5b6770;
}
</style>
