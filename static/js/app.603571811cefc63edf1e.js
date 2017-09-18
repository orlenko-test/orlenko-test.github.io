webpackJsonp([1],{

/***/ "4bCr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d53a8a1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("XFxw");
function injectStyle (ssrContext) {
  __webpack_require__("dw04")
  __webpack_require__("4bCr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d53a8a1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "XFxw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      staticClass: "item"
    }, [(item.parcel) ? _c('div', {
      staticClass: "row location"
    }, [_c('div', {
      staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, [_c('div', {
      staticClass: "input-group mb-10"
    }, [_vm._m(0, true), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.parcelCode1),
        expression: "item.parcelCode1"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "aria-label": "...",
        "placeholder": "Zip code, Address",
        "required": "",
        "pattern": "[0-9]"
      },
      domProps: {
        "value": (item.parcelCode1)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.parcelCode1 = $event.target.value
        }
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, [_c('div', {
      staticClass: "input-group mb-10"
    }, [_vm._m(1, true), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.parcelCode2),
        expression: "item.parcelCode2"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "aria-label": "...",
        "placeholder": "Zip code, Address"
      },
      domProps: {
        "value": (item.parcelCode2)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.parcelCode2 = $event.target.value
        }
      }
    })])])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "row flex-align"
    }, [_c('div', {
      staticClass: "col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-10"
    }, [_c('bootstrap-toggle', {
      attrs: {
        "options": {
          on: 'PARCEL',
          off: 'PALLET',
          offstyle: 'primary'
        }
      },
      model: {
        value: (item.parcel),
        callback: function($$v) {
          item.parcel = $$v
        },
        expression: "item.parcel"
      }
    })], 1), _vm._v(" "), (item.parcel) ? _c('div', {
      staticClass: "col-lg-8 col-md-8 col-lg-offset-1 col-sm-12 col-xs-12"
    }, [_c('div', {
      staticClass: "col-lg-3 col-md-6 col-sm-6 col-xs-12"
    }, [_c('label', {
      staticClass: "text-center"
    }, [_vm._v("Weight:\n                  "), _c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.parcelWeight),
        expression: "item.parcelWeight"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "",
        "aria-describedby": "basic-addon2"
      },
      domProps: {
        "value": (item.parcelWeight)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.parcelWeight = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "input-group-addon",
      attrs: {
        "id": "basic-addon2"
      }
    }, [_vm._v("Kg")])])])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-3 col-md-6 col-sm-6 col-xs-12"
    }, [_c('label', {
      staticClass: "text-center"
    }, [_vm._v("Length:\n                  "), _c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.parcelLength),
        expression: "item.parcelLength"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "",
        "aria-describedby": "basic-addon2"
      },
      domProps: {
        "value": (item.parcelLength)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.parcelLength = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "input-group-addon",
      attrs: {
        "id": "basic-addon2"
      }
    }, [_vm._v("Cm")])])])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-3 col-md-6 col-sm-6 col-xs-12"
    }, [_c('label', {
      staticClass: "text-center"
    }, [_vm._v("Width:\n                  "), _c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.parcelWidth),
        expression: "item.parcelWidth"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "",
        "aria-describedby": "basic-addon2"
      },
      domProps: {
        "value": (item.parcelWidth)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.parcelWidth = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "input-group-addon",
      attrs: {
        "id": "basic-addon2"
      }
    }, [_vm._v("Cm")])])])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-3 col-md-6 col-sm-6 col-xs-12"
    }, [_c('label', {
      staticClass: "text-center"
    }, [_vm._v("Height:\n                  "), _c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.parcelHeight),
        expression: "item.parcelHeight"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "",
        "aria-describedby": "basic-addon2"
      },
      domProps: {
        "value": (item.parcelHeight)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.parcelHeight = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "input-group-addon",
      attrs: {
        "id": "basic-addon2"
      }
    }, [_vm._v("Cm")])])])])]) : _vm._e(), _vm._v(" "), (!item.parcel) ? _c('div', {
      staticClass: "col-lg-8 col-lg-offset-1 col-sm-12 col-xs-12"
    }, [_c('div', {
      staticClass: "col-lg-4 col-md-4 col-sm-4 col-xs-12"
    }, [_c('label', {
      staticClass: "text-center"
    }, [_vm._v("Number of pallets:\n                  "), _c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.palletNumber),
        expression: "item.palletNumber"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "",
        "aria-describedby": "basic-addon2"
      },
      domProps: {
        "value": (item.palletNumber)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.palletNumber = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "input-group-addon",
      attrs: {
        "id": "basic-addon2"
      }
    }, [_vm._v("Pcs")])])])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-4 col-md-4 col-sm-4 col-xs-12"
    }, [_c('label', {
      staticClass: "text-center"
    }, [_vm._v("Height:\n                  "), _c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.palletHeight),
        expression: "item.palletHeight"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "",
        "aria-describedby": "basic-addon2"
      },
      domProps: {
        "value": (item.palletHeight)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.palletHeight = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "input-group-addon",
      attrs: {
        "id": "basic-addon2"
      }
    }, [_vm._v("Cm")])])])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-4 col-md-4 col-sm-4 col-xs-12"
    }, [_c('label', {
      staticClass: "text-center"
    }, [_vm._v("Weight for pallet:\n                  "), _c('div', {
      staticClass: "input-group"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.palletWeight),
        expression: "item.palletWeight"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "",
        "aria-describedby": "basic-addon2"
      },
      domProps: {
        "value": (item.palletWeight)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.palletWeight = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "input-group-addon",
      attrs: {
        "id": "basic-addon2"
      }
    }, [_vm._v("Kg")])])])])]) : _vm._e()])])
  })), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 controls"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('button', {
    staticClass: "btn-primary btn mb-10",
    on: {
      "click": function($event) {
        _vm.removeItem(_vm.index)
      }
    }
  }, [_vm._v("- Remove")]), _vm._v(" "), _c('button', {
    staticClass: "btn-primary btn mb-10",
    on: {
      "click": _vm.addItem
    }
  }, [_vm._v("+ Add parcel of pallet")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('button', {
    staticClass: "btn-danger btn mb-10",
    on: {
      "click": function($event) {
        _vm.sendData()
      }
    }
  }, [_vm._v("Quote & Book")])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-info dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("Belgium "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Poland")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("USA")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("GB")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-info dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("Belgium "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Poland")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("USA")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("GB")])])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "dw04":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_toggle__ = __webpack_require__("YEOe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_toggle__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            items: [{ parcel: true }]
        };
    },
    methods: {
        addItem() {
            this.items.push({ parcel: false });
        },
        removeItem(index) {
            this.items.splice(index, 1);
        },
        sendData() {
            console.log(this.items);
        }
    },
    components: { BootstrapToggle: __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_toggle___default.a }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.603571811cefc63edf1e.js.map