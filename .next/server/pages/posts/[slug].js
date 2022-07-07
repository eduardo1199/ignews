/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__MzB65\",\n\t\"post\": \"post_post__ejhnw\",\n\t\"postContent\": \"post_postContent__B93C3\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcz8wOGQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBvc3RfY29udGFpbmVyX19NekI2NVwiLFxuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfX2VqaG53XCIsXG5cdFwicG9zdENvbnRlbnRcIjogXCJwb3N0X3Bvc3RDb250ZW50X19COTNDM1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Post() {\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const slug = query.slug;\n    const [document] = (0,_prismicio_react__WEBPACK_IMPORTED_MODULE_1__.usePrismicDocumentByUID)(\"publication\", slug);\n    const post = {\n        slug,\n        title: document?.data.title,\n        content: document?.data.content,\n        updatedAt: new Date(document?.last_publication_date).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"long\",\n            year: \"numeric\"\n        })\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        post.title,\n                        \" | Ignews\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().post),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: post.updatedAt\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postContent),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__.RichText, {\n                                render: document?.data.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUNkO0FBQ2hCO0FBQ1c7QUFDRztBQUVIO0FBU3pCLFNBQVNNLElBQUksR0FBRztJQUM3QixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxHQUFFQyxNQUFNLEdBQUUsR0FBR1IsMkRBQVUsRUFBRTtJQUM5QyxNQUFNLEVBQUVTLEtBQUssR0FBRSxHQUFHUCxzREFBUyxFQUFFO0lBRTdCLE1BQU1RLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFJO0lBRXZCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLEdBQUdaLHlFQUF1QixDQUFDLGFBQWEsRUFBRVcsSUFBSSxDQUFDO0lBRS9ELE1BQU1FLElBQUksR0FBUztRQUNqQkYsSUFBSTtRQUNKRyxLQUFLLEVBQUVGLFFBQVEsRUFBRUwsSUFBSSxDQUFDTyxLQUFLO1FBQzNCQyxPQUFPLEVBQUVILFFBQVEsRUFBRUwsSUFBSSxDQUFDUSxPQUFPO1FBQy9CQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDTCxRQUFRLEVBQUVNLHFCQUFxQixDQUFFLENBQUNDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtZQUNoRkMsR0FBRyxFQUFFLFNBQVM7WUFDZEMsS0FBSyxFQUFFLE1BQU07WUFDYkMsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztLQUNIO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDcEIsa0RBQUk7MEJBQ0gsNEVBQUNZLE9BQUs7O3dCQUFFRCxJQUFJLENBQUNDLEtBQUs7d0JBQUMsV0FBUzs7Ozs7O3dCQUFROzs7OztvQkFDL0I7MEJBRVAsOERBQUNTLE1BQUk7Z0JBQUNDLFNBQVMsRUFBRW5CLG9FQUFnQjswQkFDL0IsNEVBQUNxQixTQUFPO29CQUFDRixTQUFTLEVBQUVuQiwrREFBVzs7c0NBQzdCLDhEQUFDc0IsSUFBRTtzQ0FBRWQsSUFBSSxDQUFDQyxLQUFLOzs7OztnQ0FBTTtzQ0FDckIsOERBQUNjLE1BQUk7c0NBQUVmLElBQUksQ0FBQ0csU0FBUzs7Ozs7Z0NBQVE7c0NBQzdCLDhEQUFDYSxLQUFHOzRCQUFDTCxTQUFTLEVBQUVuQixzRUFBa0I7c0NBQ2hDLDRFQUFDRCxxREFBUTtnQ0FBQzJCLE1BQU0sRUFBRW5CLFFBQVEsRUFBRUwsSUFBSSxDQUFDUSxPQUFPOzs7OztvQ0FBSTs7Ozs7Z0NBQ3hDOzs7Ozs7d0JBQ0U7Ozs7O29CQUNMOztvQkFDTixDQUNIO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeD83NzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVByaXNtaWNEb2N1bWVudEJ5VUlEIH0gZnJvbSBcIkBwcmlzbWljaW8vcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLXJlYWN0anMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBQb3N0ID0ge1xyXG4gIHNsdWc6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzbHVnID0gcXVlcnkuc2x1ZyBhcyBzdHJpbmc7XHJcblxyXG4gIGNvbnN0IFtkb2N1bWVudF0gPSB1c2VQcmlzbWljRG9jdW1lbnRCeVVJRCgncHVibGljYXRpb24nLCBzbHVnKTtcclxuXHJcbiAgY29uc3QgcG9zdDogUG9zdCA9IHtcclxuICAgIHNsdWcsXHJcbiAgICB0aXRsZTogZG9jdW1lbnQ/LmRhdGEudGl0bGUhLFxyXG4gICAgY29udGVudDogZG9jdW1lbnQ/LmRhdGEuY29udGVudCxcclxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoZG9jdW1lbnQ/Lmxhc3RfcHVibGljYXRpb25fZGF0ZSEpLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XHJcbiAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICB5ZWFyOiAnbnVtZXJpYydcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9IHwgSWduZXdzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRlbnR9PlxyXG4gICAgICAgICAgICA8UmljaFRleHQgcmVuZGVyPXtkb2N1bWVudD8uZGF0YS5jb250ZW50fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbInVzZVByaXNtaWNEb2N1bWVudEJ5VUlEIiwidXNlU2Vzc2lvbiIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJSaWNoVGV4dCIsInN0eWxlcyIsIlBvc3QiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInF1ZXJ5Iiwic2x1ZyIsImRvY3VtZW50IiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsInVwZGF0ZWRBdCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYXJ0aWNsZSIsImgxIiwidGltZSIsImRpdiIsInBvc3RDb250ZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "@prismicio/react":
/*!***********************************!*\
  !*** external "@prismicio/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-reactjs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();