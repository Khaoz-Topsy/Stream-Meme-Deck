(this["webpackJsonpassistantapps-memedeck"]=this["webpackJsonpassistantapps-memedeck"]||[]).push([[0],{24:function(e,t,i){},26:function(e,t,i){"use strict";i.r(t);var n,l=i(9),c=i.n(l),a=i(3),s=i(6),d=i(7),r=i(10),o=i(16),u=i(14),f=i(0),h=i.n(f),b=i(11),p=i(13);!function(e){e[e.image=0]="image",e[e.video=1]="video",e[e.text=2]="text"}(n||(n={}));var j=i(2),v=i.n(j),x=function e(){Object(d.a)(this,e)};x.width=200,x.zIndex=1;var m=i(1),g=function(e){return Object(m.jsx)("img",{src:URL.createObjectURL(e.file),onContextMenu:e.onChildClick,draggable:!1,alt:e.file.name})},O=function(e){return Object(m.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,onContextMenu:e.onChildClick,children:Object(m.jsx)("source",{src:URL.createObjectURL(e.file),type:"video/mp4",draggable:!1})})},F=i(12),S=function(e){return Object(m.jsx)("div",{onContextMenu:e.onChildClick,children:Object(m.jsx)(F.a,{defaultValue:"Default Text"})})},k=function(e){var t=e.uuid,i=e.isSelected,l=e.clientX,c=e.clientY,a=e.media,s=e.zIndex,d={top:c,left:l,width:x.width,zIndex:s},r=function(n){var l,c;n.preventDefault(),i?null===e||void 0===e||null===(l=e.setSelectedFile)||void 0===l||l.call(e,""):null===e||void 0===e||null===(c=e.setSelectedFile)||void 0===c||c.call(e,t)},o=Object(m.jsx)("div",{children:"Something went wrong"});return a===n.image&&(o=Object(m.jsx)(g,{file:e.file,onChildClick:r})),a===n.video&&(o=Object(m.jsx)(O,{file:e.file,onChildClick:r})),a===n.text&&(o=Object(m.jsx)(S,{onChildClick:r})),Object(m.jsxs)("div",{className:v()("uploaded-media","noselect",{selected:i}),style:d,children:[o,Object(m.jsx)("div",{className:"meta noselect",children:i&&Object(m.jsxs)("span",{className:"abs-top-right noselect",children:["z-index:\xa0",s.toString()]})})]},"uploadedImg-".concat(t))},I=function(e){var t,i=null,l=Object(b.a)(e.files);try{for(l.s();!(t=l.n()).done;){var c=t.value;c.uuid===e.selectedFileUuid&&(i=Object(a.a)({},c))}}catch(s){l.e(s)}finally{l.f()}return Object(m.jsxs)("div",{className:"deck-items",children:[e.files.map((function(t){return Object(m.jsx)(k,Object(a.a)(Object(a.a)({},t),{},{isSelected:t.uuid===e.selectedFileUuid,setSelectedFile:e.setSelectedFile}),t.uuid)})),null!=i&&Object(m.jsx)(p.a,{target:".selected",className:"noselect",individualGroupable:!0,container:null,origin:!1,edge:!1,draggable:!0,throttleDrag:0,onDrag:function(e){var t=e.target,i=e.transform;t.style.transform=i},keepRatio:i.media!==n.text,resizable:!0,throttleResize:0,onResize:function(e){var t=e.target,i=e.width,n=e.height,l=e.delta;l[0]&&(t.style.width="".concat(i,"px")),l[1]&&(t.style.height="".concat(n,"px"))},rotatable:!0,throttleRotate:0,onRotate:function(e){var t=e.target,i=e.transform;t.style.transform=i}},"movable-".concat(i.uuid))]},"container")},C=i(15),U=i(28),D={image:["png","jpg","gif"],video:["mp4","mkv"]},_=function(e){try{var t=/(?:\.([^.]+))?$/.exec(e);return null==t?null:t[1]}catch(i){return null}},y=function(e){var t=Object(f.useState)(!1),i=Object(C.a)(t,2),l=i[0],c=i[1],a=function(t,i,l){for(var c=0;c<t.length;c++){var a=t[c],s=a;"file"===a.kind&&(s=a.getAsFile());var d=_(s.name),r=!1;null!=d&&(r=D.video.includes(d)),e.addFile({file:s,media:r?n.video:n.image,uuid:Object(U.a)(),clientX:i,clientY:l,zIndex:x.zIndex})}};return Object(m.jsx)("div",{className:v()("drag-drop-zone",{"drag-is-over":l}),onDragEnter:function(){return c(!0)},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDragLeave:function(){return c(!1)},onDrop:function(e){e.preventDefault(),e.dataTransfer.items&&a(e.dataTransfer.items,e.clientX,e.clientY),c(!1),e.stopPropagation()},onPaste:function(e){e.preventDefault(),e.clipboardData&&e.clipboardData.files&&e.clipboardData.files.length&&(e.clipboardData.files&&a(e.clipboardData.files,250,250),e.stopPropagation())},onDoubleClick:function(){e.addFile({file:{},media:n.text,uuid:Object(U.a)(),clientX:250,clientY:250,zIndex:x.zIndex})},onClick:e.onClick})},z=i(22),w=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e))._deselect=function(){return n.setSelectedFile("")},n._deleteFile=function(){null==n.state.selectedFileUuid||n.state.selectedFileUuid.length<10||n.setState((function(e){return{files:Object(s.a)(e.files.filter((function(t){return t.uuid!==e.selectedFileUuid}))),selectedFileUuid:""}}))},n._incZIndex=function(){return n._alterZIndex(1)},n._decZIndex=function(){return n._alterZIndex(-1)},n._alterZIndex=function(e){null==n.state.selectedFileUuid||n.state.selectedFileUuid.length<10||n.setState((function(t){var i=t.files.findIndex((function(e){return e.uuid===t.selectedFileUuid}));if(null==i)return null;var n=t.files[i].zIndex+e;n<=0&&(n=1);var l=Object(a.a)(Object(a.a)({},t.files[i]),{},{zIndex:n});return{files:[].concat(Object(s.a)(t.files.slice(0,i)),[l],Object(s.a)(t.files.slice(i+1)))}}))},n.addFile=function(e){n.setState((function(t){return{files:[].concat(Object(s.a)(t.files),[e])}}))},n.setSelectedFile=function(e){n.setState({selectedFileUuid:e})},n.state={files:[],selectedFileUuid:""},n}return Object(r.a)(i,[{key:"componentWillMount",value:function(){this.props.bindShortcut("esc",this._deselect),this.props.bindShortcut("del",this._deleteFile),this.props.bindShortcut("up",this._incZIndex),this.props.bindShortcut("down",this._decZIndex)}},{key:"componentWillUnmount",value:function(){this.props.unbindShortcut("esc",this._deselect),this.props.unbindShortcut("del",this._deleteFile),this.props.unbindShortcut("up",this._incZIndex),this.props.unbindShortcut("down",this._decZIndex)}},{key:"render",value:function(){var e=this,t=this.state,i=t.files,n=t.selectedFileUuid;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{addFile:this.addFile,onClick:function(){return e.setState({selectedFileUuid:""})}}),Object(m.jsx)(I,{files:i,selectedFileUuid:n,setSelectedFile:this.setSelectedFile})]})}}]),i}(h.a.PureComponent),R=z.mouseTrap(w);i(24),i(25);c.a.render(Object(m.jsx)(R,{}),document.getElementById("deck"))}},[[26,1,2]]]);
//# sourceMappingURL=main.cb9b98b9.chunk.js.map