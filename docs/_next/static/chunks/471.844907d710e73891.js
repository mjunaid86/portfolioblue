"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{9543:function(e,s,n){var a=n(5893);n(7294);var l=n(9464);let r=e=>{let{animationPath:s}=e;return(0,a.jsx)("div",{onClick:()=>null,children:(0,a.jsx)(l.Z,{options:{loop:!0,autoplay:!0,path:s}})})};s.Z=r},8819:function(e,s,n){var a=n(5893);n(7294);var l=n(7975),r=n(8122);let o=()=>(0,a.jsxs)("div",{className:"btn-wrapper text-lg",children:[r.KT.url&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"white",rel:"noopener","aria-label":"URL",href:r.KT.url,target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-link"})})}),r.KT.linkedin&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"twitter",rel:"noopener","aria-label":"Linkedin",href:r.KT.linkedin,target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-linkedin"})})}),r.KT.github&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"github",href:r.KT.github,rel:"noopener","aria-label":"Github",target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-github"})})}),r.KT.instagram&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"instagram",href:r.KT.instagram,target:"_blank",rel:"noopener","aria-label":"Instagram",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-instagram"})})}),r.KT.facebook&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"facebook",href:r.KT.facebook,target:"_blank",rel:"noopener","aria-label":"Facebook",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-facebook-square"})})}),r.KT.twitter&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle",color:"twitter",href:r.KT.twitter,target:"_blank",rel:"noopener","aria-label":"Twitter",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-twitter"})})})]});s.Z=o},9471:function(e,s,n){n.r(s);var a=n(5893),l=n(7294),r=n(8122),o=n(8595),t=n(267),i=n(1252),c=n(7975),d=n(9543),m=n(8819);let u=()=>((0,l.useEffect)(()=>{document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:"position-relative",children:(0,a.jsxs)("section",{className:"section section-lg section-shaped pb-250",children:[(0,a.jsxs)("div",{className:"shape shape-style-1 bg-gradient-info",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsx)(o.Z,{className:"py-lg-md d-flex",children:(0,a.jsx)("div",{className:"col px-0",children:(0,a.jsxs)(t.Z,{children:[(0,a.jsxs)(i.Z,{lg:"6",children:[(0,a.jsx)("h1",{className:"display-3 text-white",children:r.c0.title+" "}),(0,a.jsx)("p",{className:"lead text-white",children:r.c0.description}),(0,a.jsx)(m.Z,{}),r.c0.resumeLink&&(0,a.jsx)("div",{className:"btn-wrapper my-4",children:(0,a.jsxs)(c.Z,{className:"btn-white btn-icon mb-3 mb-sm-0 ml-1",color:"default",href:r.c0.resumeLink,children:[(0,a.jsx)("span",{className:"btn-inner--icon mr-1",children:(0,a.jsx)("i",{className:"fa fa-file"})}),(0,a.jsx)("span",{className:"btn-inner--text",children:"See My Resume"})]})})]}),(0,a.jsx)(i.Z,{lg:"6",children:(0,a.jsx)(d.Z,{animationPath:"/lottie/coding.json"})})]})})}),(0,a.jsx)("div",{className:"separator separator-bottom separator-skew",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:(0,a.jsx)("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})})})]})})}));s.default=u},7975:function(e,s,n){var a=n(7462),l=n(3366),r=n(7326),o=n(5068),t=n(7294),i=n(5697),c=n.n(i),d=n(4184),m=n.n(d),u=n(3663),p={active:c().bool,"aria-label":c().string,block:c().bool,color:c().string,disabled:c().bool,outline:c().bool,tag:u.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),onClick:c().func,size:c().string,children:c().node,className:c().string,cssModule:c().object,close:c().bool},f=function(e){function s(s){var n;return(n=e.call(this,s)||this).onClick=n.onClick.bind((0,r.Z)(n)),n}(0,o.Z)(s,e);var n=s.prototype;return n.onClick=function(e){if(this.props.disabled){e.preventDefault();return}if(this.props.onClick)return this.props.onClick(e)},n.render=function(){var e=this.props,s=e.active,n=e["aria-label"],r=e.block,o=e.className,i=e.close,c=e.cssModule,d=e.color,p=e.outline,f=e.size,b=e.tag,h=e.innerRef,x=(0,l.Z)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&void 0===x.children&&(x.children=t.createElement("span",{"aria-hidden":!0},"\xd7"));var g=(0,u.mx)(m()(o,{close:i},i||"btn",i||"btn"+(p?"-outline":"")+"-"+d,!!f&&"btn-"+f,!!r&&"btn-block",{active:s,disabled:this.props.disabled}),c);return x.href&&"button"===b&&(b="a"),t.createElement(b,(0,a.Z)({type:"button"===b&&x.onClick?"button":void 0},x,{className:g,ref:h,onClick:this.onClick,"aria-label":n||(i?"Close":null)}))},s}(t.Component);f.propTypes=p,f.defaultProps={color:"secondary",tag:"button"},s.Z=f},1252:function(e,s,n){var a=n(7462),l=n(3366),r=n(7294),o=n(5697),t=n.n(o),i=n(4184),c=n.n(i),d=n(3663),m=t().oneOfType([t().number,t().string]),u=t().oneOfType([t().bool,t().number,t().string,t().shape({size:t().oneOfType([t().bool,t().number,t().string]),order:m,offset:m})]),p={tag:d.iC,xs:u,sm:u,md:u,lg:u,xl:u,className:t().string,cssModule:t().object,widths:t().array},f=function(e,s,n){return!0===n||""===n?e?"col":"col-"+s:"auto"===n?e?"col-auto":"col-"+s+"-auto":e?"col-"+n:"col-"+s+"-"+n},b=function(e){var s=e.className,n=e.cssModule,o=e.widths,t=e.tag,i=(0,l.Z)(e,["className","cssModule","widths","tag"]),m=[];o.forEach(function(s,a){var l=e[s];if(delete i[s],l||""===l){var r=!a;if((0,d.Kn)(l)){var o,t=r?"-":"-"+s+"-",u=f(r,s,l.size);m.push((0,d.mx)(c()(((o={})[u]=l.size||""===l.size,o["order"+t+l.order]=l.order||0===l.order,o["offset"+t+l.offset]=l.offset||0===l.offset,o)),n))}else{var p=f(r,s,l);m.push(p)}}}),m.length||m.push("col");var u=(0,d.mx)(c()(s,m),n);return r.createElement(t,(0,a.Z)({},i,{className:u}))};b.propTypes=p,b.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},s.Z=b},8595:function(e,s,n){var a=n(7462),l=n(3366),r=n(7294),o=n(5697),t=n.n(o),i=n(4184),c=n.n(i),d=n(3663),m={tag:d.iC,fluid:t().oneOfType([t().bool,t().string]),className:t().string,cssModule:t().object},u=function(e){var s=e.className,n=e.cssModule,o=e.fluid,t=e.tag,i=(0,l.Z)(e,["className","cssModule","fluid","tag"]),m="container";!0===o?m="container-fluid":o&&(m="container-"+o);var u=(0,d.mx)(c()(s,m),n);return r.createElement(t,(0,a.Z)({},i,{className:u}))};u.propTypes=m,u.defaultProps={tag:"div"},s.Z=u},267:function(e,s,n){var a=n(7462),l=n(3366),r=n(7294),o=n(5697),t=n.n(o),i=n(4184),c=n.n(i),d=n(3663),m=t().oneOfType([t().number,t().string]),u={tag:d.iC,noGutters:t().bool,className:t().string,cssModule:t().object,form:t().bool,xs:m,sm:m,md:m,lg:m,xl:m},p=function(e){var s=e.className,n=e.cssModule,o=e.noGutters,t=e.tag,i=e.form,m=e.widths,u=(0,l.Z)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];m.forEach(function(s,n){var a=e[s];delete u[s],a&&p.push(n?"row-cols-"+s+"-"+a:"row-cols-"+a)});var f=(0,d.mx)(c()(s,o?"no-gutters":null,i?"form-row":"row",p),n);return r.createElement(t,(0,a.Z)({},u,{className:f}))};p.propTypes=u,p.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},s.Z=p}}]);