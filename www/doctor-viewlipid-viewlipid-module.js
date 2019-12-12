(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-viewlipid-viewlipid-module"],{

/***/ "./src/app/doctor/viewlipid/viewlipid.module.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor/viewlipid/viewlipid.module.ts ***!
  \******************************************************/
/*! exports provided: ViewlipidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewlipidPageModule", function() { return ViewlipidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewlipid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewlipid.page */ "./src/app/doctor/viewlipid/viewlipid.page.ts");







var routes = [
    {
        path: '',
        component: _viewlipid_page__WEBPACK_IMPORTED_MODULE_6__["ViewlipidPage"]
    }
];
var ViewlipidPageModule = /** @class */ (function () {
    function ViewlipidPageModule() {
    }
    ViewlipidPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewlipid_page__WEBPACK_IMPORTED_MODULE_6__["ViewlipidPage"]]
        })
    ], ViewlipidPageModule);
    return ViewlipidPageModule;
}());



/***/ }),

/***/ "./src/app/doctor/viewlipid/viewlipid.page.html":
/*!******************************************************!*\
  !*** ./src/app/doctor/viewlipid/viewlipid.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\" >\n            <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    <ion-title>Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card class=\"cardsize\" *ngFor=\"let item of result.data\">\n    <ion-item lines=\"none\">\n      <h6 slot=\"start\">{{item.name}}</h6>\n      <h6 slot=\"end\">{{item.unit}}</h6>\n    </ion-item>\n  \n    <ion-item class=\"activated\" lines=\"none\">\n      <h6 slot=\"start\">method</h6>\n      <small slot=\"end\"><p>{{item.method}}</p></small>\n    </ion-item>\n\n     <!--   <ion-item lines=\"none\">\n      <h6 slot=\"start\">Lab Test</h6>\n      <h6 slot=\"end\">{{item.test_name}}</h6>\n    </ion-item>\n\n    <ion-item class=\"activated\" lines=\"none\">\n      <h6 slot=\"start\">Result</h6>\n     <u slot=\"end\" (click)=\"view(item)\"> <h6 >View</h6></u>\n    </ion-item>-->\n  \n  \n  </ion-card>  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/doctor/viewlipid/viewlipid.page.scss":
/*!******************************************************!*\
  !*** ./src/app/doctor/viewlipid/viewlipid.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci92aWV3bGlwaWQvdmlld2xpcGlkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/doctor/viewlipid/viewlipid.page.ts":
/*!****************************************************!*\
  !*** ./src/app/doctor/viewlipid/viewlipid.page.ts ***!
  \****************************************************/
/*! exports provided: ViewlipidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewlipidPage", function() { return ViewlipidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");





var ViewlipidPage = /** @class */ (function () {
    function ViewlipidPage(alertController, activatedRoute, nav, route, auth) {
        var _this = this;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.nav = nav;
        this.route = route;
        this.auth = auth;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.result = JSON.parse(params['test_id']);
            //this.getval(this.id);
            console.log("hi test_id", _this.result); // Print the parameter to the console. 
        });
    }
    ViewlipidPage.prototype.ngOnInit = function () {
    };
    ViewlipidPage.prototype.getval = function (e) {
        var _this = this;
        this.auth.readingedit({ report_id: e }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.result = res.response[0].data;
                    //   this.auth.presentToast("");
                    console.log("21", res.response);
                }
            }
        }, function () {
        });
    };
    ViewlipidPage.prototype.back = function () {
        this.nav.pop();
    };
    ViewlipidPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewlipid',
            template: __webpack_require__(/*! ./viewlipid.page.html */ "./src/app/doctor/viewlipid/viewlipid.page.html"),
            styles: [__webpack_require__(/*! ./viewlipid.page.scss */ "./src/app/doctor/viewlipid/viewlipid.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ViewlipidPage);
    return ViewlipidPage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-viewlipid-viewlipid-module.js.map