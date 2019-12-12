(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["labs-labinformation-labinformation-module"],{

/***/ "./src/app/labs/labinformation/labinformation.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/labs/labinformation/labinformation.module.ts ***!
  \**************************************************************/
/*! exports provided: LabinformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabinformationPageModule", function() { return LabinformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _labinformation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labinformation.page */ "./src/app/labs/labinformation/labinformation.page.ts");







var routes = [
    {
        path: '',
        component: _labinformation_page__WEBPACK_IMPORTED_MODULE_6__["LabinformationPage"]
    }
];
var LabinformationPageModule = /** @class */ (function () {
    function LabinformationPageModule() {
    }
    LabinformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_labinformation_page__WEBPACK_IMPORTED_MODULE_6__["LabinformationPage"]]
        })
    ], LabinformationPageModule);
    return LabinformationPageModule;
}());



/***/ }),

/***/ "./src/app/labs/labinformation/labinformation.page.html":
/*!**************************************************************!*\
  !*** ./src/app/labs/labinformation/labinformation.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\" >\n              <ion-icon name=\"arrow-back\"  ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-title>Lab Information</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n  \n  <ion-content>\n\n    \n      <ion-card class=\"cardsize\">\n  \n          <ion-item lines=\"none\">\n            <h6 slot=\"start\">Lab Id</h6>\n            <h6 slot=\"end\">{{userData.lab_id}}  </h6>\n          </ion-item>\n        \n          <ion-item class=\"activated\" lines=\"none\">\n            <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n            <h6 slot=\"start\">Name</h6>\n            <h6 slot=\"end\"> {{userData.name}}   </h6>\n          </ion-item>\n    \n          <ion-item lines=\"none\">\n            <h6 slot=\"start\">Phone no</h6>\n            <h6 slot=\"end\">{{userData.lab_phone}}  </h6>\n          </ion-item>\n    \n          <ion-item class=\"activated\" lines=\"none\">\n            <h6 slot=\"start\">Address</h6>\n            <h6 slot=\"end\">   {{userData.address}}</h6>\n          </ion-item>\n  \n          <ion-item lines=\"none\">\n            <h6 slot=\"start\">City</h6>\n            <h6 slot=\"end\"> {{userData.city}} </h6>\n          </ion-item>\n          <ion-item  class=\"activated\" lines=\"none\">\n            <h6 slot=\"start\">State</h6>\n            <h6 slot=\"end\">{{userData.state}} </h6>\n          </ion-item>\n        \n          \n          <ion-item   lines=\"none\">\n            \n            <h6 slot=\"start\" (click)=\"edit()\"><u>Edit</u></h6>\n          </ion-item>\n          \n  \n      \n  \n        \n        </ion-card>\n        <div>\n          <h6 center>Update Patient's Record</h6>\n        </div>\n   <ion-item>\n     <ion-label>\n       Patient's Id :\n     </ion-label>\n     <ion-input [(ngModel)]=\"phone_no\" placeholder=\"phone_no\">\n  \n     </ion-input>\n     <ion-button (click)=\"search()\">Search</ion-button>\n   </ion-item>\n    \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/labs/labinformation/labinformation.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/labs/labinformation/labinformation.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFicy9sYWJpbmZvcm1hdGlvbi9EOlxcbmV3YXBwb2xvXFxhcHBvbG8vc3JjXFxhcHBcXGxhYnNcXGxhYmluZm9ybWF0aW9uXFxsYWJpbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFicy9sYWJpbmZvcm1hdGlvbi9sYWJpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59XHJcbi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/labs/labinformation/labinformation.page.ts":
/*!************************************************************!*\
  !*** ./src/app/labs/labinformation/labinformation.page.ts ***!
  \************************************************************/
/*! exports provided: LabinformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabinformationPage", function() { return LabinformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editlab_editlab_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editlab/editlab.page */ "./src/app/labs/editlab/editlab.page.ts");






var LabinformationPage = /** @class */ (function () {
    function LabinformationPage(alertController, modalController, route, auth, menu) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.route = route;
        this.auth = auth;
        this.menu = menu;
    }
    LabinformationPage.prototype.ngOnInit = function () {
        this.userData = JSON.parse(localStorage.getItem("userData"));
    };
    LabinformationPage.prototype.search = function () {
        var _this = this;
        this.auth.patientcheck({ phone_no: this.phone_no }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.name = res.response[0].full_name;
                    _this.patient_id = res.response[0].patient_id;
                    localStorage.setItem("full_name", _this.name);
                    localStorage.setItem("patient_id", _this.patient_id);
                    _this.route.navigateByUrl("/labpatienthist");
                    //labtestupdate
                }
            }
        }, function () {
            swal("server failed, server detils not exits ");
        });
    };
    LabinformationPage.prototype.login = function () {
        var _this = this;
        localStorage.setItem('token', "res.response.token");
        // location.reload();
        this.auth.presentLoading();
        this.auth.labdata({ lab_id: this.userData.lab_id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    var a = res.response;
                    localStorage.setItem("userData", JSON.stringify(a[0]));
                    _this.userData = JSON.parse(localStorage.getItem("userData"));
                }
                // location.reload();
                // this.route.navigateByUrl('/list');
                else if (res.status == "error") {
                    _this.auth.presentToast("login failed");
                }
            }
        }, function () {
            _this.auth.presentToast("Server failed");
        });
    };
    LabinformationPage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _editlab_editlab_page__WEBPACK_IMPORTED_MODULE_5__["EditlabPage"],
                            componentProps: { value: '' }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.login();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LabinformationPage.prototype.back = function () {
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
    LabinformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labinformation',
            template: __webpack_require__(/*! ./labinformation.page.html */ "./src/app/labs/labinformation/labinformation.page.html"),
            styles: [__webpack_require__(/*! ./labinformation.page.scss */ "./src/app/labs/labinformation/labinformation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], LabinformationPage);
    return LabinformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=labs-labinformation-labinformation-module.js.map