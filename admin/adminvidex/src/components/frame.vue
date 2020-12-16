<template>
  <div class="frame">
    <div class="frame__param">
      <div>
        <div class="textCenter">Добавить новую рамку</div>
        <div class="paddingLabel">
          <label for="position">Ориентация рамки</label>
          <select id="position">
            <option>horizontal</option>
            <option>vertical</option>
          </select>
        </div>
        <div class="paddingLabel">
          <label for="color">Цвет</label>
          <input type="text" id="color">
        </div>
        <div class="paddingLabel">
          <label for="material">Материал</label>
          <input type="text" id="material">
        </div>
        <div class="paddingLabel">
          <label for="posts">Количество ячеек в рамке</label>
          <input type="text" id="posts">
        </div>
        <div class="paddingLabel">
          <label for="price">Цена</label>
          <input type="text" id="price">
        </div>
        <div class="paddingLabel">
          <label for="article">Артикул</label>
          <input type="text" id="article">
        </div>
        <div class="paddingLabel">
          <label for="productCode">Продукт код</label>
          <input type="text" id="productCode">
        </div>
        <div class="paddingLabel">
          <input type="file" id="File" name="file" multiple>
        </div>
        <button onclick="addFrame()" class="buttomGet">Добавить рамку</button>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "frame",
  data() {
    return {
      token: ''
    }
  },
  methods: {
    addFrame: function addFrame() {
  try {
    const data = new FormData();
    data.append('file', document.querySelector("#File").files[0]);
    data.append('data', JSON.stringify({
      "position": document.querySelector("#position").value,
      "color": document.querySelector("#color").value,
      "material": document.querySelector("#material").value,
      "posts": Number(document.querySelector("#posts").value),
      "price": Number(document.querySelector("#price").value),
      "article": document.querySelector("#article").value,
      "productCode": Number(document.querySelector("#productCode").value)
    }));
    console.log(data);
    const config = {
      method: 'post',
      url: 'http://localhost:3000/admin/addFrame',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'multipart/form-data',
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
  } catch (e){
    console.error(e);
  }
}
  }
}
</script>

<style scoped>
.frame{
  display:flex;
}
.frame__param{
  width:30%;
  height:93.5vh;
  background:#5b6770;
}
</style>
