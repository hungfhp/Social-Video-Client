module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/action.js":
/*!**************************!*\
  !*** ./common/action.js ***!
  \**************************/
/*! exports provided: moduleName, loadCommonData, loginSuccessAction, openLeftSideAction, openLoginAction, openRegisterAction, openForgotPasswordAction, openAlertAction, autoSave, openLeftSideDrawer, login, loginAction, openLoginPopup, register, registerAction, openRegisterModal, openForgotPasswordDialog, openMessageAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleName", function() { return moduleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommonData", function() { return loadCommonData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLeftSideAction", function() { return openLeftSideAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLoginAction", function() { return openLoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRegisterAction", function() { return openRegisterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openForgotPasswordAction", function() { return openForgotPasswordAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAlertAction", function() { return openAlertAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoSave", function() { return autoSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLeftSideDrawer", function() { return openLeftSideDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLoginPopup", function() { return openLoginPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAction", function() { return registerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRegisterModal", function() { return openRegisterModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openForgotPasswordDialog", function() { return openForgotPasswordDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMessageAlert", function() { return openMessageAlert; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_wCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/wCache */ "./common/utils/wCache.js");
/* harmony import */ var _common_utils_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utils/cookie */ "./common/utils/cookie.js");



 // import qs from 'qs'
// import _ from 'lodash'


 // // import * as tracking from '../common/utils/tracking'
// const sortMakes = makes => {
//   const ordered = _.orderBy(makes, 'carCount', 'desc')
//   const to15 = _.slice(ordered, 0, 15)
//   return _.concat(to15, _.orderBy(makes, 'name', 'asc'))
// }

var moduleName = 'common';
var loadCommonData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('common_loadCommonData'); // export const searchStart = createAction('common/SEARCH_START')
// export const searchSuccess = createAction('common/SEARCH_SUCCESS')
// export const searchFacetSuccess = createAction('common/SEARCH_FACET_SUCCESS')
// export const searchError = createAction('common/SEARCH_ERROR')
// export const findMakeSuccess = createAction('common/FIND_MAKE_SUCCESS')
// export const findModelByMakeSuccess = createAction('common/FIND_MODEL_SUCCESS')
// export const getLikedCarsSuccess = createAction('common/GET_LIKED_CARS_SUCCESS')
// export const likeCarsSuccess = createAction('common/LIKED_CAR_SUCCESS')

var loginSuccessAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('common/USER_LOGIN_SUCCESS');
var openLeftSideAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('ui/OPEN_LEFT_SIDE_ACTION');
var openLoginAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('ui/OPEN_LOGIN_POPUP_ACTION');
var openRegisterAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('ui/OPEN_REGISTER_POPUP_ACTION');
var openForgotPasswordAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('ui/OPEN_FORGOT_PASSWORD_ACTION');
var openAlertAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('ui/OPEN_ALERT_ACTION'); // export const setBreadcrumbs = createAction('common/SET_BREADCRUMBS')

var autoSave = function autoSave() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (dispatch, getState, _ref) {
    var fetchApi = _ref.fetchApi;
    // fetchApi('/api/user/autosave', { method: 'POST', data }).then(() => {
    // let common = getState().common
    // const commonData = { ...common, user: { ...common.user, ...data } }
    //   wCache.updateCache('masterData', masterData)
    // return dispatch(loadCommonData(commonData))
    return; // })
  };
}; // export const changeAvatar = (data = {}) => (dispatch, getState, { fetchApi }) =>
//   fetchApi(`/api/user/${data._id}/profilepic`, {
//     method: 'POST',
//     data: data.formData,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   }).then(() => {
//     let common = getState().common
//     const masterData = { ...common, user: { ...common.user, ...data } }
//     wCache.updateCache('masterData', masterData)
//     return dispatch(loadCommonData(masterData))
//   })
// export const changePassword = (data = {}) => async (dispatch, getState, { fetchApi }) => {
//   await fetchApi(`/api/user/${data._id}/changepassword`, { method: 'POST', data }).then(() => {
//     let common = getState().common
//     const masterData = { ...common, user: { ...common.user, ...data } }
//     wCache.updateCache('masterData', masterData)
//     return dispatch(loadCommonData(masterData))
//   })
// }
// export const autoPort = data => (dispatch, getState, { fetchApi }) => {
//   let common = getState().common
//   const masterData = { ...common, user: { ...common.user, ...data } }
//   wCache.updateCache('masterData', masterData)
//   return dispatch(loadCommonData(masterData))
// }
// export const search = (data, options = {}) => async (dispatch, getState, { fetchApi }) => {
//   try {
//     if (!options.countOnly) {
//       dispatch(searchStart())
//     }
//     const response = await fetchApi('/api/car/search', {
//       method: 'GET',
//       params: Object.assign({}, data, options, { facet: !options.countOnly }),
//       paramsSerializer: function(params) {
//         return qs.stringify(params, { arrayFormat: 'repeat' })
//       }
//     })
//     if (options.facet) {
//       dispatch(searchFacetSuccess(response.data && response.data.facet))
//     }
//     if (options.countOnly) {
//       return response.data
//     }
//     return dispatch(searchSuccess(response.data))
//   } catch (error) {
//     return dispatch(searchError(error))
//   }
// }
// export const getSearchFacet = () => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const response = await fetchApi('/api/car/search', {
//       method: 'GET',
//       params: { countOnly: true, facet: true, populate_accessory: true },
//       paramsSerializer: function(params) {
//         return qs.stringify(params, { arrayFormat: 'repeat' })
//       }
//     })
//     return dispatch(searchFacetSuccess(response.data && response.data.facet))
//   } catch (error) {}
// }
// export const findMake = () => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const response = await fetchApi('/api/car/get-all-makes', { method: 'GET' })
//     return dispatch(findMakeSuccess(sortMakes(response.data)))
//   } catch (e) {}
// }
// export const findMakeFromKeywords = keywords => (dispatch, getState, { fetchApi }) => {
//   if (!keywords) return null
//   const { makes, data } = _.get(getState(), 'common.searching', {})
//   const runtimeFacet = _.get(data, 'facet', {})
//   const facetedMakes = _.get(runtimeFacet, 'make.faceted.buckets')
//   let make =
//     facetedMakes &&
//     facetedMakes.length === 1 &&
//     facetedMakes[0].key &&
//     _.find(makes, o => o._id === facetedMakes[0].key)
//   if (!make && facetedMakes && facetedMakes.length > 1 && facetedMakes.length < 5) {
//     const expectMake = facetedMakes[0]
//     if (!_.find(_.slice(facetedMakes, 1), o => o.doc_count * 50 > expectMake.doc_count)) {
//       make = _.find(makes, o => o._id === expectMake.key)
//     }
//   }
//   make = make && make.key && keywords && _.toLower(keywords).includes(make.key) && make
//   if (!make) {
//     make = _.find(makes, o => o.key === _.toLower(keywords))
//   }
//   return make
// }
// export const findModelByMake = makeId => async (dispatch, getState, { fetchApi }) => {
//   try {
//     if (!makeId) return dispatch(findModelByMakeSuccess([]))
//     const response = await fetchApi('/api/model', {
//       method: 'GET',
//       params: { make: makeId, hasCar: true }
//     })
//     return dispatch(findModelByMakeSuccess(response.data))
//   } catch (e) {}
// }
// export const getLikedCars = () => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const response = await fetchApi('/api/like')
//     return dispatch(getLikedCarsSuccess(response.data))
//   } catch (e) {}
// }
// export const likeCar = (car = {}) => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const state = getState()
//     const status = _.find(
//       _.get(state, 'common.likedCars.data', []),
//       o => o.car._id === car._id && o.status === 1
//     )
//       ? 2
//       : 1
//     await fetchApi('/api/like', {
//       method: 'post',
//       data: {
//         car: car._id,
//         status
//       }
//     })
//     dispatch(likeCarsSuccess({ car, status }))
//   } catch (error) {
//     if (process.browser && error.response.status === 401) {
//       dispatch(openLoginAction(true))
//     }
//   }
// }

function loginAndRegister(_x, _x2, _x3, _x4) {
  return _loginAndRegister.apply(this, arguments);
}

function _loginAndRegister() {
  _loginAndRegister = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(dispatch, getState, fetchApi, data) {
    var common, dataUser, commonData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            common = getState().common;
            dataUser = data.data || {};
            commonData = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, common, {
              isAuthenticated: true,
              user: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, common.user, dataUser) // likedCars: {
              //   loaded: true,
              //   data: likeCars.data
              // }

            });
            _common_utils_wCache__WEBPACK_IMPORTED_MODULE_4__["default"].updateCache('commonData', commonData);
            _common_utils_cookie__WEBPACK_IMPORTED_MODULE_5__["setCookie"]('token', dataUser.token, 60);
            dispatch(loginSuccessAction(dataUser)); // update dataLayer
            // tracking.push({
            //   userId: data._id,
            //   userEmail: data.email,
            //   userFirstname: data.name,
            //   service: 'nextdesktop'
            // })

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _loginAndRegister.apply(this, arguments);
}

