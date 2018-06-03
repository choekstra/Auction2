(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crisis-center-crisis-center-module"],{

/***/ "./src/app/crisis-center/crisis-center-home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/crisis-center/crisis-center-home.component.ts ***!
  \***************************************************************/
/*! exports provided: CrisisCenterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterHomeComponent", function() { return CrisisCenterHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CrisisCenterHomeComponent = /** @class */ (function () {
    function CrisisCenterHomeComponent() {
    }
    CrisisCenterHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <p>Welcome to the Crisis Center</p>\n  "
        })
    ], CrisisCenterHomeComponent);
    return CrisisCenterHomeComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/crisis-center/crisis-center-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CrisisCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterRoutingModule", function() { return CrisisCenterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crisis_center_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crisis-center-home.component */ "./src/app/crisis-center/crisis-center-home.component.ts");
/* harmony import */ var _crisis_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crisis-list.component */ "./src/app/crisis-center/crisis-list.component.ts");
/* harmony import */ var _crisis_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crisis-center.component */ "./src/app/crisis-center/crisis-center.component.ts");
/* harmony import */ var _crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crisis-detail.component */ "./src/app/crisis-center/crisis-detail.component.ts");
/* harmony import */ var _can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../can-deactivate-guard.service */ "./src/app/can-deactivate-guard.service.ts");
/* harmony import */ var _crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crisis-detail-resolver.service */ "./src/app/crisis-center/crisis-detail-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var crisisCenterRoutes = [
    {
        path: '',
        component: _crisis_center_component__WEBPACK_IMPORTED_MODULE_4__["CrisisCenterComponent"],
        children: [
            {
                path: '',
                component: _crisis_list_component__WEBPACK_IMPORTED_MODULE_3__["CrisisListComponent"],
                children: [
                    {
                        path: ':id',
                        component: _crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__["CrisisDetailComponent"],
                        canDeactivate: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_6__["CanDeactivateGuard"]],
                        resolve: {
                            crisis: _crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__["CrisisDetailResolver"]
                        }
                    },
                    {
                        path: '',
                        component: _crisis_center_home_component__WEBPACK_IMPORTED_MODULE_2__["CrisisCenterHomeComponent"]
                    }
                ]
            }
        ]
    }
];
var CrisisCenterRoutingModule = /** @class */ (function () {
    function CrisisCenterRoutingModule() {
    }
    CrisisCenterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(crisisCenterRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: [
                _crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__["CrisisDetailResolver"]
            ]
        })
    ], CrisisCenterRoutingModule);
    return CrisisCenterRoutingModule;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/crisis-center/crisis-center.component.ts ***!
  \**********************************************************/
/*! exports provided: CrisisCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterComponent", function() { return CrisisCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CrisisCenterComponent = /** @class */ (function () {
    function CrisisCenterComponent() {
    }
    CrisisCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <h2>CRISIS CENTER</h2>\n    <router-outlet></router-outlet>\n  "
        })
    ], CrisisCenterComponent);
    return CrisisCenterComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/crisis-center/crisis-center.module.ts ***!
  \*******************************************************/
