(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personslist-personslist-module"],{

/***/ "./src/app/personslist/personslist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/personslist/personslist.module.ts ***!
  \***************************************************/
/*! exports provided: PersonslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonslistPageModule", function() { return PersonslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personslist.page */ "./src/app/personslist/personslist.page.ts");







var routes = [
    {
        path: '',
        component: _personslist_page__WEBPACK_IMPORTED_MODULE_6__["PersonslistPage"]
    }
];
var PersonslistPageModule = /** @class */ (function () {
    function PersonslistPageModule() {
    }
    PersonslistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_personslist_page__WEBPACK_IMPORTED_MODULE_6__["PersonslistPage"]]
        })
    ], PersonslistPageModule);
    return PersonslistPageModule;
}());



/***/ }),

/***/ "./src/app/personslist/personslist.page.html":
/*!***************************************************!*\
  !*** ./src/app/personslist/personslist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" class=\"menu\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n      <ion-title>Persons</ion-title>\n  \n    </ion-toolbar>\n  \n   \n  \n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n \n      <ion-card class=\"cardsize\" *ngFor=\"let userData of userData\">\n        <ion-item lines=\"none\">\n          <h6 slot=\"start\">Patient id</h6>\n          <h6 slot=\"end\">{{userData.patient_id}}</h6>\n        </ion-item>\n      \n        <ion-item class=\"activated\" lines=\"none\">\n          <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n          <h6 slot=\"start\">Name</h6>\n          <small slot=\"end\">{{ userData.name}}</small>\n        </ion-item>\n  \n        <ion-item lines=\"none\">\n          <h6 slot=\"start\">Age</h6>\n          <h6 slot=\"end\">{{userData.age}}</h6>\n        </ion-item>\n  \n        <ion-item class=\"activated\" lines=\"none\">\n          <h6 slot=\"start\">Gender</h6>\n          <h6 slot=\"end\">{{ userData.gender}} </h6>\n        </ion-item>\n    \n       \n       \n      \n      \n        <ion-item lines=\"none\">\n  \n  \n            <ion-text (click)=\"edit(userData)\" slot=\"start\" color=\"primary\">\n                <h6><u>Edit</u></h6>\n              </ion-text>\n              <ion-text (click)=\"childremove(userData)\" slot=\"end\" color=\"primary\">\n                <h6><u>delete</u></h6>\n              </ion-text>\n              \n         \n        </ion-item>\n      </ion-card>\n\n      \n  \n   \n  </ion-list>\n  \n  \n  \n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/personslist/personslist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/personslist/personslist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important; }\n\nion-menu-button {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uc2xpc3QvRDpcXG5ld2FwcG9sb1xcYXBwb2xvL3NyY1xcYXBwXFxwZXJzb25zbGlzdFxccGVyc29uc2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbnNsaXN0L3BlcnNvbnNsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTM4RDc1IWltcG9ydGFudCA7XHJcbiAgICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuaW9uLWJ1dHRvbnN7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgICBcclxufVxyXG5pb24tbWVudS1idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/personslist/personslist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/personslist/personslist.page.ts ***!
  \*************************************************/
/*! exports provided: PersonslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonslistPage", function() { return PersonslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editchild_editchild_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editchild/editchild.page */ "./src/app/editchild/editchild.page.ts");






var PersonslistPage = /** @class */ (function () {
    function PersonslistPage(alertController, modalController, nav, auth, formBuilder) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.patient_id = localStorage.getItem('patient_id');
        this.list();
    }
    PersonslistPage.prototype.ngOnInit = function () {
    };
    PersonslistPage.prototype.list = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.findchild({ patient_id: this.patient_id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.userData = res.response;
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            alert("Login failed, Login detils not exits ");
        });
    };
    PersonslistPage.prototype.edit = function (obj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _editchild_editchild_page__WEBPACK_IMPORTED_MODULE_5__["EditchildPage"],
                            componentProps: { value: obj }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.list();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PersonslistPage.prototype.childremove = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'remove!',
                            message: 'do you want to remove?',
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
                                        _this.remove(item);
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
    PersonslistPage.prototype.remove = function (item) {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.childremove({ _id: item._id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.list();
                    _this.auth.presentToast("child person removed");
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("server failed");
        });
    };
    PersonslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personslist',
            template: __webpack_require__(/*! ./personslist.page.html */ "./src/app/personslist/personslist.page.html"),
            styles: [__webpack_require__(/*! ./personslist.page.scss */ "./src/app/personslist/personslist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PersonslistPage);
    return PersonslistPage;
}());



/***/ })

}]);
//# sourceMappingURL=personslist-personslist-module.js.map