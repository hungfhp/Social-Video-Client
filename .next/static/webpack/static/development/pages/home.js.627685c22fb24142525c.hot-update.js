webpackHotUpdate("static\\development\\pages\\home.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/Collapse/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _common_utils_helpers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/utils/helpers */ "./common/utils/helpers.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/Link */ "./components/Link/index.js");



























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
    avatar: {
      backgroundColor: theme.palette.secondary.main
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
          movie = _this$props.movie;
      var _movie$uploader = movie.uploader,
          uploader = _movie$uploader === void 0 ? {} : _movie$uploader;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.card
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.media,
        image: Object(_common_utils_helpers__WEBPACK_IMPORTED_MODULE_24__["getImageMovie"])(movie),
        title: "Paella dish"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        color: "textPrimary"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_25__["default"], {
        variant: "subtitle1",
        href: "/movies/".concat(movie._id)
      }, movie.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        color: "textPrimary"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_25__["default"], {
        variant: "caption",
        href: "/profile/".concat(uploader._id)
      }, uploader.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        gutterBottom: true,
        color: "textPrimary"
      }, "asdasdasd")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.actions,
        disableActionSpacing: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, {
        "aria-label": "Add to favorites"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, {
        "aria-label": "Share"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_21___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a // className={classnames(classes.expand, {
      // [classes.expandOpen]: this.state.expanded
      // })}
      // onClick={this.handleExpandClick}
      // aria-expanded={this.state.expanded}
      , {
        "aria-label": "Show more"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23___default.a, null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16___default.a, {
        in: this.state.expanded,
        timeout: "auto",
        unmountOnExit: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        paragraph: true
      }, "Method:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        paragraph: true
      }, "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        paragraph: true
      }, "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xF3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
        paragraph: true
      }, "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, null, "Set aside off of the heat to let rest for 10 minutes, and then serve."))));
    }
  }]);

  return MovieCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

MovieCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  movie: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(MovieCard));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@material-ui/core/Box/Box.js":
false,

/***/ "./node_modules/@material-ui/core/Box/index.js":
false,

/***/ "./node_modules/@material-ui/styles/StylesProvider.js":
false,

/***/ "./node_modules/@material-ui/styles/ThemeContext.js":
false,

/***/ "./node_modules/@material-ui/styles/createGenerateClassName.js":
false,

/***/ "./node_modules/@material-ui/styles/getStylesCreator.js":
false,

/***/ "./node_modules/@material-ui/styles/getThemeProps.js":
false,

/***/ "./node_modules/@material-ui/styles/hoistInternalStatics.js":
false,

/***/ "./node_modules/@material-ui/styles/indexCounter.js":
false,

/***/ "./node_modules/@material-ui/styles/jssPreset.js":
false,

/***/ "./node_modules/@material-ui/styles/mergeClasses.js":
false,

/***/ "./node_modules/@material-ui/styles/multiKeyStore.js":
false,

/***/ "./node_modules/@material-ui/styles/node_modules/@emotion/hash/dist/hash.browser.esm.js":
false,

/***/ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js":
false,

/***/ "./node_modules/@material-ui/styles/styled.js":
false,

/***/ "./node_modules/@material-ui/styles/withStyles.js":
false,

/***/ "./node_modules/@material-ui/system/borders.js":
false,

/***/ "./node_modules/@material-ui/system/breakpoints.js":
false,

/***/ "./node_modules/@material-ui/system/compose.js":
false,

/***/ "./node_modules/@material-ui/system/css.js":
false,

/***/ "./node_modules/@material-ui/system/display.js":
false,

/***/ "./node_modules/@material-ui/system/flexbox.js":
false,

/***/ "./node_modules/@material-ui/system/memoize.js":
false,

/***/ "./node_modules/@material-ui/system/merge.js":
false,

/***/ "./node_modules/@material-ui/system/palette.js":
false,

/***/ "./node_modules/@material-ui/system/positions.js":
false,

/***/ "./node_modules/@material-ui/system/responsivePropType.js":
false,

/***/ "./node_modules/@material-ui/system/shadows.js":
false,

/***/ "./node_modules/@material-ui/system/sizing.js":
false,

/***/ "./node_modules/@material-ui/system/spacing.js":
false,

/***/ "./node_modules/@material-ui/system/style.js":
false,

/***/ "./node_modules/@material-ui/system/typography.js":
false,

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
false,

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
false,

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.cjs.js":
false,

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.cjs.js":
false,

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
false,

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
false,

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
false,

/***/ "./node_modules/jss-plugin-vendor-prefixer/node_modules/css-vendor/dist/css-vendor.esm.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false

})
//# sourceMappingURL=home.js.627685c22fb24142525c.hot-update.js.map