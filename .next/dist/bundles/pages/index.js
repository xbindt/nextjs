module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Developer/Colours/nextjs/components/Header.js";



var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        "Home"
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "/about", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        "About"
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = '/Developer/Colours/nextjs/components/MyLayout.js';



var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: layoutStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_fetch__ = __webpack_require__("node-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_node_fetch__);

var _jsxFileName = '/Developer/Colours/nextjs/pages/index.js';



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



//import fetch from 'isomorphic-unfetch'


var PostLink = function PostLink(_ref) {
  var show = _ref.show;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    'li',
    { key: show.id, className: 'jsx-2312025251',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
      { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'a',
        {
          className: 'jsx-2312025251',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        show.name
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
      styleId: '2312025251',
      css: 'li.jsx-2312025251{list-style:none;margin:5px 0;}a.jsx-2312025251{text-decoration:none;color:blue;font-family:"Arial";}a.jsx-2312025251:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVzQixBQUc2QixBQUtLLEFBTVQsWUFDaEIsSUFYaUIsS0FLRixRQUpmLEdBS3dCLG9CQUN4QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvRGV2ZWxvcGVyL0NvbG91cnMvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy9pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuXG5jb25zdCBQb3N0TGluayA9ICh7IHNob3cgfSkgPT4gKFxuICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2xpPlxuICApXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoXG4gICAgICAgIDxQb3N0TGluayBrZXk9e3Nob3cuaWR9IHNob3c9e3Nob3d9Lz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=pages/index.js */'
    })
  );
};

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'h1',
      {
        className: 'jsx-2009538185',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      'Batman TV Shows'
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'ul',
      {
        className: 'jsx-2009538185',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      props.shows.map(function (_ref2) {
        var show = _ref2.show;
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(PostLink, { key: show.id, show: show, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        });
      })
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
      styleId: '2009538185',
      css: 'h1.jsx-2009538185,a.jsx-2009538185{font-family:"Arial";}ul.jsx-2009538185{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDZ0IsQUFHNkIsQUFJVixVQUNaLFVBSkEiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL0RldmVsb3Blci9Db2xvdXJzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcblxuY29uc3QgUG9zdExpbmsgPSAoeyBzaG93IH0pID0+IChcbiAgICA8bGkga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxuICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgKVxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgIDx1bD5cbiAgICAgIHtwcm9wcy5zaG93cy5tYXAoKHtzaG93fSkgPT4gKFxuICAgICAgICA8UG9zdExpbmsga2V5PXtzaG93LmlkfSBzaG93PXtzaG93fS8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages/index.js */'
    })
  );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_5_node_fetch___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;


          console.log('Show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map