(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./imageGallery/index.js":function(e,a,t){"use strict";t.r(a);var i=t("./node_modules/vc-cake/index.js"),n=t.n(i),l=t("./node_modules/@babel/runtime/helpers/extends.js"),r=t.n(l),o=t("./node_modules/@babel/runtime/helpers/typeof.js"),s=t.n(o),c=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),g=t.n(c),m=t("./node_modules/@babel/runtime/helpers/createClass.js"),p=t.n(m),u=t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),d=t.n(u),h=t("./node_modules/@babel/runtime/helpers/inherits.js"),v=t.n(h),f=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),b=t.n(f),y=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),x=t.n(y),w=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),k=t.n(w),S=t("./node_modules/react/index.js"),G=t.n(S);function C(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=x()(e);if(a){var n=x()(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return b()(this,t)}}var j=function(e){v()(t,e);var a=C(t);function t(e){var i;return g()(this,t),i=a.call(this,e),k()(d()(i),"imageSources",[]),k()(d()(i),"imageOrder",{}),i.createCustomSizeImage=i.createCustomSizeImage.bind(d()(i)),i}return p()(t,[{key:"componentDidMount",value:function(){this.prepareImage(this.props.atts.image)}},{key:"componentWillReceiveProps",value:function(e){this.imageSources=[],this.imageOrder={},this.prepareImage(e.atts.image)}},{key:"prepareImage",value:function(e){var a=this;if(e.length&&"object"===s()(e[0])){var t=[];e.forEach((function(e,i){var n=e;n.full=n.id?n.full:a.getImageUrl(n.full),n.id=n.id?n.id:Math.random(),t.push(e)})),e=t,this.setImageOrder(e),this.resizeImage(e)}var i=[];e.forEach((function(t){e&&e.id,i.push({imgSrc:a.getImageUrl(t)})})),this.setImgSrcState(i)}},{key:"setImageOrder",value:function(e){var a=this;e.forEach((function(e,t){a.imageOrder[t]=e.id}))}},{key:"checkImageSize",value:function(e,a,t){var i=new window.Image;i.onload=function(){var n={width:i.width,height:i.height};a(e,n,t)},i.src=e.full}},{key:"resizeImage",value:function(e){var a=this;e.forEach((function(t){a.checkImageSize(t,a.createCustomSizeImage,e.length)}))}},{key:"createCustomSizeImage",value:function(e,a,t){e.orientation=this.checkOrientation(a),this.imageSources.filter((function(a){return a.id===e.id})).length||this.imageSources.push(e),this.imageSources.length===t&&this.orderImages()}},{key:"orderImages",value:function(){var e=this,a=[];this.imageSources.forEach((function(t,i){var n=e.imageSources.filter((function(a){return a.id===e.imageOrder[i]}));n[0]&&a.push({imgSrc:e.getImageUrl(n[0],"large"),orientation:n[0].orientation,originalSrc:e.getImageUrl(n[0]),alt:n[0].alt,title:n[0].title})})),this.setImgSrcState(a)}},{key:"checkOrientation",value:function(e){return e.width>=e.height?"landscape":"portrait"}},{key:"setImgSrcState",value:function(e){this.setState({imgSrc:e})}},{key:"render",value:function(){var e=this.props,a=e.id,t=e.atts,i=e.editor,n=t.image,l=t.shape,o=t.clickableOptions,s=t.showCaption,c=t.customClass,g=t.metaCustomId,m=t.showCaptionGeneral,p=t.captionAlignment,u="vce-image-gallery",d={},h="div",v=this.state&&this.state.imgSrc;"string"==typeof c&&c&&(u+=" "+c);var f=this.getMixinData("imageGalleryGap");f&&(u+=" vce-image-gallery--gap-".concat(f.selector)),(f=this.getMixinData("imageGalleryColumns"))&&(u+=" vce-image-gallery--columns-".concat(f.selector)),"rounded"===l&&(u+=" vce-image-gallery--border-rounded"),"round"===l&&(u+=" vce-image-gallery--border-round"),g&&(d.id=g),m&&p&&(u+=" vce-image-gallery-caption--align-".concat(p));var b=[];v&&v.forEach((function(e,t){var i={},l="vce-image-gallery-item-inner",c="vce-image-gallery-img",g={alt:e&&e.alt?e.alt:"",title:e&&e.title?e.title:""},p={};if("portrait"===e.orientation&&(c+=" vce-image-gallery-img--orientation-portrait"),"url"===o&&n[t].link&&n[t].link.url){h="a";var u=n[t].link;i={href:u.url,title:u.title,target:u.targetBlank?"_blank":void 0,rel:u.relNofollow?"nofollow":void 0}}else"imageNewTab"===o?(h="a",i={href:e.originalSrc||e.imgSrc,target:"_blank"}):"lightbox"===o?(h="a",i={href:e.originalSrc||e.imgSrc,"data-lightbox":"lightbox-".concat(a)}):"photoswipe"===o&&(h="a",i={href:e.originalSrc||e.imgSrc,"data-photoswipe-image":a,"data-photoswipe-index":t},s&&(i["data-photoswipe-caption"]=n[t].caption),d["data-photoswipe-gallery"]=a,p["data-photoswipe-item"]="photoswipe-".concat(a));n[t].filter&&"normal"!==n[t].filter&&(l+=" vce-image-filter--".concat(n[t].filter));var v="";m&&n[t].caption&&(v=G.a.createElement("figcaption",null,n[t].caption)),b.push(G.a.createElement("div",r()({className:"vce-image-gallery-item",key:"vce-image-gallery-item-".concat(t,"-").concat(a)},p),G.a.createElement("figure",{className:"vce-image-gallery-item-inner-wrapper"},G.a.createElement(h,r()({},i,{className:l}),G.a.createElement("img",r()({className:c,src:e.imgSrc},g))),v)))}));var y=this.applyDO("all");return G.a.createElement("div",r()({className:u},i,d),G.a.createElement("div",r()({className:"vce-image-gallery-wrapper vce",id:"el-"+a},y),G.a.createElement("div",{className:"vce-image-gallery-list"},b)))}}]),t}(n.a.getService("api").elementComponent);(0,n.a.getService("cook").add)(t("./imageGallery/settings.json"),(function(e){e.add(j)}),{css:t("./node_modules/raw-loader/index.js!./imageGallery/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./imageGallery/editor.css"),mixins:{imageGalleryColumns:{mixin:t("./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryColumns.pcss")},imageGalleryGap:{mixin:t("./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryGap.pcss")}}},"")},"./imageGallery/settings.json":function(e){e.exports=JSON.parse('{"image":{"type":"attachimage","access":"public","value":["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"],"options":{"multiple":true,"onChange":{"rules":{"clickableOptions":{"rule":"value","options":{"value":"url"}}},"actions":[{"action":"attachImageUrls"}]},"url":false,"imageFilter":true}},"shape":{"type":"buttonGroup","access":"public","value":"square","options":{"label":"Shape","values":[{"label":"Square","value":"square","icon":"vcv-ui-icon-attribute-shape-square"},{"label":"Rounded","value":"rounded","icon":"vcv-ui-icon-attribute-shape-rounded"},{"label":"Round","value":"round","icon":"vcv-ui-icon-attribute-shape-round"}]}},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["clickableOptions","showCaption","image","showCaptionGeneral","captionAlignment","columns","gap","shape","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from the custom CSS option."}},"clickableOptions":{"type":"dropdown","access":"public","value":"lightbox","options":{"label":"OnClick action","description":"Choose an event performed when clicking on the image.","values":[{"label":"None","value":""},{"label":"Lightbox","value":"lightbox"},{"label":"PhotoSwipe","value":"photoswipe"},{"label":"Open the image in a new tab","value":"imageNewTab"},{"label":"Link selector","value":"url"}]}},"showCaption":{"type":"toggle","access":"public","value":false,"options":{"label":"Show the image caption in gallery view","onChange":{"rules":{"clickableOptions":{"rule":"value","options":{"value":"photoswipe"}}},"actions":[{"action":"toggleVisibility"}]}}},"showCaptionGeneral":{"type":"toggle","access":"public","value":false,"options":{"label":"Show the image caption below every image"}},"captionAlignment":{"type":"buttonGroup","access":"public","value":"left","options":{"label":"Caption alignment","values":[{"label":"Left","value":"left","icon":"vcv-ui-icon-attribute-alignment-left"},{"label":"Center","value":"center","icon":"vcv-ui-icon-attribute-alignment-center"},{"label":"Right","value":"right","icon":"vcv-ui-icon-attribute-alignment-right"}],"onChange":{"rules":{"showCaptionGeneral":{"rule":"toggle"}},"actions":[{"action":"toggleVisibility"}]}}},"sharedAssetsLibrary":{"access":"protected","type":"string","value":{"libraries":[{"rules":{"clickableOptions":{"rule":"value","options":{"value":"lightbox"}}},"libsNames":["lightbox"]},{"rules":{"clickableOptions":{"rule":"value","options":{"value":"photoswipe"}}},"libsNames":["photoswipe"]}]}},"gap":{"type":"number","access":"public","value":"10","options":{"label":"Gap","description":"Enter the gap in pixels (example: 5).","cssMixin":{"mixin":"imageGalleryGap","property":"gap","namePattern":"[\\\\da-f]+"}}},"columns":{"type":"number","access":"public","value":"3","options":{"label":"Number of columns","cssMixin":{"mixin":"imageGalleryColumns","property":"columns","namePattern":"[\\\\da-f]+"}}},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only)."}},"tag":{"access":"protected","type":"string","value":"imageGallery"}}')},"./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryColumns.pcss":function(e,a){e.exports="@media (min-width: 544px) {\n  .vce-image-gallery {\n\t&--columns-$selector {\n\t  .vce-image-gallery-item {\n\t    @if $columns != false {\n\t      -webkit-flex: 0 0 calc(100% / $columns);\n\t          -ms-flex: 0 0 calc(100% / $columns);\n\t              flex: 0 0 calc(100% / $columns);\n\t      max-width: calc(100% / $columns);\n\t    }\n\t  }\n\t}\n  }\n}\n\n"},"./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryGap.pcss":function(e,a){e.exports=".vce-image-gallery {\n  &--gap-$selector {\n    .vce-image-gallery-list {\n      @if $gap != false {\n        margin-left: calc(-$(gap)px / 2);\n        margin-right: calc(-$(gap)px / 2);\n        margin-bottom: -$(gap)px;\n      }\n    }\n    .vce-image-gallery-item {\n      @if $gap != false {\n        padding-left: calc($(gap)px / 2);\n        padding-right: calc($(gap)px / 2);\n        margin-bottom: $(gap)px;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./imageGallery/editor.css":function(e,a){e.exports=".vce-image-gallery {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./imageGallery/styles.css":function(e,a){e.exports='.vce-image-gallery-wrapper {\n  overflow: hidden;\n}\n\n.vce-image-gallery-list {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.vce-image-gallery-item {\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.vce-image-gallery-item-inner-wrapper {\n  overflow: hidden;\n  margin: 0;\n}\n\n.vce-image-gallery-item-inner {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n.vce-image-gallery-item-inner::after {\n  content: "";\n  padding-bottom: 100%;\n  display: block;\n}\n\n.vce-image-gallery-item-inner img.vce-image-gallery-img {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  width: auto;\n  max-width: none;\n  height: 101%;\n}\n\n.vce-image-gallery-item-inner img.vce-image-gallery-img--orientation-portrait {\n  width: 101%;\n  height: auto;\n}\n\na.vce-image-gallery-item-inner {\n  color: transparent;\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\na.vce-image-gallery-item-inner:hover,\na.vce-image-gallery-item-inner:focus {\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.vce-image-gallery--border-rounded .vce-image-gallery-item-inner {\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.vce-image-gallery--border-round .vce-image-gallery-item-inner {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.vce-image-gallery-item-inner-wrapper figcaption {\n  font-style: italic;\n  margin-top: 10px;\n}\n\n.vce-image-gallery-caption--align-left figcaption {\n  text-align: left;\n}\n\n.vce-image-gallery-caption--align-center figcaption {\n  text-align: center;\n}\n\n.vce-image-gallery-caption--align-right figcaption {\n  text-align: right;\n}'}},[["./imageGallery/index.js"]]]);