"use strict";(self["webpackChunkcafeteria_vue"]=self["webpackChunkcafeteria_vue"]||[]).push([[228],{4228:function(s,o,a){a.r(o),a.d(o,{default:function(){return us}});var e=a(4108);function r(s,o,a,r,l,t){const c=(0,e.E1)("ProfileComponent");return(0,e.Wz)(),(0,e.Az)(c)}var l=a(9096),t=a(7764);const c=s=>((0,e.ED)("data-v-f6cf49c8"),s=s(),(0,e.ii)(),s),i={class:"container rounded bg-white mt-5 mb-5"},n={class:"row"},d={class:"col-md-5 border-right"},u={class:"d-flex flex-column align-items-center text-center p-3 py-5"},m=c((()=>(0,e.QD)("img",{class:"rounded-circle mt-5",width:"150px",src:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"},null,-1))),p={class:"font-weight-bold mt-2"},f={class:"text-black-50"},w=c((()=>(0,e.QD)("span",null,null,-1))),g=["src"],b={class:"font-weight-bold mt-2"},D={class:"text-black-50"},v=c((()=>(0,e.QD)("span",null,null,-1))),h={class:"col-md-5 border-right"},Q={class:"p-3 py-5"},y=c((()=>(0,e.QD)("div",{class:"d-flex justify-content-between align-items-center mb-3"},[(0,e.QD)("h1",{class:"text-right"},"Usuario")],-1))),C={class:"row mt-2"},k={class:"col-md-12 row"},x=c((()=>(0,e.QD)("label",{class:"col-sm-2 col-form-label"},"Nombre",-1))),O={class:"col-sm-10"},I={class:"mt-3"},A={class:"col-md-12 row"},S=c((()=>(0,e.QD)("label",{class:"col-sm-2 col-form-label"},"Correo",-1))),E={class:"col-sm-10"},P=c((()=>(0,e.QD)("div",{class:"mt-3"},[(0,e.QD)("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"}," Cambiar contraseña ")],-1))),U={class:"collapse",id:"collapseExample"},W={class:"mt-3"},N={class:"col-md-12 row"},z=c((()=>(0,e.QD)("label",{class:"col-sm-2 col-form-label"},"Contreña",-1))),V={class:"col-sm-10"},_={class:"mt-3"},j={class:"col-md-12 row"},F=c((()=>(0,e.QD)("label",{class:"col-sm-2 col-form-label"},"Nueva contreña",-1))),H={class:"col-sm-10"},L={class:"mt-3"},R={class:"col-md-12 row"},$=c((()=>(0,e.QD)("label",{class:"col-sm-2 col-form-label"},"Confirma contreña",-1))),G={class:"col-sm-10"},Y={key:0,class:"mb-3 row",style:{color:"red"}},q=c((()=>(0,e.QD)("p",null,"Las contraseñas no son iguales",-1))),B=[q],J=["src"],K={class:"mt-3"},M=c((()=>(0,e.QD)("i",{class:"fa fa-upload"},null,-1))),T={class:"mt-3 text-center"};function X(s,o,a,r,c,q){return(0,e.Wz)(),(0,e.An)("div",i,[(0,e.QD)("div",n,[(0,e.QD)("div",d,[(0,e.QD)("div",u,[s.usuario.img?((0,e.Wz)(),(0,e.An)(e.ae,{key:1},[(0,e.QD)("img",{class:"rounded-circle mt-5",width:"150px",src:s.usuario.img},null,8,g),(0,e.QD)("span",b,(0,l.WA)(s.usuario.nombre),1),(0,e.QD)("span",D,(0,l.WA)(s.usuario.correo),1),v],64)):((0,e.Wz)(),(0,e.An)(e.ae,{key:0},[m,(0,e.QD)("span",p,(0,l.WA)(s.usuario.nombre),1),(0,e.QD)("span",f,(0,l.WA)(s.usuario.correo),1),w],64))])]),(0,e.QD)("div",h,[(0,e.QD)("div",Q,[y,(0,e.QD)("div",C,[(0,e.QD)("div",k,[x,(0,e.QD)("div",O,[(0,e.wt)((0,e.QD)("input",{type:"text",class:"form-control",placeholder:"Escribe tu nombre","onUpdate:modelValue":o[0]||(o[0]=o=>s.usuario.nombre=o)},null,512),[[t.Og,s.usuario.nombre]])])])]),(0,e.QD)("div",I,[(0,e.QD)("div",A,[S,(0,e.QD)("div",E,[(0,e.wt)((0,e.QD)("input",{type:"text",class:"form-control",placeholder:"Escribe tu correo","onUpdate:modelValue":o[1]||(o[1]=o=>s.usuario.correo=o)},null,512),[[t.Og,s.usuario.correo]])])])]),P,(0,e.QD)("div",U,[(0,e.QD)("div",null,[(0,e.QD)("div",W,[(0,e.QD)("div",N,[z,(0,e.QD)("div",V,[(0,e.wt)((0,e.QD)("input",{type:"password",class:"form-control",placeholder:"Escribe tu contraseña","onUpdate:modelValue":o[2]||(o[2]=s=>c.passwordOld=s)},null,512),[[t.Og,c.passwordOld]])])])]),(0,e.QD)("div",_,[(0,e.QD)("div",j,[F,(0,e.QD)("div",H,[(0,e.wt)((0,e.QD)("input",{type:"password",class:"form-control",placeholder:"Escribe una nueva contraseña","onUpdate:modelValue":o[3]||(o[3]=s=>c.passwordNew=s)},null,512),[[t.Og,c.passwordNew]])])])]),(0,e.QD)("div",L,[(0,e.QD)("div",R,[$,(0,e.QD)("div",G,[(0,e.wt)((0,e.QD)("input",{type:"password",class:"form-control",placeholder:"Confirma tu nueva contraseña","onUpdate:modelValue":o[4]||(o[4]=s=>c.passwordConfirm=s)},null,512),[[t.Og,c.passwordConfirm]])])])]),q.verifyPassword?(0,e.g1)("",!0):((0,e.Wz)(),(0,e.An)("div",Y,B))])]),c.localImage?((0,e.Wz)(),(0,e.An)("img",{key:0,src:c.localImage,alt:"Entry picture",class:"rounded-circle mt-5"},null,8,J)):(0,e.g1)("",!0),(0,e.QD)("div",K,[(0,e.wt)((0,e.QD)("input",{type:"file",onChange:o[5]||(o[5]=(...s)=>q.onSelectdImage&&q.onSelectdImage(...s)),ref:"imageSelector",accept:"image/png, image/jpeg"},null,544),[[t.Ub,!1]]),s.usuario.uID?((0,e.Wz)(),(0,e.An)("button",{key:0,class:"btn btn-primary",onClick:o[6]||(o[6]=(...s)=>q.onPressImage&&q.onPressImage(...s))},[(0,e.mY)(" Subir foto "),M])):(0,e.g1)("",!0)]),(0,e.QD)("div",T,[(0,e.QD)("button",{class:"btn btn-secondary",type:"button",onClick:o[7]||(o[7]=(...s)=>q.guardarPerfil&&q.guardarPerfil(...s))},"Guardar perfil")])])])])])}var Z=a(7192),ss=a(8656),os=a.n(ss),as=a(9676);const es=async s=>{if(s)try{const o=localStorage.getItem("uID"),a=new FormData,e={headers:{awt_token:localStorage.getItem("token")}};a.append("archivo",s);const r=await as.c.put(`/api/uploads/usuarios/${o}`,a,e);return console.log(r),!0}catch(o){return console.error("Error al cargar imagen, revisar logs"),console.log(o),null}};var rs=es,ls={data(){return{passwordOld:"",passwordNew:"",passwordConfirm:"",localImage:null,file:null}},computed:{...(0,Z.ys)("authStore",{usuario:"usuario"}),verifyPassword(){return this.passwordNew===this.passwordConfirm}},methods:{...(0,Z.ae)("authStore",["updateUSerAccount"]),async guardarPerfil(){let s=Object;new(os())({title:"Espere por favor",allowOutsideClick:!1});await rs(this.file);if(this.file=null,""===this.passwordOld||null===this.passwordOld){
//! nos quedamos en el envio de datos en la action para cambiar los valores del usuario
s.nombre=this.usuario.nombre,s.correo=this.usuario.correo,s.passwordOld=void 0;const o=await this.updateUSerAccount(s);return 1!=o?void await os().fire({icon:"error",title:"Oops...",text:"Hubo un error al guardar tus datos"}):void os().fire("Cambios gaurdados","","success")}if(""!==this.passwordOld&&this.verifyPassword&&""!==this.passwordNew&&""!==this.passwordConfirm){s.nombre=this.usuario.nombre,s.correo=this.usuario.correo,s.passwordNew=this.passwordNew,s.passwordOld=this.passwordOld;const o=await this.updateUSerAccount(s);return 1!=o?void await os().fire({icon:"error",title:"Oops...",text:"Hubo un error al guardar tus datos"}):void os().fire("Cambios gaurdados","","success")}await os().fire({icon:"error",title:"Oops...",text:"Verifica tus contraseñas"})},onSelectdImage(s){const o=s.target.files[0];if(!o)return this.localImage=null,void(this.file=null);this.file=o;const a=new FileReader;a.onload=()=>this.localImage=a.result,a.readAsDataURL(o)},onPressImage(){this.$refs.imageSelector.click()}}},ts=a(4100);const cs=(0,ts.c)(ls,[["render",X],["__scopeId","data-v-f6cf49c8"]]);var is=cs,ns={components:{ProfileComponent:is}};const ds=(0,ts.c)(ns,[["render",r]]);var us=ds}}]);
//# sourceMappingURL=228.d573f7b7.js.map