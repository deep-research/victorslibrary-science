(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"AcD+":function(e,t,a){},LGkc:function(e,t,a){e.exports=a.p+"assets/img/email.439d5d49.svg"},QHJe:function(e,t,a){"use strict";a("AcD+")},w981:function(e,t,a){"use strict";a.r(t);a("FNk8");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var i=Object.prototype.hasOwnProperty;var o,n,s,c=(o=!1,n=[],s={resolved:function(){return o},resolve:function(e){if(!o){o=!0;for(var t=0,a=n.length;t<a;t++)n[t](e)}},promise:{then:function(e){o?e():n.push(e)}}},{notify:function(){s.resolve()},wait:function(){return s.promise},render:function(e,t,a){this.wait().then((function(){a(window.grecaptcha.render(e,t))}))},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){i.call(window,"grecaptcha")&&i.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!s.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=c.notify);var l={components:{VueRecaptcha:{name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var e=document.createElement("script");e.id=this.recaptchaScriptId,e.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,e.async=!0,e.defer=!0,document.head.appendChild(e)}},mounted:function(){var e=this;c.checkRecaptchaLoad();var t=r({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),a=this.$slots.default?this.$el.children[0]:this.$el;c.render(a,t,(function(t){e.$widgetId=t,e.$emit("render",t)}))},methods:{reset:function(){c.reset(this.$widgetId)},execute:function(){c.execute(this.$widgetId)},emitVerify:function(e){this.$emit("verify",e)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(e){return e("div",{},this.$slots.default)}}},metaInfo:{title:"Contact"},data:()=>({form:{name:"",email:"",subject:"",message:""},validation:{human:!1,captchaError:!1,nameError:!1,emailError:!1,subjectError:!1,messageError:!1}}),methods:{encode:e=>Object.keys(e).map(t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t])).join("&"),validate(){let e=!0;this.validation.human?this.validation.captchaError=!1:(this.validation.captchaError=!0,e=!1),this.form.name?this.validation.nameError=!1:(this.validation.nameError=!0,e=!1);return this.form.email&&(()=>/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.email))()?this.validation.emailError=!1:(this.validation.emailError=!0,e=!1),this.form.subject?this.validation.subjectError=!1:(this.validation.subjectError=!0,e=!1),this.form.message?this.validation.messageError=!1:(this.validation.messageError=!0,e=!1),!!e},handleSubmit(e){this.validate()&&fetch("https://script.google.com/macros/s/AKfycbwBg8PJZmY9NZJidWUzncHMhixYi2L4p6HiYOBFX8rzygd5SiL4-f86eMdPJ9P1q3AY7g/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode({"form-name":e.target.getAttribute("name"),...this.form})}).then(()=>this.$router.push("/success")).catch(e=>alert(e))},onVerify(e){e&&(this.validation.human=!0)}}},d=(a("QHJe"),a("KHd+")),m=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("Layout",[t("h1",{staticClass:"mb-4"},[e._v("Contact")]),t("div",[t("img",{staticClass:"contact-image mb-5",staticStyle:{"max-width":"200px"},attrs:{src:a("LGkc")}}),t("div",{staticStyle:{display:"none"}},[e._v("Icons made by "),t("a",{attrs:{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"}},[e._v("Pixel perfect")]),e._v(" from "),t("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])]),t("b-form",{attrs:{name:"contact",method:"post",action:"/success/"},on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("input",{attrs:{type:"hidden",name:"name",value:"contact"}}),t("p",{attrs:{hidden:""}},[t("label",[e._v("\n        Don’t fill this out: "),t("input",{attrs:{name:"bot-field"}})])]),t("b-form-group",{attrs:{id:"input-group-1",label:"Name:","label-for":"form-name"}},[t("b-form-input",{attrs:{id:"name",name:"name",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),this.validation.nameError?t("div",{staticStyle:{color:"red"}},[e._v("Please enter your name.")]):e._e()],1),t("b-form-group",{attrs:{id:"input-group-2",label:"Email:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",name:"email",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),this.validation.emailError?t("div",{staticStyle:{color:"red"}},[e._v("Please enter a valid email address.")]):e._e()],1),t("b-form-group",{attrs:{id:"input-group-3",label:"Subject:","label-for":"form-subject"}},[t("b-form-input",{attrs:{id:"subject",name:"subject",placeholder:"Enter subject"},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}}),this.validation.subjectError?t("div",{staticStyle:{color:"red"}},[e._v("Please enter a subject.")]):e._e()],1),t("b-form-group",{attrs:{id:"input-group-4",label:"Message:","label-for":"message"}},[t("b-form-textarea",{attrs:{id:"message",name:"message",placeholder:"Enter message"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),this.validation.messageError?t("div",{staticStyle:{color:"red"}},[e._v("Please enter a message.")]):e._e()],1),t("div",{staticStyle:{"margin-bottom":"16px"}},[t("vue-recaptcha",{attrs:{sitekey:"6LedCfgZAAAAAG4kM-xeTLM4HERd8MIPs5Gwl_4d",type:"checkbox",loadRecaptchaScript:!0},on:{verify:e.onVerify}}),this.validation.captchaError?t("div",{staticStyle:{color:"red"}},[e._v("Please fill out the Captcha.")]):e._e()],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)])}),[],!1,null,"8b0a2998",null);t.default=m.exports}}]);