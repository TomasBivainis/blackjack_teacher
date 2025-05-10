/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Inknut_Antiqua/InknutAntiqua-Regular.ttf */ "./src/Inknut_Antiqua/InknutAntiqua-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Inknut_Antiqua";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
  background-color: #00a337;
  color: #ffffff;
  font-family: "Inknut_Antiqua";
  overflow-x: hidden;
}

#buttons {
  margin: 10px;
  padding: 10px;
  margin-left: 0px;
}

button {
  font-family: inherit;
  border-radius: 5px;
  border: none;
  padding: 3px 9px;
  margin: 3px;
  margin-left: 0px;
}

#menu {
  position: absolute;
  right: 20px;
  z-index: 2;
  top: 20px;
  padding: 0;
  margin: 0;
  height: 32px;
  width: 32px;
}

#trigger {
  appearance: none;
  display: none;
}

#list_img {
  width: 32px;
  height: 32px;
}

.menu_box {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  right: -20vw;
  top: 0;
  width: 20vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 70px;
  transition: right 0.3s ease-in-out;
}

.trigger_checked {
  right: 0;
}

.card {
  height: 150px;
  margin: 10px;
}

.container {
  display: flex;
}

.results {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAsD;AACxD;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,SAAS;EACT,UAAU;EACV,SAAS;EACT,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,MAAM;EACN,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB","sourcesContent":["@font-face {\n  font-family: \"Inknut_Antiqua\";\n  src: url(\"./Inknut_Antiqua/InknutAntiqua-Regular.ttf\");\n}\n\nbody {\n  background-color: #00a337;\n  color: #ffffff;\n  font-family: \"Inknut_Antiqua\";\n  overflow-x: hidden;\n}\n\n#buttons {\n  margin: 10px;\n  padding: 10px;\n  margin-left: 0px;\n}\n\nbutton {\n  font-family: inherit;\n  border-radius: 5px;\n  border: none;\n  padding: 3px 9px;\n  margin: 3px;\n  margin-left: 0px;\n}\n\n#menu {\n  position: absolute;\n  right: 20px;\n  z-index: 2;\n  top: 20px;\n  padding: 0;\n  margin: 0;\n  height: 32px;\n  width: 32px;\n}\n\n#trigger {\n  appearance: none;\n  display: none;\n}\n\n#list_img {\n  width: 32px;\n  height: 32px;\n}\n\n.menu_box {\n  background-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  right: -20vw;\n  top: 0;\n  width: 20vw;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 20px;\n  padding-top: 70px;\n  transition: right 0.3s ease-in-out;\n}\n\n.trigger_checked {\n  right: 0;\n}\n\n.card {\n  height: 150px;\n  margin: 10px;\n}\n\n.container {\n  display: flex;\n}\n\n.results {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_cards_back_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cards/back.png */ "./src/images/cards/back.png");
/* harmony import */ var _images_cards_0C_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cards/0C.png */ "./src/images/cards/0C.png");
/* harmony import */ var _images_cards_2C_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cards/2C.png */ "./src/images/cards/2C.png");
/* harmony import */ var _images_cards_3C_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cards/3C.png */ "./src/images/cards/3C.png");
/* harmony import */ var _images_cards_4C_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cards/4C.png */ "./src/images/cards/4C.png");
/* harmony import */ var _images_cards_5C_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cards/5C.png */ "./src/images/cards/5C.png");
/* harmony import */ var _images_cards_6C_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cards/6C.png */ "./src/images/cards/6C.png");
/* harmony import */ var _images_cards_7C_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/cards/7C.png */ "./src/images/cards/7C.png");
/* harmony import */ var _images_cards_8C_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/cards/8C.png */ "./src/images/cards/8C.png");
/* harmony import */ var _images_cards_9C_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/cards/9C.png */ "./src/images/cards/9C.png");
/* harmony import */ var _images_cards_JC_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/cards/JC.png */ "./src/images/cards/JC.png");
/* harmony import */ var _images_cards_QC_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/cards/QC.png */ "./src/images/cards/QC.png");
/* harmony import */ var _images_cards_KC_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/cards/KC.png */ "./src/images/cards/KC.png");
/* harmony import */ var _images_cards_AC_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/cards/AC.png */ "./src/images/cards/AC.png");
/* harmony import */ var _images_cards_0H_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/cards/0H.png */ "./src/images/cards/0H.png");
/* harmony import */ var _images_cards_2H_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/cards/2H.png */ "./src/images/cards/2H.png");
/* harmony import */ var _images_cards_3H_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/cards/3H.png */ "./src/images/cards/3H.png");
/* harmony import */ var _images_cards_4H_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/cards/4H.png */ "./src/images/cards/4H.png");
/* harmony import */ var _images_cards_5H_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/cards/5H.png */ "./src/images/cards/5H.png");
/* harmony import */ var _images_cards_6H_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/cards/6H.png */ "./src/images/cards/6H.png");
/* harmony import */ var _images_cards_7H_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/cards/7H.png */ "./src/images/cards/7H.png");
/* harmony import */ var _images_cards_8H_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/cards/8H.png */ "./src/images/cards/8H.png");
/* harmony import */ var _images_cards_9H_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/cards/9H.png */ "./src/images/cards/9H.png");
/* harmony import */ var _images_cards_JH_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/cards/JH.png */ "./src/images/cards/JH.png");
/* harmony import */ var _images_cards_QH_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/cards/QH.png */ "./src/images/cards/QH.png");
/* harmony import */ var _images_cards_KH_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/cards/KH.png */ "./src/images/cards/KH.png");
/* harmony import */ var _images_cards_AH_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/cards/AH.png */ "./src/images/cards/AH.png");
/* harmony import */ var _images_cards_0D_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/cards/0D.png */ "./src/images/cards/0D.png");
/* harmony import */ var _images_cards_2D_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/cards/2D.png */ "./src/images/cards/2D.png");
/* harmony import */ var _images_cards_3D_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/cards/3D.png */ "./src/images/cards/3D.png");
/* harmony import */ var _images_cards_4D_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/cards/4D.png */ "./src/images/cards/4D.png");
/* harmony import */ var _images_cards_5D_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/cards/5D.png */ "./src/images/cards/5D.png");
/* harmony import */ var _images_cards_6D_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/cards/6D.png */ "./src/images/cards/6D.png");
/* harmony import */ var _images_cards_7D_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/cards/7D.png */ "./src/images/cards/7D.png");
/* harmony import */ var _images_cards_8D_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/cards/8D.png */ "./src/images/cards/8D.png");
/* harmony import */ var _images_cards_9D_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/cards/9D.png */ "./src/images/cards/9D.png");
/* harmony import */ var _images_cards_JD_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/cards/JD.png */ "./src/images/cards/JD.png");
/* harmony import */ var _images_cards_QD_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/cards/QD.png */ "./src/images/cards/QD.png");
/* harmony import */ var _images_cards_KD_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/cards/KD.png */ "./src/images/cards/KD.png");
/* harmony import */ var _images_cards_AD_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/cards/AD.png */ "./src/images/cards/AD.png");
/* harmony import */ var _images_cards_0S_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/cards/0S.png */ "./src/images/cards/0S.png");
/* harmony import */ var _images_cards_2S_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/cards/2S.png */ "./src/images/cards/2S.png");
/* harmony import */ var _images_cards_3S_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/cards/3S.png */ "./src/images/cards/3S.png");
/* harmony import */ var _images_cards_4S_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/cards/4S.png */ "./src/images/cards/4S.png");
/* harmony import */ var _images_cards_5S_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/cards/5S.png */ "./src/images/cards/5S.png");
/* harmony import */ var _images_cards_6S_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/cards/6S.png */ "./src/images/cards/6S.png");
/* harmony import */ var _images_cards_7S_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./images/cards/7S.png */ "./src/images/cards/7S.png");
/* harmony import */ var _images_cards_8S_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./images/cards/8S.png */ "./src/images/cards/8S.png");
/* harmony import */ var _images_cards_9S_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./images/cards/9S.png */ "./src/images/cards/9S.png");
/* harmony import */ var _images_cards_JS_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./images/cards/JS.png */ "./src/images/cards/JS.png");
/* harmony import */ var _images_cards_QS_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./images/cards/QS.png */ "./src/images/cards/QS.png");
/* harmony import */ var _images_cards_KS_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./images/cards/KS.png */ "./src/images/cards/KS.png");
/* harmony import */ var _images_cards_AS_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./images/cards/AS.png */ "./src/images/cards/AS.png");


























