var openLeftSideDrawer = function openLeftSideDrawer(state) {
  return function (dispatch, getState, _ref2) {
    var fetchApi = _ref2.fetchApi;
    dispatch(openLeftSideAction(state));
  };
};
var login = function login(loginResult) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch, getState, _ref3) {
        var fetchApi;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchApi = _ref3.fetchApi;
                loginAndRegister(dispatch, getState, fetchApi, loginResult.data);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x5, _x6, _x7) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var loginAction = function loginAction(values) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch, getState, _ref5) {
        var fetchApi;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetchApi = _ref5.fetchApi;
                return _context2.abrupt("return", fetchApi('/users/login', {
                  method: 'POST',
                  data: values
                }).then(function (res) {
                  return loginAndRegister(dispatch, getState, fetchApi, res.data);
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x8, _x9, _x10) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};
var openLoginPopup = function openLoginPopup(state) {
  return function (dispatch, getState, _ref7) {
    var fetchApi = _ref7.fetchApi;
    dispatch(openLoginAction(state));
  };
};
var register = function register(registerResult) {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch, getState, _ref8) {
        var fetchApi;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fetchApi = _ref8.fetchApi;
                loginAndRegister(dispatch, getState, fetchApi, registerResult.data);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x11, _x12, _x13) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};
var registerAction = function registerAction(values) {
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(dispatch, getState, _ref10) {
        var fetchApi;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                fetchApi = _ref10.fetchApi;
                return _context4.abrupt("return", fetchApi('/api/users', {
                  method: 'POST',
                  data: values
                }).then(function (data) {
                  return loginAndRegister(dispatch, getState, fetchApi, data.data);
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x14, _x15, _x16) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
};
var openRegisterModal = function openRegisterModal(state) {
  return function (dispatch) {
    dispatch(openRegisterAction(state));
  };
};
var openForgotPasswordDialog = function openForgotPasswordDialog(state) {
  return function (dispatch) {
    dispatch(openForgotPasswordAction(state));
  };
};
var openMessageAlert = function openMessageAlert(state) {
  return function (dispatch) {
    dispatch(openAlertAction(state));
  };
};

/***/ }),

/***/ "./common/constants.js":
/*!*****************************!*\
  !*** ./common/constants.js ***!
  \*****************************/
/*! exports provided: transmissionMap, months, CURRENCY_EN_NAME, AVAILEBLE_LANGUAGES, FILTER_COLORS, FILTER_BODYTYPES, Car, MUST_INSPECTION_COUNTRIES, isInspectionRequired, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transmissionMap", function() { return transmissionMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_EN_NAME", function() { return CURRENCY_EN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVAILEBLE_LANGUAGES", function() { return AVAILEBLE_LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_COLORS", function() { return FILTER_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BODYTYPES", function() { return FILTER_BODYTYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUST_INSPECTION_COUNTRIES", function() { return MUST_INSPECTION_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInspectionRequired", function() { return isInspectionRequired; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 // import { swap } from './utils/helpers'

var data = {
  conditions: {
    USED: 1,
    NEW: 2
  },
  statuses: {
    DRAFT: 1,
    LIST: 2,
    LISTING: 2,
    UNLIST: 3,
    UNLISTED: 3,
    RESERVED: 4,
    SOLD: 5,
    REMOVE: 6,
    REMOVED: 6
  },
  driveTypes: {
    '2WD': 1,
    '4WD': 2,
    ALL: 3,
    '2': 1,
    '4': 2
  },
  currencies: {
    USD: 1,
    JPY: 2
  },
  currencySymbols: {
    $: 1,
    '￥': 2
  },
  steerings: {
    LEFT: 1,
    RIGHT: 2,
    CENTER: 3,
    OTHER: 4
  },
  bodyTypes: {
    BUS_MINIBUS: 10,
    BIKE: 20,
    CONVERTIBLE: 6,
    COUPE: 5,
    HATCHBACK: 1,
    MACHINERY: 11,
    MINI_VEHICLE: 12,
    SEDAN: 2,
    SUV: 3,
    TRUCK: 9,
    UTE: 8,
    VAN_MINIVAN: 7,
    WAGON: 4,
    OTHER: 13
  },
  fuels: {
    BIODIESEL: 1,
    CNG: 2,
    DIESEL: 3,
    ELECTRIC: 4,
    ETHANOL: 5,
    GASOLINE_PETROL: 6,
    'GASOLINE/PETROL': 6,
    GASOLINE: 6,
    PETROL: 6,
    HYBRID: 7,
    LPG: 8,
    STEAM: 9,
    OTHER: 10
  },
  colors: {
    BEIGE: 1,
    BLACK: 2,
    BLUE: 3,
    BRONZE: 4,
    BROWN: 5,
    BURGUNDY: 6,
    CHAMPAGNE: 7,
    CHARCOAL: 8,
    CREAM: 9,
    DARK_BLUE: 10,
    DARK_GREEN: 11,
    GOLD: 12,
    GRAY: 13,
    GREEN: 14,
    IVORY: 15,
    LIGHT_BLUE: 16,
    MAROON: 17,
    OFF_WHITE: 18,
    ORANGE: 19,
    OTHER: 20,
    PEARL: 21,
    PEWTER: 22,
    PINK: 23,
    PURPLE: 24,
    RED: 25,
    SILVER: 26,
    TAN: 32,
    TEAL: 33,
    TITANIUM: 27,
    TURQUOISE: 28,
    WHITE: 29,
    WINE_RED: 30,
    YELLOW: 31
  },
  transmissions: {
    AUTOMANUAL: 3,
    AUTOMATIC: 1,
    CVT: 5,
    MANUAL: 2,
    UNSPECIFIED: 4
  },
  bodyVolumes: {
    CONVERTIABLE: 12,
    COUPE: 12,
    HATCHBACK: 11,
    MINI_VEHICLE: 10,
    SEDAN: 15,
    SUV: 17,
    UTE: 15,
    VAN_MINIVAN: 16.5,
    WAGON: 17
  },
  userStatus: {
    ACTIVE: 1,
    DEACTIVATE: 2
  }
};
var transmissionMap = {
  AUTOMANUAL: 'AMT',
  AUTOMATIC: 'AT',
  CVT: 'CVT',
  MANUAL: 'MT',
  UNSPECIFIED: 'NA'
};
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var statics = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, {
  finance: {
    taxVAT: 1.08,
    insurance: 40,
    buyerProtection: 95,
    inspection: 300
  }
}, data);

var CURRENCY_EN_NAME = {
  USD: 'US Dollar',
  AED: 'United Arab Emirates Dirham',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  EUR: 'Euro',
  GBP: 'Pound Sterling',
  KES: 'Kenyan Shilling',
  MWK: 'Malawian Kwacha',
  NZD: 'New Zealand Dollar',
  RUB: 'Russian Ruble',
  TZS: 'Tanzanian Shilling',
  UGX: 'Ugandan Shilling',
  ZAR: 'South African Rand',
  ZMW: 'Zambian Kwacha',
  JPY: 'Japanese Yen'
};
var AVAILEBLE_LANGUAGES = [{
  key: 'en',
  name: 'English'
}, {
  key: 'ja',
  name: '日本語 - Japanese' // ,
  // {
  //   key: 'fr',
  //   name: 'Français - French'
  // },
  // {
  //   key: 'bn',
  //   name: 'বাংলা - Bengali'
  // },
  // {
  //   key: 'ar',
  //   name: 'العربية - Arabic'
  // },
  // {
  //   key: 'pt',
  //   name: 'Português - Portuguese'
  // },
  // {
  //   key: 'ru',
  //   name: 'Русский - Russian'
  // },
  // {
  //   key: 'sw',
  //   name: 'Kiswahili'
  // },
  // {
  //   key: 'ka',
  //   name: 'ქართული - Georgian'
  // },
  // {
  //   key: 'es',
  //   name: 'Español - Spanish'
  // },
  // {
  //   key: 'my',
  //   name: 'မြန်မာဘာသာ - Burmese'
  // }

}];
var FILTER_COLORS = [{
  value: 29,
  color: '#FFFFFF',
  title: 'White'
}, {
  value: 2,
  color: '#343434',
  title: 'Black'
}, {
  value: 26,
  color: 'linear-gradient(135deg, #DDDCDA 0%, #9D9C9A 100%)',
  title: 'Silver'
}, {
  value: 3,
  color: '#48A2D7',
  title: 'Blue'
}, {
  value: 21,
  color: 'linear-gradient(133.23deg, #F0F1E9 0%, #DADBBA 97.09%)',
  title: 'Pearl'
}, {
  value: 25,
  color: '#DD5051',
  title: 'Red'
}, {
  value: 13,
  color: '#CCCCCC',
  title: 'Gray'
}, {
  value: 24,
  color: '#961891',
  title: 'Purple'
}, {
  value: 14,
  color: '#33CC33',
  title: 'Green'
}, {
  value: 23,
  color: '#F96BB9',
  title: 'Pink'
}, {
  value: 1,
  color: '#F6D19F',
  title: 'Beige'
}, {
  value: 5,
  color: '#9C7732',
  title: 'Brown'
}, {
  value: 19,
  color: '#FD7600',
  title: 'Orange'
}, {
  value: 12,
  color: 'linear-gradient(135deg, #F9EEBC 0%, #C79A2F 100%)',
  title: 'Gold'
}];
var FILTER_BODYTYPES = [{
  value: 2,
  name: 'Sedan',
  icon: 'icon-bodytype-sedan'
}, {
  value: 7,
  name: 'Minivan',
  icon: 'icon-bodytype-mini-van'
}, {
  value: 3,
  name: 'SUV',
  icon: 'icon-bodytype-suv'
}, {
  value: 1,
  name: 'Hatchback',
  icon: 'icon-bodytype-hatchback'
}, {
  value: 6,
  name: 'Convertible',
  icon: 'icon-bodytype-convertible'
}, {
  value: 5,
  name: 'Coupe',
  icon: 'icon-bodytype-coupe'
}, {
  value: 12,
  name: 'Mini(<700cc)',
  icon: 'icon-bodytype-mini'
}, {
  value: 10,
  name: 'Bus',
  icon: 'icon-bodytype-bus'
}, {
  value: 9,
  name: 'Truck',
  icon: 'icon-bodytype-truck'
}]; // statics.conditionKeys = swap(statics.conditions)
// statics.statusKeys = swap(statics.statuses)
// statics.driveTypeKeys = swap(statics.driveTypes)
// statics.currencyKeys = swap(statics.currencies)
// statics.currencySymbolKeys = swap(statics.currencySymbols)
// statics.steeringKeys = swap(statics.steerings)
// statics.bodyTypeKeys = swap(statics.bodyTypes)
// statics.fuelKeys = swap(statics.fuels)
// statics.colorKeys = swap(statics.colors)
// statics.transmissionKeys = swap(statics.transmissions)

var Car = statics;
var MUST_INSPECTION_COUNTRIES = ['Kenya', 'Tanzania', 'Zambia', 'Mozambique', 'Bahamas', 'Jamaica', 'Fiji', 'Sri Lanka', 'Mauritius', 'Papua New Guinea', 'New Zealand', 'Australia', 'Uganda'];
var isInspectionRequired = function isInspectionRequired(country) {
  return MUST_INSPECTION_COUNTRIES.includes(country);
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./common/main.js":
/*!************************!*\
  !*** ./common/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store */ "./common/store.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./action */ "./common/action.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/fetchApi */ "./common/utils/fetchApi.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/url */ "./common/utils/url.js");
/* harmony import */ var _utils_wCache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/wCache */ "./common/utils/wCache.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_17__);











 // import { startI18n, getTranslation } from './languages/translationHelper'
// import { I18nextProvider } from 'react-i18next'





 // import { isInspectionRequired } from './constants'
// import * as cookies from './utils/cookie'


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var Layout = _ref.Layout,
      reducers = _ref.reducers,
      routeName = _ref.routeName,
      translationNameSpaces = _ref.translationNameSpaces;
  return function (Page) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MAIN, _React$Component);

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MAIN, null, [{
          key: "getInitialProps",
          value: function () {
            var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
              var isServer, store, initCommonData, commonData, pageProps, initialState, location;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      isServer = !!ctx.req;
                      store = reducers && Object(_store__WEBPACK_IMPORTED_MODULE_10__["initStore"])(isServer, reducers) || null;
                      initCommonData = lodash__WEBPACK_IMPORTED_MODULE_12___default.a.get(store.getState(), 'common', {});
                      _context.next = 5;
                      return MAIN.getCommonData(ctx);

                    case 5:
                      commonData = _context.sent;
                      _context.next = 8;
                      return store.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_11__["loadCommonData"])(lodash__WEBPACK_IMPORTED_MODULE_12___default.a.assign(initCommonData, commonData)));

                    case 8:
                      _context.next = 10;
                      return Page.getInitialProps && Page.getInitialProps(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ctx, {
                        store: store
                      }));

                    case 10:
                      _context.t0 = _context.sent;

                      if (_context.t0) {
                        _context.next = 13;
                        break;
                      }

                      _context.t0 = {};

                    case 13:
                      pageProps = _context.t0;
                      initialState = store.getState();
                      location = {
                        asPath: ctx.asPath,
                        pathname: ctx.pathname,
                        query: ctx.query,
                        url: Object(_utils_url__WEBPACK_IMPORTED_MODULE_14__["getNativeRootURL"])(ctx.req) + ctx.asPath
                      };
                      return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
                        location: location,
                        isServer: isServer,
                        pathname: ctx.pathname,
                        query: ctx.query,
                        commonData: commonData,
                        initialState: initialState,
                        routeName: routeName
                      }));

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function getInitialProps(_x) {
              return _getInitialProps.apply(this, arguments);
            }

            return getInitialProps;
          }()
        }]);

        function MAIN(props) {
          var _this;

          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MAIN);

          _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MAIN).call(this, props));
          var i18n = null;
          var store = reducers && Object(_store__WEBPACK_IMPORTED_MODULE_10__["initStore"])(props.isServer, reducers, props.initialState) || null;
          var locale = null;
          _this.state = {
            i18n: i18n,
            store: store,
            locale: locale
          };
          return _this;
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MAIN, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var commonData = this.props.commonData;
            _utils_wCache__WEBPACK_IMPORTED_MODULE_15__["default"].updateCache('commonData', commonData);
          }
        }, {
          key: "render",
          value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
              store: this.state.store
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_toast_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastProvider"], {
              placement: "bottom-left"
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Layout, this.props, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Page, this.props))));
          }
        }], [{
          key: "getCommonData",
          value: function () {
            var _getCommonData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
              var data, _cookies, token, res, commonData;

              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!_utils_wCache__WEBPACK_IMPORTED_MODULE_15__["default"].getCache('commonData')) {
                        _context2.next = 3;
                        break;
                      }

                      data = _utils_wCache__WEBPACK_IMPORTED_MODULE_15__["default"].getCache('commonData');
                      return _context2.abrupt("return", data);

                    case 3:
                      _context2.prev = 3;
                      _cookies = next_cookies__WEBPACK_IMPORTED_MODULE_17___default()(ctx), token = _cookies.token;

                      if (!(token && ctx.req && ctx.req.headers && ctx.req.headers.cookie)) {
                        _context2.next = 12;
                        break;
                      }

                      ctx.req.headers.authorization = token;
                      _context2.next = 9;
                      return Object(_utils_fetchApi__WEBPACK_IMPORTED_MODULE_13__["default"])('/users/current', {}, ctx.req);

                    case 9:
                      res = _context2.sent;
                      commonData = {
                        isAuthenticated: true,
                        user: res.data && res.data.data
                      };
                      return _context2.abrupt("return", commonData);

                    case 12:
                      return _context2.abrupt("return", {});

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](3);
                      console.error(_context2.t0.message);
                      return _context2.abrupt("return", null);

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, null, [[3, 15]]);
            }));

            function getCommonData(_x2) {
              return _getCommonData.apply(this, arguments);
            }

            return getCommonData;
          }()
        }]);

        return MAIN;
      }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)
    );
  };
});

