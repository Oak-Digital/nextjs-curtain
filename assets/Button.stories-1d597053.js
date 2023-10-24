import{r as R}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";var E={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=R,C=Symbol.for("react.element"),P=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,z=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,n){var r,o={},a=null,p=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)q.call(e,r)&&!I.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:C,type:t,key:a,ref:p,props:o,_owner:z.current}}i.Fragment=P;i.jsx=O;i.jsxs=O;E.exports=i;var N=E.exports;const m=({primary:t=!1,size:e="medium",backgroundColor:n,label:r,...o})=>{const a=t?"storybook-button--primary":"storybook-button--secondary";return N.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,a].join(" "),style:{backgroundColor:n},...o,children:r})};try{m.displayName="Button",m.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const V={title:"Example/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},s={args:{primary:!0,label:"Button"}},l={args:{label:"Button"}},u={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var d,y,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(_=(g=l.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var k,v,x;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,S,h;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const T=["Primary","Secondary","Large","Small"];export{u as Large,s as Primary,l as Secondary,c as Small,T as __namedExportsOrder,V as default};
//# sourceMappingURL=Button.stories-1d597053.js.map
