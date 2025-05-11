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

/* General styles */
body {
  background-color: #004d25; /* Darker green for a professional look */
  color: #ffffff;
  font-family: "Roboto", sans-serif; /* Modern font for readability */
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

h1,
h2 {
  font-family: "Inknut Antiqua", serif; /* Elegant font for headings */
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

/* Game area */
#dealer_cards,
#player_cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
}

.card {
  height: 120px;
  margin: 5px;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
}

/* Buttons */
#buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

button {
  font-family: inherit;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  background-color: #007b3d;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
}

button:hover {
  background-color: #005f2d;
  transform: scale(1.05);
}

button:disabled {
  background-color: #555555;
  cursor: not-allowed;
}

/* Menu styles */
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
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  transition: right 0.3s ease-in-out;
}

.menu_box label {
  font-size: 18px;
}

.trigger_checked {
  right: 0;
}

/* Results section */
.results {
  text-align: center;
  margin-top: 20px;
}

#correct h1 {
  color: #00ff00;
}

#incorrect h1 {
  color: #ff0000;
}

/* Responsive design */
@media (max-width: 768px) {
  .menu_box {
    width: 70%;
  }

  .card {
    height: 100px;
  }

  button {
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .card {
    height: 80px;
  }

  button {
    font-size: 12px;
    padding: 6px 12px;
  }
}

.bottom {
  margin-top: 0;
}

.content {
  display: flex;
  flex-direction: column;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAsD;AACxD;;AAEA,mBAAmB;AACnB;EACE,yBAAyB,EAAE,yCAAyC;EACpE,cAAc;EACd,iCAAiC,EAAE,gCAAgC;EACnE,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;;EAEE,oCAAoC,EAAE,8BAA8B;EACpE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA,cAAc;AACd;;EAEE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,kEAAkE;AACpE;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,SAAS;EACT,UAAU;EACV,SAAS;EACT,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,cAAc;EACd,eAAe;EACf,MAAM;EACN,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,QAAQ;AACV;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["@font-face {\n  font-family: \"Inknut_Antiqua\";\n  src: url(\"./Inknut_Antiqua/InknutAntiqua-Regular.ttf\");\n}\n\n/* General styles */\nbody {\n  background-color: #004d25; /* Darker green for a professional look */\n  color: #ffffff;\n  font-family: \"Roboto\", sans-serif; /* Modern font for readability */\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n\nh1,\nh2 {\n  font-family: \"Inknut Antiqua\", serif; /* Elegant font for headings */\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 20px;\n}\n\n/* Game area */\n#dealer_cards,\n#player_cards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 10px 0;\n}\n\n.card {\n  height: 120px;\n  margin: 5px;\n  transition: transform 0.2s ease-in-out;\n}\n\n.card:hover {\n  transform: scale(1.1);\n}\n\n/* Buttons */\n#buttons {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 20px 0;\n}\n\nbutton {\n  font-family: inherit;\n  font-size: 16px;\n  border-radius: 5px;\n  border: none;\n  padding: 10px 20px;\n  background-color: #007b3d;\n  color: #ffffff;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease-in-out;\n}\n\nbutton:hover {\n  background-color: #005f2d;\n  transform: scale(1.05);\n}\n\nbutton:disabled {\n  background-color: #555555;\n  cursor: not-allowed;\n}\n\n/* Menu styles */\n#menu {\n  position: absolute;\n  right: 20px;\n  z-index: 2;\n  top: 20px;\n  padding: 0;\n  margin: 0;\n  height: 32px;\n  width: 32px;\n}\n\n#trigger {\n  appearance: none;\n  display: none;\n}\n\n#list_img {\n  width: 32px;\n  height: 32px;\n}\n\n.menu_box {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #ffffff;\n  position: fixed;\n  top: 0;\n  right: -100%;\n  width: 250px;\n  height: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: right 0.3s ease-in-out;\n}\n\n.menu_box label {\n  font-size: 18px;\n}\n\n.trigger_checked {\n  right: 0;\n}\n\n/* Results section */\n.results {\n  text-align: center;\n  margin-top: 20px;\n}\n\n#correct h1 {\n  color: #00ff00;\n}\n\n#incorrect h1 {\n  color: #ff0000;\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .menu_box {\n    width: 70%;\n  }\n\n  .card {\n    height: 100px;\n  }\n\n  button {\n    font-size: 14px;\n    padding: 8px 16px;\n  }\n}\n\n@media (max-width: 480px) {\n  .card {\n    height: 80px;\n  }\n\n  button {\n    font-size: 12px;\n    padding: 6px 12px;\n  }\n}\n\n.bottom {\n  margin-top: 0;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Inknut_Antiqua/InknutAntiqua-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/Inknut_Antiqua/InknutAntiqua-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0490c4cc5dba1fabcf51.ttf";

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMkM7O0FBRUg7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXZDO0FBQ0EsUUFBUSxtREFBSTtBQUNaLE9BQU8saURBQUc7QUFDVixNQUFNLGlEQUFFO0FBQ1IsTUFBTSxpREFBRTtBQUNSLE1BQU0saURBQUU7QUFDUixNQUFNLGlEQUFFO0FBQ1IsTUFBTSxpREFBRTtBQUNSLE1BQU0saURBQUU7QUFDUixNQUFNLGlEQUFFO0FBQ1IsTUFBTSxpREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7O0FBRVIsT0FBTyxrREFBRztBQUNWLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTs7QUFFUixPQUFPLGtEQUFHO0FBQ1YsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFOztBQUVSLE9BQU8sa0RBQUc7QUFDVixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUixNQUFNLGtEQUFFO0FBQ1IsTUFBTSxrREFBRTtBQUNSLE1BQU0sa0RBQUU7QUFDUjs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNwQjtBQUNBLGVBQWUsMENBQUs7QUFDcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVcsMENBQUs7QUFDaEIsSUFBSTtBQUNKO0FBQ0EsYUFBYSwwQ0FBSztBQUNsQixXQUFXLDBDQUFLO0FBQ2hCLElBQUk7QUFDSixpREFBaUQsMENBQUs7QUFDdEQsV0FBVywwQ0FBSztBQUNoQixJQUFJO0FBQ0osOEJBQThCLDBDQUFLO0FBQ25DLFdBQVcsMENBQUs7QUFDaEIsSUFBSTtBQUNKLG1EQUFtRCwwQ0FBSztBQUN4RCxXQUFXLDBDQUFLO0FBQ2hCLElBQUk7QUFDSixnQ0FBZ0MsMENBQUs7QUFDckMsV0FBVywwQ0FBSztBQUNoQixJQUFJO0FBQ0osV0FBVywwQ0FBSztBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGlEQUFZO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0Q0FBNEMsMENBQUs7QUFDakQ7QUFDQTtBQUNBLDRDQUE0QywwQ0FBSztBQUNqRDtBQUNBO0FBQ0EsNENBQTRDLDBDQUFLO0FBQ2pEO0FBQ0E7QUFDQSw0Q0FBNEMsMENBQUs7O0FBRWpEOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vc3JjL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ibGFja2phY2tfdGVhY2hlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhY2tqYWNrX3RlYWNoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JsYWNramFja190ZWFjaGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0lua251dF9BbnRpcXVhL0lua251dEFudGlxdWEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJbmtudXRfQW50aXF1YVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogR2VuZXJhbCBzdHlsZXMgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDI1OyAvKiBEYXJrZXIgZ3JlZW4gZm9yIGEgcHJvZmVzc2lvbmFsIGxvb2sgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmOyAvKiBNb2Rlcm4gZm9udCBmb3IgcmVhZGFiaWxpdHkgKi9cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmgxLFxuaDIge1xuICBmb250LWZhbWlseTogXCJJbmtudXQgQW50aXF1YVwiLCBzZXJpZjsgLyogRWxlZ2FudCBmb250IGZvciBoZWFkaW5ncyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi8qIEdhbWUgYXJlYSAqL1xuI2RlYWxlcl9jYXJkcyxcbiNwbGF5ZXJfY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW46IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBCdXR0b25zICovXG4jYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiM2Q7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWYyZDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogTWVudSBzdHlsZXMgKi9cbiNtZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbiN0cmlnZ2VyIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2xpc3RfaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLm1lbnVfYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51X2JveCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRyaWdnZXJfY2hlY2tlZCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4vKiBSZXN1bHRzIHNlY3Rpb24gKi9cbi5yZXN1bHRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jY29ycmVjdCBoMSB7XG4gIGNvbG9yOiAjMDBmZjAwO1xufVxuXG4jaW5jb3JyZWN0IGgxIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi8qIFJlc3BvbnNpdmUgZGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnVfYm94IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNhcmQge1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICB9XG59XG5cbi5ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXNEO0FBQ3hEOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLHlCQUF5QixFQUFFLHlDQUF5QztFQUNwRSxjQUFjO0VBQ2QsaUNBQWlDLEVBQUUsZ0NBQWdDO0VBQ25FLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLG9DQUFvQyxFQUFFLDhCQUE4QjtFQUNwRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBLGNBQWM7QUFDZDs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmtudXRfQW50aXF1YVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9JbmtudXRfQW50aXF1YS9JbmtudXRBbnRpcXVhLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbi8qIEdlbmVyYWwgc3R5bGVzICovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDI1OyAvKiBEYXJrZXIgZ3JlZW4gZm9yIGEgcHJvZmVzc2lvbmFsIGxvb2sgKi9cXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmOyAvKiBNb2Rlcm4gZm9udCBmb3IgcmVhZGFiaWxpdHkgKi9cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5rbnV0IEFudGlxdWFcXFwiLCBzZXJpZjsgLyogRWxlZ2FudCBmb250IGZvciBoZWFkaW5ncyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLyogR2FtZSBhcmVhICovXFxuI2RlYWxlcl9jYXJkcyxcXG4jcGxheWVyX2NhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBCdXR0b25zICovXFxuI2J1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiM2Q7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVmMmQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi8qIE1lbnUgc3R5bGVzICovXFxuI21lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4jdHJpZ2dlciB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2xpc3RfaW1nIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4ubWVudV9ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogLTEwMCU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51X2JveCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50cmlnZ2VyX2NoZWNrZWQge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi8qIFJlc3VsdHMgc2VjdGlvbiAqL1xcbi5yZXN1bHRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNjb3JyZWN0IGgxIHtcXG4gIGNvbG9yOiAjMDBmZjAwO1xcbn1cXG5cXG4jaW5jb3JyZWN0IGgxIHtcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1lbnVfYm94IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC5jYXJkIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmNhcmQge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgfVxcbn1cXG5cXG4uYm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiYWNrIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9iYWNrLnBuZ1wiO1xuXG5pbXBvcnQgQzEwIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8wQy5wbmdcIjtcbmltcG9ydCBDMiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvMkMucG5nXCI7XG5pbXBvcnQgQzMgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzNDLnBuZ1wiO1xuaW1wb3J0IEM0IGZyb20gXCIuL2ltYWdlcy9jYXJkcy80Qy5wbmdcIjtcbmltcG9ydCBDNSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNUMucG5nXCI7XG5pbXBvcnQgQzYgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzZDLnBuZ1wiO1xuaW1wb3J0IEM3IGZyb20gXCIuL2ltYWdlcy9jYXJkcy83Qy5wbmdcIjtcbmltcG9ydCBDOCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvOEMucG5nXCI7XG5pbXBvcnQgQzkgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzlDLnBuZ1wiO1xuaW1wb3J0IENKIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9KQy5wbmdcIjtcbmltcG9ydCBDUSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvUUMucG5nXCI7XG5pbXBvcnQgQ0sgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0tDLnBuZ1wiO1xuaW1wb3J0IENBIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9BQy5wbmdcIjtcblxuaW1wb3J0IEgxMCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvMEgucG5nXCI7XG5pbXBvcnQgSDIgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzJILnBuZ1wiO1xuaW1wb3J0IEgzIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8zSC5wbmdcIjtcbmltcG9ydCBINCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNEgucG5nXCI7XG5pbXBvcnQgSDUgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzVILnBuZ1wiO1xuaW1wb3J0IEg2IGZyb20gXCIuL2ltYWdlcy9jYXJkcy82SC5wbmdcIjtcbmltcG9ydCBINyBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvN0gucG5nXCI7XG5pbXBvcnQgSDggZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzhILnBuZ1wiO1xuaW1wb3J0IEg5IGZyb20gXCIuL2ltYWdlcy9jYXJkcy85SC5wbmdcIjtcbmltcG9ydCBISiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvSkgucG5nXCI7XG5pbXBvcnQgSFEgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL1FILnBuZ1wiO1xuaW1wb3J0IEhLIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9LSC5wbmdcIjtcbmltcG9ydCBIQSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvQUgucG5nXCI7XG5cbmltcG9ydCBEMTAgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzBELnBuZ1wiO1xuaW1wb3J0IEQyIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8yRC5wbmdcIjtcbmltcG9ydCBEMyBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvM0QucG5nXCI7XG5pbXBvcnQgRDQgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzRELnBuZ1wiO1xuaW1wb3J0IEQ1IGZyb20gXCIuL2ltYWdlcy9jYXJkcy81RC5wbmdcIjtcbmltcG9ydCBENiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNkQucG5nXCI7XG5pbXBvcnQgRDcgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzdELnBuZ1wiO1xuaW1wb3J0IEQ4IGZyb20gXCIuL2ltYWdlcy9jYXJkcy84RC5wbmdcIjtcbmltcG9ydCBEOSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvOUQucG5nXCI7XG5pbXBvcnQgREogZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0pELnBuZ1wiO1xuaW1wb3J0IERRIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9RRC5wbmdcIjtcbmltcG9ydCBESyBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvS0QucG5nXCI7XG5pbXBvcnQgREEgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0FELnBuZ1wiO1xuXG5pbXBvcnQgUzEwIGZyb20gXCIuL2ltYWdlcy9jYXJkcy8wUy5wbmdcIjtcbmltcG9ydCBTMiBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvMlMucG5nXCI7XG5pbXBvcnQgUzMgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzNTLnBuZ1wiO1xuaW1wb3J0IFM0IGZyb20gXCIuL2ltYWdlcy9jYXJkcy80Uy5wbmdcIjtcbmltcG9ydCBTNSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvNVMucG5nXCI7XG5pbXBvcnQgUzYgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzZTLnBuZ1wiO1xuaW1wb3J0IFM3IGZyb20gXCIuL2ltYWdlcy9jYXJkcy83Uy5wbmdcIjtcbmltcG9ydCBTOCBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvOFMucG5nXCI7XG5pbXBvcnQgUzkgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzLzlTLnBuZ1wiO1xuaW1wb3J0IFNKIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9KUy5wbmdcIjtcbmltcG9ydCBTUSBmcm9tIFwiLi9pbWFnZXMvY2FyZHMvUVMucG5nXCI7XG5pbXBvcnQgU0sgZnJvbSBcIi4vaW1hZ2VzL2NhcmRzL0tTLnBuZ1wiO1xuaW1wb3J0IFNBIGZyb20gXCIuL2ltYWdlcy9jYXJkcy9BUy5wbmdcIjtcblxuY29uc3QgY2FyZHMgPSB7XG4gIGJhY2s6IGJhY2ssXG4gIEMxMDogQzEwLFxuICBDMjogQzIsXG4gIEMzOiBDMyxcbiAgQzQ6IEM0LFxuICBDNTogQzUsXG4gIEM2OiBDNixcbiAgQzc6IEM3LFxuICBDODogQzgsXG4gIEM5OiBDOSxcbiAgQ0o6IENKLFxuICBDUTogQ1EsXG4gIENLOiBDSyxcbiAgQ0E6IENBLFxuXG4gIEgxMDogSDEwLFxuICBIMjogSDIsXG4gIEgzOiBIMyxcbiAgSDQ6IEg0LFxuICBINTogSDUsXG4gIEg2OiBINixcbiAgSDc6IEg3LFxuICBIODogSDgsXG4gIEg5OiBIOSxcbiAgSEo6IEhKLFxuICBIUTogSFEsXG4gIEhLOiBISyxcbiAgSEE6IEhBLFxuXG4gIEQxMDogRDEwLFxuICBEMjogRDIsXG4gIEQzOiBEMyxcbiAgRDQ6IEQ0LFxuICBENTogRDUsXG4gIEQ2OiBENixcbiAgRDc6IEQ3LFxuICBEODogRDgsXG4gIEQ5OiBEOSxcbiAgREo6IERKLFxuICBEUTogRFEsXG4gIERLOiBESyxcbiAgREE6IERBLFxuXG4gIFMxMDogUzEwLFxuICBTMjogUzIsXG4gIFMzOiBTMyxcbiAgUzQ6IFM0LFxuICBTNTogUzUsXG4gIFM2OiBTNixcbiAgUzc6IFM3LFxuICBTODogUzgsXG4gIFM5OiBTOSxcbiAgU0o6IFNKLFxuICBTUTogU1EsXG4gIFNLOiBTSyxcbiAgU0E6IFNBLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZHM7XG4iLCJmdW5jdGlvbiBjbGVhckRlY2soZGVjaykge1xuICBkZWNrID0gW107XG59XG5cbmZ1bmN0aW9uIHR1cm5DYXJkc0ludG9TdHJpbmcoY2FyZHMpIHtcbiAgbGV0IHN0cmluZyA9IFwiXCI7XG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBzdHJpbmcgKz0gYCR7Y2FyZH0gYDtcbiAgfSlcbiAgXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldENhcmRTY29yZShjYXJkKSB7XG4gIGNhcmQgPSBjYXJkLnN1YnN0cmluZygxKTtcblxuICBpZihjYXJkID09PSBcIkFcIikgcmV0dXJuIDExO1xuICBlbHNlIGlmKGNhcmQgPT09IFwiSlwiIHx8IGNhcmQgPT09IFwiUVwiIHx8IGNhcmQgPT09IFwiS1wiKSByZXR1cm4gMTA7XG4gIFxuICByZXR1cm4gcGFyc2VJbnQoY2FyZCk7XG59XG5cbmNvbnN0IHBsYXlpbmdDYXJkcyA9IFtcbiAgXCJIMlwiLFxuICBcIkgzXCIsXG4gIFwiSDRcIixcbiAgXCJINVwiLFxuICBcIkg2XCIsXG4gIFwiSDdcIixcbiAgXCJIOFwiLFxuICBcIkg5XCIsXG4gIFwiSDEwXCIsXG4gIFwiSEpcIixcbiAgXCJIUVwiLFxuICBcIkhLXCIsXG4gIFwiSEFcIixcbiAgXCJEMlwiLFxuICBcIkQzXCIsXG4gIFwiRDRcIixcbiAgXCJENVwiLFxuICBcIkQ2XCIsXG4gIFwiRDdcIixcbiAgXCJEOFwiLFxuICBcIkQ5XCIsXG4gIFwiRDEwXCIsXG4gIFwiREpcIixcbiAgXCJEUVwiLFxuICBcIkRLXCIsXG4gIFwiREFcIixcbiAgXCJDMlwiLFxuICBcIkMzXCIsXG4gIFwiQzRcIixcbiAgXCJDNVwiLFxuICBcIkM2XCIsXG4gIFwiQzdcIixcbiAgXCJDOFwiLFxuICBcIkM5XCIsXG4gIFwiQzEwXCIsXG4gIFwiQ0pcIixcbiAgXCJDUVwiLFxuICBcIkNLXCIsXG4gIFwiQ0FcIixcbiAgXCJTMlwiLFxuICBcIlMzXCIsXG4gIFwiUzRcIixcbiAgXCJTNVwiLFxuICBcIlM2XCIsXG4gIFwiUzdcIixcbiAgXCJTOFwiLFxuICBcIlM5XCIsXG4gIFwiUzEwXCIsXG4gIFwiU0pcIixcbiAgXCJTUVwiLFxuICBcIlNLXCIsXG4gIFwiU0FcIlxuXVxuXG5jb25zdCBtb3ZlcyA9IHtcbiAgaGl0OiBcIkhpdFwiLFxuICBzdGFuZDogXCJTdGFuZFwiLFxuICBzcGxpdDogXCJTcGxpdFwiLFxuICBkb3VibGVEb3duOiBcIkRvdWJsZURvd25cIlxufTtcblxuY29uc3QgbW92ZUV2YWwgPSB7XG4gIGNvcnJlY3Q6ICdjb3JyZWN0JyxcbiAgaW5jb3JyZWN0OiAnaW5jb3JyZWN0J1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJEZWNrLFxuICB0dXJuQ2FyZHNJbnRvU3RyaW5nLFxuICBnZXRDYXJkU2NvcmUsXG4gIHBsYXlpbmdDYXJkcyxcbiAgbW92ZXMsXG4gIG1vdmVFdmFsXG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGdldENhcmRTY29yZSwgcGxheWluZ0NhcmRzLCBtb3ZlcyB9IGZyb20gXCIuL21vZHVsZVwiO1xuaW1wb3J0IGxpc3QgZnJvbSBcIi4vaWNvbnMvbGlzdC5zdmdcIjtcbmltcG9ydCBjYXJkSW1hZ2VzIGZyb20gXCIuL2NhcmRzXCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdF9pbWdcIikuc3JjID0gbGlzdDtcblxubGV0IGRvdWJsZUFsbG93ZWQgPSBmYWxzZTtcbmxldCBEQVNPZmZlcmVkID0gZmFsc2U7XG5cbmxldCBjdXJyZW50RGVjaztcblxubGV0IGRlYWxlckNhcmRzID0gW107XG5sZXQgcGxheWVyQ2FyZHMgPSBbXTtcblxuZnVuY3Rpb24gY2xlYXJDYXJkcygpIHtcbiAgZGVhbGVyQ2FyZHMgPSBbXTtcbiAgcGxheWVyQ2FyZHMgPSBbXTtcbn1cblxuZnVuY3Rpb24gYnRuQ2xpY2sobW92ZSkge1xuICBkaXNwbGF5UmVzdWx0KGlzQ29ycmVjdE1vdmUobW92ZSkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UmVzdWx0KGlzQ29ycmVjdCkge1xuICBoaWRlUmVzdWx0cygpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpdGluZ1wiKS5oaWRkZW4gPSB0cnVlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRpbnVlXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gIGlmIChpc0NvcnJlY3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvcnJlY3RcIikuaGlkZGVuID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmNvcnJlY3RcIikuaGlkZGVuID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZVJlc3VsdHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGludWVcIikuaGlkZGVuID0gdHJ1ZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3JyZWN0XCIpLmhpZGRlbiA9IHRydWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5jb3JyZWN0XCIpLmhpZGRlbiA9IHRydWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpdGluZ1wiKS5oaWRkZW4gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNhcmRzKCkge1xuICBjb25zdCBkaXZEZWFsZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVhbGVyX2NhcmRzXCIpO1xuICBjb25zdCBkaXZQbGF5ZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyX2NhcmRzXCIpO1xuXG4gIGRpdkRlYWxlckNhcmRzLmlubmVySFRNTCA9IFwiXCI7XG4gIGRpdlBsYXllckNhcmRzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBpbWcuc3JjID0gY2FyZEltYWdlcy5iYWNrO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICAgIGRpdkRlYWxlckNhcmRzLmFwcGVuZENoaWxkKGltZyk7XG4gIH1cblxuICBkZWFsZXJDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGltZy5zcmMgPSBjYXJkSW1hZ2VzW2NhcmRdO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICAgIGRpdkRlYWxlckNhcmRzLmFwcGVuZENoaWxkKGltZyk7XG4gIH0pO1xuXG4gIHBsYXllckNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgaW1nLnNyYyA9IGNhcmRJbWFnZXNbY2FyZF07XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gICAgZGl2UGxheWVyQ2FyZHMuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdpdmVDYXJkKGNhcmRzKSB7XG4gIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50RGVjay5sZW5ndGgpO1xuICBjYXJkcy5wdXNoKGN1cnJlbnREZWNrW251bWJlcl0pO1xuICBjdXJyZW50RGVjay5zcGxpY2UobnVtYmVyLCAxKTtcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lQmVzdE1vdmUoKSB7XG4gIGxldCBkZWFsZXJDYXJkID0gZ2V0Q2FyZFNjb3JlKGRlYWxlckNhcmRzWzBdKTtcbiAgbGV0IHBsYXllckNhcmQxID0gZ2V0Q2FyZFNjb3JlKHBsYXllckNhcmRzWzBdKTtcbiAgbGV0IHBsYXllckNhcmQyID0gZ2V0Q2FyZFNjb3JlKHBsYXllckNhcmRzWzFdKTtcblxuICBsZXQgcGxheWVyU2NvcmUgPSBwbGF5ZXJDYXJkMSArIHBsYXllckNhcmQyO1xuXG4gIC8vIElmIHBsYXllciBoYXMgcGFpcnNcbiAgaWYgKHBsYXllckNhcmQxID09PSBwbGF5ZXJDYXJkMikge1xuICAgIHN3aXRjaCAocGxheWVyQ2FyZDEpIHtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChkZWFsZXJDYXJkIDwgNCAmJiBEQVNPZmZlcmVkKSB8fFxuICAgICAgICAgICg0IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA3KVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLnNwbGl0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChkZWFsZXJDYXJkIDwgNCAmJiBEQVNPZmZlcmVkKSB8fFxuICAgICAgICAgICg0IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA3KVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLnNwbGl0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYgKDUgPD0gZGVhbGVyQ2FyZCAmJiBkZWFsZXJDYXJkIDw9IDYgJiYgREFTT2ZmZXJlZClcbiAgICAgICAgICByZXR1cm4gbW92ZXMuc3BsaXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChkZWFsZXJDYXJkID09PSAyICYmIERBU09mZmVyZWQpIHx8XG4gICAgICAgICAgKDMgPD0gZGVhbGVyQ2FyZCAmJiBkZWFsZXJDYXJkIDw9IDYpXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbW92ZXMuc3BsaXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpZiAoZGVhbGVyQ2FyZCA8PSA3KSByZXR1cm4gbW92ZXMuc3BsaXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gbW92ZXMuc3BsaXQ7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIGlmIChkZWFsZXJDYXJkIDw9IDYgfHwgKDggPD0gZGVhbGVyQ2FyZCAmJiBkZWFsZXJDYXJkIDw9IDkpKVxuICAgICAgICAgIHJldHVybiBtb3Zlcy5zcGxpdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIHJldHVybiBtb3Zlcy5zcGxpdDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHBsYXllciBoYXMgYW4gYWNlXG4gIGlmIChwbGF5ZXJDYXJkMSA9PT0gMTEgfHwgcGxheWVyQ2FyZDIgPT09IDExKSB7XG4gICAgcGxheWVyU2NvcmUgLT0gMTE7XG5cbiAgICBzd2l0Y2ggKHBsYXllclNjb3JlKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmICg1IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2ICYmIGRvdWJsZUFsbG93ZWQpXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgICAgIHJldHVybiBtb3Zlcy5oaXQ7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmICg1IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2ICYmIGRvdWJsZUFsbG93ZWQpXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgICAgIHJldHVybiBtb3Zlcy5oaXQ7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGlmICg0IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2ICYmIGRvdWJsZUFsbG93ZWQpXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgICAgIHJldHVybiBtb3Zlcy5oaXQ7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGlmICg0IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2ICYmIGRvdWJsZUFsbG93ZWQpXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgICAgIHJldHVybiBtb3Zlcy5oaXQ7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGlmICgzIDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2ICYmIGRvdWJsZUFsbG93ZWQpXG4gICAgICAgICAgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgICAgIHJldHVybiBtb3Zlcy5oaXQ7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGlmIChkZWFsZXJDYXJkIDw9IDYgJiYgZG91YmxlQWxsb3dlZCkgcmV0dXJuIG1vdmVzLmRvdWJsZURvd247XG4gICAgICAgIGVsc2UgaWYgKGRlYWxlckNhcmQgPD0gOCkgcmV0dXJuIG1vdmVzLnN0YW5kO1xuICAgICAgICByZXR1cm4gbW92ZXMuaGl0O1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpZiAoZGVhbGVyQ2FyZCA9PT0gNiAmJiBkb3VibGVBbGxvd2VkKSByZXR1cm4gbW92ZXMuZG91YmxlRG93bjtcbiAgICAgICAgcmV0dXJuIG1vdmVzLnN0YW5kO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vdmVzLnN0YW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHBsYXllcnMgaGFzIG5laXRoZXIgYW4gYWNlLCBub3IgYSBwYWlyXG5cbiAgaWYgKHBsYXllclNjb3JlIDw9IDgpIHtcbiAgICByZXR1cm4gbW92ZXMuaGl0O1xuICB9IGVsc2UgaWYgKHBsYXllclNjb3JlID09PSA5KSB7XG4gICAgaWYgKDMgPD0gZGVhbGVyQ2FyZCAmJiBkZWFsZXJDYXJkIDw9IDYgJiYgZG91YmxlQWxsb3dlZClcbiAgICAgIHJldHVybiBtb3Zlcy5kb3VibGVEb3duO1xuICAgIHJldHVybiBtb3Zlcy5oaXQ7XG4gIH0gZWxzZSBpZiAocGxheWVyU2NvcmUgPT09IDEwKSB7XG4gICAgaWYgKGRlYWxlckNhcmQgPD0gOSAmJiBkb3VibGVBbGxvd2VkKSByZXR1cm4gbW92ZXMuZG91YmxlRG93bjtcbiAgICByZXR1cm4gbW92ZXMuaGl0O1xuICB9IGVsc2UgaWYgKHBsYXllclNjb3JlID09PSAxMSkge1xuICAgIGlmIChkb3VibGVBbGxvd2VkKSByZXR1cm4gbW92ZXMuZG91YmxlRG93bjtcbiAgICByZXR1cm4gbW92ZXMuaGl0O1xuICB9IGVsc2UgaWYgKHBsYXllclNjb3JlID09PSAxMikge1xuICAgIGlmICg0IDw9IGRlYWxlckNhcmQgJiYgZGVhbGVyQ2FyZCA8PSA2KSByZXR1cm4gbW92ZXMuc3RhbmQ7XG4gICAgcmV0dXJuIG1vdmVzLmhpdDtcbiAgfSBlbHNlIGlmICgxMyA8PSBwbGF5ZXJTY29yZSAmJiBwbGF5ZXJTY29yZSA8PSAxNikge1xuICAgIGlmIChkZWFsZXJDYXJkIDw9IDYpIHJldHVybiBtb3Zlcy5zdGFuZDtcbiAgICByZXR1cm4gbW92ZXMuaGl0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBtb3Zlcy5zdGFuZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvcnJlY3RNb3ZlKG1vdmUpIHtcbiAgcmV0dXJuIG1vdmUgPT09IGRldGVybWluZUJlc3RNb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZQYWlycygpIHtcbiAgaWYgKHBsYXllckNhcmRzWzBdLmxlbmd0aCAhPT0gcGxheWVyQ2FyZHNbMV0ubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGlmIChwbGF5ZXJDYXJkc1swXS5sZW5ndGggPT09IDMgfHwgcGxheWVyQ2FyZHNbMF1bMV0gPT09IHBsYXllckNhcmRzWzFdWzFdKVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0Um91bmQoKSB7XG4gIGNsZWFyQ2FyZHMoKTtcbiAgaGlkZVJlc3VsdHMoKTtcbiAgY3VycmVudERlY2sgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBsYXlpbmdDYXJkcykpO1xuICBnaXZlQ2FyZChwbGF5ZXJDYXJkcyk7XG4gIGdpdmVDYXJkKHBsYXllckNhcmRzKTtcbiAgZ2l2ZUNhcmQoZGVhbGVyQ2FyZHMpO1xuXG4gIGNvbnN0IGJ0blNwbGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxpdFwiKTtcblxuICBpZiAoY2hlY2tJZlBhaXJzKCkpIGJ0blNwbGl0LmRpc2FibGVkID0gZmFsc2U7XG4gIGVsc2UgYnRuU3BsaXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGRpc3BsYXlDYXJkcygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTZXR0aW5ncygpIHtcbiAgY29uc3QgYnRuRG91YmxlRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG91YmxlX2Rvd25cIik7XG5cbiAgY29uc3QgaW5wdXREQVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rhcy1hbGxvd2VkXCIpO1xuICBjb25zdCBpbnB1dERvdWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG91YmxpbmctYWxsb3dlZFwiKTtcblxuICBkb3VibGVBbGxvd2VkID0gaW5wdXREb3VibGUuY2hlY2tlZDtcbiAgREFTT2ZmZXJlZCA9IGlucHV0REFTLmNoZWNrZWQ7XG5cbiAgYnRuRG91YmxlRG93bi5kaXNhYmxlZCA9ICFkb3VibGVBbGxvd2VkO1xufVxuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNkYXMtYWxsb3dlZFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVTZXR0aW5ncyk7XG5cbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI2RvdWJsaW5nLWFsbG93ZWRcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlU2V0dGluZ3MpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyaWdnZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9ib3hcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRyaWdnZXJfY2hlY2tlZFwiKTtcbn0pO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNoaXRcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBidG5DbGljayhtb3Zlcy5oaXQpKTtcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI3N0YW5kXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnRuQ2xpY2sobW92ZXMuc3RhbmQpKTtcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI3NwbGl0XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnRuQ2xpY2sobW92ZXMuc3BsaXQpKTtcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI2RvdWJsZV9kb3duXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnRuQ2xpY2sobW92ZXMuZG91YmxlRG93bikpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRpbnVlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFJvdW5kKTtcblxuc3RhcnRSb3VuZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9