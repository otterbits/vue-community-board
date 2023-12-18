<template>
    <div class="board-detail">
      <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div>
      <div class="board-content">
        <input type="text" v-model="title" class="w3-input w3-border" placeholder="제목을 입력해주세요.">
        <input type="text" v-model="author" class="w3-input w3-border" placeholder="작성자를 입력해주세요." v-if="id === undefined">
      </div>
      <div class="board-content">
        <textarea id="" cols="30" rows="10" v-model="content" class="w3-input w3-border" style="resize: none;">
        </textarea>
      </div>
      <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() { //변수생성
      return {
        requestBody: this.$route.query,
        id: this.$route.query.id,
        title: '',
        author: '',
        content: '',
        created_at: '',
        date: ''
      }
    },
    mounted() {
      console.log('this id = ' + this.id)
      this.fnGetView()
    },
    methods: {
      fnGetView() {
        if (this.id !== undefined) {
          this.$axios.get('http://localhost:8081/api/post/${this.id}', {
          // this.$axios.get(this.$serverUrl + 'posts' + '4', {
            params: this.requestBody
          }).then((res) => {
            this.title = res.data.title
            this.author = res.data.author
            this.content = res.data.content
            this.created_at = res.data.created_at
            this.date = res.data.date
          }).catch((err) => {
            console.log(err)
          })
        }
      },
      fnList() {
        delete this.requestBody.id
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
      },
      fnView(id) {
        this.requestBody.id = '1'
        this.$router.push({
          path: './detail',
          query: this.requestBody
        })
      },
      fnSave() {
        let apiUrl = this.$serverUrl + '/post/create';
        this.form = {
          "id": this.id,
          "title": this.title,
          "content": this.content,
          "author": this.author,
          "date": this.date
        };
  
        if (this.id === undefined) {
          //INSERT
          this.$axios.post(apiUrl, this.form)
          .then((res) => {
            alert('글이 저장되었습니다.')
            this.fnView(res.data.id)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('저장안돼')
            }
          })
        } else {
          //UPDATE
          this.$axios.patch(apiUrl, this.form)
          .then((res) => {
            alert('글이 저장되었습니다.')
            this.fnView(res.data.id)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        }
      }
    }
  }
  </script>
  <style scoped>
  
  </style>