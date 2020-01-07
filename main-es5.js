function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <button mat-raised-button color=\"accent\" (click)=\"onOpenSettings()\">Settings</button>\n</header>\n<ci-projects></ci-projects>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"ciModel.pipeline$ | async as pipeline\">\n  <a class=\"project\" [ngClass]=\"pipeline.status\" [href]=\"pipeline.web_url\" target=\"_ci\">\n    <header [innerHTML]=\"getProjectTitle()\"></header>\n    <main>\n      <div><i class=\"fas fa-code-branch\"></i> {{ pipeline.ref }} - {{ pipeline.sha.substr(0, 7) }}</div>\n      <div class=\"commit-msg\">{{ (ciModel.commit$ | async)?.title }}</div>\n    </main>\n    <footer><span class=\"status\">{{ pipeline.status }}</span></footer>\n  </a>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects.component.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects.component.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let c of ciModels\">\n  <ci-project [ciModel]=\"c\"></ci-project>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings.component.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings.component.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form>\n  <mat-form-field>\n    <input matInput name=\"url\" [(ngModel)]=\"gitlabUrl\" placeholder=\"GitLab URL\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput name=\"key\" [(ngModel)]=\"key\" placeholder=\"key\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput name=\"groupIds\" [(ngModel)]=\"groupIds\" placeholder=\"groupIds\">\n  </mat-form-field>\n\n  <button mat-raised-button color=\"accent\" (click)=\"onClose()\">Close</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  -webkit-box-flex: 1;\n          flex: auto;\n}\n\nheader {\n  display: -webkit-box;\n  display: flex;\n}\n\nbutton {\n  margin: 1em 1em 1em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2VhbGVzL3NyYy9jaS1kYXNoL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtVQUFBLFVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxZW0gMWVtIDFlbSBhdXRvO1xufVxuIiwiOmhvc3Qge1xuICBmbGV4OiBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDFlbSAxZW0gMWVtIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.component */
    "./src/app/settings.component.ts");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/settings.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(matDialog, settingsService) {
        _classCallCheck(this, AppComponent);

        this.matDialog = matDialog;
        this.settingsService = settingsService;
      }

      _createClass(AppComponent, [{
        key: "onOpenSettings",
        value: function onOpenSettings() {
          var _this = this;

          this.matDialog.open(_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"], {
            width: '50vw'
          }).afterClosed().subscribe(function (s) {
            _this.settingsService.onSettingsChange(s);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ci_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ci.service */
    "./src/app/ci.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./project.component */
    "./src/app/project.component.ts");
    /* harmony import */


    var _projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projects.component */
    "./src/app/projects.component.ts");
    /* harmony import */


    var _settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./settings.component */
    "./src/app/settings.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/settings.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"], _settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]],
      entryComponents: [_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]],
      providers: [_ci_service__WEBPACK_IMPORTED_MODULE_5__["CiService"], _settings_service__WEBPACK_IMPORTED_MODULE_16__["SettingsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/ci.service.ts":
  /*!*******************************!*\
    !*** ./src/app/ci.service.ts ***!
    \*******************************/

  /*! exports provided: CiService */

  /***/
  function srcAppCiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CiService", function () {
      return CiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/settings.service.ts");

    var CiService =
    /*#__PURE__*/
    function () {
      function CiService(http, settingsService) {
        var _this2 = this;

        _classCallCheck(this, CiService);

        this.http = http;
        this.API_URL = '/api/v4';
        this.API_PROJECTS_URL = '/groups/:id/projects';
        this.url = '';
        this.groupIds = [];
        this.tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](); // caches

        this.pipelines$ = {};
        settingsService.settings$.subscribe(function (s) {
          _this2.url = s.url + _this2.API_URL;
          _this2.tokenHeader = _this2.tokenHeader.set('Private-Token', s.key);
          _this2.groupIds = s.groupIds.split(',').map(function (g) {
            return parseInt(g, 10);
          });
        });
      }

      _createClass(CiService, [{
        key: "projects",
        value: function projects() {
          var _this3 = this;

          if (!this.url || !this.groupIds.length || !this.tokenHeader.get('Private-Token')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
          }

          var projects = this.groupIds.map(function (id) {
            var url = _this3.url + _this3.API_PROJECTS_URL.replace(':id', id.toString());

            return _this3.http.get(url, {
              headers: _this3.tokenHeader
            });
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"]).apply(void 0, _toConsumableArray(projects)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["reduce"])(function (a, v) {
            a.push.apply(a, _toConsumableArray(v));
            return a;
          }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])());
        }
      }, {
        key: "pipeline",
        value: function pipeline(projectId) {
          if (!this.pipelines$[projectId]) {
            this.pipelines$[projectId] = this.http.get("".concat(this.url, "/projects/").concat(projectId, "/pipelines"), {
              headers: this.tokenHeader
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pipelines) {
              return pipelines.find(function (p) {
                return p.ref === 'master';
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])());
          }

          return this.pipelines$[projectId];
        }
      }, {
        key: "commit",
        value: function commit(projectId, _commit) {
          return this.http.get("".concat(this.url, "/projects/").concat(projectId, "/repository/commits/").concat(_commit), {
            headers: this.tokenHeader
          });
        }
      }]);

      return CiService;
    }();

    CiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]
      }];
    };

    CiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])], CiService);
    /***/
  },

  /***/
  "./src/app/project.component.scss":
  /*!****************************************!*\
    !*** ./src/app/project.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".project {\n  display: none;\n  margin: 1em;\n  min-width: 15em;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: inherit;\n  text-decoration: none;\n}\n.project > * {\n  padding: 0.5em;\n}\nheader, footer {\n  -webkit-box-flex: 0;\n          flex: none;\n  background-color: #f2f2f2;\n}\nmain {\n  -webkit-box-flex: 1;\n          flex: auto;\n  background-color: #fafafa;\n}\n.status {\n  padding: 4px;\n  background-color: #fff;\n  text-transform: capitalize;\n  font-size: 0.8em;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.success {\n  display: -webkit-box !important;\n  display: flex !important;\n}\n.success .status {\n  border-color: #0a0;\n  color: #0a0;\n}\n.pending {\n  display: -webkit-box !important;\n  display: flex !important;\n}\n.pending .status {\n  border-color: #e48823;\n  color: #e48823;\n}\n.running {\n  display: -webkit-box !important;\n  display: flex !important;\n}\n.running .status {\n  border-color: #00a;\n  color: #00a;\n}\n.failed {\n  display: -webkit-box !important;\n  display: flex !important;\n}\n.failed .status {\n  border-color: #a00;\n  color: #a00;\n}\n.failed header, .failed footer {\n  background-color: #ffe4e0;\n}\n.failed main {\n  background-color: #fff6f5;\n}\n.commit-msg {\n  font-size: 0.8em;\n  padding-left: 2em;\n  max-width: 15em;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2VhbGVzL3NyYy9jaS1kYXNoL3NyYy9hcHAvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUVBLGNBQUE7RUFDQSxxQkFBQTtBQ0RGO0FER0U7RUFDRSxjQUFBO0FDREo7QURLQTtFQUNFLG1CQUFBO1VBQUEsVUFBQTtFQUNBLHlCQUFBO0FDRkY7QURLQTtFQUNFLG1CQUFBO1VBQUEsVUFBQTtFQUNBLHlCQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtBQ0hGO0FES0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNISjtBRE9BO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtBQ0pGO0FETUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNKSjtBRFFBO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtBQ0xGO0FET0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNMSjtBRFNBO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtBQ05GO0FEUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNOSjtBRFNFO0VBQ0UseUJBQUE7QUNQSjtBRFVFO0VBQ0UseUJBQUE7QUNSSjtBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogMWVtO1xuICBtaW4td2lkdGg6IDE1ZW07XG5cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICYgPiAqIHtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICB9XG59XG5cbmhlYWRlciwgZm9vdGVyIHtcbiAgZmxleDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xufVxuXG5tYWluIHtcbiAgZmxleDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xufVxuXG4uc3RhdHVzIHtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAuOGVtO1xuXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdWNjZXNzIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXG4gIC5zdGF0dXMge1xuICAgIGJvcmRlci1jb2xvcjogIzBhMDtcbiAgICBjb2xvcjogIzBhMDtcbiAgfVxufVxuXG4ucGVuZGluZyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblxuICAuc3RhdHVzIHtcbiAgICBib3JkZXItY29sb3I6ICNlNDg4MjM7XG4gICAgY29sb3I6ICNlNDg4MjM7XG4gIH1cbn1cblxuLnJ1bm5pbmcge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cbiAgLnN0YXR1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDBhO1xuICAgIGNvbG9yOiAjMDBhO1xuICB9XG59XG5cbi5mYWlsZWQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cbiAgLnN0YXR1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTAwO1xuICAgIGNvbG9yOiAjYTAwO1xuICB9XG5cbiAgaGVhZGVyLCBmb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyOCwgMjI0KTtcbiAgfVxuXG4gIG1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0NiwgMjQ1KTtcbiAgfVxufVxuXG4uY29tbWl0LW1zZyB7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIG1heC13aWR0aDogMTVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCIucHJvamVjdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogMWVtO1xuICBtaW4td2lkdGg6IDE1ZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvamVjdCA+ICoge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuaGVhZGVyLCBmb290ZXIge1xuICBmbGV4OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG5tYWluIHtcbiAgZmxleDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLnN0YXR1cyB7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdWNjZXNzIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuLnN1Y2Nlc3MgLnN0YXR1cyB7XG4gIGJvcmRlci1jb2xvcjogIzBhMDtcbiAgY29sb3I6ICMwYTA7XG59XG5cbi5wZW5kaW5nIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuLnBlbmRpbmcgLnN0YXR1cyB7XG4gIGJvcmRlci1jb2xvcjogI2U0ODgyMztcbiAgY29sb3I6ICNlNDg4MjM7XG59XG5cbi5ydW5uaW5nIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuLnJ1bm5pbmcgLnN0YXR1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAwYTtcbiAgY29sb3I6ICMwMGE7XG59XG5cbi5mYWlsZWQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG4uZmFpbGVkIC5zdGF0dXMge1xuICBib3JkZXItY29sb3I6ICNhMDA7XG4gIGNvbG9yOiAjYTAwO1xufVxuLmZhaWxlZCBoZWFkZXIsIC5mYWlsZWQgZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlMDtcbn1cbi5mYWlsZWQgbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZjU7XG59XG5cbi5jb21taXQtbXNnIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIG1heC13aWR0aDogMTVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/project.component.ts":
  /*!**************************************!*\
    !*** ./src/app/project.component.ts ***!
    \**************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectComponent =
    /*#__PURE__*/
    function () {
      function ProjectComponent() {
        _classCallCheck(this, ProjectComponent);
      }

      _createClass(ProjectComponent, [{
        key: "getProjectTitle",
        value: function getProjectTitle() {
          if (!this.ciModel) {
            return '';
          }

          return this.ciModel.project.name_with_namespace.replace(/(.*\/ )(.*)/, '$1<strong>$2</strong>');
        }
      }]);

      return ProjectComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProjectComponent.prototype, "ciModel", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ci-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project.component.scss */
      "./src/app/project.component.scss")).default]
    })], ProjectComponent);
    /***/
  },

  /***/
  "./src/app/projects.component.scss":
  /*!*****************************************!*\
    !*** ./src/app/projects.component.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2VhbGVzL3NyYy9jaS1kYXNoL3NyYy9hcHAvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/projects.component.ts":
  /*!***************************************!*\
    !*** ./src/app/projects.component.ts ***!
    \***************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ci_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ci.service */
    "./src/app/ci.service.ts");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/settings.service.ts");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(ci, settingsService) {
        _classCallCheck(this, ProjectsComponent);

        this.ci = ci;
        this.settingsService = settingsService;
        this.title = 'ci-dash';
        this.ciModels = [];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.settingsService.settings$.subscribe(function () {
            return _this4.updateProjects();
          });
        }
      }, {
        key: "updateProjects",
        value: function updateProjects() {
          var _this5 = this;

          this.ci.projects().subscribe(function (projects) {
            _this5.ciModels = projects.map(function (p) {
              return {
                project: p
              };
            });

            _this5.ciModels.sort(function (a, b) {
              return a.project.name.localeCompare(b.project.name);
            });

            _this5.ciModels.forEach(function (ciModel) {
              ciModel.pipeline$ = _this5.ci.pipeline(ciModel.project.id);
              ciModel.pipeline$.subscribe(function (p) {
                if (!p) {
                  return;
                }

                ciModel.commit$ = _this5.ci.commit(ciModel.project.id, p.sha);
              });
            });
          });
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _ci_service__WEBPACK_IMPORTED_MODULE_2__["CiService"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ci-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ci_service__WEBPACK_IMPORTED_MODULE_2__["CiService"], _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/settings.component.scss":
  /*!*****************************************!*\
    !*** ./src/app/settings.component.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2VhbGVzL3NyYy9jaS1kYXNoL3NyYy9hcHAvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIiwiZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/settings.component.ts":
  /*!***************************************!*\
    !*** ./src/app/settings.component.ts ***!
    \***************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/settings.service.ts");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(dialogRef, settingsService) {
        _classCallCheck(this, SettingsComponent);

        this.dialogRef = dialogRef;
        this.settingsService = settingsService;
        this.gitlabUrl = 'https://gitlab.edina.ac.uk';
        this.key = '';
        this.groupIds = '';
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.settingsService.settings$.subscribe(function (s) {
            _this6.gitlabUrl = s.url;
            _this6.key = s.key;
            _this6.groupIds = s.groupIds;
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.dialogRef.close({
            url: this.gitlabUrl,
            key: this.key,
            groupIds: this.groupIds
          });
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ci-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.scss */
      "./src/app/settings.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/settings.service.ts":
  /*!*************************************!*\
    !*** ./src/app/settings.service.ts ***!
    \*************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SettingsService =
    /*#__PURE__*/
    function () {
      function SettingsService() {
        _classCallCheck(this, SettingsService);

        this._settings$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);

        this._settings$.next({
          url: localStorage.getItem('url') || '',
          key: localStorage.getItem('key') || '',
          groupIds: localStorage.getItem('groupIds') || ''
        });
      }

      _createClass(SettingsService, [{
        key: "onSettingsChange",
        value: function onSettingsChange(s) {
          localStorage.setItem('url', s.url);
          localStorage.setItem('key', s.key);
          localStorage.setItem('groupIds', s.groupIds);

          this._settings$.next(s);
        }
      }, {
        key: "settings$",
        get: function get() {
          return this._settings$.asObservable();
        }
      }]);

      return SettingsService;
    }();

    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SettingsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/aseales/src/ci-dash/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map