"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/react */ \"./node_modules/@prismicio/react/dist/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Post() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref.data, status = ref.status;\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query;\n    var slug = query.slug;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_prismicio_react__WEBPACK_IMPORTED_MODULE_5__.usePrismicDocumentByUID)(\"publication\", slug), 1), document = ref1[0];\n    var post = {\n        slug: slug,\n        title: document === null || document === void 0 ? void 0 : document.data.title,\n        content: document === null || document === void 0 ? void 0 : document.data.content,\n        updatedAt: new Date(document === null || document === void 0 ? void 0 : document.last_publication_date).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"long\",\n            year: \"numeric\"\n        })\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        post.title,\n                        \" | Ignews\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: post.updatedAt\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dangerouslySetInnerHTML: {\n                                __html: post.content\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"oaRxhRoRaq9dSjdlNrlwPZN5QH0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _prismicio_react__WEBPACK_IMPORTED_MODULE_5__.usePrismicDocumentByUID\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEyRDtBQUNkO0FBQ2hCO0FBQ1c7O0FBVXpCLFNBQVNJLElBQUksR0FBRzs7SUFDN0IsSUFBa0NILEdBQVksR0FBWkEsMkRBQVUsRUFBRSxFQUF0Q0ksT0FBYSxHQUFhSixHQUFZLENBQXRDSSxJQUFJLEVBQVdFLE1BQU0sR0FBS04sR0FBWSxDQUF2Qk0sTUFBTTtJQUM3QixJQUFNLEtBQU8sR0FBS0osc0RBQVMsRUFBRSxDQUFyQkssS0FBSztJQUViLElBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFJO0lBRXZCLElBQW1CVCxJQUE0QyxvRkFBNUNBLHlFQUF1QixDQUFDLGFBQWEsRUFBRVMsSUFBSSxDQUFDLE1BQXhEQyxRQUFRLEdBQUlWLElBQTRDLEdBQWhEO0lBRWYsSUFBTVcsSUFBSSxHQUFTO1FBQ2pCRixJQUFJLEVBQUpBLElBQUk7UUFDSkcsS0FBSyxFQUFFRixRQUFRLGFBQVJBLFFBQVEsV0FBTSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUwsSUFBSSxDQUFDTyxLQUFLO1FBQzNCQyxPQUFPLEVBQUdILFFBQVEsYUFBUkEsUUFBUSxXQUFNLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsUUFBUSxDQUFFTCxJQUFJLENBQUNRLE9BQU87UUFDaENDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUNMLFFBQVEsYUFBUkEsUUFBUSxXQUF1QixHQUEvQkEsS0FBQUEsQ0FBK0IsR0FBL0JBLFFBQVEsQ0FBRU0scUJBQXFCLENBQUUsQ0FBQ0Msa0JBQWtCLENBQUMsT0FBTyxFQUFFO1lBQ2hGQyxHQUFHLEVBQUUsU0FBUztZQUNkQyxLQUFLLEVBQUUsTUFBTTtZQUNiQyxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO0tBQ0g7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNsQixrREFBSTswQkFDSCw0RUFBQ1UsT0FBSzs7d0JBQUVELElBQUksQ0FBQ0MsS0FBSzt3QkFBQyxXQUFTOzs7Ozs7d0JBQVE7Ozs7O29CQUMvQjswQkFFUCw4REFBQ1MsTUFBSTswQkFDSCw0RUFBQ0MsU0FBTzs7c0NBQ04sOERBQUNDLElBQUU7c0NBQUVaLElBQUksQ0FBQ0MsS0FBSzs7Ozs7Z0NBQU07c0NBQ3JCLDhEQUFDWSxNQUFJO3NDQUFFYixJQUFJLENBQUNHLFNBQVM7Ozs7O2dDQUFRO3NDQUM3Qiw4REFBQ1csS0FBRzs0QkFBQ0MsdUJBQXVCLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRWhCLElBQUksQ0FBQ0UsT0FBTzs2QkFBRTs7Ozs7Z0NBQUk7Ozs7Ozt3QkFDbEQ7Ozs7O29CQUNMOztvQkFDTixDQUNIO0NBQ0g7R0FsQ3VCVCxJQUFJOztRQUNRSCx1REFBVTtRQUMxQkUsa0RBQVM7UUFJUkgscUVBQXVCOzs7QUFOcEJJLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3g/Nzc4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VQcmlzbWljRG9jdW1lbnRCeVVJRCB9IGZyb20gXCJAcHJpc21pY2lvL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1yZWFjdGpzJztcclxuXHJcbnR5cGUgUG9zdCA9IHtcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5LnNsdWcgYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCBbZG9jdW1lbnRdID0gdXNlUHJpc21pY0RvY3VtZW50QnlVSUQoJ3B1YmxpY2F0aW9uJywgc2x1Zyk7XHJcblxyXG4gIGNvbnN0IHBvc3Q6IFBvc3QgPSB7XHJcbiAgICBzbHVnLFxyXG4gICAgdGl0bGU6IGRvY3VtZW50Py5kYXRhLnRpdGxlISxcclxuICAgIGNvbnRlbnQ6ICBkb2N1bWVudD8uZGF0YS5jb250ZW50LFxyXG4gICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShkb2N1bWVudD8ubGFzdF9wdWJsaWNhdGlvbl9kYXRlISkudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicsIHtcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgIHllYXI6ICdudW1lcmljJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBJZ25ld3M8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cclxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX0gLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsidXNlUHJpc21pY0RvY3VtZW50QnlVSUQiLCJ1c2VTZXNzaW9uIiwiSGVhZCIsInVzZVJvdXRlciIsIlBvc3QiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInF1ZXJ5Iiwic2x1ZyIsImRvY3VtZW50IiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsInVwZGF0ZWRBdCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJtYWluIiwiYXJ0aWNsZSIsImgxIiwidGltZSIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n"));

/***/ })

});