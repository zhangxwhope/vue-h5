webpackJsonp([1],{"+G7n":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("MVMM"),n=i("9rMa"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("Z0/y")({name:"App"},s,!1,function(t){i("UoH6")},null,null).exports,_=i("zO6J"),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};i("Z0/y")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){i("t8ev")},"data-v-d8ec41bc",null).exports;var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-pages"},[e("button",{on:{click:this.goTest}},[this._v("开始")])])},staticRenderFns:[]};var d=i("Z0/y")({name:"home",data:function(){return{name:"home"}},methods:{goTest:function(){this.$router.push({name:"test",params:{id:123}})}}},o,!1,function(t){i("OZBG")},"data-v-2ef3bbe2",null).exports,u={name:"score",data:function(){return{score:0,scoreTips:"",rightAnswer:[2,7,12,13,18],scoreTipsArr:["哎，奈何小学老师死得早~","将就着吧~","别嘚瑟，也就这样~","智商差点超群","oh my god, 你真聪明"]}},computed:Object(n.c)(["answerid"]),created:function(){console.log(this.answerid),this.computedScore()},methods:{computedScore:function(){var t=this;this.answerid.forEach(function(e,i){e==t.rightAnswer[i]&&(t.score+=20)})}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"score-pages"},[i("div",{staticClass:"score-contant"},[i("div",{staticClass:"score-result"},[t._v(t._s(t.score))]),t._v(" "),i("div",{staticClass:"score-tips"},[t._v(t._s(t.scoreTipsArr[t.score/20-1]))])])])},staticRenderFns:[]};var p=i("Z0/y")(u,m,!1,function(t){i("uw78")},"data-v-a22b2d9a",null).exports,l=i("4YfN"),v=i.n(l),h={name:"test",data:function(){return{itemId:null,choosedNum:null,choosedId:null}},computed:Object(n.c)(["itemNum","level","itemDetail","timer"]),mounted:function(){},created:function(){},methods:v()({},Object(n.b)(["addNum","initializeData"]),{nextItem:function(){null!==this.choosedNum?(this.choosedNum=null,this.addNum(this.choosedId)):alert("您还没有选择答案~")},answerTable:function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},choseAnswer:function(t,e){this.choosedNum=t,this.choosedId=e},submitAnswer:function(){null!==this.choosedNum?(this.addNum(this.choosedId),clearInterval(),this.$router.push("score")):alert("您还没有选择答案哦~")}})},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"test-pages"},[i("div",{staticClass:"item-container"},[t.itemDetail.length>0?i("div",{staticClass:"question-title"},[t._v(t._s(t.itemDetail[t.itemNum-1].topic_name))]):t._e(),t._v(" "),i("ul",t._l(t.itemDetail[t.itemNum-1].topic_answer,function(e,a){return i("li",{key:a,staticClass:"question-clumn",class:t.choosedId===e.topic_answer_id?"choosed-class":"",on:{click:function(i){t.choseAnswer(a,e.topic_answer_id)}}},[i("span",{staticClass:"question-clumn-label"},[t._v(t._s(t.answerTable(a)))]),t._v(" "),i("span",[t._v(t._s(e.answer_name))])])}))]),t._v(" "),t.itemNum<t.itemDetail.length?i("div",{staticClass:"item-next",on:{click:t.nextItem}},[i("span",[t._v("下一题")])]):i("div",{staticClass:"item-next",on:{click:t.submitAnswer}},[i("span",[t._v("提交")])])])},staticRenderFns:[]};var f=i("Z0/y")(h,w,!1,function(t){i("+G7n")},"data-v-5eb69c40",null).exports;a.a.use(_.a);var g,b=new _.a({routes:[{path:"/",component:d},{path:"/home",name:"home",component:d},{path:"/score",name:"score",component:p},{path:"/test",name:"test",component:f}]}),E=i("a3Yh"),N=i.n(E),A=(g={},N()(g,"ADD_ITEMNUM",function(t,e){t.itemNum+=e}),N()(g,"REMBER_ANSWER",function(t,e){t.answerid.push(e)}),N()(g,"REMBER_TIME",function(t){t.timer=setInterval(function(){t.allTime++},1e3)}),N()(g,"INITIALIZE_DATA",function(t){t.itemNum=1,t.allTime=0,t.answerid=[]}),g);i("hRKE"),i("3cXf"),i("ZLEe"),i("rVsN");a.a.use(n.a);var C=new n.a.Store({state:{level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]},actions:{addNum:function(t,e){var i=t.commit,a=t.state;i("REMBER_ANSWER",e),a.itemNum<a.itemDetail.length&&i("ADD_ITEMNUM",1)},initializeData:function(t){(0,t.commit)("INITIALIZE_DATA")}},mutations:A});i("NkRY"),i("D0oh");a.a.config.productionTip=!1,new a.a({el:"#app",router:b,Vuex:n.a,store:C,components:{App:r},template:"<App/>"})},NkRY:function(t,e){},OZBG:function(t,e){},UoH6:function(t,e){},t8ev:function(t,e){},uw78:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6b536e1a10b466630764.js.map