(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-catalog/product-catalog.component */ "./src/app/product-catalog/product-catalog.component.ts");
/* harmony import */ var _constants_route_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/route.constants */ "./src/app/constants/route.constants.ts");
/* harmony import */ var _product_checkout_product_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-checkout/product-checkout.component */ "./src/app/product-checkout/product-checkout.component.ts");







const routes = [
    { path: _constants_route_constants__WEBPACK_IMPORTED_MODULE_3__["RouteConstants"].routeToProductCatalog, component: _product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_2__["ProductCatalogComponent"], pathMatch: 'full' },
    { path: _constants_route_constants__WEBPACK_IMPORTED_MODULE_3__["RouteConstants"].routeToProductCatalogWithsearchTxt, component: _product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_2__["ProductCatalogComponent"] },
    { path: _constants_route_constants__WEBPACK_IMPORTED_MODULE_3__["RouteConstants"].routeToProductCatalog, component: _product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_2__["ProductCatalogComponent"] },
    { path: _constants_route_constants__WEBPACK_IMPORTED_MODULE_3__["RouteConstants"].routeToProductCheckout, component: _product_checkout_product_checkout_component__WEBPACK_IMPORTED_MODULE_4__["ProductCheckoutComponent"] },
    { path: '**', redirectTo: _constants_route_constants__WEBPACK_IMPORTED_MODULE_3__["RouteConstants"].routeToProductCatalog },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_route_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/route.constants */ "./src/app/constants/route.constants.ts");
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/global.constants */ "./src/app/constants/global.constants.ts");
/* harmony import */ var _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/products/manage-products.service */ "./src/app/services/products/manage-products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AppComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.count);
} }
/**
 *
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
class AppComponent {
    /**
     *Creates an instance of AppComponent.
     * @param {ManageProductsService} manageProductSvc
     * @param {Router} router
     * @memberof AppComponent
     */
    constructor(manageProductSvc, router) {
        this.manageProductSvc = manageProductSvc;
        this.router = router;
        this.routeConstants = _constants_route_constants__WEBPACK_IMPORTED_MODULE_1__["RouteConstants"];
        this.globalConstants = _constants_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"];
        this.count = 0;
        this.searchText = '';
    }
    /**
     *
     *
     * @memberof AppComponent
     */
    ngOnInit() {
        this.manageProductSvc.cast.subscribe(res => this.count = res);
        if (this.count === null || this.count === undefined) {
            this.count = this.manageProductSvc.getCarCount();
        }
    }
    /**
     *
     *
     * @param {*} searchTxt
     * @memberof AppComponent
     */
    searchProducts(searchTxt) {
        if (searchTxt == null || searchTxt == undefined || searchTxt.length == 0) {
            this.router.navigateByUrl('');
        }
        if (searchTxt.length > 2) {
            this.router.navigateByUrl(`search/${searchTxt}`);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_3__["ManageProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 5, consts: [[1, "navbar", "navbar-light", "fixed-top", "bg-light"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/logo/bootstrap-solid.svg", "width", "30", "height", "30", "alt", "logo", 1, "d-inline-block", "align-top"], [1, "form-inline"], ["type", "search", "placeholder", "Search Products", "name", "searchText", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"], ["class", "badge badge-primary", 4, "ngIf"], [1, "mr-top-6"], [1, "badge", "badge-primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchText = $event; })("ngModelChange", function AppComponent_Template_input_ngModelChange_6_listener() { return ctx.searchProducts(ctx.searchText); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_span_9_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.routeConstants.routeToProductCatalog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.globalConstants.siteName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.routeConstants.routeToProductCheckout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.count);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  line-height: 2.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biAuYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgbGluZS1oZWlnaHQ6IDIuNTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_3__["ManageProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _utils_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/range-slider/range-slider.component */ "./src/app/utils/range-slider/range-slider.component.ts");
/* harmony import */ var _product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-catalog/product-catalog.component */ "./src/app/product-catalog/product-catalog.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_checkout_product_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-checkout/product-checkout.component */ "./src/app/product-checkout/product-checkout.component.ts");
/* harmony import */ var _services_api_api_call_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/api/api-call.service */ "./src/app/services/api/api-call.service.ts");
/* harmony import */ var _pipes_sort_products_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/sort-products.pipe */ "./src/app/pipes/sort-products.pipe.ts");
/* harmony import */ var _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/products/manage-products.service */ "./src/app/services/products/manage-products.service.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_api_api_call_service__WEBPACK_IMPORTED_MODULE_10__["ApiCallService"], _pipes_sort_products_pipe__WEBPACK_IMPORTED_MODULE_11__["SortProductsPipe"], _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_12__["ManageProductsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _utils_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_6__["RangeSliderComponent"],
        _product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_7__["ProductCatalogComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
        _product_checkout_product_checkout_component__WEBPACK_IMPORTED_MODULE_9__["ProductCheckoutComponent"],
        _pipes_sort_products_pipe__WEBPACK_IMPORTED_MODULE_11__["SortProductsPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _utils_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_6__["RangeSliderComponent"],
                    _product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_7__["ProductCatalogComponent"],
                    _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                    _product_checkout_product_checkout_component__WEBPACK_IMPORTED_MODULE_9__["ProductCheckoutComponent"],
                    _pipes_sort_products_pipe__WEBPACK_IMPORTED_MODULE_11__["SortProductsPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [_services_api_api_call_service__WEBPACK_IMPORTED_MODULE_10__["ApiCallService"], _pipes_sort_products_pipe__WEBPACK_IMPORTED_MODULE_11__["SortProductsPipe"], _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_12__["ManageProductsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/constants/character.constants.ts":
/*!**************************************************!*\
  !*** ./src/app/constants/character.constants.ts ***!
  \**************************************************/
/*! exports provided: CharacterConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterConstants", function() { return CharacterConstants; });
const CharacterConstants = {
    emptyArrayStr: '[]'
};


/***/ }),

/***/ "./src/app/constants/global.constants.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/global.constants.ts ***!
  \***********************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
const GlobalConstants = {
    siteName: 'Bootstrap-cart',
    siteTitle: 'Bootstrap-cart',
    addToCart: 'Add to cart',
    priceFilter: 'Price Filter',
    sorting: 'SortBy: ',
    price: 'Price: ',
    page: {
        productCatalog: {
            title: "Product Catalog"
        },
        checkout: {
            title: "Checkout"
        }
    },
    button: {
        apply: 'Apply',
        checkout: 'Checkout'
    },
    sortingDropDownList: [
        { "name": "Name Asc", "value": 1 },
        { "name": "Name Desc", "value": 2 },
        { "name": "Price HTL", "value": 3 },
        { "name": "Price LTH", "value": 4 }
    ]
};


/***/ }),

