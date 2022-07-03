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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        /* async session({ session }) {\r\n      try {\r\n        const userActiveSubscription = await fauna.query(\r\n          query.Get(\r\n            query.Intersection([\r\n              query.Match(\r\n                query.Index('subscription_by_user_ref'),\r\n                query.Select(\r\n                  \"ref\",\r\n                  query.Get(\r\n                    query.Match(\r\n                      query.Index('user_by_email'),\r\n                      query.Casefold(session?.user!.email!)\r\n                    )\r\n                  )\r\n                )\r\n              ),\r\n              query.Match(\r\n                query.Index('subscription_by_status'),\r\n                \"active\"\r\n              )\r\n            ])\r\n          )\r\n        )\r\n  \r\n        return {\r\n          ...session,\r\n          activeSubscription: userActiveSubscription,\r\n        }\r\n      } catch {\r\n        return {\r\n          ...session,\r\n          activeSubscription: null,\r\n        }\r\n      }\r\n      }, */ async signIn ({ user  }) {\n            const { email  } = user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user?.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user?.email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNDO0FBQ3VCO0FBRVI7QUFFaEQsaUVBQWVDLGdEQUFRLENBQUM7SUFDdEIsaURBQWlEO0lBQ2pERyxTQUFTLEVBQUU7UUFDVEYsaUVBQWMsQ0FBQztZQUNiRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsYUFBYSxFQUFFO2dCQUNiQyxNQUFNLEVBQUU7b0JBQ05DLEtBQUssRUFBRSxXQUFXO2lCQUNuQjthQUNGO1NBQ0YsQ0FBQztLQUNIO0lBQ0RDLFNBQVMsRUFBRTtRQUNUO1lBcUNFO1lBQ0EsSUFBSTtnQkFDRjtvQkFXOENZLElBQUksRUFBRTt3QkFBRVQ7cUJBQU87aUJBQUUsQ0FBQyxFQUM1RGpCLEtBQUssQ0FBQzJCLEdBQUcsQ0FDUDNCO2dCQVFOLE9BQU87YUFDUixDQUFDLE9BQU07Z0JBQ04sT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcImZhdW5hZGJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5cclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxyXG4gICAgICBhdXRob3JpemF0aW9uOiB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzY29wZTogXCJyZWFkOnVzZXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIC8qIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uIH0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uID0gYXdhaXQgZmF1bmEucXVlcnkoXHJcbiAgICAgICAgICBxdWVyeS5HZXQoXHJcbiAgICAgICAgICAgIHF1ZXJ5LkludGVyc2VjdGlvbihbXHJcbiAgICAgICAgICAgICAgcXVlcnkuTWF0Y2goXHJcbiAgICAgICAgICAgICAgICBxdWVyeS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3VzZXJfcmVmJyksXHJcbiAgICAgICAgICAgICAgICBxdWVyeS5TZWxlY3QoXHJcbiAgICAgICAgICAgICAgICAgIFwicmVmXCIsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LkdldChcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5NYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5DYXNlZm9sZChzZXNzaW9uPy51c2VyIS5lbWFpbCEpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBxdWVyeS5NYXRjaChcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCdzdWJzY3JpcHRpb25fYnlfc3RhdHVzJyksXHJcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc2Vzc2lvbixcclxuICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogdXNlckFjdGl2ZVN1YnNjcmlwdGlvbixcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9LCAqL1xyXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciB9KSB7XHJcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHVzZXI7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXHJcbiAgICAgICAgICBxdWVyeS5JZihcclxuICAgICAgICAgICAgcXVlcnkuTm90KFxyXG4gICAgICAgICAgICAgIHF1ZXJ5LkV4aXN0cyhcclxuICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHVzZXI/LmVtYWlsISlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICBxdWVyeS5DcmVhdGUocXVlcnkuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB7IGRhdGE6IHsgZW1haWwgfSB9KSxcclxuICAgICAgICAgICAgcXVlcnkuR2V0KFxyXG4gICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuQ2FzZWZvbGQodXNlcj8uZW1haWwhKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJxdWVyeSIsIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJmYXVuYSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJlbWFpbCIsIklmIiwiTm90IiwiRXhpc3RzIiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiLCJHZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

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