/***/ }),

/***/ "./common/reducer.js":
/*!***************************!*\
  !*** ./common/reducer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./common/action.js");



var _handlers;



var defaultState = {
  isAuthenticated: false,
  masterData: {},
  user: {},
  likedMovies: {
    loaded: false,
    data: []
  }
};
var handlers = (_handlers = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers, _action__WEBPACK_IMPORTED_MODULE_3__["loadCommonData"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, action.payload);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers, _action__WEBPACK_IMPORTED_MODULE_3__["loginSuccessAction"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    user: action.payload,
    isAuthenticated: true
  });
}), _handlers);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["handleActions"])(handlers, defaultState));

/***/ }),

/***/ "./common/store.js":
/*!*************************!*\
  !*** ./common/store.js ***!
  \*************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./common/reducer.js");
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/fetchApi */ "./common/utils/fetchApi.js");
/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-reducer */ "./common/ui-reducer.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_9__);










var isDev = next_config__WEBPACK_IMPORTED_MODULE_9___default()().serverRuntimeConfig.isDev;

var buildStore = function buildStore(reducers, initialState) {
  var reducersForCombine = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    common: _reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
    commonUIState: _ui_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],
    form: redux_form__WEBPACK_IMPORTED_MODULE_5__["reducer"]
  }, reducers); // Only use redux-logger on client-side


  var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a.withExtraArgument({
    fetchApi: _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__["default"]
  })];
  var composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_3__["compose"];

  if (isDev && typeof window === 'object') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__["compose"];
  }

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])(reducersForCombine), initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middlewares)));
  store.reducers = reducersForCombine;
  return store;
};
/**
 * Create redux store at both server-side and client, sync state and reducers
 * @param {<Boolean>} isServer
 * @param {<name>: <reducer>} reducers
 * @param {<Object>} initialState
 */


