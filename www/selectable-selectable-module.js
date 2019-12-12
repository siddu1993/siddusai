(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selectable-selectable-module"],{

/***/ "./src/app/selectable/selectable.module.ts":
/*!*************************************************!*\
  !*** ./src/app/selectable/selectable.module.ts ***!
  \*************************************************/
/*! exports provided: SelectablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectablePageModule", function() { return SelectablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectable_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectable.page */ "./src/app/selectable/selectable.page.ts");








var routes = [
    {
        path: '',
        component: _selectable_page__WEBPACK_IMPORTED_MODULE_7__["SelectablePage"]
    }
];
var SelectablePageModule = /** @class */ (function () {
    function SelectablePageModule() {
    }
    SelectablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_selectable_page__WEBPACK_IMPORTED_MODULE_7__["SelectablePage"]]
        })
    ], SelectablePageModule);
    return SelectablePageModule;
}());



/***/ }),

/***/ "./src/app/selectable/selectable.page.html":
/*!*************************************************!*\
  !*** ./src/app/selectable/selectable.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"close()\" >\n          <ion-icon name=\"close\"  ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  <ion-toolbar>\n    <ion-title>Test Name</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Test Name</ion-label>\n    <ionic-selectable\n      [(ngModel)]=\"port\"\n      [items]=\"testname\"\n      itemValueField=\"id\"\n      itemTextField=\"name\"\n      [canSearch]=\"true\"\n      (onChange)=\"portChange($event)\">\n    </ionic-selectable>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Type Of The test</ion-label>\n    <ionic-selectable\n      [(ngModel)]=\"port1\"\n      [items]=\"testname\"\n      [isMultiple]=\"true\"\n      itemValueField=\"id\"\n      itemTextField=\"name\"\n      [canSearch]=\"true\"\n      (onChange)=\"portChange1($event)\">\n    </ionic-selectable>\n  </ion-item>\n  <ion-button (click)=\"next()\"  fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/selectable/selectable.page.scss":
/*!*************************************************!*\
  !*** ./src/app/selectable/selectable.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGFibGUvc2VsZWN0YWJsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/selectable/selectable.page.ts":
/*!***********************************************!*\
  !*** ./src/app/selectable/selectable.page.ts ***!
  \***********************************************/
/*! exports provided: SelectablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectablePage", function() { return SelectablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var SelectablePage = /** @class */ (function () {
    function SelectablePage(nav, route, auth) {
        this.nav = nav;
        this.route = route;
        this.auth = auth;
        this.search();
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' },
            { id: 4, name: 'pokai' },
            { id: 5, name: 'kladivostok' },
            { id: 6, name: 'lavlakhi' }
        ];
    }
    SelectablePage.prototype.portChange = function (event) {
        this.comp(event.value.id);
        console.log('port:', event.value);
    };
    SelectablePage.prototype.portChange1 = function (event) {
        console.log('port:', event.value);
    };
    SelectablePage.prototype.close = function () {
        this.nav.pop();
    };
    SelectablePage.prototype.next = function () {
        this.route.navigateByUrl('/chckpdetails');
    };
    SelectablePage.prototype.search = function () {
        var _this = this;
        this.auth.lab_tests().subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.testname = res.response;
                }
            }
        }, function () {
            _this.auth.presentToast("Login failed, Login detils not exits ");
        });
    };
    SelectablePage.prototype.comp = function (id) {
        var _this = this;
        this.auth.findbytestid({ relation: id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.testname = res.response;
                }
            }
        }, function () {
            _this.auth.presentToast("Login failed, Login detils not exits ");
        });
    };
    SelectablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selectable',
            template: __webpack_require__(/*! ./selectable.page.html */ "./src/app/selectable/selectable.page.html"),
            styles: [__webpack_require__(/*! ./selectable.page.scss */ "./src/app/selectable/selectable.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SelectablePage);
    return SelectablePage;
}());



/***/ })

}]);
//# sourceMappingURL=selectable-selectable-module.js.map