const cards = {
  back: _images_cards_back_png__WEBPACK_IMPORTED_MODULE_0__,
  C10: _images_cards_0C_png__WEBPACK_IMPORTED_MODULE_1__,
  C2: _images_cards_2C_png__WEBPACK_IMPORTED_MODULE_2__,
  C3: _images_cards_3C_png__WEBPACK_IMPORTED_MODULE_3__,
  C4: _images_cards_4C_png__WEBPACK_IMPORTED_MODULE_4__,
  C5: _images_cards_5C_png__WEBPACK_IMPORTED_MODULE_5__,
  C6: _images_cards_6C_png__WEBPACK_IMPORTED_MODULE_6__,
  C7: _images_cards_7C_png__WEBPACK_IMPORTED_MODULE_7__,
  C8: _images_cards_8C_png__WEBPACK_IMPORTED_MODULE_8__,
  C9: _images_cards_9C_png__WEBPACK_IMPORTED_MODULE_9__,
  CJ: _images_cards_JC_png__WEBPACK_IMPORTED_MODULE_10__,
  CQ: _images_cards_QC_png__WEBPACK_IMPORTED_MODULE_11__,
  CK: _images_cards_KC_png__WEBPACK_IMPORTED_MODULE_12__,
  CA: _images_cards_AC_png__WEBPACK_IMPORTED_MODULE_13__,

  H10: _images_cards_0H_png__WEBPACK_IMPORTED_MODULE_14__,
  H2: _images_cards_2H_png__WEBPACK_IMPORTED_MODULE_15__,
  H3: _images_cards_3H_png__WEBPACK_IMPORTED_MODULE_16__,
  H4: _images_cards_4H_png__WEBPACK_IMPORTED_MODULE_17__,
  H5: _images_cards_5H_png__WEBPACK_IMPORTED_MODULE_18__,
  H6: _images_cards_6H_png__WEBPACK_IMPORTED_MODULE_19__,
  H7: _images_cards_7H_png__WEBPACK_IMPORTED_MODULE_20__,
  H8: _images_cards_8H_png__WEBPACK_IMPORTED_MODULE_21__,
  H9: _images_cards_9H_png__WEBPACK_IMPORTED_MODULE_22__,
  HJ: _images_cards_JH_png__WEBPACK_IMPORTED_MODULE_23__,
  HQ: _images_cards_QH_png__WEBPACK_IMPORTED_MODULE_24__,
  HK: _images_cards_KH_png__WEBPACK_IMPORTED_MODULE_25__,
  HA: _images_cards_AH_png__WEBPACK_IMPORTED_MODULE_26__,

  D10: _images_cards_0D_png__WEBPACK_IMPORTED_MODULE_27__,
  D2: _images_cards_2D_png__WEBPACK_IMPORTED_MODULE_28__,
  D3: _images_cards_3D_png__WEBPACK_IMPORTED_MODULE_29__,
  D4: _images_cards_4D_png__WEBPACK_IMPORTED_MODULE_30__,
  D5: _images_cards_5D_png__WEBPACK_IMPORTED_MODULE_31__,
  D6: _images_cards_6D_png__WEBPACK_IMPORTED_MODULE_32__,
  D7: _images_cards_7D_png__WEBPACK_IMPORTED_MODULE_33__,
  D8: _images_cards_8D_png__WEBPACK_IMPORTED_MODULE_34__,
  D9: _images_cards_9D_png__WEBPACK_IMPORTED_MODULE_35__,
  DJ: _images_cards_JD_png__WEBPACK_IMPORTED_MODULE_36__,
  DQ: _images_cards_QD_png__WEBPACK_IMPORTED_MODULE_37__,
  DK: _images_cards_KD_png__WEBPACK_IMPORTED_MODULE_38__,
  DA: _images_cards_AD_png__WEBPACK_IMPORTED_MODULE_39__,

  S10: _images_cards_0S_png__WEBPACK_IMPORTED_MODULE_40__,
  S2: _images_cards_2S_png__WEBPACK_IMPORTED_MODULE_41__,
  S3: _images_cards_3S_png__WEBPACK_IMPORTED_MODULE_42__,
  S4: _images_cards_4S_png__WEBPACK_IMPORTED_MODULE_43__,
  S5: _images_cards_5S_png__WEBPACK_IMPORTED_MODULE_44__,
  S6: _images_cards_6S_png__WEBPACK_IMPORTED_MODULE_45__,
  S7: _images_cards_7S_png__WEBPACK_IMPORTED_MODULE_46__,
  S8: _images_cards_8S_png__WEBPACK_IMPORTED_MODULE_47__,
  S9: _images_cards_9S_png__WEBPACK_IMPORTED_MODULE_48__,
  SJ: _images_cards_JS_png__WEBPACK_IMPORTED_MODULE_49__,
  SQ: _images_cards_QS_png__WEBPACK_IMPORTED_MODULE_50__,
  SK: _images_cards_KS_png__WEBPACK_IMPORTED_MODULE_51__,
  SA: _images_cards_AS_png__WEBPACK_IMPORTED_MODULE_52__,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ ((module) => {

function clearDeck(deck) {
  deck = [];
}

function turnCardsIntoString(cards) {
  let string = "";

  cards.forEach(card => {
    string += `${card} `;
  })
  
  return string;
}

function getCardScore(card) {
  card = card.substring(1);

  if(card === "A") return 11;
  else if(card === "J" || card === "Q" || card === "K") return 10;
  
  return parseInt(card);
}

const playingCards = [
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "H10",
  "HJ",
  "HQ",
  "HK",
  "HA",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "D10",
  "DJ",
  "DQ",
  "DK",
  "DA",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "CJ",
  "CQ",
  "CK",
  "CA",
  "S2",
  "S3",
  "S4",
  "S5",
  "S6",
  "S7",
  "S8",
  "S9",
  "S10",
  "SJ",
  "SQ",
  "SK",
  "SA"
]

const moves = {
  hit: "Hit",
  stand: "Stand",
  split: "Split",
  doubleDown: "DoubleDown"
};

const moveEval = {
  correct: 'correct',
  incorrect: 'incorrect'
}

module.exports = {
  clearDeck,
  turnCardsIntoString,
  getCardScore,
  playingCards,
  moves,
  moveEval
}

/***/ }),

/***/ "./src/Inknut_Antiqua/InknutAntiqua-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/Inknut_Antiqua/InknutAntiqua-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0490c4cc5dba1fabcf51.ttf";

/***/ }),

