import{_ as O,d as j,ak as le,r as de,R as oe,Z as ne,o as a,E as se,w as M,b as e,y as s,u as o,c as i,m as W,ap as ce,ag as re,j as y,a6 as A,am as g,aq as z,C as ue,p as ke,l as fe,q as Ie,P as S,h as u,F as ee,g as te,ar as ve,z as ae,i as ie,e as w,H as me,k as J,a8 as ye,L as ge,S as G,Q as R}from"./index-7eb7ee78.js";import{S as q,M as k,f as he,w as _e,T as be,I as pe,b as $e,c as Te}from"./ido-f0810dca.js";import{_ as xe,T as we}from"./TokenImage-2150101a.js";import"./toast-2da6f72a.js";const Se=n=>(ke("data-v-23786d9e"),n=n(),fe(),n),Ce={class:"px-5 py-7"},Ee={class:"text-lg font-semibold pb-2.5"},Le={class:"item"},De={class:"key"},Be=Se(()=>e("img",{src:xe,class:"w-6 h-auto"},null,-1)),Ae={key:1},Ve={class:"item"},We={class:"key"},Fe={class:"text-lg font-semibold py-4 pb-2.5"},He={class:"item"},Pe={class:"key"},Ue={key:0},qe={key:1},Oe={class:"item"},je={class:"key"},Ne={key:1,class:"item"},Re={class:"key"},Me={class:"item"},Xe={class:"key"},Ge={key:0,class:"ml-0.5"},ze={key:2,class:"item"},Je={class:"key"},Qe={class:"text-lg font-semibold py-4 pb-2.5"},Ze={class:"item"},Ke={class:"key"},Ye={key:0,class:"ml-0.5"},et={class:"item"},tt={class:"key"},ot=W(" / "),nt={class:"item"},st={class:"key"},at={key:0},it={key:1},lt=j({props:{tokenInfo:{type:null,required:!0}},setup(n){const l=n,{currentLocale:v}=le(),T=de({title:"",address:"",symbol:"",logoURI:"",introduce:"",twitter:"",telegram:"",medium:"",discord:"",website:"",whitepaper:"",rise:""}),I=async()=>{var d,f,x;if((d=l.tokenInfo)!=null&&d.tokenId)try{T.value=await fetch(`${((f=l.tokenInfo)==null?void 0:f.type)===0?"Swap":"Waitlist"}/${(x=l.tokenInfo)==null?void 0:x.tokenId}-${v.value}.json`).then($=>$.json())}catch{}};return oe(v,async()=>{await I()}),ne(()=>{I()}),(d,f)=>(a(),se(ue,null,{default:M(()=>{var x,$,D,L,c,t,_,b,m,p,h,C,B,V,r,E,N,F,H,P,U,X,Q,Z,K;return[e("div",Ce,[e("div",Ee,s(d.$t("iod.Token TokenInformation")),1),e("div",Le,[e("div",De,s(d.$t("ido.Contract Address")),1),((x=n.tokenInfo)==null?void 0:x.status)===o(q).CLOSED?(a(),i("div",{key:0,class:"flex items-center",onClick:f[0]||(f[0]=po=>{var Y;return o(re)((Y=n.tokenInfo)==null?void 0:Y.donationToken)})},[W(s(o(ce)(($=n.tokenInfo)==null?void 0:$.donationToken,"...",6,4)||"-")+" ",1),Be])):(a(),i("div",Ae,"**********"))]),e("div",Ve,[e("div",We,s(d.$t("ido.Token")),1),e("div",null,s(((D=n.tokenInfo)==null?void 0:D.donationTokenSymbol)||T.value.symbol||"-"),1)]),y(` <div class="item">
        <div class="key">{{ $t('ido.LaunchpadTotal') }}</div>
        <div>{{ getBalanceNumber(tokenInfo?.totalSupply.toString()) || 0 }}</div>
      </div> `),e("div",Fe,s(d.$t("ido.Auction Information")),1),e("div",He,[e("div",Pe,s(d.$t("ido.Auction Type")),1),e("div",null,[((L=n.tokenInfo)==null?void 0:L.type)===o(k).WHITELIST?(a(),i("span",Ue,"WhiteList Auction")):(a(),i("span",qe,"Fixed-Swap Auction"))])]),e("div",Oe,[e("div",je,s(d.$t("ido.Participant")),1),e("div",null,s(((c=n.tokenInfo)==null?void 0:c.whitelistFlag)===!0?"WhiteList":"Public"),1)]),y("v-if",!0),((t=n.tokenInfo)==null?void 0:t.type)===o(k).WHITELIST?(a(),i("div",Ne,[e("div",Re,s(d.$t("ido.Allocation per Wallet")),1),e("div",null,s(o(A)(+o(g)(((b=(_=n.tokenInfo)==null?void 0:_.maxTokensPerBuyer)==null?void 0:b.toString())||"0"))),1)])):y("v-if",!0),e("div",Me,[e("div",Xe,s(d.$t("ido.Total Available Amount")),1),e("div",null,[W(s(o(A)(o(g)(((p=(m=n.tokenInfo)==null?void 0:m.targetAmount)==null?void 0:p.toString())||"0")))+" ",1),((h=n.tokenInfo)==null?void 0:h.type)!==o(k).WHITELIST?(a(),i("span",Ge,s(((C=n.tokenInfo)==null?void 0:C.paymentTokenSymbol)||"-"),1)):y("v-if",!0)])]),((B=n.tokenInfo)==null?void 0:B.type)===o(k).WHITELIST?(a(),i("div",ze,[e("div",Je,s(d.$t("ido.PricePerUni")),1),e("div",null,s(o(A)(+o(g)(((r=(V=n.tokenInfo)==null?void 0:V.tokenPrice)==null?void 0:r.toString())||"0"))+" "+n.tokenInfo.paymentTokenSymbol),1)])):y("v-if",!0),e("div",Qe,s(d.$t("iod.join TokenInformation")),1),e("div",Ze,[e("div",Ke,s(d.$t("ido.min")),1),e("div",null,[W(s(o(A)(+o(g)(((N=(E=n.tokenInfo)==null?void 0:E.minimumPurchase)==null?void 0:N.toString())||"0")))+" ",1),((F=n.tokenInfo)==null?void 0:F.type)!==o(k).WHITELIST?(a(),i("span",Ye,s(((H=n.tokenInfo)==null?void 0:H.paymentTokenSymbol)||"-"),1)):y("v-if",!0)])]),e("div",et,[e("div",tt,s(d.$t("ido.my")),1),e("div",null,[e("span",null,s(o(A)(+o(g)(((P=n.tokenInfo)==null?void 0:P.myDonatedAmount.toString())||"0"))),1),ot,e("span",null,s(o(A)(+o(g)(((U=n.tokenInfo)==null?void 0:U.type)===o(k).WHITELIST?((X=n.tokenInfo)==null?void 0:X.maxTokensPerBuyer.toString())||"0":((Q=n.tokenInfo)==null?void 0:Q.targetAmount.toString())||"0"))),1)])]),y(` <div class="item" v-if="tokenInfo?.status === STATUS.CLOSED">
        <div class="key">{{ $t('ido.totalGet') }}</div>
        <div>
          <span>{{ tokenInfo?.totalGet }}{{ tokenInfo?.donationTokenSymbol || jsonInfo.symbol || '-' }}</span>
        </div>
      </div> `),e("div",nt,[e("div",st,s(d.$t("ido.deadline")),1),e("div",null,[(Z=n.tokenInfo)!=null&&Z.deadline?(a(),i("span",at,s(o(z)((K=n.tokenInfo)==null?void 0:K.deadline)),1)):(a(),i("span",it,"-"))])])])]}),_:1}))}}),dt=O(lt,[["__scopeId","data-v-23786d9e"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/idoDetail/components/TokenInformation.vue"]]),ct={class:"px-5 mt-4 bg-box py-7 rounded-xl"},rt={class:"text-lg font-semibold pb-2.5"},ut={class:"grid grid-cols-3 gap-2 mt-4 g:gap-5"},kt=["src"],ft={class:"mt-5"},It={class:"text-lg font-semibold pb-2.5"},vt={class:"grid grid-cols-3 gap-2 mt-4 lg:gap-5"},mt=["src"],yt=j({setup(n){const l=Ie("isDark");console.log(l);const v=S(()=>[l.value?u("ido/paladin-dark.svg"):u("ido/paladin.svg"),l.value?u("ido/Binance-dark.svg"):u("ido/Binance.svg"),l.value?u("ido/certik-dark.svg"):u("ido/certik.svg"),l.value?u("ido/CoinGecko-dark.svg"):u("ido/CoinGecko.svg"),l.value?u("ido/Coinmarketcap-dark.svg"):u("ido/Coinmarketcap.svg")]),T=S(()=>[l.value?u("ido/dappradar.svg"):u("ido/dappradar-dark.svg"),l.value?u("ido/apeswap.svg"):u("ido/apeswap-dark.svg"),l.value?u("ido/seinetwork.svg"):u("ido/seinetwork-dark.svg"),l.value?u("ido/peckshield.svg"):u("ido/peckshield-dark.svg"),l.value?u("ido/rango.svg"):u("ido/rango-dark.svg")]);return(I,d)=>(a(),i("div",ct,[e("div",null,[e("div",rt,s(I.$t("ido.Investors")),1),e("div",ut,[(a(!0),i(ee,null,te(o(v),f=>(a(),i("div",{key:f},[e("img",{src:f,class:"h-6 lg:h-16",alt:""},null,8,kt)]))),128))])]),e("div",ft,[e("div",It,s(I.$t("ido.partner")),1),e("div",vt,[(a(!0),i(ee,null,te(o(T),f=>(a(),i("div",{key:f},[e("img",{src:f,class:"h-6 lg:h-16",alt:""},null,8,mt)]))),128))])])]))}}),gt=O(yt,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/idoDetail/components/Investors.vue"]]);const ht={class:"mt-8"},_t={class:"text-lg font-semibold pb-2.5"},bt={class:"flex-center-bw"},pt={class:"key"},$t={class:"gap-2 flex-center"},Tt={class:"font-bold text-[24px]"},xt={class:"text-main"},wt={key:0,class:"flex-center-bw"},St={class:"key"},Ct={class:"gap-2 flex-center"},Et={class:"font-bold text-[24px]"},Lt={class:"text-main"},Dt={key:1,class:"flex-center-bw"},Bt={class:"key"},At={class:"gap-2 flex-center"},Vt={class:"font-bold text-[24px]"},Wt={class:"text-main"},Ft={class:"flex-center-bw"},Ht={class:"key"},Pt={class:"gap-2 flex-center"},Ut={class:"font-bold text-[24px]"},qt={class:"text-main"},Ot={class:"flex-center-bw"},jt={class:"key"},Nt={class:"gap-2 flex-center"},Rt={class:"font-bold text-[24px]"},Mt={class:"text-main"},Xt=j({props:{tokenInfo:{type:null,required:!0}},setup(n){return(l,v)=>{var T,I,d,f,x,$,D,L,c,t,_,b,m,p,h,C;return a(),i("div",ht,[e("div",_t,s(l.$t("ido.Claim")),1),e("div",bt,[e("div",pt,s(l.$t("ido.purchased")),1),e("div",$t,[e("span",Tt,s(((T=n.tokenInfo)==null?void 0:T.type)===o(k).WHITELIST?o(A)(+o(g)((((I=n.tokenInfo)==null?void 0:I.myDonatedAmount)||0).toString())*+o(g)((((d=n.tokenInfo)==null?void 0:d.tokenPrice)||0).toString())):o(A)(+o(g)(((x=(f=n.tokenInfo)==null?void 0:f.myDonatedAmount)==null?void 0:x.toString())||"0"))),1),e("span",xt,s((($=n.tokenInfo)==null?void 0:$.paymentTokenSymbol)||"-"),1)])]),((D=n.tokenInfo)==null?void 0:D.type)===o(k).FIXED?(a(),i("div",wt,[e("div",St,s(l.$t("ido.success")),1),e("div",Ct,[e("span",Et,s((L=n.tokenInfo)==null?void 0:L.totalSuccess),1),e("span",Lt,s(((c=n.tokenInfo)==null?void 0:c.paymentTokenSymbol)||"-"),1)])])):y("v-if",!0),((t=n.tokenInfo)==null?void 0:t.type)===o(k).FIXED?(a(),i("div",Dt,[e("div",Bt,s(l.$t("ido.fail")),1),e("div",At,[e("span",Vt,s((_=n.tokenInfo)==null?void 0:_.totalFail),1),e("span",Wt,s(((b=n.tokenInfo)==null?void 0:b.paymentTokenSymbol)||"-"),1)])])):y("v-if",!0),e("div",Ft,[e("div",Ht,s(l.$t("ido.buySuccess")),1),e("div",Pt,[e("span",Ut,s((m=n.tokenInfo)==null?void 0:m.totalGet),1),e("span",qt,s(((p=n.tokenInfo)==null?void 0:p.donationTokenSymbol)||"-"),1)])]),e("div",Ot,[e("div",jt,s(l.$t("ido.Unextract")),1),e("div",Nt,[e("span",Rt,s((h=n.tokenInfo)==null?void 0:h.unExtracted),1),e("span",Mt,s(((C=n.tokenInfo)==null?void 0:C.donationTokenSymbol)||"-"),1)])])])}}}),Gt=O(Xt,[["__scopeId","data-v-2096c424"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/idoDetail/components/Claim.vue"]]);const zt={class:"mt-8"},Jt={class:"flex-center-bw"},Qt={class:"text-lg font-semibold"},Zt={class:"mt-5 text-sm text-right"},Kt={key:0,class:"flex justify-end"},Yt={class:"mt-2 public"},eo={class:"bg-box rounded-xl py-1.5 px-2 flex-center mt-5"},to={class:"dark:bg-[#061629] bg-box px-4 py-3.5 flex-center gap-2 rounded-xl cursor-pointer"},oo={class:"font-bold text-baseColor"},no={class:"text-right text-[#46598B] mt-1"},so={key:1,class:"flex-center-bw mt-2.5"},ao={class:"text-[#ABB5CF]"},io={key:2,class:"flex-center-bw mt-2.5"},lo={class:"text-[#ABB5CF]"},co={key:3},ro={key:0},uo={key:1},ko=j({props:{tokenInfo:{type:null,required:!0},modelValue:{type:[String,Number,null],required:!0},loading:{type:Boolean,required:!0},isAuth:{type:Boolean,required:!0},balance:{type:String,required:!0}},emits:["update:modelValue","handle","init"],setup(n,{emit:l}){const v=n,T=S(()=>{var c,t,_,b,m,p,h,C,B,V,r,E;return v.tokenInfo.type===k.WHITELIST?g(((t=(c=v.tokenInfo)==null?void 0:c.maxTokensPerBuyer)==null?void 0:t.toString())||((b=(_=v.tokenInfo)==null?void 0:_.totalSupply)==null?void 0:b.toString()))-g((p=(m=v.tokenInfo)==null?void 0:m.myDonatedAmount)==null?void 0:p.toString()):g(((C=(h=v.tokenInfo)==null?void 0:h.targetAmount)==null?void 0:C.toString())||((V=(B=v.tokenInfo)==null?void 0:B.totalSupply)==null?void 0:V.toString()))-g((E=(r=v.tokenInfo)==null?void 0:r.donatedAmount)==null?void 0:E.toString())}),I=ve({time:+v.tokenInfo.deadline.toString()*1e3-new Date().getTime()});I.start();const d=S(()=>I.current.value.total),f=S(()=>("0"+I.current.value.days).slice(-2)),x=S(()=>("0"+I.current.value.hours).slice(-2)),$=S(()=>("0"+I.current.value.minutes).slice(-2)),D=S(()=>("0"+I.current.value.seconds).slice(-2));oe(d,()=>{d.value===0&&l("init")}),ae({balance:"0"});const L=c=>{l("update:modelValue",c)};return(c,t)=>{var b,m,p;const _=ie("VanField");return a(),i("div",zt,[e("div",Jt,[e("div",Qt,s(c.$t("ido.Buy"))+" "+s(n.tokenInfo.donationTokenSymbol),1),e("div",Zt,[W(s(c.$t("ido.Available"))+" : ",1),e("span",null,s(o(T)<=0?0:o(T)),1),y(" <span>{{ tokenInfo.donationTokenSymbol }}</span> ")])]),o(d)>0?(a(),i("div",Kt,[e("div",Yt,s(c.$t("ido.ClosedIn"))+" "+s(o(f))+"d : "+s(o(x))+"h : "+s(o($))+"m : "+s(o(D))+"s ",1)])):y("v-if",!0),e("div",eo,[w(_,{modelValue:n.modelValue,"onUpdate:modelValue":[t[0]||(t[0]=h=>me(modelValue)?modelValue.value=h:null),L],class:"flex-1 text-xs font-bold bg-box rounded-xl text-baseColor",placeholder:"0"},null,8,["modelValue"]),e("div",to,[w(we,{src:o(u)(`tokens/${(b=n.tokenInfo)==null?void 0:b.paymentTokenSymbol}.svg`),class:"w-5 h-5",size:20},null,8,["src"]),e("div",oo,s(n.tokenInfo.paymentTokenSymbol),1)])]),e("div",no,s(c.$t("swap.balance"))+" : "+s(n.balance||"-")+" "+s(n.tokenInfo.paymentTokenSymbol),1),n.tokenInfo.type===o(k).WHITELIST?(a(),i("div",so,[e("div",ao,s(c.$t("ido.PricePerUni")),1),e("div",null,s(o(g)((m=n.tokenInfo)==null?void 0:m.tokenPrice.toString())+" "+n.tokenInfo.paymentTokenSymbol),1)])):y("v-if",!0),n.tokenInfo.type===o(k).WHITELIST?(a(),i("div",io,[e("div",lo,s(c.$t("ido.total")),1),e("div",null,s(+n.modelValue*o(g)((p=n.tokenInfo)==null?void 0:p.tokenPrice.toString())+" "+n.tokenInfo.paymentTokenSymbol),1)])):y("v-if",!0),n.tokenInfo.type===o(k).WHITELIST&&n.tokenInfo.status===o(q).CLOSED?(a(),i("div",co,[w(J,{class:"mt-8",loading:n.loading,onClick:t[1]||(t[1]=h=>l("handle")),disabled:!n.tokenInfo.inRule},{default:M(()=>[e("span",null,s(c.$t("ido.Claim")),1)]),_:1},8,["loading","disabled"])])):(a(),se(J,{key:4,class:"mt-8",loading:n.loading,onClick:t[2]||(t[2]=h=>l("handle")),disabled:n.tokenInfo.type===o(k).WHITELIST&&!n.tokenInfo.inRule},{default:M(()=>[n.isAuth?(a(),i("span",ro,s(c.$t("ido.Buy")),1)):(a(),i("span",uo,s(c.$t("ido.auth")),1))]),_:1},8,["loading","disabled"]))])}}}),fo=O(ko,[["__scopeId","data-v-0359bdb8"],["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/idoDetail/components/Buy.vue"]]),Io={class:"px-5 lg:w-[800px] mx-auto"},vo={key:0,class:"mt-6"},mo={key:1},yo={class:"mt-2 text-sm text-center text-main"},go={key:0},ho={key:1},_o={key:2},bo=j({setup(n){const{donationTokens:l,donate:v,extractInfos:T,withdraw:I}=he(),{tokens:d,buyTokens:f,trades:x,extract:$,getByFlag:D}=_e(),L=ye(),c=ge(),t=ae({status:q.PUBLIC,buyValue:null,type:0,tokenId:null,tokenInfo:null,btnLoading:!1,allowance:0,balance:"0"});t.type=+c.query.type,t.tokenId=c.query.tokenId;const _=S(()=>t.allowance>0&&t.allowance>=+t.buyValue);S(()=>{var r;if(t.tokenInfo.extractTimes.toString()==="0")return!0;if(t.type===k.WHITELIST)return(r=t.tokenInfo)==null?void 0:r.openExtractionFlag});const b=S(()=>{const r=+t.tokenInfo.extractionTime.toString();+t.tokenInfo.extractionTimes.toString(),+t.tokenInfo.extractTimes.toString();const E=+t.tokenInfo.extractIntervalSeconds.toString();return r===0?z(t.tokenInfo.deadline):z(r+E)}),m=async()=>{if(t.type===k.FIXED){const r=await l(t.tokenId);t.tokenInfo=await $e(r.result,t.tokenId)}else{const r=await d(t.tokenId);console.log(r),t.tokenInfo=await Te(r.result,t.tokenId)}await B()},p=r=>{t.buyValue=r},h=async()=>{t.btnLoading=!0,_.value?(t.type===0?await v(t.tokenId,t.buyValue):await f(t.buyValue,t.tokenId),await m(),console.log(t.tokenInfo)):await V(),t.btnLoading=!1},C=async()=>{t.btnLoading=!0,t.type===k.WHITELIST?await $(t.tokenId):await I(t.tokenId),await m(),t.btnLoading=!1},B=async()=>{t.allowance=await G(t.tokenInfo.paymentToken).allowance(t.type===k.FIXED?R.FIXED_MODE:R.WHITE_LIST_MODE),t.balance=await G(t.tokenInfo.paymentToken).balanceOf()},V=async()=>{t.btnLoading=!0,await G(t.tokenInfo.paymentToken).approve(t.type===k.FIXED?R.FIXED_MODE:R.WHITE_LIST_MODE),await B(),t.btnLoading=!1};return ne(()=>[m()]),(r,E)=>{var F,H,P,U;const N=ie("van-icon");return a(),i("div",Io,[e("div",{class:"flex items-center gap-3 cursor-pointer text-main",onClick:E[0]||(E[0]=X=>o(L).go(-1))},[w(N,{name:"down",class:"rotate-90"}),W(" "+s(r.$t("common.back")),1)]),o(t).tokenInfo?(a(),i("div",vo,[w(be,{tokenInfo:o(t).tokenInfo,tokenId:o(t).tokenId,type:o(t).type},null,8,["tokenInfo","tokenId","type"]),w(pe,{tokenInfo:o(t).tokenInfo},null,8,["tokenInfo"])])):y("v-if",!0),w(dt,{class:"mt-10",tokenInfo:o(t).tokenInfo},null,8,["tokenInfo"]),w(gt),((F=o(t).tokenInfo)==null?void 0:F.status)===o(q).CLOSED?(a(),i("div",mo,[w(Gt,{tokenInfo:o(t).tokenInfo},null,8,["tokenInfo"]),w(J,{class:"mt-7",onClick:C,loading:o(t).btnLoading,disabled:((H=o(t).tokenInfo)==null?void 0:H.unExtracted)==="0"},{default:M(()=>[W(s(r.$t("ido.Claim")),1)]),_:1},8,["loading","disabled"]),e("div",yo,[((P=o(t).tokenInfo)==null?void 0:P.unExtracted)==="0"?(a(),i("span",go,s(r.$t("ido.end")),1)):(a(),i("span",ho,s(r.$t("ido.nextClaimTime"))+" :"+s(o(b)),1))])])):y("v-if",!0),((U=o(t).tokenInfo)==null?void 0:U.status)===o(q).PUBLIC&&o(t).tokenInfo?(a(),i("div",_o,[w(fo,{modelValue:o(t).buyValue,tokenInfo:o(t).tokenInfo,"onUpdate:modelValue":p,loading:o(t).btnLoading,onHandle:h,isAuth:o(_),allowance:o(t).allowance,balance:o(t).balance,onInit:m},null,8,["modelValue","tokenInfo","loading","isAuth","allowance","balance"])])):y("v-if",!0)])}}}),So=O(bo,[["__file","/Users/wangkeai/work/xueyan/followx/followx-dapp/src/view/idoDetail/IdoDetail.vue"]]);export{So as default};
