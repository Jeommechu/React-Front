"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[5886],{7114:(n,e,t)=>{t.d(e,{q:()=>i});var r,d=t(7528);t(5043);const i=t(197).Ay.div(r||(r=(0,d.A)(["\n  background: url('","') no-repeat center center;\n  background-size: cover; //\uc0ac\uc774\uc988 \ubc15\uc2a4\uc5d0 \uace0\uc815\n  width: ","; //\ub113\uc774 200px \uace0\uc815\n  height: ",";\n"])),(n=>{let{url:e}=n;return e}),(n=>{let{width:e}=n;return null!==e&&void 0!==e?e:"200px"}),(n=>{let{height:e}=n;return null!==e&&void 0!==e?e:"200px"}))},7841:(n,e,t)=>{t.d(e,{Bu:()=>g,Uz:()=>p,ZL:()=>f,xG:()=>h});var r,d,i,s,o,a=t(7528),c=t(197),l=t(9888);const{dark:x}=l.y,h=c.Ay.div(r||(r=(0,a.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 25px 50px;\n  margin: 50px auto;\n"]))),p=c.Ay.div(d||(d=(0,a.A)(["\n  margin: 0 auto 50px;\n"]))),g=c.Ay.div(i||(i=(0,a.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  box-shadow: 0 0 20px #c9c9c9;\n  padding: 25px 50px;\n  margin: 50px auto;\n  border-radius: 3px;\n"]))),f=c.Ay.div(s||(s=(0,a.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 50px;\n  margin: 50px auto;\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px ",";\n"])),x);c.Ay.div(o||(o=(0,a.A)(["\n  width: 500px;\n  margin: auto;\n"])))},982:(n,e,t)=>{t.d(e,{A:()=>x});var r=t(7528),d=t(5043);const i=t.p+"static/media/loading.4bce908dde1a6ad3c019.webp";var s,o=t(197),a=t(579);const c=o.Ay.div(s||(s=(0,r.A)(["\n  position: fixed;\n  top: calc(50% - 75px);\n  left: calc(50% - 75px);\n  width: 150px;\n  height: 150px;\n  z-index: 100;\n\n  img {\n    width: 100%;\n    height: 100%;\n    display: block;\n  }\n"]))),l=()=>(0,a.jsx)(c,{children:(0,a.jsx)("img",{src:i,alt:"loading"})}),x=d.memo(l)},2915:(n,e,t)=>{t.d(e,{O:()=>a});var r,d=t(7528),i=t(197),s=t(5559);const{extraBig:o}=s.A,a=i.Ay.h1(r||(r=(0,d.A)(["\n  font-size: ",";\n  font-weight: bold;\n  padding: 0 15px 15px;\n  margin: 0 0 20px;\n  line-height: 1;\n  text-align: center;\n"])),o)},4480:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(7390);function d(n,e,t){return new Promise(((d,i)=>{(async()=>{try{const s=await(0,r.A)(n,e,t);if(s.status>=200&&s.status<400)return void d(s.data.data);i(s.data)}catch(s){i(s)}})()}))}},6201:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(4480);function d(n){return(0,r.A)("/reservation/cancel/".concat(n))}},5519:(n,e,t)=>{t.d(e,{V:()=>i,l:()=>d});var r=t(8147);const d=n=>{var e;n=null!==(e=n)&&void 0!==e?e:{};const t=[];for(const[r,i]of Object.entries(n))t.push("".concat(r,"=").concat(i));let d="/reservation/list";return t.length>0&&(d+="?".concat(t.join("&"))),(0,r.A)(d)},i=n=>(0,r.A)("/reservation/info/".concat(n))},2380:(n,e,t)=>{t.r(e),t.d(e,{default:()=>G});var r,d,i,s,o,a,c,l=t(5043),x=t(9367),h=t(7841),p=t(2915),g=t(7528),f=t(982),m=t(5519),u=t(6201),j=t(3216),b=t(197),w=t(4117),A=t(5475),y=t(5559),v=t(7114),k=t(579);const{medium:_}=y.A,z=b.Ay.div(r||(r=(0,g.A)(["\n  width: 100%;\n  margin: 20px 0;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: #f8f9fa;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n"]))),S=b.Ay.div(d||(d=(0,g.A)(["\n  margin-bottom: 20px;\n  padding: 20px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),C=b.Ay.h3(i||(i=(0,g.A)(["\n  margin-bottom: 15px;\n  font-size: 1.7em;\n  color: #ff5722;\n  font-weight: bold;\n  border-bottom: 2px solid #e5e5e5;\n  padding-bottom: 5px;\n"]))),P=b.Ay.dl(s||(s=(0,g.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n\n  dt {\n    font-weight: bold;\n    color: #555;\n    width: 40%;\n    text-align: left;\n    font-size: 1.2em;\n  }\n\n  dd {\n    width: 60%;\n    text-align: right;\n    font-weight: bold;\n    color: #777;\n    font-size: ",";\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    button {\n      margin-left: 10px;\n    }\n  }\n"])),_),T=(b.Ay.div(o||(o=(0,g.A)(["\n  display: flex;\n  margin-top: 20px;\n  width: 100%;\n  justify-content: space-between;\n"]))),b.Ay.button(a||(a=(0,g.A)(["\n  padding: 8px 15px;\n  background-color: #ff5722;\n  color: white;\n  border: none;\n  font-weight: bold;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1em;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #e64a19;\n  }\n"])))),B=(0,b.Ay)(A.N_)(c||(c=(0,g.A)(["\n  padding: 12px 20px;\n  background-color: #ff5722;\n  color: white;\n  border: none;\n  font-weight: bold;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.2em;\n  text-align: center;\n  transition: background-color 0.3s ease;\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n\n  &:hover {\n    background-color: #d03e12;\n  }\n"]))),N=n=>n&&11===n.length?"".concat(n.slice(0,3),"-").concat(n.slice(3,7),"-").concat(n.slice(7)):n,D=n=>{let{item:e,onCancel:t}=n;const{t:r}=(0,w.Bd)(),{restaurant:{images:d,rstrNm:i}}=e,{orderNo:s,rname:o,raddress:a,rtel:c,rDateTime:l,persons:x,name:h,email:p,mobile:g,status:f,statusStr:m,totalPayPrice:u,restaurant:j}=e,{formattedDate:b,formattedTime:A}=(n=>{const e=new Date(n),t=e.getFullYear(),r=e.getMonth()+1,d=e.getDate(),i=e.getHours(),s=e.getMinutes();return{formattedDate:"".concat(t,"\ub144 ").concat(r,"\uc6d4 ").concat(d,"\uc77c"),formattedTime:"".concat(i,"\uc2dc ").concat(s.toString().padStart(2,"0"),"\ubd84")}})(l);return(0,k.jsxs)(z,{children:[d&&d.length>0&&(0,k.jsx)(v.q,{className:"photo",url:d[0].rstrImgUrl,alt:i,width:"100%",height:"200px",style:{borderRadius:"10px",marginBottom:"20px"}}),(0,k.jsxs)(S,{children:[(0,k.jsx)(C,{children:r("\uc608\uc57d \uc815\ubcf4")}),s&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc608\uc57d_\ubc88\ud638")}),(0,k.jsxs)("dd",{children:[s,"\ubc88"]})]}),b&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc608\uc57d_\ub0a0\uc9dc")}),(0,k.jsx)("dd",{children:b})]}),A&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc608\uc57d_\uc2dc\uac04")}),(0,k.jsx)("dd",{children:A})]}),x&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc608\uc57d_\uc778\uc6d0")}),(0,k.jsxs)("dd",{children:[x,"\uba85"]})]})]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(C,{children:r("\uc2dd\ub2f9 \uc815\ubcf4")}),o&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc2dd\ub2f9\uba85")}),(0,k.jsx)("dd",{children:o})]}),a&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc2dd\ub2f9_\uc8fc\uc18c")}),(0,k.jsx)("dd",{children:a})]}),c&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc2dd\ub2f9_\uc5f0\ub77d\ucc98")}),(0,k.jsx)("dd",{children:c})]})]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(C,{children:r("\uacb0\uc81c \uc815\ubcf4")}),u&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uacb0\uc81c_\uae08\uc561")}),(0,k.jsxs)("dd",{children:[u,"\uc6d0"]})]})]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(C,{children:r("\uc608\uc57d\uc790 \uc815\ubcf4")}),(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc608\uc57d\uc790_\uc131\ud568")}),(0,k.jsx)("dd",{children:h})]}),p&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc774\uba54\uc77c")}),(0,k.jsx)("dd",{children:p})]}),g&&(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc804\ud654\ubc88\ud638")}),(0,k.jsx)("dd",{children:N(g)})]})]}),(0,k.jsxs)(S,{children:[(0,k.jsxs)(P,{children:[(0,k.jsx)("dt",{children:r("\uc608\uc57d\uc0c1\ud0dc")}),(0,k.jsxs)("dd",{children:[m,["START","APPLY","CONFIRM"].includes(f)&&(0,k.jsx)(T,{type:"button",onClick:()=>t(s),children:r("\uc608\uc57d_\ucde8\uc18c")})]})]}),(0,k.jsx)(B,{to:"/board/write/review?rstrId=".concat(j.rstrId),children:r("\ud6c4\uae30_\uc791\uc131\ud558\uae30")})]})]})},I=l.memo(D);var O;const F=b.Ay.div(O||(O=(0,g.A)(["\n  position: relative;\n  min-height: 100vh;\n  padding-bottom: 80px;\n"]))),M=n=>{let{setPageTitle:e}=n;const{t:t}=(0,w.Bd)(),[r,d]=(0,l.useState)(null),[i,s]=(0,l.useState)(!1),{orderNo:o}=((0,j.Zp)(),(0,j.g)());(0,l.useEffect)((()=>{s(!0),(0,m.V)(o).then((n=>{e("".concat(n.rname," ").concat(t("\uc608\uc57d_\uc815\ubcf4"))),d(n)})),s(!1)}),[o,e]);const a=(0,l.useCallback)((n=>{window.confirm(t("\uc815\ub9d0_\ucde8\uc18c\ud558\uaca0\uc2b5\ub2c8\uae4c"))&&(async()=>{try{const e=await(0,u.A)(n);d(e)}catch(e){console.error(e)}})()}),[t]);return i||!r?(0,k.jsx)(f.A,{}):(0,k.jsx)(F,{children:(0,k.jsx)(I,{item:r,onCancel:a})})},R=l.memo(M),q=()=>{const[n,e]=(0,l.useState)("");return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x.mg,{children:(0,k.jsx)("title",{children:n})}),(0,k.jsxs)(h.xG,{children:[(0,k.jsx)(p.O,{children:n}),(0,k.jsx)(R,{setPageTitle:e})]})]})},G=l.memo(q)},9888:(n,e,t)=>{t.d(e,{S:()=>d,y:()=>r});const r={primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#515151",black:"#000",jmt:"#ff3d00",shadow:"#c9c9c9"},d={primary:[r.primary,"#fff",r.primary],secondary:[r.secondary,"#fff",r.secondary],success:[r.success,"#fff",r.success],danger:[r.danger,"#fff",r.danger],warning:[r.warning,"#212529","#212529"],info:[r.info,"#fff",r.info],light:[r.light,"#212529","#212529"],dark:[r.dark,"#fff",r.dark],jmt:[r.jmt,"#fff",r.jmt]}},5559:(n,e,t)=>{t.d(e,{A:()=>r});const r={small:"0.75rem",normal:"1rem",medium:"1.25rem",big:"1.5rem",extraBig:"2rem"}}}]);
//# sourceMappingURL=5886.312693cd.chunk.js.map