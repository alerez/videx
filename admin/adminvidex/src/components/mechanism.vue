<template>
  <div class="mechanism">
    <div class="mechanism__param">
      <div>
        <div class="textCenter">Добвить новий механизм</div>
        <div class="paddingLabel">
          <label for="mechanismColor">Цвет</label>
          <input type="text" id="mechanismColor">
        </div>
        <div class="paddingLabel">
          <label for="mechanismType">Тип</label>
          <input type="text" id="mechanismType">
        </div>
        <div class="paddingLabel">
          <label for="mechanismMaterial">Материал</label>
          <input type="text" id="mechanismMaterial">
        </div>
        <div class="paddingLabel">
          <label for="mechanismPrice">Цана</label>
          <input type="text" id="mechanismPrice">
        </div>
        <div class="paddingLabel">
          <label for="mechanismDescriptionEn">Название на Англ</label>
          <input type="text" id="mechanismDescriptionEn">
        </div>
        <div class="paddingLabel">
          <label for="mechanismDescriptionRu">Название на Рус</label>
          <input type="text" id="mechanismDescriptionRu">
        </div>
        <div class="paddingLabel">
          <label for="mechanismDescriptionUa">Название на Укр</label>
          <input type="text" id="mechanismDescriptionUa">
        </div>
        <div class="paddingLabel">
          <label for="mechanismArticle">Артикул</label>
          <input type="text" id="mechanismArticle">
        </div>
        <div class="paddingLabel">
          <label for="mechanismProductCode">Продукт код</label>
          <input type="text" id="mechanismProductCode">
        </div>
        <div class="paddingLabel">
          <input type="file" id="mechanismFile" name="file" multiple>
        </div>
        <button onclick="addMechanism()" class="buttomGet">Добавить новый механизм</button>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: "mechanism",
  data() {
    return {
      token: ''
    }
  },
  methods: {
   addMechanism: function addMechanism() {
  const data = new FormData();
  data.append('file', document.querySelector("#mechanismFile").files[0]);
  data.append('data', JSON.stringify({
    "color": document.querySelector("#mechanismColor").value,
    "type": document.querySelector("#mechanismType").value,
    "material": document.querySelector("#mechanismMaterial").value,
    "price": Number(document.querySelector("#mechanismPrice").value),
    "description": {
      "en": document.querySelector("#mechanismDescriptionEn").value,
      "ru": document.querySelector("#mechanismDescriptionRu").value,
      "ua": document.querySelector("#mechanismDescriptionUa").value
    },
    "article": document.querySelector("#mechanismArticle").value,
    "productCode": Number(document.querySelector("#mechanismProductCode").value)
  }));
  console.log(data);

  const config = {
    method: 'post',
    url: 'http://localhost:3000/admin/addMechanism',
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
.mechanism{
  display:flex;
}
.mechanism__param{
  width:30%;
  height:105vh;
  background:#5b6770;
}
</style>
