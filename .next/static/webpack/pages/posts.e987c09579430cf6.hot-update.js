"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/react */ \"./node_modules/@prismicio/react/dist/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Posts() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref[0], setPosts = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.useAllPrismicDocumentsByType)(\"publication\"), 1), document = ref1[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var serializePosts = document === null || document === void 0 ? void 0 : document.map(function(document) {\n            var ref;\n            var ref1;\n            return {\n                slug: document.uid,\n                title: document.data.title,\n                excerpt: (ref1 = (ref = document.data.content.find(function(content) {\n                    return content.type === \"paragraph\";\n                })) === null || ref === void 0 ? void 0 : ref.text) !== null && ref1 !== void 0 ? ref1 : \"\",\n                updatedAt: new Date(document.last_publication_date).toLocaleDateString(\"pt-BR\", {\n                    day: \"2-digit\",\n                    month: \"long\",\n                    year: \"numeric\"\n                })\n            };\n        });\n        setPosts(serializePosts);\n    }, [\n        document\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Posts | Ignews\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().posts),\n                    children: posts === null || posts === void 0 ? void 0 : posts.map(function(post) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    children: post.updatedAt\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.excerpt\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, post.slug, true, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Posts, \"25YKG3TPuImz21NYdoAZG8/m7hk=\", false, function() {\n    return [\n        _prismicio_react__WEBPACK_IMPORTED_MODULE_4__.useAllPrismicDocumentsByType\n    ];\n});\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdFO0FBQ25DO0FBQzRCO0FBQ2Y7O0FBVTNCLFNBQVNLLEtBQUssR0FBRzs7O0lBQzlCLElBQTBCRixHQUFpQyxHQUFqQ0EsK0NBQVEsQ0FBc0IsRUFBRSxDQUFDLEVBQXBERyxLQUFLLEdBQWNILEdBQWlDLEdBQS9DLEVBQUVJLFFBQVEsR0FBSUosR0FBaUMsR0FBckM7SUFFdEIsSUFBbUJILElBQTJDLG9GQUEzQ0EsOEVBQTRCLENBQUMsYUFBYSxDQUFDLE1BQXZEUSxRQUFRLEdBQUlSLElBQTJDLEdBQS9DO0lBRWZFLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1PLGNBQWMsR0FBR0QsUUFBUSxhQUFSQSxRQUFRLFdBQUssR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxRQUFRLENBQUVFLEdBQUcsQ0FBQ0YsU0FBQUEsUUFBUSxFQUFJO2dCQUlwQ0EsR0FBbUU7Z0JBQW5FQSxJQUF5RTtZQUhwRixPQUFPO2dCQUNMRyxJQUFJLEVBQUVILFFBQVEsQ0FBQ0ksR0FBRztnQkFDbEJDLEtBQUssRUFBRUwsUUFBUSxDQUFDTSxJQUFJLENBQUNELEtBQUs7Z0JBQzFCRSxPQUFPLEVBQUVQLENBQUFBLElBQXlFLEdBQXpFQSxDQUFBQSxHQUFtRSxHQUFuRUEsUUFBUSxDQUFDTSxJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRCxTQUFBQSxPQUFPOzJCQUFJQSxPQUFPLENBQUNFLElBQUksS0FBSyxXQUFXO2lCQUFBLENBQUMsY0FBbkVWLEdBQW1FLFdBQU0sR0FBekVBLEtBQUFBLENBQXlFLEdBQXpFQSxHQUFtRSxDQUFFVyxJQUFJLGNBQXpFWCxJQUF5RSxjQUF6RUEsSUFBeUUsR0FBSSxFQUFFO2dCQUN4RlksU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQ2IsUUFBUSxDQUFDYyxxQkFBcUIsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzlFQyxHQUFHLEVBQUUsU0FBUztvQkFDZEMsS0FBSyxFQUFFLE1BQU07b0JBQ2JDLElBQUksRUFBRSxTQUFTO2lCQUNoQixDQUFDO2FBQ0g7U0FDRixDQUFDO1FBRUZuQixRQUFRLENBQUNFLGNBQWMsQ0FBQyxDQUFDO0tBQzFCLEVBQUU7UUFBQ0QsUUFBUTtLQUFDLENBQUM7SUFFZCxxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJOzBCQUNILDRFQUFDWSxPQUFLOzhCQUFDLGdCQUFjOzs7Ozt3QkFBUTs7Ozs7b0JBQ3hCOzBCQUVQLDhEQUFDYyxNQUFJO2dCQUFDQyxTQUFTLEVBQUV4QixzRUFBZ0I7MEJBQy9CLDRFQUFDMEIsS0FBRztvQkFBQ0YsU0FBUyxFQUFFeEIsa0VBQVk7OEJBQ3pCRSxLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRUksR0FBRyxDQUFDcUIsU0FBQUEsSUFBSSxFQUFJO3dCQUNsQixxQkFDRSw4REFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7OzhDQUNULDhEQUFDQyxNQUFJOzhDQUFFSCxJQUFJLENBQUNYLFNBQVM7Ozs7O3lDQUFROzhDQUM3Qiw4REFBQ2UsUUFBTTs4Q0FBRUosSUFBSSxDQUFDbEIsS0FBSzs7Ozs7eUNBQVU7OENBQzdCLDhEQUFDdUIsR0FBQzs4Q0FBRUwsSUFBSSxDQUFDaEIsT0FBTzs7Ozs7eUNBQUs7OzJCQUhOZ0IsSUFBSSxDQUFDcEIsSUFBSTs7OztpQ0FJdEIsQ0FDTDtxQkFDRixDQUFDOzs7Ozt3QkFDRTs7Ozs7b0JBQ0Q7O29CQUNOLENBQ0o7Q0FDRjtHQTNDdUJOLEtBQUs7O1FBR1JMLDBFQUE0Qjs7O0FBSHpCSyxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3N0cy9pbmRleC50c3g/Zjg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBbGxQcmlzbWljRG9jdW1lbnRzQnlUeXBlIH0gZnJvbSAnQHByaXNtaWNpby9yZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFByaXNtaWNIZWxwIGZyb20gJ0BwcmlzbWljaW8vaGVscGVycyc7XHJcblxyXG50eXBlIFBvc3RzID0ge1xyXG4gIHNsdWc6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGV4Y2VycHQ6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxQb3N0c1tdIHwgdW5kZWZpbmVkPihbXSk7XHJcblxyXG4gIGNvbnN0IFtkb2N1bWVudF0gPSB1c2VBbGxQcmlzbWljRG9jdW1lbnRzQnlUeXBlKCdwdWJsaWNhdGlvbicpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplUG9zdHMgPSBkb2N1bWVudD8ubWFwKGRvY3VtZW50ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzbHVnOiBkb2N1bWVudC51aWQhLFxyXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5kYXRhLnRpdGxlISxcclxuICAgICAgICBleGNlcnB0OiBkb2N1bWVudC5kYXRhLmNvbnRlbnQuZmluZChjb250ZW50ID0+IGNvbnRlbnQudHlwZSA9PT0gJ3BhcmFncmFwaCcpPy50ZXh0ID8/ICcnLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoZG9jdW1lbnQubGFzdF9wdWJsaWNhdGlvbl9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBzZXRQb3N0cyhzZXJpYWxpemVQb3N0cyk7XHJcbiAgfSwgW2RvY3VtZW50XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb3N0cyB8IElnbmV3czwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICB7cG9zdHM/Lm1hcChwb3N0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGtleT17cG9zdC5zbHVnfT5cclxuICAgICAgICAgICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntwb3N0LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUFsbFByaXNtaWNEb2N1bWVudHNCeVR5cGUiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJQb3N0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJkb2N1bWVudCIsInNlcmlhbGl6ZVBvc3RzIiwibWFwIiwic2x1ZyIsInVpZCIsInRpdGxlIiwiZGF0YSIsImV4Y2VycHQiLCJjb250ZW50IiwiZmluZCIsInR5cGUiLCJ0ZXh0IiwidXBkYXRlZEF0IiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXYiLCJwb3N0IiwiYSIsImhyZWYiLCJ0aW1lIiwic3Ryb25nIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n"));

/***/ })

});