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
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/_lib/manageSubscription.ts":
/*!**************************************************!*\
  !*** ./src/pages/api/_lib/manageSubscription.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveSubscription\": () => (/* binding */ saveSubscription)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n\n\n\nasync function saveSubscription(subscriptionId, customerId, createAction = false) {\n    // Buscar o usuário no banco do Faunadb com o id {csutomerId}\n    // Salvar os dados da subscription do usuário no Faunadb\n    const userRef = await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_stripe_customer_id\"), customerId))));\n    const subscription = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.subscriptions.retrieve(subscriptionId);\n    const subscriptionData = {\n        id: subscription.id,\n        userId: userRef,\n        status: subscription.status,\n        price_id: subscription.items.data[0].price.id\n    };\n    if (createAction) {\n        try {\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"subscriptions\"), {\n                data: subscriptionData\n            }));\n        } catch (err) {\n            console.log(err);\n        }\n    } else {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Replace(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_id\"), subscriptionId))), {\n            data: subscriptionData\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ2dCO0FBQ0U7QUFFM0MsZUFBZUcsZ0JBQWdCLENBQ3BDQyxjQUFzQixFQUN0QkMsVUFBa0IsRUFDbEJDLFlBQVksR0FBRyxLQUFLLEVBQ3BCO0lBQ0E7SUFDQztJQUVELE1BQU1DLE9BQU8sR0FBRyxNQUFNTix3REFBVyxDQUMvQkQsaURBQVksQ0FDVixLQUFLLEVBQ0xBLDhDQUFTLENBQUNBLGdEQUFXLENBQUNBLGdEQUFXLENBQUMsNEJBQTRCLENBQUMsRUFBQ0ssVUFBVSxDQUFDLENBQUMsQ0FDN0UsQ0FDRjtJQUVELE1BQU1PLFlBQVksR0FBRyxNQUFNViwyRUFBNkIsQ0FBQ0UsY0FBYyxDQUFDO0lBRXhFLE1BQU1XLGdCQUFnQixHQUFHO1FBQ3ZCQyxFQUFFLEVBQUVKLFlBQVksQ0FBQ0ksRUFBRTtRQUNuQkMsTUFBTSxFQUFFVixPQUFPO1FBQ2ZXLE1BQU0sRUFBRU4sWUFBWSxDQUFDTSxNQUFNO1FBQzNCQyxRQUFRLEVBQUVQLFlBQVksQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQ04sRUFBRTtLQUM5QztJQUVELElBQUdWLFlBQVksRUFBRTtRQUNmLElBQUk7WUFDRixNQUFNTCx3REFBVyxDQUNmRCxpREFBWSxDQUNWQSxxREFBZ0IsQ0FBQyxlQUFlLENBQUMsRUFDakM7Z0JBQUVxQixJQUFJLEVBQUVOLGdCQUFnQjthQUFFLENBQzNCLENBQ0Y7U0FDRixDQUFDLE9BQU1VLEdBQUcsRUFBRTtZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7U0FDbEI7S0FDRixNQUFNO1FBQ0wsTUFBTXhCLHdEQUFXLENBQ2ZELGtEQUFhLENBQ1hBLGlEQUFZLENBQ1YsS0FBSyxFQUNMQSw4Q0FBUyxDQUNQQSxnREFBVyxDQUNUQSxnREFBVyxDQUFDLG9CQUFvQixDQUFDLEVBQ2pDSSxjQUFjLENBQ2YsQ0FDRixDQUNGLEVBQ0Q7WUFBRWlCLElBQUksRUFBRU4sZ0JBQWdCO1NBQUUsQ0FDM0IsQ0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uLnRzPzkxYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgfSBmcm9tIFwiZmF1bmFkYlwiO1xyXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVN1YnNjcmlwdGlvbihcclxuICBzdWJzY3JpcHRpb25JZDogc3RyaW5nLFxyXG4gIGN1c3RvbWVySWQ6IHN0cmluZyxcclxuICBjcmVhdGVBY3Rpb24gPSBmYWxzZSxcclxuKSB7XHJcbiAgLy8gQnVzY2FyIG8gdXN1w6FyaW8gbm8gYmFuY28gZG8gRmF1bmFkYiBjb20gbyBpZCB7Y3N1dG9tZXJJZH1cclxuICAvLyBTYWx2YXIgb3MgZGFkb3MgZGEgc3Vic2NyaXB0aW9uIGRvIHVzdcOhcmlvIG5vIEZhdW5hZGJcclxuXHJcbiAgY29uc3QgdXNlclJlZiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxyXG4gICAgcXVlcnkuU2VsZWN0KFxyXG4gICAgICBcInJlZlwiLFxyXG4gICAgICBxdWVyeS5HZXQocXVlcnkuTWF0Y2gocXVlcnkuSW5kZXgoXCJ1c2VyX2J5X3N0cmlwZV9jdXN0b21lcl9pZFwiKSxjdXN0b21lcklkKSlcclxuICAgIClcclxuICApO1xyXG5cclxuICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCBzdHJpcGUuc3Vic2NyaXB0aW9ucy5yZXRyaWV2ZShzdWJzY3JpcHRpb25JZCk7XHJcblxyXG4gIGNvbnN0IHN1YnNjcmlwdGlvbkRhdGEgPSB7XHJcbiAgICBpZDogc3Vic2NyaXB0aW9uLmlkLFxyXG4gICAgdXNlcklkOiB1c2VyUmVmLFxyXG4gICAgc3RhdHVzOiBzdWJzY3JpcHRpb24uc3RhdHVzLFxyXG4gICAgcHJpY2VfaWQ6IHN1YnNjcmlwdGlvbi5pdGVtcy5kYXRhWzBdLnByaWNlLmlkLFxyXG4gIH1cclxuXHJcbiAgaWYoY3JlYXRlQWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICBxdWVyeS5DcmVhdGUoXHJcbiAgICAgICAgICBxdWVyeS5Db2xsZWN0aW9uKCdzdWJzY3JpcHRpb25zJyksXHJcbiAgICAgICAgICB7IGRhdGE6IHN1YnNjcmlwdGlvbkRhdGEgfVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0gXHJcbiAgfSBlbHNlIHtcclxuICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxyXG4gICAgICBxdWVyeS5SZXBsYWNlKFxyXG4gICAgICAgIHF1ZXJ5LlNlbGVjdChcclxuICAgICAgICAgIFwicmVmXCIsXHJcbiAgICAgICAgICBxdWVyeS5HZXQoXHJcbiAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCdzdWJzY3JpcHRpb25fYnlfaWQnKSxcclxuICAgICAgICAgICAgICBzdWJzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgeyBkYXRhOiBzdWJzY3JpcHRpb25EYXRhIH1cclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJxdWVyeSIsImZhdW5hIiwic3RyaXBlIiwic2F2ZVN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbklkIiwiY3VzdG9tZXJJZCIsImNyZWF0ZUFjdGlvbiIsInVzZXJSZWYiLCJTZWxlY3QiLCJHZXQiLCJNYXRjaCIsIkluZGV4Iiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9ucyIsInJldHJpZXZlIiwic3Vic2NyaXB0aW9uRGF0YSIsImlkIiwidXNlcklkIiwic3RhdHVzIiwicHJpY2VfaWQiLCJpdGVtcyIsImRhdGEiLCJwcmljZSIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/_lib/manageSubscription.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ WebHooks)\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n/* harmony import */ var _lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/manageSubscription */ \"(api)/./src/pages/api/_lib/manageSubscription.ts\");\n\n\nasync function buffer(readable) {\n    const chunks = [];\n    for await (const chunk of readable){\n        chunks.push(typeof chunk === \"string\" ? Buffer.from(chunk) : chunk);\n    }\n    return Buffer.concat(chunks);\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst relevantEvents = new Set([\n    \"checkout.session.completed\",\n    \"customer.subscription.updated\",\n    \"customer.subscription.deleted\", \n]);\nasync function WebHooks(req, res) {\n    if (req.method === \"POST\") {\n        const buf = await buffer(req);\n        const secret = req.headers[\"stripe-signature\"];\n        let event;\n        try {\n            event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret ?? \"\", process.env.STRIPE_WEBHOOK_SECRET);\n        } catch (err) {\n            return res.status(400).send(`Webhook error: ${err.message}`);\n        }\n        const { type  } = event;\n        if (relevantEvents.has(type)) {\n            try {\n                switch(type){\n                    case \"customer.subscription.updated\":\n                    case \"customer.subscription.deleted\":\n                        const subscription = event.data.object;\n                        await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(subscription.id, subscription.customer.toString(), false);\n                    case \"checkout.session.completed\":\n                        const checkoutSession = event.data.object;\n                        await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(checkoutSession.subscription?.toString(), checkoutSession.customer?.toString(), true);\n                        break;\n                    default:\n                        throw new Error(\"Unhandled event.\");\n                }\n            } catch (err1) {\n                return res.status(400).json({\n                    error: \"Webhook handler failed\"\n                });\n            }\n        }\n        res.json({\n            received: true\n        });\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method not allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQyxDQUFDO1FBQy9CNUIsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNpQixHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUMzQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS93ZWJob29rcy50cz9kM2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gXCJzdHJlYW1cIjtcclxuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XHJcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHJpcGVcIjtcclxuaW1wb3J0IHsgc2F2ZVN1YnNjcmlwdGlvbiB9IGZyb20gXCIuL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBidWZmZXIocmVhZGFibGU6IFJlYWRhYmxlKSB7XHJcbiAgY29uc3QgY2h1bmtzID0gW107XHJcblxyXG4gIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgcmVhZGFibGUpIHtcclxuICAgIGNodW5rcy5wdXNoKHR5cGVvZiBjaHVuayA9PT0gXCJzdHJpbmdcIiA/IEJ1ZmZlci5mcm9tKGNodW5rKSA6IGNodW5rKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBCdWZmZXIuY29uY2F0KGNodW5rcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgcmVsZXZhbnRFdmVudHMgPSBuZXcgU2V0KFtcclxuICBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCIsXHJcbiAgXCJjdXN0b21lci5zdWJzY3JpcHRpb24udXBkYXRlZFwiLFxyXG4gIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmRlbGV0ZWRcIixcclxuXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBXZWJIb29rcyhcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgYnVmID0gYXdhaXQgYnVmZmVyKHJlcSk7XHJcbiAgICBjb25zdCBzZWNyZXQgPSByZXEuaGVhZGVyc1tcInN0cmlwZS1zaWduYXR1cmVcIl07XHJcblxyXG4gICAgbGV0IGV2ZW50OiBTdHJpcGUuRXZlbnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQoXHJcbiAgICAgICAgYnVmLFxyXG4gICAgICAgIHNlY3JldCA/PyAnJyxcclxuICAgICAgICBwcm9jZXNzLmVudi5TVFJJUEVfV0VCSE9PS19TRUNSRVQhXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYFdlYmhvb2sgZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyB0eXBlIH0gPSBldmVudDtcclxuXHJcbiAgICBpZiAocmVsZXZhbnRFdmVudHMuaGFzKHR5cGUpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLnVwZGF0ZWRcIjpcclxuICAgICAgICAgIGNhc2UgXCJjdXN0b21lci5zdWJzY3JpcHRpb24uZGVsZXRlZFwiOlxyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBldmVudC5kYXRhLm9iamVjdCBhcyBTdHJpcGUuU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgc2F2ZVN1YnNjcmlwdGlvbihcclxuICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uaWQsXHJcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmN1c3RvbWVyLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgIGNhc2UgXCJjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZFwiOlxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tvdXRTZXNzaW9uID0gZXZlbnQuZGF0YS5vYmplY3QgYXMgU3RyaXBlLkNoZWNrb3V0LlNlc3Npb25cclxuXHJcbiAgICAgICAgICBhd2FpdCBzYXZlU3Vic2NyaXB0aW9uKFxyXG4gICAgICAgICAgICBjaGVja291dFNlc3Npb24uc3Vic2NyaXB0aW9uPy50b1N0cmluZygpISxcclxuICAgICAgICAgICAgY2hlY2tvdXRTZXNzaW9uLmN1c3RvbWVyPy50b1N0cmluZygpISxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgZXZlbnQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIldlYmhvb2sgaGFuZGxlciBmYWlsZWRcIiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcy5qc29uKHsgcmVjZWl2ZWQ6IHRydWUgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIlBPU1RcIik7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIpO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJzYXZlU3Vic2NyaXB0aW9uIiwiYnVmZmVyIiwicmVhZGFibGUiLCJjaHVua3MiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwiV2ViSG9va3MiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJidWYiLCJzZWNyZXQiLCJoZWFkZXJzIiwiZXZlbnQiLCJ3ZWJob29rcyIsImNvbnN0cnVjdEV2ZW50IiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVyciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidHlwZSIsImhhcyIsInN1YnNjcmlwdGlvbiIsImRhdGEiLCJvYmplY3QiLCJpZCIsImN1c3RvbWVyIiwidG9TdHJpbmciLCJjaGVja291dFNlc3Npb24iLCJFcnJvciIsImpzb24iLCJlcnJvciIsInJlY2VpdmVkIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhooks.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();