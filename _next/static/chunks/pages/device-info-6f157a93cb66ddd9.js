(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{8163:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/device-info",function(){return __webpack_require__(4718)}])},4718:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4471),_fluentui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1887),_fluentui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1490),_fluentui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2985),_fluentui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(5169),_fluentui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(8415),_yume_chan_adb__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7417),mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6779),next_head__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3591),next_head__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);__webpack_require__(3370);var _state__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2344),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5155);let KNOWN_FEATURES={[_yume_chan_adb__WEBPACK_IMPORTED_MODULE_1__.Pq.ShellV2]:'"shell" command now supports separating child process\'s stdout and stderr, and returning exit code',[_yume_chan_adb__WEBPACK_IMPORTED_MODULE_1__.Pq.StatV2]:'"sync" command now supports "STA2" (returns more information of a file than old "STAT") and "LST2" (returns information of a directory) sub command',[_yume_chan_adb__WEBPACK_IMPORTED_MODULE_1__.Pq.ListV2]:'"sync" command now supports "LST2" sub command which returns more information when listing a directory than old "LIST"',[_yume_chan_adb__WEBPACK_IMPORTED_MODULE_1__.Pq.FixedPushMkdir]:"Android 9 (P) introduced a bug that pushing files to a non-existing directory would fail. This feature indicates it's fixed (Android 10)",abb_exec:'Support "exec" command which can stream stdin into child process'},DeviceInfo=()=>{var ref,ref1,ref2,ref3,ref4,ref5,ref6;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.K,{..._utils__WEBPACK_IMPORTED_MODULE_6__.LE,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_head__WEBPACK_IMPORTED_MODULE_3___default(),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:"Device Info"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.c,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Protocol Version: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code",{children:null===(ref=_state__WEBPACK_IMPORTED_MODULE_5__.q.device)||void 0===ref?void 0:null===(ref1=ref.protocolVersion)||void 0===ref1?void 0:ref1.toString(16).padStart(8,"0")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.c,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:["Product Name: ",null===(ref2=_state__WEBPACK_IMPORTED_MODULE_5__.q.device)||void 0===ref2?void 0:ref2.product]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.c,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:["Model Name: ",null===(ref3=_state__WEBPACK_IMPORTED_MODULE_5__.q.device)||void 0===ref3?void 0:ref3.model]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.c,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:["Device Name: ",null===(ref4=_state__WEBPACK_IMPORTED_MODULE_5__.q.device)||void 0===ref4?void 0:ref4.device]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.c,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Features: "}),null===(ref5=_state__WEBPACK_IMPORTED_MODULE_5__.q.device)||void 0===ref5?void 0:null===(ref6=ref5.features)||void 0===ref6?void 0:ref6.map((feature,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[0!==index&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:", "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:feature}),KNOWN_FEATURES[feature]&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.G,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:KNOWN_FEATURES[feature]}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.J,{style:{marginLeft:4},iconName:_utils__WEBPACK_IMPORTED_MODULE_6__.PJ.Info})})]},feature))]})]})};__webpack_exports__.default=(0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.Pi)(DeviceInfo)},1490:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return MessageBar}});var _a,MessageBar_styles_a,_b,_c,styled=__webpack_require__(3513),tslib_es6=__webpack_require__(3499),react=__webpack_require__(3370),classNamesFunction=__webpack_require__(3568),properties=__webpack_require__(784),css=__webpack_require__(6799),DelayedRender=__webpack_require__(8262),IconButton=__webpack_require__(1197),Icon=__webpack_require__(8415),MessageBar_types=__webpack_require__(8290),useBoolean=__webpack_require__(6807),useId=__webpack_require__(4976),ICON_MAP=((_a={})[MessageBar_types.f.info]="Info",_a[MessageBar_types.f.warning]="Info",_a[MessageBar_types.f.error]="ErrorBadge",_a[MessageBar_types.f.blocked]="Blocked2",_a[MessageBar_types.f.severeWarning]="Warning",_a[MessageBar_types.f.success]="Completed",_a),getClassNames=(0,classNamesFunction.y)(),getAnnouncementPriority=function(messageBarType){switch(messageBarType){case MessageBar_types.f.blocked:case MessageBar_types.f.error:case MessageBar_types.f.severeWarning:return"assertive"}return"polite"},getRole=function(messageBarType){switch(messageBarType){case MessageBar_types.f.blocked:case MessageBar_types.f.error:case MessageBar_types.f.severeWarning:return"alert"}return"status"},MessageBarBase=react.forwardRef(function(props,ref){var _a=(0,useBoolean.k)(!1),expandSingleLine=_a[0],toggleExpandSingleLine=_a[1].toggle,labelId=(0,useId.M)("MessageBar"),actions=props.actions,className=props.className,children=props.children,overflowButtonAriaLabel=props.overflowButtonAriaLabel,dismissIconProps=props.dismissIconProps,styles=props.styles,theme=props.theme,_b=props.messageBarType,messageBarType=void 0===_b?MessageBar_types.f.info:_b,_c=props.onDismiss,onDismiss=void 0===_c?void 0:_c,_d=props.isMultiline,isMultiline=void 0===_d||_d,truncated=props.truncated,dismissButtonAriaLabel=props.dismissButtonAriaLabel,messageBarIconProps=props.messageBarIconProps,role=props.role,_e=props.delayedRender,expandButtonProps=props.expandButtonProps,nativeProps=(0,properties.pq)(props,properties.iY,["className","role"]),classNames=getClassNames(styles,{theme:theme,messageBarType:messageBarType||MessageBar_types.f.info,onDismiss:void 0!==onDismiss,actions:void 0!==actions,truncated:truncated,isMultiline:isMultiline,expandSingleLine:expandSingleLine,className:className}),actionsDiv=actions?react.createElement("div",{className:classNames.actions},actions):null,dismissButton=onDismiss?react.createElement(IconButton.h,{disabled:!1,className:classNames.dismissal,onClick:onDismiss,iconProps:dismissIconProps||{iconName:"Clear"},title:dismissButtonAriaLabel,ariaLabel:dismissButtonAriaLabel}):null;return react.createElement("div",(0,tslib_es6.pi)({ref:ref,className:classNames.root},actions||onDismiss?{"aria-describedby":labelId,role:"region"}:{}),react.createElement("div",{className:classNames.content},react.createElement("div",{className:classNames.iconContainer,"aria-hidden":!0},messageBarIconProps?react.createElement(Icon.J,(0,tslib_es6.pi)({},messageBarIconProps,{className:(0,css.i)(classNames.icon,messageBarIconProps.className)})):react.createElement(Icon.J,{iconName:ICON_MAP[messageBarType],className:classNames.icon})),react.createElement("div",{className:classNames.text,id:labelId,role:role||getRole(messageBarType),"aria-live":getAnnouncementPriority(messageBarType)},react.createElement("span",(0,tslib_es6.pi)({className:classNames.innerText},nativeProps),void 0===_e||_e?react.createElement(DelayedRender.U,null,react.createElement("span",null,children)):react.createElement("span",null,children))),!isMultiline&&!actionsDiv&&truncated&&react.createElement("div",{className:classNames.expandSingleLine},react.createElement(IconButton.h,(0,tslib_es6.pi)({disabled:!1,className:classNames.expand,onClick:toggleExpandSingleLine,iconProps:{iconName:expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:overflowButtonAriaLabel,"aria-expanded":expandSingleLine},expandButtonProps))),!isMultiline&&actionsDiv,!isMultiline&&dismissButton&&react.createElement("div",{className:classNames.dismissSingleLine},dismissButton),isMultiline&&dismissButton),isMultiline&&actionsDiv)});MessageBarBase.displayName="MessageBar";var lib=__webpack_require__(3349),GlobalClassNames={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},backgroundColor=((MessageBar_styles_a={})[MessageBar_types.f.error]="errorBackground",MessageBar_styles_a[MessageBar_types.f.blocked]="errorBackground",MessageBar_styles_a[MessageBar_types.f.success]="successBackground",MessageBar_styles_a[MessageBar_types.f.warning]="warningBackground",MessageBar_styles_a[MessageBar_types.f.severeWarning]="severeWarningBackground",MessageBar_styles_a[MessageBar_types.f.info]="infoBackground",MessageBar_styles_a),highContrastBackgroundColor=((_b={})[MessageBar_types.f.error]="rgba(255, 0, 0, 0.3)",_b[MessageBar_types.f.blocked]="rgba(255, 0, 0, 0.3)",_b[MessageBar_types.f.success]="rgba(48, 241, 73, 0.3)",_b[MessageBar_types.f.warning]="rgba(255, 254, 57, 0.3)",_b[MessageBar_types.f.severeWarning]="rgba(255, 0, 0, 0.3)",_b[MessageBar_types.f.info]="Window",_b),iconColor=((_c={})[MessageBar_types.f.error]="errorIcon",_c[MessageBar_types.f.blocked]="errorIcon",_c[MessageBar_types.f.success]="successIcon",_c[MessageBar_types.f.warning]="warningIcon",_c[MessageBar_types.f.severeWarning]="severeWarningIcon",_c[MessageBar_types.f.info]="infoIcon",_c),MessageBar=(0,styled.z)(MessageBarBase,function(props){var _a,_b,_c,_d,_e,theme=props.theme,className=props.className,onDismiss=props.onDismiss,truncated=props.truncated,isMultiline=props.isMultiline,expandSingleLine=props.expandSingleLine,_f=props.messageBarType,messageBarType=void 0===_f?MessageBar_types.f.info:_f,semanticColors=theme.semanticColors,fonts=theme.fonts,SmallScreenSelector=(0,lib.sK)(0,lib.mV),classNames=(0,lib.Cn)(GlobalClassNames,theme),dismissalAndExpandIconStyle={fontSize:lib.ld.xSmall,height:10,lineHeight:"10px",color:semanticColors.messageText,selectors:((_a={})[lib.qJ]=(0,tslib_es6.pi)((0,tslib_es6.pi)({},(0,lib.xM)()),{color:"WindowText"}),_a)},dismissalAndExpandStyle=[(0,lib.GL)(theme,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":dismissalAndExpandIconStyle,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[classNames.root,fonts.medium,messageBarType===MessageBar_types.f.error&&classNames.error,messageBarType===MessageBar_types.f.blocked&&classNames.blocked,messageBarType===MessageBar_types.f.severeWarning&&classNames.severeWarning,messageBarType===MessageBar_types.f.success&&classNames.success,messageBarType===MessageBar_types.f.warning&&classNames.warning,isMultiline?classNames.multiline:classNames.singleline,!isMultiline&&onDismiss&&classNames.dismissalSingleLine,!isMultiline&&truncated&&classNames.expandingSingleLine,{background:semanticColors[backgroundColor[messageBarType]],color:semanticColors.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:((_b={".ms-Link":{color:semanticColors.messageLink,selectors:{":hover":{color:semanticColors.messageLinkHovered}}}})[lib.qJ]=(0,tslib_es6.pi)((0,tslib_es6.pi)({},(0,lib.xM)()),{background:highContrastBackgroundColor[messageBarType],border:"1px solid WindowText",color:"WindowText"}),_b)},isMultiline&&{flexDirection:"column"},className],content:[classNames.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[classNames.iconContainer,{fontSize:lib.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:semanticColors[iconColor[messageBarType]],selectors:((_c={})[lib.qJ]=(0,tslib_es6.pi)((0,tslib_es6.pi)({},(0,lib.xM)()),{color:"WindowText"}),_c)},text:[classNames.text,(0,tslib_es6.pi)((0,tslib_es6.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},fonts.small),{selectors:((_d={})[lib.qJ]=(0,tslib_es6.pi)({},(0,lib.xM)()),_d)}),!onDismiss&&{marginRight:12}],innerText:[classNames.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},truncated&&{overflow:"visible",whiteSpace:"pre-wrap"},!isMultiline&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!isMultiline&&!truncated&&{selectors:((_e={})[SmallScreenSelector]={overflow:"visible",whiteSpace:"pre-wrap"},_e)},expandSingleLine&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:classNames.dismissSingleLine,expandSingleLine:classNames.expandSingleLine,dismissal:[classNames.dismissal,dismissalAndExpandStyle],expand:[classNames.expand,dismissalAndExpandStyle],actions:[isMultiline?classNames.actions:classNames.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",forcedColorAdjust:"auto",MsHighContrastAdjust:"auto",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},isMultiline&&{marginBottom:8},onDismiss&&!isMultiline&&{marginRight:0}]}},void 0,{scope:"MessageBar"})},8290:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var MessageBarType,MessageBarType1;__webpack_require__.d(__webpack_exports__,{f:function(){return MessageBarType}}),(MessageBarType1=MessageBarType||(MessageBarType={}))[MessageBarType1.info=0]="info",MessageBarType1[MessageBarType1.error=1]="error",MessageBarType1[MessageBarType1.blocked=2]="blocked",MessageBarType1[MessageBarType1.severeWarning=3]="severeWarning",MessageBarType1[MessageBarType1.success=4]="success",MessageBarType1[MessageBarType1.warning=5]="warning"},8262:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{U:function(){return DelayedRender}});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3499),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3370),_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6451),DelayedRender=function(_super){function DelayedRender(props){var _this=_super.call(this,props)||this;return _this.state={isRendered:void 0===(0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__.J)()},_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.ZT)(DelayedRender,_super),DelayedRender.prototype.componentDidMount=function(){var _this=this,delay=this.props.delay;this._timeoutId=window.setTimeout(function(){_this.setState({isRendered:!0})},delay)},DelayedRender.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},DelayedRender.prototype.render=function(){return this.state.isRendered?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children):null},DelayedRender.defaultProps={delay:0},DelayedRender}(react__WEBPACK_IMPORTED_MODULE_0__.Component)}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=8163)}),_N_E=__webpack_require__.O()}]);
//# sourceMappingURL=device-info-6f157a93cb66ddd9.js.map