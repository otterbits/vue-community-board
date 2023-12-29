<div align="center">

![header](https://capsule-render.vercel.app/api?text=vue-commnunity-board&type=soft&color=gradient&animation=fadeIn)
</div>

## :tada: 소개

<a href="https://otterbits.github.io/vue-community-board/">
  <img src="https://cdn.icon-icons.com/icons2/1790/PNG/512/homepage1_114609.png" alt="홈페이지 아이콘" width="50" height="50"/>
</a>
<br>

<span style="color:yellowgreen">**⬆️홈페이지 바로가기**</span>

**vue.cli**로 개발 환경을 구성하여 게시판을 만들어보려고 합니다.

프론트엔드를 시작하면서 빠르게 프레임워크를 알아가며 **html/css/js**를 공부하는 것이 좋다고 생각되어 진행하게 되었습니다.

<br>

## :computer: 기능

현재 해당 기능은 로컬에 있는 api로 작동하기 때문에 배포된 홈페이지 링크에서는 작동하지 않고 있습니다.

로컬 api로 테스트해본 결과를 통해 어떤 기능이 있는지 소개해드리려고 합니다.

---
### BOARD


- **POST**

![POST_글작성](https://github.com/otterbits/vue-community-board/assets/144116866/4a6a052c-0dfa-4b9b-9709-d97191d9e5d2) <p align="center">*POST: 글 작성*</p>

  - 작성 버튼을 누르면 글 작성 페이지로 넘어가며, 글을 작성할 수 있습니다.

---

- **GET**

![GET_작성한글바로불러오기](https://github.com/otterbits/vue-community-board/assets/144116866/5ddfb906-b127-4ae4-a703-c1ce64f29b3d) <p align="center">*GET: 작성 후 상세내용 불러오기*</p>

- 글 작성 후, 바로 해당 글의 상세내용을 볼 수 있습니다.

![GET_목록및상세글불러오기](https://github.com/otterbits/vue-community-board/assets/144116866/8333a9f4-3ed7-413e-a83b-9332d63fd5e6) <p align="center">*GET: board 글 목록 불러오기(1)*</p>

- 목록 버튼을 클릭하면 board 페이지로 이동, 모든 글 목록을 볼 수 있고, 해당 글을 클릭하면 상세 내용을 볼 수 있습니다.

![GET_목록및상세글불러오기_2](https://github.com/otterbits/vue-community-board/assets/144116866/8c07257f-7d4d-42cc-b08d-ea4602d8f818) <p align="center">*GET: board 글 목록 불러오기(2)*</p>

- 홈페이지에서 board 탭을 클릭하면 board 페이지로 이동, 모든 글 목록을 볼 수 있습니다.

![GET_최신글3개불러오기](https://github.com/otterbits/vue-community-board/assets/144116866/9a48b5fe-e254-40ce-ad12-e43868c0f833) <p align="center">*GET: board 최신 글 3개 Home 탭에 불러오기*</p>

- 홈페이지 board 탭에 글이 1개 이상 작성이 됐을 시, 최신 글로부터 3개까지 home 탭에 표시됩니다.

---

- **DELETE**

![DELETE_글삭제](https://github.com/otterbits/vue-community-board/assets/144116866/3ee88434-135e-4e6e-9ed9-2cdd7b99038f) <p align="center">*DELETE: 글 삭제(2)*</p>

- 삭제 버튼을 클릭하면 작성한 글을 삭제합니다.


---

- **ETC**

![GET_글필터기능](https://github.com/otterbits/vue-community-board/assets/144116866/32b2b9f2-e3d8-416a-b7b9-b5dfa839ede7) <p align="center">*글 목록 필터링*</p>

- 검색 버튼을 누르면 필터(작성자, 제목)에 따라 글 목록이 필터링됩니다.

<div align="center">
  
![html](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
</div>