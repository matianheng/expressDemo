(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["writeMes"],{"02f1":function(t,e,s){t.exports=s.p+"img/upload1.c19265a0.png"},"057b":function(t,e,s){"use strict";s("e274")},"13b6":function(t,e,s){t.exports=s.p+"img/upload2.159e60eb.png"},"1fff":function(t,e,s){"use strict";s.r(e);var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"writeMes box"},[a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("手机号")]),a("div",{staticClass:"item-r hasTextCol"},[t._v(t._s(t.mobile))])]),a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("选择证件")]),a("div",{staticClass:"item-r flex",on:{click:function(e){return e.stopPropagation(),t.choosePicker(0)}}},[a("div",{staticClass:"hasTextCol"},[t._v(t._s(t.tempCardName?t.tempCardName:"居民身份证"))]),a("img",{attrs:{src:s("be6c")}})])]),a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("真实姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadJson.name,expression:"uploadJson.name"}],staticClass:"item-input tr",attrs:{placeholder:"请输入姓名"},domProps:{value:t.uploadJson.name},on:{input:[function(e){e.target.composing||t.$set(t.uploadJson,"name",e.target.value)},t.nameLen]}})]),a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("证件号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadJson.authNumber,expression:"uploadJson.authNumber"}],staticClass:"item-input tr",attrs:{placeholder:"请输入证件号"},domProps:{value:t.uploadJson.authNumber},on:{input:[function(e){e.target.composing||t.$set(t.uploadJson,"authNumber",e.target.value)},t.authNumberLen]}})]),0==t.tempCardType?a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadJson.address,expression:"uploadJson.address"}],staticClass:"item-input tr",attrs:{placeholder:"请输入身份证地址"},domProps:{value:t.uploadJson.address},on:{input:function(e){e.target.composing||t.$set(t.uploadJson,"address",e.target.value)}}})]):t._e(),a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("证件起始日期")]),a("div",{staticClass:"item-r flex",on:{click:function(e){return e.stopPropagation(),t.dateDialogShow("0")}}},[a("div",{class:t.startTime?"hasTextCol":""},[t._v(t._s(t.startTime?t.startTime:"请选择"))]),a("img",{attrs:{src:s("be6c")}})])]),a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("长期证件")]),t.isLong?a("img",{staticClass:"time-status",attrs:{src:s("47d5")},on:{click:function(e){e.stopPropagation(),t.isLong=!1}}}):a("img",{staticClass:"time-status",attrs:{src:s("e452")},on:{click:function(e){e.stopPropagation(),t.isLong=!0}}})]),t.isLong?t._e():a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("证件截止日期")]),a("div",{staticClass:"item-r flex",on:{click:function(e){return e.stopPropagation(),t.dateDialogShow("1")}}},[a("div",{class:t.endTime?"hasTextCol":""},[t._v(t._s(t.endTime?t.endTime:"请选择"))]),a("img",{attrs:{src:s("be6c")}})])]),0!=t.tempCardType?a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("性别")]),a("div",{staticClass:"item-r flex",on:{click:function(e){return e.stopPropagation(),t.choosePicker(1)}}},[a("div",{class:t.chooseSex[t.checkSex]?"hasTextCol":""},[t._v(t._s(t.chooseSex[t.checkSex]?t.chooseSex[t.checkSex]:"请选择"))]),a("img",{attrs:{src:s("be6c")}})])]):t._e(),0!=t.tempCardType?a("div",{staticClass:"item flex space_between"},[a("div",{staticClass:"item-l font-bold"},[t._v("出生日期")]),a("div",{staticClass:"item-r flex",on:{click:function(e){return e.stopPropagation(),t.dateDialogShow("2")}}},[a("div",{class:t.birthDay?"hasTextCol":""},[t._v(t._s(t.birthDay?t.birthDay:"请选择"))]),a("img",{attrs:{src:s("be6c")}})])]):t._e(),a("div",{staticClass:"item flex space_between noBorder"},[a("div",{staticClass:"item-l font-bold"},[t._v("上传手持证件照照片")]),a("div",{staticClass:"item-r item-r-img",on:{click:function(e){return e.stopPropagation(),t.exampleShowFn.apply(null,arguments)}}},[t._v("查看示例图")])]),a("div",{staticClass:"flex upload-img space_between tc"},[a("div",{key:"img1_"+t.uploadImg1.localImg,staticClass:"upload-img1 bgCss",style:{"background-image":"url("+(t.uploadImg1.res?t.uploadImg1.localImg:t.upload1)+")"},on:{click:function(e){return e.stopPropagation(),t.openUploadDialog(1,"",t.tempCardType,!0)}}},[t.uploadImg1.localImg?a("div",{staticClass:"reset-upload"},[t._v("重新上传")]):a("div",{staticClass:"no-upload"},[a("img",{attrs:{src:s("5336")}}),a("div",[t._v("上传手持人像面")])])]),a("div",{key:"img2_"+t.uploadImg2.localImg,staticClass:"upload-img2 bgCss",style:{"background-image":"url("+(t.uploadImg2.res?t.uploadImg2.localImg:t.upload2)+")"},on:{click:function(e){return e.stopPropagation(),t.openUploadDialog(2,"",t.tempCardType,0!=t.tempCardType,t.getUploadMesApp2)}}},[t.uploadImg2.res?a("div",{staticClass:"reset-upload"},[t._v("重新上传")]):a("div",{staticClass:"no-upload"},[a("img",{attrs:{src:s("5336")}}),a("div",[t._v("上传国徽面")])])])]),a("div",{staticClass:"submit tc phone-pad"},[a("div",{staticClass:"submit-text"},[t._v("信息仅用于实名认证，我们将严格保护您的数据和隐私安全")]),a("div",{staticClass:"btn font-bold",on:{click:function(e){return e.stopPropagation(),t.submitBtn.apply(null,arguments)}}},[a("div",{class:t.hasColBtn?"check":""},[t._v("提交")])])]),t.exampleShow?a("div",{staticClass:"example hiddenbg"},[a("div",{staticClass:"example-main"},[a("img",{staticClass:"close",attrs:{src:s("3667")},on:{click:function(e){e.stopPropagation(),t.exampleShow=!1}}}),a("div",{staticClass:"example-title tc font-bold"},[t._v("查看示例图")]),t._m(0),a("img",{staticClass:"example-img",attrs:{src:s("8336")}})])]):t._e(),t.noticeShow?a("div",{staticClass:"credentials-bg hiddenbg tc"},[a("div",{staticClass:"credentials-bg-main hiddenbg_div"},[a("div",{staticClass:"credentials-bg-top"},[12==t.noticeStatus||9==t.noticeStatus?a("div",{staticClass:"text3"},[t._v(t._s(t.noticeMes))]):t._e(),11==t.noticeStatus?a("div",{staticClass:"text2 tl"},[t._v("\n          1.请保证图片焦点清晰，信息可读,不可太小或模糊不清"),a("br"),t._v("\n          2.不可有反光影响文字显示"),a("br"),t._v(" \n          3.请让四个边角完整展示，不要用手遮挡证件"),a("br"),t._v(" \n          4.请不要自行加水印"),a("br"),t._v(" \n          5.请不要使用扫描件或复印件"),a("br")]):t._e(),0==t.noticeStatus?a("div",{staticClass:"text3"},[t._v("退出后本次编辑将不被保存"),a("br"),t._v("是否确认退出")]):t._e(),1==t.noticeStatus||2==t.noticeStatus?a("div",{staticClass:"text1"},[t._v(t._s(1==t.noticeStatus?"认证失败":2==t.noticeStatus?"提交成功":""))]):t._e(),1==t.noticeStatus||2==t.noticeStatus?a("div",{staticClass:"text2"},[t._v(t._s(1==t.noticeStatus?"暂不支持14周岁以下的用户进行实名认证":2==t.noticeStatus?"我们将尽快审核您的资料":""))]):t._e()]),a("div",{staticClass:"flex font-bold toast-mybtn"},[11==t.noticeStatus?a("div",{staticClass:"munual-btn1",on:{click:function(e){e.stopPropagation(),t.noticeShow=!1}}},[t._v("重新识别证件")]):t._e(),0==t.noticeStatus?a("div",{staticClass:"munual-btn1",on:{click:function(e){return e.stopPropagation(),t.comfirCancel.apply(null,arguments)}}},[t._v("取消")]):t._e(),9==t.noticeStatus?a("div",{staticClass:"munual-btn1",on:{click:function(e){return e.stopPropagation(),t.isHideDialog.apply(null,arguments)}}},[t._v("返回")]):t._e(),0==t.noticeStatus?a("div",{staticClass:"line"}):t._e(),0==t.noticeStatus?a("div",{staticClass:"munual-btn2",on:{click:function(e){return e.stopPropagation(),t.comfirmSure.apply(null,arguments)}}},[t._v("确定")]):t._e(),1==t.noticeStatus||2==t.noticeStatus||12==t.noticeStatus?a("div",{staticClass:"munual-btn2",on:{click:function(e){return e.stopPropagation(),t.clickHandler.apply(null,arguments)}}},[t._v("我知道了")]):t._e(),9==t.noticeStatus?a("div",{staticClass:"munual-btn2",on:{click:function(e){return e.stopPropagation(),t.loginPage.apply(null,arguments)}}},[t._v("切换帐号")]):t._e()])])]):t._e(),a("DatetimePicker",{ref:"date",attrs:{startTime:t.startTime},on:{getDate:t.getDate}}),a("Picker",{ref:"Picker",attrs:{item:t.pickerItem},on:{getPicker:t.getPicker}}),a("uploadImage",{ref:"uploadImage",attrs:{uploadIndex:t.uploadIndex},on:{localImage:t.localImage}})],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"example-text tl"},[t._v("\n        1. 请保证图片焦点清晰，信息可读，不可太小或模糊 不清"),s("br"),t._v("\n        2. 不可有反光影响文字显示"),s("br"),t._v(" \n        3. 请让四个边角完整展示，不要用手遮挡证件"),s("br"),t._v("  \n        4. 请不要自行加水印"),s("br"),t._v("  \n        5. 请不要使用扫描件或复印件"),s("br")])}],n=(s("8e6e"),s("ac6a"),s("456d"),s("28a5"),s("a481"),s("96cf"),s("3b8d")),r=s("bd86"),c=(s("7f7f"),s("02f1")),l=s.n(c),u=s("13b6"),p=s.n(u),d=s("ef4f"),m=s("dce9"),h=s("016a"),g=s("6407"),f=s("b3e4"),v=s("4626");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var A=s("e762").Base64,y={name:"writeMes",mixins:[d["a"],m["a"],h["a"],g["a"]],beforeRouteLeave:function(t,e,s){console.log("beforeRouteLeave==="),this.comfirmBtn?(this.noticeShow=!0,this.noticeStatus=0,this.comfirmTwo=s):s()},data:function(){return{toastPush:!1,myurl:null,comfirmTwo:null,upload1:l.a,upload2:p.a,uploadImg1:{url:"",res:!1,localImg:""},uploadImg2:{url:"",res:!1,localImg:""},writeJson:{cardType:0},chooseSex:["男","女"],chooseCardType:["居民身份证","护照","台湾居民往来通行证","港澳居民往来通行证"],pickerItem:[],exampleShow:!1,noticeShow:!1,noticeStatus:-1,isLong:!1,mobile:"",uploadJson:{name:"",authType:1,authNumber:"",authPassType:99,authPassToken:"",imageId:"",frontImgUrl:"",backImgUrl:"",expireDate:"",holdImgUrl:"",gender:"1",birth:"",address:""},preventRes:!1,noticeMes:"",type:""}},created:function(){this.mobile=localStorage.getItem("mobile"),this.type=this.$route.query.type,console.log("人工审核页面===this.type=",this.type)},activated:function(){this.toastPush=!1,this.myurl=window.location.href,this.onGetImgKey=!0,this.tempCardName=decodeURIComponent(this.$route.query.typeName),this.tempCardType=this.getCardType(this.tempCardName),this.clearData();var t=this.$store.state.certCardMes,e=t.img1,s=t.img2,a=t.postData,i=t.isLong;console.log("获取到的图片信息=",{img1:e,img2:s,postData:a,isLong:i},"当前页面=",this.$route),e?(this.uploadImg1=e,e.name&&(this.uploadJson.name=e.name),e.id_number&&(this.uploadJson.authNumber=e.id_number),e.address?this.uploadJson.address=e.address:this.uploadJson.address="",this.uploadImg1.localImg="",this.uploadImg1.url="",this.uploadImg1.res=!1,this.uploadImg1.file=""):this.uploadImg1={url:"",res:!1,localImg:""},s?(this.uploadImg2=s,this.startTime=this.uploadImg2.startTime,this.endTime=this.uploadImg2.endTime):this.uploadImg2={url:"",res:!1,localImg:""},a&&(this.uploadJson=C(C({},a),{},{authPassType:99})),this.isLong=i||!1,console.log("this.uploadImg1=",this.uploadImg1,"this.uploadImg2=",this.uploadImg2,i,this.isLong)},computed:{comfirmBtn:function(){var t=this.uploadJson,e=t.name,s=t.authNumber,a=this.startTime,i=(this.isLong,this.endTime),o=(this.checkSex,this.birthDay),n=this.uploadImg1.localImg,r=this.uploadImg2.res;e.length;return!!(e.length||s||a||n||r||i||o)},hasColBtn:function(){var t=this.uploadJson,e=t.name,s=t.authNumber,a=t.address,i=this.startTime,o=(this.isLong,this.endTime),n=this.checkSex,r=this.birthDay,c=this.uploadImg1.localImg,l=this.uploadImg2.res,u=e.length>=2&&s&&i&&c&&l;return this.isLong||0!=this.tempCardType?0!=this.tempCardType?u&&-1!=n&&r:u&&a:u&&o&&a}},methods:(a={authAction:function(t){if(1==this.$route.query.test||"app"==this.type)try{Object(v["a"])("authAction",{eventName:t})}catch(e){console.log("埋点失败--",t)}},isHideDialog:function(){this.noticeShow=!1,this.noticeStatus=-1,this.noticeMes="",this.authAction("my_realname_submit_back")},loginPage:function(){this.authAction("my_realname_submit_change"),Object(v["a"])("closeAndGotoLoginPage")}},Object(r["a"])(a,"authAction",(function(t){if(1==this.$route.query.test||"app"==this.type)try{Object(v["a"])("authAction",{eventName:t})}catch(e){console.log("埋点失败--",t)}})),Object(r["a"])(a,"exampleShowFn",(function(){this.exampleShow=!0,this.authAction("my_realname_watch")})),Object(r["a"])(a,"clearData",(function(){this.exampleShow=!1,this.noticeShow=!1,this.isLong=!1;var t={url:"",res:!1,localImg:""};this.uploadImg1=C({},t),this.uploadImg2=C({},t),this.uploadJson={name:"",authType:1,authNumber:"",authPassType:99,authPassToken:"",imageId:"",frontImgUrl:"",backImgUrl:"",expireDate:"",holdImgUrl:"",gender:"1",birth:"",address:""},this.preventRes=!1})),Object(r["a"])(a,"submitBtn",function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasColBtn){t.next=2;break}return t.abrupt("return");case 2:if(!this.preventRes){t.next=4;break}return t.abrupt("return");case 4:if(this.preventRes=!0,e=C({},this.uploadJson),s="",s=this.isLong?this.startTime.replace(/-/g,".")+"-长期":this.startTime.replace(/-/g,".")+"-"+this.endTime.replace(/-/g,"."),e.name=A.encode(e.name),e.authNumber=A.encode(e.authNumber),e.address=A.encode(e.address),e.expireDate=s,e.gender=parseFloat(this.checkSex)+1,e.birth=this.birthDay,e.frontImgUrl=this.uploadImg1.url,e.holdImgUrl=e.frontImgUrl,e.backImgUrl=this.uploadImg2.url,e.authType=this.getCardType(this.tempCardName),0==e.authType&&(e.authType=1,e.gender=""),"app"!=this.type){t.next=23;break}Object(v["a"])("receiveLoadNetworkArgument",{path:"userAuth/transferBuickFansFromUser",gateway:"private",params:e,method:"POST"},{callback:this.transferBuickFansFromUserCall,winName:"acceptNewEnergyResultSet"}),t.next=27;break;case 23:return t.next=25,Object(f["k"])(e);case 25:a=t.sent,this.transferBuickFansFromUserCall(a);case 27:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()),Object(r["a"])(a,"transferBuickFansFromUserCall",(function(t){this.preventRes=!1,console.log("res=",t),this.noticeShow=!0;var e=t.resultCode;t&&"0000"==e?this.noticeStatus=2:(this.noticeMes=t.message,"1151"==e&&"app"==this.$route.query.type?this.noticeStatus=9:this.noticeStatus=12)})),Object(r["a"])(a,"getCardType",(function(t){switch(t){case"居民身份证":return 0;case"护照":return 4;case"台湾居民往来通行证":return 3;case"港澳居民往来通行证":return 2}})),Object(r["a"])(a,"getUploadMes",(function(t,e,s){if(console.log("上传证件文件0000=",t,e,"tempCarType=",s),"0000"==t.resultCode){var a=t.data,i=a.key,o=a.data;if(1==e)this.uploadImg1.url=i,this.uploadImg1.res=!0;else if(2==e){if(0==s){var n=JSON.parse(A.decode(o)),r=n.validity;if(this.uploadImg2.validity=r,r){var c=r.split("-");this.startTime=c[0].replace(/\./g,"-"),this.endTime=c[1].replace(/\./g,"-")}else this.noticeStatus=11,this.noticeShow=!0,this.startTime="",this.endTime=""}this.uploadImg2.res=!0,this.uploadImg2.url=i}}else{var l=this.uploadImg1;this.noticeShow=!0,2==e?(0==s?(l=this.uploadImg2,this.startTime="",this.endTime="",this.noticeStatus=11):(this.noticeStatus=12,this.noticeMes=t.message),l=this.uploadImg2):(this.noticeStatus=12,this.noticeMes=t.message),l.url="",l.res=!1}})),Object(r["a"])(a,"choosePicker",(function(t){0==t?this.pickerItem=this.chooseCardType:1==t&&(this.pickerItem=this.chooseSex),this.pickerShow(t)})),Object(r["a"])(a,"gotoSuccess",(function(){this.$router.replace({name:"faceSuccess"})})),Object(r["a"])(a,"clickHandler",(function(){var t=this.noticeStatus;this.noticeShow=!1,this.noticeStatus=-1,2==t&&("app"==this.type?Object(v["a"])("JoinSuccessAndClosePage"):"wechatMini"==sessionStorage.isminiType?wx.miniProgram.navigateBack():window.location.replace(localStorage.getItem("myhref")))})),Object(r["a"])(a,"comfirmSure",(function(){0==this.noticeStatus&&(this.comfirmTwo(),this.toastPush=!0),this.noticeShow=!1,this.noticeStatus=-1})),Object(r["a"])(a,"comfirCancel",(function(){this.noticeShow=!1,this.noticeStatus=-1,this.toastPush=!0,history.pushState(null,null,this.myurl)})),a)},I=y,S=(s("057b"),s("2877")),k=Object(S["a"])(I,i,o,!1,null,"a12b3a3a",null);e["default"]=k.exports},3667:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAR1JREFUWEfVl1EOgjAMhn/mg7fwND57CIIxITsOISESDuGzp/EWPjjNoijEwdo6GPI42r/fuq6UBJGfJHJ8LA+gLJutMWajddaEzE5R1KlS6pLn6bmr28vAM/jtBCRrAAetszoERFHUGYAKuF+VWu26ED0ASwngCEABMCEgPsHfmvtudr9qwOEgzgRFy1mEFEff0VA1Bm8BVcAFwvEdvYYcoRaE6+PtAxxBjm0L7AWwhhRhio3ruEgAPghpcKtLBhiCeO2qkvYOFsAAhF0WNy42gAPCLom75v8BOApuviNwVftsRTh21Sa/hpQAFBtRI+IIc2xJrVgiyPVZ5ueYu4tfZoJljWTRh9LoY7k9y6g/Jr5Jd4r3oq9hSJDoAA9rviAwImKpsgAAAABJRU5ErkJggg=="},"47d5":function(t,e){t.exports="data:image/png;base64,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"},"4a76":function(t,e,s){},5336:function(t,e,s){t.exports=s.p+"img/add.98b9158d.png"},6407:function(t,e,s){"use strict";s("7f7f");e["a"]={methods:{nameLen:function(){var t=this.uploadJson.name.trim();t.length>50&&(t=t.substring(0,50)),this.uploadJson.name=t},authNumberLen:function(){var t=this.uploadJson.authNumber.trim();t.length>18&&(t=t.substring(0,18)),this.uploadJson.authNumber=t}}}},7045:function(t,e,s){"use strict";s("4a76")},8336:function(t,e,s){t.exports=s.p+"img/example.a3f41fee.png"},dce9:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"picket-fixed"},[a("div",{staticClass:"type-picket phone-pad"},[a("div",{staticClass:"flex space_between bar"},[a("img",{attrs:{src:s("4e11")},on:{click:function(e){return e.stopPropagation(),t.onCancel.apply(null,arguments)}}}),a("div",{on:{click:function(e){return e.stopPropagation(),t.onConfirm.apply(null,arguments)}}},[t._v("确定")])]),a("div",{staticClass:"main"},[a("van-picker",{attrs:{columns:t.item,"item-height":"50","swipe-duration":"100","visible-item-count":"5"},on:{confirm:t.onConfirm,cancel:t.onCancel,change:t.onChange}})],1)])]):t._e()},i=[],o=s("7618"),n=s("bd86"),r=(s("7f7f"),s("2378")),c=s.n(r),l=(s("5b4d"),{name:"Picker",components:Object(n["a"])({},c.a.name,c.a),data:function(){return{show:!1,index:0,pickerWhat:0}},props:{item:{type:Array,default:function(){return["居民身份证","护照","台湾居民往来通行证","港澳居民往来通行证"]}}},methods:{pickerShow:function(t){"object"===Object(o["a"])(t)&&(t=0),this.show=!0,this.pickerWhat=t},onConfirm:function(){console.log("onConfirm当前值：".concat(this.index)),this.show=!1,this.$emit("getPicker",{index:this.index,pickerWhat:this.pickerWhat,checkData:this.item[this.index]}),this.index=0},onChange:function(t,e,s){console.log("onChange当前值：".concat(e,", 当前索引：").concat(s)),this.index=s,this.$nextTick((function(){$("li.van-picker-column__item--selected").prev().css({color:"rgba(100,100,105,0.60)"})}))},onCancel:function(){console.log("取消"),this.index=0,this.show=!1}}}),u=l,p=(s("7045"),s("2877")),d=Object(p["a"])(u,a,i,!1,null,"d1fe07a4",null),m=d.exports;e["a"]={data:function(){return{errorType:-1,errorShow:!1,tempCardType:0,tempCardName:"",CardType:0,checkSex:-1,errorTextMes:""}},components:{Picker:m},methods:{pickerShow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.Picker.pickerShow(t)},getPicker:function(t){var e=t.index,s=t.pickerWhat,a=t.checkData;console.log("或者到用户选择的证件=",t,"pickerWhat=",s,e),0==s?(this.tempCardType=e,this.tempCardName=a,this.$route.meta.clear&&(console.log("清除数据==="),this.clearData&&this.clearData())):1==s&&(this.checkSex=e)}}}},e274:function(t,e,s){},e452:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAA0CAYAAAAHSF9vAAAAAXNSR0IArs4c6QAABQVJREFUeF7tXEtoJFUUPbf6k39CJJCQjySm2+6CMIO4GD8rEVEUNy5mp0tnoeCAggvXLgQFhcnCre4GdCMKYsCV0SxkdAiparszCeZDgmFCPpOkP9VPbtHdVHc66eruqk49fRdq1VXv3nve6/vu7z2Ch7S6uhrP5XIvALgGIEFETwAYFEIMAOjykJUfQ2WJ6AjAoRDiAYAUgPvRaPTn2dnZtFcMqd2BTNO8JoR4i4huCiGm2h0viN8T0YYQ4i4RfZVMJu+3I2PLgKdSqVeLxeJHAJ5rRwAJv13UNO3jRCLxQyuyNw24YRhPA5gHcKMVhv+hb5YAvKPr+u/N6OQa8HQ63WVZ1icA3hVChOoxISL09vaip6cHXV1diEajCIVC9sNkWZb95HI5ZLNZnJ6e4uTkBEKIZmQO0rsWEd0JhUIfxuPxrBvBXAGeyWRi+Xz+LoCn6g3a19eHoaEh9Pf3Q9M0N3wr7xSLRRwfH+Pg4ACPHj1q6tsAvXwvEoncjMVimUYyNQTcMAy20d8BeKx2MAZ4ZGQE3d3djfi4+v3s7Ax7e3v2BEhIDwG8ruv64mWyXwp4Op1+uVAofAug1zlIJBLB6OiovaL9IAZ8d3cX+Xzej+H9HPMkHA6/EY/Hf7yIyYWAl1b2T7VgDwwMYGxsrGKX/ZKebf3Ozg6Ojtg1lopOALx00UqvC3jJZvMuXGVG2Hzw00liE8OPZPQwEoncqGfTzwHO3kihUPi1doNkEzI8PHwleu/v79smRjK6Fw6Hn631Xs4Bbprm50KI95zKXcXKrgVXxpVORF8kk8nbTl2qAOeghoiWnH422+yJiYlALK6trS3ZbLrFAaIzOKoF/DdnBMneyPT0tO8bpNvZ5I10fX1dNu9lSdf1Z8o6VgAv5Ua+dyo/OTnpm+vnFuTa99hl3NzcbPXzK/lO07TXyrmXCuCGYfziTESxj82AB5EYcMmCo0Vd159nLG3Al5eXr4dCoT+c4LIp8SqC9HrSOCJl0yITEdF1Tu3agBuG8SmA98sKcG5kairYqe2NjQ3Zci+f6br+gQ24aZp/O4sH4+PjGBwcDPQCOjw8xPb2dqBlrHIHiTaSyeTjVCqL/VXZRYkQj8ebzvp1WnPOMqbTaalSu9Fo9EkyDONtAF/KZE7KskpoVm4x4He4clFWIghRpdt/i4TR5zytrKwsENGLZSU5quToUgbiTCJHnxLRApmmuSqE4HYGm2ZmZuzymAzEZbq1tTUZRLVlJKIHDPg/QohKzjUWiyEcDkuhRKFQQCbTsKoVGF2IaI9t+JmzSSeRSPBMBEbIywTh4nMqxf060lBWAd7Zucoqk9JBwG2TojbNziFub5rKLewc4AAWVODTUbwxr0L7zgJ+SyWvOgi4nbxifio96z/q3GNup2eZlSpA+A84gKoCBJ9i+NPJVpXYvJ2EqhJbaZWrIrK3GDtHqy4i8y+qTcI/tOu2SZRWuWoE8h73+o1AJcBVq5u3gF/e6lZyEVUzp0egN2zmZD6qXdkjtAF37crMTjXktw26+4b8Mit15KRl0Js/clJmZZrmK0KIb9ShKtfgt36oqmalq2ODjTFv/9hgmYc6GNsQbe8OxpZZqaPf50EnIvazvT/67WSlLjeooOHv5Qa186uu7+jQ9R21wJdOT7z5f7igxrKsr+fm5qrS2A2te80LnrZYOa9gEkIkNU2bkfEKpmKxuEZEph9XMP0LRdrs/Q08cPEAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=writeMes.2b6330c7.js.map