var initStore = function initStore(isServer, reducers, initialState) {
  if (isServer && typeof window === 'undefined') {
    var store = buildStore(reducers, initialState);
    return store;
  } else {
    if (!window.store) {
      window.store = buildStore(reducers, initialState);
    } else {
      var reducersForCombine = window.store.reducers;

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(reducers).forEach(function (reducerName) {
        if (!(reducerName in reducersForCombine)) {
          reducersForCombine = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reducersForCombine, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reducerName, reducers[reducerName]));
        }
      });

      if (reducersForCombine !== window.store.reducers) {
        window.store.replaceReducer(Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])(reducersForCombine));
        window.store.reducers = reducersForCombine;
      }
    }

    return window.store;
  }
};

/***/ }),

/***/ "./common/ui-reducer.js":
/*!******************************!*\
  !*** ./common/ui-reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./common/action.js");



var _handlers;



var defaultState = {
  openLeftSide: true,
  openLogin: false,
  openRegister: false,
  openForgotPassword: false,
  alertStatus: false,
  breadcrumbs: []
};
var handlers = (_handlers = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers, _action__WEBPACK_IMPORTED_MODULE_3__["openLeftSideAction"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    openLeftSide: action.payload
  });
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers, _action__WEBPACK_IMPORTED_MODULE_3__["openLoginAction"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    openLogin: action.payload
  });
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers, _action__WEBPACK_IMPORTED_MODULE_3__["openRegisterAction"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    openRegister: action.payload
  });
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers, _action__WEBPACK_IMPORTED_MODULE_3__["openForgotPasswordAction"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    openForgotPassword: action.payload
  });
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers, _action__WEBPACK_IMPORTED_MODULE_3__["openAlertAction"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    alertStatus: action.payload
  });
}), _handlers);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["handleActions"])(handlers, defaultState));

/***/ }),

/***/ "./common/utils/cookie.js":
/*!********************************!*\
  !*** ./common/utils/cookie.js ***!
  \********************************/
/*! exports provided: setCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
var setCookie = function setCookie(name, value, days) {
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};
var getCookie = function getCookie(name, decode) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');

  if (parts.length === 2) {
    var result = parts.pop().split(';').shift();
    if (decode) return decodeURIComponent(result);
    return result;
  }
};

/***/ }),

/***/ "./common/utils/fetchApi.js":
/*!**********************************!*\
  !*** ./common/utils/fetchApi.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchApi; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);


 // import config from '../../next.config.js'
// const privateConfig = getConfig().serverRuntimeConfig || {}

var publicConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()().publicRuntimeConfig || {};
function fetchApi(url) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var req = arguments.length > 2 ? arguments[2] : undefined;
  // console.log('req', req && req.headers)
  // TODO dispatch fetching status
  var apiConfig = publicConfig.api || {};
  var apiURL = "".concat(apiConfig.protocol, "://").concat(apiConfig.host) + url;
  console.log(apiURL);
  console.log(req && req.headers);

  if (req || typeof window === 'undefined') {
    var reqHeader = req && req.headers || {};
    config.headers = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reqHeader, {
      host: apiConfig.host
    });
    delete config.headers.host; // wating config ACAO
  } // return axios({
  //   url: apiURL + url,
  //   headers: {
  //     authorization:
  //       'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzllZGIyZDZkN2IxYjJlYTA3ZmYzZmEiLCJpYXQiOjE1NTcxMjA2OTZ9.vroxhr76mtDvkvSK3raGFDM8aFn0SuvJ30h9E7pfLzA'
  //   }
  // })


  return axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    url: apiURL
  }));
}

/***/ }),

/***/ "./common/utils/helpers.js":
/*!*********************************!*\
  !*** ./common/utils/helpers.js ***!
  \*********************************/
/*! exports provided: getImageMovie, getAvatarCDN, openInNewTab, calculateCarPrice, calculateCouponDiscount, formatNumber, shouldRenderBoxtext, capitalizeAllFirstLetter, hashCode, swap, ignoreClick, getImageFlagCountry, minusBuynowPrice, splitPhone, getGender, getBackgroundStyle, numberWithCommas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageMovie", function() { return getImageMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvatarCDN", function() { return getAvatarCDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openInNewTab", function() { return openInNewTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCarPrice", function() { return calculateCarPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCouponDiscount", function() { return calculateCouponDiscount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldRenderBoxtext", function() { return shouldRenderBoxtext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeAllFirstLetter", function() { return capitalizeAllFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashCode", function() { return hashCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreClick", function() { return ignoreClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageFlagCountry", function() { return getImageFlagCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minusBuynowPrice", function() { return minusBuynowPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPhone", function() { return splitPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGender", function() { return getGender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundStyle", function() { return getBackgroundStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberWithCommas", function() { return numberWithCommas; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
 // import { parsePhoneNumberFromString } from 'libphonenumber-js'


var isDev = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.isDev;
var defaultImageMovie = '/static/images/default-movie.png';
var defaultAvatar = '/static/images/default-avatar.png';
var getImageMovie = function getImageMovie(movie) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'medium';

  if (movie.thumbnails && movie.thumbnails[size]) {
    return movie.thumbnails[size];
  }

  if (movie.photos && movie.photos.length) {
    return movie.photos[0];
  }

  return defaultImageMovie;
};
var getAvatarCDN = function getAvatarCDN(image) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var protocol = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  if (!image) return defaultAvatar;
  if (image.rejected) return defaultAvatar;
  if (image.preview) return image.preview; // upload local

  if (protocol) {
    protocol += ':';
  } else if (!isDev) {
    protocol = 'https:';
  }

  if (image.cdnUri && image.filename) {
    return protocol + '//' + image.cdnUri + '/' + image.filename + "_".concat(width, "_").concat(height); // cfj host
  }

  if (image.externalUrl) return image.externalUrl; // other host

  return defaultAvatar;
};
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
var calculateCarPrice = function calculateCarPrice(_ref) {
  var car = _ref.car,
      _ref$port = _ref.port,
      port = _ref$port === void 0 ? {} : _ref$port,
      inspection = _ref.inspection,
      insurance = _ref.insurance,
      _ref$couponData = _ref.couponData,
      couponData = _ref$couponData === void 0 ? {} : _ref$couponData;
  var totalPrice = port && port.priceUSD;

  if (inspection && port.inspectionUSD && !port.inspection) {
    totalPrice += port.inspectionUSD;
  }

  if (!inspection && port.inspectionUSD && port.inspection) {
    totalPrice -= port.inspectionUSD;
  }

  if (!insurance && port.insuranceUSD) {
    totalPrice -= port.insuranceUSD;
  }

  totalPrice -= calculateCouponDiscount(couponData && couponData.coupon, car);
  return totalPrice;
};
var calculateCouponDiscount = function calculateCouponDiscount() {
  var coupon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var car = arguments.length > 1 ? arguments[1] : undefined;
  var totalDiscount = coupon && coupon.discountUSD;

  if (coupon && coupon.discountPercent) {
    var discountByPercen = coupon.discountPercent * car.priceUSD / 100;
    totalDiscount = totalDiscount > 0 ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.min([totalDiscount, discountByPercen]) : discountByPercen;
  }

  return Math.round(totalDiscount || 0);
};
var formatNumber = function formatNumber(number) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  try {
    return number.toLocaleString(lang);
  } catch (error) {
    return number;
  }
};
var shouldRenderBoxtext = function shouldRenderBoxtext(cond) {
  cond = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pickBy(cond, function (o) {
    return o !== undefined && o !== '';
  });

  if (cond.makeModelKey === 'cars' && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.omit(cond, ['limit', 'sort', 'make', 'model', 'maxYear', 'minYear', 'makeModelKey', 'makeKey', 'modelKey', 'facet', 'country', 'port', 'page']))) {
    return true;
  }

  if (cond.maxYear !== cond.minYear || !cond.makeModelKey || cond.makeModelKey === 'cars') return false;

  var data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.omit(cond, ['country', 'port', 'city']), function (value, key) {
    return key && key.trim() && key.trim() !== '_' && !key.includes('pjax') && value;
  }));

  return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(data, function (o) {
    return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.contains(['limit', 'sort', 'make', 'model', 'maxYear', 'minYear', 'makeModelKey', 'makeKey', 'modelKey', 'facet', 'country', 'port', 'page'], o);
  });
};
var capitalizeAllFirstLetter = function capitalizeAllFirstLetter(string, keepCapitalize) {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + (keepCapitalize ? txt.substr(1) : txt.substr(1).toLowerCase());
  });
};
/*
 * Hash string to integer
 */

