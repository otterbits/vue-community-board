<!-- PageHeader.vue -->
<template>
    <header>
        <h1>
        <img alt="Vue logo" src="../assets/logo.png" width="100" height="100">
        </h1>
    </header>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/login">로그인</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/board/list">게시판</router-link>
        </div>
    <hr/>
</template>

<script>
export default {


}
</script>

<style scoped>

</style>