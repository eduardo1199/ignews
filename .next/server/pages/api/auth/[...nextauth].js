"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n//import { query } from \"faunadb\";\n\n\n//import { fauna } from \"../../../services/fauna\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGtDQUFrQztBQUNEO0FBQ3VCO0FBRXhELGtEQUFrRDtBQUVsRCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRFLFNBQVMsRUFBRTtRQUNURCxpRUFBYyxDQUFDO1lBQ2JFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxhQUFhLEVBQUU7Z0JBQ2JDLE1BQU0sRUFBRTtvQkFDTkMsS0FBSyxFQUFFLFdBQVc7aUJBQ25CO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7Q0FvRUYsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcImZhdW5hZGJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5cclxuLy9pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNjb3BlOiBcInJlYWQ6dXNlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIC8qIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJBY3RpdmVTdWJzY3JpcHRpb24gPSBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHF1ZXJ5LkdldChcclxuICAgICAgICAgICAgcXVlcnkuSW50ZXJzZWN0aW9uKFtcclxuICAgICAgICAgICAgICBxdWVyeS5NYXRjaChcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCdzdWJzY3JpcHRpb25fYnlfdXNlcl9yZWYnKSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LlNlbGVjdChcclxuICAgICAgICAgICAgICAgICAgXCJyZWZcIixcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuR2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV9zdGF0dXMnKSxcclxuICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnNlc3Npb24sXHJcbiAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyIH0pIHtcclxuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlcjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHF1ZXJ5LklmKFxyXG4gICAgICAgICAgICBxdWVyeS5Ob3QoXHJcbiAgICAgICAgICAgICAgcXVlcnkuRXhpc3RzKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuTWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KFwidXNlcl9ieV9lbWFpbFwiKSxcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuQ2FzZWZvbGQodXNlci5lbWFpbClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICBxdWVyeS5DcmVhdGUocXVlcnkuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB7IGRhdGE6IHsgZW1haWwgfSB9KSxcclxuICAgICAgICAgICAgcXVlcnkuR2V0KFxyXG4gICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuQ2FzZWZvbGQodXNlci5lbWFpbClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sICovXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();