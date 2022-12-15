(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{3453:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tcpip",function(){return __webpack_require__(8256)}])},8256:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return tcpip}});var jsx_runtime=__webpack_require__(4471),Stack=__webpack_require__(1887),StackItem=__webpack_require__(9899),MessageBar=__webpack_require__(1490),createComponent=__webpack_require__(9830),tslib_es6=__webpack_require__(3499),slots=__webpack_require__(6527),properties=__webpack_require__(784),Text=(0,createComponent.L)(function(props){if(null==props.children)return null;props.block,props.className;var _a=props.as,rest=(props.variant,props.nowrap,(0,tslib_es6._T)(props,["block","className","as","variant","nowrap"])),Slots=(0,slots.FJ)(props,{root:void 0===_a?"span":_a});return(0,slots.Yb)(Slots.root,(0,tslib_es6.pi)({},(0,properties.pq)(rest,properties.iY)))},{displayName:"Text",styles:function(props,theme){var as=props.as,className=props.className,block=props.block,nowrap=props.nowrap,variant=props.variant,fonts=theme.fonts,semanticColors=theme.semanticColors,variantObject=fonts[variant||"medium"];return{root:[variantObject,{color:variantObject.color||semanticColors.bodyText,display:block?"td"===as?"table-cell":"block":"inline",mozOsxFontSmoothing:variantObject.MozOsxFontSmoothing,webkitFontSmoothing:variantObject.WebkitFontSmoothing},nowrap&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},className]}}}),Toggle=__webpack_require__(7738),TextField=__webpack_require__(2081),mobx_esm=__webpack_require__(6323),es=__webpack_require__(6779),head=__webpack_require__(3591),head_default=__webpack_require__.n(head),react=__webpack_require__(3370),components=__webpack_require__(4347),state=__webpack_require__(2344),utils=__webpack_require__(5155);let tcpip_state=new class{get commandBarItems(){return[{key:"refresh",disabled:!state.q.device,iconProps:{iconName:utils.PJ.ArrowClockwise},text:"Refresh",onClick:this.queryInfo},{key:"apply",disabled:!state.q.device,iconProps:{iconName:utils.PJ.Save},text:"Apply",onClick:this.applyServicePort}]}constructor(){this.initial=!0,this.visible=!1,this.serviceListenAddresses=void 0,this.servicePortEnabled=!1,this.servicePort="",this.persistPortEnabled=!1,this.persistPort=void 0,this.queryInfo=(0,utils.FW)(async signal=>{if(!state.q.device){(0,mobx_esm.z)(()=>{this.serviceListenAddresses=void 0,this.servicePortEnabled=!1,this.servicePort="",this.persistPortEnabled=!1,this.persistPort=void 0});return}let serviceListenAddresses=await state.q.device.getProp("service.adb.listen_addrs"),servicePort=await state.q.device.getProp("service.adb.tcp.port"),persistPort=await state.q.device.getProp("persist.adb.tcp.port");signal.aborted||(0,mobx_esm.z)(()=>{this.serviceListenAddresses=""!==serviceListenAddresses?serviceListenAddresses.split(","):void 0,servicePort?(this.servicePortEnabled=!serviceListenAddresses&&"0"!==servicePort,this.servicePort=servicePort):(this.servicePortEnabled=!1,this.servicePort="5555"),persistPort?(this.persistPortEnabled=!serviceListenAddresses&&!servicePort,this.persistPort=persistPort):(this.persistPortEnabled=!1,this.persistPort=void 0)})}),this.applyServicePort=async()=>{state.q.device&&(tcpip_state.servicePortEnabled?await state.q.device.tcpip.setPort(Number.parseInt(tcpip_state.servicePort,10)):await state.q.device.tcpip.disable())},(0,mobx_esm.ky)(this,{initial:!1,queryInfo:!1,applyServicePort:!1}),(0,mobx_esm.EH)(()=>{state.q.device?this.initial&&this.visible&&(this.initial=!1,this.queryInfo()):this.initial=!0})}},TcpIp=()=>{var ref;(0,react.useEffect)(()=>((0,mobx_esm.z)(()=>{tcpip_state.visible=!0}),()=>{(0,mobx_esm.z)(()=>{tcpip_state.visible=!1})}));let handleServicePortEnabledChange=(0,react.useCallback)((e,value)=>{(0,mobx_esm.z)(()=>{tcpip_state.servicePortEnabled=!!value})},[]),handleServicePortChange=(0,react.useCallback)((e,value)=>{void 0!==value&&(0,mobx_esm.z)(()=>tcpip_state.servicePort=value)},[]);return(0,jsx_runtime.jsxs)(Stack.K,{...utils.LE,children:[(0,jsx_runtime.jsx)(head_default(),{children:(0,jsx_runtime.jsx)("title",{children:"ADB over WiFi - Android Web Toolbox"})}),(0,jsx_runtime.jsx)(components.X3,{items:tcpip_state.commandBarItems}),(0,jsx_runtime.jsx)(StackItem.v,{children:(0,jsx_runtime.jsx)(MessageBar.c,{children:(0,jsx_runtime.jsxs)(Text,{children:["For WebADB to wirelessly connect to your device,",(0,jsx_runtime.jsx)(components.dL,{href:"https://github.com/yume-chan/ya-webadb/discussions/245#discussioncomment-384030",spaceBefore:!0,spaceAfter:!0,children:"extra software"}),"is required."]})})}),(0,jsx_runtime.jsx)(StackItem.v,{children:(0,jsx_runtime.jsx)(MessageBar.c,{children:(0,jsx_runtime.jsx)(Text,{children:"Your device will disconnect after changing ADB over WiFi config."})})}),(0,jsx_runtime.jsxs)(StackItem.v,{children:[(0,jsx_runtime.jsx)(Toggle.Z,{inlineLabel:!0,label:"service.adb.listen_addrs",disabled:!0,checked:!!tcpip_state.serviceListenAddresses,onText:"Enabled",offText:"Disabled"}),null===(ref=tcpip_state.serviceListenAddresses)||void 0===ref?void 0:ref.map(address=>(0,jsx_runtime.jsx)(TextField.n,{disabled:!0,value:address,styles:{root:{width:300}}},address))]}),(0,jsx_runtime.jsxs)(StackItem.v,{children:[(0,jsx_runtime.jsx)(Toggle.Z,{inlineLabel:!0,label:"service.adb.tcp.port",checked:tcpip_state.servicePortEnabled,disabled:!state.q.device||!!tcpip_state.serviceListenAddresses,onText:"Enabled",offText:"Disabled",onChange:handleServicePortEnabledChange}),(0,jsx_runtime.jsx)(TextField.n,{disabled:!state.q.device||!!tcpip_state.serviceListenAddresses,value:tcpip_state.servicePort,styles:{root:{width:300}},onChange:handleServicePortChange})]}),(0,jsx_runtime.jsxs)(StackItem.v,{children:[(0,jsx_runtime.jsx)(Toggle.Z,{inlineLabel:!0,label:"persist.adb.tcp.port",disabled:!0,checked:tcpip_state.persistPortEnabled,onText:"Enabled",offText:"Disabled"}),tcpip_state.persistPort&&(0,jsx_runtime.jsx)(TextField.n,{disabled:!0,value:tcpip_state.persistPort,styles:{root:{width:300}}})]})]})};var tcpip=(0,es.Pi)(TcpIp)},1490:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return MessageBar}});var _a,MessageBar_styles_a,_b,_c,styled=__webpack_require__(3513),tslib_es6=__webpack_require__(3499),react=__webpack_require__(3370),classNamesFunction=__webpack_require__(3568),properties=__webpack_require__(784),css=__webpack_require__(6799),DelayedRender=__webpack_require__(8262),IconButton=__webpack_require__(1197),Icon=__webpack_require__(8415),MessageBar_types=__webpack_require__(8290),useBoolean=__webpack_require__(6807),useId=__webpack_require__(4976),ICON_MAP=((_a={})[MessageBar_types.f.info]="Info",_a[MessageBar_types.f.warning]="Info",_a[MessageBar_types.f.error]="ErrorBadge",_a[MessageBar_types.f.blocked]="Blocked2",_a[MessageBar_types.f.severeWarning]="Warning",_a[MessageBar_types.f.success]="Completed",_a),getClassNames=(0,classNamesFunction.y)(),getAnnouncementPriority=function(messageBarType){switch(messageBarType){case MessageBar_types.f.blocked:case MessageBar_types.f.error:case MessageBar_types.f.severeWarning:return"assertive"}return"polite"},getRole=function(messageBarType){switch(messageBarType){case MessageBar_types.f.blocked:case MessageBar_types.f.error:case MessageBar_types.f.severeWarning:return"alert"}return"status"},MessageBarBase=react.forwardRef(function(props,ref){var _a=(0,useBoolean.k)(!1),expandSingleLine=_a[0],toggleExpandSingleLine=_a[1].toggle,labelId=(0,useId.M)("MessageBar"),actions=props.actions,className=props.className,children=props.children,overflowButtonAriaLabel=props.overflowButtonAriaLabel,dismissIconProps=props.dismissIconProps,styles=props.styles,theme=props.theme,_b=props.messageBarType,messageBarType=void 0===_b?MessageBar_types.f.info:_b,_c=props.onDismiss,onDismiss=void 0===_c?void 0:_c,_d=props.isMultiline,isMultiline=void 0===_d||_d,truncated=props.truncated,dismissButtonAriaLabel=props.dismissButtonAriaLabel,messageBarIconProps=props.messageBarIconProps,role=props.role,_e=props.delayedRender,expandButtonProps=props.expandButtonProps,nativeProps=(0,properties.pq)(props,properties.iY,["className","role"]),classNames=getClassNames(styles,{theme:theme,messageBarType:messageBarType||MessageBar_types.f.info,onDismiss:void 0!==onDismiss,actions:void 0!==actions,truncated:truncated,isMultiline:isMultiline,expandSingleLine:expandSingleLine,className:className}),actionsDiv=actions?react.createElement("div",{className:classNames.actions},actions):null,dismissButton=onDismiss?react.createElement(IconButton.h,{disabled:!1,className:classNames.dismissal,onClick:onDismiss,iconProps:dismissIconProps||{iconName:"Clear"},title:dismissButtonAriaLabel,ariaLabel:dismissButtonAriaLabel}):null;return react.createElement("div",(0,tslib_es6.pi)({ref:ref,className:classNames.root},actions||onDismiss?{"aria-describedby":labelId,role:"region"}:{}),react.createElement("div",{className:classNames.content},react.createElement("div",{className:classNames.iconContainer,"aria-hidden":!0},messageBarIconProps?react.createElement(Icon.J,(0,tslib_es6.pi)({},messageBarIconProps,{className:(0,css.i)(classNames.icon,messageBarIconProps.className)})):react.createElement(Icon.J,{iconName:ICON_MAP[messageBarType],className:classNames.icon})),react.createElement("div",{className:classNames.text,id:labelId,role:role||getRole(messageBarType),"aria-live":getAnnouncementPriority(messageBarType)},react.createElement("span",(0,tslib_es6.pi)({className:classNames.innerText},nativeProps),void 0===_e||_e?react.createElement(DelayedRender.U,null,react.createElement("span",null,children)):react.createElement("span",null,children))),!isMultiline&&!actionsDiv&&truncated&&react.createElement("div",{className:classNames.expandSingleLine},react.createElement(IconButton.h,(0,tslib_es6.pi)({disabled:!1,className:classNames.expand,onClick:toggleExpandSingleLine,iconProps:{iconName:expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:overflowButtonAriaLabel,"aria-expanded":expandSingleLine},expandButtonProps))),!isMultiline&&actionsDiv,!isMultiline&&dismissButton&&react.createElement("div",{className:classNames.dismissSingleLine},dismissButton),isMultiline&&dismissButton),isMultiline&&actionsDiv)});MessageBarBase.displayName="MessageBar";var lib=__webpack_require__(3349),GlobalClassNames={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},backgroundColor=((MessageBar_styles_a={})[MessageBar_types.f.error]="errorBackground",MessageBar_styles_a[MessageBar_types.f.blocked]="errorBackground",MessageBar_styles_a[MessageBar_types.f.success]="successBackground",MessageBar_styles_a[MessageBar_types.f.warning]="warningBackground",MessageBar_styles_a[MessageBar_types.f.severeWarning]="severeWarningBackground",MessageBar_styles_a[MessageBar_types.f.info]="infoBackground",MessageBar_styles_a),highContrastBackgroundColor=((_b={})[MessageBar_types.f.error]="rgba(255, 0, 0, 0.3)",_b[MessageBar_types.f.blocked]="rgba(255, 0, 0, 0.3)",_b[MessageBar_types.f.success]="rgba(48, 241, 73, 0.3)",_b[MessageBar_types.f.warning]="rgba(255, 254, 57, 0.3)",_b[MessageBar_types.f.severeWarning]="rgba(255, 0, 0, 0.3)",_b[MessageBar_types.f.info]="Window",_b),iconColor=((_c={})[MessageBar_types.f.error]="errorIcon",_c[MessageBar_types.f.blocked]="errorIcon",_c[MessageBar_types.f.success]="successIcon",_c[MessageBar_types.f.warning]="warningIcon",_c[MessageBar_types.f.severeWarning]="severeWarningIcon",_c[MessageBar_types.f.info]="infoIcon",_c),MessageBar=(0,styled.z)(MessageBarBase,function(props){var _a,_b,_c,_d,_e,theme=props.theme,className=props.className,onDismiss=props.onDismiss,truncated=props.truncated,isMultiline=props.isMultiline,expandSingleLine=props.expandSingleLine,_f=props.messageBarType,messageBarType=void 0===_f?MessageBar_types.f.info:_f,semanticColors=theme.semanticColors,fonts=theme.fonts,SmallScreenSelector=(0,lib.sK)(0,lib.mV),classNames=(0,lib.Cn)(GlobalClassNames,theme),dismissalAndExpandIconStyle={fontSize:lib.ld.xSmall,height:10,lineHeight:"10px",color:semanticColors.messageText,selectors:((_a={})[lib.qJ]=(0,tslib_es6.pi)((0,tslib_es6.pi)({},(0,lib.xM)()),{color:"WindowText"}),_a)},dismissalAndExpandStyle=[(0,lib.GL)(theme,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":dismissalAndExpandIconStyle,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[classNames.root,fonts.medium,messageBarType===MessageBar_types.f.error&&classNames.error,messageBarType===MessageBar_types.f.blocked&&classNames.blocked,messageBarType===MessageBar_types.f.severeWarning&&classNames.severeWarning,messageBarType===MessageBar_types.f.success&&classNames.success,messageBarType===MessageBar_types.f.warning&&classNames.warning,isMultiline?classNames.multiline:classNames.singleline,!isMultiline&&onDismiss&&classNames.dismissalSingleLine,!isMultiline&&truncated&&classNames.expandingSingleLine,{background:semanticColors[backgroundColor[messageBarType]],color:semanticColors.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:((_b={".ms-Link":{color:semanticColors.messageLink,selectors:{":hover":{color:semanticColors.messageLinkHovered}}}})[lib.qJ]=(0,tslib_es6.pi)((0,tslib_es6.pi)({},(0,lib.xM)()),{background:highContrastBackgroundColor[messageBarType],border:"1px solid WindowText",color:"WindowText"}),_b)},isMultiline&&{flexDirection:"column"},className],content:[classNames.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[classNames.iconContainer,{fontSize:lib.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:semanticColors[iconColor[messageBarType]],selectors:((_c={})[lib.qJ]=(0,tslib_es6.pi)((0,tslib_es6.pi)({},(0,lib.xM)()),{color:"WindowText"}),_c)},text:[classNames.text,(0,tslib_es6.pi)((0,tslib_es6.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},fonts.small),{selectors:((_d={})[lib.qJ]=(0,tslib_es6.pi)({},(0,lib.xM)()),_d)}),!onDismiss&&{marginRight:12}],innerText:[classNames.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},truncated&&{overflow:"visible",whiteSpace:"pre-wrap"},!isMultiline&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!isMultiline&&!truncated&&{selectors:((_e={})[SmallScreenSelector]={overflow:"visible",whiteSpace:"pre-wrap"},_e)},expandSingleLine&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:classNames.dismissSingleLine,expandSingleLine:classNames.expandSingleLine,dismissal:[classNames.dismissal,dismissalAndExpandStyle],expand:[classNames.expand,dismissalAndExpandStyle],actions:[isMultiline?classNames.actions:classNames.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",forcedColorAdjust:"auto",MsHighContrastAdjust:"auto",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},isMultiline&&{marginBottom:8},onDismiss&&!isMultiline&&{marginRight:0}]}},void 0,{scope:"MessageBar"})},8290:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var MessageBarType,MessageBarType1;__webpack_require__.d(__webpack_exports__,{f:function(){return MessageBarType}}),(MessageBarType1=MessageBarType||(MessageBarType={}))[MessageBarType1.info=0]="info",MessageBarType1[MessageBarType1.error=1]="error",MessageBarType1[MessageBarType1.blocked=2]="blocked",MessageBarType1[MessageBarType1.severeWarning=3]="severeWarning",MessageBarType1[MessageBarType1.success=4]="success",MessageBarType1[MessageBarType1.warning=5]="warning"}},function(__webpack_require__){__webpack_require__.O(0,[81,774,888,179],function(){return __webpack_require__(__webpack_require__.s=3453)}),_N_E=__webpack_require__.O()}]);
//# sourceMappingURL=tcpip-0ea389a3a95b2368.js.map