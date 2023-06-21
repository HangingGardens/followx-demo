import{a2 as De,a3 as Re,a4 as Ne,a5 as h,a6 as me,a7 as D,a8 as R,a9 as le,_ as F,d as U,i as I,o as x,z as O,w as P,e as b,aa as Oe,y as j,s as J,K as ge,ab as He,c as k,b as a,B as Y,ac as ve,u as s,x as oe,t as u,T as we,N as W,J as E,Q as re,M as L,ad as Me,r as ie,U as ze,v as K,m as Ke,ae as je,g as Z,F as X,h as Je,k as G,p as We,l as Ge,$ as Qe,I as ne,n as fe,af as Ye,L as y,j as Q,H as Ze,G as Xe,R as et,S as tt}from"./index-b9f62565.js";const nt=""+new URL("../images/setting-66f9da98.svg",import.meta.url).href,N=t=>{const{t:c}=De.global;t=JSON.parse(JSON.stringify(t)).reason||t||"error";let m=t.lastIndexOf(":");var f=t.substring(m+1,t.length);f=f.replace(" ","").replace(/(.*)\./,"$1"),t=c(`errorMsg.${f}`).indexOf("errorMsg.")!=-1?f:c(`errorMsg.${f}`),Re(t)},be=()=>{const t=Ne();return{getAmountsOut:async(l,e)=>{try{const n=await t.getAmountsOut(h(l),e);return+me(n[n.length-1])}catch{return 0}},getAmountsIn:async(l,e)=>{try{const n=await t.getAmountsIn(h(l),e);return+me(n[0])}catch{return 0}},swapExactTokensForTokens:async(l,e,n,r,o)=>{try{const d=await t.swapExactTokensForTokens(h(l),h(e),n,r,Date.now()+6e4*o);return D(d)}catch(d){return N(d),R(d)}},swapExactETHForTokens:async(l,e,n,r,o)=>{try{const d=await t.swapExactETHForTokens(h(e),n,r,Date.now()+6e4*o,{value:le(l.toString())._hex});return D(d)}catch(d){return N(d),R(d)}},swapExactTokensForETH:async(l,e,n,r,o)=>{try{const d=await t.swapExactTokensForTokens(h(l),h(e),n,r,Date.now()+6e4*o);return D(d)}catch(d){return N(d),R(d)}},swapTokensForExactTokens:async(l,e,n,r,o)=>{try{const d=await t.swapTokensForExactTokens(h(l),h(e),n,r,Date.now()+6e4*o);return D(d)}catch(d){return N(d),R(d)}},swapETHForExactTokens:async(l,e,n,r,o)=>{try{const d=await t.swapExactETHForTokens(h(l),n,r,Date.now()+6e4*o,{value:le(e.toString())._hex});return D(d)}catch(d){return N(d),R(d)}},swapTokensForExactETH:async(l,e,n,r,o)=>{console.log(l);try{const d=await t.swapTokensForExactTokens(h(l),h(e),n,r,Date.now()+6e4*o);return D(d)}catch(d){return N(d),R(d)}},addLiquidity:async(l,e,n,r,o,d,C,_)=>{console.log(l,e,n,r,o,d,C,_),console.log(Date.now()+1e3*60*_);try{const z=await(await t.addLiquidity(l,e,h(n),h(r),h(o),h(d),C,Date.now()+6e4*_)).wait();return D(z)}catch(z){return console.log(z),N(z),R(z)}},addLiquidityETH:async(l,e,n,r,o,d,C)=>{try{const _=await(await t.addLiquidityETH(e,h(n),h(r),h(o),d,Date.now()+6e4*C,{value:le(l.toString())._hex})).wait();return D(_)}catch(_){return console.log(_),N(_),R(_)}},removeLiquidity:async(l,e,n,r,o,d,C)=>{console.log(l,e,n,r,o,d,C),console.log(Date.now()+1e3*60*C);try{const _=await(await t.removeLiquidity(l,e,h(n),h(r),h(o),d,Date.now()+6e4*C)).wait();return D(_)}catch(_){return console.log(_),N(_),R(_)}},removeLiquidityETH:async(l,e,n,r,o,d)=>{try{const C=await(await t.removeLiquidityETH(l,h(e),h(n),h(r),o,Date.now()+6e4*d)).wait();return D(C)}catch(C){return N(C),R(C)}}}},ot=U({props:{src:{type:String,required:!0,default:""},size:{type:Number,required:!1,default:26}},setup(t){const{src:c}=t;return(m,f)=>{const p=I("van-icon"),A=I("van-image");return c?(x(),O(A,{key:1,src:c},{error:P(()=>[b(p,{name:"question-o"})]),_:1})):(x(),O(p,{key:0,name:"question-o",size:t.size},null,8,["size"]))}}}),ee=F(ot,[["__file","C:/Users/l/Desktop/followx-dapp/src/components/UI/TokenImage.vue"]]);const st={class:"bg-box rounded-xl py-1.5 px-2 flex-center"},at={key:1,class:"flex-1"},lt={class:"font-bold text-baseColor"},it={class:"flex-center-bw text-xs mt-1 font-medium"},rt=U({props:{token:{type:null,required:!0},modelValue:{type:[String,Number,null],required:!0},disabled:{type:Boolean,required:!0},loading:{type:Boolean,required:!0}},emits:["update:modelValue","focus","blur","handleSelectToken"],setup(t,{emit:c}){const{token:m,modelValue:f,disabled:p,loading:A}=t;Oe(async()=>{l(),we(m.address)},3e3,{immediate:!1}),be();const[v,$]=j(!0),g=J({symbol:"-",balance:null,price:null}),S=Me(n=>{c("update:modelValue",n)},500,{maxWait:5e3}),B=()=>{c("focus"),c("update:modelValue",g.balance)},T=n=>{S(n)},V=async()=>{g.symbol=await L(m.address).symbol()},l=async()=>{if(W(m.address,E.BNB)){g.balance=await re();return}g.balance=await L(m.address).balanceOf()},e=async()=>{V(),l(),g.price=await we(m.address)};return ge(m,(n,r)=>{$(!1),He(()=>{$(!0)}),e()},{deep:!0,immediate:!0}),(n,r)=>{const o=I("VanField"),d=I("van-loading"),C=I("van-icon");return x(),k("div",null,[a("div",st,[t.loading?(x(),k("div",at,[b(d,{size:"16"})])):(x(),O(o,{key:0,modelValue:t.modelValue,"onUpdate:modelValue":[r[0]||(r[0]=_=>Y(f)?f.value=_:null),T],class:"flex-1 bg-box rounded-xl text-xs text-baseColor font-bold",placeholder:"0",disabled:t.disabled,onFocus:r[1]||(r[1]=_=>c("focus")),onBlur:r[2]||(r[2]=_=>c("blur"))},null,8,["modelValue","disabled"])),a("div",{class:"dark:bg-[#061629] bg-box px-4 py-3.5 flex-center gap-2 rounded-xl cursor-pointer",onClick:r[3]||(r[3]=ve(_=>c("handleSelectToken"),["stop"]))},[s(v)?(x(),O(ee,{key:0,src:t.token.logoURI,class:"w-5 h-5",size:20},null,8,["src"])):oe("v-if",!0),a("div",lt,u(s(g).symbol),1),b(C,{name:"arrow-down",alt:"",class:"w-2.5 h-auto text-main"})])]),a("div",it,[a("div",null,"$"+u(s(g).price||0),1),a("div",{class:"text-[#46598B] cursor-pointer text-right",onClick:B},u(n.$t("swap.balance"))+" "+u(s(g).balance||0),1)])])}}}),xe=F(rt,[["__scopeId","data-v-2b1458e6"],["__file","C:/Users/l/Desktop/followx-dapp/src/view/trade/swap/SwapItem.vue"]]),ct={key:1},dt=U({props:{token:{type:null,required:!0}},setup(t){const{token:c}=t,m=ie(null),f=ie(!1),p=async()=>{if(!c.address)return;f.value=!0;const v=W(c.address,E.BNB)?await re():await L(c.address).balanceOf();f.value=!1,m.value=v},A=()=>{p()};return ze(()=>{A()}),(v,$)=>{const g=I("VanLoading");return x(),k("div",null,[f.value?(x(),O(g,{key:0,size:"14"})):(x(),k("span",ct,u(s(K)(m.value||0,4)),1))])}}}),ut=F(dt,[["__file","C:/Users/l/Desktop/followx-dapp/src/components/TokenBalance.vue"]]);const pt={class:"bg-white box-shadow rounded-2xl w-[320px] lg:w-[390px] text-black px-2.5 lg:px-5 h-[550px]"},mt={class:"h-[200px] pt-[30px]"},wt={class:"flex-center-bw h-10 font-bold text-2xl"},xt={class:"h-[50px] flex items-center bg-[#EAF4FF] rounded-[15px] mt-[15px] inset-shadow px-1"},gt={class:"grid grid-cols-4 gap-1 py-[15px] border-b border-solid border-[#E9E9E9]"},vt=["onClick"],ft={class:"h-[350px] overflow-y-scroll"},bt={key:0,class:"flex-center mt-4"},yt=["onClick"],ht={class:"flex-center"},kt={class:"flex flex-col ml-2.5"},_t={class:"text-base"},Tt={class:"text-[#46598B]"},$t={class:"text-right"},At=U({props:{show:{type:Boolean,required:!0}},emits:["close","confirmSelectToken"],setup(t,{emit:c}){const{show:m}=t,f=Ke("importTokenList",[]),p=J({tokenAddress:null,tokens:f.value.concat(E.tokens),resultToken:[],searchLoading:!1}),A=async()=>{if(!p.tokenAddress)return;if(p.searchLoading=!0,p.resultToken=[],await L(p.tokenAddress).isErc20()){const g={name:await L(p.tokenAddress).name(),symbol:await L(p.tokenAddress).symbol(),address:p.tokenAddress};p.resultToken.push(g)}p.searchLoading=!1},v=async $=>{const g={...$,logoURI:$.logoURI||""};p.tokens.findIndex(B=>B.address===$.address)===-1&&f.value.unshift(g),c("confirmSelectToken",g),c("close")};return($,g)=>{const S=I("van-icon"),B=I("van-field"),T=I("VanLoading"),V=I("VanPopup");return x(),O(V,{show:t.show,"onUpdate:show":g[2]||(g[2]=l=>Y(m)?m.value=l:null),class:"bg-transparent",rounded:"",onClickOverlay:g[3]||(g[3]=l=>c("close")),onClickCloseIcon:g[4]||(g[4]=l=>c("close"))},{default:P(()=>[a("div",pt,[a("div",mt,[a("div",wt,[a("div",null,u($.$t("trade.token.select")),1),b(S,{name:"cross",onClick:g[0]||(g[0]=l=>c("close"))})]),a("div",xt,[b(B,{modelValue:s(p).tokenAddress,"onUpdate:modelValue":g[1]||(g[1]=l=>s(p).tokenAddress=l),"right-icon":"search",placeholder:$.$t("trade.token.selectSearch"),onKeyup:je(A,["enter"])},{"right-icon":P(()=>[b(S,{name:"search",class:"text-[#29AAC7] text-2xl font-bold",onClick:A})]),_:1},8,["modelValue","placeholder","onKeyup"])]),a("div",gt,[(x(!0),k(X,null,Z(s(p).tokens.slice(0,4),l=>(x(),k("div",{class:"bg-[#EAF4FF] rounded-[15px] h-[34px] cursor-pointer flex-center text-sm",onClick:e=>v(l)},[b(ee,{src:l.logoURI,class:"w-6 h-6 mr-1",size:24},null,8,["src"]),a("span",null,u(l.symbol),1)],8,vt))),256))])]),oe(" scroll "),a("div",ft,[s(p).searchLoading?(x(),k("div",bt,[b(T,{size:"20"})])):oe("v-if",!0),(x(!0),k(X,null,Z(s(p).tokenAddress?s(p).resultToken:s(p).tokens,l=>(x(),k("div",{class:"h-[45px] flex-center-bw mt-[15px] cursor-pointer",onClick:e=>v(l)},[a("div",ht,[b(ee,{src:l.logoURI,class:"w-6 h-6",size:24},null,8,["src"]),a("div",kt,[a("div",_t,u(l.symbol),1),a("div",Tt,u(l.name),1)])]),a("div",$t,[b(ut,{token:l},null,8,["token"])])],8,yt))),256))])])]),_:1},8,["show"])}}}),Ct=F(At,[["__scopeId","data-v-325f02e4"],["__file","C:/Users/l/Desktop/followx-dapp/src/components/SelectTokenPop.vue"]]);const se=t=>(We("data-v-27a4fc01"),t=t(),Ge(),t),Lt={class:"bg-white px-4 py-7 w-[320px] text-[#646464]"},St=se(()=>a("div",null,"Max slippage",-1)),Bt={class:"grid grid-cols-4 gap-x-2 mt-4 pb-6 text-[#29AAC7] border-b border-solid border-[#E9E9E9]"},Et=["onClick"],It={class:"flex-center"},Vt=G(" % "),qt={class:"flex-center-bw gap-5 mt-4"},Pt=se(()=>a("div",{class:"whitespace-nowrap"},"Transaction deadline",-1)),Ft={class:"flex-center text-[#29AAC7] gap-1"},Ut=se(()=>a("div",null,"min",-1)),Dt={class:"flex-center-bw mt-5"},Rt=se(()=>a("div",{class:"text-[#646464]"},"Expert mode",-1)),Nt=["src"],Ot=U({props:{show:{type:Boolean,required:!0},slipValue:{type:[String,Number,null],required:!0},timeValue:{type:[String,Number,null],required:!0},modeValue:{type:[Boolean,null],required:!1}},emits:["close","update:slip-value","update:time-value","changeMode"],setup(t,{emit:c}){const{show:m,slipValue:f,modeValue:p}=t,A=[.1,.5,1],v=ie(10),$=B=>{c("update:slip-value",+B>=50?50:B)},g=B=>{c("changeMode",!B)},S=()=>{c("close"),c("update:time-value",v.value)};return(B,T)=>{const V=I("VanField"),l=I("VanPopup");return x(),O(l,{show:t.show,"onUpdate:show":T[3]||(T[3]=e=>Y(m)?m.value=e:null),class:"bg-transparent",closeable:"",round:"",onClickOverlay:T[4]||(T[4]=e=>c("close")),onClickCloseIcon:S},{default:P(()=>[a("div",Lt,[St,a("div",Bt,[(x(),k(X,null,Z(A,e=>a("div",{class:"cursor-pointer rounded-xl border border-solid border-[#29AAC7] flex-center",onClick:n=>$(String(e))},u(e)+" % ",9,Et)),64)),a("div",It,[b(V,{modelValue:t.slipValue,"onUpdate:modelValue":[T[0]||(T[0]=e=>Y(f)?f.value=e:null),$],"input-align":"center",class:"flex-1 border border-solid border-[#29AAC7] rounded-xl text-xs text-[#29AAC7] font-bold px-0",type:"number"},null,8,["modelValue"]),Vt])]),a("div",qt,[Pt,a("div",Ft,[b(V,{modelValue:v.value,"onUpdate:modelValue":T[1]||(T[1]=e=>v.value=e),class:"flex-1 border border-solid border-[#29AAC7] rounded-xl text-xs text-baseColor font-bold",type:"number","input-align":"center"},null,8,["modelValue"]),Ut])]),a("div",Dt,[Rt,a("div",{onClick:T[2]||(T[2]=ve(e=>g(t.modeValue),["stop"]))},[a("img",{src:s(Je)(`${t.modeValue?"switch-active":"switch"}.svg`),class:"w-16 h-auto"},null,8,Nt)])])])]),_:1},8,["show"])}}}),Ht=F(Ot,[["__scopeId","data-v-27a4fc01"],["__file","C:/Users/l/Desktop/followx-dapp/src/view/trade/swap/SettingPop.vue"]]),Mt={class:"flex items-center gap-8 p-2.5"},zt=["onClick"],Kt=U({props:{currentTab:{type:null,required:!0}},emits:["change"],setup(t,{emit:c}){const{t:m}=Qe(),f=ne(()=>[{id:0,name:m("liquidity.add")},{id:1,name:m("liquidity.yours")}]);return(p,A)=>(x(),k("div",Mt,[(x(!0),k(X,null,Z(s(f),v=>(x(),k("div",{key:v.id,class:fe(["cursor-pointer font-semibold rounded-lg py-1",{"text-main":v.id===t.currentTab}]),onClick:$=>c("change",v.id)},u(v.name),11,zt))),128))]))}}),jt=F(Kt,[["__file","C:/Users/l/Desktop/followx-dapp/src/view/liquidity/components/LiquidityTab.vue"]]),Jt=""+new URL("../images/add-da02e148.svg",import.meta.url).href,Wt={class:"flex-center gap-x-4 mt-4"},Gt=["onClick"],Qt=U({props:{percentList:{type:Array,required:!0},percent:{type:Number,required:!0}},emits:["change"],setup(t,{emit:c}){return(m,f)=>(x(),k("div",Wt,[(x(!0),k(X,null,Z(t.percentList,p=>(x(),k("div",{key:p,onClick:A=>c("change",p),class:fe(["py-[3px] px-[18px] rounded-xl border border-solid border-[#081e37] cursor-pointer",{"bg-config-sub text-origin":p===t.percent}])},u(p*100)+"% ",11,Gt))),128))]))}}),Yt=F(Qt,[["__file","C:/Users/l/Desktop/followx-dapp/src/view/liquidity/components/PercentBox.vue"]]),Zt={class:"flex-center-bw mb-[38px]"},Xt={class:"text-[32px] font-bold"},en=a("img",{src:nt,class:"w-[27px] h-[27px]",alt:""},null,-1),tn=[en],nn=U({emits:["open"],setup(t,{emit:c}){return(m,f)=>(x(),k("div",Zt,[a("div",Xt,[Ye(m.$slots,"default")]),a("div",{class:"cursor-pointer",onClick:f[0]||(f[0]=p=>c("open"))},tn)]))}}),on=F(nn,[["__file","C:/Users/l/Desktop/followx-dapp/src/view/liquidity/components/SettingTitle.vue"]]),sn={class:"bg-white box-shadow rounded-2xl w-[320px] lg:w-[500px] text-black px-5 py-7"},an={class:"flex-center-bw h-10 font-bold text-2xl"},ln={class:"text-[#29AAC7] mt-[15px]"},rn={class:"bg-[#E8F0F9] rounded-lg px-5 py-3 mt-[15px]"},cn={class:"flex-center-bw"},dn={class:"flex items-center gap-2.5"},un={class:"flex items-center"},pn={class:"lg:text-2xl text-sm font-bold"},mn={class:"lg:text-2xl text-sm font-bold"},wn={class:"text-right font-bold text-[#29AAC7] lg:text-lg mt-3.5"},xn={class:"flex-center-bw mt-3"},gn=a("div",{class:"text-[#646464]"},"Your share in the LP",-1),vn={class:"text-right text-[#29AAC7]"},fn={class:"flex-center-bw mt-3"},bn=a("div",{class:"text-[#646464]"},"Slippage limit",-1),yn={class:"text-right text-[#29AAC7]"},hn=a("div",{class:"w-full h-[1px] bg-[#E9E9E9] my-[15px]"},null,-1),kn={class:"border border-solid border-config-sub rounded-[10px] p-2.5"},_n=a("div",{class:"text-config-sub"},"Exchange Rate",-1),Tn={class:"text-right mt-3"},$n={class:"text-right"},An=U({props:{show:{type:Boolean,required:!0},pair:{type:null,required:!0},tokenA:{type:null,required:!0},tokenB:{type:null,required:!0},slip:{type:null,required:!0},aPercent:{type:null,required:!0},bPercent:{type:null,required:!0},shares:{type:null,required:!0},expectedLp:{type:null,required:!0}},emits:["close","confirmAdd"],setup(t,{emit:c}){const{show:m,slip:f,shares:p}=t;return(A,v)=>{const $=I("van-icon"),g=I("VanPopup");return x(),O(g,{show:t.show,"onUpdate:show":v[2]||(v[2]=S=>Y(m)?m.value=S:null),class:"bg-transparent",rounded:"",onClickOverlay:v[3]||(v[3]=S=>c("close")),onClickCloseIcon:v[4]||(v[4]=S=>c("close"))},{default:P(()=>[a("div",sn,[a("div",an,[a("div",null,u(A.$t("liquidity.confirmAdd")),1),b($,{name:"cross",onClick:v[0]||(v[0]=S=>c("close"))})]),a("div",ln,u(A.$t("liquidity.willRecieve")),1),a("div",rn,[a("div",cn,[a("div",dn,[a("div",un,[b(ee,{src:t.tokenA.logoURI,class:"-mr-2 w-6 h-6",size:24},null,8,["src"]),b(ee,{src:t.tokenB.logoURI,class:"w-6 h-6",size:24},null,8,["src"])]),a("div",pn,u(t.tokenA.symbol)+"-"+u(t.tokenB.symbol)+" LP",1)]),a("div",mn,u(t.pair?s(K)(t.expectedLp,9):""),1)]),a("div",wn,u(s(K)(t.tokenA.amount))+u(t.tokenA.symbol)+"/ "+u(s(K)(t.tokenB.amount))+u(t.tokenB.symbol),1)]),a("div",xn,[gn,a("div",vn,u(t.pair?s(K)(t.shares,9):"100")+" %",1)]),a("div",fn,[bn,a("div",yn,u(t.slip)+"%",1)]),hn,a("div",kn,[_n,a("div",Tn," 1 "+u(t.tokenA.symbol)+" = "+u(t.pair?s(K)(new s(y)(t.aPercent).div(t.bPercent).toString(),9):new s(y)(t.tokenA.amount).dividedBy(t.tokenB.amount).toString())+" "+u(t.tokenB.symbol),1),a("div",$n," 1 "+u(t.tokenB.symbol)+" = "+u(t.pair?s(K)(new s(y)(t.bPercent).div(t.aPercent).toString(),9):new s(y)(t.tokenB.amount).dividedBy(t.tokenA.amount).toString())+" "+u(t.tokenA.symbol),1)]),b(Q,{class:"mt-[15px]",loading:!1,disabled:!1,onClick:v[1]||(v[1]=S=>c("confirmAdd"))},{default:P(()=>[G(u(A.$t("liquidity.confirmAdd")),1)]),_:1})])]),_:1},8,["show"])}}}),Cn=F(An,[["__file","C:/Users/l/Desktop/followx-dapp/src/view/liquidity/components/ConfirmAddPop.vue"]]),Ln={class:"lg:px-8 px-2.5 py-5"},Sn=a("div",{class:"flex-center py-8"},[a("img",{src:Jt,class:"w-6 h-6",alt:""})],-1),Bn={key:1,class:"grid grid-cols-2 gap-1 mt-7"},En={key:0},In={key:1},Vn={key:2},qn={key:3},Pn=U({setup(t){const[c,m]=j(!1),[f,p]=j(!1),[A,v]=j(!1),{getPair:$}=Ze(),{addLiquidity:g,addLiquidityETH:S}=be(),{getCurrentAccount:B}=Xe(),T=ne(()=>+e.allowance>=+e.amount&&e.allowance>0),V=ne(()=>+n.allowance>=+n.amount&&n.allowance>0),l=[.25,.5,.75,1],e=J({...E.tokens[0],balance:0,allowance:0,decimals:18,amount:null,percent:0}),n=J({...E.tokens[1],balance:0,allowance:0,decimals:18,amount:null,percent:0}),r=J({slip:.1,time:10,min:"0",mode:!1}),o=J({settingShow:!1,btnLoading:!1,havePair:!1,aPercent:"0",bPercent:"0",aDisabled:!1,bDisabled:!1,aInputLoading:!1,bInputLoading:!1,pair:null,txInfo:{tx:null,text:""},tokenSelectIndex:0,shares:"0",totalSupply:"0",aInLpAmount:"0",bInLpAmount:"0"}),d=ne(()=>{if(o.pair){const i=new y(e.amount).multipliedBy(o.totalSupply).div(o.aInLpAmount).toFixed(),w=new y(n.amount).multipliedBy(o.totalSupply).div(o.bInLpAmount).toFixed();return Math.min(+i,+w)}else return console.log(new y(e.amount).multipliedBy(n.amount).minus(1e3).toFixed()),new y(e.amount).multipliedBy(n.amount).minus(1e3)}),C=i=>{e.amount=null,n.amount=null,o.tokenSelectIndex=i,p(!0)},_=i=>{o.btnLoading||(e.percent=i,ce(new y(e.balance).multipliedBy(i).toString()),o.havePair&&(n.percent=0))},z=i=>{r.slip=i},ye=i=>{r.time=i},he=i=>{r.mode=i},ke=()=>{o.bDisabled=!0,o.aDisabled=!1},_e=()=>{o.aDisabled=!0,o.bDisabled=!1},ce=async i=>{if(e.amount=i,console.log(o.havePair),!!o.havePair){if(i===""){e.amount=null,n.amount=null,o.bInputLoading=!1;return}o.bInputLoading=!0,n.amount=new y(e.amount).times(new y(o.bPercent)).dividedBy(new y(o.aPercent)).toFixed(),o.bInputLoading=!1}},Te=async i=>{if(n.amount=i,!!o.havePair){if(i===""){e.amount=null,n.amount=null,o.aInputLoading=!1;return}o.aInputLoading=!0,e.amount=new y(n.amount).times(new y(o.aPercent)).dividedBy(new y(o.bPercent)).toFixed(),o.aInputLoading=!1}},$e=async()=>{o.btnLoading=!0,T.value?await L(n.address).approve(E.PANCAKE_ROUTER):await L(e.address).approve(E.PANCAKE_ROUTER),await te(),o.btnLoading=!1},[Ae,de]=j(!1),Ce=async()=>{de(!0),await L(e.address).approve(E.PANCAKE_ROUTER),await te(),de(!1)},[Le,ue]=j(!1),Se=async()=>{ue(!0),await L(n.address).approve(E.PANCAKE_ROUTER),await te(),ue(!1)},Be=async()=>{if(!T.value||!V.value)return $e();m(!0)},Ee=async()=>{m(!1),o.btnLoading=!0;let i;const w=W(e.address,E.BNB),q=W(n.address,E.BNB);if(e.amountTokenMin=new y(e.amount).times(1e4-100*r.slip).div(1e4).toFixed(e.decimals||18),n.amountTokenMin=new y(n.amount).times(1e4-100*r.slip).div(1e4).toFixed(n.decimals||18),w||q){const H=w?e:n,M=w?n:e;console.log(H),console.log(M),i=await S(new y(H.amount).toFixed(H.decimals),M.address,new y(M.amount).toFixed(M.decimals),M.amountTokenMin,H.amountTokenMin,B(),r.time)}else i=await g(e.address,n.address,new y(e.amount).toFixed(e.decimals),new y(n.amount).toFixed(n.decimals),e.amountTokenMin,n.amountTokenMin,B(),r.time);if(o.btnLoading=!1,!i.success)return m(!0);await ae()},pe=async i=>{const{balanceOf:w,allowance:q,symbol:H,decimals:M}=L(i),qe=W(i,E.BNB)?await re():await w(),Pe=W(i,E.BNB)?et:await q(E.PANCAKE_ROUTER),Fe=await H(),Ue=await M();return{balance:qe,allowance:+Pe,symbol:Fe,decimals:Ue}},te=async()=>{const i=await pe(e.address),w=await pe(n.address);e.balance=i.balance,e.allowance=i.allowance,e.symbol=i.symbol,e.decimals=i.decimals,n.balance=w.balance,n.allowance=w.allowance,n.symbol=w.symbol,n.decimals=w.decimals},Ie=async()=>{const i=await $(e.address,n.address);if(o.pair=i,i===tt)return o.pair=null,!1;const w=await L(e.address).balanceOf(o.pair),q=await L(n.address).balanceOf(o.pair),H=new y(w).plus(new y(q));o.aPercent=new y(w).dividedBy(H).multipliedBy(100).toString(),o.bPercent=new y(q).dividedBy(H).multipliedBy(100).toString();const M=await L(i).balanceOf();return o.totalSupply=await L(i).totalSupply(),o.shares=new y(M).div(o.totalSupply).multipliedBy(100).toFixed(),o.aInLpAmount=String(await L(e.address).balanceOf(i)),o.bInLpAmount=String(await L(n.address).balanceOf(i)),!0},Ve=i=>{if(o.tokenSelectIndex===0)for(let w in i)e[w]=i[w];else for(let w in i)n[w]=i[w];ae()},ae=async()=>{o.btnLoading=!0,await te(),o.havePair=await Ie(),o.btnLoading=!1};return ge(()=>[e,n],async()=>{ae()},{immediate:!0}),(i,w)=>(x(),k("div",Ln,[b(on,{onOpen:w[0]||(w[0]=q=>s(v)(!0))},{default:P(()=>[G(u(i.$t("liquidity.add")),1)]),_:1}),b(xe,{token:s(e),modelValue:s(e).amount,"onUpdate:modelValue":ce,onFocus:ke,disabled:s(o).btnLoading,onHandleSelectToken:w[1]||(w[1]=q=>C(0)),loading:s(o).aInputLoading},null,8,["token","modelValue","disabled","loading"]),b(Yt,{percentList:l,onChange:_,percent:s(e).percent},null,8,["percent"]),Sn,b(xe,{token:s(n),modelValue:s(n).amount,"onUpdate:modelValue":Te,onFocus:_e,disabled:s(o).btnLoading,loading:s(o).bInputLoading,onHandleSelectToken:w[2]||(w[2]=q=>C(1))},null,8,["token","modelValue","disabled","loading"]),oe(' <PercentBox :percentList="percentList" @change="changeAmountB" :percent="tokenB.percent" /> '),+s(e).amount>+s(e).balance||s(e).balance<=0?(x(),O(Q,{key:0,class:"mt-7",disabled:""},{default:P(()=>[G(u(i.$t("errorMsg.InsufficientBalance")),1)]),_:1})):!s(T)||!s(V)?(x(),k("div",Bn,[b(Q,{loading:s(Ae),disabled:s(T),onClick:Ce},{default:P(()=>[G(" Approve "+u(s(e).symbol),1)]),_:1},8,["loading","disabled"]),b(Q,{loading:s(Le),disabled:s(V),onClick:Se},{default:P(()=>[G(" Approve "+u(s(n).symbol),1)]),_:1},8,["loading","disabled"])])):(x(),O(Q,{key:2,class:"mt-7",loading:s(o).btnLoading,onClick:Be},{default:P(()=>[+s(e).amount>+s(e).balance||s(e).balance<=0?(x(),k("span",En,u(i.$t("errorMsg.InsufficientBalance")),1)):s(T)?s(V)?(x(),k("span",qn,u(i.$t("trade.addLiquid")),1)):(x(),k("span",Vn,"Approve "+u(s(n).symbol),1)):(x(),k("span",In,"Approve "+u(s(e).symbol),1))]),_:1},8,["loading"])),b(Ct,{show:s(f),onClose:w[3]||(w[3]=q=>s(p)(!1)),onConfirmSelectToken:Ve},null,8,["show"]),b(Ht,{show:s(A),onClose:w[4]||(w[4]=q=>s(v)(!1)),timeValue:s(r).time,slipValue:s(r).slip,modeValue:s(r).mode,"onUpdate:slipValue":z,"onUpdate:timeValue":ye,onChangeMode:he},null,8,["show","timeValue","slipValue","modeValue"]),b(Cn,{pair:s(o).pair,show:s(c),onClose:w[5]||(w[5]=q=>s(m)(!1)),onConfirmAdd:Ee,removeAmount:0,tokenA:s(e),tokenB:s(n),slip:s(r).slip,aPercent:s(o).aPercent,bPercent:s(o).bPercent,shares:s(o).shares,expectedLp:s(d)},null,8,["pair","show","tokenA","tokenB","slip","aPercent","bPercent","shares","expectedLp"])]))}}),Fn=F(Pn,[["__file","C:/Users/l/Desktop/followx-dapp/src/view/liquidity/components/Add.vue"]]),Un={class:"max-w-[600px] relative"},Dn=U({setup(t){return(c,m)=>(x(),k("div",Un,[b(jt,{"current-tab":1}),b(Fn)]))}}),Rn=F(Dn,[["__file","C:/Users/l/Desktop/followx-dapp/src/view/liquidity/RemoveLiquidity.vue"]]),On=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"}));export{jt as L,Yt as P,Fn as R,xe as S,ee as T,nt as _,Ht as a,Ct as b,Jt as c,on as d,Rn as e,On as f,be as r};
