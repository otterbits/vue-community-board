<!-- PageHome.vue -->
<template>
    <div class="home">
    <BoardCard/>
    </div>
</template>

<script>
// @ is an alias to /src
import BoardCard from './board/BoardCard.vue';

export default {
    name: 'PageHome',
    components: {
    BoardCard: BoardCard
}
}
</script>