<template>
  <div>
    <div class="nav">
      <div class="nav__block">
        <router-link to="/background">Фон</router-link>
      </div>
      <div class="nav__block">
        <router-link to="/frame">Рамка</router-link>
      </div>
      <div class="nav__block">
        <router-link to="/frameName">Рамка имя</router-link>
      </div>
      <div class="nav__block">
        <router-link to="/mechanism">Механизм</router-link>
      </div>
      <div class="nav__block">
        <router-link to="/mechanismName">Механизм имя</router-link>
      </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
export default {
name: "admin"
}
</script>

<style scoped>
.nav{
  background:#ff7a00;
  display:flex;
}
.nav__block{
  display:flex;
  flex-basis:20%;
}
.nav__block > a{
  flex-basis:100%;
  text-decoration:none;
  font-size:26px;
  text-align:center;
  margin: 0 auto;
  padding:20px 20px;
  color:aliceblue;
  font-family:Arial,sans-serif;
  font-weight:bold;
}
.nav__block:hover{
  outline: 1px solid #000;
}

</style>
