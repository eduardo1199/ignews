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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req\n        });\n        const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session?.user.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            if (session) {\n                const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n                    email: session.user?.email\n                });\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), user.ref.id), {\n                    data: {\n                        stripe_customer_id: stripeCustomer.id\n                    }\n                }));\n                customerId = stripeCustomer.id;\n            }\n        }\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1KaK10Bz0Th7DSxekvBos6as\",\n                    quantity: 1\n                }, \n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method not allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2dDO0FBQ2E7QUFDQTtBQUNFO0FBVy9DLGlFQUFlLE9BQU9JLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDO1lBQUVHLEdBQUc7U0FBRSxDQUFDO1FBRXpDLE1BQU1JLElBQUksR0FBRyxNQUFNTix3REFBVyxDQUM1QkYsOENBQVMsQ0FDUEEsZ0RBQVcsQ0FDVEEsZ0RBQVcsQ0FBQyxlQUFlLENBQUMsRUFDNUJBLG1EQUFjLENBQUNPLE9BQU8sRUFBRUMsSUFBSSxDQUFFSyxLQUFLLENBQUUsQ0FDdEMsQ0FDRixDQUNGO1FBRUQsSUFBSUMsVUFBVSxHQUFHTixJQUFJLENBQUNPLElBQUksQ0FBQ0Msa0JBQWtCO1FBRTdDLElBQUcsQ0FBQ0YsVUFBVSxFQUFFO1lBQ2QsSUFBR1AsT0FBTyxFQUFDO2dCQUNULE1BQU1VLGNBQWMsR0FBRyxNQUFNZCxxRUFBdUIsQ0FBQztvQkFDbkRVLEtBQUssRUFBRU4sT0FBTyxDQUFDQyxJQUFJLEVBQUVLLEtBQUs7aUJBRTNCLENBQUM7Z0JBRUYsTUFBTVgsd0RBQVcsQ0FDZkYsaURBQVksQ0FDVkEsOENBQVMsQ0FBQ0EscURBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUVRLElBQUksQ0FBQ2UsR0FBRyxDQUFDQyxFQUFFLENBQUMsRUFDakQ7b0JBQ0VULElBQUksRUFBRTt3QkFDSkMsa0JBQWtCLEVBQUVDLGNBQWMsQ0FBQ08sRUFBRTtxQkFDdEM7aUJBQ0YsQ0FDRixDQUNGO2dCQUVEVixVQUFVLEdBQUdHLGNBQWMsQ0FBQ08sRUFBRSxDQUFDO2FBQ2hDO1NBRUY7UUFHRCxNQUFNQyxxQkFBcUIsR0FBRyxNQUFNdEIsNkVBQStCLENBQUM7WUFDbEV5QixRQUFRLEVBQUVkLFVBQVU7WUFDcEJlLG9CQUFvQixFQUFFO2dCQUFDLE1BQU07YUFBQztZQUM5QkMsMEJBQTBCLEVBQUUsVUFBVTtZQUN0Q0MsVUFBVSxFQUFFO2dCQUNWO29CQUNFQyxLQUFLLEVBQUUsZ0NBQWdDO29CQUN2Q0MsUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDRjtZQUNEQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMscUJBQXFCLEVBQUUsSUFBSTtZQUMzQkMsV0FBVyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtCO1lBQzNDQyxVQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxpQkFBaUI7U0FDMUMsQ0FBQztRQUVGLE9BQU9wQyxHQUFHLENBQUNxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxTQUFTLEVBQUVuQixxQkFBcUIsQ0FBQ0QsRUFBRTtTQUFFLENBQUM7S0FDckUsTUFBTTtRQUNMbkIsR0FBRyxDQUFDd0MsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQnhDLEdBQUcsQ0FBQ3FDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDM0M7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzPzA1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcImZhdW5hZGJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcclxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiO1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gIHJlZjoge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICB9XHJcbiAgZGF0YToge1xyXG4gICAgc3RyaXBlX2N1c3RvbWVyX2lkOiBzdHJpbmcsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmYXVuYS5xdWVyeTxVc2VyPihcclxuICAgICAgcXVlcnkuR2V0KFxyXG4gICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgcXVlcnkuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcclxuICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHNlc3Npb24/LnVzZXIhLmVtYWlsISlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgbGV0IGN1c3RvbWVySWQgPSB1c2VyLmRhdGEuc3RyaXBlX2N1c3RvbWVyX2lkO1xyXG5cclxuICAgIGlmKCFjdXN0b21lcklkKSB7XHJcbiAgICAgIGlmKHNlc3Npb24pe1xyXG4gICAgICAgIGNvbnN0IHN0cmlwZUN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoe1xyXG4gICAgICAgICAgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwhLFxyXG4gICAgICAgICAgLy8gbWV0YWRhdGFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHF1ZXJ5LlVwZGF0ZShcclxuICAgICAgICAgICAgcXVlcnkuUmVmKHF1ZXJ5LkNvbGxlY3Rpb24oJ3VzZXJzJyksIHVzZXIucmVmLmlkKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaXBlQ3VzdG9tZXIuaWQsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gIFxyXG4gICAgICAgIGN1c3RvbWVySWQgPSBzdHJpcGVDdXN0b21lci5pZDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xyXG4gICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcclxuICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXHJcbiAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgIGxpbmVfaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmljZTogXCJwcmljZV8xS2FLMTBCejBUaDdEU3hla3ZCb3M2YXNcIixcclxuICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxyXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfU1VDQ0VTU19VUkwhLFxyXG4gICAgICBjYW5jZWxfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfQ0FOQ0VMX1VSTCEsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uSWQ6IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbi5pZCB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgXCJQT1NUXCIpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChcIk1ldGhvZCBub3QgYWxsb3dlZFwiKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsicXVlcnkiLCJnZXRTZXNzaW9uIiwiZmF1bmEiLCJzdHJpcGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwidXNlciIsIkdldCIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0b21lciIsImN1c3RvbWVycyIsImNyZWF0ZSIsIlVwZGF0ZSIsIlJlZiIsIkNvbGxlY3Rpb24iLCJyZWYiLCJpZCIsInN0cmlwZUNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjdXN0b21lciIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsIm1vZGUiLCJhbGxvd19wcm9tb3Rpb25fY29kZXMiLCJzdWNjZXNzX3VybCIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU1VDQ0VTU19VUkwiLCJjYW5jZWxfdXJsIiwiU1RSSVBFX0NBTkNFTF9VUkwiLCJzdGF0dXMiLCJqc29uIiwic2Vzc2lvbklkIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzlCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2hDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cz8zMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWSFcclxufSk7Il0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: \"1.0.0\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0VDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsT0FBTyxFQUFFLE9BQU87S0FDakI7Q0FDRixDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXHJcbiAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXHJcbiAge1xyXG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxyXG4gICAgYXBwSW5mbzoge1xyXG4gICAgICBuYW1lOiAnSWduZXdzJyxcclxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcclxuICAgIH0sXHJcbiAgfVxyXG4pOyJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/stripe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();