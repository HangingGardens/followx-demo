import{al as E,a5 as c,a4 as i,ac as $,_ as w,d as h,o as d,c as p,u as g,y as u,j as I,F as P,z as N,h as m,g as B,b as n,e as C,a6 as L,am as b,an as R,A as W,ao as S,N as T}from"./index-94377382.js";import{t as v}from"./toast-7242d0ba.js";const ut=()=>{const t=E();return{tokenCount:async()=>{try{const o=await t.tokenCount();return c(o)}catch(o){return i(o)}},getTokenRange:async(o,r)=>{try{const x=await t.getTokenRange(o,r);return c(x)}catch(x){return i(x)}},donationTokens:async o=>{try{const r=await t.donationTokens(o);return c(r)}catch(r){return i(r)}},donate:async(o,r)=>{try{const x=await(await t.donate(o,$(r))).wait();return c(x)}catch(x){return v(x),i(x)}}}};var f=(t=>(t[t.PUBLIC=0]="PUBLIC",t[t.WHITELIST=1]="WHITELIST",t[t.UPCOMING=2]="UPCOMING",t[t.CLOSED=3]="CLOSED",t))(f||{}),G=(t=>(t[t.FIXED=0]="FIXED",t[t.WHITELIST=1]="WHITELIST",t))(G||{});const H=""+new URL("../images/mav-c589ba9c.svg",import.meta.url).href;const U={key:0,class:"text-xs px-2 py-[2px] public"},q={key:1,class:"text-xs px-2 py-[2px] white-list"},D={key:2,class:"text-xs px-2 py-[2px] upcoming"},F={key:3,class:"text-xs px-2 py-[2px] closed"},M=h({props:{status:{type:null,required:!0}},setup(t){return(a,y)=>(d(),p(P,null,[t.status===g(f).PUBLIC?(d(),p("div",U,u(a.$t("ido.PUBLIC")),1)):t.status===g(f).WHITELIST?(d(),p("div",q,u(a.$t("ido.WHITELIST")),1)):t.status===g(f).UPCOMING?(d(),p("div",D,u(a.$t("ido.UPCOMING")),1)):I("v-if",!0),t.status===g(f).CLOSED?(d(),p("div",F,u(a.$t("ido.CLOSED")),1)):I("v-if",!0)],64))}}),O=w(M,[["__scopeId","data-v-74ab17ea"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/ido/components/StatusTag.vue"]]),V={class:"flex items-center gap-4"},X=["src"],j=h({setup(t){const a=N([{name:"twitter",icon:m("ido/twitter.svg"),url:""},{name:"telegram",icon:m("ido/telegram.svg"),url:""},{name:"mingcute",icon:m("ido/mingcute.svg"),url:""},{name:"discord",icon:m("ido/discord.svg"),url:""},{name:"earth",icon:m("ido/earth.svg"),url:""}]);return(y,_)=>(d(),p("div",V,[(d(!0),p(P,null,B(g(a),k=>(d(),p("div",{key:k.name},[n("img",{src:k.icon,class:"w-8 h-8",alt:""},null,8,X)]))),128))]))}}),z=w(j,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/ido/components/LinkList.vue"]]),J={class:"flex-center-bw"},K={class:"flex items-center gap-3"},Q=n("img",{class:"w-[50px] h-[50px]",src:H,alt:""},null,-1),Y={class:"text-[28px] lg:text-[32px] font-black max-w-[150px] lg:max-w-[300px] truncate"},Z=n("div",{class:"mt-8"}," Maverick is a composable DEX that enables liquidity providers to achieve high capital efficiency with their desired Liquidity Providing (LP) strategy. ",-1),A=h({props:{tokenInfo:{type:null,required:!0}},setup(t){return(a,y)=>{var _;return d(),p("div",null,[n("div",J,[n("div",K,[Q,n("div",Y,u(((_=t.tokenInfo.tokenInfo)==null?void 0:_.title)||"token"),1)]),C(O,{status:t.tokenInfo.status},null,8,["status"])]),Z,C(z,{class:"mt-4"})])}}}),lt=w(A,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/ido/components/TokenInfo.vue"]]);const tt={class:"mt-8"},et={class:"flex items-baseline justify-center"},st={class:"text-main"},nt={class:"text-2xl font-semibold"},ot={class:"bg-[#4a5987] p-1 rounded-xl mt-5"},at={class:"mt-2 text-lg font-bold text-center font-Mukta text-config-sub"},rt=h({props:{tokenInfo:{type:null,required:!0}},setup(t){return(a,y)=>{var _,k,o,r;return d(),p("div",tt,[n("div",et,[n("div",st,[n("span",nt,u(g(L)(g(b)(((_=t.tokenInfo.donatedAmount)==null?void 0:_.toString())||"0"))),1),n("span",null,u((k=t.tokenInfo)==null?void 0:k.payTokenSymbol),1)]),n("div",null," / "+u(g(L)(g(b)(((o=t.tokenInfo.totalSupply)==null?void 0:o.toString())||"0")))+" "+u((r=t.tokenInfo)==null?void 0:r.payTokenSymbol),1)]),n("div",ot,[n("div",{class:"h-3 max-w-full rounded-xl bg",style:R({width:t.tokenInfo.progress*100>1?t.tokenInfo.progress*100+"%":0+"%"})},null,4)]),n("div",at,u(g(W)(t.tokenInfo.progress*100,2))+"% "+u(a.$t("ido.raised")),1)])}}}),dt=w(rt,[["__scopeId","data-v-850c00f8"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/ido/components/IdoProgress.vue"]]),pt=()=>{const t=S();return{tTokenCount:async()=>{try{const s=await t.tokenCount();return c(s)}catch(s){return i(s)}},tGetTokenRange:async(s,e)=>{try{const l=await t.getTokenRange(s,e);return c(l)}catch(l){return i(l)}},tokens:async s=>{try{const e=await t.tokens(s);return c(e)}catch(e){return i(e)}},buyTokens:async(s,e)=>{try{const l=await(await t.buyTokens($(s),e)).wait();return c(l)}catch(l){return v(l),i(l)}},trades:async s=>{try{const e=T().getCurrentAccount(),l=await t.trades(s,e);return c(l)}catch(e){return i(e)}},extract:async s=>{try{const e=await(await t.extract(s)).wait();return c(e)}catch(e){return v(e),i(e)}},whitelists:async s=>{try{const e=await t.whitelists(s,T().getCurrentAccount());return c(e)}catch(e){return i(e)}}}};export{dt as I,G as M,f as S,lt as T,ut as f,pt as w};