var hashCode = function hashCode(string) {
  var hash = 0,
      i,
      chr;
  if (string.length === 0) return hash;

  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};
var swap = function swap(json) {
  var ret = {};

  for (var key in json) {
    ret[json[key]] = key;
  }

  return ret;
};
var ignoreClick = function ignoreClick(e) {
  e.stopPropagation();
};
var getImageFlagCountry = function getImageFlagCountry(countryName) {
  return '//static.carfromjapan.com/public/system/assets/img/flags/' + String(countryName).trim().toLowerCase().replace(' ', '-') + '.png';
};
var minusBuynowPrice = function minusBuynowPrice(_ref2) {
  var car = _ref2.car,
      totalDiscount = _ref2.totalDiscount;
  var result = 50 + car.priceUSD * 0.013;
  var externalUrl = car.externalUrl || '';
  var limit75 = car.isLegit || externalUrl.includes('tradecarview');

  if (limit75 && result > 75) {
    result = 75;
  }

  if (totalDiscount > result) {
    result = 50;
  } else if (result > totalDiscount) {
    result = result - totalDiscount;
  }

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(car.tags)) {
    result = 15;
  }

  return Math.round(result);
};
var splitPhone = function splitPhone() {
  var fullPhone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var arr = fullPhone.split(' ');
  return {
    countryCode: arr[0],
    phoneNumber: arr.slice(1).join('')
  };
}; // export const formatPhone = (countryCode, phoneNumber) => {
//   const fullPhone = String(countryCode) + String(phoneNumber)
//   const phoneNumberParse = parsePhoneNumberFromString(fullPhone)
//   if (phoneNumberParse) {
//     return phoneNumberParse.formatInternational()
//   }
//   return fullPhone
// }

var getGender = function getGender() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (user.gender) {
    return user.gender;
  } else {
    if (user.google && user.google.gender && user.google.gender === 'male' || user.facebook && user.facebook.gender && user.facebook.gender === 'male' || user.twitter && user.twitter.gender && user.twitter.gender === 'male') {
      return 1;
    } else if (user.google && user.google.gender && user.google.gender === 'female' || user.facebook && user.facebook.gender && user.facebook.gender === 'female' || user.twitter && user.twitter.gender && user.twitter.gender === 'female') {
      return 2;
    } else {
      return 0;
    }
  }
};
var getBackgroundStyle = function getBackgroundStyle(url) {
  return {
    backgroundImage: 'url("' + url + '")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
};
var numberWithCommas = function numberWithCommas(url) {
  return null;
};

/***/ }),

/***/ "./common/utils/sStorage.js":
/*!**********************************!*\
  !*** ./common/utils/sStorage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie */ "./common/utils/cookie.js");


var sStorage = {
  get: function get(key) {
    if (typeof Storage !== 'undefined') {
      return localStorage.getItem(key);
    } else {
      return _cookie__WEBPACK_IMPORTED_MODULE_1__["getCookie"](key);
    }
  },
  getObject: function getObject(key) {
    var data = sStorage.get(key);

    try {
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  },
  set: function set(key, obj) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(key, typeof obj === 'string' ? obj : _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(obj));
    } else {
      _cookie__WEBPACK_IMPORTED_MODULE_1__["setCookie"](key, typeof obj === 'string' ? obj : _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(obj), 365);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sStorage);

/***/ }),

/***/ "./common/utils/url.js":
/*!*****************************!*\
  !*** ./common/utils/url.js ***!
  \*****************************/
/*! exports provided: buildLocaleURL, getNativeRootURL, getParameterByName, generateLanding, parseParams, updateUrlParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLocaleURL", function() { return buildLocaleURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeRootURL", function() { return getNativeRootURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLanding", function() { return generateLanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseParams", function() { return parseParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUrlParameter", function() { return updateUrlParameter; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 // const pathToRegexp = require('path-to-regexp')

var buildLocaleURL = function buildLocaleURL(location, locale) {
  var currentLocale = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(location, 'query.locale');

  var currentURL = location && location.asPath || window && window.location && window.location.href;
  if (!currentURL) return '';
  if (locale === 'en' && !currentLocale) return currentURL;
  if (!currentLocale) return "/".concat(locale).concat(currentURL);
  var urlArr = currentURL.split('/');
  urlArr[1] = locale;
  return urlArr.join('/');
};
var getNativeRootURL = function getNativeRootURL(req) {
  return req ? req.protocol + '://' + req.get('host') : window.location.protocol + '//' + window.location.host;
};
var getParameterByName = function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
      results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
var generateLanding = function generateLanding(params) {};
var parseParams = function parseParams(params) {};
var updateUrlParameter = function updateUrlParameter(uri, key, value) {
  // remove the hash part before operating on the uri
  var i = uri.indexOf('#');
  var hash = i === -1 ? '' : uri.substr(i);
  uri = i === -1 ? uri : uri.substr(0, i);
  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = uri.indexOf('?') !== -1 ? '&' : '?';

  if (!value) {
    // remove key-value pair if value is empty
    uri = uri.replace(new RegExp('([?&]?)' + key + '=[^&]*', 'i'), '');

    if (uri.slice(-1) === '?') {
      uri = uri.slice(0, -1);
    } // replace first occurrence of & by ? if no ? is present


    if (uri.indexOf('?') === -1) uri = uri.replace(/&/, '?');
  } else if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    uri = uri + separator + key + '=' + value;
  }

  return uri + hash;
};

/***/ }),

/***/ "./common/utils/wCache.js":
/*!********************************!*\
  !*** ./common/utils/wCache.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _sStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sStorage */ "./common/utils/sStorage.js");




var wCache =
/*#__PURE__*/
function () {
  function wCache(enable) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, wCache);

    if (enable) {
      this.store = {};
    }
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(wCache, [{
    key: "getCache",
    value: function getCache(key) {
      if (!key || !this.store) return;
      return this.store[key] || _sStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getObject(key) || _sStorage__WEBPACK_IMPORTED_MODULE_2__["default"].get(key);
    }
  }, {
    key: "updateCache",
    value: function updateCache(key, data) {
      if (!this.store) return;

      if (!key) {
        this.store = data;
        return;
      }

      this.store[key] = data;
      _sStorage__WEBPACK_IMPORTED_MODULE_2__["default"].set(key, data);
    }
  }]);

  return wCache;
}();

/* harmony default export */ __webpack_exports__["default"] = (new wCache(typeof window === 'object'));

/***/ }),

/***/ "./components/Fields/FieldGroup.js":
/*!*****************************************!*\
  !*** ./components/Fields/FieldGroup.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__);








 // import InputGroup from 'react-bootstrap/lib/InputGroup'
// import FormGroup from 'react-bootstrap/lib/FormGroup'
// import ControlLabel from 'react-bootstrap/lib/ControlLabel'
// import FormControl from 'react-bootstrap/lib/FormControl'

 // import Error from './Error'







var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getValidationState", function (meta) {
      var input = _this.props.input || {};
      if (meta.touched && meta.error) return 'error';
      if (!meta.error && input.value) return 'success';
      return null;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          input = _this$props.input,
          onKeyUp = _this$props.onKeyUp,
          meta = _this$props.meta,
          label = _this$props.label,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'text' : _this$props$type,
          disabled = _this$props.disabled,
          autoFocus = _this$props.autoFocus,
          placeholder = _this$props.placeholder,
          leftIcon = _this$props.leftIcon,
          rightIcon = _this$props.rightIcon,
          autoComplete = _this$props.autoComplete,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes;
      var isError = !!(meta.touched && meta.error);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.formControl,
        error: isError
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.inputLabel,
        htmlFor: isError ? "component-error" : type
      }, label), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
        onKeyUp: onKeyUp,
        type: type,
        disabled: disabled,
        autoFocus: autoFocus,
        placeholder: placeholder,
        className: classes.input,
        autoComplete: autoComplete,
        "aria-describedby": "component-error-text"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.formHelperText
      }, isError && meta.error));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/Link/index.js":
/*!**********************************!*\
  !*** ./components/Link/index.js ***!
  \**********************************/
