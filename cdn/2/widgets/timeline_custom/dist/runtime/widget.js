System.register(["jimu-core","jimu-arcgis"],(function(e,t){var n={},i={};return{setters:[function(e){n.DataSourceFilterChangeMessage=e.DataSourceFilterChangeMessage,n.DataSourceManager=e.DataSourceManager,n.MessageManager=e.MessageManager,n.React=e.React,n.css=e.css,n.getAppStore=e.getAppStore,n.jsx=e.jsx},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=n},686:e=>{"use strict";e.exports=i}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{__set_webpack_public_path__:()=>N,default:()=>M});var e=r(244),t=r(686);const n=2;const i=3,a={playbackSpeed:1e3,sliderColor:"#EA9823",playButtonColor:"#EA9823",timestampTextColor:"#333333",featureHighlightColor:"#FF6B00",timestamps:[],timestampsText:""};function o(e){return e.replace(/'/g,"''")}const s=new Set(["date","esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimestampOffset","esriFieldTypeTimeOnly"]),u=new Set(["string","esriFieldTypeString","esriFieldTypeGUID"]),c=new Set(["integer","small-integer","esriFieldTypeInteger","esriFieldTypeSmallInteger","double","single","esriFieldTypeDouble","esriFieldTypeSingle","long","esriFieldTypeOID"]);function d(e){return!e||s.has(e)}function p(e){return!!e&&u.has(e)}function g(e){return!!e&&c.has(e)}function f(e,t){var n;const i=null==t?void 0:t.trim();if(!(null==e?void 0:e.fields)||!i)return i;const r=e.fields.find((e=>e.name===i));if(null==r?void 0:r.name)return r.name;const l=i.toLowerCase(),a=e.fields.find((e=>{var t;return(null!==(t=e.name)&&void 0!==t?t:"").toLowerCase()===l}));return null!==(n=null==a?void 0:a.name)&&void 0!==n?n:i}function m(e,t){if(!(null==e?void 0:e.fields)||!t)return;const n=f(e,t),i=e.fields.find((e=>e.name===n));return null==i?void 0:i.type}function h(e,t,n){if(!(null==e?void 0:e.trim())||!t||isNaN(t.getTime()))return["1=0"];const i=e.trim();if(p(n))return[v(e,t,n)];if(g(n))return[v(e,t,n)];if(null!=n&&!d(n))return[v(e,t,n)];const r=t.getTime(),l=Math.floor(r/1e3),a=function(e){return!e||isNaN(e.getTime())?"":`timestamp '${e.toISOString().replace("T"," ").replace(/\.\d{3}Z$/,"")}'`}(t);return[`${i} = ${r}`,`${i} = ${l}`,`${i} = ${a}`,`${i} = DATE '${t.toISOString().slice(0,10)}'`]}function v(e,t,n){if(!(null==e?void 0:e.trim())||!t||isNaN(t.getTime()))return"1=0";const i=e.trim();if(p(n)){return`${i} = '${o(t.toISOString())}'`}if(g(n))return`${i} = ${t.getTime()}`;if(null!=n&&!d(n)){return`${i} = '${o(t.toISOString())}'`}return function(e,t){return`${e.trim()} = ${t.getTime()}`}(i,t)}var x=function(e,t,n,i){return new(n||(n=Promise))((function(r,l){function a(e){try{s(i.next(e))}catch(e){l(e)}}function o(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}s((i=i.apply(e,t||[])).next())}))};const{useState:y,useEffect:b,useRef:w,useCallback:S}=e.React;function j(e){return!e||isNaN(e.getTime())?"":e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"})}function k(e){return!e||isNaN(e.getTime())?"":e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})}function C(e){var t;return null!==(t=null==e?void 0:e.dataSourceId)&&void 0!==t?t:null==e?void 0:e.mainDataSourceId}const T="chart";function F(t,n,i){const r=e.DataSourceManager.getInstance().getDataSource(n);(null==r?void 0:r.updateQueryParams)&&r.updateQueryParams(null!=i?{where:i}:null,t)}function M(r){var l,o,s,u,c,d,p;const{config:g,id:v}=r,M=null!=g?g:{},N=null===(l=M.useMapWidgetIds)||void 0===l?void 0:l[0],$=null!==(o=M.useDataSources)&&void 0!==o?o:[],I=M.layerFieldBindings,D=null!==(s=M.timestamps)&&void 0!==s?s:[],B=null!==(u=M.playbackSpeed)&&void 0!==u?u:a.playbackSpeed,O=function(e){var t;if(!e)return[];if(null!=e.linkedChartWidgetIds){const t=e.linkedChartWidgetIds.map((e=>String(e).trim())).filter(Boolean);return Array.from(new Set(t)).slice(0,n)}const i=null===(t=e.linkedChartWidgetId)||void 0===t?void 0:t.trim();return i?[i]:[]}(M),E=O.join("\0"),A=null!==(c=M.sliderColor)&&void 0!==c?c:a.sliderColor,_=null!==(d=M.playButtonColor)&&void 0!==d?d:a.playButtonColor,P=null!==(p=M.timestampTextColor)&&void 0!==p?p:a.timestampTextColor,[z,L]=y(null),[R,V]=y(0),[W,q]=y(!1),[J,H]=y(""),Q=w(null),U=w(""),G=S((t=>{const n=Array.from(new Set(t.filter(Boolean)));n.forEach((e=>F(v,e,null))),n.length>0&&e.MessageManager.getInstance().publishMessage(new e.DataSourceFilterChangeMessage(v,n))}),[v]);b((()=>{if(U.current&&0===O.length){const e=$.slice(0,i).map(C).filter((e=>Boolean(e)));G(e)}U.current=E}),[E,$,G]),b((()=>()=>{$.slice(0,i).map(C).filter((e=>Boolean(e))).forEach((e=>F(v,e,null)))}),[v,$]);const X=$.length>0&&D.length>0&&$.slice(0,i).every(((e,t)=>{var n;const i=null==I?void 0:I[t];return Boolean(null===(n=null==i?void 0:i.dateField)||void 0===n?void 0:n.trim())})),Z=S((t=>{var n,i;if(!z||!t)return null;const r=z.getJimuLayerViewByDataSourceId(t),l=null==r?void 0:r.layer;if(null==l?void 0:l.queryFeatures)return l;const a=e.DataSourceManager.getInstance().getDataSource(t);return(null===(n=null==a?void 0:a.getLayer)||void 0===n?void 0:n.call(a))?a.getLayer():(null===(i=null==a?void 0:a.layer)||void 0===i?void 0:i.queryFeatures)?a.layer:null}),[z]);b((()=>{V(0),q(!1)}),[D.join("|")]),b((()=>{if(!z||!X||0===D.length)return void H("");let t=!1;const n=Math.min(R,D.length-1),r=new Date(D[n]);if(isNaN(r.getTime()))return void H("");return(()=>{x(this,void 0,void 0,(function*(){var n,l,a,o;const s=$.slice(0,i),u=new Set;O.forEach((t=>{(function(t){var n,i,r;if(!t)return[];try{const l=null===(i=null===(n=(0,e.getAppStore)().getState().appConfig)||void 0===n?void 0:n.widgets)||void 0===i?void 0:i[t];if(!l||(null===(r=l.manifest)||void 0===r?void 0:r.name)!==T)return[];const a=l.useDataSources;return(null!=a?a:[]).map((e=>{var t;return null!==(t=null==e?void 0:e.dataSourceId)&&void 0!==t?t:null==e?void 0:e.mainDataSourceId})).filter(Boolean)}catch(e){return[]}})(t).forEach((e=>u.add(e)))}));const c=new Set;let d="";for(let e=0;e<s.length;e++){const i=s[e],p=null==I?void 0:I[e];if(!(null===(n=null==p?void 0:p.dateField)||void 0===n?void 0:n.trim()))continue;const g=C(i);if(!g)continue;const x=Z(g);if(!x)continue;const y=f(x,p.dateField),b=x.objectIdField?f(x,x.objectIdField):"OBJECTID",w=m(x,p.dateField),S=h(y,r,w);let j,k=!1,T=null;for(const e of S){if(t)return;try{if(x.definitionExpression=e,yield z.view.whenLayerView(x),t)return;const n=x.createQuery();if(n.where=e,n.outFields=[b],n.num=1,yield x.queryFeatures(n),t)return;T=e,k=!0,O.length>0&&u.has(g)&&(F(v,g,e),c.add(g));break}catch(t){j=t,console.warn("[timeline_custom] where attempt failed:",e,t)}}if(k){if(!d&&(null===(l=p.weekdayField)||void 0===l?void 0:l.trim())&&T)try{const e=f(x,p.weekdayField.trim()),n=x.createQuery();if(n.where=T,n.num=1,n.returnGeometry=!1,n.outFields=[e],t)return;const i=yield x.queryFeatures(n);if(t)return;const r=null===(o=null===(a=i.features[0])||void 0===a?void 0:a.attributes)||void 0===o?void 0:o[e];null!=r&&String(r).trim()&&(d=String(r).trim())}catch(e){console.warn("[timeline_custom] weekday field query failed:",e)}}else{try{x.definitionExpression=null}catch(e){}O.length>0&&u.has(g)&&(F(v,g,null),c.add(g)),console.error("[timeline_custom] all WHERE strategies failed:",j)}}t||H(d),!t&&c.size>0&&e.MessageManager.getInstance().publishMessage(new e.DataSourceFilterChangeMessage(v,Array.from(c)))}))})(),()=>{t=!0}}),[z,R,X,D,$,I,Z,E,v]),b((()=>{if(Q.current&&clearInterval(Q.current),W&&0!==D.length)return Q.current=setInterval((()=>{V((e=>{const t=e+1;return t>=D.length?(q(!1),e):t}))}),B),()=>{Q.current&&clearInterval(Q.current)}}),[W,D.length,B]);const K=D.length>1?R/(D.length-1)*100:1===D.length?100:0,Y=D.length>0?new Date(D[Math.min(R,D.length-1)]):null,ee=e.css`
    width: 100%;
    height: 100%;
    background: var(--calcite-color-background, #ffffff);
    border-radius: 8px;
    border: 1px solid var(--calcite-color-border-1, #e0e0e0);
    padding: 12px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    .tl-header {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 1.5em;
    }
    .tl-timestamp {
      font-size: 13px;
      font-weight: 700;
      color: ${P};
      letter-spacing: 0.2px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      line-height: 1.25;
    }
    .tl-date,
    .tl-time {
      white-space: nowrap;
    }
    .tl-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .tl-play-btn {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: none;
      background: ${_};
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform 0.15s, filter 0.15s;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
      padding: 0;
    }
    .tl-play-btn:hover {
      filter: brightness(1.12);
    }
    .tl-play-btn:active {
      transform: scale(0.93);
    }
    .tl-play-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .tl-step-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: ${A};
      font-size: 20px;
      line-height: 1;
      padding: 0 2px;
      display: flex;
      align-items: center;
      transition: opacity 0.15s;
      flex-shrink: 0;
    }
    .tl-step-btn:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }
    .tl-step-btn:hover:not(:disabled) {
      opacity: 0.7;
    }
    .tl-track-wrap {
      flex: 1;
      height: 28px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
    }
    .tl-track {
      width: 100%;
      height: 4px;
      background: var(--calcite-color-border-1, #e0e0e0);
      border-radius: 2px;
      position: relative;
    }
    .tl-fill {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: ${A};
      border-radius: 2px;
      pointer-events: none;
      transition: width 0.25s ease;
    }
    .tl-tick {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--calcite-color-border-1, #ccc);
      cursor: pointer;
      z-index: 1;
      transition: background 0.18s, transform 0.18s;
    }
    .tl-tick.past {
      background: ${A};
      opacity: 0.55;
    }
    .tl-tick.current {
      background: ${A};
      transform: translate(-50%, -50%) scale(1.5);
      z-index: 2;
    }
    .tl-thumb {
      position: absolute;
      top: 50%;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${A};
      border: 2.5px solid #fff;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.28);
      z-index: 3;
      transform: translate(-50%, -50%);
      pointer-events: none;
      transition: left 0.25s ease;
    }
    .tl-empty {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--calcite-color-text-3, #999);
      font-size: 12px;
      text-align: center;
      padding: 8px;
      gap: 6px;
    }
  `;return(0,e.jsx)("div",{css:ee},N&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:N,onActiveViewChange:e=>L(e)}),!X&&(0,e.jsx)("div",{className:"tl-empty"},(0,e.jsx)("span",null,"In widget settings: connect a map, select up to three layers, map a date field per layer, and add at least one ISO timestamp (max 15).")),X&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"tl-header"},(0,e.jsx)("div",{className:"tl-timestamp"},Y&&!isNaN(Y.getTime())?(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("span",{className:"tl-date"},J?`${J} `:"",j(Y)),(0,e.jsx)("span",{className:"tl-time"},k(Y))):"\u2014")),(0,e.jsx)("div",{className:"tl-controls"},(0,e.jsx)("button",{className:"tl-play-btn",onClick:()=>q((e=>!e)),title:W?"Pause":"Play",disabled:D.length<=1},W?(0,e.jsx)((()=>(0,e.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"currentColor"},(0,e.jsx)("rect",{x:"2",y:"1",width:"3.5",height:"11",rx:"1"}),(0,e.jsx)("rect",{x:"7.5",y:"1",width:"3.5",height:"11",rx:"1"}))),null):(0,e.jsx)((()=>(0,e.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"currentColor"},(0,e.jsx)("polygon",{points:"2,1 12,6.5 2,12"}))),null)),(0,e.jsx)("button",{className:"tl-step-btn",onClick:()=>{V((e=>Math.max(0,e-1))),q(!1)},disabled:0===R,title:"Previous"},"\u2039"),(0,e.jsx)("div",{className:"tl-track-wrap",onClick:e=>{if(0===D.length)return;const t=e.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width));V(Math.round(n*(D.length-1))),q(!1)}},(0,e.jsx)("div",{className:"tl-track"},(0,e.jsx)("div",{className:"tl-fill",style:{width:`${K}%`}}),D.map(((t,n)=>{const i=D.length>1?n/(D.length-1)*100:50,r="tl-tick"+(n===R?" current":n<R?" past":"");return(0,e.jsx)("div",{key:n,className:r,style:{left:`${i}%`},onClick:e=>((e,t)=>{t.stopPropagation(),V(e),q(!1)})(n,e),title:(l=new Date(t),!l||isNaN(l.getTime())?"":`${j(l)} ${k(l)}`)});var l})),(0,e.jsx)("div",{className:"tl-thumb",style:{left:`${K}%`}}))),(0,e.jsx)("button",{className:"tl-step-btn",onClick:()=>{V((e=>Math.min(D.length-1,e+1))),q(!1)},disabled:R>=D.length-1,title:"Next"},"\u203a"))))}function N(e){r.p=e}})(),l})())}}}));