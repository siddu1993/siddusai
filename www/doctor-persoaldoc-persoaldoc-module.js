(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-persoaldoc-persoaldoc-module"],{

/***/ "./src/app/doctor/persoaldoc/persoaldoc.module.ts":
/*!********************************************************!*\
  !*** ./src/app/doctor/persoaldoc/persoaldoc.module.ts ***!
  \********************************************************/
/*! exports provided: PersoaldocPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersoaldocPageModule", function() { return PersoaldocPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _persoaldoc_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./persoaldoc.page */ "./src/app/doctor/persoaldoc/persoaldoc.page.ts");








var routes = [
    {
        path: '',
        component: _persoaldoc_page__WEBPACK_IMPORTED_MODULE_7__["PersoaldocPage"]
    }
];
var PersoaldocPageModule = /** @class */ (function () {
    function PersoaldocPageModule() {
    }
    PersoaldocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_persoaldoc_page__WEBPACK_IMPORTED_MODULE_7__["PersoaldocPage"]]
        })
    ], PersoaldocPageModule);
    return PersoaldocPageModule;
}());



/***/ }),

/***/ "./src/app/doctor/persoaldoc/persoaldoc.page.html":
/*!********************************************************!*\
  !*** ./src/app/doctor/persoaldoc/persoaldoc.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\" >\n            <ion-icon name=\"arrow-back\"  ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    <ion-title>Doctors Info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n    <ion-card class=\"cardsize\">\n\n        <ion-item lines=\"none\">\n          <h6 slot=\"start\">Doctors id</h6>\n          <h6 slot=\"end\">{{userData.docter_id}}  </h6>\n        </ion-item>\n      \n        <ion-item class=\"activated\" lines=\"none\">\n          <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n          <h6 slot=\"start\">Name</h6>\n          <h6 slot=\"end\">{{userData.docter_name}} </h6>\n        </ion-item>\n  \n        <ion-item lines=\"none\">\n          <h6 slot=\"start\">Gender</h6>\n          <h6 slot=\"end\">{{userData.sex}}  </h6>\n        </ion-item>\n  \n        <ion-item class=\"activated\" lines=\"none\">\n          <h6 slot=\"start\">Speciality</h6>\n          <h6 slot=\"end\">{{userData.speciality}}  </h6>\n        </ion-item>\n\n        <ion-item lines=\"none\" >\n          <h6 slot=\"start\">Email id</h6>\n          <h6 slot=\"end\">  {{userData.email}}</h6>\n        </ion-item>\n\n        <ion-item class=\"activated\">\n          <h6 slot=\"start\">Clinic Address</h6>\n          <h6 slot=\"end\"> {{userData.clinic_address}}</h6>\n        </ion-item>\n        <ion-item  lines=\"none\">\n          <h6 slot=\"start\">State</h6>\n          <h6 slot=\"end\">{{userData.state}}    </h6>\n        </ion-item>\n\n    \n\n        <ion-item class=\"activated\">\n          <h6 slot=\"start\" >Hospital</h6>\n          <h6 slot=\"end\">{{userData.hospital}} </h6>\n        </ion-item>\n        <ion-item  lines=\"none\">\n          <u><h6 slot=\"start\" (click)=\"edit()\">Edit</h6></u>\n        \n        </ion-item>\n      \n      </ion-card>\n      <div text-center>\n        <h6 text-center>Update Patient's Record</h6>\n      </div>\n <ion-item>\n   <ion-label>\n     Patient's Id :\n   </ion-label>\n   <ion-input [(ngModel)]=\"phone_no\" placeholder=\"phone no\">\n\n   </ion-input>\n   <ion-button (click)=\"search()\">Search</ion-button>\n </ion-item>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/doctor/persoaldoc/persoaldoc.page.scss":
/*!********************************************************!*\
  !*** ./src/app/doctor/persoaldoc/persoaldoc.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-buttons {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL3BlcnNvYWxkb2MvRDpcXG5ld2FwcG9sb1xcc2lkZHVzYWkuZ2l0XFx0cnVuay9zcmNcXGFwcFxcZG9jdG9yXFxwZXJzb2FsZG9jXFxwZXJzb2FsZG9jLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBRUUsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0kseUJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3IvcGVyc29hbGRvYy9wZXJzb2FsZG9jLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTM4RDc1IWltcG9ydGFudCA7XHJcbiAgICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLWJ1dHRvbnN7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgIFxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/doctor/persoaldoc/persoaldoc.page.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor/persoaldoc/persoaldoc.page.ts ***!
  \******************************************************/
/*! exports provided: PersoaldocPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersoaldocPage", function() { return PersoaldocPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _docedit_docedit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../docedit/docedit.page */ "./src/app/doctor/docedit/docedit.page.ts");






var PersoaldocPage = /** @class */ (function () {
    function PersoaldocPage(modalController, alertController, route, auth, menu) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.route = route;
        this.auth = auth;
        this.menu = menu;
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.docter_phone = this.userData.docter_phone;
    }
    PersoaldocPage.prototype.ngOnInit = function () {
    };
    PersoaldocPage.prototype.search = function () {
        var _this = this;
        this.auth.patientcheck({ phone_no: this.phone_no }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.name = res.response[0];
                    localStorage.setItem("full_name", _this.name.full_name);
                    localStorage.setItem("patient_id", _this.name.patient_id);
                    _this.route.navigateByUrl("/chckpdetails");
                }
                else {
                    _this.auth.presentToast("patient not exits ");
                }
            }
        }, function () {
        });
    };
    PersoaldocPage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _docedit_docedit_page__WEBPACK_IMPORTED_MODULE_5__["DoceditPage"],
                            componentProps: { value: this.userData }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.getdata();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PersoaldocPage.prototype.getdata = function () {
        var _this = this;
        localStorage.setItem('token', "res.response.token");
        // location.reload();
        this.auth.presentLoading();
        this.auth.getdoctor({ docter_id: this.userData.docter_id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.userData = res.response[0];
                    // location.reload();
                    // this.route.navigateByUrl('/list');
                }
                else if (res.response == "") {
                    _this.auth.presentToast("server failed");
                }
                else if (res.status == "error") {
                    _this.auth.presentToast("server failed");
                }
            }
        }, (function (err) {
            _this.auth.presentToast("Server failed");
        }));
    };
    PersoaldocPage.prototype.back = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'logout!',
                            message: 'do you want to logout?',
                            buttons: [
                                {
                                    text: 'no',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'yes',
                                    handler: function () {
                                        location.reload();
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PersoaldocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-persoaldoc',
            template: __webpack_require__(/*! ./persoaldoc.page.html */ "./src/app/doctor/persoaldoc/persoaldoc.page.html"),
            styles: [__webpack_require__(/*! ./persoaldoc.page.scss */ "./src/app/doctor/persoaldoc/persoaldoc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], PersoaldocPage);
    return PersoaldocPage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-persoaldoc-persoaldoc-module.js.map