/***/ "./src/app/constants/route.constants.ts":
/*!**********************************************!*\
  !*** ./src/app/constants/route.constants.ts ***!
  \**********************************************/
/*! exports provided: RouteConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConstants", function() { return RouteConstants; });
const RouteConstants = {
    routeToProductCatalog: '',
    routeToProductCatalogWithsearchTxt: 'search/:searchtext',
    routeToProductCheckout: 'checkout'
};


/***/ }),

/***/ "./src/app/pipes/sort-products.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/sort-products.pipe.ts ***!
  \*********************************************/
/*! exports provided: SortProductsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortProductsPipe", function() { return SortProductsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SortProductsPipe {
    transform(value, argstr) {
        if (!value || !argstr)
            return value;
        let args = parseInt(argstr); //making sure we comapir with number type
        switch (args) {
            case 1:
            case 2:
                // filter on name
                return this.filterOnName(value, args);
            case 3:
            case 4:
                // filter on price
                return this.filterOnPrice(value, args);
            default:
                return value;
        }
    }
    filterOnPrice(value, args) {
        if (args === 4) // Price LTH
            return value.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
        else
            return value.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
    }
    filterOnName(value, args) {
        if (args === 1) //asc
            return value.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        else
            return value.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
    }
}
SortProductsPipe.ɵfac = function SortProductsPipe_Factory(t) { return new (t || SortProductsPipe)(); };
SortProductsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sortProducts", type: SortProductsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortProductsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sortProducts'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/product-catalog/product-catalog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-catalog/product-catalog.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatalogComponent", function() { return ProductCatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constants/global.constants */ "./src/app/constants/global.constants.ts");
/* harmony import */ var _constants_route_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/route.constants */ "./src/app/constants/route.constants.ts");
/* harmony import */ var _services_api_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/api-call.service */ "./src/app/services/api/api-call.service.ts");
/* harmony import */ var _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products/manage-products.service */ "./src/app/services/products/manage-products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _utils_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/range-slider/range-slider.component */ "./src/app/utils/range-slider/range-slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _pipes_sort_products_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/sort-products.pipe */ "./src/app/pipes/sort-products.pipe.ts");