/*! exports provided: Router, pushRoute, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushRoute", function() { return pushRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/constants */ "./common/constants.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.scss */ "./components/Link/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__);









var _dec, _class2, _class3, _temp;










var Router = _routes__WEBPACK_IMPORTED_MODULE_14__["Router"];

var getLocaleURL = function getLocaleURL(url, locale) {
  if (!url || url === '/') {
    return "/".concat(locale === 'en' ? '' : locale);
  }

  var urlArr = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.filter(url.split('/'), function (o) {
    return !!o;
  });

  var currentLocale = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.find(_common_constants__WEBPACK_IMPORTED_MODULE_13__["AVAILEBLE_LANGUAGES"], function (o) {
    return o.key === urlArr[0];
  });

  if (currentLocale) {
    urlArr[0] = locale;
  } else if (locale !== 'en') {
    urlArr.unshift(locale);
  }

  return "/".concat(urlArr.join('/'));
};

var pushRoute = function pushRoute(url) {
  try {
    Router.pushRoute(url);
    react_scroll__WEBPACK_IMPORTED_MODULE_12__["animateScroll"].scrollToTop({
      smooth: 'linear',
      delay: 0,
      duration: 0
    });
  } catch (error) {
    window.location.href = url;
  }
};

var _class = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state) {
  return {
    locale: state.common.locale
  };
}), _dec(_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_class2, _React$Component);

  function _class2() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleRoute", function (e) {
      var _this$props = _this.props,
          route = _this$props.route,
          href = _this$props.href,
          as = _this$props.as,
          target = _this$props.target,
          params = _this$props.params,
          options = _this$props.options,
          onClick = _this$props.onClick,
          locale = _this$props.locale,
          reload = _this$props.reload,
          replace = _this$props.replace,
          _this$props$disabledL = _this$props.disabledLocale,
          disabledLocale = _this$props$disabledL === void 0 ? true : _this$props$disabledL;
      var to = disabledLocale ? route || href || _this.props.as : getLocaleURL(route || href || as, locale); // debugger

      try {
        if (target !== '_blank' && !reload) {
          e.preventDefault();
          Router.pushRoute(to, params, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
            replace: replace
          }));
          react_scroll__WEBPACK_IMPORTED_MODULE_12__["animateScroll"].scrollToTop({
            smooth: 'linear',
            delay: 0,
            duration: 0
          });
          if (typeof onClick === 'function') onClick(e);
        }
      } catch (error) {
        window.location.href = to;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          route = _this$props2.route,
          href = _this$props2.href,
          as = _this$props2.as,
          locale = _this$props2.locale,
          className = _this$props2.className,
          target = _this$props2.target,
          style = _this$props2.style,
          itemProp = _this$props2.itemProp,
          disabledLocale = _this$props2.disabledLocale,
          classes = _this$props2.classes,
          variant = _this$props2.variant,
          color = _this$props2.color;
      var formatedURL = route || href || this.props.as;
      formatedURL = disabledLocale ? formatedURL : getLocaleURL(route || href || as, locale);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: className,
        target: target,
        style: style,
        onClick: this.handleRoute,
        href: formatedURL,
        itemProp: itemProp,
        underline: "none",
        color: color || 'inherit',
        variant: variant,
        classes: classes
      }, this.props.children);
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_class3, "propTypes", {
  href: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  route: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  params: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  options: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  target: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
}), _temp)) || _class2);



/***/ }),

/***/ "./components/Link/style.scss":
/*!************************************!*\
  !*** ./components/Link/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Loading/PlaceholderPreload.js":
/*!**************************************************!*\
  !*** ./components/Loading/PlaceholderPreload.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$lineCount = _ref.lineCount,
      lineCount = _ref$lineCount === void 0 ? 5 : _ref$lineCount;
  var holders = [];

  while (holders.length <= lineCount) {
    holders.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: holders.length,
      className: "media"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "preload-img animated-placeholder"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        width: '30%'
      },
      className: "preload-p animated-placeholder"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        width: '80%'
      },
      className: "preload-p animated-placeholder"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "preload-p animated-placeholder"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        width: '50%'
      },
      className: "preload-p animated-placeholder"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "preload-p animated-placeholder"
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "place-holder-preload"
  }, holders);
});

/***/ }),

/***/ "./components/Loading/index.js":
/*!*************************************!*\
  !*** ./components/Loading/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./components/Loading/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var loading = _ref.loading;
  if (!loading) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bounce1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bounce2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bounce3"
  }));
});

/***/ }),

/***/ "./components/Loading/style.scss":
/*!***************************************!*\
  !*** ./components/Loading/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Movie/MovieCard.js":
/*!***************************************!*\
  !*** ./components/Movie/MovieCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Share */ "@material-ui/icons/Share");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _common_utils_helpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../common/utils/helpers */ "./common/utils/helpers.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/Link */ "./components/Link/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_30__);
































var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 400
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing.unit * 2
    },
    cardContent: {
      paddingBottom: '0'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    moreVertIcon: {
      padding: '5px'
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main
    },
    inline: {
      display: 'inline'
    }
  };
};

var MovieCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MovieCard, _Component);

  function MovieCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MovieCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MovieCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      expanded: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleExpandClick", function () {
      _this.setState(function (state) {
        return {
          expanded: !state.expanded
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MovieCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          movie = _this$props.movie;
      var _movie$uploader = movie.uploader,
          uploader = _movie$uploader === void 0 ? {} : _movie$uploader;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.card
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.media,
        image: Object(_common_utils_helpers__WEBPACK_IMPORTED_MODULE_25__["getImageMovie"])(movie),
        title: "Paella dish"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.cardContent
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
        container: true,
        direction: "column",
        justify: "space-evenly",
        alignContent: "space-between",
        alignItems: "flex-start",
        spacing: theme.spacing.unit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_26__["default"], {
        variant: "subtitle1",
        href: "/movies/".concat(movie._id),
        color: "textPrimary"
      }, movie.name))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_26__["default"], {
        variant: "caption",
        href: "/profile/".concat(uploader._id),
        color: "textPrimary"
      }, uploader.name))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        variant: "caption",
        color: "textPrimary"
      }, "Link"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: classes.actions,
        disableActionSpacing: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        inline: true,
        variant: "caption",
        color: "textPrimary"
      }, movie.viewsCount, " views \u30FB"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
        inline: true,
        variant: "caption",
        color: "textPrimary"
      }, moment__WEBPACK_IMPORTED_MODULE_27___default()(movie.createdAt).fromNow())), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {
        className: classes.moreVertIcon // onClick={this.handleExpandClick}
        // aria-expanded={this.state.expanded}
        ,
        "aria-label": "Show more"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24___default.a, null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17___default.a, {
        in: this.state.expanded,
        timeout: "auto",
        unmountOnExit: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15___default.a, null)));
    }
  }]);

  return MovieCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

MovieCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  movie: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles, {
  withTheme: true
})(MovieCard));

/***/ }),

/***/ "./containers/Footer/Footer.js":
/*!*************************************!*\
  !*** ./containers/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "My Footer");
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./containers/Header/Header.js":
/*!*************************************!*\
  !*** ./containers/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Input */ "@material-ui/icons/Input");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _Login_LoginDialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Login/LoginDialog */ "./containers/Login/LoginDialog.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_action__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../common/action */ "./common/action.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../components/Link */ "./components/Link/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_31__);








var _dec, _class;



























var styles = function styles(theme) {
  return {
    grow: {
      flexGrow: 1
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: theme.shadows[1],
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: theme.drawers.left.width,
      width: "calc(100% - ".concat(theme.drawers.left.width, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: -theme.spacing.unit * 2,
      marginRight: 20
    },
    hide: {
      display: 'none'
    },
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_18__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_18__["fade"])(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: 200
    }),
    sectionDesktop: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    sectionMobile: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      display: 'flex'
    }, theme.breakpoints.up('md'), {
      display: 'none'
    })
  };
};

