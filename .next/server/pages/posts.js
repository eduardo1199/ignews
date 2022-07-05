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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./src/pages/posts/styles.module.scss":
/*!********************************************!*\
  !*** ./src/pages/posts/styles.module.scss ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__h2EFI\",\n\t\"posts\": \"styles_posts__UYuiv\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzPzRhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9faDJFRklcIixcblx0XCJwb3N0c1wiOiBcInN0eWxlc19wb3N0c19fVVl1aXZcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Posts() {\n    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [document] = (0,_prismicio_react__WEBPACK_IMPORTED_MODULE_1__.useAllPrismicDocumentsByType)(\"publication\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const serializePosts = document?.map((document)=>{\n            return {\n                slug: document.uid,\n                title: document.data.title,\n                excerpt: document.data.content.find((content)=>content.type === \"paragraph\")?.text ?? \"\",\n                updatedAt: new Date(document.last_publication_date).toLocaleDateString(\"pt-BR\", {\n                    day: \"2-digit\",\n                    month: \"long\",\n                    year: \"numeric\"\n                })\n            };\n        });\n        setPosts(serializePosts);\n    }, [\n        document\n    ]);\n    console.log(document);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Posts | Ignews\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().posts),\n                    children: posts?.map((post)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    children: post.updatedAt\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.excerpt\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, post.slug, true, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0U7QUFDbkM7QUFDZTtBQUNGO0FBUzNCLFNBQVNLLEtBQUssR0FBRztJQUM5QixNQUFNLEtBQUNDLEtBQUssTUFBRUMsUUFBUSxNQUFJSiwrQ0FBUSxDQUFzQixFQUFFLENBQUM7SUFFM0QsTUFBTSxDQUFDSyxRQUFRLENBQUMsR0FBR1IsOEVBQTRCLENBQUMsYUFBYSxDQUFDO0lBRTlERSxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNTyxjQUFjLEdBQUdELFFBQVEsRUFBRUUsR0FBRyxDQUFDRixDQUFBQSxRQUFRLEdBQUk7WUFDL0MsT0FBTztnQkFDTEcsSUFBSSxFQUFFSCxRQUFRLENBQUNJLEdBQUc7Z0JBQ2xCQyxLQUFLLEVBQUVMLFFBQVEsQ0FBQ00sSUFBSSxDQUFDRCxLQUFLO2dCQUMxQkUsT0FBTyxFQUFFUCxRQUFRLENBQUNNLElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLENBQUNELENBQUFBLE9BQU8sR0FBSUEsT0FBTyxDQUFDRSxJQUFJLEtBQUssV0FBVyxDQUFDLEVBQUVDLElBQUksSUFBSSxFQUFFO2dCQUN4RkMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQ2IsUUFBUSxDQUFDYyxxQkFBcUIsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzlFQyxHQUFHLEVBQUUsU0FBUztvQkFDZEMsS0FBSyxFQUFFLE1BQU07b0JBQ2JDLElBQUksRUFBRSxTQUFTO2lCQUNoQixDQUFDO2FBQ0g7U0FDRixDQUFDO1FBRUZuQixRQUFRLENBQUNFLGNBQWMsQ0FBQyxDQUFDO0tBQzFCLEVBQUU7UUFBQ0QsUUFBUTtLQUFDLENBQUMsQ0FBQztJQUVmbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixRQUFRLENBQUMsQ0FBQztJQUV0QixxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJOzBCQUNILDRFQUFDWSxPQUFLOzhCQUFDLGdCQUFjOzs7Ozt3QkFBUTs7Ozs7b0JBQ3hCOzBCQUVQLDhEQUFDZ0IsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFMUIsc0VBQWdCOzBCQUMvQiw0RUFBQzRCLEtBQUc7b0JBQUNGLFNBQVMsRUFBRTFCLGtFQUFZOzhCQUN6QkUsS0FBSyxFQUFFSSxHQUFHLENBQUN1QixDQUFBQSxJQUFJLEdBQUk7d0JBQ2xCLHFCQUNFLDhEQUFDQyxHQUFDOzRCQUFDQyxJQUFJLEVBQUMsR0FBRzs7OENBQ1QsOERBQUNDLE1BQUk7OENBQUVILElBQUksQ0FBQ2IsU0FBUzs7Ozs7d0NBQVE7OENBQzdCLDhEQUFDaUIsUUFBTTs4Q0FBRUosSUFBSSxDQUFDcEIsS0FBSzs7Ozs7d0NBQVU7OENBQzdCLDhEQUFDeUIsR0FBQzs4Q0FBRUwsSUFBSSxDQUFDbEIsT0FBTzs7Ozs7d0NBQUs7OzJCQUhOa0IsSUFBSSxDQUFDdEIsSUFBSTs7OztnQ0FJdEIsQ0FDTDtxQkFDRixDQUFDOzs7Ozt3QkFDRTs7Ozs7b0JBQ0Q7O29CQUNOLENBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9wb3N0cy9pbmRleC50c3g/Zjg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBbGxQcmlzbWljRG9jdW1lbnRzQnlUeXBlIH0gZnJvbSAnQHByaXNtaWNpby9yZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBQb3N0cyA9IHtcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBleGNlcnB0OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdHNbXSB8IHVuZGVmaW5lZD4oW10pO1xyXG5cclxuICBjb25zdCBbZG9jdW1lbnRdID0gdXNlQWxsUHJpc21pY0RvY3VtZW50c0J5VHlwZSgncHVibGljYXRpb24nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZVBvc3RzID0gZG9jdW1lbnQ/Lm1hcChkb2N1bWVudCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2x1ZzogZG9jdW1lbnQudWlkISxcclxuICAgICAgICB0aXRsZTogZG9jdW1lbnQuZGF0YS50aXRsZSEsXHJcbiAgICAgICAgZXhjZXJwdDogZG9jdW1lbnQuZGF0YS5jb250ZW50LmZpbmQoY29udGVudCA9PiBjb250ZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnKT8udGV4dCA/PyAnJyxcclxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKGRvY3VtZW50Lmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicsIHtcclxuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICAgIHllYXI6ICdudW1lcmljJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgc2V0UG9zdHMoc2VyaWFsaXplUG9zdHMpO1xyXG4gIH0sIFtkb2N1bWVudF0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhkb2N1bWVudCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UG9zdHMgfCBJZ25ld3M8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHN9PlxyXG4gICAgICAgICAge3Bvc3RzPy5tYXAocG9zdCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBrZXk9e3Bvc3Quc2x1Z30+XHJcbiAgICAgICAgICAgICAgICA8dGltZT57cG9zdC51cGRhdGVkQXR9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VBbGxQcmlzbWljRG9jdW1lbnRzQnlUeXBlIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUG9zdHMiLCJwb3N0cyIsInNldFBvc3RzIiwiZG9jdW1lbnQiLCJzZXJpYWxpemVQb3N0cyIsIm1hcCIsInNsdWciLCJ1aWQiLCJ0aXRsZSIsImRhdGEiLCJleGNlcnB0IiwiY29udGVudCIsImZpbmQiLCJ0eXBlIiwidGV4dCIsInVwZGF0ZWRBdCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRpdiIsInBvc3QiLCJhIiwiaHJlZiIsInRpbWUiLCJzdHJvbmciLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n");

/***/ }),

/***/ "@prismicio/react":
/*!***********************************!*\
  !*** external "@prismicio/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/index.tsx"));
module.exports = __webpack_exports__;

})();