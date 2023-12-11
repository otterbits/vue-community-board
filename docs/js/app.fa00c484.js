(function(){"use strict";var t={1810:function(t,e,n){var a=n(9963),o=n(6252);function r(t,e,n,a,r,i){const s=(0,o.up)("PageHeader"),l=(0,o.up)("router-view"),u=(0,o.up)("PageFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(l),(0,o.Wm)(u)],64)}const i={id:"nav"},s=(0,o._)("hr",null,null,-1);function l(t,e,n,a,r,l){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o._)("div",i,[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"board/list"},{default:(0,o.w5)((()=>[(0,o.Uk)("게시판")])),_:1})])]),s],64)}var u={},c=n(3744);const d=(0,c.Z)(u,[["render",l]]);var h=d;const b=(0,o._)("hr",null,null,-1),p=(0,o._)("footer",null," 여기는 footer 자리입니다. ",-1);function g(t,e,n,a,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[b,p],64)}var v={};const f=(0,c.Z)(v,[["render",g]]);var w=f,k={name:"App",components:{PageFooter:w,PageHeader:h}};const m=(0,c.Z)(k,[["render",r]]);var y=m,I=n(2201),C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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";const U={class:"home"},W=(0,o._)("img",{alt:"Vue logo",src:C},null,-1);function x(t,e,n,a,r,i){const s=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",U,[W,(0,o.Wm)(s,{msg:"Welcome to Your Vue.js App"})])}var z=n(3577);const B={class:"hello"},R=(0,o.uE)('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function Z(t,e,n,a,r,i){return(0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("h1",null,(0,z.zw)(n.msg),1),R])}var E={name:"HelloWorld",props:{msg:String}};const P=(0,c.Z)(E,[["render",Z],["__scopeId","data-v-b9167eee"]]);var V=P,G={name:"PageHome",components:{HelloWorld:V}};const N=(0,c.Z)(G,[["render",x]]);var Q=N;const Y={class:"board-list"},j={class:"common-buttons"},O={class:"w3-table-all"},A=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"No"),(0,o._)("th",null,"제목"),(0,o._)("th",null,"작성자"),(0,o._)("th",null,"등록일시")])],-1),D=["onClick"],S={key:0,class:"pagination w3-bar w3-padding-16 w3-small"},q={class:"pg"},J=["onClick"],L=(0,o._)("option",{value:""},"- 선택 -",-1),M=(0,o._)("option",{value:"author"},"작성자",-1),K=(0,o._)("option",{value:"title"},"제목",-1),H=(0,o._)("option",{value:"contents"},"내용",-1),T=[L,M,K,H];function X(t,e,n,r,i,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",Y,[(0,o._)("div",j,[(0,o._)("button",{type:"button",class:"w3-button w3-round w3-blue-gray",onClick:e[0]||(e[0]=(...t)=>s.fnWrite&&s.fnWrite(...t))},"등록")]),(0,o._)("table",O,[A,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.list,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[(0,o._)("td",null,(0,z.zw)(t.idx),1),(0,o._)("td",null,[(0,o._)("a",{onClick:e=>s.fnView(`${t.idx}`)},(0,z.zw)(t.title),9,D)]),(0,o._)("td",null,(0,z.zw)(t.author),1),(0,o._)("td",null,(0,z.zw)(t.created_at),1)])))),128))])]),i.paging.total_list_cnt?((0,o.wg)(),(0,o.iD)("div",S,[(0,o.Uk)(' 0"> '),(0,o._)("span",q,[(0,o._)("a",{href:"javascript:;",onClick:e[1]||(e[1]=t=>s.fnPage(1)),class:"first w3-button w3-border"},"<<"),i.paging.start_page>10?((0,o.wg)(),(0,o.iD)("a",{key:0,href:"javascript:;",onClick:e[2]||(e[2]=t=>s.fnPage(""+(i.paging.start_page-1))),class:"prev w3-button w3-border"},"<")):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.paginavigation(),((t,e)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[i.paging.page==t?((0,o.wg)(),(0,o.iD)("strong",{class:"w3-button w3-border w3-green",key:e},(0,z.zw)(t),1)):((0,o.wg)(),(0,o.iD)("a",{class:"w3-button w3-border",href:"javascript:;",onClick:e=>s.fnPage(`${t}`),key:e},(0,z.zw)(t),9,J))],64)))),256)),i.paging.total_page_cnt>i.paging.end_page?((0,o.wg)(),(0,o.iD)("a",{key:1,href:"javascript:;",onClick:e[3]||(e[3]=t=>s.fnPage("{$paging.end_page+1}")),class:"next w3-button w3-border"},">")):(0,o.kq)("",!0),(0,o._)("a",{href:"javascript:;",onClick:e[4]||(e[4]=t=>s.fnPage(`${i.paging.total_page_cnt}`)),class:"last w3-button w3-border"},">>")])])):(0,o.kq)("",!0)]),(0,o._)("div",null,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>i.search_key=t)},T,512),[[a.bM,i.search_key]]),(0,o.Uk)("   "),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=e=>t.search_value=e),onKeyup:e[7]||(e[7]=(0,a.D2)((t=>s.fnPage()),["enter"]))},null,544),[[a.nr,t.search_value]]),(0,o.Uk)("   "),(0,o._)("button",{onClick:e[8]||(e[8]=t=>s.fnPage())},"검색")])],64)}n(560);var _={data(){return{requestBody:{},list:{},no:"",paging:{block:0,end_page:0,next_block:0,page:0,page_size:0,prev_block:0,start_index:0,start_page:0,total_block_cnt:0,total_list_cnt:0,total_page_cnt:0},page:this.$route.query.page?this.$route.query.page:1,size:this.$route.query.size?this.$route.query.size:10,search_key:this.$route.query.sk?this.$route.query.sk:"",serach_value:this.$route.query.sv?this.$route.query.sv:"",paginavigation:function(){let t=[],e=this.paging.start_page,n=this.paging.end_page;for(let a=e;a<=n;a++)t.push(a);return t}}},mounted(){this.fnGetList()},methods:{fnGetList(){this.list={idx:1,title:"제목1",author:"작성자1",created_at:"작성일시1"}},fnView(t){this.requestBody.idx=t,this.$router.push({path:"./detail",query:this.requestBody})},fnWrite(){this.$router.push({path:"./write"})},fnPage(t){this.page!==t&&(this.page=t),this.fnGetList()}}};const F=(0,c.Z)(_,[["render",X]]);var $=F;const tt={class:"board-detail"},et={class:"common-buttons"},nt={class:"board-contents"},at={class:"w3-large"},ot=(0,o._)("br",null,null,-1),rt={class:"board-contents"},it={class:"common-buttons"};function st(t,e,n,a,r,i){return(0,o.wg)(),(0,o.iD)("div",tt,[(0,o._)("div",et,[(0,o._)("button",{type:"button",class:"w3-button w3-round w3-blue-gray",onClick:e[0]||(e[0]=(...t)=>i.fnUpdate&&i.fnUpdate(...t))},"수정"),(0,o.Uk)("  "),(0,o._)("button",{type:"button",class:"w3-button w3-round w3-red",onClick:e[1]||(e[1]=(...t)=>i.fnDelete&&i.fnDelete(...t))},"삭제"),(0,o.Uk)("  "),(0,o._)("button",{type:"button",class:"w3-button w3-round w3-gray",onClick:e[2]||(e[2]=(...t)=>i.fnList&&i.fnList(...t))},"목록")]),(0,o._)("div",nt,[(0,o._)("h3",null,(0,z.zw)(r.title),1),(0,o._)("div",null,[(0,o._)("strong",at,(0,z.zw)(r.author),1),ot,(0,o._)("span",null,(0,z.zw)(r.created_at),1)])]),(0,o._)("div",rt,[(0,o._)("span",null,(0,z.zw)(r.contents),1)]),(0,o._)("div",it,[(0,o._)("button",{type:"button",class:"w3-button w3-round w3-blue-gray",onClick:e[3]||(e[3]=(...t)=>i.fnUpdate&&i.fnUpdate(...t))},"수정"),(0,o.Uk)("  "),(0,o._)("button",{type:"button",class:"w3-button w3-round w3-red",onClick:e[4]||(e[4]=(...t)=>i.fnDelete&&i.fnDelete(...t))},"삭제"),(0,o.Uk)("  "),(0,o._)("button",{type:"button",class:"w3-button w3-round w3-gray",onClick:e[5]||(e[5]=(...t)=>i.fnList&&i.fnList(...t))},"목록")])])}var lt={data(){return{requestBody:this.$route.query,idx:this.$route.query.idx,title:"",author:"",contents:"",created_at:""}},mounted(){this.fnGetView()},methods:{fnGetView(){this.$axios.get(this.$serverUrl+"/board/"+this.idx,{params:this.requestBody}).then((t=>{this.title=t.data.title,this.author=t.data.author,this.contents=t.data.contents,this.created_at=t.data.created_at})).catch((t=>{t.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")}))},fnList(){delete this.requestBody.idx,this.$router.push({path:"./list",query:this.requestBody})},fnUpdate(){this.$router.push({path:"./write",query:this.requestBody})},fnDelete(){confirm("삭제하시겠습니까?")&&this.$axios.delete(this.$serverUrl+"/board/"+this.idx,{}).then((()=>{alert("삭제되었습니다."),this.fnList()})).catch((t=>{console.log(t)}))}}};const ut=(0,c.Z)(lt,[["render",st]]);var ct=ut;const dt={class:"board-detail"},ht={class:"common-buttons"},bt={class:"board-contents"},pt={class:"board-contents"},gt={class:"common-buttons"};function vt(t,e,n,r,i,s){return(0,o.wg)(),(0,o.iD)("div",dt,[(0,o._)("div",ht,[(0,o._)("button",{type:"button",class:"w3-button w3-round w3-blue-gray",onClick:e[0]||(e[0]=(...t)=>s.fnSave&&s.fnSave(...t))},"저장"),(0,o.Uk)("  "),(0,o._)("button",{type:"button",class:"w3-button w3-round w3-gray",onClick:e[1]||(e[1]=(...t)=>s.fnList&&s.fnList(...t))},"목록")]),(0,o._)("div",bt,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>i.title=t),class:"w3-input w3-border",placeholder:"제목을 입력해주세요."},null,512),[[a.nr,i.title]]),void 0===i.idx?(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:0,type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>i.author=t),class:"w3-input w3-border",placeholder:"작성자를 입력해주세요."},null,512)),[[a.nr,i.author]]):(0,o.kq)("",!0)]),(0,o._)("div",pt,[(0,o.wy)((0,o._)("textarea",{id:"",cols:"30",rows:"10","onUpdate:modelValue":e[4]||(e[4]=t=>i.contents=t),class:"w3-input w3-border",style:{resize:"none"}},"\n        ",512),[[a.nr,i.contents]])]),(0,o._)("div",gt,[(0,o._)("button",{type:"button",class:"w3-button w3-round w3-blue-gray",onClick:e[5]||(e[5]=(...t)=>s.fnSave&&s.fnSave(...t))},"저장"),(0,o.Uk)("  "),(0,o._)("button",{type:"button",class:"w3-button w3-round w3-gray",onClick:e[6]||(e[6]=(...t)=>s.fnList&&s.fnList(...t))},"목록")])])}var ft={data(){return{requestBody:this.$route.query,idx:this.$route.query.idx,title:"",author:"",contents:"",created_at:""}},mounted(){this.fnGetView()},methods:{fnGetView(){void 0!==this.idx&&this.$axios.get(this.$serverUrl+"/board/"+this.idx,{params:this.requestBody}).then((t=>{this.title=t.data.title,this.author=t.data.author,this.contents=t.data.contents,this.created_at=t.data.created_at})).catch((t=>{console.log(t)}))},fnList(){delete this.requestBody.idx,this.$router.push({path:"./list",query:this.requestBody})},fnView(t){this.requestBody.idx=t,this.$router.push({path:"./detail",query:this.requestBody})},fnSave(){let t=this.$serverUrl+"/board";this.form={idx:this.idx,title:this.title,contents:this.contents,author:this.author},void 0===this.idx?this.$axios.post(t,this.form).then((t=>{alert("글이 저장되었습니다."),this.fnView(t.data.idx)})).catch((t=>{t.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다. \n잠시 후 다시 시도해주세요.")})):this.$axios.patch(t,this.form).then((t=>{alert("글이 저장되었습니다."),this.fnView(t.data.idx)})).catch((t=>{t.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다. \n잠시 후 다시 시도해주세요.")}))}}};const wt=(0,c.Z)(ft,[["render",vt]]);var kt=wt;const mt=[{path:"/",name:"PageHome",component:Q},{path:"/about",name:"About",component:()=>n.e(443).then(n.bind(n,8728))},{path:"/board/list",name:"BoardList",component:$},{path:"/board/detail",name:"BoardDetail",component:ct},{path:"/board/write",name:"BoardWrite",component:kt}],yt=(0,I.p7)({history:(0,I.PO)("/vue-community-board/"),routes:mt});var It=yt,Ct=n(5121);const Ut=(0,a.ri)(y);Ut.config.globalProperties.$axios=Ct.Z,Ut.config.globalProperties.$serverUrl="//localhost:8081",Ut.use(It).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],r=t[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,o,r]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.e88fda76.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-community-board:";n.l=function(a,o,r,i){if(t[a])t[a].push(o);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+r),s.src=a),t[a]=[o];var h=function(e,n){s.onerror=s.onload=null,clearTimeout(b);var o=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},b=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vue-community-board/"}(),function(){var t={143:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(e),s=new Error,l=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(e&&e(a);u<i.length;u++)r=i[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunkvue_community_board"]=self["webpackChunkvue_community_board"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1810)}));a=n.O(a)})();
//# sourceMappingURL=app.fa00c484.js.map