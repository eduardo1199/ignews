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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/react */ \"./node_modules/@prismicio/react/dist/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Post() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref.data, status = ref.status;\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var slug = query.slug;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.usePrismicDocumentByUID)(\"publication\", slug), 1), document = ref1[0];\n    console.log(document);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"teste\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(Post, \"oaRxhRoRaq9dSjdlNrlwPZN5QH0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _prismicio_react__WEBPACK_IMPORTED_MODULE_4__.usePrismicDocumentByUID\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkQ7QUFDZDtBQUNMOztBQUV6QixTQUFTRyxJQUFJLEdBQUc7O0lBQzdCLElBQWtDRixHQUFZLEdBQVpBLDJEQUFVLEVBQUUsRUFBdENHLE9BQWEsR0FBYUgsR0FBWSxDQUF0Q0csSUFBSSxFQUFXRSxNQUFNLEdBQUtMLEdBQVksQ0FBdkJLLE1BQU07SUFDN0IsSUFBTSxLQUFPLEdBQUtKLHNEQUFTLEVBQUUsQ0FBckJLLEtBQUs7SUFFYixJQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBSTtJQUV2QixJQUFtQlIsSUFBNEMsb0ZBQTVDQSx5RUFBdUIsQ0FBQyxhQUFhLEVBQUVRLElBQUksQ0FBQyxNQUF4REMsUUFBUSxHQUFJVCxJQUE0QyxHQUFoRDtJQUVmVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDLENBQUM7SUFFdEIscUJBQ0UsOERBQUNHLElBQUU7a0JBQUMsT0FBSzs7Ozs7WUFBSyxDQUNkO0NBQ0g7R0FidUJULElBQUk7O1FBQ1FGLHVEQUFVO1FBQzFCQyxrREFBUztRQUlSRixxRUFBdUI7OztBQU5wQkcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeD83NzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVByaXNtaWNEb2N1bWVudEJ5VUlEIH0gZnJvbSBcIkBwcmlzbWljaW8vcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCkge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgW2RvY3VtZW50XSA9IHVzZVByaXNtaWNEb2N1bWVudEJ5VUlEKCdwdWJsaWNhdGlvbicsIHNsdWcpO1xyXG5cclxuICBjb25zb2xlLmxvZyhkb2N1bWVudCk7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxoMT50ZXN0ZTwvaDE+XHJcbiAgKTtcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VQcmlzbWljRG9jdW1lbnRCeVVJRCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJQb3N0IiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJxdWVyeSIsInNsdWciLCJkb2N1bWVudCIsImNvbnNvbGUiLCJsb2ciLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n"));

/***/ })

});