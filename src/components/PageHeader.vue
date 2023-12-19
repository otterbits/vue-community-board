<!-- PageHeader.vue -->
<template>
    <header>
        <h1>
          <a href="/">
        <img alt="Vue logo" href="/" src="../assets/logo.png" width="100" height="100">
         </a>
        </h1>
    </header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Otterworld</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
        </li>
        <!-- 로그인 기능은 추후 업데이트 -->
        <!-- <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/login">login</router-link></a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/board/list">board</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {


}
</script>

<style>

.nav-item:hover {
  border-radius: 3px;
  background-color: #95b9fb;
}

.nav-item {
  text-decoration: none;

}
a {
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none !important;
}

a.router-link-exact-active {
  padding: 5px;
  border-radius: 3px;
  font-weight: bold;
  color: #0054ef;
  text-decoration-line: nones !important;
}
</style>