/***/ "./src/icons/list.svg":
/*!****************************!*\
  !*** ./src/icons/list.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1320df01975afb9d39dd.svg";

/***/ }),

/***/ "./src/images/cards/0C.png":
/*!*********************************!*\
  !*** ./src/images/cards/0C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12448b9e6249648cbaac.png";

/***/ }),

/***/ "./src/images/cards/0D.png":
/*!*********************************!*\
  !*** ./src/images/cards/0D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca37ef72f2ea4c3ce8f5.png";

/***/ }),

/***/ "./src/images/cards/0H.png":
/*!*********************************!*\
  !*** ./src/images/cards/0H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "857b8b10562b45082f52.png";

/***/ }),

/***/ "./src/images/cards/0S.png":
/*!*********************************!*\
  !*** ./src/images/cards/0S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "de797ab09278dfafc7f7.png";

/***/ }),

/***/ "./src/images/cards/2C.png":
/*!*********************************!*\
  !*** ./src/images/cards/2C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ffa1b6f6c455578a2be1.png";

/***/ }),

/***/ "./src/images/cards/2D.png":
/*!*********************************!*\
  !*** ./src/images/cards/2D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "93d7567c5ef291459763.png";

/***/ }),

/***/ "./src/images/cards/2H.png":
/*!*********************************!*\
  !*** ./src/images/cards/2H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3d4550252c5eb1f659a2.png";

/***/ }),

/***/ "./src/images/cards/2S.png":
/*!*********************************!*\
  !*** ./src/images/cards/2S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "793850acc19495eb478c.png";

/***/ }),

/***/ "./src/images/cards/3C.png":
/*!*********************************!*\
  !*** ./src/images/cards/3C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8652cce23811e04b3fea.png";

/***/ }),

/***/ "./src/images/cards/3D.png":
/*!*********************************!*\
  !*** ./src/images/cards/3D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "48cef798f2c0c9dfef5b.png";

/***/ }),

/***/ "./src/images/cards/3H.png":
/*!*********************************!*\
  !*** ./src/images/cards/3H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1184e47e295ffccd65e1.png";

/***/ }),

/***/ "./src/images/cards/3S.png":
/*!*********************************!*\
  !*** ./src/images/cards/3S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d7486ea83a028157a1b.png";

/***/ }),

/***/ "./src/images/cards/4C.png":
/*!*********************************!*\
  !*** ./src/images/cards/4C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "178077380e5cbc097836.png";

/***/ }),

/***/ "./src/images/cards/4D.png":
/*!*********************************!*\
  !*** ./src/images/cards/4D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e82daf31c204776190b0.png";

/***/ }),

/***/ "./src/images/cards/4H.png":
/*!*********************************!*\
  !*** ./src/images/cards/4H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a62b7c80df07bedc5a43.png";

/***/ }),

/***/ "./src/images/cards/4S.png":
/*!*********************************!*\
  !*** ./src/images/cards/4S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "41e79a516b809ea8bbc0.png";

/***/ }),

/***/ "./src/images/cards/5C.png":
/*!*********************************!*\
  !*** ./src/images/cards/5C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2703d38f70b2b26d6510.png";

/***/ }),

/***/ "./src/images/cards/5D.png":
/*!*********************************!*\
  !*** ./src/images/cards/5D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "76399605370b7a54f039.png";

/***/ }),

/***/ "./src/images/cards/5H.png":
/*!*********************************!*\
  !*** ./src/images/cards/5H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8479366da2a590292d4f.png";

/***/ }),

/***/ "./src/images/cards/5S.png":
/*!*********************************!*\
  !*** ./src/images/cards/5S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f486769b64be3a79664.png";

/***/ }),

/***/ "./src/images/cards/6C.png":
/*!*********************************!*\
  !*** ./src/images/cards/6C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "958e36e1b1985235f735.png";

/***/ }),

/***/ "./src/images/cards/6D.png":
/*!*********************************!*\
  !*** ./src/images/cards/6D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8c0b2629be70ab10f71.png";

/***/ }),

/***/ "./src/images/cards/6H.png":
/*!*********************************!*\
  !*** ./src/images/cards/6H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c419446076d0bc7de77d.png";

/***/ }),

/***/ "./src/images/cards/6S.png":
/*!*********************************!*\
  !*** ./src/images/cards/6S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e04a54c49cbb4086877f.png";

/***/ }),

/***/ "./src/images/cards/7C.png":
/*!*********************************!*\
  !*** ./src/images/cards/7C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "24e43706495cba483d28.png";

/***/ }),

/***/ "./src/images/cards/7D.png":
/*!*********************************!*\
  !*** ./src/images/cards/7D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1df56a03f91b3c6254f.png";

/***/ }),

/***/ "./src/images/cards/7H.png":
/*!*********************************!*\
  !*** ./src/images/cards/7H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "527bbe843ef8833adaeb.png";

/***/ }),

/***/ "./src/images/cards/7S.png":
/*!*********************************!*\
  !*** ./src/images/cards/7S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fee8e36f9df314547638.png";

/***/ }),

/***/ "./src/images/cards/8C.png":
/*!*********************************!*\
  !*** ./src/images/cards/8C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8e9ac9894394c606409a.png";

/***/ }),

/***/ "./src/images/cards/8D.png":
/*!*********************************!*\
  !*** ./src/images/cards/8D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "efc95231e45b90e9d16d.png";

/***/ }),

/***/ "./src/images/cards/8H.png":
/*!*********************************!*\
  !*** ./src/images/cards/8H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3268e37ddd31af3e5bc.png";

/***/ }),

/***/ "./src/images/cards/8S.png":
/*!*********************************!*\
  !*** ./src/images/cards/8S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "16d9a1a957941b1085f1.png";

/***/ }),

/***/ "./src/images/cards/9C.png":
/*!*********************************!*\
  !*** ./src/images/cards/9C.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47c838bc21e62d5c3f50.png";

/***/ }),

/***/ "./src/images/cards/9D.png":
/*!*********************************!*\
  !*** ./src/images/cards/9D.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40dcdf34d9f57c8cbea4.png";

/***/ }),

/***/ "./src/images/cards/9H.png":
/*!*********************************!*\
  !*** ./src/images/cards/9H.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b493c616f00a90acfa3b.png";

/***/ }),

/***/ "./src/images/cards/9S.png":
/*!*********************************!*\
  !*** ./src/images/cards/9S.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "46bbe48312d2e3b9d49b.png";

/***/ }),

/***/ "./src/images/cards/AC.png":
/*!*********************************!*\
  !*** ./src/images/cards/AC.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a621c55c60fadfadf93f.png";

/***/ }),