var Header = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_28__["connect"])(function (state) {
  return {
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    openLeftSide: state.commonUIState.openLeftSide,
    openLogin: state.commonUIState.openLogin
  };
}, {
  openLoginPopup: _common_action__WEBPACK_IMPORTED_MODULE_29__["openLoginPopup"],
  openLeftSideDrawer: _common_action__WEBPACK_IMPORTED_MODULE_29__["openLeftSideDrawer"]
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      anchorEl: null,
      mobileMoreAnchorEl: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProfileMenuOpen", function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenuClose", function () {
      _this.setState({
        anchorEl: null
      });

      _this.handleMobileMenuClose();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMobileMenuOpen", function (event) {
      _this.setState({
        mobileMoreAnchorEl: event.currentTarget
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMobileMenuClose", function () {
      _this.setState({
        mobileMoreAnchorEl: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickOpenLoginDialog", function () {
      _this.props.openLoginPopup(true);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickOpenLeftSideDrawer", function () {
      _this.props.openLeftSideDrawer(!_this.props.openLeftSide);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          mobileMoreAnchorEl = _this$state.mobileMoreAnchorEl;
      var _this$props = this.props,
          classes = _this$props.classes,
          user = _this$props.user,
          isAuthenticated = _this$props.isAuthenticated,
          openLogin = _this$props.openLogin;
      var isMenuOpen = Boolean(anchorEl);
      var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      var renderMenu = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_17___default.a, {
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: isMenuOpen,
        onClose: this.handleMenuClose
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        onClick: this.handleMenuClose
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_30__["default"], {
        href: "/profile/my"
      }, "Profile")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        onClick: this.handleMenuClose
      }, "My account"));
      var renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_17___default.a, {
        anchorEl: mobileMoreAnchorEl,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: isMobileMenuOpen,
        onClose: this.handleMenuClose
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        onClick: this.handleMobileMenuClose
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15___default.a, {
        badgeContent: 4,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24___default.a, null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Messages")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        onClick: this.handleMobileMenuClose
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15___default.a, {
        badgeContent: 11,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_25___default.a, null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Notifications")), isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        onClick: this.handleProfileMenuOpen
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_22___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_30__["default"], {
        href: "/profile/my"
      }, "Profile"))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        onClick: this.handleClickOpenLoginDialog
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_23___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Login")));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        position: "fixed",
        color: "default",
        className: classnames__WEBPACK_IMPORTED_MODULE_31___default()(classes.appBar, {})
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onClick: this.handleClickOpenLeftSideDrawer,
        className: classnames__WEBPACK_IMPORTED_MODULE_31___default()(classes.menuButton, {}),
        color: "inherit",
        "aria-label": "Open drawer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_30__["default"], {
        href: "/home"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.search
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.searchIcon
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14___default.a, {
        placeholder: "Search\u2026",
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.sectionDesktop
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15___default.a, {
        badgeContent: 4,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24___default.a, null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15___default.a, {
        badgeContent: 17,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_25___default.a, null))), isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        "aria-owns": isMenuOpen ? 'material-appbar' : undefined,
        "aria-haspopup": "true",
        onClick: this.handleProfileMenuOpen,
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_22___default.a, null)) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        onClick: this.handleClickOpenLoginDialog,
        color: "inherit"
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        "aria-haspopup": "true",
        onClick: this.handleMobileMenuOpen,
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_26___default.a, null))))), renderMenu, renderMobileMenu, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Login_LoginDialog__WEBPACK_IMPORTED_MODULE_27__["default"], {
        open: openLogin
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)) || _class);
Header.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__["withStyles"])(styles)(Header));

/***/ }),

/***/ "./containers/Layout/Layout.js":
/*!*************************************!*\
  !*** ./containers/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: LayoutContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContext", function() { return LayoutContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _containers_Header_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../containers/Header/Header */ "./containers/Header/Header.js");
/* harmony import */ var _containers_Side_LeftSide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../containers/Side/LeftSide */ "./containers/Side/LeftSide.js");
/* harmony import */ var _containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../containers/Footer/Footer */ "./containers/Footer/Footer.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_action__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/action */ "./common/action.js");
/* harmony import */ var _components_Loading_PlaceholderPreload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Loading/PlaceholderPreload */ "./components/Loading/PlaceholderPreload.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__);









var _dec, _class;










var LayoutContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.createContext(); // import Footer from '../Footer/AppFooter'

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    toolbar: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 7
    }
  };
};

var Layout = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    common: state.common
  };
}, {
  autoSave: _common_action__WEBPACK_IMPORTED_MODULE_14__["autoSave"]
}), _dec(_class =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$PureComponent);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      routeChanging: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          location = _this$props.location,
          routeName = _this$props.routeName,
          _this$props$common = _this$props.common,
          isAuthenticated = _this$props$common.isAuthenticated,
          user = _this$props$common.user,
          masterData = _this$props$common.masterData,
          likedMovies = _this$props$common.likedMovies,
          query = _this$props.query,
          classes = _this$props.classes;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LayoutContext.Provider, {
        value: this.state
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16___default.a, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers_Header_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        location: location,
        autoSave: this.props.autoSave,
        user: user,
        isAuthenticated: isAuthenticated,
        likedMovies: likedMovies.data,
        overlaySelectPortRef: this.overlaySelectPortRef,
        routeName: routeName,
        query: query,
        masterData: masterData // classes={classes}

      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers_Side_LeftSide__WEBPACK_IMPORTED_MODULE_11__["default"], {
        location: location,
        autoSave: this.props.autoSave,
        user: user,
        isAuthenticated: isAuthenticated,
        likedMovies: likedMovies.data,
        overlaySelectPortRef: this.overlaySelectPortRef,
        routeName: routeName,
        query: query,
        masterData: masterData // classes={classes}

      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: classes.content
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.toolbar
      }), this.state.routeChanging ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Loading_PlaceholderPreload__WEBPACK_IMPORTED_MODULE_15__["default"], null) : this.props.children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], null)));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(styles, {
  withTheme: true
})(Layout));

/***/ }),

/***/ "./containers/Login/LoginDialog.js":
/*!*****************************************!*\
  !*** ./containers/Login/LoginDialog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/action */ "./common/action.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LoginForm */ "./containers/Login/LoginForm.js");








var _dec, _class2;







var _class = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    user: state.common.user,
    openLogin: state.commonUIState.openLogin
  };
}, {
  login: _common_action__WEBPACK_IMPORTED_MODULE_10__["login"],
  openLoginPopup: _common_action__WEBPACK_IMPORTED_MODULE_10__["openLoginPopup"],
  openForgotPasswordDialog: _common_action__WEBPACK_IMPORTED_MODULE_10__["openForgotPasswordDialog"]
}), _dec(_class2 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2, _React$Component);

  function _class2() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClose", function () {
      _this.props.openLoginPopup(false);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClose: this.handleClose,
        "aria-labelledby": "customized-dialog-title",
        open: this.props.openLogin // open={true}
        // maxWidth='sm'

      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)) || _class2);



/***/ }),

/***/ "./containers/Login/LoginForm.js":
/*!***************************************!*\
  !*** ./containers/Login/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "@material-ui/icons/LockOutlined");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_Fields_FieldGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/Fields/FieldGroup */ "./components/Fields/FieldGroup.js");
/* harmony import */ var _common_action__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/action */ "./common/action.js");
/* harmony import */ var _common_utils_fetchApi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../common/utils/fetchApi */ "./common/utils/fetchApi.js");








var _dec, _dec2, _class;





















var styles = function styles(theme) {
  return {
    main: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      width: 'auto',
      display: 'block'
    }, theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2), {
      width: '450px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    paper: {
      // marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  };
};

var validate = function validate(values) {
  var errors = {};

  if (!values.password || values.password && (values.password.length < 6 || values.password.length > 50)) {
    errors.password = 'ERROR_PASSWORD_LENGTH';
  }

  if (!values.email) {
    errors.email = 'ERR_EMAIL_REQUIRED';
  } else if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(String(values.email.trim()))) {
    errors.email = 'ERROR_EMAIL_INVALID';
  }

  return errors;
};

