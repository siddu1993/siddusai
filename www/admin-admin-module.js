(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "./src/app/admin/admin.page.ts");







var routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]
    }
];
var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
        })
    ], AdminPageModule);
    return AdminPageModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.page.html":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>admin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n        <ion-card>\n    \n        \n    \n    <ion-item>\n        <small > <ion-label position=\"floating\">Main</ion-label></small>\n    \n    \n    <ion-select  [(ngModel)]=\"mname\" (ionChange)=\"change($event)\">\n    <ion-select-option *ngFor=\"let obj of main\"  value=\"{{obj._id}}\">{{obj.name}}  </ion-select-option>\n   \n    </ion-select>\n    </ion-item>\n    <ion-item>\n     <ion-label position=\"floating\">Sub</ion-label>\n    \n    <ion-input [(ngModel)]=\"name\" ></ion-input>\n   \n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Bio ref Range</ion-label>\n     \n     <ion-input [(ngModel)]=\"range\" ></ion-input>\n    \n     </ion-item>\n    <ion-item>\n        <ion-label slot=\"start\" position=\"floating\">Show in the listing</ion-label>\n\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"che\" (ionChange)=\"check($event)\"></ion-checkbox>\n\n    </ion-item>\n  \n    <ion-button (click)=\"save()\"  fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin/admin.page.scss":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin.page.ts":
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AdminPage = /** @class */ (function () {
    function AdminPage(nav, auth, formBuilder, model) {
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.model = model;
        this.ch = false;
        this.getmain();
    }
    AdminPage.prototype.ngOnInit = function () {
    };
    AdminPage.prototype.getmain = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.getmain().subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.main = res.response;
                    console.log("21", _this.name);
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("server failed, server details not exits ");
        });
    };
    AdminPage.prototype.check = function (e) {
        this.ch = e.detail.checked;
    };
    AdminPage.prototype.change = function (e) {
        console.log(e);
        this.relation = e.detail.value;
    };
    AdminPage.prototype.save = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.testcreate({ relation: this.relation, name: this.name, condition: this.ch, range: this.range }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.main = res.response;
                    //this.nav.pop();
                    _this.auth.presentToast("sub test added successfully");
                    console.log("21", _this.name);
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("server details not exits ");
        });
    };
    AdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.page.html */ "./src/app/admin/admin.page.html"),
            styles: [__webpack_require__(/*! ./admin.page.scss */ "./src/app/admin/admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AdminPage);
    return AdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map