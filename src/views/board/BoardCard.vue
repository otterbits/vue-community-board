<template>
  <div class="card-group">
    <div v-for="(item, index) in post" :key="item.post">
      <div class="card" v-if="index < 3">
      <div class="card-body">
        <router-link :to="`/board/detail?sk=&sv=&page=1&size=10&id=${item.id}`"><h5 class="card-title">{{ item.title }}</h5></router-link>
        <p class="card-text">author: {{ item.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardCard',
  data() {
    return {
      requestBody: this.$route.query,
      post: [],
    };
  },
  mounted() {
    this.fnGetView();
  },
  methods: {
    fnGetView() {
      this.$axios.get(this.$serverUrl + '/posts', {
        params: this.requestBody
      }).then((res) => {
        this.post = res.data;
      // }).catch((err) => {
      //   if (err.message.indexOf('Network Error') > -1) {
      //     alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
      //   }
      // });
      })
    },
  }
}
</script>

<style scoped>
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px;
  width: 370px;
  height: 300px;
  overflow: hidden;
}
.card-text {
  margin: 5px;
}

.card-title {
  font-size: 40px;
  color: #5c90f2;
  padding: 10px;
  border-radius: 3px;
}

.card-title:hover {
  color: #ffffff;
  padding: 10px;
  border-radius: 3px;
  background: #5c90f2;
}



</style>