/*! exports provided: CrisisCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterModule", function() { return CrisisCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crisis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crisis.service */ "./src/app/crisis-center/crisis.service.ts");
/* harmony import */ var _crisis_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crisis-center.component */ "./src/app/crisis-center/crisis-center.component.ts");
/* harmony import */ var _crisis_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crisis-list.component */ "./src/app/crisis-center/crisis-list.component.ts");
/* harmony import */ var _crisis_center_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crisis-center-home.component */ "./src/app/crisis-center/crisis-center-home.component.ts");
/* harmony import */ var _crisis_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crisis-detail.component */ "./src/app/crisis-center/crisis-detail.component.ts");
/* harmony import */ var _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crisis-center-routing.module */ "./src/app/crisis-center/crisis-center-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CrisisCenterModule = /** @class */ (function () {
    function CrisisCenterModule() {
    }
    CrisisCenterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_8__["CrisisCenterRoutingModule"]
            ],
            declarations: [
                _crisis_center_component__WEBPACK_IMPORTED_MODULE_4__["CrisisCenterComponent"],
                _crisis_list_component__WEBPACK_IMPORTED_MODULE_5__["CrisisListComponent"],
                _crisis_center_home_component__WEBPACK_IMPORTED_MODULE_6__["CrisisCenterHomeComponent"],
                _crisis_detail_component__WEBPACK_IMPORTED_MODULE_7__["CrisisDetailComponent"]
            ],
            providers: [
                _crisis_service__WEBPACK_IMPORTED_MODULE_3__["CrisisService"]
            ]
        })
    ], CrisisCenterModule);
    return CrisisCenterModule;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-detail-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/crisis-center/crisis-detail-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: CrisisDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisDetailResolver", function() { return CrisisDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _crisis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crisis.service */ "./src/app/crisis-center/crisis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrisisDetailResolver = /** @class */ (function () {
    function CrisisDetailResolver(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    CrisisDetailResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.cs.getCrisis(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (crisis) {
            if (crisis) {
                return crisis;
            }
            else {
                _this.router.navigate(['/crisis-center']);
                return null;
            }
        }));
    };
    CrisisDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_crisis_service__WEBPACK_IMPORTED_MODULE_3__["CrisisService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CrisisDetailResolver);
    return CrisisDetailResolver;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/crisis-center/crisis-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: CrisisDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisDetailComponent", function() { return CrisisDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog.service */ "./src/app/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrisisDetailComponent = /** @class */ (function () {
    function CrisisDetailComponent(route, router, dialogService) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.editName = data.crisis.name;
            _this.crisis = data.crisis;
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // observable which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routeAnimation'),
        __metadata("design:type", Object)
    ], CrisisDetailComponent.prototype, "routeAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.display'),
        __metadata("design:type", Object)
    ], CrisisDetailComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.position'),
        __metadata("design:type", Object)
    ], CrisisDetailComponent.prototype, "position", void 0);
    CrisisDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <div *ngIf=\"crisis\">\n    <h3>\"{{ editName }}\"</h3>\n    <div>\n      <label>Id: </label>{{ crisis.id }}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"save()\">Save</button>\n      <button (click)=\"cancel()\">Cancel</button>\n    </p>\n  </div>\n  ",
            styles: ['input {width: 20em}'],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["slideInDownAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/crisis-center/crisis-list.component.ts ***!
  \********************************************************/
/*! exports provided: CrisisListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisListComponent", function() { return CrisisListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crisis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crisis.service */ "./src/app/crisis-center/crisis.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrisisListComponent = /** @class */ (function () {
    function CrisisListComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crises$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            _this.selectedId = +params.get('id');
            return _this.service.getCrises();
        }));
    };
    CrisisListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <ul class=\"items\">\n      <li *ngFor=\"let crisis of crises$ | async\"\n        [class.selected]=\"crisis.id === selectedId\">\n        <a [routerLink]=\"[crisis.id]\">\n          <span class=\"badge\">{{ crisis.id }}</span>{{ crisis.name }}\n        </a>\n      </li>\n    </ul>\n\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [_crisis_service__WEBPACK_IMPORTED_MODULE_2__["CrisisService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CrisisListComponent);
    return CrisisListComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis.service.ts":
/*!*************************************************!*\
  !*** ./src/app/crisis-center/crisis.service.ts ***!
  \*************************************************/
/*! exports provided: Crisis, CrisisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crisis", function() { return Crisis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisService", function() { return CrisisService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Crisis = /** @class */ (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());

var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

var CrisisService = /** @class */ (function () {
    function CrisisService() {
        this.crises$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](CRISES);
    }
    CrisisService_1 = CrisisService;
    CrisisService.prototype.getCrises = function () { return this.crises$; };
    CrisisService.prototype.getCrisis = function (id) {
        return this.getCrises().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); }));
    };
    CrisisService.prototype.addCrisis = function (name) {
        name = name.trim();
        if (name) {
            var crisis = new Crisis(CrisisService_1.nextCrisisId++, name);
            CRISES.push(crisis);
            this.crises$.next(CRISES);
        }
    };
    CrisisService.nextCrisisId = 100;
    CrisisService = CrisisService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], CrisisService);
    return CrisisService;
    var CrisisService_1;
}());



/***/ })

}]);
//# sourceMappingURL=crisis-center-crisis-center-module.js.map