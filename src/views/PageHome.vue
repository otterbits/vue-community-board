<!-- PageHome.vue -->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" width="300" height="300">
        <HelloWorld msg="Welcome to otterbit Vue.js Webpage"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'PageHome',
    components: {
        HelloWorld
    }
}</script>