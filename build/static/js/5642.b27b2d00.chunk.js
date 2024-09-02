"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[5642],{5642:(n,e,t)=>{t.r(e),t.d(e,{default:()=>A});var r,o=t(7528),l=t(5043),i=t(7848),d=t(9969),s=t(197),a=t(4117),c=t(8444),x=t(2809),u=t(7779),m=t(184),h=t(5127),p=t(947),g=t(6268),j=t(9310),v=(t(3739),t(579));const f=s.Ay.form(r||(r=(0,o.A)(["\n  .ck-editor__editable {\n    height: 350px;\n  }\n  textarea {\n    width: 100%;\n    height: 350px;\n    border: 1px solid #d5d5d5;\n    resize: none;\n    padding: 15px;\n  }\n"]))),b=n=>{let{board:e,form:t,onSubmit:r,onToggleNotice:o,errors:s,fileUploadCallback:b,fileDeleteCallback:A,onChange:w}=n;const[y,k]=(0,l.useState)(!1),[C,N]=(0,l.useState)(null),{useEditor:S,useUploadImage:_,useUploadFile:Y}=e,{t:z}=(0,a.Bd)(),{states:{isLogin:I,isAdmin:P}}=(0,l.useContext)(u.Ay);(0,l.useEffect)((()=>(k(!0),()=>{k(!1)})),[]);const E=(0,l.useCallback)((n=>{C.execute("insertImage",{source:n})}),[C]);return(0,v.jsxs)(f,{onSubmit:r,autoComplete:"off",children:[(null===t||void 0===t?void 0:t.restaurant)&&(0,v.jsx)(j.A,{items:[t.restaurant]}),(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:z("\uc791\uc131\uc790")}),(0,v.jsxs)("dd",{children:[(0,v.jsx)(x.A,{type:"text",name:"poster",value:null===t||void 0===t?void 0:t.poster,onChange:w}),(null===s||void 0===s?void 0:s.poster)&&(0,v.jsx)(c.A,{color:"danger",messages:s.poster})]})]}),("write"===t.mode&&!I||"update"===t.mode&&!(null!==t&&void 0!==t&&t.member))&&(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:z("\ube44\ubc00\ubc88\ud638")}),(0,v.jsxs)("dd",{children:[(0,v.jsx)(x.A,{type:"password",name:"guestPw",value:null===t||void 0===t?void 0:t.guestPw,onChange:w}),(null===s||void 0===s?void 0:s.guestPw)&&(0,v.jsx)(c.A,{color:"danger",messages:s.guestPw})]})]}),P&&(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:z("\uacf5\uc9c0\uae00")}),(0,v.jsx)("dd",{children:(0,v.jsxs)("label",{onClick:o,children:[null!==t&&void 0!==t&&t.notice?(0,v.jsx)(m.Hcz,{}):(0,v.jsx)(m.$qz,{}),z("\uacf5\uc9c0\uae00\ub85c_\ub4f1\ub85d\ud558\uae30")]})})]}),(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:z("\uc81c\ubaa9")}),(0,v.jsxs)("dd",{children:[(0,v.jsx)(x.A,{type:"text",name:"subject",value:null===t||void 0===t?void 0:t.subject,onChange:w}),(null===s||void 0===s?void 0:s.subject)&&(0,v.jsx)(c.A,{color:"danger",messages:s.subject})]})]}),(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:z("\ub0b4\uc6a9")}),(0,v.jsxs)("dd",{children:[S?y&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.aF,{editor:d.aRV,config:{plugins:[d.yN4,d.uwK,d.J20,d.fzL,d._V3,d.H09],toolbar:["undo","redo","bold","italic"]},data:null===t||void 0===t?void 0:t.content,onReady:n=>N(n),onChange:(n,e)=>{w({target:{name:"content",value:e.getData()}})}}),C&&_&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.A,{gid:t.gid,location:"editor",imageOnly:!0,color:"primary",width:"120",callback:n=>b(n,C),children:z("\uc774\ubbf8\uc9c0_\uc5c5\ub85c\ub4dc")}),(0,v.jsx)(g.A,{files:null===t||void 0===t?void 0:t.editorImages,mode:"editor",insertImageCallback:E,fileDeleteCallback:A})]})]}):(0,v.jsx)("textarea",{name:"content",value:null===t||void 0===t?void 0:t.content,onChange:w}),(null===s||void 0===s?void 0:s.content)&&(0,v.jsx)(c.A,{color:"danger",messages:s.content})]})]}),Y&&(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:z("\ud30c\uc77c\ucca8\ubd80")}),(0,v.jsxs)("dd",{children:[(0,v.jsx)(p.A,{gid:t.gid,location:"attach",width:"120",color:"primary",callback:b,children:z("\ud30c\uc77c\uc120\ud0dd")}),(0,v.jsx)(g.A,{files:null===t||void 0===t?void 0:t.attachFiles,mode:"attach",fileDeleteCallback:A})]})]}),(0,v.jsx)(h.xk,{type:"submit",color:"info",children:z("update"===t.mode?"\uc218\uc815\ud558\uae30":"\uc791\uc131\ud558\uae30")})]})},A=l.memo(b)},5127:(n,e,t)=>{t.d(e,{Vu:()=>_,e2:()=>z,oq:()=>I,vd:()=>Y,wl:()=>N,xk:()=>S});var r,o,l,i,d,s,a,c,x,u,m,h,p,g,j=t(7528),v=t(197),f=t(9888),b=t(5559);const{big:A,medium:w,normal:y}=b.A,{jmt:k}=f.y,C=(0,v.AH)(r||(r=(0,j.A)(["\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n"]))),N=v.Ay.button(o||(o=(0,j.A)(["\n  font-size: ",";\n  height: 30px;\n  ","\n\n  ","\n  ","\n"])),y,C,(n=>{let{color:e}=n;return f.S[e]&&(0,v.AH)(l||(l=(0,j.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),f.S[e][0],f.S[e][1],f.S[e][2])}),(n=>{let{width:e}=n;return(0,v.AH)(i||(i=(0,j.A)(["\n    width: ","px;\n  "])),e)})),S=v.Ay.button(d||(d=(0,j.A)(["\n  font-size: ",";\n  height: 40px;\n  ","\n\n  ","\n"])),w,C,(n=>{let{color:e}=n;return f.S[e]&&(0,v.AH)(s||(s=(0,j.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),f.S[e][0],f.S[e][1],f.S[e][2])})),_=v.Ay.button(a||(a=(0,j.A)(["\n  font-size: ",";\n  height: 45px;\n  ","\n\n  ","\n"])),A,C,(n=>{let{color:e}=n;return f.S[e]&&(0,v.AH)(c||(c=(0,j.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),f.S[e][0],f.S[e][1],f.S[e][2])})),Y=v.Ay.button(x||(x=(0,j.A)(["\n  font-size: ",";\n  height: 40px;\n  ","\n\n  border-radius: 3px;\n  cursor: pointer;\n\n    ","\n  ","\n"])),w,C,(n=>{let{color:e}=n;return f.S[e]&&(0,v.AH)(u||(u=(0,j.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),f.S[e][0],f.S[e][1],f.S[e][2])}),(n=>{let{width:e}=n;return(0,v.AH)(m||(m=(0,j.A)(["\n    width: ","px;\n  "])),e)})),z=v.Ay.div(h||(h=(0,j.A)(["\n  display: flex;\n  width: ",";\n  margin: 20px auto;\n\n  button {\n    width: 0;\n    flex-grow: 1;\n  }\n\n  button + button {\n    margin-left: 5px;\n  }\n"])),(n=>{let{width:e}=n;return e?"".concat(e,"px"):"100%"})),I=(v.Ay.button(p||(p=(0,j.A)(["\n\n"]))),v.Ay.button(g||(g=(0,j.A)(["\n  font-size: ",";\n  width: 120px;\n  height: 40px;\n  background-color:","; \n  color: white;\n  border-color: white;\n  margin: 0 auto;\n  border-radius: 3px;\n  display: block;\n\n"])),w,k))},6268:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(5043),o=t(184),l=t(579);const i=n=>{let{files:e,mode:t,insertImageCallback:r,fileDeleteCallback:i}=n;return e&&e.length>0&&(0,l.jsx)("ul",{children:e.map((n=>{let{seq:e,fileName:d,fileDownloadUrl:s,fileUrl:a}=n;return(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:s,children:d}),"editor"===t&&(0,l.jsx)(o.l1U,{onClick:()=>r(a)}),(0,l.jsx)(o.yyx,{onClick:()=>i(e)})]},e)}))})},d=r.memo(i)},947:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(5043),o=t(7390),l=t(5127),i=t(8444),d=t(4117),s=t(579);const a=n=>{let{children:e,gid:t,location:a,color:c,imageOnly:x,single:u,done:m,callback:h,width:p,imageUrl:g}=n;const[j,v]=(0,r.useState)(""),{t:f}=(0,d.Bd)(),b=(0,r.useCallback)((()=>{const n=document.createElement("input");n.type="file",n.multiple=!Boolean(u),n.click();const e=n=>{const e=n.target.files;try{if(0===e.length)throw new Error(f("\ud30c\uc77c\uc744_\uc120\ud0dd\ud558\uc138\uc694."));if(x)for(const t of e)if(!t.type.includes("image/"))throw new Error(f("\uc774\ubbf8\uc9c0_\ud615\uc2dd\uc758_\ud30c\uc77c\ub9cc_\uc5c5\ub85c\ub4dc\ud558\uc138\uc694."));if(null===t||void 0===t||!t.trim())throw new Error(f("\ud544\uc218\ud56d\ubaa9(gid)_\ub204\ub77d"));const n=new FormData;n.append("gid",t.trim()),a&&n.append("location",a);for(const t of e)n.append("file",t);u&&n.append("single",Boolean(u)),x&&n.append("imageOnly",Boolean(x)),m&&n.append("done",Boolean(m)),(async()=>{try{const e=await(0,o.A)("/file/upload","POST",n);if(201===e.status&&e.data.success)return void("function"===typeof h&&h(e.data.data));e.data.message&&v(e.data.message)}catch(e){v(e.message),console.error(e)}})()}catch(r){v(r.message)}};n.removeEventListener("change",e),n.addEventListener("change",e)}),[u,t,a,x,f,h,m]);return(0,s.jsxs)(s.Fragment,{children:[g?(0,s.jsx)("img",{src:g,width:p,alt:"profile",onClick:b}):(0,s.jsx)(l.wl,{width:p,type:"button",color:c,onClick:b,children:e}),j&&(0,s.jsx)(i.A,{color:"danger",children:j})]})},c=r.memo(a)},7114:(n,e,t)=>{t.d(e,{q:()=>l});var r,o=t(7528);t(5043);const l=t(197).Ay.div(r||(r=(0,o.A)(["\n  background: url('","') no-repeat center center;\n  background-size: cover; //\uc0ac\uc774\uc988 \ubc15\uc2a4\uc5d0 \uace0\uc815\n  width: ","; //\ub113\uc774 200px \uace0\uc815\n  height: ",";\n"])),(n=>{let{url:e}=n;return e}),(n=>{let{width:e}=n;return null!==e&&void 0!==e?e:"200px"}),(n=>{let{height:e}=n;return null!==e&&void 0!==e?e:"200px"}))},2809:(n,e,t)=>{t.d(e,{A:()=>d});var r,o=t(7528),l=t(5043);const i=t(197).Ay.input(r||(r=(0,o.A)(["\n  border: 1px solid #d5d5d5;\n  height: 40px;\n  width: 100%;\n  padding: 0 10px;\n  border-radius: 3px;\n"]))),d=l.memo(i)},8444:(n,e,t)=>{t.d(e,{A:()=>h});var r,o,l=t(7528),i=t(5043),d=t(197),s=t(9888),a=t(5559),c=t(579);const{small:x}=a.A,u=d.Ay.div(r||(r=(0,l.A)(["\n  text-align: center;\n  padding: 7px 10px;\n  font-size: ",";\n  border-radius: 3px;\n  color: ",";\n\n  & + & {\n    margin-top: 5px;\n  }\n\n  ","\n"])),x,s.y.dark,(n=>{let{color:e}=n;return e&&(0,d.AH)(o||(o=(0,l.A)(["\n      color: ",";\n      box-shadow: 2px 2px 5px ",";\n    "])),s.y[e],s.y[e])})),m=n=>{let{messages:e,color:t,children:r}=n;return e=e||[],r&&e.push(r),(0,c.jsx)(c.Fragment,{children:e.map(((n,e)=>(0,c.jsx)(u,{color:t,children:n},e)))})},h=i.memo(m)},9310:(n,e,t)=>{t.d(e,{A:()=>p});var r,o=t(7528),l=t(5043),i=t(4117),d=t(5475),s=t(197),a=t(7114),c=t(5559),x=t(9888),u=t(579);const m=(0,s.Ay)((n=>{let{item:e,className:t}=n;const{t:r}=(0,i.Bd)(),{rstrId:o,images:l,rstrNm:s,rstrIntrcnCont:c,naverGrad:x,awardInfoDscrn:m,prkgPosYn:h,petEntrnPosblYn:p,dcrnYn:g,fgggMenuOfrYn:j,wifiOfrYn:v,mbPmamtYn:f,smorderYn:b}=e,A="/restaurant/info/".concat(o);return(0,u.jsx)("li",{className:t,children:(0,u.jsxs)(d.N_,{to:A,children:[l&&l.length>0&&(0,u.jsx)(a.q,{className:"photo",url:l[0].rstrImgUrl,alt:s,width:"180px",height:"180px"}),(0,u.jsxs)("div",{className:"item-content",children:[(0,u.jsx)("div",{className:"title",children:s}),(0,u.jsx)("div",{className:"description",children:c}),(x||m)&&(0,u.jsxs)("div",{className:"evaluation",children:[x&&(0,u.jsxs)("div",{className:"navergrad",children:["\ub124\uc774\ubc84 \ud3c9\uc810 : ",parseFloat(x).toFixed(1)]}),m&&(0,u.jsxs)("div",{className:"awardInfoDscrn",children:["\uc5b4\uc6cc\ub4dc : ",m]})]}),(h||p)&&(0,u.jsxs)("div",{className:"convenience",children:[h&&(0,u.jsx)("div",{className:"prkgPosYn",children:r("\uc8fc\ucc28_\uac00\ub2a5")}),p&&(0,u.jsx)("div",{className:"petEntrnPosblYn",children:r("\ubc18\ub824\ub3d9\ubb3c_\ub3d9\ubc18")}),g&&(0,u.jsx)("div",{className:"dcrnYn",children:r("\uc720\uc544\uc2dc\uc124")}),j&&(0,u.jsx)("div",{className:"fgggMenuOfrYn",children:r("\ub2e4\uad6d\uc5b4_\uba54\ub274\ud310")}),v&&(0,u.jsx)("div",{className:"wifiOfrYn",children:r("\ubb34\uc120\uc778\ud130\ub137")}),f&&(0,u.jsx)("div",{className:"mbPmamtYn",children:r("\ubaa8\ubc14\uc77c_\ud398\uc774\uba3c\ud2b8")}),b&&(0,u.jsx)("div",{className:"smorderYn",children:r("\uc2a4\ub9c8\ud2b8_\uc624\ub354")})]})]})]})})}))(r||(r=(0,o.A)(["\n  padding: 20px 0;\n  border-radius: 5px;\n\n  a {\n    display: flex;\n\n    .photo {\n      border-radius: 5px;\n      margin-right: 20px;\n    }\n\n    .item-content {\n      width: calc(100% - 200px);\n      word-break: break-all;\n\n      .title {\n        font-family: 'NanumSquareB';\n        font-size: ",";\n        margin-bottom: 8px;\n      }\n\n      .description {\n        margin-bottom: 10px;\n      }\n\n      .evaluation {\n        margin-bottom: 8px;\n\n        div{\n          font-family: 'NanumSquareB';\n          color: ",";\n        }\n      }\n    }\n    \n    .convenience {\n      color: #8f8f8f;\n      font-size: 0.95rem;\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      align-content: center;\n\n      div {\n        margin-right: 7px;\n      }\n    }\n  }\n"])),c.A.big,x.y.jmt),h=n=>{let{items:e}=n;return Array.isArray(e)&&e.length>0&&e.map((n=>(0,u.jsx)(m,{item:n},n.rstrId)))},p=l.memo(h)}}]);
//# sourceMappingURL=5642.b27b2d00.chunk.js.map