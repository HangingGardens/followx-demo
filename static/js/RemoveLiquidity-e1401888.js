import{a6 as Re,a7 as v,a8 as we,a9 as F,aa as U,ab as le,_ as H,d as D,I as Ne,D as W,z as Z,T as V,Q as E,V as de,S as B,R as xe,ac as He,i as P,o as w,c as k,b as a,ad as ie,u as n,E as K,j as Q,y as c,e as b,ae as De,A as z,H as Y,Y as Oe,af as Me,p as fe,l as ve,r as re,Z as ze,$ as Ke,w as N,g as G,n as se,F as ee,h as je,m as J,J as We,P as oe,ag as Ze,B as y,k as X,O as Je,N as Qe,W as Xe,X as Ye}from"./index-fedc722a.js";import{t as R}from"./toast-c16155cb.js";import{T as te}from"./TokenImage-ee3835b2.js";const Ge=""+new URL("../images/setting-66f9da98.svg",import.meta.url).href,et=""+new URL("../images/copy-8d712cf3.svg",import.meta.url).href,be=()=>{const o=Re();return{getAmountsOut:async(u,t)=>{try{const e=await o.getAmountsOut(v(u),t);return we(e[e.length-1]).toString()}catch{return 0}},getAmountsIn:async(u,t)=>{try{const e=await o.getAmountsIn(v(u),t);return we(e[0]).toString()}catch{return 0}},swapExactTokensForTokens:async(u,t,e,i,s)=>{console.log("amountIn:"+u),console.log("toweiamountIn:"+v(u)),console.log("amountOutMin:"+t),console.log("amountOutMin:"+v(t.toString())),console.log("path:"+e),console.log("to:"+i),console.log("deadline:"+Date.now()+1e3*60*s);try{const d=await o.swapExactTokensForTokens(v(u),v(t.toString()),e,i,Date.now()+6e4*s);return F(d)}catch(d){return R(d),U(d)}},swapExactETHForTokens:async(u,t,e,i,s)=>{try{const d=await o.swapExactETHForTokens(v(t),e,i,Date.now()+6e4*s,{value:le(u.toString())._hex});return F(d)}catch(d){return R(d),U(d)}},swapExactTokensForETH:async(u,t,e,i,s)=>{try{const d=await o.swapExactTokensForTokens(v(u),v(t),e,i,Date.now()+6e4*s);return F(d)}catch(d){return R(d),U(d)}},swapTokensForExactTokens:async(u,t,e,i,s)=>{try{const d=await o.swapTokensForExactTokens(v(u),v(t),e,i,Date.now()+6e4*s);return F(d)}catch(d){return R(d),U(d)}},swapETHForExactTokens:async(u,t,e,i,s)=>{try{const d=await o.swapExactETHForTokens(v(u),e,i,Date.now()+6e4*s,{value:le(t.toString())._hex});return F(d)}catch(d){return R(d),U(d)}},swapTokensForExactETH:async(u,t,e,i,s)=>{console.log(u);try{const d=await o.swapTokensForExactTokens(v(u),v(t),e,i,Date.now()+6e4*s);return F(d)}catch(d){return R(d),U(d)}},addLiquidity:async(u,t,e,i,s,d,L,h)=>{console.log(u,t,e,i,s,d,L,h),console.log(Date.now()+1e3*60*h);try{const j=await(await o.addLiquidity(u,t,v(e),v(i),v(s),v(d),L,Date.now()+6e4*h)).wait();return F(j)}catch(j){return console.log(j),R(j),U(j)}},addLiquidityETH:async(u,t,e,i,s,d,L)=>{try{const h=await(await o.addLiquidityETH(t,v(e),v(i),v(s),d,Date.now()+6e4*L,{value:le(u.toString())._hex})).wait();return F(h)}catch(h){return console.log(h),R(h),U(h)}},removeLiquidity:async(u,t,e,i,s,d,L)=>{console.log(u,t,e,i,s,d,L),console.log(Date.now()+1e3*60*L);try{const h=await(await o.removeLiquidity(u,t,v(e),v(i),v(s),d,Date.now()+6e4*L)).wait();return F(h)}catch(h){return R(h),U(h)}},removeLiquidityETH:async(u,t,e,i,s,d)=>{try{const L=await(await o.removeLiquidityETH(u,v(t),v(e),v(i),s,Date.now()+6e4*d)).wait();return F(L)}catch(L){return R(L),U(L)}}}};const tt=o=>(fe("data-v-2b1458e6"),o=o(),ve(),o),nt={class:"text-xs font-medium flex-center-bw"},ot={class:"font-bold text-baseColor text-base"},st=tt(()=>a("img",{src:et,class:"w-6 h-auto"},null,-1)),at=[st],lt={class:"bg-box rounded-xl py-1.5 px-2 flex-center h-[62px]"},it={key:1,class:"flex-1"},rt=D({props:{token:{type:null,required:!0},modelValue:{type:[String,Number,null],required:!0},disabled:{type:Boolean,required:!0},loading:{type:Boolean,required:!0}},emits:["update:modelValue","focus","blur","handleSelectToken"],setup(o,{emit:p}){const{token:g,modelValue:A,disabled:C,loading:T}=o;Ne(async()=>{u()},3e3,{immediate:!0}),be();const[l,I]=W(!0),$=Z({symbol:"-",balance:null,price:null}),_=Me(e=>{p("update:modelValue",e)},500,{maxWait:5e3}),f=()=>{p("focus"),p("update:modelValue",$.balance)},x=e=>{_(e)},S=async()=>{$.symbol=await B(g.address).symbol()},u=async()=>{if(V(g.address,E.BNB)){$.balance=await de();return}$.balance=(await B(g.address).balanceOf()).toString()},t=async()=>{S(),u(),$.price=await Oe(g.address)};return xe(g,(e,i)=>{I(!1),He(()=>{I(!0)}),t()},{deep:!0,immediate:!0}),(e,i)=>{const s=P("van-icon"),d=P("VanField"),L=P("van-loading");return w(),k("div",null,[a("div",nt,[a("div",{class:"px-4 py-3.5 flex-center gap-2 rounded-xl cursor-pointer",onClick:i[1]||(i[1]=ie(h=>p("handleSelectToken"),["stop"]))},[n(l)?(w(),K(te,{key:0,src:o.token.logoURI,class:"w-5 h-5",size:20},null,8,["src"])):Q("v-if",!0),a("div",ot,c(n($).symbol),1),b(s,{name:"arrow-down",alt:"",class:"w-3 h-auto text-main"}),a("div",{onClick:i[0]||(i[0]=ie(h=>n(De)(o.token.address),["stop"]))},at)]),a("div",{class:"text-[#46598B] cursor-pointer text-right",onClick:f},c(e.$t("swap.balance"))+" "+c(n(z)(n($).balance||0,8)),1)]),a("div",lt,[o.loading?(w(),k("div",it,[b(L,{size:"16"})])):(w(),K(d,{key:0,modelValue:o.modelValue,"onUpdate:modelValue":[i[2]||(i[2]=h=>Y(A)?A.value=h:null),x],class:"flex-1 text-xs font-bold bg-box rounded-xl text-baseColor",placeholder:"0",disabled:o.disabled,onFocus:i[3]||(i[3]=h=>p("focus")),onBlur:i[4]||(i[4]=h=>p("blur"))},null,8,["modelValue","disabled"])),Q(` <div class="dark:bg-[#061629] bg-box px-4 py-3.5 flex-center gap-2 rounded-xl cursor-pointer"
        @click.stop="emits('handleSelectToken')">
        <TokenImage :src="token.logoURI" class="w-5 h-5 " :size="20" v-if="logoShow" />
        <div class="font-bold text-baseColor">{{ state.symbol }}</div>
        <van-icon name="arrow-down" alt="" class="w-2.5 h-auto  text-main" />
        <div @click.stop="handleCopy(token.address)"><img src="@/assets/images/copy.svg" class="w-6 h-auto" /></div>
      </div> `)]),Q(` <div class="mt-1 text-xs font-medium flex-center-bw">
      <div></div>
      <div class="text-[#46598B] cursor-pointer text-right" @click="handelMax">{{ $t('swap.balance') }} {{
        formatBalance(state.balance || 0, 8) }}</div>
    </div> `)])}}}),ge=H(rt,[["__scopeId","data-v-2b1458e6"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/trade/swap/SwapItem.vue"]]),dt={key:1},ct=D({props:{token:{type:null,required:!0}},setup(o){const{token:p}=o,g=re(null),A=re(!1),C=async()=>{if(!p.address)return;A.value=!0;const l=V(p.address,E.BNB)?await de():await B(p.address).balanceOf();A.value=!1,g.value=l},T=()=>{C()};return ze(()=>{T()}),(l,I)=>{const $=P("VanLoading");return w(),k("div",null,[A.value?(w(),K($,{key:0,size:"14"})):(w(),k("span",dt,c(n(z)(g.value||0,4)),1))])}}}),ut=H(ct,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/components/TokenBalance.vue"]]);const pt={class:"bg-white box-shadow rounded-2xl w-[320px] lg:w-[390px] text-black px-2.5 lg:px-5 h-[550px]"},mt={class:"h-[200px] pt-[30px]"},wt={class:"flex-center-bw h-10 font-bold text-2xl"},gt={class:"h-[50px] flex items-center bg-[#EAF4FF] rounded-[15px] mt-[15px] inset-shadow px-1"},xt={class:"grid grid-cols-4 gap-1 py-[15px] border-b border-solid border-[#E9E9E9]"},ft=["onClick"],vt={class:"h-[350px] overflow-y-scroll"},bt={key:0,class:"flex-center mt-4"},yt=["onClick"],kt={class:"flex-center"},ht={class:"flex flex-col ml-2.5"},_t={class:"text-base"},At={class:"text-[#46598B]"},Tt={class:"text-right"},$t=D({props:{show:{type:Boolean,required:!0},tokenA:{type:String,required:!1},tokenB:{type:String,required:!1}},emits:["close","confirmSelectToken"],setup(o,{emit:p}){const{show:g,tokenA:A,tokenB:C}=o,T=Ke("importTokenList",[]),l=Z({tokenAddress:null,tokens:T.value.concat(E.tokens),resultToken:[],searchLoading:!1}),I=async()=>{if(l.resultToken=[],!l.tokenAddress)return;l.searchLoading=!0;const _=E.tokens.filter(x=>x.symbol.includes(l.tokenAddress));if(l.resultToken.push(..._),await B(l.tokenAddress).isErc20()){const x=E.tokens.find(S=>S.address===l.tokenAddress);if(x)l.resultToken.push(x);else{const S={name:await B(l.tokenAddress).name(),symbol:await B(l.tokenAddress).symbol(),address:l.tokenAddress};l.resultToken.push(S)}}l.searchLoading=!1},$=async(_,f)=>{if(f)return;const x={..._,logoURI:_.logoURI||""};l.tokens.findIndex(u=>u.address===_.address)===-1&&T.value.unshift(x),l.tokenAddress=null,p("confirmSelectToken",x),p("close")};return(_,f)=>{const x=P("van-icon"),S=P("van-field"),u=P("VanLoading"),t=P("VanPopup");return o.show?(w(),K(t,{key:0,show:o.show,"onUpdate:show":f[2]||(f[2]=e=>Y(g)?g.value=e:null),class:"bg-transparent",rounded:"",onClickOverlay:f[3]||(f[3]=e=>p("close")),onClickCloseIcon:f[4]||(f[4]=e=>p("close"))},{default:N(()=>[a("div",pt,[a("div",mt,[a("div",wt,[a("div",null,c(_.$t("trade.token.select")),1),b(x,{name:"cross",onClick:f[0]||(f[0]=e=>p("close"))})]),a("div",gt,[b(S,{modelValue:n(l).tokenAddress,"onUpdate:modelValue":[f[1]||(f[1]=e=>n(l).tokenAddress=e),I],"right-icon":"search",placeholder:_.$t("trade.token.selectSearch")},{"right-icon":N(()=>[b(x,{name:"search",class:"text-[#29AAC7] text-2xl font-bold",onClick:I})]),_:1},8,["modelValue","placeholder"])]),a("div",xt,[(w(!0),k(ee,null,G(n(l).tokens.slice(0,4),e=>(w(),k("div",{class:se(["bg-[#EAF4FF] rounded-[15px] h-[34px] cursor-pointer flex-center text-sm",{"opacity-60":n(V)(o.tokenA,e.address)||n(V)(o.tokenB,e.address)}]),onClick:i=>$(e,n(V)(o.tokenA,e.address)||n(V)(o.tokenB,e.address))},[b(te,{src:e.logoURI,class:"w-6 h-6 mr-1",size:24},null,8,["src"]),a("span",null,c(e.symbol),1)],10,ft))),256))])]),Q(" scroll "),a("div",vt,[n(l).searchLoading?(w(),k("div",bt,[b(u,{size:"20"})])):(w(!0),k(ee,{key:1},G(n(l).tokenAddress?n(l).resultToken:n(l).tokens,e=>(w(),k("div",{class:se(["h-[45px] flex-center-bw mt-[15px] cursor-pointer",{"opacity-60":n(V)(o.tokenA,e.address)||n(V)(o.tokenB,e.address)}]),onClick:i=>$(e,n(V)(o.tokenA,e.address)||n(V)(o.tokenB,e.address))},[a("div",kt,[b(te,{src:e.logoURI,class:"w-6 h-6",size:24},null,8,["src"]),a("div",ht,[a("div",_t,c(e.symbol),1),a("div",At,c(e.name),1)])]),a("div",Tt,[b(ut,{token:e},null,8,["token"])])],10,yt))),256))])])]),_:1},8,["show"])):Q("v-if",!0)}}}),Lt=H($t,[["__scopeId","data-v-325f02e4"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/components/SelectTokenPop.vue"]]);const St=o=>(fe("data-v-27a4fc01"),o=o(),ve(),o),Bt={class:"bg-white px-4 py-7 w-[320px] text-[#646464]"},Ct={class:"grid grid-cols-4 gap-x-2 mt-4 pb-6 text-[#29AAC7] border-b border-solid border-[#E9E9E9]"},Et=["onClick"],It={class:"flex-center"},Vt=J(" % "),qt={class:"flex-center-bw gap-5 mt-4"},Pt={class:"whitespace-nowrap"},Ft={class:"flex-center text-[#29AAC7] gap-1"},Ut=St(()=>a("div",null,"mins",-1)),Rt={class:"flex-center-bw mt-5"},Nt={class:"text-[#646464]"},Ht=["src"],Dt=D({props:{show:{type:Boolean,required:!0},slipValue:{type:[String,Number,null],required:!0},timeValue:{type:[String,Number,null],required:!0},modeValue:{type:[Boolean,null],required:!1}},emits:["close","update:slip-value","update:time-value","changeMode"],setup(o,{emit:p}){const{show:g,slipValue:A,modeValue:C}=o,T=[.1,.5,1],l=re(10),I=f=>{p("update:slip-value",+f>=50?50:f)},$=f=>{p("changeMode",!f)},_=()=>{p("close"),p("update:time-value",l.value)};return(f,x)=>{const S=P("VanField"),u=P("VanPopup");return w(),K(u,{show:o.show,"onUpdate:show":x[3]||(x[3]=t=>Y(g)?g.value=t:null),class:"bg-transparent",closeable:"",round:"",onClickOverlay:x[4]||(x[4]=t=>p("close")),onClickCloseIcon:_},{default:N(()=>[a("div",Bt,[a("div",null,c(f.$t("swap.slippageTolerance")),1),a("div",Ct,[(w(),k(ee,null,G(T,t=>a("div",{class:"cursor-pointer rounded-xl border border-solid border-[#29AAC7] flex-center",onClick:e=>I(String(t))},c(t)+" % ",9,Et)),64)),a("div",It,[b(S,{modelValue:o.slipValue,"onUpdate:modelValue":[x[0]||(x[0]=t=>Y(A)?A.value=t:null),I],"input-align":"center",class:"flex-1 border border-solid border-[#29AAC7] rounded-xl text-xs text-[#29AAC7] font-bold px-0",type:"number"},null,8,["modelValue"]),Vt])]),a("div",qt,[a("div",Pt,c(f.$t("swap.Txdeadline")),1),a("div",Ft,[b(S,{modelValue:l.value,"onUpdate:modelValue":x[1]||(x[1]=t=>l.value=t),class:"flex-1 border border-solid border-[#29AAC7] rounded-xl text-xs text-baseColor font-bold",type:"number","input-align":"center"},null,8,["modelValue"]),Ut])]),a("div",Rt,[a("div",Nt,c(f.$t("swap.expertMode")),1),a("div",{onClick:x[2]||(x[2]=ie(t=>$(o.modeValue),["stop"])),class:"cursor-pointer"},[a("img",{src:n(je)(`${o.modeValue?"switch-active":"switch"}.svg`),class:"w-16 h-auto"},null,8,Ht)])])])]),_:1},8,["show"])}}}),Ot=H(Dt,[["__scopeId","data-v-27a4fc01"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/trade/swap/SettingPop.vue"]]),Mt={class:"flex items-center gap-8 p-2.5"},zt=["onClick"],Kt=D({props:{currentTab:{type:null,required:!0}},emits:["change"],setup(o,{emit:p}){const{t:g}=We(),A=oe(()=>[{id:0,name:g("liquidity.add")},{id:1,name:g("liquidity.yours")}]);return(C,T)=>(w(),k("div",Mt,[(w(!0),k(ee,null,G(n(A),l=>(w(),k("div",{key:l.id,class:se(["cursor-pointer font-semibold rounded-lg py-1",{"text-main":l.id===o.currentTab}]),onClick:I=>p("change",l.id)},c(l.name),11,zt))),128))]))}}),jt=H(Kt,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/liquidity/components/LiquidityTab.vue"]]),Wt=""+new URL("../images/add-da02e148.svg",import.meta.url).href,Zt={class:"flex-center gap-x-4 mt-4"},Jt=["onClick"],Qt=D({props:{percentList:{type:Array,required:!0},percent:{type:Number,required:!0}},emits:["change"],setup(o,{emit:p}){return(g,A)=>(w(),k("div",Zt,[(w(!0),k(ee,null,G(o.percentList,C=>(w(),k("div",{key:C,onClick:T=>p("change",C),class:se(["py-[3px] px-[18px] rounded-xl border border-solid border-[#081e37] cursor-pointer",{"bg-config-sub text-origin":C===o.percent}])},c(C*100)+"% ",11,Jt))),128))]))}}),Xt=H(Qt,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/liquidity/components/PercentBox.vue"]]),Yt={class:"flex-center-bw mb-[38px]"},Gt={class:"text-[32px] font-bold"},en=a("img",{src:Ge,class:"w-[27px] h-[27px]",alt:""},null,-1),tn=[en],nn=D({emits:["open"],setup(o,{emit:p}){return(g,A)=>(w(),k("div",Yt,[a("div",Gt,[Ze(g.$slots,"default")]),a("div",{class:"cursor-pointer",onClick:A[0]||(A[0]=C=>p("open"))},tn)]))}}),on=H(nn,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/liquidity/components/SettingTitle.vue"]]),sn={class:"bg-white box-shadow rounded-2xl w-[320px] lg:w-[500px] text-black px-5 py-7"},an={class:"flex-center-bw h-10 font-bold text-2xl"},ln={class:"text-[#29AAC7] mt-[15px]"},rn={class:"bg-[#E8F0F9] rounded-lg px-5 py-3 mt-[15px]"},dn={class:"flex-center-bw"},cn={class:"flex items-center gap-2.5"},un={class:"flex items-center"},pn={class:"lg:text-2xl text-sm font-bold"},mn={class:"lg:text-2xl text-sm font-bold"},wn={class:"text-right font-bold text-[#29AAC7] lg:text-lg mt-3.5"},gn={class:"flex-center-bw mt-3"},xn={class:"text-[#646464]"},fn={class:"text-right text-[#29AAC7]"},vn={class:"flex-center-bw mt-3"},bn={class:"text-[#646464]"},yn={class:"text-right text-[#29AAC7]"},kn=a("div",{class:"w-full h-[1px] bg-[#E9E9E9] my-[15px]"},null,-1),hn={class:"border border-solid border-config-sub rounded-[10px] p-2.5"},_n={class:"text-config-sub"},An={class:"text-right mt-3"},Tn={class:"text-right"},$n=D({props:{show:{type:Boolean,required:!0},pair:{type:null,required:!0},tokenA:{type:null,required:!0},tokenB:{type:null,required:!0},slip:{type:null,required:!0},aPercent:{type:null,required:!0},bPercent:{type:null,required:!0},shares:{type:null,required:!0},expectedLp:{type:null,required:!0}},emits:["close","confirmAdd"],setup(o,{emit:p}){const{show:g,slip:A,shares:C}=o;return(T,l)=>{const I=P("van-icon"),$=P("VanPopup");return w(),K($,{show:o.show,"onUpdate:show":l[2]||(l[2]=_=>Y(g)?g.value=_:null),class:"bg-transparent",rounded:"",onClickOverlay:l[3]||(l[3]=_=>p("close")),onClickCloseIcon:l[4]||(l[4]=_=>p("close"))},{default:N(()=>[a("div",sn,[a("div",an,[a("div",null,c(T.$t("liquidity.confirmAdd")),1),b(I,{name:"cross",onClick:l[0]||(l[0]=_=>p("close"))})]),a("div",ln,c(T.$t("liquidity.willRecieve")),1),a("div",rn,[a("div",dn,[a("div",cn,[a("div",un,[b(te,{src:o.tokenA.logoURI,class:"-mr-2 w-6 h-6",size:24},null,8,["src"]),b(te,{src:o.tokenB.logoURI,class:"w-6 h-6",size:24},null,8,["src"])]),a("div",pn,c(o.tokenA.symbol)+"-"+c(o.tokenB.symbol)+" LP",1)]),a("div",mn,c(o.pair?n(z)(o.expectedLp,9):""),1)]),a("div",wn,c(n(z)(o.tokenA.amount))+c(o.tokenA.symbol)+"/ "+c(n(z)(o.tokenB.amount))+c(o.tokenB.symbol),1)]),a("div",gn,[a("div",xn,c(T.$t("liquidity.shareInLp")),1),a("div",fn,c(o.pair?n(z)(o.shares,9):"100")+" %",1)]),a("div",vn,[a("div",bn,c(T.$t("trade.token.slippageLimit")),1),a("div",yn,c(o.slip)+"%",1)]),kn,a("div",hn,[a("div",_n,c(T.$t("trade.token.rate")),1),a("div",An," 1 "+c(o.tokenA.symbol)+" = "+c(o.pair?n(z)(new n(y)(o.aPercent).div(o.bPercent).toString(),9):new n(y)(o.tokenA.amount).dividedBy(o.tokenB.amount).toString())+" "+c(o.tokenB.symbol),1),a("div",Tn," 1 "+c(o.tokenB.symbol)+" = "+c(o.pair?n(z)(new n(y)(o.bPercent).div(o.aPercent).toString(),9):new n(y)(o.tokenB.amount).dividedBy(o.tokenA.amount).toString())+" "+c(o.tokenA.symbol),1)]),b(X,{class:"mt-[15px]",loading:!1,disabled:!1,onClick:l[1]||(l[1]=_=>p("confirmAdd"))},{default:N(()=>[J(c(T.$t("liquidity.confirmAdd")),1)]),_:1})])]),_:1},8,["show"])}}}),Ln=H($n,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/liquidity/components/ConfirmAddPop.vue"]]),Sn={class:"lg:px-8 px-2.5 py-5"},Bn=a("div",{class:"flex-center py-8"},[a("img",{src:Wt,class:"w-6 h-6",alt:""})],-1),Cn={key:1,class:"grid grid-cols-2 gap-1 mt-7"},En={key:0},In={key:1},Vn={key:2},qn={key:3},Pn=D({setup(o){const[p,g]=W(!1),[A,C]=W(!1),[T,l]=W(!1),{getPair:I}=Je(),{addLiquidity:$,addLiquidityETH:_}=be(),{getCurrentAccount:f}=Qe(),x=oe(()=>t.allowance>=+t.amount&&t.allowance>0),S=oe(()=>e.allowance>=+e.amount&&e.allowance>0),u=[.25,.5,.75,1],t=Z({...E.tokens[0],balance:0,allowance:0,decimals:18,amount:null,percent:0}),e=Z({...E.tokens[1],balance:0,allowance:0,decimals:18,amount:null,percent:0}),i=Z({slip:.1,time:10,min:"0",mode:!1}),s=Z({settingShow:!1,btnLoading:!1,havePair:!1,aPercent:"0",bPercent:"0",aDisabled:!1,bDisabled:!1,aInputLoading:!1,bInputLoading:!1,pair:null,txInfo:{tx:null,text:""},tokenSelectIndex:0,shares:"0",totalSupply:"0",aInLpAmount:"0",bInLpAmount:"0"}),d=oe(()=>{if(s.pair){const r=new y(t.amount).multipliedBy(s.totalSupply).div(s.aInLpAmount).toFixed(),m=new y(e.amount).multipliedBy(s.totalSupply).div(s.bInLpAmount).toFixed();return Math.min(+r,+m)}else return new y(t.amount).multipliedBy(e.amount).minus(1e3)}),L=r=>{t.amount=null,e.amount=null,s.tokenSelectIndex=r,C(!0)},h=r=>{s.btnLoading||(t.percent=r,ce(new y(t.balance).multipliedBy(r).toString()),s.havePair&&(e.percent=0))},j=r=>{i.slip=r},ye=r=>{i.time=r},ke=r=>{i.mode=r},he=()=>{s.bDisabled=!0,s.aDisabled=!1},_e=()=>{s.aDisabled=!0,s.bDisabled=!1},ce=async r=>{if(t.amount=r,!!s.havePair){if(r===""){t.amount=null,e.amount=null,s.bInputLoading=!1;return}s.bInputLoading=!0,e.amount=new y(t.amount).times(new y(s.bPercent)).dividedBy(new y(s.aPercent)).toFixed(),s.bInputLoading=!1}},Ae=async r=>{if(e.amount=r,!!s.havePair){if(r===""){t.amount=null,e.amount=null,s.aInputLoading=!1;return}s.aInputLoading=!0,t.amount=new y(e.amount).times(new y(s.aPercent)).dividedBy(new y(s.bPercent)).toFixed(),s.aInputLoading=!1}},Te=async()=>{s.btnLoading=!0,x.value?await B(e.address).approve(E.PANCAKE_ROUTER):await B(t.address).approve(E.PANCAKE_ROUTER),await ne(),s.btnLoading=!1},[$e,ue]=W(!1),Le=async()=>{ue(!0),await B(t.address).approve(E.PANCAKE_ROUTER),await ne(),ue(!1)},[Se,pe]=W(!1),Be=async()=>{pe(!0),await B(e.address).approve(E.PANCAKE_ROUTER),await ne(),pe(!1)},Ce=async()=>{if(!x.value||!S.value)return Te();g(!0)},Ee=async()=>{g(!1),s.btnLoading=!0;let r;const m=V(t.address,E.BNB),q=V(e.address,E.BNB);if(t.amountTokenMin=new y(t.amount).times(1e4-100*i.slip).div(1e4).toFixed(t.decimals||18),e.amountTokenMin=new y(e.amount).times(1e4-100*i.slip).div(1e4).toFixed(e.decimals||18),m||q){const O=m?t:e,M=m?e:t;console.log(O),console.log(M),r=await _(new y(O.amount).toFixed(O.decimals),M.address,new y(M.amount).toFixed(M.decimals),M.amountTokenMin,O.amountTokenMin,f(),i.time)}else r=await $(t.address,e.address,new y(t.amount).toFixed(t.decimals),new y(e.amount).toFixed(e.decimals),t.amountTokenMin,e.amountTokenMin,f(),i.time);if(s.btnLoading=!1,!r.success)return g(!0);await ae()},me=async r=>{const{balanceOf:m,allowance:q,symbol:O,decimals:M}=B(r),qe=V(r,E.BNB)?await de():await m(),Pe=V(r,E.BNB)?Xe:await q(E.PANCAKE_ROUTER),Fe=await O(),Ue=await M();return{balance:qe,allowance:+Pe,symbol:Fe,decimals:Ue}},ne=async()=>{const r=await me(t.address),m=await me(e.address);t.balance=r.balance,t.allowance=r.allowance,t.symbol=r.symbol,t.decimals=r.decimals,e.balance=m.balance,e.allowance=m.allowance,e.symbol=m.symbol,e.decimals=m.decimals},Ie=async()=>{const r=await I(t.address,e.address);if(s.pair=r,r===Ye)return s.pair=null,!1;const m=await B(t.address).balanceOf(s.pair),q=await B(e.address).balanceOf(s.pair),O=new y(m).plus(new y(q));s.aPercent=new y(m).dividedBy(O).multipliedBy(100).toString(),s.bPercent=new y(q).dividedBy(O).multipliedBy(100).toString();const M=await B(r).balanceOf();return s.totalSupply=await B(r).totalSupply(),s.shares=new y(M).div(s.totalSupply).multipliedBy(100).toFixed(),s.aInLpAmount=String(await B(t.address).balanceOf(r)),s.bInLpAmount=String(await B(e.address).balanceOf(r)),!0},Ve=r=>{if(s.tokenSelectIndex===0)for(let m in r)t[m]=r[m];else for(let m in r)e[m]=r[m];ae()},ae=async()=>{s.btnLoading=!0,await ne(),s.havePair=await Ie(),s.btnLoading=!1};return xe(()=>[t,e],async()=>{ae()},{immediate:!0}),(r,m)=>(w(),k("div",Sn,[b(on,{onOpen:m[0]||(m[0]=q=>n(l)(!0))},{default:N(()=>[J(c(r.$t("liquidity.add")),1)]),_:1}),b(ge,{token:n(t),modelValue:n(t).amount,"onUpdate:modelValue":ce,onFocus:he,disabled:n(s).btnLoading,onHandleSelectToken:m[1]||(m[1]=q=>L(0)),loading:n(s).aInputLoading},null,8,["token","modelValue","disabled","loading"]),b(Xt,{percentList:u,onChange:h,percent:n(t).percent},null,8,["percent"]),Bn,b(ge,{token:n(e),modelValue:n(e).amount,"onUpdate:modelValue":Ae,onFocus:_e,disabled:n(s).btnLoading,loading:n(s).bInputLoading,onHandleSelectToken:m[2]||(m[2]=q=>L(1))},null,8,["token","modelValue","disabled","loading"]),Q(' <PercentBox :percentList="percentList" @change="changeAmountB" :percent="tokenB.percent" /> '),+n(t).amount>+n(t).balance||n(t).balance<=0||+n(e).amount>+n(e).balance||+n(e).balance<=0?(w(),K(X,{key:0,class:"mt-7",disabled:""},{default:N(()=>[J(c(r.$t("errorMsg.InsufficientBalance")),1)]),_:1})):!n(x)||!n(S)?(w(),k("div",Cn,[b(X,{loading:n($e),disabled:n(x),onClick:Le},{default:N(()=>[J(" Approve "+c(n(t).symbol),1)]),_:1},8,["loading","disabled"]),b(X,{loading:n(Se),disabled:n(S),onClick:Be},{default:N(()=>[J(" Approve "+c(n(e).symbol),1)]),_:1},8,["loading","disabled"])])):(w(),K(X,{key:2,class:"mt-7",loading:n(s).btnLoading,onClick:Ce,disabled:+n(t).amount<=0||+n(e).amount<=0},{default:N(()=>[+n(t).amount>+n(t).balance||n(t).balance<=0?(w(),k("span",En,c(r.$t("errorMsg.InsufficientBalance")),1)):n(x)?n(S)?(w(),k("span",qn,c(r.$t("trade.addLiquid")),1)):(w(),k("span",Vn,"Approve "+c(n(e).symbol),1)):(w(),k("span",In,"Approve "+c(n(t).symbol),1))]),_:1},8,["loading","disabled"])),b(Lt,{tokenA:n(t).address,tokenB:n(e).address,show:n(A),onClose:m[3]||(m[3]=q=>n(C)(!1)),onConfirmSelectToken:Ve},null,8,["tokenA","tokenB","show"]),b(Ot,{show:n(T),onClose:m[4]||(m[4]=q=>n(l)(!1)),timeValue:n(i).time,slipValue:n(i).slip,modeValue:n(i).mode,"onUpdate:slipValue":j,"onUpdate:timeValue":ye,onChangeMode:ke},null,8,["show","timeValue","slipValue","modeValue"]),b(Ln,{pair:n(s).pair,show:n(p),onClose:m[5]||(m[5]=q=>n(g)(!1)),onConfirmAdd:Ee,removeAmount:0,tokenA:n(t),tokenB:n(e),slip:n(i).slip,aPercent:n(s).aPercent,bPercent:n(s).bPercent,shares:n(s).shares,expectedLp:n(d)},null,8,["pair","show","tokenA","tokenB","slip","aPercent","bPercent","shares","expectedLp"])]))}}),Fn=H(Pn,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/liquidity/components/Add.vue"]]),Un={class:"max-w-[600px] relative"},Rn=D({setup(o){return(p,g)=>(w(),k("div",Un,[b(jt,{"current-tab":1}),b(Fn)]))}}),Nn=H(Rn,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/liquidity/RemoveLiquidity.vue"]]),Mn=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"}));export{jt as L,Xt as P,Fn as R,ge as S,Ge as _,Ot as a,Lt as b,Wt as c,on as d,Nn as e,Mn as f,be as r};
