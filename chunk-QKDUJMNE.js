import{a as I}from"./chunk-5WZ2SDRU.js";import{l as x,m as F}from"./chunk-TLCZFGSH.js";import{Aa as p,Ba as f,Ja as l,Pa as u,Qa as d,R as o,Ra as g,Sa as v,Ta as h,W as c,Z as s,ab as y,db as C,gb as S,ib as G,jb as j,l as m}from"./chunk-OS3CLQ3N.js";var D=[{id:1,title:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 1"},{id:2,title:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 2"},{id:3,title:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 3"}];var A=(()=>{let e=class e{constructor(){}getGames(){return m(D)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var a=(()=>{let e=class e{constructor(r){this.gameApiService=r}getGames(){return this.gameApiService.getGames()}};e.\u0275fac=function(i){return new(i||e)(c(A))},e.\u0275prov=o({token:e,factory:e.\u0275fac});let t=e;return t})();var M=(t,e)=>e.id;function T(t,e){if(t&1&&h(0,"olivrya-card",0),t&2){let n=e.$implicit;l("title",n.title)("image","url(assets/games/"+n.id+".png)")}}var N=(()=>{let e=class e{constructor(r){this.gameService=r,this.games$=this.gameService.getGames()}};e.\u0275fac=function(i){return new(i||e)(f(a))},e.\u0275cmp=s({type:e,selectors:[["olivrya-games"]],standalone:!0,features:[C([a]),S],decls:5,vars:2,consts:[[3,"title","image"]],template:function(i,$){i&1&&(g(0,"h1"),y(1,"\u041C\u0438\u043D\u0438-\u0438\u0433\u0440\u044B"),v(),u(2,T,1,2,"olivrya-card",0,M),G(4,"async")),i&2&&(p(2),d(j(4,0,$.games$)))},dependencies:[F,x,I],changeDetection:0});let t=e;return t})();export{N as GamesComponent};