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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__MzB65\",\n\t\"post\": \"post_post__ejhnw\",\n\t\"postContent\": \"post_postContent__B93C3\",\n\t\"previewContent\": \"post_previewContent__2mmIt\",\n\t\"continueReading\": \"post_continueReading___ZrFL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL3Bvc3QubW9kdWxlLnNjc3M/MDhkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3N0X2NvbnRhaW5lcl9fTXpCNjVcIixcblx0XCJwb3N0XCI6IFwicG9zdF9wb3N0X19lamhud1wiLFxuXHRcInBvc3RDb250ZW50XCI6IFwicG9zdF9wb3N0Q29udGVudF9fQjkzQzNcIixcblx0XCJwcmV2aWV3Q29udGVudFwiOiBcInBvc3RfcHJldmlld0NvbnRlbnRfXzJtbUl0XCIsXG5cdFwiY29udGludWVSZWFkaW5nXCI6IFwicG9zdF9jb250aW51ZVJlYWRpbmdfX19ackZMXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Post() {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const slug = query.slug;\n    const [document] = (0,_prismicio_react__WEBPACK_IMPORTED_MODULE_1__.usePrismicDocumentByUID)(\"publication\", slug);\n    const post = {\n        slug,\n        title: document?.data.title,\n        content: document?.data.content,\n        updatedAt: new Date(document?.last_publication_date).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"long\",\n            year: \"numeric\"\n        })\n    };\n    if (!document) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Carregando...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        post.title,\n                        \" | Ignews\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().post),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: post.updatedAt\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postContent),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__.RichText, {\n                                render: document?.data.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Soares\\\\Desktop\\\\Projetos Pessoais\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getServerSideProps = async (req)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(req);\n    if (!session?.activeSubscription) {\n        return {\n            redirect: {\n                destination: \"/posts\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFFZDtBQUNoQjtBQUNXO0FBQ0c7QUFFSDtBQVN6QixTQUFTTSxJQUFJLEdBQUc7SUFDN0IsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0osc0RBQVMsRUFBRTtJQUU3QixNQUFNSyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBSTtJQUV2QixNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHVCx5RUFBdUIsQ0FBQyxhQUFhLEVBQUVRLElBQUksQ0FBQztJQUUvRCxNQUFNRSxJQUFJLEdBQVM7UUFDakJGLElBQUk7UUFDSkcsS0FBSyxFQUFFRixRQUFRLEVBQUVHLElBQUksQ0FBQ0QsS0FBSztRQUMzQkUsT0FBTyxFQUFFSixRQUFRLEVBQUVHLElBQUksQ0FBQ0MsT0FBTztRQUMvQkMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQ04sUUFBUSxFQUFFTyxxQkFBcUIsQ0FBRSxDQUFDQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDaEZDLEdBQUcsRUFBRSxTQUFTO1lBQ2RDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7S0FDSDtJQUVELElBQUcsQ0FBQ1gsUUFBUSxFQUFFO1FBQ1oscUJBQ0UsOERBQUNZLE1BQUk7WUFBQ0MsU0FBUyxFQUFFakIsb0VBQWdCO3NCQUMvQiw0RUFBQ21CLElBQUU7MEJBQUMsZUFBYTs7Ozs7b0JBQUs7Ozs7O2dCQUNqQixDQUNSO0tBQ0Y7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUN0QixrREFBSTswQkFDSCw0RUFBQ1MsT0FBSzs7d0JBQUVELElBQUksQ0FBQ0MsS0FBSzt3QkFBQyxXQUFTOzs7Ozs7d0JBQVE7Ozs7O29CQUMvQjswQkFFUCw4REFBQ1UsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFakIsb0VBQWdCOzBCQUMvQiw0RUFBQ29CLFNBQU87b0JBQUNILFNBQVMsRUFBRWpCLCtEQUFXOztzQ0FDN0IsOERBQUNtQixJQUFFO3NDQUFFZCxJQUFJLENBQUNDLEtBQUs7Ozs7O2dDQUFNO3NDQUNyQiw4REFBQ2UsTUFBSTtzQ0FBRWhCLElBQUksQ0FBQ0ksU0FBUzs7Ozs7Z0NBQVE7c0NBQzdCLDhEQUFDYSxLQUFHOzRCQUFDTCxTQUFTLEVBQUVqQixzRUFBa0I7c0NBQ2hDLDRFQUFDRCxxREFBUTtnQ0FBQ3lCLE1BQU0sRUFBRXBCLFFBQVEsRUFBRUcsSUFBSSxDQUFDQyxPQUFPOzs7OztvQ0FBSTs7Ozs7Z0NBQ3hDOzs7Ozs7d0JBQ0U7Ozs7O29CQUNMOztvQkFDTixDQUNIO0NBQ0g7QUFHTSxNQUFNaUIsa0JBQWtCLEdBQXVCLE9BQU9DLEdBQUcsR0FBSztJQUNuRSxNQUFNQyxPQUFPLEdBQUcsTUFBTS9CLDJEQUFVLENBQUM4QixHQUFHLENBQUM7SUFFckMsSUFBRyxDQUFDQyxPQUFPLEVBQUVDLGtCQUFrQixFQUFFO1FBQy9CLE9BQU87WUFDTEMsUUFBUSxFQUFFO2dCQUNSQyxXQUFXLEVBQUUsUUFBUTtnQkFDckJDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0Y7S0FDRjtJQUVELE9BQU87UUFDTEMsS0FBSyxFQUFFLEVBQUU7S0FDVjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3g/Nzc4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VQcmlzbWljRG9jdW1lbnRCeVVJRCB9IGZyb20gXCJAcHJpc21pY2lvL3JlYWN0XCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1yZWFjdGpzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0Lm1vZHVsZS5zY3NzJztcclxuXHJcbnR5cGUgUG9zdCA9IHtcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgW2RvY3VtZW50XSA9IHVzZVByaXNtaWNEb2N1bWVudEJ5VUlEKCdwdWJsaWNhdGlvbicsIHNsdWcpO1xyXG5cclxuICBjb25zdCBwb3N0OiBQb3N0ID0ge1xyXG4gICAgc2x1ZyxcclxuICAgIHRpdGxlOiBkb2N1bWVudD8uZGF0YS50aXRsZSEsXHJcbiAgICBjb250ZW50OiBkb2N1bWVudD8uZGF0YS5jb250ZW50LFxyXG4gICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShkb2N1bWVudD8ubGFzdF9wdWJsaWNhdGlvbl9kYXRlISkudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicsIHtcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgIHllYXI6ICdudW1lcmljJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGlmKCFkb2N1bWVudCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8aDE+Q2FycmVnYW5kby4uLjwvaDE+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBJZ25ld3M8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8dGltZT57cG9zdC51cGRhdGVkQXR9PC90aW1lPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH0+XHJcbiAgICAgICAgICAgIDxSaWNoVGV4dCByZW5kZXI9e2RvY3VtZW50Py5kYXRhLmNvbnRlbnR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHJlcSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcSk7XHJcblxyXG4gIGlmKCFzZXNzaW9uPy5hY3RpdmVTdWJzY3JpcHRpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246ICcvcG9zdHMnLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUHJpc21pY0RvY3VtZW50QnlVSUQiLCJnZXRTZXNzaW9uIiwiSGVhZCIsInVzZVJvdXRlciIsIlJpY2hUZXh0Iiwic3R5bGVzIiwiUG9zdCIsInF1ZXJ5Iiwic2x1ZyIsImRvY3VtZW50IiwicG9zdCIsInRpdGxlIiwiZGF0YSIsImNvbnRlbnQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwibGFzdF9wdWJsaWNhdGlvbl9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiYXJ0aWNsZSIsInRpbWUiLCJkaXYiLCJwb3N0Q29udGVudCIsInJlbmRlciIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInNlc3Npb24iLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "@prismicio/react":
/*!***********************************!*\
  !*** external "@prismicio/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-reactjs");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();