function ProductCatalogComponent_div_1_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", obj_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r5.name);
} }
function ProductCatalogComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-product", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addProductToCart", function ProductCatalogComponent_div_1_div_13_Template_app_product_addProductToCart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.addProductToCart($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r6);
} }
function ProductCatalogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-range-slider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("myRange", function ProductCatalogComponent_div_1_Template_app_range_slider_myRange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.filterProductsWithPrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductCatalogComponent_div_1_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.sortBy = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductCatalogComponent_div_1_option_11_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductCatalogComponent_div_1_div_13_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "sortProducts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.globalConstants.priceFilter, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx_r0.globalConstants.sorting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.globalConstants.sorting, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r0.globalConstants.sorting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.globalConstants.sorting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sortingDropDownList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 8, ctx_r0.productList, ctx_r0.sortBy));
} }
function ProductCatalogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No results found for your search.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCatalogComponent_ng_template_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getAllTheProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Clear All Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductCatalogComponent {
    constructor(apiCall, manageProducts, activatedRoute) {
        this.apiCall = apiCall;
        this.manageProducts = manageProducts;
        this.activatedRoute = activatedRoute;
        this.globalConstants = _constants_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"];
        this.routeConstants = _constants_route_constants__WEBPACK_IMPORTED_MODULE_2__["RouteConstants"];
        this.productList = [];
        this.sortBy = 1;
        this.sortingDropDownList = [];
    }
    ngOnInit() {
        this.sortingDropDownList = this.globalConstants.sortingDropDownList;
        this.activatedRoute.params.subscribe(res => {
            const searchText = res['searchtext'];
            if (searchText != undefined && searchText != null && searchText.length > 0) {
                this.filterProductsTxt(searchText);
            }
            else {
                this.getAllTheProducts();
            }
        });
    }
    filterProductsTxt(searchText) {
        this.productList = this.getAllTheProducts();
        this.productList = this.productList.filter(o => {
            const res = (o.name.match(searchText));
            return (res != null && res.length > 0) ? true : false;
        });
    }
    filterProductsWithPrice(toRange) {
        this.productList = this.getAllTheProducts();
        this.productList = this.productList.filter(o => {
            return (o.price <= toRange) ? true : false;
        });
    }
    getAllTheProducts() {
        this.productList = this.manageProducts.getUpdatedProducts();
        if (!this.productList.length) {
            this.apiCall.getApiCall('assets/dummyData/productsListData.json').subscribe(res => {
                this.productList = res;
                this.manageProducts.storeProducts(res);
            });
        }
        return this.productList;
    }
    addProductToCart(product) {
        this.manageProducts.addToCart(product);
    }
}
ProductCatalogComponent.ɵfac = function ProductCatalogComponent_Factory(t) { return new (t || ProductCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_4__["ManageProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
ProductCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCatalogComponent, selectors: [["app-product-catalog"]], decls: 4, vars: 2, consts: [[1, "container"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noResultFoundTemplate", ""], [1, "row"], [1, "col-md-2"], [3, "myRange"], [1, "col-md-10"], [1, "col-md-3", "float-right"], [3, "for"], [3, "name", "id", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-md-4"], [3, "product", "addProductToCart"], [1, "text-center"], [1, "btn", "btn-lg", "btn-primary", 3, "click"]], template: function ProductCatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCatalogComponent_div_1_Template, 15, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductCatalogComponent_ng_template_2_Template, 6, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productList.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _utils_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_7__["RangeSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"]], pipes: [_pipes_sort_products_pipe__WEBPACK_IMPORTED_MODULE_10__["SortProductsPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2F0YWxvZy9wcm9kdWN0LWNhdGFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-catalog',
                templateUrl: './product-catalog.component.html',
                styleUrls: ['./product-catalog.component.scss']
            }]
    }], function () { return [{ type: _services_api_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] }, { type: _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_4__["ManageProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/product-checkout/product-checkout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product-checkout/product-checkout.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCheckoutComponent", function() { return ProductCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_route_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/route.constants */ "./src/app/constants/route.constants.ts");
/* harmony import */ var _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products/manage-products.service */ "./src/app/services/products/manage-products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function ProductCheckoutComponent_div_0_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCheckoutComponent_div_0_tr_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const product_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.removeQuantity(product_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductCheckoutComponent_div_0_tr_5_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const product_r19 = ctx.$implicit; return product_r19.selectedQuantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCheckoutComponent_div_0_tr_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const product_r19 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.addQuantity(product_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r19.selectedQuantity == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r19.selectedQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r19.quantity == 0);
} }
function ProductCheckoutComponent_div_0_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X ", product_r24.selectedQuantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](":", product_r24.price * product_r24.selectedQuantity, "");
} }
function ProductCheckoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductCheckoutComponent_div_0_tr_5_Template, 9, 4, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductCheckoutComponent_div_0_tr_12_Template, 7, 3, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ":10%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SUB TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Continue Shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.selectedProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.selectedProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](":", ctx_r14.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.total - 0.1 * ctx_r14.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r14.routeConstants.routeToProductCatalog);
} }
function ProductCheckoutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ooops, Noting Intresting ???");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click Out our Top recommendation ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r16.routeConstants.routeToProductCatalog);
} }
class ProductCheckoutComponent {
    /**
     *Creates an instance of ProductCheckoutComponent.
     * @param {ManageProductsService} manageProductSvc
     * @memberof ProductCheckoutComponent
     */
    constructor(manageProductSvc) {
        this.manageProductSvc = manageProductSvc;
        this.routeConstants = _constants_route_constants__WEBPACK_IMPORTED_MODULE_1__["RouteConstants"];
        this.selectedProducts = [];
        this.total = 0;
    }
    ngOnInit() {
        this.getAllTheSelectedProducts();
    }
    /**
     *
     *
     * @memberof ProductCheckoutComponent
     */
    getAllTheSelectedProducts() {
        const products = this.manageProductSvc.getUpdatedProducts();
        products.forEach(product => {
            if (product.selectedQuantity > 0) {
                this.selectedProducts.push(product);
            }
        });
        this.calculateSum();
    }
    calculateSum() {
        this.total = 0;
        this.selectedProducts.forEach(product => this.total = this.total + (product.price * product.selectedQuantity));
    }
    addQuantity(product) {
        this.manageProductSvc.addToCart(product);
        this.calculateSum();
    }
    removeQuantity(product) {
        if (product.selectedQuantity === 1) {
            if (this.selectedProducts.length === 1)
                this.selectedProducts = [];
            else {
                this.selectedProducts = this.selectedProducts.filter(o => {
                    return !(o.id == product.id);
                });
            }
        }
        console.log(JSON.stringify(this.selectedProducts));
        this.manageProductSvc.removeFromCart(product);
        this.calculateSum();
    }
}
ProductCheckoutComponent.ɵfac = function ProductCheckoutComponent_Factory(t) { return new (t || ProductCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_2__["ManageProductsService"])); };
ProductCheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCheckoutComponent, selectors: [["app-product-checkout"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["showCartEmptyTemplate", ""], [1, "flexi-container"], ["class", "product-items-block", 4, "ngFor", "ngForOf"], [1, "bordered"], [1, "product-head-block"], [4, "ngFor", "ngForOf"], [1, "underlined"], [1, "btn", "btn-lg", "btn-primary", 3, "routerLink"], [1, "btn", "btn-lg", "btn-primary"], [1, "product-items-block"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-minus"], ["type", "number", "name", "count", "id", "count", "min", "1", "max", "10", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "product-name-decor"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"]], template: function ProductCheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductCheckoutComponent_div_0_Template, 36, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCheckoutComponent_ng_template_1_Template, 5, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProducts.length)("ngIfElse", _r15);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".flexi-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 70vw;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n}\n\n.product-items-block[_ngcontent-%COMP%] {\n  width: 30vw;\n  display: flex;\n  justify-content: space-between;\n  border: 4px #2d5775 solid;\n  margin-bottom: 8px;\n  padding: 10px;\n}\n\n.product-head-block[_ngcontent-%COMP%] {\n  width: 30vw;\n  display: flex;\n  justify-content: space-between;\n  border: 4px #2d5775 solid;\n  margin-bottom: 8px;\n  padding: 10px;\n  border: none;\n}\n\n.bordered[_ngcontent-%COMP%]   .product-head-block[_ngcontent-%COMP%] {\n  width: 30vw;\n  display: flex;\n  justify-content: space-between;\n  border: 4px #2d5775 solid;\n  margin-bottom: 8px;\n  padding: 10px;\n  border: none;\n  width: 15vw;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  align-items: center;\n  width: 3vw;\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\ntd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n\n.bordered[_ngcontent-%COMP%] {\n  width: 30vw;\n  display: flex;\n  justify-content: space-between;\n  border: 4px #2d5775 solid;\n  margin-bottom: 8px;\n  padding: 10px;\n  width: auto;\n}\n\n.product-name-decor[_ngcontent-%COMP%] {\n  color: #ec732d;\n}\n\n.btn-outline-warning[_ngcontent-%COMP%] {\n  border-color: #00a8e1;\n}\n\n.underlined[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #00a8e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jaGVja291dC9wcm9kdWN0LWNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL21peGlucy5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQ1RFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRFFGOztBQUFBO0VDYkUsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VEVUEsWUFBQTtBQVFGOztBQUpFO0VDbkJBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFRGdCRSxZQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBUkE7RUFDRSxnQkFBQTtBQVdGOztBQVBFO0VBQ0UsbUJBQUE7QUFVSjs7QUFOQTtFQzNDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUR3Q0EsV0FBQTtBQWNGOztBQVhBO0VBQ0UsY0VoRHlCO0FGOEQzQjs7QUFYQTtFQUNFLHFCRXhEZ0I7QUZzRWxCOztBQVhBO0VBQ0UsZ0NBQUE7QUFjRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2hlY2tvdXQvcHJvZHVjdC1jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9taXhpbnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5mbGV4aS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNzB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pdGVtcy1ibG9jayB7XHJcbiAgQGluY2x1ZGUgdGFibGUtcm93LXN0eWxlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1oZWFkLWJsb2NrIHtcclxuICBAaW5jbHVkZSB0YWJsZS1yb3ctc3R5bGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYm9yZGVyZWQge1xyXG4gIC5wcm9kdWN0LWhlYWQtYmxvY2sge1xyXG4gICAgQGluY2x1ZGUgdGFibGUtcm93LXN0eWxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDE1dnc7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDN2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyZWQge1xyXG4gIEBpbmNsdWRlIHRhYmxlLXJvdy1zdHlsZTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnByb2R1Y3QtbmFtZS1kZWNvciB7XHJcbiAgY29sb3I6ICRjaGVja291dC1jYXJ0LWZvbnQtY29sb3I7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nIHtcclxuICBib3JkZXItY29sb3I6ICRzaXRlLWJsdWUtY29sb3I7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHNpdGUtYmx1ZS1jb2xvcjtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcInZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gdGFibGUtcm93LXN0eWxlIHtcclxuICB3aWR0aDogMzB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXI6IDRweCAjMmQ1Nzc1IHNvbGlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59IiwiJHNpdGUtYmx1ZS1jb2xvcjogIzAwYThlMTtcclxuJHNpdGUtYmxhY2stY29sb3I6ICMyODI3MjY7XHJcbiRzaXRlLWhlYWRlcjItZm9udC1jb2xvcjogIzJkNTc3NTtcclxuJHNpdGUtZ3JleS1iZy1jb2xvcjogI2VmZjBmMjtcclxuJGNoZWNrb3V0LWNhcnQtZm9udC1jb2xvcjogI2VjNzMyZDtcclxuXHJcbiRjaGVja291dC1jYXJ0LWJ1dHRvbi1jb2xvcjogI2VjNzMyZDtcclxuXHJcbiRzaXRlLWZvbnQtaDEtc2l6ZTogMTZweDtcclxuJHNpdGUtZm9udC1oMi1zaXplOiAxNHB4OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-checkout',
                templateUrl: './product-checkout.component.html',
                styleUrls: ['./product-checkout.component.scss']
            }]
    }], function () { return [{ type: _services_products_manage_products_service__WEBPACK_IMPORTED_MODULE_2__["ManageProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ProductComponent_div_6_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_6_p_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.addToCart(ctx_r32.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_6_p_1_Template, 3, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r26.product.selectedQuantity > 0))("ngIfElse", _r27);
} }
function ProductComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Added to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Out Of Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductComponent {
    constructor() {
        this.addProductToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    addToCart(product) {
        product.addedToCart = true;
        this.addProductToCart.emit(product);
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, outputs: { addProductToCart: "addProductToCart" }, decls: 11, vars: 7, consts: [[1, "card"], [3, "src", "alt"], [1, "price"], [4, "ngIf", "ngIfElse"], ["productAdded", ""], ["outOfStock", ""], [1, "addToCart", 3, "click"], [1, "addedToCart"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "outOfStock"], ["aria-hidden", "true", 1, "fa", "fa-meh-o"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductComponent_div_6_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductComponent_ng_template_7_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductComponent_ng_template_9_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.thumbNailPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.product.price, " ", ctx.product.currency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.quantity > 0)("ngIfElse", _r29);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.price[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 22px;\n}\n\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  padding: 12px;\n  color: white;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 18px;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transition: 0.2s all ease-in-out;\n  box-shadow: 0 11px 19px 0 rgba(4, 31, 99, 0.15);\n  transform: translateY(-4px);\n}\n\n.addToCart[_ngcontent-%COMP%] {\n  background-color: #00a8e1;\n}\n\n.addedToCart[_ngcontent-%COMP%] {\n  background-color: #f6b73c;\n  color: black !important;\n}\n\n.outOfStock[_ngcontent-%COMP%] {\n  background-color: yellowgreen;\n}\n\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQ3JDZ0I7QURvQ2xCOztBQUlBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5jYXJkIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAuMnMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDAgMTFweCAxOXB4IDAgcmdiYSg0LCAzMSwgOTksIC4xNSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG59XHJcblxyXG4uYWRkVG9DYXJ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2l0ZS1ibHVlLWNvbG9yO1xyXG59XHJcblxyXG4uYWRkZWRUb0NhcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmI3M2M7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRPZlN0b2NrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxufVxyXG5cclxuLmNhcmQgYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuIiwiJHNpdGUtYmx1ZS1jb2xvcjogIzAwYThlMTtcclxuJHNpdGUtYmxhY2stY29sb3I6ICMyODI3MjY7XHJcbiRzaXRlLWhlYWRlcjItZm9udC1jb2xvcjogIzJkNTc3NTtcclxuJHNpdGUtZ3JleS1iZy1jb2xvcjogI2VmZjBmMjtcclxuJGNoZWNrb3V0LWNhcnQtZm9udC1jb2xvcjogI2VjNzMyZDtcclxuXHJcbiRjaGVja291dC1jYXJ0LWJ1dHRvbi1jb2xvcjogI2VjNzMyZDtcclxuXHJcbiRzaXRlLWZvbnQtaDEtc2l6ZTogMTZweDtcclxuJHNpdGUtZm9udC1oMi1zaXplOiAxNHB4OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addProductToCart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/api/api-call.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/api/api-call.service.ts ***!
  \**************************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiCallService {
    constructor(http) {
        this.http = http;
    }
    getApiCall(url) {
        return this.http.get(url);
    }
    postApiCall(url, data) {
        return this.http.post(url, data);
    }
    putApiCall(url, data) {
        return this.http.put(url, data);
    }
    deleteApiCall(url) {
        return this.http.delete(url);
    }
}
ApiCallService.ɵfac = function ApiCallService_Factory(t) { return new (t || ApiCallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiCallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiCallService, factory: ApiCallService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiCallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/products/manage-products.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/products/manage-products.service.ts ***!
  \**************************************************************/
/*! exports provided: ManageProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsService", function() { return ManageProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/services/storage/storage.service.ts");




/**
 *
 *
 * @export
 * @class ManageProductsService
 */
class ManageProductsService {
    constructor(store) {
        this.store = store;
        this.productSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.cast = this.productSubject.asObservable();
    }
    /**
     *
     *
     * @param {number} count
     * @memberof ManageProductsService
     */
    updateCartCount(count) {
        this.productSubject.next(count);
        this.updateCartCountToSs(count);
    }
    /**
     *
     *
     * @param {*} count
     * @memberof ManageProductsService
     */
    updateCartCountToSs(count) {
        this.store.updateCartCount(count);
    }
    getCarCount() {
        return this.store.getCartCount();
    }
    getUpdatedProducts() {
        return this.store.getProducts();
    }
    storeProducts(products) {
        return this.store.storeProducts(products);
    }
    addToCart(product) {
        product.quantity = product.quantity - 1;
        product.selectedQuantity = product.selectedQuantity + 1;
        const cartCount = this.getCarCount() + 1;
        this.updateCartCount(cartCount);
        this.store.updateStore(product);
    }
    removeFromCart(product) {
        product.addedToCart = false;
        product.quantity = product.quantity + 1;
        product.selectedQuantity = product.selectedQuantity - 1;
        const cartCount = this.getCarCount() - 1;
        this.updateCartCount(cartCount);
        this.store.updateStore(product);
    }
}
ManageProductsService.ɵfac = function ManageProductsService_Factory(t) { return new (t || ManageProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
ManageProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManageProductsService, factory: ManageProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/storage/sessionstorageKeys.ts":
/*!********************************************************!*\
  !*** ./src/app/services/storage/sessionstorageKeys.ts ***!
  \********************************************************/
/*! exports provided: SessionstorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionstorageKeys", function() { return SessionstorageKeys; });
const SessionstorageKeys = {
    dbKey: 'db',
    cartCountKey: 'cartCount'
};


/***/ }),

/***/ "./src/app/services/storage/storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sessionstorageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionstorageKeys */ "./src/app/services/storage/sessionstorageKeys.ts");
/* harmony import */ var _constants_character_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../constants/character.constants */ "./src/app/constants/character.constants.ts");




class StorageService {
    constructor() {
        this.ssKeys = _sessionstorageKeys__WEBPACK_IMPORTED_MODULE_1__["SessionstorageKeys"];
        this.characterConstants = _constants_character_constants__WEBPACK_IMPORTED_MODULE_2__["CharacterConstants"];
    }
    updateStore(product) {
        this.products = this.getProducts();
        this.products.forEach(obj => {
            if (obj.id === product.id) {
                obj.selectedQuantity = product.selectedQuantity;
                obj.quantity = product.quantity;
                obj.addedToCart = product.addedToCart;
            }
        });
        sessionStorage.setItem(this.ssKeys.dbKey, JSON.stringify(this.products));
    }
    getProducts() {
        return JSON.parse(sessionStorage.getItem(this.ssKeys.dbKey) || this.characterConstants.emptyArrayStr);
    }
    storeProducts(products) {
        sessionStorage.setItem(this.ssKeys.dbKey, JSON.stringify(products));
    }
    updateCartCount(countOfProducts) {
        sessionStorage.setItem(this.ssKeys.cartCountKey, countOfProducts);
    }
    getCartCount() {
        return +(sessionStorage.getItem(this.ssKeys.cartCountKey) || null);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/utils/range-slider/range-slider.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/utils/range-slider/range-slider.component.ts ***!
  \**************************************************************/
/*! exports provided: RangeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSliderComponent", function() { return RangeSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_constants_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/global.constants */ "./src/app/constants/global.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class RangeSliderComponent {
    constructor() {
        this.GlobalConstants = src_app_constants_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"];
        this.range = 1000;
        this.myRange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    updateRange(range) {
        this.myRange.emit(range);
    }
}
RangeSliderComponent.ɵfac = function RangeSliderComponent_Factory(t) { return new (t || RangeSliderComponent)(); };
RangeSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangeSliderComponent, selectors: [["app-range-slider"]], outputs: { myRange: "myRange" }, decls: 6, vars: 3, consts: [[1, "slidecontainer"], ["type", "range", "min", "100", "max", "1000", "value", "1000", 1, "slider", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function RangeSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RangeSliderComponent_Template_input_ngModelChange_1_listener($event) { return ctx.range = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RangeSliderComponent_Template_button_click_4_listener() { return ctx.updateRange(ctx.range); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(100 to ", ctx.range, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.GlobalConstants.button.apply, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 15px;\n  border-radius: 5px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #00a8e1;\n  cursor: pointer;\n}\n\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #00a8e1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNwQmdCO0VEcUJoQixlQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJDNUJnQjtFRDZCaEIsZUFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLnNsaWRlciB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxufVxyXG5cclxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogJHNpdGUtYmx1ZS1jb2xvcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogJHNpdGUtYmx1ZS1jb2xvcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiJHNpdGUtYmx1ZS1jb2xvcjogIzAwYThlMTtcclxuJHNpdGUtYmxhY2stY29sb3I6ICMyODI3MjY7XHJcbiRzaXRlLWhlYWRlcjItZm9udC1jb2xvcjogIzJkNTc3NTtcclxuJHNpdGUtZ3JleS1iZy1jb2xvcjogI2VmZjBmMjtcclxuJGNoZWNrb3V0LWNhcnQtZm9udC1jb2xvcjogI2VjNzMyZDtcclxuXHJcbiRjaGVja291dC1jYXJ0LWJ1dHRvbi1jb2xvcjogI2VjNzMyZDtcclxuXHJcbiRzaXRlLWZvbnQtaDEtc2l6ZTogMTZweDtcclxuJHNpdGUtZm9udC1oMi1zaXplOiAxNHB4OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-range-slider',
                templateUrl: './range-slider.component.html',
                styleUrls: ['./range-slider.component.scss']
            }]
    }], function () { return []; }, { myRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ravikumarkubusada.github.io-eCommerce\eCommerce-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map