/***/ "./src/images/cards/AD.png":
/*!*********************************!*\
  !*** ./src/images/cards/AD.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da3c77b8147e640fb04a.png";

/***/ }),

/***/ "./src/images/cards/AH.png":
/*!*********************************!*\
  !*** ./src/images/cards/AH.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8deacf3003bf5257e05a.png";

/***/ }),

/***/ "./src/images/cards/AS.png":
/*!*********************************!*\
  !*** ./src/images/cards/AS.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "78486eeccb3c1fb9b016.png";

/***/ }),

/***/ "./src/images/cards/JC.png":
/*!*********************************!*\
  !*** ./src/images/cards/JC.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d121cb54ef0dab5523d5.png";

/***/ }),

/***/ "./src/images/cards/JD.png":
/*!*********************************!*\
  !*** ./src/images/cards/JD.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "863a84a75d8a41f49bba.png";

/***/ }),

/***/ "./src/images/cards/JH.png":
/*!*********************************!*\
  !*** ./src/images/cards/JH.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "541b46e97f51b1bb185f.png";

/***/ }),

/***/ "./src/images/cards/JS.png":
/*!*********************************!*\
  !*** ./src/images/cards/JS.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a78cf911ec85ef3c8e0d.png";

/***/ }),

/***/ "./src/images/cards/KC.png":
/*!*********************************!*\
  !*** ./src/images/cards/KC.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a9babe1c42da80168717.png";

/***/ }),

/***/ "./src/images/cards/KD.png":
/*!*********************************!*\
  !*** ./src/images/cards/KD.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf4de1b8935861f5db7c.png";

/***/ }),

/***/ "./src/images/cards/KH.png":
/*!*********************************!*\
  !*** ./src/images/cards/KH.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8d216e4cce142fccba6f.png";

/***/ }),

/***/ "./src/images/cards/KS.png":
/*!*********************************!*\
  !*** ./src/images/cards/KS.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5db9806782b87a2b10b2.png";

/***/ }),

/***/ "./src/images/cards/QC.png":
/*!*********************************!*\
  !*** ./src/images/cards/QC.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3746ac023be063c473af.png";

/***/ }),

/***/ "./src/images/cards/QD.png":
/*!*********************************!*\
  !*** ./src/images/cards/QD.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cd453acd0471208f1723.png";

/***/ }),

/***/ "./src/images/cards/QH.png":
/*!*********************************!*\
  !*** ./src/images/cards/QH.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e9cd91f9087b5bada7ed.png";

/***/ }),

/***/ "./src/images/cards/QS.png":
/*!*********************************!*\
  !*** ./src/images/cards/QS.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6fc4267fb2e950ae4b2.png";

/***/ }),

/***/ "./src/images/cards/back.png":
/*!***********************************!*\
  !*** ./src/images/cards/back.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6846b94e29c50417a15b.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ "./src/module.js");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_list_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/list.svg */ "./src/icons/list.svg");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards */ "./src/cards.js");





document.querySelector("#list_img").src = _icons_list_svg__WEBPACK_IMPORTED_MODULE_2__;

let doubleAllowed = false;
let DASOffered = false;

let currentDeck;

let dealerCards = [];
let playerCards = [];

function clearCards() {
  dealerCards = [];
  playerCards = [];
}

function btnClick(move) {
  displayResult(isCorrectMove(move));
}

function displayResult(isCorrect) {
  hideResults();

  document.querySelector("#waiting").hidden = true;
  document.querySelector(".continue").hidden = false;

  if (isCorrect) {
    document.querySelector("#correct").hidden = false;
  } else {
    document.querySelector("#incorrect").hidden = false;
  }
}

function hideResults() {
  document.querySelector(".continue").hidden = true;
  document.querySelector("#correct").hidden = true;
  document.querySelector("#incorrect").hidden = true;
  document.querySelector("#waiting").hidden = false;
}

function displayCards() {
  const divDealerCards = document.querySelector("#dealer_cards");
  const divPlayerCards = document.querySelector("#player_cards");

  divDealerCards.innerHTML = "";
  divPlayerCards.innerHTML = "";

  {
    const img = document.createElement("img");

    img.src = _cards__WEBPACK_IMPORTED_MODULE_3__["default"].back;
    img.classList.add("card");

    divDealerCards.appendChild(img);
  }

  dealerCards.forEach((card) => {
    const img = document.createElement("img");

    img.src = _cards__WEBPACK_IMPORTED_MODULE_3__["default"][card];
    img.classList.add("card");

    divDealerCards.appendChild(img);
  });

  playerCards.forEach((card) => {
    const img = document.createElement("img");

    img.src = _cards__WEBPACK_IMPORTED_MODULE_3__["default"][card];
    img.classList.add("card");

    divPlayerCards.appendChild(img);
  });
}

function giveCard(cards) {
  let number = Math.floor(Math.random() * currentDeck.length);
  cards.push(currentDeck[number]);
  currentDeck.splice(number, 1);
}

