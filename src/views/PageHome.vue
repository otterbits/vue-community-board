<!-- PageHome.vue -->
<template>
    <div class="home">
    <Article/>
    </div>
</template>

<script>
// @ is an alias to /src
import Article from './Article/Article.vue'

export default {
    name: 'PageHome',
    components: {
        Article : Article
    }
}
</script>