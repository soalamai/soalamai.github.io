webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.header {\r\n  background-color: rgb(119, 136, 153);\r\nheight:70px;\r\n\r\nwidth:80%;\r\n}\r\n\r\np {\r\nheight:50px;\r\n}\r\n\r\n.menu-div {\r\n  width: 35px;\r\nheight: 5px;\r\nbackground-color: white;\r\nmargin: 5px 0;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.half-full-width {\r\n  width: 80%;\r\n}\r\n\r\n.mat-slider-horizontal {\r\nwidth: 100%;\r\n}\r\n\r\ntd {\r\npadding:5px 5px 5px10px;\r\nmargin:5px 5px 5px10px;\r\n\r\n}\r\n\r\n\r\ntable {\r\n  border-spacing: 5px;\r\n}\r\n.td-space {\r\nwidth:10%;\r\n/* height:10px; */\r\n}\r\n\r\n.td-space2 {\r\n  width:1%;\r\n  /* height:10px; */\r\n  }\r\n\r\nh1, .h1 {\r\n  font-size: 3.8em;\r\n  line-height: 1.15em;\r\n}\r\n\r\nh2, .h2 {\r\n  color:white;\r\n font-size: 1.6em;\r\nvertical-align:text-bottom;\r\nmargin-left:10px;\r\nmargin-bottom:1px;\r\n}\r\n\r\nh3 {\r\n  color:white;\r\n   font-size: 1.0em;\r\n  vertical-align:text-middle;\r\n  margin-left:10px;\r\n  }\r\n.card .header {\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n  margin: 15px;\r\n  border-radius: 3px;\r\n  padding: 15px 0;\r\n  background-color: #FFFFFF;\r\n}\r\n.card .header-primary {\r\n  background: linear-gradient(60deg, #ab47bc, #7b1fa2);\r\n}\r\n.card .header-info {\r\n  background: linear-gradient(60deg, #29b6f6, #0288d1);\r\n}\r\n\r\nmain {\r\n  background: #FFFFFF;\r\n  position: relative;\r\n  z-index: 3;\r\nwidth:80%;\r\n}\r\n\r\n.main-raised {\r\n  margin: -60px 30px 0px;\r\n  border-radius: 6px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n.checkbox label {\r\n  cursor: pointer;\r\n  padding-left: 0;\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .checkbox label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .checkbox label:hover, .form-group.is-focused .checkbox label:focus {\r\n  color: rgba(0,0,0, .54);\r\n}\r\nfieldset[disabled] .form-group.is-focused .checkbox label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n\r\n\r\n.form-control,\r\n.form-group .form-control {\r\n  border: 0;\r\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-size: 0 2px, 100% 1px;\r\n  background-repeat: no-repeat;\r\n  background-position: center bottom, center calc(100% - 1px);\r\n  background-color: transparent;\r\n  transition: background 0s ease-out;\r\n  float: none;\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n  font-weight: 400;\r\n}\r\n.form-control::-moz-placeholder,\r\n.form-group .form-control::-moz-placeholder {\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control:-ms-input-placeholder,\r\n.form-group .form-control:-ms-input-placeholder {\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control::-webkit-input-placeholder,\r\n.form-group .form-control::-webkit-input-placeholder {\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control[readonly], .form-control[disabled], fieldset[disabled] .form-control,\r\n.form-group .form-control[readonly],\r\n.form-group .form-control[disabled], fieldset[disabled]\r\n.form-group .form-control {\r\n  background-color: transparent;\r\n}\r\n.form-control[disabled], fieldset[disabled] .form-control,\r\n.form-group .form-control[disabled], fieldset[disabled]\r\n.form-group .form-control {\r\n  background-image: none;\r\n  border-bottom: 1px dotted #D2D2D2;\r\n}\r\n\r\n.form-group {\r\n  position: relative;\r\n}\r\n.form-group.label-static label.control-label, .form-group.label-placeholder label.control-label, .form-group.label-floating label.control-label {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  transition: 0.3s ease all;\r\n}\r\n.form-group.label-floating label.control-label {\r\n  will-change: left, top, contents;\r\n}\r\n.form-group.label-placeholder:not(.is-empty) label.control-label {\r\n  display: none;\r\n}\r\n.form-group .help-block {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.form-group.is-focused .form-control {\r\n  outline: none;\r\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-size: 100% 2px, 100% 1px;\r\n  box-shadow: none;\r\n  transition-duration: 0.3s;\r\n}\r\n.form-group.is-focused .form-control .material-input:after {\r\n  background-color: #9c27b0;\r\n}\r\n.form-group.is-focused label,\r\n.form-group.is-focused label.control-label {\r\n  color: #9c27b0;\r\n}\r\n.form-group.is-focused.label-placeholder label,\r\n.form-group.is-focused.label-placeholder label.control-label {\r\n  color: #AAAAAA;\r\n}\r\n\r\nlabel.control-label {\r\n  font-size: 11px;\r\n  line-height: 1.07143;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n\r\n.form-group .help-block {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.form-group.is-focused .form-control {\r\n  outline: none;\r\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-size: 100% 2px, 100% 1px;\r\n  box-shadow: none;\r\n  transition-duration: 0.3s;\r\n}\r\n.form-group.is-focused .form-control .material-input:after {\r\n  background-color: #9c27b0;\r\n}\r\n.form-group.is-focused label,\r\n.form-group.is-focused label.control-label {\r\n  color: #9c27b0;\r\n}\r\n.form-group.is-focused.label-placeholder label,\r\n.form-group.is-focused.label-placeholder label.control-label {\r\n  color: #AAAAAA;\r\n}\r\n.form-group.is-focused .help-block {\r\n  display: block;\r\n}\r\n.form-group.has-warning .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-warning.is-focused .form-control {\r\n  background-image: linear-gradient(#fbc02d, #fbc02d), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-warning label.control-label,\r\n.form-group.has-warning .help-block {\r\n  color: #fbc02d;\r\n}\r\n.form-group.has-error .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-error.is-focused .form-control {\r\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-error label.control-label,\r\n.form-group.has-error .help-block {\r\n  color: #f44336;\r\n}\r\n.form-group.has-success .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-success.is-focused .form-control {\r\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-success label.control-label,\r\n.form-group.has-success .help-block {\r\n  color: #4caf50;\r\n}\r\n.form-group.has-info .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-info.is-focused .form-control {\r\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-info label.control-label,\r\n.form-group.has-info .help-block {\r\n  color: #03a9f4;\r\n}\r\n.form-group textarea {\r\n  resize: none;\r\n}\r\n.form-group textarea ~ .form-control-highlight {\r\n  margin-top: -11px;\r\n}\r\n.form-group select {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n.form-group select ~ .material-input:after {\r\n  display: none;\r\n}\r\n\r\n.form-control {\r\n  margin-bottom: 7px;\r\n}\r\n.form-control::-moz-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control:-ms-input-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n\r\n.checkbox label,\r\n.radio label,\r\nlabel {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n\r\n\r\n/* W3.CSS 4.05 October 2017 by Jan Egil and Borge Refsnes */\r\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\r\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\r\na{background-color:transparent;-webkit-text-decoration-skip:objects}\r\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\r\ndfn{font-style:italic}mark{background:#ff0;color:#000}\r\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\r\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\r\nbutton,input{overflow:visible}button,select{text-transform:none}\r\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\r\n[type=checkbox],[type=radio]{padding:0}\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n/* End extract */\r\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\r\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n.w3-image{max-width:100%;height:auto}img{margin-bottom:-5px}a{color:inherit}\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block;z-index:1}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\r\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{animation:w3-spin 2s infinite linear}@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\r\n.w3-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#bbb!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#ffeb3b!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-amber{color:#ffc107!important}\r\n.w3-text-aqua{color:#00ffff!important}\r\n.w3-text-light-blue{color:#87CEEB!important}\r\n.w3-text-brown{color:#795548!important}\r\n.w3-text-cyan{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-text-blue-gray{color:#607d8b!important}\r\n.w3-text-light-green{color:#8bc34a!important}\r\n.w3-text-indigo{color:#3f51b5!important}\r\n.w3-text-khaki{color:#b4aa50!important}\r\n.w3-text-lime{color:#cddc39!important}\r\n.w3-text-orange{color:#ff9800!important}\r\n.w3-text-deep-orange{color:#ff5722!important}\r\n.w3-text-pink{color:#e91e63!important}\r\n.w3-text-purple{color:#9c27b0!important}\r\n.w3-text-deep-purple{color:#673ab7!important}\r\n.w3-text-sand{color:#fdf5e6!important}\r\n.w3-text-teal{color:#009688!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#bbb!important}\r\n/* You can add global styles to this file, and also import other style files */\r\n\r\n/*!\r\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */\r\n/* FONT PATH\r\n * -------------------------- */\r\n\r\n\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n/* makes the font 33% larger relative to the icon container */\r\n.fa-lg {\r\n  font-size: 1.33333333em;\r\n  line-height: 0.75em;\r\n  vertical-align: -15%;\r\n}\r\n.fa-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-3x {\r\n  font-size: 3em;\r\n}\r\n.fa-4x {\r\n  font-size: 4em;\r\n}\r\n.fa-5x {\r\n  font-size: 5em;\r\n}\r\n.fa-fw {\r\n  width: 1.28571429em;\r\n  text-align: center;\r\n}\r\n.fa-ul {\r\n  padding-left: 0;\r\n  margin-left: 2.14285714em;\r\n  list-style-type: none;\r\n}\r\n.fa-ul > li {\r\n  position: relative;\r\n}\r\n.fa-li {\r\n  position: absolute;\r\n  left: -2.14285714em;\r\n  width: 2.14285714em;\r\n  top: 0.14285714em;\r\n  text-align: center;\r\n}\r\n.fa-li.fa-lg {\r\n  left: -1.85714286em;\r\n}\r\n.fa-border {\r\n  padding: .2em .25em .15em;\r\n  border: solid 0.08em #eeeeee;\r\n  border-radius: .1em;\r\n}\r\n.fa-pull-left {\r\n  float: left;\r\n}\r\n.fa-pull-right {\r\n  float: right;\r\n}\r\n.fa.fa-pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.fa-pull-right {\r\n  margin-left: .3em;\r\n}\r\n/* Deprecated as of 4.4.0 */\r\n.pull-right {\r\n  float: right;\r\n}\r\n.pull-left {\r\n  float: left;\r\n}\r\n.fa.pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.pull-right {\r\n  margin-left: .3em;\r\n}\r\n.fa-spin {\r\n  animation: fa-spin 2s infinite linear;\r\n}\r\n.fa-pulse {\r\n  animation: fa-spin 1s infinite steps(8);\r\n}\r\n@keyframes fa-spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.fa-rotate-90 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\r\n  transform: rotate(90deg);\r\n}\r\n.fa-rotate-180 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\r\n  transform: rotate(180deg);\r\n}\r\n.fa-rotate-270 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\r\n  transform: rotate(270deg);\r\n}\r\n.fa-flip-horizontal {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\r\n  transform: scale(-1, 1);\r\n}\r\n.fa-flip-vertical {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\r\n  transform: scale(1, -1);\r\n}\r\n:root .fa-rotate-90,\r\n:root .fa-rotate-180,\r\n:root .fa-rotate-270,\r\n:root .fa-flip-horizontal,\r\n:root .fa-flip-vertical {\r\n  -webkit-filter: none;\r\n          filter: none;\r\n}\r\n.fa-stack {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  vertical-align: middle;\r\n}\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.fa-stack-1x {\r\n  line-height: inherit;\r\n}\r\n.fa-stack-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-inverse {\r\n  color: #ffffff;\r\n}\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\r\n.fa-glass:before {\r\n  content: \"\\F000\";\r\n}\r\n.fa-music:before {\r\n  content: \"\\F001\";\r\n}\r\n.fa-search:before {\r\n  content: \"\\F002\";\r\n}\r\n.fa-envelope-o:before {\r\n  content: \"\\F003\";\r\n}\r\n.fa-heart:before {\r\n  content: \"\\F004\";\r\n}\r\n.fa-star:before {\r\n  content: \"\\F005\";\r\n}\r\n.fa-star-o:before {\r\n  content: \"\\F006\";\r\n}\r\n.fa-user:before {\r\n  content: \"\\F007\";\r\n}\r\n.fa-film:before {\r\n  content: \"\\F008\";\r\n}\r\n.fa-th-large:before {\r\n  content: \"\\F009\";\r\n}\r\n.fa-th:before {\r\n  content: \"\\F00A\";\r\n}\r\n.fa-th-list:before {\r\n  content: \"\\F00B\";\r\n}\r\n.fa-check:before {\r\n  content: \"\\F00C\";\r\n}\r\n.fa-remove:before,\r\n.fa-close:before,\r\n.fa-times:before {\r\n  content: \"\\F00D\";\r\n}\r\n.fa-search-plus:before {\r\n  content: \"\\F00E\";\r\n}\r\n.fa-search-minus:before {\r\n  content: \"\\F010\";\r\n}\r\n.fa-power-off:before {\r\n  content: \"\\F011\";\r\n}\r\n.fa-signal:before {\r\n  content: \"\\F012\";\r\n}\r\n.fa-gear:before,\r\n.fa-cog:before {\r\n  content: \"\\F013\";\r\n}\r\n.fa-trash-o:before {\r\n  content: \"\\F014\";\r\n}\r\n.fa-home:before {\r\n  content: \"\\F015\";\r\n}\r\n.fa-file-o:before {\r\n  content: \"\\F016\";\r\n}\r\n.fa-clock-o:before {\r\n  content: \"\\F017\";\r\n}\r\n.fa-road:before {\r\n  content: \"\\F018\";\r\n}\r\n.fa-download:before {\r\n  content: \"\\F019\";\r\n}\r\n.fa-arrow-circle-o-down:before {\r\n  content: \"\\F01A\";\r\n}\r\n.fa-arrow-circle-o-up:before {\r\n  content: \"\\F01B\";\r\n}\r\n.fa-inbox:before {\r\n  content: \"\\F01C\";\r\n}\r\n.fa-play-circle-o:before {\r\n  content: \"\\F01D\";\r\n}\r\n.fa-rotate-right:before,\r\n.fa-repeat:before {\r\n  content: \"\\F01E\";\r\n}\r\n.fa-refresh:before {\r\n  content: \"\\F021\";\r\n}\r\n.fa-list-alt:before {\r\n  content: \"\\F022\";\r\n}\r\n.fa-lock:before {\r\n  content: \"\\F023\";\r\n}\r\n.fa-flag:before {\r\n  content: \"\\F024\";\r\n}\r\n.fa-headphones:before {\r\n  content: \"\\F025\";\r\n}\r\n.fa-volume-off:before {\r\n  content: \"\\F026\";\r\n}\r\n.fa-volume-down:before {\r\n  content: \"\\F027\";\r\n}\r\n.fa-volume-up:before {\r\n  content: \"\\F028\";\r\n}\r\n.fa-qrcode:before {\r\n  content: \"\\F029\";\r\n}\r\n.fa-barcode:before {\r\n  content: \"\\F02A\";\r\n}\r\n.fa-tag:before {\r\n  content: \"\\F02B\";\r\n}\r\n.fa-tags:before {\r\n  content: \"\\F02C\";\r\n}\r\n.fa-book:before {\r\n  content: \"\\F02D\";\r\n}\r\n.fa-bookmark:before {\r\n  content: \"\\F02E\";\r\n}\r\n.fa-print:before {\r\n  content: \"\\F02F\";\r\n}\r\n.fa-camera:before {\r\n  content: \"\\F030\";\r\n}\r\n.fa-font:before {\r\n  content: \"\\F031\";\r\n}\r\n.fa-bold:before {\r\n  content: \"\\F032\";\r\n}\r\n.fa-italic:before {\r\n  content: \"\\F033\";\r\n}\r\n.fa-text-height:before {\r\n  content: \"\\F034\";\r\n}\r\n.fa-text-width:before {\r\n  content: \"\\F035\";\r\n}\r\n.fa-align-left:before {\r\n  content: \"\\F036\";\r\n}\r\n.fa-align-center:before {\r\n  content: \"\\F037\";\r\n}\r\n.fa-align-right:before {\r\n  content: \"\\F038\";\r\n}\r\n.fa-align-justify:before {\r\n  content: \"\\F039\";\r\n}\r\n.fa-list:before {\r\n  content: \"\\F03A\";\r\n}\r\n.fa-dedent:before,\r\n.fa-outdent:before {\r\n  content: \"\\F03B\";\r\n}\r\n.fa-indent:before {\r\n  content: \"\\F03C\";\r\n}\r\n.fa-video-camera:before {\r\n  content: \"\\F03D\";\r\n}\r\n.fa-photo:before,\r\n.fa-image:before,\r\n.fa-picture-o:before {\r\n  content: \"\\F03E\";\r\n}\r\n.fa-pencil:before {\r\n  content: \"\\F040\";\r\n}\r\n.fa-map-marker:before {\r\n  content: \"\\F041\";\r\n}\r\n.fa-adjust:before {\r\n  content: \"\\F042\";\r\n}\r\n.fa-tint:before {\r\n  content: \"\\F043\";\r\n}\r\n.fa-edit:before,\r\n.fa-pencil-square-o:before {\r\n  content: \"\\F044\";\r\n}\r\n.fa-share-square-o:before {\r\n  content: \"\\F045\";\r\n}\r\n.fa-check-square-o:before {\r\n  content: \"\\F046\";\r\n}\r\n.fa-arrows:before {\r\n  content: \"\\F047\";\r\n}\r\n.fa-step-backward:before {\r\n  content: \"\\F048\";\r\n}\r\n.fa-fast-backward:before {\r\n  content: \"\\F049\";\r\n}\r\n.fa-backward:before {\r\n  content: \"\\F04A\";\r\n}\r\n.fa-play:before {\r\n  content: \"\\F04B\";\r\n}\r\n.fa-pause:before {\r\n  content: \"\\F04C\";\r\n}\r\n.fa-stop:before {\r\n  content: \"\\F04D\";\r\n}\r\n.fa-forward:before {\r\n  content: \"\\F04E\";\r\n}\r\n.fa-fast-forward:before {\r\n  content: \"\\F050\";\r\n}\r\n.fa-step-forward:before {\r\n  content: \"\\F051\";\r\n}\r\n.fa-eject:before {\r\n  content: \"\\F052\";\r\n}\r\n.fa-chevron-left:before {\r\n  content: \"\\F053\";\r\n}\r\n.fa-chevron-right:before {\r\n  content: \"\\F054\";\r\n}\r\n.fa-plus-circle:before {\r\n  content: \"\\F055\";\r\n}\r\n.fa-minus-circle:before {\r\n  content: \"\\F056\";\r\n}\r\n.fa-times-circle:before {\r\n  content: \"\\F057\";\r\n}\r\n.fa-check-circle:before {\r\n  content: \"\\F058\";\r\n}\r\n.fa-question-circle:before {\r\n  content: \"\\F059\";\r\n}\r\n.fa-info-circle:before {\r\n  content: \"\\F05A\";\r\n}\r\n.fa-crosshairs:before {\r\n  content: \"\\F05B\";\r\n}\r\n.fa-times-circle-o:before {\r\n  content: \"\\F05C\";\r\n}\r\n.fa-check-circle-o:before {\r\n  content: \"\\F05D\";\r\n}\r\n.fa-ban:before {\r\n  content: \"\\F05E\";\r\n}\r\n.fa-arrow-left:before {\r\n  content: \"\\F060\";\r\n}\r\n.fa-arrow-right:before {\r\n  content: \"\\F061\";\r\n}\r\n.fa-arrow-up:before {\r\n  content: \"\\F062\";\r\n}\r\n.fa-arrow-down:before {\r\n  content: \"\\F063\";\r\n}\r\n.fa-mail-forward:before,\r\n.fa-share:before {\r\n  content: \"\\F064\";\r\n}\r\n.fa-expand:before {\r\n  content: \"\\F065\";\r\n}\r\n.fa-compress:before {\r\n  content: \"\\F066\";\r\n}\r\n.fa-plus:before {\r\n  content: \"\\F067\";\r\n}\r\n.fa-minus:before {\r\n  content: \"\\F068\";\r\n}\r\n.fa-asterisk:before {\r\n  content: \"\\F069\";\r\n}\r\n.fa-exclamation-circle:before {\r\n  content: \"\\F06A\";\r\n}\r\n.fa-gift:before {\r\n  content: \"\\F06B\";\r\n}\r\n.fa-leaf:before {\r\n  content: \"\\F06C\";\r\n}\r\n.fa-fire:before {\r\n  content: \"\\F06D\";\r\n}\r\n.fa-eye:before {\r\n  content: \"\\F06E\";\r\n}\r\n.fa-eye-slash:before {\r\n  content: \"\\F070\";\r\n}\r\n.fa-warning:before,\r\n.fa-exclamation-triangle:before {\r\n  content: \"\\F071\";\r\n}\r\n.fa-plane:before {\r\n  content: \"\\F072\";\r\n}\r\n.fa-calendar:before {\r\n  content: \"\\F073\";\r\n}\r\n.fa-random:before {\r\n  content: \"\\F074\";\r\n}\r\n.fa-comment:before {\r\n  content: \"\\F075\";\r\n}\r\n.fa-magnet:before {\r\n  content: \"\\F076\";\r\n}\r\n.fa-chevron-up:before {\r\n  content: \"\\F077\";\r\n}\r\n.fa-chevron-down:before {\r\n  content: \"\\F078\";\r\n}\r\n.fa-retweet:before {\r\n  content: \"\\F079\";\r\n}\r\n.fa-shopping-cart:before {\r\n  content: \"\\F07A\";\r\n}\r\n.fa-folder:before {\r\n  content: \"\\F07B\";\r\n}\r\n.fa-folder-open:before {\r\n  content: \"\\F07C\";\r\n}\r\n.fa-arrows-v:before {\r\n  content: \"\\F07D\";\r\n}\r\n.fa-arrows-h:before {\r\n  content: \"\\F07E\";\r\n}\r\n.fa-bar-chart-o:before,\r\n.fa-bar-chart:before {\r\n  content: \"\\F080\";\r\n}\r\n.fa-twitter-square:before {\r\n  content: \"\\F081\";\r\n}\r\n.fa-facebook-square:before {\r\n  content: \"\\F082\";\r\n}\r\n.fa-camera-retro:before {\r\n  content: \"\\F083\";\r\n}\r\n.fa-key:before {\r\n  content: \"\\F084\";\r\n}\r\n.fa-gears:before,\r\n.fa-cogs:before {\r\n  content: \"\\F085\";\r\n}\r\n.fa-comments:before {\r\n  content: \"\\F086\";\r\n}\r\n.fa-thumbs-o-up:before {\r\n  content: \"\\F087\";\r\n}\r\n.fa-thumbs-o-down:before {\r\n  content: \"\\F088\";\r\n}\r\n.fa-star-half:before {\r\n  content: \"\\F089\";\r\n}\r\n.fa-heart-o:before {\r\n  content: \"\\F08A\";\r\n}\r\n.fa-sign-out:before {\r\n  content: \"\\F08B\";\r\n}\r\n.fa-linkedin-square:before {\r\n  content: \"\\F08C\";\r\n}\r\n.fa-thumb-tack:before {\r\n  content: \"\\F08D\";\r\n}\r\n.fa-external-link:before {\r\n  content: \"\\F08E\";\r\n}\r\n.fa-sign-in:before {\r\n  content: \"\\F090\";\r\n}\r\n.fa-trophy:before {\r\n  content: \"\\F091\";\r\n}\r\n.fa-github-square:before {\r\n  content: \"\\F092\";\r\n}\r\n.fa-upload:before {\r\n  content: \"\\F093\";\r\n}\r\n.fa-lemon-o:before {\r\n  content: \"\\F094\";\r\n}\r\n.fa-phone:before {\r\n  content: \"\\F095\";\r\n}\r\n.fa-square-o:before {\r\n  content: \"\\F096\";\r\n}\r\n.fa-bookmark-o:before {\r\n  content: \"\\F097\";\r\n}\r\n.fa-phone-square:before {\r\n  content: \"\\F098\";\r\n}\r\n.fa-twitter:before {\r\n  content: \"\\F099\";\r\n}\r\n.fa-facebook-f:before,\r\n.fa-facebook:before {\r\n  content: \"\\F09A\";\r\n}\r\n.fa-github:before {\r\n  content: \"\\F09B\";\r\n}\r\n.fa-unlock:before {\r\n  content: \"\\F09C\";\r\n}\r\n.fa-credit-card:before {\r\n  content: \"\\F09D\";\r\n}\r\n.fa-feed:before,\r\n.fa-rss:before {\r\n  content: \"\\F09E\";\r\n}\r\n.fa-hdd-o:before {\r\n  content: \"\\F0A0\";\r\n}\r\n.fa-bullhorn:before {\r\n  content: \"\\F0A1\";\r\n}\r\n.fa-bell:before {\r\n  content: \"\\F0F3\";\r\n}\r\n.fa-certificate:before {\r\n  content: \"\\F0A3\";\r\n}\r\n.fa-hand-o-right:before {\r\n  content: \"\\F0A4\";\r\n}\r\n.fa-hand-o-left:before {\r\n  content: \"\\F0A5\";\r\n}\r\n.fa-hand-o-up:before {\r\n  content: \"\\F0A6\";\r\n}\r\n.fa-hand-o-down:before {\r\n  content: \"\\F0A7\";\r\n}\r\n.fa-arrow-circle-left:before {\r\n  content: \"\\F0A8\";\r\n}\r\n.fa-arrow-circle-right:before {\r\n  content: \"\\F0A9\";\r\n}\r\n.fa-arrow-circle-up:before {\r\n  content: \"\\F0AA\";\r\n}\r\n.fa-arrow-circle-down:before {\r\n  content: \"\\F0AB\";\r\n}\r\n.fa-globe:before {\r\n  content: \"\\F0AC\";\r\n}\r\n.fa-wrench:before {\r\n  content: \"\\F0AD\";\r\n}\r\n.fa-tasks:before {\r\n  content: \"\\F0AE\";\r\n}\r\n.fa-filter:before {\r\n  content: \"\\F0B0\";\r\n}\r\n.fa-briefcase:before {\r\n  content: \"\\F0B1\";\r\n}\r\n.fa-arrows-alt:before {\r\n  content: \"\\F0B2\";\r\n}\r\n.fa-group:before,\r\n.fa-users:before {\r\n  content: \"\\F0C0\";\r\n}\r\n.fa-chain:before,\r\n.fa-link:before {\r\n  content: \"\\F0C1\";\r\n}\r\n.fa-cloud:before {\r\n  content: \"\\F0C2\";\r\n}\r\n.fa-flask:before {\r\n  content: \"\\F0C3\";\r\n}\r\n.fa-cut:before,\r\n.fa-scissors:before {\r\n  content: \"\\F0C4\";\r\n}\r\n.fa-copy:before,\r\n.fa-files-o:before {\r\n  content: \"\\F0C5\";\r\n}\r\n.fa-paperclip:before {\r\n  content: \"\\F0C6\";\r\n}\r\n.fa-save:before,\r\n.fa-floppy-o:before {\r\n  content: \"\\F0C7\";\r\n}\r\n.fa-square:before {\r\n  content: \"\\F0C8\";\r\n}\r\n.fa-navicon:before,\r\n.fa-reorder:before,\r\n.fa-bars:before {\r\n  content: \"\\F0C9\";\r\n}\r\n.fa-list-ul:before {\r\n  content: \"\\F0CA\";\r\n}\r\n.fa-list-ol:before {\r\n  content: \"\\F0CB\";\r\n}\r\n.fa-strikethrough:before {\r\n  content: \"\\F0CC\";\r\n}\r\n.fa-underline:before {\r\n  content: \"\\F0CD\";\r\n}\r\n.fa-table:before {\r\n  content: \"\\F0CE\";\r\n}\r\n.fa-magic:before {\r\n  content: \"\\F0D0\";\r\n}\r\n.fa-truck:before {\r\n  content: \"\\F0D1\";\r\n}\r\n.fa-pinterest:before {\r\n  content: \"\\F0D2\";\r\n}\r\n.fa-pinterest-square:before {\r\n  content: \"\\F0D3\";\r\n}\r\n.fa-google-plus-square:before {\r\n  content: \"\\F0D4\";\r\n}\r\n.fa-google-plus:before {\r\n  content: \"\\F0D5\";\r\n}\r\n.fa-money:before {\r\n  content: \"\\F0D6\";\r\n}\r\n.fa-caret-down:before {\r\n  content: \"\\F0D7\";\r\n}\r\n.fa-caret-up:before {\r\n  content: \"\\F0D8\";\r\n}\r\n.fa-caret-left:before {\r\n  content: \"\\F0D9\";\r\n}\r\n.fa-caret-right:before {\r\n  content: \"\\F0DA\";\r\n}\r\n.fa-columns:before {\r\n  content: \"\\F0DB\";\r\n}\r\n.fa-unsorted:before,\r\n.fa-sort:before {\r\n  content: \"\\F0DC\";\r\n}\r\n.fa-sort-down:before,\r\n.fa-sort-desc:before {\r\n  content: \"\\F0DD\";\r\n}\r\n.fa-sort-up:before,\r\n.fa-sort-asc:before {\r\n  content: \"\\F0DE\";\r\n}\r\n.fa-envelope:before {\r\n  content: \"\\F0E0\";\r\n}\r\n.fa-linkedin:before {\r\n  content: \"\\F0E1\";\r\n}\r\n.fa-rotate-left:before,\r\n.fa-undo:before {\r\n  content: \"\\F0E2\";\r\n}\r\n.fa-legal:before,\r\n.fa-gavel:before {\r\n  content: \"\\F0E3\";\r\n}\r\n.fa-dashboard:before,\r\n.fa-tachometer:before {\r\n  content: \"\\F0E4\";\r\n}\r\n.fa-comment-o:before {\r\n  content: \"\\F0E5\";\r\n}\r\n.fa-comments-o:before {\r\n  content: \"\\F0E6\";\r\n}\r\n.fa-flash:before,\r\n.fa-bolt:before {\r\n  content: \"\\F0E7\";\r\n}\r\n.fa-sitemap:before {\r\n  content: \"\\F0E8\";\r\n}\r\n.fa-umbrella:before {\r\n  content: \"\\F0E9\";\r\n}\r\n.fa-paste:before,\r\n.fa-clipboard:before {\r\n  content: \"\\F0EA\";\r\n}\r\n.fa-lightbulb-o:before {\r\n  content: \"\\F0EB\";\r\n}\r\n.fa-exchange:before {\r\n  content: \"\\F0EC\";\r\n}\r\n.fa-cloud-download:before {\r\n  content: \"\\F0ED\";\r\n}\r\n.fa-cloud-upload:before {\r\n  content: \"\\F0EE\";\r\n}\r\n.fa-user-md:before {\r\n  content: \"\\F0F0\";\r\n}\r\n.fa-stethoscope:before {\r\n  content: \"\\F0F1\";\r\n}\r\n.fa-suitcase:before {\r\n  content: \"\\F0F2\";\r\n}\r\n.fa-bell-o:before {\r\n  content: \"\\F0A2\";\r\n}\r\n.fa-coffee:before {\r\n  content: \"\\F0F4\";\r\n}\r\n.fa-cutlery:before {\r\n  content: \"\\F0F5\";\r\n}\r\n.fa-file-text-o:before {\r\n  content: \"\\F0F6\";\r\n}\r\n.fa-building-o:before {\r\n  content: \"\\F0F7\";\r\n}\r\n.fa-hospital-o:before {\r\n  content: \"\\F0F8\";\r\n}\r\n.fa-ambulance:before {\r\n  content: \"\\F0F9\";\r\n}\r\n.fa-medkit:before {\r\n  content: \"\\F0FA\";\r\n}\r\n.fa-fighter-jet:before {\r\n  content: \"\\F0FB\";\r\n}\r\n.fa-beer:before {\r\n  content: \"\\F0FC\";\r\n}\r\n.fa-h-square:before {\r\n  content: \"\\F0FD\";\r\n}\r\n.fa-plus-square:before {\r\n  content: \"\\F0FE\";\r\n}\r\n.fa-angle-double-left:before {\r\n  content: \"\\F100\";\r\n}\r\n.fa-angle-double-right:before {\r\n  content: \"\\F101\";\r\n}\r\n.fa-angle-double-up:before {\r\n  content: \"\\F102\";\r\n}\r\n.fa-angle-double-down:before {\r\n  content: \"\\F103\";\r\n}\r\n.fa-angle-left:before {\r\n  content: \"\\F104\";\r\n}\r\n.fa-angle-right:before {\r\n  content: \"\\F105\";\r\n}\r\n.fa-angle-up:before {\r\n  content: \"\\F106\";\r\n}\r\n.fa-angle-down:before {\r\n  content: \"\\F107\";\r\n}\r\n.fa-desktop:before {\r\n  content: \"\\F108\";\r\n}\r\n.fa-laptop:before {\r\n  content: \"\\F109\";\r\n}\r\n.fa-tablet:before {\r\n  content: \"\\F10A\";\r\n}\r\n.fa-mobile-phone:before,\r\n.fa-mobile:before {\r\n  content: \"\\F10B\";\r\n}\r\n.fa-circle-o:before {\r\n  content: \"\\F10C\";\r\n}\r\n.fa-quote-left:before {\r\n  content: \"\\F10D\";\r\n}\r\n.fa-quote-right:before {\r\n  content: \"\\F10E\";\r\n}\r\n.fa-spinner:before {\r\n  content: \"\\F110\";\r\n}\r\n.fa-circle:before {\r\n  content: \"\\F111\";\r\n}\r\n.fa-mail-reply:before,\r\n.fa-reply:before {\r\n  content: \"\\F112\";\r\n}\r\n.fa-github-alt:before {\r\n  content: \"\\F113\";\r\n}\r\n.fa-folder-o:before {\r\n  content: \"\\F114\";\r\n}\r\n.fa-folder-open-o:before {\r\n  content: \"\\F115\";\r\n}\r\n.fa-smile-o:before {\r\n  content: \"\\F118\";\r\n}\r\n.fa-frown-o:before {\r\n  content: \"\\F119\";\r\n}\r\n.fa-meh-o:before {\r\n  content: \"\\F11A\";\r\n}\r\n.fa-gamepad:before {\r\n  content: \"\\F11B\";\r\n}\r\n.fa-keyboard-o:before {\r\n  content: \"\\F11C\";\r\n}\r\n.fa-flag-o:before {\r\n  content: \"\\F11D\";\r\n}\r\n.fa-flag-checkered:before {\r\n  content: \"\\F11E\";\r\n}\r\n.fa-terminal:before {\r\n  content: \"\\F120\";\r\n}\r\n.fa-code:before {\r\n  content: \"\\F121\";\r\n}\r\n.fa-mail-reply-all:before,\r\n.fa-reply-all:before {\r\n  content: \"\\F122\";\r\n}\r\n.fa-star-half-empty:before,\r\n.fa-star-half-full:before,\r\n.fa-star-half-o:before {\r\n  content: \"\\F123\";\r\n}\r\n.fa-location-arrow:before {\r\n  content: \"\\F124\";\r\n}\r\n.fa-crop:before {\r\n  content: \"\\F125\";\r\n}\r\n.fa-code-fork:before {\r\n  content: \"\\F126\";\r\n}\r\n.fa-unlink:before,\r\n.fa-chain-broken:before {\r\n  content: \"\\F127\";\r\n}\r\n.fa-question:before {\r\n  content: \"\\F128\";\r\n}\r\n.fa-info:before {\r\n  content: \"\\F129\";\r\n}\r\n.fa-exclamation:before {\r\n  content: \"\\F12A\";\r\n}\r\n.fa-superscript:before {\r\n  content: \"\\F12B\";\r\n}\r\n.fa-subscript:before {\r\n  content: \"\\F12C\";\r\n}\r\n.fa-eraser:before {\r\n  content: \"\\F12D\";\r\n}\r\n.fa-puzzle-piece:before {\r\n  content: \"\\F12E\";\r\n}\r\n.fa-microphone:before {\r\n  content: \"\\F130\";\r\n}\r\n.fa-microphone-slash:before {\r\n  content: \"\\F131\";\r\n}\r\n.fa-shield:before {\r\n  content: \"\\F132\";\r\n}\r\n.fa-calendar-o:before {\r\n  content: \"\\F133\";\r\n}\r\n.fa-fire-extinguisher:before {\r\n  content: \"\\F134\";\r\n}\r\n.fa-rocket:before {\r\n  content: \"\\F135\";\r\n}\r\n.fa-maxcdn:before {\r\n  content: \"\\F136\";\r\n}\r\n.fa-chevron-circle-left:before {\r\n  content: \"\\F137\";\r\n}\r\n.fa-chevron-circle-right:before {\r\n  content: \"\\F138\";\r\n}\r\n.fa-chevron-circle-up:before {\r\n  content: \"\\F139\";\r\n}\r\n.fa-chevron-circle-down:before {\r\n  content: \"\\F13A\";\r\n}\r\n.fa-html5:before {\r\n  content: \"\\F13B\";\r\n}\r\n.fa-css3:before {\r\n  content: \"\\F13C\";\r\n}\r\n.fa-anchor:before {\r\n  content: \"\\F13D\";\r\n}\r\n.fa-unlock-alt:before {\r\n  content: \"\\F13E\";\r\n}\r\n.fa-bullseye:before {\r\n  content: \"\\F140\";\r\n}\r\n.fa-ellipsis-h:before {\r\n  content: \"\\F141\";\r\n}\r\n.fa-ellipsis-v:before {\r\n  content: \"\\F142\";\r\n}\r\n.fa-rss-square:before {\r\n  content: \"\\F143\";\r\n}\r\n.fa-play-circle:before {\r\n  content: \"\\F144\";\r\n}\r\n.fa-ticket:before {\r\n  content: \"\\F145\";\r\n}\r\n.fa-minus-square:before {\r\n  content: \"\\F146\";\r\n}\r\n.fa-minus-square-o:before {\r\n  content: \"\\F147\";\r\n}\r\n.fa-level-up:before {\r\n  content: \"\\F148\";\r\n}\r\n.fa-level-down:before {\r\n  content: \"\\F149\";\r\n}\r\n.fa-check-square:before {\r\n  content: \"\\F14A\";\r\n}\r\n.fa-pencil-square:before {\r\n  content: \"\\F14B\";\r\n}\r\n.fa-external-link-square:before {\r\n  content: \"\\F14C\";\r\n}\r\n.fa-share-square:before {\r\n  content: \"\\F14D\";\r\n}\r\n.fa-compass:before {\r\n  content: \"\\F14E\";\r\n}\r\n.fa-toggle-down:before,\r\n.fa-caret-square-o-down:before {\r\n  content: \"\\F150\";\r\n}\r\n.fa-toggle-up:before,\r\n.fa-caret-square-o-up:before {\r\n  content: \"\\F151\";\r\n}\r\n.fa-toggle-right:before,\r\n.fa-caret-square-o-right:before {\r\n  content: \"\\F152\";\r\n}\r\n.fa-euro:before,\r\n.fa-eur:before {\r\n  content: \"\\F153\";\r\n}\r\n.fa-gbp:before {\r\n  content: \"\\F154\";\r\n}\r\n.fa-dollar:before,\r\n.fa-usd:before {\r\n  content: \"\\F155\";\r\n}\r\n.fa-rupee:before,\r\n.fa-inr:before {\r\n  content: \"\\F156\";\r\n}\r\n.fa-cny:before,\r\n.fa-rmb:before,\r\n.fa-yen:before,\r\n.fa-jpy:before {\r\n  content: \"\\F157\";\r\n}\r\n.fa-ruble:before,\r\n.fa-rouble:before,\r\n.fa-rub:before {\r\n  content: \"\\F158\";\r\n}\r\n.fa-won:before,\r\n.fa-krw:before {\r\n  content: \"\\F159\";\r\n}\r\n.fa-bitcoin:before,\r\n.fa-btc:before {\r\n  content: \"\\F15A\";\r\n}\r\n.fa-file:before {\r\n  content: \"\\F15B\";\r\n}\r\n.fa-file-text:before {\r\n  content: \"\\F15C\";\r\n}\r\n.fa-sort-alpha-asc:before {\r\n  content: \"\\F15D\";\r\n}\r\n.fa-sort-alpha-desc:before {\r\n  content: \"\\F15E\";\r\n}\r\n.fa-sort-amount-asc:before {\r\n  content: \"\\F160\";\r\n}\r\n.fa-sort-amount-desc:before {\r\n  content: \"\\F161\";\r\n}\r\n.fa-sort-numeric-asc:before {\r\n  content: \"\\F162\";\r\n}\r\n.fa-sort-numeric-desc:before {\r\n  content: \"\\F163\";\r\n}\r\n.fa-thumbs-up:before {\r\n  content: \"\\F164\";\r\n}\r\n.fa-thumbs-down:before {\r\n  content: \"\\F165\";\r\n}\r\n.fa-youtube-square:before {\r\n  content: \"\\F166\";\r\n}\r\n.fa-youtube:before {\r\n  content: \"\\F167\";\r\n}\r\n.fa-xing:before {\r\n  content: \"\\F168\";\r\n}\r\n.fa-xing-square:before {\r\n  content: \"\\F169\";\r\n}\r\n.fa-youtube-play:before {\r\n  content: \"\\F16A\";\r\n}\r\n.fa-dropbox:before {\r\n  content: \"\\F16B\";\r\n}\r\n.fa-stack-overflow:before {\r\n  content: \"\\F16C\";\r\n}\r\n.fa-instagram:before {\r\n  content: \"\\F16D\";\r\n}\r\n.fa-flickr:before {\r\n  content: \"\\F16E\";\r\n}\r\n.fa-adn:before {\r\n  content: \"\\F170\";\r\n}\r\n.fa-bitbucket:before {\r\n  content: \"\\F171\";\r\n}\r\n.fa-bitbucket-square:before {\r\n  content: \"\\F172\";\r\n}\r\n.fa-tumblr:before {\r\n  content: \"\\F173\";\r\n}\r\n.fa-tumblr-square:before {\r\n  content: \"\\F174\";\r\n}\r\n.fa-long-arrow-down:before {\r\n  content: \"\\F175\";\r\n}\r\n.fa-long-arrow-up:before {\r\n  content: \"\\F176\";\r\n}\r\n.fa-long-arrow-left:before {\r\n  content: \"\\F177\";\r\n}\r\n.fa-long-arrow-right:before {\r\n  content: \"\\F178\";\r\n}\r\n.fa-apple:before {\r\n  content: \"\\F179\";\r\n}\r\n.fa-windows:before {\r\n  content: \"\\F17A\";\r\n}\r\n.fa-android:before {\r\n  content: \"\\F17B\";\r\n}\r\n.fa-linux:before {\r\n  content: \"\\F17C\";\r\n}\r\n.fa-dribbble:before {\r\n  content: \"\\F17D\";\r\n}\r\n.fa-skype:before {\r\n  content: \"\\F17E\";\r\n}\r\n.fa-foursquare:before {\r\n  content: \"\\F180\";\r\n}\r\n.fa-trello:before {\r\n  content: \"\\F181\";\r\n}\r\n.fa-female:before {\r\n  content: \"\\F182\";\r\n}\r\n.fa-male:before {\r\n  content: \"\\F183\";\r\n}\r\n.fa-gittip:before,\r\n.fa-gratipay:before {\r\n  content: \"\\F184\";\r\n}\r\n.fa-sun-o:before {\r\n  content: \"\\F185\";\r\n}\r\n.fa-moon-o:before {\r\n  content: \"\\F186\";\r\n}\r\n.fa-archive:before {\r\n  content: \"\\F187\";\r\n}\r\n.fa-bug:before {\r\n  content: \"\\F188\";\r\n}\r\n.fa-vk:before {\r\n  content: \"\\F189\";\r\n}\r\n.fa-weibo:before {\r\n  content: \"\\F18A\";\r\n}\r\n.fa-renren:before {\r\n  content: \"\\F18B\";\r\n}\r\n.fa-pagelines:before {\r\n  content: \"\\F18C\";\r\n}\r\n.fa-stack-exchange:before {\r\n  content: \"\\F18D\";\r\n}\r\n.fa-arrow-circle-o-right:before {\r\n  content: \"\\F18E\";\r\n}\r\n.fa-arrow-circle-o-left:before {\r\n  content: \"\\F190\";\r\n}\r\n.fa-toggle-left:before,\r\n.fa-caret-square-o-left:before {\r\n  content: \"\\F191\";\r\n}\r\n.fa-dot-circle-o:before {\r\n  content: \"\\F192\";\r\n}\r\n.fa-wheelchair:before {\r\n  content: \"\\F193\";\r\n}\r\n.fa-vimeo-square:before {\r\n  content: \"\\F194\";\r\n}\r\n.fa-turkish-lira:before,\r\n.fa-try:before {\r\n  content: \"\\F195\";\r\n}\r\n.fa-plus-square-o:before {\r\n  content: \"\\F196\";\r\n}\r\n.fa-space-shuttle:before {\r\n  content: \"\\F197\";\r\n}\r\n.fa-slack:before {\r\n  content: \"\\F198\";\r\n}\r\n.fa-envelope-square:before {\r\n  content: \"\\F199\";\r\n}\r\n.fa-wordpress:before {\r\n  content: \"\\F19A\";\r\n}\r\n.fa-openid:before {\r\n  content: \"\\F19B\";\r\n}\r\n.fa-institution:before,\r\n.fa-bank:before,\r\n.fa-university:before {\r\n  content: \"\\F19C\";\r\n}\r\n.fa-mortar-board:before,\r\n.fa-graduation-cap:before {\r\n  content: \"\\F19D\";\r\n}\r\n.fa-yahoo:before {\r\n  content: \"\\F19E\";\r\n}\r\n.fa-google:before {\r\n  content: \"\\F1A0\";\r\n}\r\n.fa-reddit:before {\r\n  content: \"\\F1A1\";\r\n}\r\n.fa-reddit-square:before {\r\n  content: \"\\F1A2\";\r\n}\r\n.fa-stumbleupon-circle:before {\r\n  content: \"\\F1A3\";\r\n}\r\n.fa-stumbleupon:before {\r\n  content: \"\\F1A4\";\r\n}\r\n.fa-delicious:before {\r\n  content: \"\\F1A5\";\r\n}\r\n.fa-digg:before {\r\n  content: \"\\F1A6\";\r\n}\r\n.fa-pied-piper-pp:before {\r\n  content: \"\\F1A7\";\r\n}\r\n.fa-pied-piper-alt:before {\r\n  content: \"\\F1A8\";\r\n}\r\n.fa-drupal:before {\r\n  content: \"\\F1A9\";\r\n}\r\n.fa-joomla:before {\r\n  content: \"\\F1AA\";\r\n}\r\n.fa-language:before {\r\n  content: \"\\F1AB\";\r\n}\r\n.fa-fax:before {\r\n  content: \"\\F1AC\";\r\n}\r\n.fa-building:before {\r\n  content: \"\\F1AD\";\r\n}\r\n.fa-child:before {\r\n  content: \"\\F1AE\";\r\n}\r\n.fa-paw:before {\r\n  content: \"\\F1B0\";\r\n}\r\n.fa-spoon:before {\r\n  content: \"\\F1B1\";\r\n}\r\n.fa-cube:before {\r\n  content: \"\\F1B2\";\r\n}\r\n.fa-cubes:before {\r\n  content: \"\\F1B3\";\r\n}\r\n.fa-behance:before {\r\n  content: \"\\F1B4\";\r\n}\r\n.fa-behance-square:before {\r\n  content: \"\\F1B5\";\r\n}\r\n.fa-steam:before {\r\n  content: \"\\F1B6\";\r\n}\r\n.fa-steam-square:before {\r\n  content: \"\\F1B7\";\r\n}\r\n.fa-recycle:before {\r\n  content: \"\\F1B8\";\r\n}\r\n.fa-automobile:before,\r\n.fa-car:before {\r\n  content: \"\\F1B9\";\r\n}\r\n.fa-cab:before,\r\n.fa-taxi:before {\r\n  content: \"\\F1BA\";\r\n}\r\n.fa-tree:before {\r\n  content: \"\\F1BB\";\r\n}\r\n.fa-spotify:before {\r\n  content: \"\\F1BC\";\r\n}\r\n.fa-deviantart:before {\r\n  content: \"\\F1BD\";\r\n}\r\n.fa-soundcloud:before {\r\n  content: \"\\F1BE\";\r\n}\r\n.fa-database:before {\r\n  content: \"\\F1C0\";\r\n}\r\n.fa-file-pdf-o:before {\r\n  content: \"\\F1C1\";\r\n}\r\n.fa-file-word-o:before {\r\n  content: \"\\F1C2\";\r\n}\r\n.fa-file-excel-o:before {\r\n  content: \"\\F1C3\";\r\n}\r\n.fa-file-powerpoint-o:before {\r\n  content: \"\\F1C4\";\r\n}\r\n.fa-file-photo-o:before,\r\n.fa-file-picture-o:before,\r\n.fa-file-image-o:before {\r\n  content: \"\\F1C5\";\r\n}\r\n.fa-file-zip-o:before,\r\n.fa-file-archive-o:before {\r\n  content: \"\\F1C6\";\r\n}\r\n.fa-file-sound-o:before,\r\n.fa-file-audio-o:before {\r\n  content: \"\\F1C7\";\r\n}\r\n.fa-file-movie-o:before,\r\n.fa-file-video-o:before {\r\n  content: \"\\F1C8\";\r\n}\r\n.fa-file-code-o:before {\r\n  content: \"\\F1C9\";\r\n}\r\n.fa-vine:before {\r\n  content: \"\\F1CA\";\r\n}\r\n.fa-codepen:before {\r\n  content: \"\\F1CB\";\r\n}\r\n.fa-jsfiddle:before {\r\n  content: \"\\F1CC\";\r\n}\r\n.fa-life-bouy:before,\r\n.fa-life-buoy:before,\r\n.fa-life-saver:before,\r\n.fa-support:before,\r\n.fa-life-ring:before {\r\n  content: \"\\F1CD\";\r\n}\r\n.fa-circle-o-notch:before {\r\n  content: \"\\F1CE\";\r\n}\r\n.fa-ra:before,\r\n.fa-resistance:before,\r\n.fa-rebel:before {\r\n  content: \"\\F1D0\";\r\n}\r\n.fa-ge:before,\r\n.fa-empire:before {\r\n  content: \"\\F1D1\";\r\n}\r\n.fa-git-square:before {\r\n  content: \"\\F1D2\";\r\n}\r\n.fa-git:before {\r\n  content: \"\\F1D3\";\r\n}\r\n.fa-y-combinator-square:before,\r\n.fa-yc-square:before,\r\n.fa-hacker-news:before {\r\n  content: \"\\F1D4\";\r\n}\r\n.fa-tencent-weibo:before {\r\n  content: \"\\F1D5\";\r\n}\r\n.fa-qq:before {\r\n  content: \"\\F1D6\";\r\n}\r\n.fa-wechat:before,\r\n.fa-weixin:before {\r\n  content: \"\\F1D7\";\r\n}\r\n.fa-send:before,\r\n.fa-paper-plane:before {\r\n  content: \"\\F1D8\";\r\n}\r\n.fa-send-o:before,\r\n.fa-paper-plane-o:before {\r\n  content: \"\\F1D9\";\r\n}\r\n.fa-history:before {\r\n  content: \"\\F1DA\";\r\n}\r\n.fa-circle-thin:before {\r\n  content: \"\\F1DB\";\r\n}\r\n.fa-header:before {\r\n  content: \"\\F1DC\";\r\n}\r\n.fa-paragraph:before {\r\n  content: \"\\F1DD\";\r\n}\r\n.fa-sliders:before {\r\n  content: \"\\F1DE\";\r\n}\r\n.fa-share-alt:before {\r\n  content: \"\\F1E0\";\r\n}\r\n.fa-share-alt-square:before {\r\n  content: \"\\F1E1\";\r\n}\r\n.fa-bomb:before {\r\n  content: \"\\F1E2\";\r\n}\r\n.fa-soccer-ball-o:before,\r\n.fa-futbol-o:before {\r\n  content: \"\\F1E3\";\r\n}\r\n.fa-tty:before {\r\n  content: \"\\F1E4\";\r\n}\r\n.fa-binoculars:before {\r\n  content: \"\\F1E5\";\r\n}\r\n.fa-plug:before {\r\n  content: \"\\F1E6\";\r\n}\r\n.fa-slideshare:before {\r\n  content: \"\\F1E7\";\r\n}\r\n.fa-twitch:before {\r\n  content: \"\\F1E8\";\r\n}\r\n.fa-yelp:before {\r\n  content: \"\\F1E9\";\r\n}\r\n.fa-newspaper-o:before {\r\n  content: \"\\F1EA\";\r\n}\r\n.fa-wifi:before {\r\n  content: \"\\F1EB\";\r\n}\r\n.fa-calculator:before {\r\n  content: \"\\F1EC\";\r\n}\r\n.fa-paypal:before {\r\n  content: \"\\F1ED\";\r\n}\r\n.fa-google-wallet:before {\r\n  content: \"\\F1EE\";\r\n}\r\n.fa-cc-visa:before {\r\n  content: \"\\F1F0\";\r\n}\r\n.fa-cc-mastercard:before {\r\n  content: \"\\F1F1\";\r\n}\r\n.fa-cc-discover:before {\r\n  content: \"\\F1F2\";\r\n}\r\n.fa-cc-amex:before {\r\n  content: \"\\F1F3\";\r\n}\r\n.fa-cc-paypal:before {\r\n  content: \"\\F1F4\";\r\n}\r\n.fa-cc-stripe:before {\r\n  content: \"\\F1F5\";\r\n}\r\n.fa-bell-slash:before {\r\n  content: \"\\F1F6\";\r\n}\r\n.fa-bell-slash-o:before {\r\n  content: \"\\F1F7\";\r\n}\r\n.fa-trash:before {\r\n  content: \"\\F1F8\";\r\n}\r\n.fa-copyright:before {\r\n  content: \"\\F1F9\";\r\n}\r\n.fa-at:before {\r\n  content: \"\\F1FA\";\r\n}\r\n.fa-eyedropper:before {\r\n  content: \"\\F1FB\";\r\n}\r\n.fa-paint-brush:before {\r\n  content: \"\\F1FC\";\r\n}\r\n.fa-birthday-cake:before {\r\n  content: \"\\F1FD\";\r\n}\r\n.fa-area-chart:before {\r\n  content: \"\\F1FE\";\r\n}\r\n.fa-pie-chart:before {\r\n  content: \"\\F200\";\r\n}\r\n.fa-line-chart:before {\r\n  content: \"\\F201\";\r\n}\r\n.fa-lastfm:before {\r\n  content: \"\\F202\";\r\n}\r\n.fa-lastfm-square:before {\r\n  content: \"\\F203\";\r\n}\r\n.fa-toggle-off:before {\r\n  content: \"\\F204\";\r\n}\r\n.fa-toggle-on:before {\r\n  content: \"\\F205\";\r\n}\r\n.fa-bicycle:before {\r\n  content: \"\\F206\";\r\n}\r\n.fa-bus:before {\r\n  content: \"\\F207\";\r\n}\r\n.fa-ioxhost:before {\r\n  content: \"\\F208\";\r\n}\r\n.fa-angellist:before {\r\n  content: \"\\F209\";\r\n}\r\n.fa-cc:before {\r\n  content: \"\\F20A\";\r\n}\r\n.fa-shekel:before,\r\n.fa-sheqel:before,\r\n.fa-ils:before {\r\n  content: \"\\F20B\";\r\n}\r\n.fa-meanpath:before {\r\n  content: \"\\F20C\";\r\n}\r\n.fa-buysellads:before {\r\n  content: \"\\F20D\";\r\n}\r\n.fa-connectdevelop:before {\r\n  content: \"\\F20E\";\r\n}\r\n.fa-dashcube:before {\r\n  content: \"\\F210\";\r\n}\r\n.fa-forumbee:before {\r\n  content: \"\\F211\";\r\n}\r\n.fa-leanpub:before {\r\n  content: \"\\F212\";\r\n}\r\n.fa-sellsy:before {\r\n  content: \"\\F213\";\r\n}\r\n.fa-shirtsinbulk:before {\r\n  content: \"\\F214\";\r\n}\r\n.fa-simplybuilt:before {\r\n  content: \"\\F215\";\r\n}\r\n.fa-skyatlas:before {\r\n  content: \"\\F216\";\r\n}\r\n.fa-cart-plus:before {\r\n  content: \"\\F217\";\r\n}\r\n.fa-cart-arrow-down:before {\r\n  content: \"\\F218\";\r\n}\r\n.fa-diamond:before {\r\n  content: \"\\F219\";\r\n}\r\n.fa-ship:before {\r\n  content: \"\\F21A\";\r\n}\r\n.fa-user-secret:before {\r\n  content: \"\\F21B\";\r\n}\r\n.fa-motorcycle:before {\r\n  content: \"\\F21C\";\r\n}\r\n.fa-street-view:before {\r\n  content: \"\\F21D\";\r\n}\r\n.fa-heartbeat:before {\r\n  content: \"\\F21E\";\r\n}\r\n.fa-venus:before {\r\n  content: \"\\F221\";\r\n}\r\n.fa-mars:before {\r\n  content: \"\\F222\";\r\n}\r\n.fa-mercury:before {\r\n  content: \"\\F223\";\r\n}\r\n.fa-intersex:before,\r\n.fa-transgender:before {\r\n  content: \"\\F224\";\r\n}\r\n.fa-transgender-alt:before {\r\n  content: \"\\F225\";\r\n}\r\n.fa-venus-double:before {\r\n  content: \"\\F226\";\r\n}\r\n.fa-mars-double:before {\r\n  content: \"\\F227\";\r\n}\r\n.fa-venus-mars:before {\r\n  content: \"\\F228\";\r\n}\r\n.fa-mars-stroke:before {\r\n  content: \"\\F229\";\r\n}\r\n.fa-mars-stroke-v:before {\r\n  content: \"\\F22A\";\r\n}\r\n.fa-mars-stroke-h:before {\r\n  content: \"\\F22B\";\r\n}\r\n.fa-neuter:before {\r\n  content: \"\\F22C\";\r\n}\r\n.fa-genderless:before {\r\n  content: \"\\F22D\";\r\n}\r\n.fa-facebook-official:before {\r\n  content: \"\\F230\";\r\n}\r\n.fa-pinterest-p:before {\r\n  content: \"\\F231\";\r\n}\r\n.fa-whatsapp:before {\r\n  content: \"\\F232\";\r\n}\r\n.fa-server:before {\r\n  content: \"\\F233\";\r\n}\r\n.fa-user-plus:before {\r\n  content: \"\\F234\";\r\n}\r\n.fa-user-times:before {\r\n  content: \"\\F235\";\r\n}\r\n.fa-hotel:before,\r\n.fa-bed:before {\r\n  content: \"\\F236\";\r\n}\r\n.fa-viacoin:before {\r\n  content: \"\\F237\";\r\n}\r\n.fa-train:before {\r\n  content: \"\\F238\";\r\n}\r\n.fa-subway:before {\r\n  content: \"\\F239\";\r\n}\r\n.fa-medium:before {\r\n  content: \"\\F23A\";\r\n}\r\n.fa-yc:before,\r\n.fa-y-combinator:before {\r\n  content: \"\\F23B\";\r\n}\r\n.fa-optin-monster:before {\r\n  content: \"\\F23C\";\r\n}\r\n.fa-opencart:before {\r\n  content: \"\\F23D\";\r\n}\r\n.fa-expeditedssl:before {\r\n  content: \"\\F23E\";\r\n}\r\n.fa-battery-4:before,\r\n.fa-battery:before,\r\n.fa-battery-full:before {\r\n  content: \"\\F240\";\r\n}\r\n.fa-battery-3:before,\r\n.fa-battery-three-quarters:before {\r\n  content: \"\\F241\";\r\n}\r\n.fa-battery-2:before,\r\n.fa-battery-half:before {\r\n  content: \"\\F242\";\r\n}\r\n.fa-battery-1:before,\r\n.fa-battery-quarter:before {\r\n  content: \"\\F243\";\r\n}\r\n.fa-battery-0:before,\r\n.fa-battery-empty:before {\r\n  content: \"\\F244\";\r\n}\r\n.fa-mouse-pointer:before {\r\n  content: \"\\F245\";\r\n}\r\n.fa-i-cursor:before {\r\n  content: \"\\F246\";\r\n}\r\n.fa-object-group:before {\r\n  content: \"\\F247\";\r\n}\r\n.fa-object-ungroup:before {\r\n  content: \"\\F248\";\r\n}\r\n.fa-sticky-note:before {\r\n  content: \"\\F249\";\r\n}\r\n.fa-sticky-note-o:before {\r\n  content: \"\\F24A\";\r\n}\r\n.fa-cc-jcb:before {\r\n  content: \"\\F24B\";\r\n}\r\n.fa-cc-diners-club:before {\r\n  content: \"\\F24C\";\r\n}\r\n.fa-clone:before {\r\n  content: \"\\F24D\";\r\n}\r\n.fa-balance-scale:before {\r\n  content: \"\\F24E\";\r\n}\r\n.fa-hourglass-o:before {\r\n  content: \"\\F250\";\r\n}\r\n.fa-hourglass-1:before,\r\n.fa-hourglass-start:before {\r\n  content: \"\\F251\";\r\n}\r\n.fa-hourglass-2:before,\r\n.fa-hourglass-half:before {\r\n  content: \"\\F252\";\r\n}\r\n.fa-hourglass-3:before,\r\n.fa-hourglass-end:before {\r\n  content: \"\\F253\";\r\n}\r\n.fa-hourglass:before {\r\n  content: \"\\F254\";\r\n}\r\n.fa-hand-grab-o:before,\r\n.fa-hand-rock-o:before {\r\n  content: \"\\F255\";\r\n}\r\n.fa-hand-stop-o:before,\r\n.fa-hand-paper-o:before {\r\n  content: \"\\F256\";\r\n}\r\n.fa-hand-scissors-o:before {\r\n  content: \"\\F257\";\r\n}\r\n.fa-hand-lizard-o:before {\r\n  content: \"\\F258\";\r\n}\r\n.fa-hand-spock-o:before {\r\n  content: \"\\F259\";\r\n}\r\n.fa-hand-pointer-o:before {\r\n  content: \"\\F25A\";\r\n}\r\n.fa-hand-peace-o:before {\r\n  content: \"\\F25B\";\r\n}\r\n.fa-trademark:before {\r\n  content: \"\\F25C\";\r\n}\r\n.fa-registered:before {\r\n  content: \"\\F25D\";\r\n}\r\n.fa-creative-commons:before {\r\n  content: \"\\F25E\";\r\n}\r\n.fa-gg:before {\r\n  content: \"\\F260\";\r\n}\r\n.fa-gg-circle:before {\r\n  content: \"\\F261\";\r\n}\r\n.fa-tripadvisor:before {\r\n  content: \"\\F262\";\r\n}\r\n.fa-odnoklassniki:before {\r\n  content: \"\\F263\";\r\n}\r\n.fa-odnoklassniki-square:before {\r\n  content: \"\\F264\";\r\n}\r\n.fa-get-pocket:before {\r\n  content: \"\\F265\";\r\n}\r\n.fa-wikipedia-w:before {\r\n  content: \"\\F266\";\r\n}\r\n.fa-safari:before {\r\n  content: \"\\F267\";\r\n}\r\n.fa-chrome:before {\r\n  content: \"\\F268\";\r\n}\r\n.fa-firefox:before {\r\n  content: \"\\F269\";\r\n}\r\n.fa-opera:before {\r\n  content: \"\\F26A\";\r\n}\r\n.fa-internet-explorer:before {\r\n  content: \"\\F26B\";\r\n}\r\n.fa-tv:before,\r\n.fa-television:before {\r\n  content: \"\\F26C\";\r\n}\r\n.fa-contao:before {\r\n  content: \"\\F26D\";\r\n}\r\n.fa-500px:before {\r\n  content: \"\\F26E\";\r\n}\r\n.fa-amazon:before {\r\n  content: \"\\F270\";\r\n}\r\n.fa-calendar-plus-o:before {\r\n  content: \"\\F271\";\r\n}\r\n.fa-calendar-minus-o:before {\r\n  content: \"\\F272\";\r\n}\r\n.fa-calendar-times-o:before {\r\n  content: \"\\F273\";\r\n}\r\n.fa-calendar-check-o:before {\r\n  content: \"\\F274\";\r\n}\r\n.fa-industry:before {\r\n  content: \"\\F275\";\r\n}\r\n.fa-map-pin:before {\r\n  content: \"\\F276\";\r\n}\r\n.fa-map-signs:before {\r\n  content: \"\\F277\";\r\n}\r\n.fa-map-o:before {\r\n  content: \"\\F278\";\r\n}\r\n.fa-map:before {\r\n  content: \"\\F279\";\r\n}\r\n.fa-commenting:before {\r\n  content: \"\\F27A\";\r\n}\r\n.fa-commenting-o:before {\r\n  content: \"\\F27B\";\r\n}\r\n.fa-houzz:before {\r\n  content: \"\\F27C\";\r\n}\r\n.fa-vimeo:before {\r\n  content: \"\\F27D\";\r\n}\r\n.fa-black-tie:before {\r\n  content: \"\\F27E\";\r\n}\r\n.fa-fonticons:before {\r\n  content: \"\\F280\";\r\n}\r\n.fa-reddit-alien:before {\r\n  content: \"\\F281\";\r\n}\r\n.fa-edge:before {\r\n  content: \"\\F282\";\r\n}\r\n.fa-credit-card-alt:before {\r\n  content: \"\\F283\";\r\n}\r\n.fa-codiepie:before {\r\n  content: \"\\F284\";\r\n}\r\n.fa-modx:before {\r\n  content: \"\\F285\";\r\n}\r\n.fa-fort-awesome:before {\r\n  content: \"\\F286\";\r\n}\r\n.fa-usb:before {\r\n  content: \"\\F287\";\r\n}\r\n.fa-product-hunt:before {\r\n  content: \"\\F288\";\r\n}\r\n.fa-mixcloud:before {\r\n  content: \"\\F289\";\r\n}\r\n.fa-scribd:before {\r\n  content: \"\\F28A\";\r\n}\r\n.fa-pause-circle:before {\r\n  content: \"\\F28B\";\r\n}\r\n.fa-pause-circle-o:before {\r\n  content: \"\\F28C\";\r\n}\r\n.fa-stop-circle:before {\r\n  content: \"\\F28D\";\r\n}\r\n.fa-stop-circle-o:before {\r\n  content: \"\\F28E\";\r\n}\r\n.fa-shopping-bag:before {\r\n  content: \"\\F290\";\r\n}\r\n.fa-shopping-basket:before {\r\n  content: \"\\F291\";\r\n}\r\n.fa-hashtag:before {\r\n  content: \"\\F292\";\r\n}\r\n.fa-bluetooth:before {\r\n  content: \"\\F293\";\r\n}\r\n.fa-bluetooth-b:before {\r\n  content: \"\\F294\";\r\n}\r\n.fa-percent:before {\r\n  content: \"\\F295\";\r\n}\r\n.fa-gitlab:before {\r\n  content: \"\\F296\";\r\n}\r\n.fa-wpbeginner:before {\r\n  content: \"\\F297\";\r\n}\r\n.fa-wpforms:before {\r\n  content: \"\\F298\";\r\n}\r\n.fa-envira:before {\r\n  content: \"\\F299\";\r\n}\r\n.fa-universal-access:before {\r\n  content: \"\\F29A\";\r\n}\r\n.fa-wheelchair-alt:before {\r\n  content: \"\\F29B\";\r\n}\r\n.fa-question-circle-o:before {\r\n  content: \"\\F29C\";\r\n}\r\n.fa-blind:before {\r\n  content: \"\\F29D\";\r\n}\r\n.fa-audio-description:before {\r\n  content: \"\\F29E\";\r\n}\r\n.fa-volume-control-phone:before {\r\n  content: \"\\F2A0\";\r\n}\r\n.fa-braille:before {\r\n  content: \"\\F2A1\";\r\n}\r\n.fa-assistive-listening-systems:before {\r\n  content: \"\\F2A2\";\r\n}\r\n.fa-asl-interpreting:before,\r\n.fa-american-sign-language-interpreting:before {\r\n  content: \"\\F2A3\";\r\n}\r\n.fa-deafness:before,\r\n.fa-hard-of-hearing:before,\r\n.fa-deaf:before {\r\n  content: \"\\F2A4\";\r\n}\r\n.fa-glide:before {\r\n  content: \"\\F2A5\";\r\n}\r\n.fa-glide-g:before {\r\n  content: \"\\F2A6\";\r\n}\r\n.fa-signing:before,\r\n.fa-sign-language:before {\r\n  content: \"\\F2A7\";\r\n}\r\n.fa-low-vision:before {\r\n  content: \"\\F2A8\";\r\n}\r\n.fa-viadeo:before {\r\n  content: \"\\F2A9\";\r\n}\r\n.fa-viadeo-square:before {\r\n  content: \"\\F2AA\";\r\n}\r\n.fa-snapchat:before {\r\n  content: \"\\F2AB\";\r\n}\r\n.fa-snapchat-ghost:before {\r\n  content: \"\\F2AC\";\r\n}\r\n.fa-snapchat-square:before {\r\n  content: \"\\F2AD\";\r\n}\r\n.fa-pied-piper:before {\r\n  content: \"\\F2AE\";\r\n}\r\n.fa-first-order:before {\r\n  content: \"\\F2B0\";\r\n}\r\n.fa-yoast:before {\r\n  content: \"\\F2B1\";\r\n}\r\n.fa-themeisle:before {\r\n  content: \"\\F2B2\";\r\n}\r\n.fa-google-plus-circle:before,\r\n.fa-google-plus-official:before {\r\n  content: \"\\F2B3\";\r\n}\r\n.fa-fa:before,\r\n.fa-font-awesome:before {\r\n  content: \"\\F2B4\";\r\n}\r\n.fa-handshake-o:before {\r\n  content: \"\\F2B5\";\r\n}\r\n.fa-envelope-open:before {\r\n  content: \"\\F2B6\";\r\n}\r\n.fa-envelope-open-o:before {\r\n  content: \"\\F2B7\";\r\n}\r\n.fa-linode:before {\r\n  content: \"\\F2B8\";\r\n}\r\n.fa-address-book:before {\r\n  content: \"\\F2B9\";\r\n}\r\n.fa-address-book-o:before {\r\n  content: \"\\F2BA\";\r\n}\r\n.fa-vcard:before,\r\n.fa-address-card:before {\r\n  content: \"\\F2BB\";\r\n}\r\n.fa-vcard-o:before,\r\n.fa-address-card-o:before {\r\n  content: \"\\F2BC\";\r\n}\r\n.fa-user-circle:before {\r\n  content: \"\\F2BD\";\r\n}\r\n.fa-user-circle-o:before {\r\n  content: \"\\F2BE\";\r\n}\r\n.fa-user-o:before {\r\n  content: \"\\F2C0\";\r\n}\r\n.fa-id-badge:before {\r\n  content: \"\\F2C1\";\r\n}\r\n.fa-drivers-license:before,\r\n.fa-id-card:before {\r\n  content: \"\\F2C2\";\r\n}\r\n.fa-drivers-license-o:before,\r\n.fa-id-card-o:before {\r\n  content: \"\\F2C3\";\r\n}\r\n.fa-quora:before {\r\n  content: \"\\F2C4\";\r\n}\r\n.fa-free-code-camp:before {\r\n  content: \"\\F2C5\";\r\n}\r\n.fa-telegram:before {\r\n  content: \"\\F2C6\";\r\n}\r\n.fa-thermometer-4:before,\r\n.fa-thermometer:before,\r\n.fa-thermometer-full:before {\r\n  content: \"\\F2C7\";\r\n}\r\n.fa-thermometer-3:before,\r\n.fa-thermometer-three-quarters:before {\r\n  content: \"\\F2C8\";\r\n}\r\n.fa-thermometer-2:before,\r\n.fa-thermometer-half:before {\r\n  content: \"\\F2C9\";\r\n}\r\n.fa-thermometer-1:before,\r\n.fa-thermometer-quarter:before {\r\n  content: \"\\F2CA\";\r\n}\r\n.fa-thermometer-0:before,\r\n.fa-thermometer-empty:before {\r\n  content: \"\\F2CB\";\r\n}\r\n.fa-shower:before {\r\n  content: \"\\F2CC\";\r\n}\r\n.fa-bathtub:before,\r\n.fa-s15:before,\r\n.fa-bath:before {\r\n  content: \"\\F2CD\";\r\n}\r\n.fa-podcast:before {\r\n  content: \"\\F2CE\";\r\n}\r\n.fa-window-maximize:before {\r\n  content: \"\\F2D0\";\r\n}\r\n.fa-window-minimize:before {\r\n  content: \"\\F2D1\";\r\n}\r\n.fa-window-restore:before {\r\n  content: \"\\F2D2\";\r\n}\r\n.fa-times-rectangle:before,\r\n.fa-window-close:before {\r\n  content: \"\\F2D3\";\r\n}\r\n.fa-times-rectangle-o:before,\r\n.fa-window-close-o:before {\r\n  content: \"\\F2D4\";\r\n}\r\n.fa-bandcamp:before {\r\n  content: \"\\F2D5\";\r\n}\r\n.fa-grav:before {\r\n  content: \"\\F2D6\";\r\n}\r\n.fa-etsy:before {\r\n  content: \"\\F2D7\";\r\n}\r\n.fa-imdb:before {\r\n  content: \"\\F2D8\";\r\n}\r\n.fa-ravelry:before {\r\n  content: \"\\F2D9\";\r\n}\r\n.fa-eercast:before {\r\n  content: \"\\F2DA\";\r\n}\r\n.fa-microchip:before {\r\n  content: \"\\F2DB\";\r\n}\r\n.fa-snowflake-o:before {\r\n  content: \"\\F2DC\";\r\n}\r\n.fa-superpowers:before {\r\n  content: \"\\F2DD\";\r\n}\r\n.fa-wpexplorer:before {\r\n  content: \"\\F2DE\";\r\n}\r\n.fa-meetup:before {\r\n  content: \"\\F2E0\";\r\n}\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n  <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\n<table style=\"width:100%\">\n  <tr>\n      <td>\n     </td>\n    <td>\n<!-- The ToolBar -->\n<app-mainbar></app-mainbar>\n    </td>\n  </tr>\n  <tr>\n    <td>\n<!-- menu -->\n    </td>\n    <td>\n<!-- Content -->\n<router-outlet></router-outlet>\n    </td>\n    <td>\n      <!-- Advert where applicable -->\n          </td>\n  </tr>\n  <tr>\n    <td>\n      <!-- loan Buttons -->\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <!-- Footer -->\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_component__ = __webpack_require__("../../../../../src/app/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userrole_userrole_component__ = __webpack_require__("../../../../../src/app/userrole/userrole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__factype_factype_component__ = __webpack_require__("../../../../../src/app/factype/factype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__postrepay_postrepay_component__ = __webpack_require__("../../../../../src/app/postrepay/postrepay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customerinfo_customerinfo_component__ = __webpack_require__("../../../../../src/app/customerinfo/customerinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mainbar_mainbar_component__ = __webpack_require__("../../../../../src/app/mainbar/mainbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mainbar2_mainbar2_component__ = __webpack_require__("../../../../../src/app/mainbar2/mainbar2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__applyloan_applyloan_component__ = __webpack_require__("../../../../../src/app/applyloan/applyloan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loanslider_loanslider_component__ = __webpack_require__("../../../../../src/app/loanslider/loanslider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__mainbar_mainbar_component__["a" /* MainbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__userrole_userrole_component__["a" /* UserroleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__factype_factype_component__["a" /* FactypeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__postrepay_postrepay_component__["a" /* PostrepayComponent */],
                __WEBPACK_IMPORTED_MODULE_11__customerinfo_customerinfo_component__["a" /* CustomerinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__mainbar2_mainbar2_component__["a" /* Mainbar2Component */],
                __WEBPACK_IMPORTED_MODULE_16__applyloan_applyloan_component__["a" /* ApplyloanComponent */],
                __WEBPACK_IMPORTED_MODULE_17__loanslider_loanslider_component__["a" /* LoansliderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* routes */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_component__["a" /* ServicesComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userrole_userrole_component__ = __webpack_require__("../../../../../src/app/userrole/userrole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factype_factype_component__ = __webpack_require__("../../../../../src/app/factype/factype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postrepay_postrepay_component__ = __webpack_require__("../../../../../src/app/postrepay/postrepay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customerinfo_customerinfo_component__ = __webpack_require__("../../../../../src/app/customerinfo/customerinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mainbar2_mainbar2_component__ = __webpack_require__("../../../../../src/app/mainbar2/mainbar2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__applyloan_applyloan_component__ = __webpack_require__("../../../../../src/app/applyloan/applyloan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loanslider_loanslider_component__ = __webpack_require__("../../../../../src/app/loanslider/loanslider.component.ts");








var router = [
    { path: '', redirectTo: 'userrole', pathMatch: 'full' },
    //  {path: 'newrole', component: NewroleComponent },
    { path: 'facilitytype', component: __WEBPACK_IMPORTED_MODULE_2__factype_factype_component__["a" /* FactypeComponent */] },
    { path: 'repaypost', component: __WEBPACK_IMPORTED_MODULE_3__postrepay_postrepay_component__["a" /* PostrepayComponent */] },
    { path: 'userrole', component: __WEBPACK_IMPORTED_MODULE_1__userrole_userrole_component__["a" /* UserroleComponent */] },
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_4__customerinfo_customerinfo_component__["a" /* CustomerinfoComponent */] },
    { path: 'mainheader', component: __WEBPACK_IMPORTED_MODULE_5__mainbar2_mainbar2_component__["a" /* Mainbar2Component */] },
    { path: 'applyloan', component: __WEBPACK_IMPORTED_MODULE_6__applyloan_applyloan_component__["a" /* ApplyloanComponent */] },
    { path: 'loanslier', component: __WEBPACK_IMPORTED_MODULE_7__loanslider_loanslider_component__["a" /* LoansliderComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/applyloan/applyloan.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <mat-horizontal-stepper class=\"w3-small w3-text-grey\">\n        <mat-step [stepControl]=\"firstFormGroup\">\n         <ng-template matStepLabel >Personal Details</ng-template>\n           <div class=\"main main-raised  w3-small\">\n           <p>\n           <table style=\"width:90%\" >\n              <tr>\n              <td>\n              <mat-form-field class=\"full-width\">\n<mat-select placeholder=\"Choose Title\">\n    <mat-option value=\"Mr\">Mr</mat-option>\n    <mat-option value=\"Mrs\">Mrs</mat-option>\n    <mat-option value=\"Miss\">Miss</mat-option>\n    <mat-option value=\"Chief\">Chief</mat-option>\n    <mat-option value=\"Prof\">Prof</mat-option>\n    <mat-option value=\"Pastor\">Pastor</mat-option>\n    <mat-option value=\"Alhaji\">Alhaji</mat-option>\n    <mat-option value=\"Alhaja\">Alhaja</mat-option>\n</mat-select>\n</mat-form-field>\n\n              </td>\n              <td class=\"td-space2\"></td>\n              <td>\n                  <mat-form-field class=\"half-full-width\">\n                  <input matInput placeholder=\"Surname\">\n                </mat-form-field>\n              </td>\n              </tr>\n              <tr>\n                <td>\n                    <mat-form-field class=\"full-width\">\n                        <input matInput placeholder=\"First Name\">\n                      </mat-form-field>\n                </td>\n                <td class=\"td-space2\"></td>\n                <td>\n                      <mat-form-field class=\"half-full-width\">\n                        <input matInput placeholder=\"Middle Name\">\n                      </mat-form-field>\n                </td>\n                </tr>\n                <tr>\n                    <td>\n           <label class=\"w3-small w3-text-grey\" >Sex:</label>\n           <br>\n          <mat-radio-group  class=\"w3-small w3-text-grey\"  >\n          <mat-radio-button value=\"male\" >Male </mat-radio-button>\n          <mat-radio-button value=\"female\" >Female </mat-radio-button>\n          </mat-radio-group>\n           </td>\n                    <td class=\"td-space\"></td>\n                    <td>\n                        <label class=\"w3-small w3-text-grey\" >Marital Status</label>\n                        <br>\n                        <mat-radio-group  class=\"w3-small w3-text-grey\" >\n                        <mat-radio-button value=\"single\">Single </mat-radio-button>\n                        <mat-radio-button value=\"married\">Married</mat-radio-button>\n                        <mat-radio-button value=\"divorced\">Divorced</mat-radio-button>\n                        </mat-radio-group>\n                    </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <mat-form-field class=\"full-width\">\n                                <input matInput   [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker></mat-datepicker>\n                              </mat-form-field>\n                        </td>\n                        <td class=\"td-space\"></td>\n                        <td>\n\n                            <mat-label class=\"w3-small w3-text-grey\">Means of Identification</mat-label>\n                            <mat-radio-group  class=\"w3-small w3-text-grey\">\n                            <mat-radio-button value=\"workid\">Work ID</mat-radio-button>\n                            <br>\n                            <mat-radio-button value=\"intlpassport\">Int; Passport</mat-radio-button>\n                            <mat-radio-button value=\"driverlicense\">Driver License</mat-radio-button>\n                            <mat-radio-button value=\"nationalid\">National ID</mat-radio-button>\n                            </mat-radio-group>\n                        </td>\n                        </tr>\n              <tr>\n              <td>\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Mobile No\">\n                  </mat-form-field>\n              </td>\n              <td class=\"td-space\"></td>\n              <td>\n\n                  <mat-form-field class=\"half-full-width\">\n                      <input matInput placeholder=\"Personal E-mail\">\n                    </mat-form-field>\n              </td>\n              </tr>\n\n              <tr>\n                  <td colspan=2>\n\n                    <mat-form-field class=\"half-full-width\">\n                        <input matInput placeholder=\"Residential Address\">\n                      </mat-form-field>\n                  </td>\n\n                  </tr>\n                  <tr>\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <mat-select placeholder=\"State\" >\n\n                            <mat-option *ngFor=\" let lstate of nigeriastates\" value = {{lstate.stateid}} (click) = \"filtercity(lstate)\">{{lstate.statename}}</mat-option>\n                          </mat-select>\n                          </mat-form-field>\n                      </td>\n                      <td class=\"td-space2\"></td>\n                      <td>\n                        <mat-form-field class=\"half-full-width\">\n                            <mat-select placeholder=\"City\">\n                                <mat-option *ngFor=\" let city of filteredcities\" value={{city.cityid}}>{{city.cityname}}</mat-option>\n                              </mat-select>\n                        </mat-form-field>\n\n                      </td>\n\n                      </tr>\n              </table>\n              </div>\n\n            <div>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n\n             </mat-step>\n        <mat-step [stepControl]=\"secondFormGroup\">\n                 <ng-template matStepLabel>Employment and Next of Kin</ng-template>\n                 <div class=\"main main-raised  w3-small\">\n<p>\n                   <table  style=\"width:90%\">\n                     <tr >\n                        <td>\n                         <mat-form-field  class=\"full-width\">\n                         <input matInput placeholder=\"Present Employer\" >\n                       </mat-form-field>\n                      </td>\n                       <td class=\"td-space2\"></td>\n                <td>\n  <mat-form-field class=\"half-full-width\">\n    <input matInput placeholder=\"Address\">\n  </mat-form-field>\n                    </td>\n                      </tr>\n                     <tr>\n                       <td>\n                           <mat-form-field class=\"full-width\">\n                               <input matInput placeholder=\"Position at work\">\n                             </mat-form-field>\n                       </td>\n                       <td class=\"td-space2\"></td>\n                        <td>\n                            <mat-form-field class=\"half-full-width\">\n                              <input matInput placeholder=\"Department\">\n                           </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>\n                            <mat-form-field class=\"full-width\">\n                                <input matInput placeholder=\"Official E-mail\">\n                              </mat-form-field>\n                           </td>\n                           <td class=\"td-space2\"></td>\n                                <td>\n                                <mat-form-field class=\"half-full-width\">\n                                    <input matInput placeholder=\"Telephone (Office)\">\n                                  </mat-form-field>\n\n                               </td>\n                               </tr>\n                     </table>\n                     <div class=\"w3-container w3-black\">\n                     <h6> Next of Kin </h6>\n                    </div>\n                     <table style=\"width:90%\">\n                        <tr>\n                        <td>\n                        <mat-form-field class=\"full-width\" >\n               <mat-select placeholder=\"Choose Title\">\n               <mat-option value=\"Mr\">Mr</mat-option>\n               <mat-option value=\"Mrs\">Mrs</mat-option>\n               <mat-option value=\"Miss\">Miss</mat-option>\n               <mat-option value=\"Chief\">Chief</mat-option>\n               <mat-option value=\"Prof\">Prof</mat-option>\n               <mat-option value=\"Pastor\">Pastor</mat-option>\n               <mat-option value=\"Alhaji\">Alhaji</mat-option>\n               <mat-option value=\"Alhaja\">Alhaja</mat-option>\n               </mat-select>\n               </mat-form-field>\n                        </td>\n                        <td class=\"td-space2\"></td>\n                        <td>\n                            <mat-form-field class=\"half-full-width\">\n                            <input matInput placeholder=\"Surname\">\n                          </mat-form-field>\n                        </td>\n                        </tr>\n                        <tr>\n                          <td>\n                              <mat-form-field class=\"full-width\">\n                                  <input matInput placeholder=\"Other Name\">\n                                </mat-form-field>\n                          </td>\n                          <td class=\"td-space2\"></td>\n                          <td>\n                           <label class=\"w3-small w3-text-grey\" >Sex:</label>\n                          <mat-radio-group  class=\"w3-small w3-text-grey\"  >\n                          <mat-radio-button value=\"male\" >Male </mat-radio-button>\n                          <mat-radio-button value=\"female\" >Female </mat-radio-button>\n                          </mat-radio-group>\n                          </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                 <mat-form-field class=\"full-width\">\n                                     <input matInput placeholder=\"Telephone (Home)\">\n                                   </mat-form-field>\n                             </td>\n                             <td class=\"td-space2\"></td>\n                                 <td>\n                                   <mat-form-field class=\"half-full-width\">\n                                       <input matInput placeholder=\"Mobile No\">\n                                     </mat-form-field>\n                              </td>\n                              </tr>\n\n                              <tr>\n                                  <td>\n                                     <mat-form-field class=\"full-width\">\n                                         <input matInput placeholder=\"Residential Address (No P.O. Box)\">\n                                       </mat-form-field>\n                                  </td>\n                                  </tr>\n                               <tr>\n                                <td>\n\n                                    <mat-form-field class=\"full-width\">\n                                        <mat-select placeholder=\"State\">\n                                          <mat-option *ngFor=\" let lstate of nigeriastates\" value={{lstate.stateid}}>{{lstate.statename}}</mat-option>\n                                        </mat-select>\n                                        </mat-form-field>\n                                </td>\n                                <td class=\"td-space2\"></td>\n                                <td>\n                                    <mat-form-field class=\"half-full-width\">\n                                        <input matInput placeholder=\"City\">\n                                      </mat-form-field>\n\n                                </td>\n\n                                </tr>\n                        </table>\n                     </div>\n\n             <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n        </mat-step>\n <mat-step [stepControl]=\"forthFormGroup\">\n  <ng-template matStepLabel>Loan and Bank Details</ng-template>\n    <div class=\"main main-raised  w3-small\">\n        <p>\n\n                           <table style=\"width:90%\">\n                             <tr >\n                                <td>\n                                 <mat-form-field class=\"half-full-width\">\n                                 <input matInput placeholder=\"Loan Amount\" >\n                               </mat-form-field>\n                            </td>\n                               <td class=\"td-space2\"></td>\n                               <td>\n                                   <mat-form-field class=\"full-width\">\n                                       <input matInput type=\"number\" placeholder=\"Tenor in Months\">\n                                     </mat-form-field>\n                               </td>\n                               </tr>\n                               <tr>\n                                   <td>\n                                    <mat-form-field class=\"half-full-width\">\n                                      <input matInput placeholder=\"Amount in words\">\n                                    </mat-form-field>\n                                </td>\n                                <td class=\"td-space2\"></td>\n                                       <td>\n                                        <mat-form-field class=\"full-width\">\n                                          <mat-select placeholder=\"Loan Purpose\">\n                                          <mat-option *ngFor=\" let loantype of loantypes\" value={{loantype.loantypeid}}>{{loantype.loandesc}}</mat-option>\n                                        </mat-select>\n\n                                        </mat-form-field>\n                                    </td>\n                                       </tr>\n                                       <tr>\n                                        <td>\n                                            <mat-form-field class=\"half-full-width\">\n                                                <mat-select placeholder=\"Choose Source of Repayment\">\n                                                <mat-option *ngFor=\" let repay of RepayMethods\" value={{repay.id}}>{{repay.repaydesc}}</mat-option>\n                                                </mat-select>\n                                                </mat-form-field>\n                                     </td>\n                                     <td class=\"td-space2\"></td>\n                                     <td>\n                                        <mat-form-field class=\"full-width\">\n                                            <mat-select placeholder=\"Choose Method of Repayment\">\n                                            <mat-option value=\"directdebit\">Direct Debit</mat-option>\n                                            <mat-option value=\"others\">Others</mat-option>\n\n                                            </mat-select>\n                                            </mat-form-field>\n                                        </td>\n                                      </tr>\n                                    </table>\n<div class=\"w3-container w3-dark-grey\">\n    <h5>Bank Details to Credit</h5>\n<label>Your Bank details are required to process your loan application. Please note that the information provided is strictly for the loan purpose</label>\n</div>\n<table style=\"width:90%\">\n<tr>\n<td>\n    <label class=\"w3-small w3-text-grey\" >Do you have a Bank Account?</label>\n    <br>\n   <mat-radio-group  class=\"w3-small w3-text-grey\"  >\n   <mat-radio-button value=\"Yes\" >Yes </mat-radio-button>\n   <mat-radio-button value=\"No\" >No </mat-radio-button>\n   </mat-radio-group>\n</td>\n<td class=\"td-space2\"></td>\n<td>\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Bank Verification No.\">\n      </mat-form-field>\n</td>\n</tr>\n<tr>\n<td>\n    <mat-form-field class=\"half-full-width\">\n        <mat-select placeholder=\"Choose Title\">\n        <mat-option value=\"Accessbank\">Access Bank Plc</mat-option>\n        <mat-option value=\"gtbank\">Guaranty Trust Bank Plc</mat-option>\n        <mat-option value=\"zenithbk\">Zenith Bank Plc</mat-option>\n        <mat-option value=\"1stbank\">First Bank Plc</mat-option>\n        </mat-select>\n        </mat-form-field>\n</td>\n<td class=\"td-space2\"></td>\n<td>\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Account Number\">\n      </mat-form-field>\n</td>\n</tr>\n</table>\n</div>\n\n\n<!-- <div>\n<button mat-button matStepperPrevious>Back</button>\n<button mat-button matStepperNext>Next</button>\n</div> -->\n</mat-step>\n        <mat-step>\n          <ng-template matStepLabel> Guarantor and Attach Documents</ng-template>\n          <div class=\"main main-raised  w3-small\">\n            <p>\n            <table style=\"width:90%\">\n               <tr>\n               <td>\n               <mat-form-field class=\"half-full-width\">\n      <mat-select placeholder=\"Choose Title\">\n      <mat-option value=\"Mr\">Mr</mat-option>\n      <mat-option value=\"Mrs\">Mrs</mat-option>\n      <mat-option value=\"Miss\">Miss</mat-option>\n      <mat-option value=\"Chief\">Chief</mat-option>\n      <mat-option value=\"Prof\">Prof</mat-option>\n      <mat-option value=\"Pastor\">Pastor</mat-option>\n      <mat-option value=\"Alhaji\">Alhaji</mat-option>\n      <mat-option value=\"Alhaja\">Alhaja</mat-option>\n      </mat-select>\n      </mat-form-field>\n               </td>\n               <td class=\"td-space2\"></td>\n               <td>\n                   <mat-form-field class=\"full-width\">\n                   <input matInput placeholder=\"Surname\">\n                 </mat-form-field>\n               </td>\n               </tr>\n               <tr>\n                 <td>\n                     <mat-form-field class=\"full-width\">\n                         <input matInput placeholder=\"Other Name\">\n                       </mat-form-field>\n                 </td>\n                 <td class=\"td-space2\"></td>\n                 <td>\n                  <label class=\"w3-small w3-text-grey\" >Sex:</label>\n                  <br>\n                 <mat-radio-group  class=\"w3-small w3-text-grey\"  >\n                 <mat-radio-button value=\"male\" >Male </mat-radio-button>\n                 <mat-radio-button value=\"female\" >Female </mat-radio-button>\n                 </mat-radio-group>\n                 </td>\n                 </tr>\n                 <tr>\n                     <td>\n                        <mat-form-field class=\"half-full-width\">\n                            <input matInput placeholder=\"Telephone (Home)\">\n                          </mat-form-field>\n                    </td>\n                    <td class=\"td-space2\"></td>\n                        <td>\n                          <mat-form-field class=\"full-width\">\n                              <input matInput placeholder=\"Mobile No\">\n                            </mat-form-field>\n                     </td>\n                     </tr>\n\n                     <tr>\n                         <td>\n                            <mat-form-field class=\"full-width\">\n                                <input matInput placeholder=\"Residential Address (No P.O. Box)\">\n                              </mat-form-field>\n                         </td>\n                         </tr>\n                      <tr>\n                       <td>\n                          <mat-form-field class=\"half-full-width\">\n                              <mat-select placeholder=\"State\">\n                                <mat-option *ngFor=\" let lstate of nigeriastates\" value={{lstate.stateid}}>{{lstate.statename}}</mat-option>\n                              </mat-select>\n                              </mat-form-field>\n                       </td>\n                       <td class=\"td-space2\"></td>\n                       <td>\n                          <mat-form-field class=\"full-width\">\n                              <input matInput placeholder=\"City\">\n                            </mat-form-field>\n                       </td>\n\n                       </tr>\n               </table>\n               <div class=\"w3-container w3-dark-grey\">\n                <label><b> Relevant Documents</b></label>\n              <br>\n            <label><i>Click the option button of the document to attach. Click the 'Choose file' button, select file and click upload button to upload. Note: All required documents must be attached</i></label>\n            </div>\n            <br>\n\n           <mat-radio-group  class=\"w3-small w3-text-grey\"   >\n           <mat-radio-button value=\"benid\" class=\"w3-margin-left\"   >Beneficiary ID</mat-radio-button>\n           <mat-radio-button value=\"bencheque\" >Beneficiary Post Dated Cheque</mat-radio-button>\n          <br>\n           <mat-radio-button value=\"bencheque\" class=\"w3-margin-left\" >Beneficiary Signature</mat-radio-button>\n           <mat-radio-button value=\"benid\" >Signed Dud Cheque form</mat-radio-button>\n           </mat-radio-group>\n\n            <table>\n<tr>\n<td>\n  <input type=\"file\" class=\"w3-btn w3-round-large w3-border w3-border-red\">\n   </td>\n  <td>\n    <input type=\"button\" value=\"Upload\" class=\"w3-btn w3-round-large w3-border w3-border-red\">\n      </td>\n      <td td class=\"td-space2\">\n          <input type=\"button\" value=\"Submit\" class=\"w3-btn w3-round-large w3-black w3-border w3-border-red\">\n            </td>\n</tr>\n\n</table>\n               </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/applyloan/applyloan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyloanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component__ = __webpack_require__("../../../../../src/app/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplyloanComponent = (function () {
    function ApplyloanComponent(services) {
        this.services = services;
        this.isLinear = false;
        this.nAdded = 0;
    }
    ApplyloanComponent.prototype.ngOnInit = function () {
        this.RepayMethods = this.services.RepaymentMethods;
        this.getStates();
        this.getLoantypes();
        this.getcity();
    };
    // return this.services.getloantypes().subscribe(lntypes => console.log(lntypes));
    ApplyloanComponent.prototype.filtercity = function (selectedstate) {
        this.filteredcities = this.statecities.filter(function (city) { return city.stateid === selectedstate.stateid; });
    };
    ApplyloanComponent.prototype.getcity = function () {
        var _this = this;
        return this.services.getstatecities().subscribe(function (ncities) { return _this.statecities = ncities; });
    };
    ApplyloanComponent.prototype.getLoantypes = function () {
        var _this = this;
        return this.services.getloantypes().subscribe(function (lntypes) { return _this.loantypes = lntypes; });
    };
    ApplyloanComponent.prototype.getStates = function () {
        var _this = this;
        return this.services.getstates().subscribe(function (nstates) { return _this.nigeriastates = nstates; });
    };
    ApplyloanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-applyloan',
            template: __webpack_require__("../../../../../src/app/applyloan/applyloan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_component__["a" /* ServicesComponent */]])
    ], ApplyloanComponent);
    return ApplyloanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customerinfo/customerinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"btnNewCustomerInfo==true\">\n  <p>\n  <div class=\"main main-raised\">\n    <div  class=\"w3-container w3-blue\">\n    <h3>Customer</h3>\n    </div>\n    <table style=\"width:90%\">\n    <tr>\n    <td>\n          <label>Title</label>\n          <select class=\"w3-select\" w3-gray name=\"option\">\n            <option value=\"\" >Choose Title</option>\n            <option value=\"Mr\">Mr</option>\n            <option value=\"Mrs\">Mrs</option>\n            <option value=\"Miss\">Miss</option>\n            <option value=\"Chief\">Chief</option>\n            <option value=\"Prof\">Prof</option>\n            <option value=\"Pastor\">Pastor</option>\n            <option value=\"Alhaji\">Alhaji</option>\n            <option value=\"Alhaja\">Alhaja</option>\n          </select>\n\n    </td>\n    <td class=\"td-space\"></td>\n    <td>\n      <label>Surname</label>\n          <input type=\"text\" [maxLength]=20 class=\"w3-input w3-hover-gray\" >\n\n\n    </td>\n    </tr>\n    <tr>\n      <td>\n          <label>First Name</label>\n              <input type=\"text\" [maxLength]=20 class=\"w3-input w3-hover-gray\">\n\n      </td>\n      <td class=\"td-space\"></td>\n      <td>\n          <label>Middle Name</label>\n              <input type=\"text\" [maxLength]=20 class=\"w3-input w3-hover-gray\">\n      </td>\n      </tr>\n      <tr>\n          <td>\n              <label>Sex</label>\n<mat-radio-group >\n<mat-radio-button value=\"male\">Male </mat-radio-button>\n<mat-radio-button value=\"female\">Female </mat-radio-button>\n</mat-radio-group>\n </td>\n          <td class=\"td-space\"></td>\n          <td>\n              <label>Marital Status</label>\n              <mat-radio-group >\n              <mat-radio-button value=\"single\">Single </mat-radio-button>\n              <mat-radio-button value=\"married\">Married</mat-radio-button>\n              <mat-radio-button value=\"divorced\">Divorced</mat-radio-button>\n              </mat-radio-group>\n          </td>\n          </tr>\n          <tr>\n              <td>\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput   [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n              </td>\n              <td class=\"td-space\"></td>\n              <td>\n\n                  <label>Means of Identification</label>\n                  <mat-radio-group >\n                  <mat-radio-button value=\"workid\">Work ID</mat-radio-button>\n                  <mat-radio-button value=\"intlpassport\">Int; Passport</mat-radio-button>\n                  <mat-radio-button value=\"driverlicense\">Driver License</mat-radio-button>\n                  <mat-radio-button value=\"nationalid\">National ID</mat-radio-button>\n                  </mat-radio-group>\n              </td>\n              </tr>\n    <tr>\n    <td>\n      <label>Mabile No</label>\n          <input type=\"text\" [maxLength]=20 class=\"w3-input w3-hover-gray \" >\n    </td>\n    <td class=\"td-space\"></td>\n    <td>\n        <label>Personal E-mail</label>\n        <input type=\"text\" [maxLength]=30 class=\"w3-input w3-hover-gray \" >\n    </td>\n    </tr>\n\n    <tr>\n        <td colspan=2>\n          <label>Residential Address</label>\n              <input type=\"text\" [maxLength]=40 class=\"w3-input w3-hover-gray \" >\n        </td>\n        <td class=\"td-space\"></td>\n        <td>\n\n        </td>\n\n        </tr>\n        <tr>\n            <td>\n              <label>City</label>\n                  <input type=\"text\" [maxLength]=20 class=\"w3-input w3-hover-gray \" >\n            </td>\n            <td class=\"td-space\"></td>\n            <td>\n                <label>State</label>\n                <input type=\"text\" [maxLength]=20 class=\"w3-input w3-hover-gray \" >\n            </td>\n\n            </tr>\n    <tr>\n    <td colspan=2>\n    <input type=\"button\" value=\"Loan\" class=\"w3-btn w3-round-large w3-border w3-border-red\">\n    &nbsp;&nbsp;\n        <input type=\"button\" value=\" Employment\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"btnNewCustomerInfo=false\">\n        &nbsp;&nbsp;\n      <input type=\"button\" value= \"Guarantor \" class=\"w3-btn w3-round-large w3-border w3-border-red\">\n      &nbsp;&nbsp;\n</td>\n<td>\n          <input type=\"button\" value=\"Next of Kin\" class=\"w3-btn w3-round-large w3-border w3-border-red\">\n          &nbsp;&nbsp;\n              <input type=\"button\" value=\"Attached Document(s)\" class=\"w3-btn w3-round-large w3-border w3-border-red\">\n      </td>\n    </tr>\n    </table>\n    </div>\n  </div>\n  <div *ngIf=\"btnNewCustomerInfo==false\">\n<p>\n    <div class=\"main main-raised\">\n      <div  class=\"w3-container w3-blue\">\n      <h3>Customer Information</h3>\n      </div>\n      <br>\n      <br>\n      <table style=\"width:90%\">\n          <tr>\n              <button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"btnNewCustomerInfo=true\"> New Customer </button>\n          </tr>\n\n      <tr>\n      <td>\n          <select class=\"w3-select\" w3-gray name=\"option\">\n            <option value=\"\" >Select Search Parameter</option>\n            <option value=\"customerid\">Customer ID</option>\n            <option value=\"CustomerName\">Customer Name</option>\n            <option value=\"Employer\">Employer Name</option>\n            <option value=\"Guarantor\">Guarantor Name</option>\n            <option value=\"Nextofkin\">Next of Kin</option>\n                 </select>\n\n      </td>\n      <td class=\"td-space\"></td>\n      <td>\n        <section id=\"newsletter\">\n          <div class=\"w3-container\">\n          <input type=\"text\" placeholder=\"Enter Your Search Parameter....\">\n          <button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\">Search </button>\n          </div>\n        </section>\n      </td>\n      </tr>\n      </table>\n      </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/customerinfo/customerinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerinfoComponent = (function () {
    function CustomerinfoComponent() {
        this.btnNewCustomerInfo = false;
    }
    CustomerinfoComponent.prototype.ngOnInit = function () {
    };
    CustomerinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customerinfo',
            template: __webpack_require__("../../../../../src/app/customerinfo/customerinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerinfoComponent);
    return CustomerinfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/factype/factype.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"NewFacility==0\">\n  <p>\n  <div class=\"main main-raised\" >\n    <div  class=\"w3-container w3-blue\">\n    <h4>Facility Type Setup</h4>\n    </div>\n    <br>\n    <br>\n    <table style=\"width:80%\">\n  <tr>\n      <button mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"setNewFacility()\"> New Facility </button>\n  </tr>\n      <tr>\n    <td>\n  <mat-form-field class=\"full-width\">\n        <mat-select placeholder=\"Select Search Parameter\" [(ngModel)]=\"fmodel.rolesearchparam\">\n          <mat-option value=\"facilityid\">Facility Type ID</mat-option>\n          <mat-option value=\"facilitydesc\">Facility Description</mat-option>\n          <mat-option value=\"ratetype\">Rate Type</mat-option>\n         </mat-select>\n        </mat-form-field>\n    </td>\n    <td class=\"td-space2\"></td>\n    <td>\n        <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Enter Your Search Parameter....\" [(ngModel)]=\"fmodel.roleSearch\">\n         </mat-form-field>\n  </td>\n  <td class=\"td-space2\"></td>\n  <td>\n        <button mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"getAllFacility(fmodel)\">Search </button>\n\n  </td>\n\n  </tr>\n    </table>\n    <table class=\"w3-table w3-stripped\" >\n      <tr class=\"w3-black\" *ngIf=\"mFacilitylist != null\">\n        <th>Facility ID</th>\n        <th> Description</th>\n        <th>Interest Rate (%)</th>\n        <th>Management Fee</th>\n        <th>Max Limit</th>\n        <th>Rate Type</th>\n      </tr>\n      <tr *ngFor= \"let post of mFacilitylist\" >\n      <!-- <div *ngFor= \"let post of mUserRole\"> -->\n\n     <td>\n         {{post.facilityid}}\n     </td>\n     <td>\n         {{post.facilitydesc}}\n         </td>\n         <td>\n             {{post.rate}}\n             </td>\n             <td>\n               {{post.managefee}}\n               </td>\n               <td>\n                {{post.maxlimit}}\n                </td>\n             <td>\n                 {{post.ratetype}}\n                 </td>\n                 <td>\n                  <button mat-button type=\"submit\" class=\"w3-btn red\" (click)=\"getFacility(post)\"><i class=\"fa-floppy-o\"></i> </button>\n                </td>\n\n                  <!-- </div> -->\n                </tr>\n                </table>\n\n</div>\n</div>\n<p>\n\n  <div class=\"main main-raised\"  *ngIf=\"NewFacility==2\">\n  <div  class=\"w3-container w3-blue\">\n  <h5>Facility Type Setup</h5>\n  </div>\n   <table style=\"width:80%\">\n  <tr>\n      <td>\n          <mat-form-field class=\"full-width\">\n          <mat-select  placeholder=\"Facility Type\" [(ngModel)]=\"fmole.facilitytype\">\n              <mat-option value=\"Loan\">Loan</mat-option>\n              <mat-option value=\"Lease\">Lease</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </td>\n  </tr>\n\n  <tr>\n  <td>\n\n        <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Facility Type ID\" [(ngModel)]=\"fmole.facilityid\">\n      </mat-form-field>\n  </td>\n  <td class=\"td-space2\"></td>\n  <td>\n      <mat-form-field class=\"half-full-width\">\n        <input matInput placeholder=\"Description\" [(ngModel)]=\"fmole.facilitydesc\" >\n      </mat-form-field>\n  </td>\n  </tr>\n  <tr>\n    <td>\n\n        <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Interest Rate(%)\" [(ngModel)]=\"fmole.rate\">\n          </mat-form-field>\n    </td>\n    <td class=\"td-space2\"></td>\n        <td>\n\n        <mat-form-field class=\"half-full-width\">\n                 <input matInput placeholder=\"Min Rate (%)\" [(ngModel)]=\"fmole.minrate\">\n          </mat-form-field>\n         </td>\n\n    </tr>\n         <tr>\n            <td>\n\n          <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Management Fee\" [(ngModel)]=\"fmole.managefee\">\n            </mat-form-field>\n            </td>\n            <td class=\"td-space2\"></td>\n            <td>\n            <mat-form-field class=\"half-full-width\">\n                 <mat-select  placeholder=\"Rate Type\" [(ngModel)]=\"fmole.ratetype\">\n                    <mat-option value=\"Fixed\">Fixed</mat-option>\n                    <mat-option value=\"Flexible\">Flexible</mat-option>\n                  </mat-select>\n                </mat-form-field>\n            </td>\n            </tr>\n  <tr>\n  <td>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Maximum Limit\" [(ngModel)]=\"fmole.maxlimit\">\n      </mat-form-field>\n  </td>\n  <td class=\"td-space2\"></td>\n  <td>\n<mat-form-field class=\"half-full-width\">\n     <mat-select placeholder=\"Limit Override By\" [(ngModel)]=\"fmole.limitoverrideby\" >\n        <mat-option value=\"1\">Senior Management</mat-option>\n        <mat-option value=\"2\">Managing Director</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </td>\n  </tr>\n  <tr>\n  <td>\n      <button class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"AddNewFacility(fmole)\">Submit</button>\n    </td>\n  <td class=\"td-space2\">\n\n  </td>\n\n  <td>\n    <button class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"frefresh()\">Back</button>\n    </td>\n  </tr>\n  </table>\n   </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/factype/factype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component__ = __webpack_require__("../../../../../src/app/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactypeComponent = (function () {
    function FactypeComponent(services) {
        this.services = services;
        this.nAdded = 0;
        this.NewFacility = 0;
        this.btnNewFacility = false;
        this.btnUpdate = true;
        this.nUpdate = 0;
        this.fmodel = {
            roleSearch: '',
            rolesearchparam: ''
        };
        this.fmole = {
            facilityid: '',
            facilitydesc: '',
            facilitytype: '',
            rate: 0,
            ratetype: '',
            minrate: 0,
            managefee: 0,
            maxlimit: 0,
            limitoverrideby: ''
        };
    }
    FactypeComponent.prototype.setNewFacility = function () {
        this.btnNewFacility = true;
        this.NewFacility = 2;
    };
    FactypeComponent.prototype.frefresh = function () {
        this.NewFacility = 0;
        this.fmole.facilityid = '';
        this.fmole.facilitydesc = '';
        this.fmole.facilitytype = '';
        this.fmole.rate = 0;
        this.fmole.ratetype = '';
        this.fmole.managefee = 0;
        this.fmole.minrate = 0;
        this.fmole.maxlimit = 0;
        this.fmole.limitoverrideby = '';
        this.getAllFacility(this.nuSers);
    };
    FactypeComponent.prototype.getAllFacility = function (searchP) {
        var _this = this;
        this.NewFacility = 0;
        if (searchP == null) {
            return this.services.getFacility(searchP).subscribe(function (sfacility) { return _this.mFacilitylist = sfacility; }, function (error) { return _this.errormsg = error; });
        }
        else {
            return this.services.getFacility(searchP).subscribe(function (sfacility) { return _this.mFacilitylist = sfacility; });
        }
    };
    FactypeComponent.prototype.getFacility = function (nFacilityID) {
        // return this.http.get(this.UserRoleUrl).subscribe(data => console.log(data));
        /* this.model.rolesearchparam = 'roleid';
        this.model.roleSearch = nRoleID;
         */ if (nFacilityID == null) 
        // tslint:disable-next-line:one-line
        {
            alert('Invalid Facility ID');
        }
        else {
            this.fmole.facilityid = nFacilityID.facilityid;
            this.fmole.facilitydesc = nFacilityID.facilitydesc;
            this.fmole.facilitytype = nFacilityID.facilitytype;
            this.fmole.ratetype = nFacilityID.ratetype;
            this.fmole.rate = nFacilityID.rate;
            this.fmole.minrate = nFacilityID.minrate;
            this.fmole.managefee = nFacilityID.managefee;
            this.fmole.maxlimit = nFacilityID.maxlimit;
            this.fmole.limitoverrideby = nFacilityID.limitoverrideby;
            this.btnNewFacility = false;
            this.btnUpdate = true;
            this.NewFacility = 2;
        }
    };
    FactypeComponent.prototype.AddNewFacility = function (ufacility) {
        var _this = this;
        this.NewFacility = 2;
        this.ufacility = JSON.stringify(ufacility);
        if (this.btnNewFacility === true) {
            this.services.addNewFacility(ufacility).subscribe(function (resp) { return _this.getStatus(resp); });
            this.NewFacility = 2;
            this.btnNewFacility = false;
        }
        else if (this.btnUpdate === true) {
            this.services.updateFacility(ufacility).subscribe(function (resp) { return _this.getStatus(resp); });
            this.fmole.facilityid = ufacility.facilityid;
            this.fmole.facilitydesc = ufacility.facilitydesc;
            this.fmole.facilitytype = ufacility.facilitytype;
            this.fmole.ratetype = ufacility.ratetype;
            this.fmole.rate = ufacility.rate;
            this.fmole.minrate = ufacility.minrate;
            this.fmole.managefee = ufacility.managefee;
            this.fmole.maxlimit = ufacility.maxlimit;
            this.fmole.limitoverrideby = ufacility.limitoverrideby;
            this.NewFacility = 2;
            this.btnUpdate = false;
        }
    };
    FactypeComponent.prototype.getStatus = function (numUpdate) {
        if (numUpdate === 1) {
            alert('Operation Successful');
        }
        else {
            alert('Unable to Update Record at this time; Please Try Again Later');
        }
    };
    FactypeComponent.prototype.ngOnInit = function () {
    };
    FactypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-factype',
            template: __webpack_require__("../../../../../src/app/factype/factype.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_component__["a" /* ServicesComponent */]])
    ], FactypeComponent);
    return FactypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loanslider/loanslider.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n<p>\n<div class=\"main main-raised\">\n  <p>\n<div class=\"w3-container w3-center\">\n    <label class=\"w3-black w3-xxlarge w3-padding w3-round-large w3-border\" >You can Borrow up to N5,000,000.00</label>\n  </div>\n  <p>\n  <table style=\"width:100%;margin-left:20px\">\n     <tr >\n<td style=\"width:100px\">\n    <select class=\"w3-select w3-small w3-round-large w3-border w3-border-red\" [(ngModel)]=\"lslider.principal\" (change)=\"Repayment()\">\n\n        <option *ngFor=\"let principal of principals\"  value={{principal}} >&#8358;{{principal}}</option>\n        </select>\n</td>\n<td >\n    <mat-slider type=\"range\" min=\"50000\"  thumbLabel=\"true\" max=\"4000000\" tickInterval=\"10000\" step=\"10000\" value=\"50000\" [(ngModel)]=\"lslider.princialslide\" style=\"width:500px\" (change)=\"Repayment()\"> </mat-slider>\n  </td>\n  <td >\n<span class=\"w3-small\">Monthly Repayment: &#8358; {{lslider.mnthrepay}}</span>\n      </td>\n</tr>\n\n\n\n<tr style=\"padding:100px\">\n    <td style=\"width:50px\">\n        <select class=\"w3-select w3-small w3-round-large w3-border w3-border-red\" [(ngModel)]=\"lslider.month\" (change)=\"Repayment()\">\n\n            <option *ngFor=\"let month1 of monthes\"  value={{month1}} >{{month1}} mth</option>\n          </select>\n    </td>\n    <td style=\"width:50px\">\n        <mat-slider  type=\"range\" min=\"1\"  item-width=\"100%\"  max=\"12\" thumbLabel=\"true\" tickInterval=\"1\" step=\"1\" value=\"1\" [(ngModel)]=\"lslider.monthslide\" (change)=\"Repayment()\"> </mat-slider>\n      </td>\n\n      <td >\n    <span class=\"w3-small\" >Total Repayment: &#8358; {{lslider.totalrepay}} </span>\n          </td>\n    </tr>\n</table>\n<div class=\"w3-container w3-right\">\n    <button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" > Apply Now  </button>\n  </div>\n  <p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/loanslider/loanslider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_ts_math__ = __webpack_require__("../../../../angular-ts-math/dist/angular-ts-math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_ts_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_ts_math__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoansliderComponent = (function () {
    function LoansliderComponent() {
        this.principals = [];
        this.monthes = [];
        this.lslider = {
            principal: 0,
            rate: 10.0,
            mnthrepay: 0.00,
            totalrepay: 0.00,
            month: 1,
            princialslide: 10000,
            monthslide: 1
        };
    }
    LoansliderComponent.prototype.Repayment = function () {
        // this.monthrepay = 0;
        this.compprincipal = 0;
        this.totalreplayment = 0;
        this.principalAmt = 0;
        this.monthrepay = 0;
        this.months = this.lslider.monthslide;
        this.principalAmt = this.lslider.principal;
        for (var t = 1; t <= this.lslider.month; t = t + 1) {
            this.monthlyInterest = (this.principalAmt * 1 * 10) / 100;
            this.compprincipal = __WEBPACK_IMPORTED_MODULE_1_angular_ts_math__["angularMath"].sum(this.principalAmt, this.monthlyInterest);
            this.monthrepay = this.monthrepay + this.principalAmt;
            this.principalAmt = this.compprincipal;
            this.totalreplayment = this.totalreplayment + this.compprincipal;
        }
        this.lslider.mnthrepay = this.monthrepay;
        this.lslider.totalrepay = this.totalreplayment;
        // alert(this.lslider.mnthrepay);
    };
    LoansliderComponent.prototype.ngOnInit = function () {
        for (var i = 50000; i <= 4000000; i = i + 10000) 
        // tslint:disable-next-line:one-line
        {
            this.principals.push(i);
        }
        for (var t = 1; t <= 12; t = t + 1) 
        // tslint:disable-next-line:one-line
        {
            this.monthes.push(t);
        }
    };
    LoansliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loanslider',
            template: __webpack_require__("../../../../../src/app/loanslider/loanslider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoansliderComponent);
    return LoansliderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainbar/mainbar.component.html":
/***/ (function(module, exports) {

module.exports = "  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item  routerLink=\"facilitytype\">\n     <span>Facility Type</span>\n    </button>\n    <button mat-menu-item  routerLink=\"userrole\">\n      <span>User Role</span>\n    </button>\n    <button mat-menu-item routerLink=\"repaypost\">\n         <span>Post Repayment</span>\n    </button>\n    <button mat-menu-item routerLink=\"customer\">\n        <span>Customer</span>\n      </button>\n      <button mat-menu-item routerLink=\"applyloan\">\n         <span>Apply for Loan/Lease</span>\n        </button>\n        <button mat-menu-item routerLink=\"loanslier\">\n          <span>Loan Slider</span>\n         </button>\n  </mat-menu>\n\n<mat-toolbar  color=\"primary\">\n<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n<div style=\"width:60%\">\n  <div class=\"menu-div\"></div>\n  <div class=\"menu-div\"></div>\n  <div class=\"menu-div\"></div>\n</div>\n</button>\n<span class=\"w3-margin\">   Convenience Pay</span>\n<span class=\"w3-padding-80\"></span>\n\n<div class=\"w3-bar w3-medium w3-padding-60 w3-center\">\n<a class=\"w3-bar-item w3-button \"> Home</a>\n<a class=\"w3-bar-item w3-button\"> Services</a>\n<a class=\"w3-bar-item w3-button\">  Contact Us</a>\n<a  class=\"w3-bar-item w3-button\"> FAQs</a>\n<a  class=\"w3-bar-item w3-button\"> About Us</a>\n<button mat-button type=\"submit\" class=\"w3-btn w3-round w3-border w3-green\"> Login </button>\n</div>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "../../../../../src/app/mainbar/mainbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainbarComponent = (function () {
    function MainbarComponent() {
    }
    MainbarComponent.prototype.ngOnInit = function () {
    };
    MainbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mainbar',
            template: __webpack_require__("../../../../../src/app/mainbar/mainbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainbarComponent);
    return MainbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainbar2/mainbar2.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<!-- <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\"> -->\n<body>\n<div class=\"w3-container\">\n\n<h2>Right-Align Links</h2>\n<p>To right-align elements in the navigation bar, add the w3-right class:</p>\n\n<div class=\"w3-bar w3-border w3-light-grey\">\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Home</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 1</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 2</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button w3-green w3-right\">Link 3</a>\n</div>\n\n</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/mainbar2/mainbar2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mainbar2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Mainbar2Component = (function () {
    function Mainbar2Component() {
    }
    Mainbar2Component.prototype.ngOnInit = function () {
    };
    Mainbar2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mainbar2',
            template: __webpack_require__("../../../../../src/app/mainbar2/mainbar2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Mainbar2Component);
    return Mainbar2Component;
}());



/***/ }),

/***/ "../../../../../src/app/postrepay/postrepay.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<p>\n<div class=\"main main-raised\" *ngIf=\"NewRepay==2\">\n  <div  class=\"w3-container w3-blue\">\n  <h3>Loan repayment (Single transaction posting)</h3>\n  </div>\n  <br>\n  <br>\n  <table style=\"width:80%\">\n  <tr>\n  <td>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Select Customer\">\n      </mat-form-field>\n  </td>\n  <td class=\"td-space2\"></td>\n  <td>\n\n      <mat-form-field class=\"half-full-width\">\n        <input matInput placeholder=\"Loan Purpose\">\n      </mat-form-field>\n\n  </td>\n  </tr>\n  <tr>\n    <td>\n\n<mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Loan Account\">\n </mat-form-field>\n    </td>\n    <td class=\"td-space2\"></td>\n    <td>\n\n<mat-form-field class=\"half-full-width\">\n            <input matInput placeholder=\"Outstanding Balance\">\n          </mat-form-field>\n    </td>\n    </tr>\n    <tr>\n        <td>\n\n          <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Amount\" >\n              </mat-form-field>\n        </td>\n        <td class=\"td-space2\"></td>\n        <td>\n\n              <mat-form-field class=\"half-full-width\">\n                <mat-select placeholder=\"Mode of Payment\">\n                    <mat-option value=\"1\">Cash</mat-option>\n                    <mat-option value=\"2\">Cheque</mat-option>\n                    <mat-option value=\"3\">Bank Draft</mat-option>\n                  </mat-select>\n                </mat-form-field>\n        </td>\n        </tr>\n        <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput   [matDatepicker]=\"picker\" placeholder=\"Transaction Date\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </td>\n            <td class=\"td-space2\"></td>\n            <td>\n\n              <mat-form-field class=\"half-full-width\">\n                <input matInput   [matDatepicker]=\"valpicker\" placeholder=\"Value Date\">\n                <mat-datepicker-toggle matSuffix [for]=\"valpicker\"></mat-datepicker-toggle>\n                <mat-datepicker #valpicker></mat-datepicker>\n              </mat-form-field>\n            </td>\n            </tr>\n  <tr>\n  <td>\n\n<mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Remarks\" >\n      </mat-form-field>\n  </td>\n  </tr>\n  <tr>\n  <td>\n  <button mat-button  class=\"w3-btn w3-round-large w3-border w3-border-red\"> Submit </button>\n  </td>\n\n  <td class=\"td-space2\"> </td>\n  <td>\n  &nbsp;&nbsp;&nbsp;&nbsp;\n\n  <button  mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"prefresh()\"> Back </button>\n  &nbsp;&nbsp;&nbsp;&nbsp;\n\n    <button  mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\"> Bulk Repayment Upload  </button>\n    </td>\n  </tr>\n  </table>\n  </div>\n  <div class=\"main main-raised\" *ngIf=\"NewRepay==0\">\n    <div  class=\"w3-container w3-blue\">\n    <h4>Post Repayment</h4>\n    </div>\n    <table style=\"width:80%\">\n  <tr>\n      <button mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"setNewRepay()\"> New Repayment </button>\n  </tr>\n      <tr>\n    <td>\n  <mat-form-field class=\"full-width\">\n        <mat-select placeholder=\"Select Search Parameter\" [(ngModel)]=\"rmodel.rolesearchparam\">\n          <mat-option value=\"loanid\">Loan Number</mat-option>\n          <mat-option value=\"customerID\">Customer ID</mat-option>\n         </mat-select>\n        </mat-form-field>\n    </td>\n    <td class=\"td-space2\"></td>\n    <td>\n        <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Enter Your Search Parameter....\" [(ngModel)]=\"rmodel.roleSearch\">\n         </mat-form-field>\n  </td>\n  <td class=\"td-space2\"></td>\n  <td>\n        <button mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"getAllRepay(rmodel)\">Search </button>\n\n  </td>\n\n  </tr>\n    </table>\n    <table class=\"w3-table w3-stripped\" >\n      <tr class=\"w3-black\" *ngIf=\"mRepayList != null\">\n        <th>Facility ID</th>\n        <th> Description</th>\n        <th>Interest Rate (%)</th>\n        <th>Management Fee</th>\n        <th>Max Limit</th>\n        <th>Rate Type</th>\n      </tr>\n      <tr *ngFor= \"let post of mRepayList\" >\n      <!-- <div *ngFor= \"let post of mUserRole\"> -->\n\n     <td>\n         {{post.facilityid}}\n     </td>\n     <td>\n         {{post.facilitydesc}}\n         </td>\n         <td>\n             {{post.rate}}\n             </td>\n             <td>\n               {{post.managefee}}\n               </td>\n               <td>\n                {{post.maxlimit}}\n                </td>\n             <td>\n                 {{post.ratetype}}\n                 </td>\n                 <td>\n                  <button mat-button type=\"submit\" class=\"w3-btn red\" (click)=\"getRepay(post)\"><i class=\"fa-floppy-o\"></i> </button>\n                </td>\n\n                  <!-- </div> -->\n                </tr>\n                </table>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/postrepay/postrepay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostrepayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component__ = __webpack_require__("../../../../../src/app/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostrepayComponent = (function () {
    function PostrepayComponent(services) {
        this.services = services;
        this.nAdded = 0;
        this.NewRepay = 0;
        this.btnNewRepay = false;
        this.btnUpdate = true;
        this.nUpdate = 0;
        this.rmodel = {
            roleSearch: '',
            rolesearchparam: ''
        };
        this.rmole = {
            loanaccount: '',
            loanpurpose: '',
            loanamount: 0,
            loanbalance: 0,
            modeofpay: '',
            selcustomer: '',
            transdate: Date,
            valdate: Date,
            remarks: ''
        };
    }
    PostrepayComponent.prototype.setNewRepay = function () {
        this.btnNewRepay = true;
        this.NewRepay = 2;
    };
    PostrepayComponent.prototype.prefresh = function () {
        this.NewRepay = 0;
        this.rmole.loanaccount = '';
        this.rmole.loanpurpose = '';
        this.rmole.loanamount = 0;
        this.rmole.loanbalance = 0;
        this.rmole.modeofpay = '';
        this.rmole.transdate = null;
        this.rmole.valdate = null;
        this.rmole.selcustomer = '';
        this.rmole.remarks = '';
        // this.getAllFacility(this.nuSers);
    };
    PostrepayComponent.prototype.getAllRepay = function (searhP) {
        this.NewRepay = 0;
    };
    PostrepayComponent.prototype.getRepay = function (nRepay) {
        this.btnNewRepay = false;
        this.btnUpdate = true;
        this.NewRepay = 2;
    };
    PostrepayComponent.prototype.ngOnInit = function () {
    };
    PostrepayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-postrepay',
            template: __webpack_require__("../../../../../src/app/postrepay/postrepay.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_component__["a" /* ServicesComponent */]])
    ], PostrepayComponent);
    return PostrepayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Popup } from 'ng2-opd-Popup';
var ServicesComponent = (function () {
    // private popup: Popup
    function ServicesComponent(http) {
        this.http = http;
        this.title = 'app';
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.errormsg = '';
        this.Url = 'http://localhost:50000/api/'; // URL to web api
        this.nAdded = 0;
        this.model = {
            roleSearch: '',
            rolesearchparam: ''
        };
        this.RepaymentMethods = ['Salary',
            { id: 1, repaydesc: 'Salary Bonus' },
            { id: 2, repaydesc: 'Salary Upfront' },
            { id: 3, repaydesc: 'LPO Proceed' },
            { id: 4, repaydesc: 'Business Proceed' },
            { id: 5, repaydesc: 'Annuity' },
            { id: 6, repaydesc: 'Gratuity' },
            { id: 7, repaydesc: 'Insurance' },
            { id: 8, repaydesc: 'Stock' }
        ];
    }
    ServicesComponent.prototype.getPost = function (searchP) {
        // return this.http.get(this.UserRoleUrl).subscribe(data => console.log(data));
        if (searchP == null) 
        // tslint:disable-next-line:one-line
        {
            // this.popup.show();
            // return this.http.get(this.UserRoleUrl).subscribe(userrole => this.mUserRole = userrole, error => this.errormsg = <any>error);
            return this.http.get(this.Url);
        }
        else 
        // tslint:disable-next-line:one-line
        {
            this.pUseroleURL = this.Url + 'UserRole/' + searchP.rolesearchparam + ':' + searchP.roleSearch;
            // alert(searchP.rolesearchparam + ':' + searchP.roleSearch);
            // return this.http.get(this.pUseroleURL ).subscribe(userrole => this.mUserRole = userrole);
            return this.http.get(this.pUseroleURL);
        }
    };
    ServicesComponent.prototype.getstatecities = function () {
        // GetStateCities
        this.pUseroleURL = this.Url + 'ControlServices/GetStateCities';
        return this.http.get(this.pUseroleURL);
    };
    ServicesComponent.prototype.getstates = function () {
        // Getstats
        this.pUseroleURL = this.Url + 'ControlServices/GetStates';
        return this.http.get(this.pUseroleURL);
    };
    ServicesComponent.prototype.getloantypes = function () {
        this.pUseroleURL = this.Url + 'ControlServices/Getloantypes';
        return this.http.get(this.pUseroleURL);
    };
    ServicesComponent.prototype.getRole = function (nRoleID) {
        this.pUseroleURL = this.Url + 'roleid' + ':' + nRoleID;
        return this.http.get(this.pUseroleURL);
        // return this.http.get(this.pUseroleURL ).subscribe(userrole => console.log(userrole));
    };
    ServicesComponent.prototype.addNewRole = function (uRole) {
        // return this.http.get(this.pUseroleURL ).subscribe(userrole => this.mUserRole = userrole);
        return this.http.post(this.Url + 'UserRole', uRole);
        // return this.http.post( this.UserRoleUrl, this._mRole ).subscribe(res => console.log(res.json()));
        // alert('Record Saved Successfully');
    };
    // FacilityModule
    ServicesComponent.prototype.getFacility = function (searchP) {
        // return this.http.get(this.UserRoleUrl).subscribe(data => console.log(data));
        if (searchP == null) {
            // this.popup.show();
            // return this.http.get(this.UserRoleUrl).subscribe(userrole => this.mUserRole = userrole, error => this.errormsg = <any>error);
            return this.http.get(this.Url + 'facility/');
        }
        else {
            this.pUseroleURL = this.Url + 'facility/' + searchP.rolesearchparam + ':' + searchP.roleSearch;
            return this.http.get(this.pUseroleURL);
        }
    };
    ServicesComponent.prototype.updateFacility = function (nFacilityID) {
        this.pFacilityURL = this.Url + 'facility/' + nFacilityID.facilityid;
        return this.http.put(this.pFacilityURL, nFacilityID);
    };
    ServicesComponent.prototype.addNewFacility = function (uFacility) {
        this.pUseroleURL = this.Url + 'facility';
        // return this.http.get(this.pUseroleURL ).subscribe(userrole => this.mUserRole = userrole);
        return this.http.post(this.pUseroleURL, uFacility);
        // return this.http.post( this.UserRoleUrl, this._mRole ).subscribe(res => console.log(res.json()));
        // alert('Record Saved Successfully');
    };
    ServicesComponent.prototype.updateRole = function (uRole) {
        return this.http.put(this.Url + '/' + uRole.roleid, uRole);
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userrole/userrole.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Newrole==0\">\n<p>\n<div class=\"main main-raised\" >\n  <div  class=\"w3-container w3-blue\">\n  <h4>User Role</h4>\n  </div>\n  <br>\n  <br>\n  <table style=\"width:80%\">\n<tr>\n    <button mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"setNewRole()\"> New Role Request </button>\n</tr>\n    <tr>\n  <td>\n<mat-form-field class=\"full-width\">\n      <mat-select placeholder=\"Select Search Parameter\" [(ngModel)]=\"model.rolesearchparam\">\n        <mat-option value=\"roleid\">Role ID</mat-option>\n        <mat-option value=\"roledesc\">Role Description</mat-option>\n        <mat-option value=\"pccode\">PC Code</mat-option>\n       </mat-select>\n      </mat-form-field>\n  </td>\n  <td class=\"td-space2\"></td>\n  <td>\n      <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Enter Your Search Parameter....\" [(ngModel)]=\"model.roleSearch\">\n       </mat-form-field>\n</td>\n<td class=\"td-space2\"></td>\n<td>\n      <button mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"getAllRoles(model)\">Search </button>\n\n</td>\n</tr>\n  </table>\n<table class=\"w3-table w3-stripped\" >\n <tr class=\"w3-black\" *ngIf=\"mUserRole != null\">\n   <th>Role ID</th>\n   <th>Role Description</th>\n   <th>Role Cateory</th>\n   <th>PC Code</th>\n   <th>Type</th>\n </tr>\n <tr *ngFor= \"let post of mUserRole\" >\n <!-- <div *ngFor= \"let post of mUserRole\"> -->\n\n<td>\n    {{post.roleid}}\n</td>\n<td>\n    {{post.roledesc}}\n    </td>\n    <td>\n        {{post.rolecategory}}\n        </td>\n        <td>\n          {{post.pccode}}\n          </td>\n        <td>\n            {{post.typcentre}}\n            </td>\n<td>\n  <button mat-button type=\"submit\" class=\"w3-btn red\" (click)=\"getRoles(post)\"><i class=\"fa fa-floppy-o\"></i> </button>\n</td>\n\n  <!-- </div> -->\n</tr>\n</table>\n</div>\n</div>\n<p>\n<div class=\"main main-raised\"  *ngIf=\"Newrole==2\">\n  <div  class=\"w3-container w3-blue\">\n    <h5>User Role</h5>\n  </div>\n  <br>\n  <table style=\"width:80%\">\n  <tr>\n      <td>\n          <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Role ID\" [(ngModel)]=\"mrole.roleid\">\n        </mat-form-field>\n        </td>\n</tr>\n<tr>\n  <td>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Role Description\" [(ngModel)]=\"mrole.roledesc\">\n</mat-form-field>\n</td>\n    <td class=\"td-space2\"></td>\n<td>\n  <mat-form-field class=\"half-full-width\">\n    <mat-select placeholder=\"Choose Role Category\" [(ngModel)]=\"mrole.rolecategory\">\n        <mat-option value=\"External\">External</mat-option>\n        <mat-option value=\"Internal\">Internal</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </td>\n  </tr>\n<tr>\n    <td>\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"text\" placeholder=\"PC Code\" [(ngModel)]=\"mrole.pccode\">\n    </mat-form-field>\n    </td>\n    <td class=\"td-space2\"></td>\n      <td>\n            <mat-form-field class=\"half-full-width\">\n          <mat-select placeholder=\"Choose Role Class\" [(ngModel)]=\"mrole.typcentre\">\n            <mat-option value=\"Profit\">Profit</mat-option>\n            <mat-option value=\"Cost\">Cost</mat-option>\n            <mat-option value=\"N/A\">N/A</mat-option>\n          </mat-select>\n      </mat-form-field>\n         </td>\n    </tr>\n\n  <tr>\n  <td>\n  <button mat-button type=\"submit\" class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"addNewRoles(mrole)\">Submit </button>\n  </td>\n\n  <td class=\"td-space2\">\n\n  </td>\n\n  <td>\n    <button mat-button class=\"w3-btn w3-round-large w3-border w3-border-red\" (click)=\"refresh(nuSers)\">Back</button>\n    </td>\n  </tr>\n  </table>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/userrole/userrole.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserroleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component__ = __webpack_require__("../../../../../src/app/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserroleComponent = (function () {
    // private UserRoleUrl = 'http://localhost:50000/api/UserRole';  // URL to web api
    function UserroleComponent(services) {
        this.services = services;
        this.btnNewrole = false;
        this.btnUpdate = false;
        this.Newrole = 0;
        this.btnClick = false;
        this.errormsg = '';
        // mrole: Duserrole;
        this.mrole = {
            roleid: 0,
            roledesc: '',
            rolecategory: '',
            pccode: '',
            typcentre: ''
        };
        this.nAdded = 0;
        this.nUpdate = 0;
        this.model = {
            roleSearch: '',
            rolesearchparam: ''
        };
        this.addNewRoles = function (uRole) {
            var _this = this;
            // const bodyString = JSON.stringify(Newrole); // Stringify payload
            this._mRole = uRole; // JSON.stringify(uRole);
            // return this.http.post( this.UserRoleUrl, uRole ).subscribe(resp => this.nAdded);
            if (this.btnNewrole === true) {
                this.services.addNewRole(this._mRole).subscribe(function (resp) { return _this.nAdded = resp; });
                if (this.nAdded === 1) {
                    alert('Operation Successful');
                }
                else {
                    alert('Operation not Successful');
                }
                this.Newrole = 2;
                this.btnNewrole = false;
            }
            else if (this.btnUpdate === true) {
                this._mRole = JSON.stringify(uRole);
                this.services.updateRole(uRole).subscribe(function (resp) { _this.getStatus(resp); _this.nUpdate = resp; });
                this.mrole.roleid = uRole.roleid;
                this.mrole.roledesc = uRole.roledesc;
                this.mrole.rolecategory = uRole.rolecategory;
                this.mrole.pccode = uRole.pccode;
                this.mrole.typcentre = uRole.typcentre;
                this.Newrole = 2;
                this.btnUpdate = false;
            }
        };
    }
    UserroleComponent.prototype.setNewRole = function () {
        this.btnNewrole = true;
        this.Newrole = 2;
    };
    UserroleComponent.prototype.refresh = function () {
        this.Newrole = 0;
        this.mrole.roleid = 0;
        this.mrole.roledesc = '';
        this.mrole.rolecategory = '';
        this.mrole.pccode = '';
        this.mrole.typcentre = '';
        this.getAllRoles(this.nuSers);
    };
    /* getHeroes(): Observable<Duserrole[]> {
      return this.http.get<Duserrole[]>(this.UserRoleUrl);
    } */
    UserroleComponent.prototype.getAllRoles = function (searchP) {
        var _this = this;
        // return this.http.get(this.UserRoleUrl).subscribe(data => console.log(data));
        // this.btnClick = true;
        /*  this.services.getPost(searchP);
       this.mUserRole = this.services.mUserRole; */
        this.Newrole = 0;
        if (searchP == null) 
        // tslint:disable-next-line:one-line
        {
            return this.services.getPost(searchP).subscribe(function (userrole) { return _this.mUserRole = userrole; }, function (error) { return _this.errormsg = error; });
        }
        else 
        // tslint:disable-next-line:one-line
        {
            // this.pUseroleURL = this.UserRoleUrl + '/' + searchP.rolesearchparam + ':' + searchP.roleSearch;
            // alert(searchP.rolesearchparam + ':' + searchP.roleSearch);
            return this.services.getPost(searchP).subscribe(function (userrole) { return _this.mUserRole = userrole; });
        }
    };
    UserroleComponent.prototype.getRoles = function (nRoleID) {
        if (nRoleID == null) 
        // tslint:disable-next-line:one-line
        {
            alert('Invalid Role ID');
        }
        else {
            this.mrole.roleid = nRoleID.roleid;
            this.mrole.roledesc = nRoleID.roledesc;
            this.mrole.rolecategory = nRoleID.rolecategory;
            this.mrole.pccode = nRoleID.pccode;
            this.mrole.typcentre = nRoleID.typcentre;
            this.btnUpdate = true;
            this.Newrole = 2;
        }
    };
    UserroleComponent.prototype.getStatus = function (numUpdate) {
        if (numUpdate === 1) {
            alert('Operation Successful');
        }
        else {
            alert('Unable to Update Record at this time; Please Try Again Later');
        }
    };
    UserroleComponent.prototype.ngOnInit = function () {
    };
    UserroleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userrole',
            template: __webpack_require__("../../../../../src/app/userrole/userrole.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_component__["a" /* ServicesComponent */]])
    ], UserroleComponent);
    return UserroleComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map