function determineBestMove() {
  let dealerCard = (0,_module__WEBPACK_IMPORTED_MODULE_1__.getCardScore)(dealerCards[0]);
  let playerCard1 = (0,_module__WEBPACK_IMPORTED_MODULE_1__.getCardScore)(playerCards[0]);
  let playerCard2 = (0,_module__WEBPACK_IMPORTED_MODULE_1__.getCardScore)(playerCards[1]);

  let playerScore = playerCard1 + playerCard2;

  // If player has pairs
  if (playerCard1 === playerCard2) {
    switch (playerCard1) {
      case 2:
        if (
          (dealerCard < 4 && DASOffered) ||
          (4 <= dealerCard && dealerCard <= 7)
        )
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
        break;
      case 3:
        if (
          (dealerCard < 4 && DASOffered) ||
          (4 <= dealerCard && dealerCard <= 7)
        )
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
        break;
      case 4:
        if (5 <= dealerCard && dealerCard <= 6 && DASOffered)
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
        break;
      case 5:
        break;
      case 6:
        if (
          (dealerCard === 2 && DASOffered) ||
          (3 <= dealerCard && dealerCard <= 6)
        )
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
        break;
      case 7:
        if (dealerCard <= 7) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
        break;
      case 8:
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
      case 9:
        if (dealerCard <= 6 || (8 <= dealerCard && dealerCard <= 9))
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
        break;
      case 10:
        break;
      case 11:
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.split;
      default:
        break;
    }
  }

  // If player has an ace
  if (playerCard1 === 11 || playerCard2 === 11) {
    playerScore -= 11;

    switch (playerScore) {
      case 2:
        if (5 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
      case 3:
        if (5 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
      case 4:
        if (4 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
      case 5:
        if (4 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
      case 6:
        if (3 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
      case 7:
        if (dealerCard <= 6 && doubleAllowed) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
        else if (dealerCard <= 8) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.stand;
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
      case 8:
        if (dealerCard === 6 && doubleAllowed) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.stand;
      default:
        return _module__WEBPACK_IMPORTED_MODULE_1__.moves.stand;
    }
  }

  // If players has neither an ace, nor a pair

  if (playerScore <= 8) {
    return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
  } else if (playerScore === 9) {
    if (3 <= dealerCard && dealerCard <= 6 && doubleAllowed)
      return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
    return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
  } else if (playerScore === 10) {
    if (dealerCard <= 9 && doubleAllowed) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
    return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
  } else if (playerScore === 11) {
    if (doubleAllowed) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown;
    return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
  } else if (playerScore === 12) {
    if (4 <= dealerCard && dealerCard <= 6) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.stand;
    return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
  } else if (13 <= playerScore && playerScore <= 16) {
    if (dealerCard <= 6) return _module__WEBPACK_IMPORTED_MODULE_1__.moves.stand;
    return _module__WEBPACK_IMPORTED_MODULE_1__.moves.hit;
  } else {
    return _module__WEBPACK_IMPORTED_MODULE_1__.moves.stand;
  }
}

function isCorrectMove(move) {
  return move === determineBestMove();
}

function checkIfPairs() {
  if (playerCards[0].length !== playerCards[1].length) return false;
  if (playerCards[0].length === 3 || playerCards[0][1] === playerCards[1][1])
    return true;
  return false;
}

function startRound() {
  clearCards();
  hideResults();
  currentDeck = JSON.parse(JSON.stringify(_module__WEBPACK_IMPORTED_MODULE_1__.playingCards));
  giveCard(playerCards);
  giveCard(playerCards);
  giveCard(dealerCards);

  const btnSplit = document.querySelector("#split");

  if (checkIfPairs()) btnSplit.disabled = false;
  else btnSplit.disabled = true;

  displayCards();
}

function updateSettings() {
  const btnDoubleDown = document.querySelector("#double_down");

  const inputDAS = document.querySelector("#das-allowed");
  const inputDouble = document.querySelector("#doubling-allowed");

  doubleAllowed = inputDouble.checked;
  DASOffered = inputDAS.checked;

  btnDoubleDown.disabled = !doubleAllowed;
}

document
  .querySelector("#das-allowed")
  .addEventListener("change", updateSettings);

document
  .querySelector("#doubling-allowed")
  .addEventListener("change", updateSettings);

document.querySelector("#trigger").addEventListener("change", () => {
  document.querySelector(".menu_box").classList.toggle("trigger_checked");
});

document
  .querySelector("#hit")
  .addEventListener("click", () => btnClick(_module__WEBPACK_IMPORTED_MODULE_1__.moves.hit));
document
  .querySelector("#stand")
  .addEventListener("click", () => btnClick(_module__WEBPACK_IMPORTED_MODULE_1__.moves.stand));
document
  .querySelector("#split")
  .addEventListener("click", () => btnClick(_module__WEBPACK_IMPORTED_MODULE_1__.moves.split));
document
  .querySelector("#double_down")
  .addEventListener("click", () => btnClick(_module__WEBPACK_IMPORTED_MODULE_1__.moves.doubleDown));

document.querySelector(".continue").addEventListener("click", startRound);

startRound();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUtBQTZEO0FBQ3pHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLHNDQUFzQyxvQ0FBb0MsNkRBQTZELEdBQUcsVUFBVSw4QkFBOEIsbUJBQW1CLG9DQUFvQyx1QkFBdUIsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IscUJBQXFCLEdBQUcsWUFBWSx5QkFBeUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLHFCQUFxQixHQUFHLFdBQVcsdUJBQXVCLGdCQUFnQixlQUFlLGNBQWMsZUFBZSxjQUFjLGlCQUFpQixnQkFBZ0IsR0FBRyxjQUFjLHFCQUFxQixrQkFBa0IsR0FBRyxlQUFlLGdCQUFnQixpQkFBaUIsR0FBRyxlQUFlLHlDQUF5Qyx1QkFBdUIsaUJBQWlCLFdBQVcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHNCQUFzQix1Q0FBdUMsR0FBRyxzQkFBc0IsYUFBYSxHQUFHLFdBQVcsa0JBQWtCLGlCQUFpQixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsR0FBRyxxQkFBcUI7QUFDdDdEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQzNGMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMkM7O0FBRUg7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXZDO0FBQ0EsUUFBUSxtREFBSTtBQUNaLE9BQU8saURBQUc7QUFDVixNQUFNLGlEQUFFO0FBQ1IsTUFBTSxpREFBRTtBQUNSLE1BQU0saURBQUU7QUFDUixNQUFNLGlEQUFFO0FBQ1IsTUFBTSxpREFBRTtBQUNSLE1BQU0saURBQUU7QUFDUixNQUFNLGlEQUFFO0FBQ1IsTUFBTSxpREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7O0FBRVIsT0FBTyxrREFBRztBQUNWLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTs7QUFFUixPQUFPLGtEQUFHO0FBQ1YsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFOztBQUVSLE9BQU8sa0RBQUc7QUFDVixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUjs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7O0FDckhyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtX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SztBQUNoQixJQUFJO0FBQ0osV0FBVywwQ0FBSztBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGlEQUFZO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0Q0FBNEMsMENBQUs7QUFDakQ7QUFDQTtBQUNBLDRDQUE0QywwQ0FBSztBQUNqRDtBQUNBO0FBQ0EsNENBQTRDLDBDQUFLO0FBQ2pEO0FBQ0E7QUFDQSw0Q0FBNEMsMENBQUs7O0FBRWpEOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vc3JjL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0lua251dF9BbnRpcXVhL0lua251dEFudGlxdWEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJbmtudXRfQW50aXF1YVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEzMzc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJJbmtudXRfQW50aXF1YVwiO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNidXR0b25zIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIG1hcmdpbjogM3B4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4jbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xufVxuXG4jdHJpZ2dlciB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNsaXN0X2ltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5tZW51X2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIwdnc7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4udHJpZ2dlcl9jaGVja2VkIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlc3VsdHMge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLDRDQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5rbnV0X0FudGlxdWFcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vSW5rbnV0X0FudGlxdWEvSW5rbnV0QW50aXF1YS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEzMzc7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5rbnV0X0FudGlxdWFcXFwiO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jYnV0dG9ucyB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogM3B4IDlweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuXFxuI21lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4jdHJpZ2dlciB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2xpc3RfaW1nIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4ubWVudV9ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0yMHZ3O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50cmlnZ2VyX2NoZWNrZWQge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiYWNrIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9iYWNrLnBuZ1wiO1xuXG5pbXBvcnQgQzEwIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8wQy5wbmdcIjtcbmltcG9ydCBDMiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvMkMucG5nXCI7XG5pbXBvcnQgQzMgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzNDLnBuZ1wiO1xuaW1wb3J0IEM0IGZyb20gXCIuL2ltYWdlcy9jYXJkcy80Qy5wbmdcIjtcbmltcG9ydCBDNSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNUMucG5nXCI7XG5pbXBvcnQgQzYgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzZDLnBuZ1wiO1xuaW1wb3J0IEM3IGZyb20gXCIuL2ltYWdlcy9jYXJkcy83Qy5wbmdcIjtcbmltcG9ydCBDOCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvOEMucG5nXCI7XG5pbXBvcnQgQzkgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzlDLnBuZ1wiO1xuaW1wb3J0IENKIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9KQy5wbmdcIjtcbmltcG9ydCBDUSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvUUMucG5nXCI7XG5pbXBvcnQgQ0sgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0tDLnBuZ1wiO1xuaW1wb3J0IENBIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9BQy5wbmdcIjtcblxuaW1wb3J0IEgxMCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvMEgucG5nXCI7XG5pbXBvcnQgSDIgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzJILnBuZ1wiO1xuaW1wb3J0IEgzIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8zSC5wbmdcIjtcbmltcG9ydCBINCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNEgucG5nXCI7XG5pbXBvcnQgSDUgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzVILnBuZ1wiO1xuaW1wb3J0IEg2IGZyb20gXCIuL2ltYWdlcy9jYXJkcy82SC5wbmdcIjtcbmltcG9ydCBINyBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvN0gucG5nXCI7XG5pbXBvcnQgSDggZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzhILnBuZ1wiO1xuaW1wb3J0IEg5IGZyb20gXCIuL2ltYWdlcy9jYXJkcy85SC5wbmdcIjtcbmltcG9ydCBISiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvSkgucG5nXCI7XG5pbXBvcnQgSFEgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL1FILnBuZ1wiO1xuaW1wb3J0IEhLIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9LSC5wbmdcIjtcbmltcG9ydCBIQSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvQUgucG5nXCI7XG5cbmltcG9ydCBEMTAgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzBELnBuZ1wiO1xuaW1wb3J0IEQyIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8yRC5wbmdcIjtcbmltcG9ydCBEMyBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvM0QucG5nXCI7XG5pbXBvcnQgRDQgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzRELnBuZ1wiO1xuaW1wb3J0IEQ1IGZyb20gXCIuL2ltYWdlcy9jYXJkcy81RC5wbmdcIjtcbmltcG9ydCBENiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNkQucG5nXCI7XG5pbXBvcnQgRDcgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzdELnBuZ1wiO1xuaW1wb3J0IEQ4IGZyb20gXCIuL2ltYWdlcy9jYXJkcy84RC5wbmdcIjtcbmltcG9ydCBEOSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvOUQucG5nXCI7XG5pbXBvcnQgREogZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0pELnBuZ1wiO1xuaW1wb3J0IERRIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9RRC5wbmdcIjtcbmltcG9ydCBESyBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvS0QucG5nXCI7XG5pbXBvcnQgREEgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0FELnBuZ1wiO1xuXG5pbXBvcnQgUzEwIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8wUy5wbmdcIjtcbmltcG9ydCBTMiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvMlMucG5nXCI7XG5pbXBvcnQgUzMgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzNTLnBuZ1wiO1xuaW1wb3J0IFM0IGZyb20gXCIuL2ltYWdlcy9jYXJkcy80Uy5wbmdcIjtcbmltcG9ydCBTNSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNVMucG5nXCI7XG5pbXBvcnQgUzYgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzZTLnBuZ1wiO1xuaW1wb3J0IFM3IGZyb20gXCIuL2ltYWdlcy9jYXJkcy83Uy5wbmdcIjtcbmltcG9ydCBTOCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvOFMucG5nXCI7XG5pbXBvcnQgUzkgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzlTLnBuZ1wiO1xuaW1wb3J0IFNKIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9KUy5wbmdcIjtcbmltcG9ydCBTUSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvUVMucG5nXCI7XG5pbXBvcnQgU0sgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0tTLnBuZ1wiO1xuaW1wb3J0IFNBIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9BUy5wbmdcIjtcblxuY29uc3QgY2FyZHMgPSB7XG4gIGJhY2s6IGJhY2ssXG4gIEMxMDogQzEwLFxuICBDMjogQzIsXG4gIEMzOiBDMyxcbiAgQzQ6IEM0LFxuICBDNTogQzUsXG4gIEM2OiBDNixcbiAgQzc6IEM3LFxuICBDODogQzgsXG4gIEM5OiBDOSxcbiAgQ0o6IENKLFxuICBDUTogQ1EsXG4gIENLOiBDSyxcbiAgQ0E6IENBLFxuXG4gIEgxMDogSDEwLFxuICBIMjogSDIsXG4gIEgzOiBIMyxcbiAgSDQ6IEg0LFxuICBINTogSDUsXG4gIEg2OiBINixcbiAgSDc6IEg3LFxuICBIODogSDgsXG4gIEg5OiBIOSxcbiAgSEo6IEhKLFxuICBIUTogSFEsXG4gIEhLOiBISyxcbiAgSEE6IEhBLFxuXG4gIEQxMDogRDEwLFxuICBEMjogRDIsXG4gIEQzOiBEMyxcbiAgRDQ6IEQ0LFxuICBENTogRDUsXG4gIEQ2OiBENixcbiAgRDc6IEQ3LFxuICBEODogRDgsXG4gIEQ5OiBEOSxcbiAgREo6IERKLFxuICBEUTogRFEsXG4gIERLOiBESyxcbiAgREE6IERBLFxuXG4gIFMxMDogUzEwLFxuICBTMjogUzIsXG4gIFMzOiBTMyxcbiAgUzQ6IFM0LFxuICBTNTogUzUsXG4gIFM2OiBTNixcbiAgUzc6IFM3LFxuICBTODogUzgsXG4gIFM5OiBTOSxcbiAgU0o6IFNKLFxuICBTUTogU1EsXG4gIFNLOiBTSyxcbiAgU0E6IFNBLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZHM7XG4iLCJmdW5jdGlvbiBjbGVhckRlY2soZGVjaykge1xuICBkZWNrID0gW107XG59XG5cbmZ1bmN0aW9uIHR1cm5DYXJkc0ludG9TdHJpbmcoY2FyZHMpIHtcbiAgbGV0IHN0cmluZyA9IFwiXCI7XG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBzdHJpbmcgKz0gYCR7Y2FyZH0gYDtcbiAgfSlcbiAgXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldENhcmRTY29yZShjYXJkKSB7XG4gIGNhcmQgPSBjYXJkLnN1YnN0cmluZygxKTtcblxuICBpZihjYXJkID09PSBcIkFcIikgcmV0dXJuIDExO1xuICBlbHNlIGlmKGNhcmQgPT09IFwiSlwiIHx8IGNhcmQgPT09IFwiUVwiIHx8IGNhcmQgPT09IFwiS1wiKSByZXR1cm4gMTA7XG4gIFxuICByZXR1cm4gcGFyc2VJbnQoY2FyZCk7XG59XG5cbmNvbnN0IHBsYXlpbmdDYXJkcyA9IFtcbiAgXCJIMlwiLFxuICBcIkgzXCIsXG4gIFwiSDRcIixcbiAgXCJINVwiLFxuICBcIkg2XCIsXG4gIFwiSDdcIixcbiAgXCJIOFwiLFxuICBcIkg5XCIsXG4gIFwiSDEwXCIsXG4gIFwiSEpcIixcbiAgXCJIUVwiLFxuICBcIkhLXCIsXG4gIFwiSEFcIixcbiAgXCJEMlwiLFxuICBcIkQzXCIsXG4gIFwiRDRcIixcbiAgXCJENVwiLFxuICBcIkQ2XCIsXG4gIFwiRDdcIixcbiAgXCJEOFwiLFxuICBcIkQ5XCIsXG4gIFwiRDEwXCIsXG4gIFwiREpcIixcbiAgXCJEUVwiLFxuICBcIkRLXCIsXG4gIFwiREFcIixcbiAgXCJDMlwiLFxuICBcIkMzXCIsXG4gIFwiQzRcIixcbiAgXCJDNVwiLFxuICBcIkM2XCIsXG4gIFwiQzdcIixcbiAgXCJDOFwiLFxuICBcIkM5XCIsXG4gIFwiQzEwXCIsXG4gIFwiQ0pcIixcbiAgXCJDUVwiLFxuICBcIkNLXCIsXG4gIFwiQ0FcIixcbiAgXCJTMlwiLFxuICBcIlMzXCIsXG4gIFwiUzRcIixcbiAgXCJTNVwiLFxuICBcIlM2XCIsXG4gIFwiUzdcIixcbiAgXCJTOFwiLFxuICBcIlM5XCIsXG4gIFwiUzEwXCIsXG4gIFwiU0pcIixcbiAgXCJTUVwiLFxuICBcIlNLXCIsXG4gIFwiU0FcIlxuXVxuXG5jb25zdCBtb3ZlcyA9IHtcbiAgaGl0OiBcIkhpdFwiLFxuICBzdGFuZDogXCJTdGFuZFwiLFxuICBzcGxpdDogXCJTcGxpdFwiLFxuICBkb3VibGVEb3duOiBcIkRvdWJsZURvd25cIlxufTtcblxuY29uc3QgbW92ZUV2YWwgPSB7XG4gIGNvcnJlY3Q6ICdjb3JyZWN0JyxcbiAgaW5jb3JyZWN0OiAnaW5jb3JyZWN0J1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJEZWNrLFxuICB0dXJuQ2FyZHNJbnRvU3RyaW5nLFxuICBnZXRDYXJkU2NvcmUsXG4gIHBsYXlpbmdDYXJkcyxcbiAgbW92ZXMsXG4gIG1vdmVFdmFsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRDYXJkU2NvcmUsIHBsYXlpbmdDYXJkcywgbW92ZXMgfSBmcm9tIFwiLi9tb2R1bGVcIjtcbmltcG9ydCBsaXN0IGZyb20gXCIuL2ljb25zL2xpc3Quc3ZnXCI7XG5pbXBvcnQgY2FyZEltYWdlcyBmcm9tIFwiLi9jYXJkc1wiO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RfaW1nXCIpLnNyYyA9IGxpc3Q7XG5cbmxldCBkb3VibGVBbGxvd2VkID0gZmFsc2U7XG5sZXQgREFTT2ZmZXJlZCA9IGZhbHNlO1xuXG5sZXQgY3VycmVudERlY2s7XG5cbmxldCBkZWFsZXJDYXJkcyA9IFtdO1xubGV0IHBsYXllckNhcmRzID0gW107XG5cbmZ1bmN0aW9uIGNsZWFyQ2FyZHMoKSB7XG4gIGRlYWxlckNhcmRzID0gW107XG4gIHBsYXllckNhcmRzID0gW107XG59XG5cbmZ1bmN0aW9uIGJ0bkNsaWNrKG1vdmUpIHtcbiAgZGlzcGxheVJlc3VsdChpc0NvcnJlY3RNb3ZlKG1vdmUpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlc3VsdChpc0NvcnJlY3QpIHtcbiAgaGlkZVJlc3VsdHMoKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhaXRpbmdcIikuaGlkZGVuID0gdHJ1ZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250aW51ZVwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3JyZWN0XCIpLmhpZGRlbiA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5jb3JyZWN0XCIpLmhpZGRlbiA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVSZXN1bHRzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRpbnVlXCIpLmhpZGRlbiA9IHRydWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29ycmVjdFwiKS5oaWRkZW4gPSB0cnVlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luY29ycmVjdFwiKS5oaWRkZW4gPSB0cnVlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhaXRpbmdcIikuaGlkZGVuID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDYXJkcygpIHtcbiAgY29uc3QgZGl2RGVhbGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWxlcl9jYXJkc1wiKTtcbiAgY29uc3QgZGl2UGxheWVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcl9jYXJkc1wiKTtcblxuICBkaXZEZWFsZXJDYXJkcy5pbm5lckhUTUwgPSBcIlwiO1xuICBkaXZQbGF5ZXJDYXJkcy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgaW1nLnNyYyA9IGNhcmRJbWFnZXMuYmFjaztcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBkaXZEZWFsZXJDYXJkcy5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG5cbiAgZGVhbGVyQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBpbWcuc3JjID0gY2FyZEltYWdlc1tjYXJkXTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBkaXZEZWFsZXJDYXJkcy5hcHBlbmRDaGlsZChpbWcpO1xuICB9KTtcblxuICBwbGF5ZXJDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGltZy5zcmMgPSBjYXJkSW1hZ2VzW2NhcmRdO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICAgIGRpdlBsYXllckNhcmRzLmFwcGVuZENoaWxkKGltZyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnaXZlQ2FyZChjYXJkcykge1xuICBsZXQgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudERlY2subGVuZ3RoKTtcbiAgY2FyZHMucHVzaChjdXJyZW50RGVja1tudW1iZXJdKTtcbiAgY3VycmVudERlY2suc3BsaWNlKG51bWJlciwgMSk7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZUJlc3RNb3ZlKCkge1xuICBsZXQgZGVhbGVyQ2FyZCA9IGdldENhcmRTY29yZShkZWFsZXJDYXJkc1swXSk7XG4gIGxldCBwbGF5ZXJDYXJkMSA9IGdldENhcmRTY29yZShwbGF5ZXJDYXJkc1swXSk7XG4gIGxldCBwbGF5ZXJDYXJkMiA9IGdldENhcmRTY29yZShwbGF5ZXJDYXJkc1sxXSk7XG5cbiAgbGV0IHBsYXllclNjb3JlID0gcGxheWVyQ2FyZDEgKyBwbGF5ZXJDYXJkMjtcblxuICAvLyBJZiBwbGF5ZXIgaGFzIHBhaXJzXG4gIGlmIChwbGF5ZXJDYXJkMSA9PT0gcGxheWVyQ2FyZDIpIHtcbiAgICBzd2l0Y2ggKHBsYXllckNhcmQxKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoZGVhbGVyQ2FyZCA8IDQgJiYgREFTT2ZmZXJlZCkgfHxcbiAgICAgICAgICAoNCA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNylcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5zcGxpdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoZGVhbGVyQ2FyZCA8IDQgJiYgREFTT2ZmZXJlZCkgfHxcbiAgICAgICAgICAoNCA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNylcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5zcGxpdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGlmICg1IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2ICYmIERBU09mZmVyZWQpXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLnNwbGl0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoZGVhbGVyQ2FyZCA9PT0gMiAmJiBEQVNPZmZlcmVkKSB8fFxuICAgICAgICAgICgzIDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2KVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLnNwbGl0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaWYgKGRlYWxlckNhcmQgPD0gNykgcmV0dXJuIG1vdmVzLnNwbGl0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIG1vdmVzLnNwbGl0O1xuICAgICAgY2FzZSA5OlxuICAgICAgICBpZiAoZGVhbGVyQ2FyZCA8PSA2IHx8ICg4IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA5KSlcbiAgICAgICAgICByZXR1cm4gbW92ZXMuc3BsaXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICByZXR1cm4gbW92ZXMuc3BsaXQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBwbGF5ZXIgaGFzIGFuIGFjZVxuICBpZiAocGxheWVyQ2FyZDEgPT09IDExIHx8IHBsYXllckNhcmQyID09PSAxMSkge1xuICAgIHBsYXllclNjb3JlIC09IDExO1xuXG4gICAgc3dpdGNoIChwbGF5ZXJTY29yZSkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAoNSA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNiAmJiBkb3VibGVBbGxvd2VkKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5kb3VibGVEb3duO1xuICAgICAgICByZXR1cm4gbW92ZXMuaGl0O1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAoNSA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNiAmJiBkb3VibGVBbGxvd2VkKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5kb3VibGVEb3duO1xuICAgICAgICByZXR1cm4gbW92ZXMuaGl0O1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpZiAoNCA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNiAmJiBkb3VibGVBbGxvd2VkKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5kb3VibGVEb3duO1xuICAgICAgICByZXR1cm4gbW92ZXMuaGl0O1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpZiAoNCA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNiAmJiBkb3VibGVBbGxvd2VkKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5kb3VibGVEb3duO1xuICAgICAgICByZXR1cm4gbW92ZXMuaGl0O1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpZiAoMyA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNiAmJiBkb3VibGVBbGxvd2VkKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5kb3VibGVEb3duO1xuICAgICAgICByZXR1cm4gbW92ZXMuaGl0O1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpZiAoZGVhbGVyQ2FyZCA8PSA2ICYmIGRvdWJsZUFsbG93ZWQpIHJldHVybiBtb3Zlcy5kb3VibGVEb3duO1xuICAgICAgICBlbHNlIGlmIChkZWFsZXJDYXJkIDw9IDgpIHJldHVybiBtb3Zlcy5zdGFuZDtcbiAgICAgICAgcmV0dXJuIG1vdmVzLmhpdDtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaWYgKGRlYWxlckNhcmQgPT09IDYgJiYgZG91YmxlQWxsb3dlZCkgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgICAgIHJldHVybiBtb3Zlcy5zdGFuZDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtb3Zlcy5zdGFuZDtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBwbGF5ZXJzIGhhcyBuZWl0aGVyIGFuIGFjZSwgbm9yIGEgcGFpclxuXG4gIGlmIChwbGF5ZXJTY29yZSA8PSA4KSB7XG4gICAgcmV0dXJuIG1vdmVzLmhpdDtcbiAgfSBlbHNlIGlmIChwbGF5ZXJTY29yZSA9PT0gOSkge1xuICAgIGlmICgzIDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2ICYmIGRvdWJsZUFsbG93ZWQpXG4gICAgICByZXR1cm4gbW92ZXMuZG91YmxlRG93bjtcbiAgICByZXR1cm4gbW92ZXMuaGl0O1xuICB9IGVsc2UgaWYgKHBsYXllclNjb3JlID09PSAxMCkge1xuICAgIGlmIChkZWFsZXJDYXJkIDw9IDkgJiYgZG91YmxlQWxsb3dlZCkgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgcmV0dXJuIG1vdmVzLmhpdDtcbiAgfSBlbHNlIGlmIChwbGF5ZXJTY29yZSA9PT0gMTEpIHtcbiAgICBpZiAoZG91YmxlQWxsb3dlZCkgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgcmV0dXJuIG1vdmVzLmhpdDtcbiAgfSBlbHNlIGlmIChwbGF5ZXJTY29yZSA9PT0gMTIpIHtcbiAgICBpZiAoNCA8PSBkZWFsZXJDYXJkICYmIGRlYWxlckNhcmQgPD0gNikgcmV0dXJuIG1vdmVzLnN0YW5kO1xuICAgIHJldHVybiBtb3Zlcy5oaXQ7XG4gIH0gZWxzZSBpZiAoMTMgPD0gcGxheWVyU2NvcmUgJiYgcGxheWVyU2NvcmUgPD0gMTYpIHtcbiAgICBpZiAoZGVhbGVyQ2FyZCA8PSA2KSByZXR1cm4gbW92ZXMuc3RhbmQ7XG4gICAgcmV0dXJuIG1vdmVzLmhpdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbW92ZXMuc3RhbmQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDb3JyZWN0TW92ZShtb3ZlKSB7XG4gIHJldHVybiBtb3ZlID09PSBkZXRlcm1pbmVCZXN0TW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmUGFpcnMoKSB7XG4gIGlmIChwbGF5ZXJDYXJkc1swXS5sZW5ndGggIT09IHBsYXllckNhcmRzWzFdLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICBpZiAocGxheWVyQ2FyZHNbMF0ubGVuZ3RoID09PSAzIHx8IHBsYXllckNhcmRzWzBdWzFdID09PSBwbGF5ZXJDYXJkc1sxXVsxXSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdGFydFJvdW5kKCkge1xuICBjbGVhckNhcmRzKCk7XG4gIGhpZGVSZXN1bHRzKCk7XG4gIGN1cnJlbnREZWNrID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwbGF5aW5nQ2FyZHMpKTtcbiAgZ2l2ZUNhcmQocGxheWVyQ2FyZHMpO1xuICBnaXZlQ2FyZChwbGF5ZXJDYXJkcyk7XG4gIGdpdmVDYXJkKGRlYWxlckNhcmRzKTtcblxuICBjb25zdCBidG5TcGxpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsaXRcIik7XG5cbiAgaWYgKGNoZWNrSWZQYWlycygpKSBidG5TcGxpdC5kaXNhYmxlZCA9IGZhbHNlO1xuICBlbHNlIGJ0blNwbGl0LmRpc2FibGVkID0gdHJ1ZTtcblxuICBkaXNwbGF5Q2FyZHMoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3MoKSB7XG4gIGNvbnN0IGJ0bkRvdWJsZURvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvdWJsZV9kb3duXCIpO1xuXG4gIGNvbnN0IGlucHV0REFTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXMtYWxsb3dlZFwiKTtcbiAgY29uc3QgaW5wdXREb3VibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvdWJsaW5nLWFsbG93ZWRcIik7XG5cbiAgZG91YmxlQWxsb3dlZCA9IGlucHV0RG91YmxlLmNoZWNrZWQ7XG4gIERBU09mZmVyZWQgPSBpbnB1dERBUy5jaGVja2VkO1xuXG4gIGJ0bkRvdWJsZURvd24uZGlzYWJsZWQgPSAhZG91YmxlQWxsb3dlZDtcbn1cblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjZGFzLWFsbG93ZWRcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlU2V0dGluZ3MpO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNkb3VibGluZy1hbGxvd2VkXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZVNldHRpbmdzKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmlnZ2VyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfYm94XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0cmlnZ2VyX2NoZWNrZWRcIik7XG59KTtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjaGl0XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnRuQ2xpY2sobW92ZXMuaGl0KSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNzdGFuZFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGJ0bkNsaWNrKG1vdmVzLnN0YW5kKSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNzcGxpdFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGJ0bkNsaWNrKG1vdmVzLnNwbGl0KSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNkb3VibGVfZG93blwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGJ0bkNsaWNrKG1vdmVzLmRvdWJsZURvd24pKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250aW51ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRSb3VuZCk7XG5cbnN0YXJ0Um91bmQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==