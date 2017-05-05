
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(563);

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = __webpack_require__(564);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/app/pages/index.js?entry';


var index = function index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), 'Welcome to nextbook. This is the "cover" index page.', _react2.default.createElement(_Navigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/app/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/app/components/Header.js';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'welcome to nextbook')));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/app/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/app/components/Header.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/app/components/Navigation.js';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/chapter?chapter=1', as: '/chapter/1', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Chapter 1')), _react2.default.createElement(_link2.default, { href: '/chapter?chapter=test', as: '/chapter/test-route-wowowowo', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Chapter Z')));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/app/components/Navigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/app/components/Navigation.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[565]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz80Y2IwZjkyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRjYjBmOTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzPzRjYjBmOTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7Ozs7Ozs7QUFFUCxJQUFNLFFBQVE7eUJBQ1o7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLE1BS0Esd0VBQUM7O2dCQUFEO2tCQUFBO0FBQUE7QUFBQTtBQUlKOztrQkFBZSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RSOzs7O0FBR1A7Ozs7Ozs7O2tCQUFlO3lCQUNiOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0c7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxxQkFDRTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBO0FBSE4sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7Ozs7a0JBQWU7eUJBQ2I7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRyxnQ0FBSyxNQUFLO2dCQUFYO2tCQUFlO0FBQWY7cUJBQWU7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUNmLDBCQUFDLGdDQUFLLE1BQUssc0JBQXFCLElBQUc7Z0JBQW5DO2tCQUFnRDtBQUFoRDtxQkFBZ0Q7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUNoRCwrQkFBQyxnQ0FBSyxNQUFLLHlCQUF3QixJQUFHO2dCQUF0QztrQkFBcUU7QUFBckU7cUJBQXFFOztnQkFBQTtrQkFBQTtBQUFBO0FBQUE7QUFKekUsRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcblxuY29uc3QgaW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWRlciAvPlxuXG4gICAgV2VsY29tZSB0byBuZXh0Ym9vay4gVGhpcyBpcyB0aGUgXCJjb3ZlclwiIGluZGV4IHBhZ2UuXG4gIFxuICAgIHsvKiB0b2RvOiBuYXZpZ2F0aW9uIHByb3Agc2V0IHRvIFwiY292ZXJcIiAqL31cbiAgICA8TmF2aWdhdGlvbiAvPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT53ZWxjb21lIHRvIG5leHRib29rPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gIDwvZGl2PlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj0nLyc+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgPExpbmsgaHJlZj0nL2NoYXB0ZXI/Y2hhcHRlcj0xJyBhcz0nL2NoYXB0ZXIvMSc+PGE+Q2hhcHRlciAxPC9hPjwvTGluaz5cbiAgICA8TGluayBocmVmPScvY2hhcHRlcj9jaGFwdGVyPXRlc3QnIGFzPScvY2hhcHRlci90ZXN0LXJvdXRlLXdvd293b3dvJz48YT5DaGFwdGVyIFo8L2E+PC9MaW5rPlxuICA8L2Rpdj5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        