(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[85],{7979:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(6010),c=n(9349),l=n(3905),i=n(7277),o=n(571),s=n(9732),m="mdxPageWrapper_3qD3";var u=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,d=n.title,f=n.description,v=n.wrapperClassName,p=n.hide_table_of_contents,E=u.permalink;return r.createElement(c.Z,{title:d,description:f,permalink:E,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",m)},r.createElement("div",{className:(0,a.Z)("col",!p&&"col--8")},r.createElement(l.Zo,{components:i.Z},r.createElement(t,null))),!p&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(o.Z,{toc:t.toc})))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010);var c=function(e,t,n){var a=(0,r.useState)(void 0),c=a[0],l=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,i=!1,o=document.getElementsByClassName(e);a<o.length&&!i;){var s=o[a],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));r.id===u&&(c&&c.classList.remove(t),s.classList.add(t),l(s),i=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},l="tableOfContents_35-E",i="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return c(i,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(l,"thin-scrollbar")},r.createElement(o,{toc:t}))}}}]);