var LoginForm = (_dec = Object(redux_form__WEBPACK_IMPORTED_MODULE_22__["reduxForm"])({
  form: 'login',
  touchOnBlur: false,
  validate: validate,
  shouldError: function shouldError() {
    return true;
  }
}), _dec2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_21__["connect"])(function (state) {
  return {};
}, {
  login: _common_action__WEBPACK_IMPORTED_MODULE_24__["login"],
  loginAction: _common_action__WEBPACK_IMPORTED_MODULE_24__["loginAction"],
  openLoginPopup: _common_action__WEBPACK_IMPORTED_MODULE_24__["openLoginPopup"]
}), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginForm).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onSubmit", function (values) {
      values.email = values.email.trim();

      _this.setState({
        submitError: ''
      });

      Object(_common_utils_fetchApi__WEBPACK_IMPORTED_MODULE_25__["default"])('/users/login', {
        method: 'POST',
        data: values
      }).then(function (response) {
        _this.props.login(response);

        _this.props.openLoginPopup(false);
      }).catch(function (error) {
        console.log(error);

        _this.setState({
          submitError: 'Sai Email hoặc Password!'
        });

        new redux_form__WEBPACK_IMPORTED_MODULE_22__["SubmissionError"]({
          email: 'element.message'
        });
      });
    });

    _this.state = {
      submitError: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          handleSubmit = _this$props.handleSubmit,
          pristine = _this$props.pristine,
          reset = _this$props.reset,
          submitting = _this$props.submitting;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        className: classes.main
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11___default.a, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18___default.a, {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        component: "h1",
        variant: "h5"
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        color: "error",
        variant: "body1"
      }, this.state.submitError), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        className: classes.form
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
        margin: "normal",
        required: true,
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_22__["Field"], {
        label: "Email Address",
        name: "email",
        type: "email",
        autoComplete: "email",
        component: _components_Fields_FieldGroup__WEBPACK_IMPORTED_MODULE_23__["default"],
        autoFocus: true
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
        margin: "normal",
        required: true,
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_22__["Field"], {
        label: "Password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        component: _components_Fields_FieldGroup__WEBPACK_IMPORTED_MODULE_23__["default"]
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14___default.a, {
          value: "remember",
          color: "primary"
        }),
        label: "Remember me"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        fullWidth: true,
        variant: "contained",
        color: "primary",
        className: classes.submit,
        onClick: handleSubmit(this._onSubmit),
        disabled: submitting,
        type: "submit"
      }, "Sign in"))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)) || _class) || _class);
LoginForm.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_20___default()(styles)(LoginForm));

/***/ }),

/***/ "./containers/Side/LeftSide.js":
/*!*************************************!*\
  !*** ./containers/Side/LeftSide.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _common_action__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../common/action */ "./common/action.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../components/Link */ "./components/Link/index.js");









var _dec, _class;






















var styles = function styles(theme) {
  return {
    toolbar: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    drawer: {
      width: theme.drawers.left.width,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: theme.drawers.left.width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing.unit * 7 + 1
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 9 + 1
    })
  };
};

var LeftSide = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_25__["connect"])(function (state) {
  return {
    common: state,
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    openLeftSide: state.commonUIState.openLeftSide
  };
}, {
  openLeftSideDrawer: _common_action__WEBPACK_IMPORTED_MODULE_26__["openLeftSideDrawer"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LeftSide, _Component);

  function LeftSide() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeftSide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LeftSide)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDrawerClose", function () {
      _this.props.openLeftSideDrawer(false);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LeftSide, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          openLeftSide = _this$props.openLeftSide;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "permanent",
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.drawer, (_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.drawerOpen, openLeftSide), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.drawerClose, !openLeftSide), _classNames)),
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames2, classes.drawerOpen, openLeftSide), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames2, classes.drawerClose, !openLeftSide), _classNames2))
        },
        open: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.toolbar
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: this.handleDrawerClose
      }, theme.direction === 'rtl' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19___default.a, null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default.a, null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_15___default.a, null, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20___default.a, {
          button: true,
          key: text
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21___default.a, null, index % 2 === 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23___default.a, null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24___default.a, null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22___default.a, {
          primary: text
        }));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_15___default.a, null, ['All mail', 'Trash', 'Spam'].map(function (text, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20___default.a, {
          button: true,
          key: text
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21___default.a, null, index % 2 === 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23___default.a, null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_24___default.a, null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22___default.a, {
          primary: text
        }));
      })));
    }
  }]);

  return LeftSide;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"])) || _class);
LeftSide.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(styles, {
  withTheme: true
})(LeftSide));

/***/ }),

/***/ "./modules/home/action.js":
/*!********************************!*\
  !*** ./modules/home/action.js ***!
  \********************************/
/*! exports provided: getSuggestMoviesSuccess, getSuggestMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestMoviesSuccess", function() { return getSuggestMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestMovies", function() { return getSuggestMovies; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_2__);



var getSuggestMoviesSuccess = Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["createAction"])('about-us/GET_SUGGEST_MOVIES_SUCCESS');
var getSuggestMovies = function getSuggestMovies() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    limit: 8,
    page: 1
  };
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState, _ref) {
        var fetchApi, loadedData, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchApi = _ref.fetchApi;
                loadedData = getState().home.suggestMovies;

                if (loadedData.loaded) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return fetchApi('/movies/suggests', {
                  method: 'GET',
                  params: params
                });

              case 5:
                res = _context.sent;
                return _context.abrupt("return", dispatch(getSuggestMoviesSuccess(res.data)));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./modules/home/components/SuggestMovies.js":
/*!**************************************************!*\
  !*** ./modules/home/components/SuggestMovies.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuggestMovies; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Movie_MovieCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Movie/MovieCard */ "./components/Movie/MovieCard.js");






var _dec, _class;






var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 400
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    actions: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {}
  };
};

var SuggestMovies = (_dec = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  withTheme: true
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SuggestMovies, _Component);

  function SuggestMovies() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SuggestMovies);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SuggestMovies).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SuggestMovies, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          movies = _this$props.movies;
      console.log(movies);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
        container: true,
        spacing: theme.spacing.unit * 2
      }, movies.data.length && movies.data.map(function (movie, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: index,
          item: true,
          xs: 3
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Movie_MovieCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
          movie: movie
        }));
      })));
    }
  }]);

  return SuggestMovies;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class);


/***/ }),

/***/ "./modules/home/index.js":
/*!*******************************!*\
  !*** ./modules/home/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ "./modules/home/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_SuggestMovies__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/SuggestMovies */ "./modules/home/components/SuggestMovies.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./action */ "./modules/home/action.js");








var _dec, _dec2, _class;













 // import SuggestMovies from '../../containers/Movie/SuggestMovies'
// import AppBar from '@material-ui/core/AppBar';




var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.primary
    }
  };
};

var Home = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    suggestMovies: state.home.suggestMovies
  };
}, {
  getSuggestMovies: _action__WEBPACK_IMPORTED_MODULE_21__["getSuggestMovies"]
}), _dec2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles, {
  withTheme: true
}), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {// this.props.getSuggestMovies()
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          suggestMovies = _this$props.suggestMovies;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "Home"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "Home page"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "home",
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
        container: true,
        spacing: theme.spacing.unit * 5,
        alignContent: "space-between"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
        item: true,
        xs: 9
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], {
        loading: !suggestMovies.loaded
      }), suggestMovies.loaded && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SuggestMovies__WEBPACK_IMPORTED_MODULE_19__["default"], {
        movies: suggestMovies
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
        item: true,
        xs: 3
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18___default.a, {
        className: classes.paper
      }, "xs=12")))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"])) || _class) || _class);


/***/ }),

/***/ "./modules/home/reducer.js":
/*!*********************************!*\
  !*** ./modules/home/reducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./modules/home/action.js");




var defaultState = {
  suggestMovies: {
    data: [],
    pagination: {},
    loaded: false // params: {
    //   page: 1,
    //   limit: 8
    // }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _action__WEBPACK_IMPORTED_MODULE_3__["getSuggestMoviesSuccess"], function (state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    suggestMovies: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.payload, {
      loaded: true
    })
  });
}), defaultState));

/***/ }),

/***/ "./modules/home/styles.scss":
/*!**********************************!*\
  !*** ./modules/home/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/main */ "./common/main.js");
/* harmony import */ var _containers_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/Layout/Layout */ "./containers/Layout/Layout.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/home */ "./modules/home/index.js");
/* harmony import */ var _modules_home_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/home/reducer */ "./modules/home/reducer.js");
/* harmony import */ var _modules_home_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modules/home/action */ "./modules/home/action.js");









var _dec, _class;

 // import Head from 'next/head'
// import './styles.scss'
// import image from '~/assets/img/bg7.jpg'





 // import { red } from '@material-ui/core/colors';
// import _ from 'lodash'

var HomePage = (_dec = Object(_common_main__WEBPACK_IMPORTED_MODULE_9__["default"])({
  Layout: _containers_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"],
  reducers: {
    home: _modules_home_reducer__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  translationNameSpaces: ['home'],
  routeName: 'home'
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(HomePage, _Component);

  function HomePage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, HomePage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(HomePage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_modules_home__WEBPACK_IMPORTED_MODULE_11__["default"], this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store, dispatch, query, req, rest, promises;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, dispatch = _ref.store.dispatch, query = _ref.query, req = _ref.req, rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["store", "store", "query", "req"]);
                promises = [];
                _context.next = 4;
                return dispatch(Object(_modules_home_action__WEBPACK_IMPORTED_MODULE_13__["getSuggestMovies"])());

              case 4:
                return _context.abrupt("return", {});

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"])) || _class);


/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('profile', '/profile/:userId?').add('home', '/:linhtinh?');

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\GR\client-next\pages\home.js */"./pages/home.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/core/styles/withStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/withStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/Input":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Input" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Input");

/***/ }),

/***/ "@material-ui/icons/LockOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LockOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map