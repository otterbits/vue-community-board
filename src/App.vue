<template>
  <div class="app-background">
  <PageHeader/> <!-- 헤더 컴포넌트 -->
  <router-view/> <!-- 페이지 이동이 표시될 곳 -->
  <PageFooter/> <!-- 푸터 컴포넌트 -->
 </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'


export default {
  name: 'App',
  components: {
    PageFooter,
    PageHeader
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #282e35;
}

#nav a.router-link-exact-active {
  color: #ebc60f
}
</style>
