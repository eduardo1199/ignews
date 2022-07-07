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

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async session ({ session  }) {\n            try {\n                const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_user_ref\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session?.user.email))))),\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_status\"), \"active\")\n                ])));\n                return {\n                    ...session,\n                    activeSubscription: userActiveSubscription\n                };\n            } catch  {\n                return {\n                    ...session,\n                    activeSubscription: null\n                };\n            }\n        },\n        async signIn ({ user  }) {\n            const { email  } = user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user?.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user?.email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNDO0FBQ3VCO0FBRVI7QUFFaEQsaUVBQWVDLGdEQUFRLENBQUM7SUFDdEIsaURBQWlEO0lBQ2pERyxTQUFTLEVBQUU7UUFDVEYsaUVBQWMsQ0FBQztZQUNiRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsYUFBYSxFQUFFO2dCQUNiQyxNQUFNLEVBQUU7b0JBQ05DLEtBQUssRUFBRSxXQUFXO2lCQUNuQjthQUNGO1NBQ0YsQ0FBQztLQUNIO0lBQ0RDLFNBQVMsRUFBRTtRQUNULE1BQU1DLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUUsRUFBRTtZQUN6QixJQUFJO2dCQUNGLE1BQU1DLHNCQUFzQixHQUFHLE1BQU1iLHdEQUFXLENBQzlDSCw4Q0FBUyxDQUNQQSx1REFBa0IsQ0FBQztvQkFDakJBLGdEQUFXLENBQ1RBLGdEQUFXLENBQUMsMEJBQTBCLENBQUMsRUFDdkNBLGlEQUFZLENBQ1YsS0FBSyxFQUNMQSw4Q0FBUyxDQUNQQSxnREFBVyxDQUNUQSxnREFBVyxDQUFDLGVBQWUsQ0FBQyxFQUM1QkEsbURBQWMsQ0FBQ2UsT0FBTyxFQUFFUSxJQUFJLENBQUVDLEtBQUssQ0FBRSxDQUN0QyxDQUNGLENBQ0YsQ0FDRjtvQkFDRHhCLGdEQUFXLENBQ1RBLGdEQUFXLENBQUMsd0JBQXdCLENBQUMsRUFDckMsUUFBUSxDQUNUO2lCQUNGLENBQUMsQ0FDSCxDQUNGO2dCQUVELE9BQU87b0JBQ0wsR0FBR2UsT0FBTztvQkFDVlUsa0JBQWtCLEVBQUVULHNCQUFzQjtpQkFDM0M7YUFDRixDQUFDLE9BQU07Z0JBQ04sT0FBTztvQkFDTCxHQUFHRCxPQUFPO29CQUNWVSxrQkFBa0IsRUFBRSxJQUFJO2lCQUN6QjthQUNGO1NBQ0Y7UUFDRCxNQUFNQyxNQUFNLEVBQUMsRUFBRUgsSUFBSSxHQUFFLEVBQUU7WUFDckIsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0QsSUFBSTtZQUN0QixJQUFJO2dCQUNGLE1BQU1wQix3REFBVyxDQUNmSCw2Q0FBUSxDQUNOQSw4Q0FBUyxDQUNQQSxpREFBWSxDQUNWQSxnREFBVyxDQUNUQSxnREFBVyxDQUFDLGVBQWUsQ0FBQyxFQUM1QkEsbURBQWMsQ0FBQ3VCLElBQUksRUFBRUMsS0FBSyxDQUFFLENBQzdCLENBQ0YsQ0FDRixFQUVEeEIsaURBQVksQ0FBQ0EscURBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQUVnQyxJQUFJLEVBQUU7d0JBQUVSLEtBQUs7cUJBQUU7aUJBQUUsQ0FBQyxFQUM1RHhCLDhDQUFTLENBQ1BBLGdEQUFXLENBQ1RBLGdEQUFXLENBQUMsZUFBZSxDQUFDLEVBQzVCQSxtREFBYyxDQUFDdUIsSUFBSSxFQUFFQyxLQUFLLENBQUUsQ0FDN0IsQ0FDRixDQUNGLENBQ0YsQ0FBQztnQkFFRixPQUFPLElBQUksQ0FBQzthQUNiLENBQUMsT0FBTTtnQkFDTixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7S0FDRjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgfSBmcm9tIFwiZmF1bmFkYlwiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XHJcblxyXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNjb3BlOiBcInJlYWQ6dXNlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJBY3RpdmVTdWJzY3JpcHRpb24gPSBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHF1ZXJ5LkdldChcclxuICAgICAgICAgICAgcXVlcnkuSW50ZXJzZWN0aW9uKFtcclxuICAgICAgICAgICAgICBxdWVyeS5NYXRjaChcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCdzdWJzY3JpcHRpb25fYnlfdXNlcl9yZWYnKSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LlNlbGVjdChcclxuICAgICAgICAgICAgICAgICAgXCJyZWZcIixcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuR2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHNlc3Npb24/LnVzZXIhLmVtYWlsISlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV9zdGF0dXMnKSxcclxuICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnNlc3Npb24sXHJcbiAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciB9KSB7XHJcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHVzZXI7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXHJcbiAgICAgICAgICBxdWVyeS5JZihcclxuICAgICAgICAgICAgcXVlcnkuTm90KFxyXG4gICAgICAgICAgICAgIHF1ZXJ5LkV4aXN0cyhcclxuICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHVzZXI/LmVtYWlsISlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICBxdWVyeS5DcmVhdGUocXVlcnkuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB7IGRhdGE6IHsgZW1haWwgfSB9KSxcclxuICAgICAgICAgICAgcXVlcnkuR2V0KFxyXG4gICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuQ2FzZWZvbGQodXNlcj8uZW1haWwhKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJxdWVyeSIsIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJmYXVuYSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyQWN0aXZlU3Vic2NyaXB0aW9uIiwiR2V0IiwiSW50ZXJzZWN0aW9uIiwiTWF0Y2giLCJJbmRleCIsIlNlbGVjdCIsIkNhc2Vmb2xkIiwidXNlciIsImVtYWlsIiwiYWN0aXZlU3Vic2NyaXB0aW9uIiwic2lnbkluIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzlCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2hDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cz8zMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWSFcclxufSk7Il0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

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