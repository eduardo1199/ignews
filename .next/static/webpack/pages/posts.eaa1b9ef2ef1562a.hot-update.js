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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/react */ \"./node_modules/@prismicio/react/dist/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Posts() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref[0], setPosts = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.useAllPrismicDocumentsByType)(\"publication\"), 1), document = ref1[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var serializePosts = document === null || document === void 0 ? void 0 : document.map(function(document) {\n            var ref;\n            var ref1;\n            return {\n                slug: document.uid,\n                title: document.data.title,\n                excerpt: (ref1 = (ref = document.data.content.find(function(content) {\n                    return !!content.type;\n                })) === null || ref === void 0 ? void 0 : ref.text) !== null && ref1 !== void 0 ? ref1 : \"\",\n                updatedAt: new Date(document.last_publication_date).toLocaleDateString(\"pt-BR\", {\n                    day: \"2-digit\",\n                    month: \"long\",\n                    year: \"numeric\"\n                })\n            };\n        });\n        setPosts(serializePosts);\n    }, [\n        document\n    ]);\n    console.log(document);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Posts | Ignews\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().posts),\n                    children: posts === null || posts === void 0 ? void 0 : posts.map(function(post) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    children: post.updatedAt\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.excerpt\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, post.slug, true, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Posts, \"25YKG3TPuImz21NYdoAZG8/m7hk=\", false, function() {\n    return [\n        _prismicio_react__WEBPACK_IMPORTED_MODULE_4__.useAllPrismicDocumentsByType\n    ];\n});\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdFO0FBQ25DO0FBQ2U7QUFDRjs7QUFTM0IsU0FBU0ssS0FBSyxHQUFHOzs7SUFDOUIsSUFBMEJGLEdBQWlDLEdBQWpDQSwrQ0FBUSxDQUFzQixFQUFFLENBQUMsRUFBcERHLEtBQUssR0FBY0gsR0FBaUMsR0FBL0MsRUFBRUksUUFBUSxHQUFJSixHQUFpQyxHQUFyQztJQUV0QixJQUFtQkgsSUFBMkMsb0ZBQTNDQSw4RUFBNEIsQ0FBQyxhQUFhLENBQUMsTUFBdkRRLFFBQVEsR0FBSVIsSUFBMkMsR0FBL0M7SUFFZkUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTU8sY0FBYyxHQUFHRCxRQUFRLGFBQVJBLFFBQVEsV0FBSyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLFFBQVEsQ0FBRUUsR0FBRyxDQUFDRixTQUFBQSxRQUFRLEVBQUk7Z0JBSXBDQSxHQUFxRDtnQkFBckRBLElBQTJEO1lBSHRFLE9BQU87Z0JBQ0xHLElBQUksRUFBRUgsUUFBUSxDQUFDSSxHQUFHO2dCQUNsQkMsS0FBSyxFQUFFTCxRQUFRLENBQUNNLElBQUksQ0FBQ0QsS0FBSztnQkFDMUJFLE9BQU8sRUFBRVAsQ0FBQUEsSUFBMkQsR0FBM0RBLENBQUFBLEdBQXFELEdBQXJEQSxRQUFRLENBQUNNLElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLENBQUNELFNBQUFBLE9BQU87MkJBQUksQ0FBQyxDQUFDQSxPQUFPLENBQUNFLElBQUk7aUJBQUEsQ0FBQyxjQUFyRFYsR0FBcUQsV0FBTSxHQUEzREEsS0FBQUEsQ0FBMkQsR0FBM0RBLEdBQXFELENBQUVXLElBQUksY0FBM0RYLElBQTJELGNBQTNEQSxJQUEyRCxHQUFJLEVBQUU7Z0JBQzFFWSxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDYixRQUFRLENBQUNjLHFCQUFxQixDQUFDLENBQUNDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtvQkFDOUVDLEdBQUcsRUFBRSxTQUFTO29CQUNkQyxLQUFLLEVBQUUsTUFBTTtvQkFDYkMsSUFBSSxFQUFFLFNBQVM7aUJBQ2hCLENBQUM7YUFDSDtTQUNGLENBQUM7UUFFRm5CLFFBQVEsQ0FBQ0UsY0FBYyxDQUFDLENBQUM7S0FDMUIsRUFBRTtRQUFDRCxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRWZtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3BCLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLHFCQUNFOzswQkFDRSw4REFBQ1Asa0RBQUk7MEJBQ0gsNEVBQUNZLE9BQUs7OEJBQUMsZ0JBQWM7Ozs7O3dCQUFROzs7OztvQkFDeEI7MEJBRVAsOERBQUNnQixNQUFJO2dCQUFDQyxTQUFTLEVBQUUxQixzRUFBZ0I7MEJBQy9CLDRFQUFDNEIsS0FBRztvQkFBQ0YsU0FBUyxFQUFFMUIsa0VBQVk7OEJBQ3pCRSxLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRUksR0FBRyxDQUFDdUIsU0FBQUEsSUFBSSxFQUFJO3dCQUNsQixxQkFDRSw4REFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7OzhDQUNULDhEQUFDQyxNQUFJOzhDQUFFSCxJQUFJLENBQUNiLFNBQVM7Ozs7O3lDQUFROzhDQUM3Qiw4REFBQ2lCLFFBQU07OENBQUVKLElBQUksQ0FBQ3BCLEtBQUs7Ozs7O3lDQUFVOzhDQUM3Qiw4REFBQ3lCLEdBQUM7OENBQUVMLElBQUksQ0FBQ2xCLE9BQU87Ozs7O3lDQUFLOzsyQkFITmtCLElBQUksQ0FBQ3RCLElBQUk7Ozs7aUNBSXRCLENBQ0w7cUJBQ0YsQ0FBQzs7Ozs7d0JBQ0U7Ozs7O29CQUNEOztvQkFDTixDQUNKO0NBQ0Y7R0E3Q3VCTixLQUFLOztRQUdSTCwwRUFBNEI7OztBQUh6QkssS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4P2Y4OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQWxsUHJpc21pY0RvY3VtZW50c0J5VHlwZSB9IGZyb20gJ0BwcmlzbWljaW8vcmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbnR5cGUgUG9zdHMgPSB7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZXhjZXJwdDogc3RyaW5nO1xyXG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RzW10gfCB1bmRlZmluZWQ+KFtdKTtcclxuXHJcbiAgY29uc3QgW2RvY3VtZW50XSA9IHVzZUFsbFByaXNtaWNEb2N1bWVudHNCeVR5cGUoJ3B1YmxpY2F0aW9uJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzZXJpYWxpemVQb3N0cyA9IGRvY3VtZW50Py5tYXAoZG9jdW1lbnQgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNsdWc6IGRvY3VtZW50LnVpZCEsXHJcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmRhdGEudGl0bGUhLFxyXG4gICAgICAgIGV4Y2VycHQ6IGRvY3VtZW50LmRhdGEuY29udGVudC5maW5kKGNvbnRlbnQgPT4gISFjb250ZW50LnR5cGUpPy50ZXh0ID8/ICcnLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoZG9jdW1lbnQubGFzdF9wdWJsaWNhdGlvbl9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBzZXRQb3N0cyhzZXJpYWxpemVQb3N0cyk7XHJcbiAgfSwgW2RvY3VtZW50XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRvY3VtZW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb3N0cyB8IElnbmV3czwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICB7cG9zdHM/Lm1hcChwb3N0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGtleT17cG9zdC5zbHVnfT5cclxuICAgICAgICAgICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntwb3N0LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VBbGxQcmlzbWljRG9jdW1lbnRzQnlUeXBlIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUG9zdHMiLCJwb3N0cyIsInNldFBvc3RzIiwiZG9jdW1lbnQiLCJzZXJpYWxpemVQb3N0cyIsIm1hcCIsInNsdWciLCJ1aWQiLCJ0aXRsZSIsImRhdGEiLCJleGNlcnB0IiwiY29udGVudCIsImZpbmQiLCJ0eXBlIiwidGV4dCIsInVwZGF0ZWRBdCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRpdiIsInBvc3QiLCJhIiwiaHJlZiIsInRpbWUiLCJzdHJvbmciLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n"));

/***/ })

});