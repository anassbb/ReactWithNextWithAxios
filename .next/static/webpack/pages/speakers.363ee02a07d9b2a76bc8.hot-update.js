webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchBar/SearchBar */ "./src/components/SearchBar/SearchBar.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\anasa\\Desktop\\work\\React.js\\desining React components\\refon\\src\\components\\Speakers\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Speakers = function Speakers() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      speakers = _useState2[0],
      setSpeakers = _useState2[1];

  function toggleSpeakerFavorite(speakerRec) {
    return _objectSpread(_objectSpread({}, speakerRec), {}, {
      isFavorite: !speakerRec.isFavorite
    });
  }

  var onFavoriteToggleHandler = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(speakerRec) {
      var toggledSpeakerRec, speakerIndex;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);
              speakerIndex = speakers.map(function (speaker) {
                return speaker.id;
              }).indexOf(speakerRec.id);
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("http://localhost:4000/speakers/".concat(speakerRec.id), toggledSpeakerRec);

            case 4:
              setSpeakers([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRec], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(speakerIndex + 1))));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onFavoriteToggleHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    debugger;

    var fetchData = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://localhost:4000/speakers');

              case 2:
                response = _context2.sent;
                setSpeakers(response.data());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: speakers.filter(function (rec) {
        var targetString = "".concat(rec.firstName).concat(rec.lastName).toLowerCase();
        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
      }).map(function (speaker) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, speaker), {}, {
          onFavoriteToggle: function onFavoriteToggle() {
            return onFavoriteToggleHandler(speaker);
          }
        }), speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "3KbKMxuSbCM2H1fOhTI24nIjJ4A=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJzcGVha2VycyIsInNldFNwZWFrZXJzIiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwic3BlYWtlclJlYyIsImlzRmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlciIsInRvZ2dsZWRTcGVha2VyUmVjIiwic3BlYWtlckluZGV4IiwibWFwIiwic3BlYWtlciIsImlkIiwiaW5kZXhPZiIsImF4aW9zIiwicHV0Iiwic2xpY2UiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJmaWx0ZXIiLCJyZWMiLCJ0YXJnZXRTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxFQUFELENBRHpCO0FBQUEsTUFDZEMsV0FEYztBQUFBLE1BQ0RDLGNBREM7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBLE1BRWRHLFFBRmM7QUFBQSxNQUVKQyxXQUZJOztBQUlyQixXQUFTQyxxQkFBVCxDQUErQkMsVUFBL0IsRUFBMkM7QUFDekMsMkNBQ0tBLFVBREw7QUFFRUMsZ0JBQVUsRUFBRSxDQUFDRCxVQUFVLENBQUNDO0FBRjFCO0FBSUQ7O0FBRUQsTUFBTUMsdUJBQXVCO0FBQUEsZ01BQUcsaUJBQU9GLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCRywrQkFEd0IsR0FDSkoscUJBQXFCLENBQUNDLFVBQUQsQ0FEakI7QUFFeEJJLDBCQUZ3QixHQUVUUCxRQUFRLENBQzFCUSxHQURrQixDQUNkLFVBQUNDLE9BQUQ7QUFBQSx1QkFBYUEsT0FBTyxDQUFDQyxFQUFyQjtBQUFBLGVBRGMsRUFFbEJDLE9BRmtCLENBRVZSLFVBQVUsQ0FBQ08sRUFGRCxDQUZTO0FBQUE7QUFBQSxxQkFNeEJFLDRDQUFLLENBQUNDLEdBQU4sMENBQzhCVixVQUFVLENBQUNPLEVBRHpDLEdBRUpKLGlCQUZJLENBTndCOztBQUFBO0FBVTlCTCx5QkFBVyx3R0FDTkQsUUFBUSxDQUFDYyxLQUFULENBQWUsQ0FBZixFQUFrQlAsWUFBbEIsQ0FETSxJQUVURCxpQkFGUyxnR0FHTk4sUUFBUSxDQUFDYyxLQUFULENBQWVQLFlBQVksR0FBRyxDQUE5QixDQUhNLEdBQVg7O0FBVjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXZCRix1QkFBdUI7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBaUJBVSx5REFBUyxDQUFDLFlBQU07QUFDZDs7QUFDQSxRQUFNQyxTQUFTO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDT0osNENBQUssQ0FBQ0ssR0FBTixDQUFVLGdDQUFWLENBRFA7O0FBQUE7QUFDVkMsd0JBRFU7QUFFaEJqQiwyQkFBVyxDQUFDaUIsUUFBUSxDQUFDQyxJQUFULEVBQUQsQ0FBWDs7QUFGZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEgsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUlBQSxhQUFTO0FBQ1YsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQ7QUFBVyxpQkFBVyxFQUFFbEIsV0FBeEI7QUFBcUMsb0JBQWMsRUFBRUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDR0MsUUFBUSxDQUNOb0IsTUFERixDQUNTLFVBQUNDLEdBQUQsRUFBUztBQUNmLFlBQU1DLFlBQVksR0FBRyxVQUFHRCxHQUFHLENBQUNFLFNBQVAsU0FBbUJGLEdBQUcsQ0FBQ0csUUFBdkIsRUFBa0NDLFdBQWxDLEVBQXJCO0FBQ0EsZUFBTzNCLFdBQVcsQ0FBQzRCLE1BQVosS0FBdUIsQ0FBdkIsR0FDSCxJQURHLEdBRUhKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQjdCLFdBQVcsQ0FBQzJCLFdBQVosRUFBdEIsQ0FGSjtBQUdELE9BTkYsRUFPRWpCLEdBUEYsQ0FPTSxVQUFDQyxPQUFEO0FBQUEsNEJBQ0gscUVBQUMsd0RBQUQsa0NBRU1BLE9BRk47QUFHRSwwQkFBZ0IsRUFBRTtBQUFBLG1CQUFNSix1QkFBdUIsQ0FBQ0ksT0FBRCxDQUE3QjtBQUFBO0FBSHBCLFlBQ09BLE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FQTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQTFERDs7R0FBTWQsUTs7S0FBQUEsUTtBQTREU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuMzYzZWUwMmEwN2Q5YjJhNzZiYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhci9TZWFyY2hCYXInO1xyXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuLi9TcGVha2VyL1NwZWFrZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NwZWFrZXJzLCBzZXRTcGVha2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zcGVha2VyUmVjLFxyXG4gICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlYy5pc0Zhdm9yaXRlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZWRTcGVha2VyUmVjID0gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gICAgY29uc3Qgc3BlYWtlckluZGV4ID0gc3BlYWtlcnNcclxuICAgICAgLm1hcCgoc3BlYWtlcikgPT4gc3BlYWtlci5pZClcclxuICAgICAgLmluZGV4T2Yoc3BlYWtlclJlYy5pZCk7XHJcblxyXG4gICAgYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLFxyXG4gICAgICB0b2dnbGVkU3BlYWtlclJlYyxcclxuICAgICk7XHJcbiAgICBzZXRTcGVha2VycyhbXHJcbiAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKDAsIHNwZWFrZXJJbmRleCksXHJcbiAgICAgIHRvZ2dsZWRTcGVha2VyUmVjLFxyXG4gICAgICAuLi5zcGVha2Vycy5zbGljZShzcGVha2VySW5kZXggKyAxKSxcclxuICAgIF0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2VycycpO1xyXG4gICAgICBzZXRTcGVha2VycyhyZXNwb25zZS5kYXRhKCkpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICB7c3BlYWtlcnNcclxuICAgICAgICAgIC5maWx0ZXIoKHJlYykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWMuZmlyc3ROYW1lfSR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5tYXAoKHNwZWFrZXIpID0+IChcclxuICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgey4uLnNwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlcil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=