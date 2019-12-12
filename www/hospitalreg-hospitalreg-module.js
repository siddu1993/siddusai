(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospitalreg-hospitalreg-module"],{

/***/ "./src/app/hospitalreg/hospitalreg.module.ts":
/*!***************************************************!*\
  !*** ./src/app/hospitalreg/hospitalreg.module.ts ***!
  \***************************************************/
/*! exports provided: HospitalregPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalregPageModule", function() { return HospitalregPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hospitalreg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hospitalreg.page */ "./src/app/hospitalreg/hospitalreg.page.ts");







var routes = [
    {
        path: '',
        component: _hospitalreg_page__WEBPACK_IMPORTED_MODULE_6__["HospitalregPage"]
    }
];
var HospitalregPageModule = /** @class */ (function () {
    function HospitalregPageModule() {
    }
    HospitalregPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hospitalreg_page__WEBPACK_IMPORTED_MODULE_6__["HospitalregPage"]]
        })
    ], HospitalregPageModule);
    return HospitalregPageModule;
}());



/***/ }),

/***/ "./src/app/hospitalreg/hospitalreg.page.html":
/*!***************************************************!*\
  !*** ./src/app/hospitalreg/hospitalreg.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\" >\n              <ion-icon name=\"arrow-back\"  ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-title>Hospital Registration</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <form [formGroup]=\"validations_form\" >\n  \n      <ion-card>\n  \n          <ion-grid>\n             \n          \n            <ion-row>   \n            <ion-col size=\"6\">\n             \n              <ion-item>\n                <ion-label  position=\"floating\" ><small>name</small></ion-label>\n                <ion-input formControlName=\"name\"  ></ion-input>\n                \n              </ion-item>\n              <ng-container *ngFor=\"let validation of validation_messages.name\">\n                  <div class=\"error-message\" *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n                </ion-col>\n\n          </ion-row>\n         \n            <ion-row>\n                        <ion-col size=\"6\">\n                     \n                 \n                          <ion-item>\n                            <ion-label position=\"floating\" ><small>Email Id</small></ion-label>\n                            <ion-input   formControlName=\"email\" ></ion-input>\n                            \n                          </ion-item>\n        \n                          <ng-container *ngFor=\"let validation of validation_messages.email\">\n                              <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n          \n             \n              \n            \n                  <ion-col>\n                   \n                <ion-item >\n                  <ion-label position=\"floating\" ><small>Address</small></ion-label>\n                  <ion-input   formControlName=\"address\"  ></ion-input>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.address\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('address').hasError(validation.type) && (validations_form.get('address').dirty || validations_form.get('address').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n            \n                </ion-row>\n      \n           \n              \n               \n              \n                <ion-row>\n                  \n                      <ion-col size=\"6\">\n                         \n                 \n                        <ion-item>\n                            <ion-label position=\"floating\" ><small>City</small></ion-label>\n                            <ion-input   formControlName=\"city\"  ></ion-input> \n                        </ion-item>\n      \n                        <ng-container *ngFor=\"let validation of validation_messages.city\">\n                            <div class=\"error-message\" *ngIf=\"validations_form.get('city').hasError(validation.type) && (validations_form.get('city').dirty || validations_form.get('city').touched)\">\n                              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                            </div>\n                          </ng-container>\n                      </ion-col>\n                   \n              \n                    \n                      <ion-col size=\"6\">\n                     \n                 \n                          <ion-item>\n  \n                              <ion-label position=\"floating\" ><small>State</small></ion-label>\n                              <ion-input   formControlName=\"state\"  ></ion-input> \n  \n  \n                    \n                          </ion-item>\n        \n                          <ng-container *ngFor=\"let validation of validation_messages.state\">\n                              <div class=\"error-message\" *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n  \n  \n                        <ion-col size=\"6\">\n                     \n                 \n                            <ion-item>\n                                <ion-label position=\"floating\" ><small>phone_no</small></ion-label>\n                                <ion-input   formControlName=\"phone_no\"  ></ion-input> \n                            </ion-item>\n          \n                            <ng-container *ngFor=\"let validation of validation_messages.phone_no\">\n                                <div class=\"error-message\" *ngIf=\"validations_form.get('phone_no').hasError(validation.type) && (validations_form.get('phone_no').dirty || validations_form.get('phone_no').touched)\">\n                                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                                </div>\n                              </ng-container>\n                          </ion-col>\n              \n                  </ion-row>\n                 \n                  <div text-center>\n                      <ion-button (click)=\"regester()\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n                     \n                              \n                    </div>   \n                \n          \n      </ion-grid>\n        </ion-card>\n       \n          </form>\n  </ion-content>\n  \n  \n  "

/***/ }),

/***/ "./src/app/hospitalreg/hospitalreg.page.scss":
/*!***************************************************!*\
  !*** ./src/app/hospitalreg/hospitalreg.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWxyZWcvRDpcXG5ld2FwcG9sb1xcYXBwb2xvL3NyY1xcYXBwXFxob3NwaXRhbHJlZ1xcaG9zcGl0YWxyZWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx5QkFBMEIsRUFBQTs7QUFFNUI7RUFDRSx5QkFBMEIsRUFBQTs7QUFFNUI7RUFDRSx5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvc3BpdGFscmVnL2hvc3BpdGFscmVnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi10aXRsZXtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuaW9uLWJ1dHRvbnN7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7ICBcclxufVxyXG5pb24taWNvbntcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgIFxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/hospitalreg/hospitalreg.page.ts":
/*!*************************************************!*\
  !*** ./src/app/hospitalreg/hospitalreg.page.ts ***!
  \*************************************************/
/*! exports provided: HospitalregPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalregPage", function() { return HospitalregPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var HospitalregPage = /** @class */ (function () {
    function HospitalregPage(fb, auth, route, router, nav) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.nav = nav;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'name is required.' },
                { type: 'minlength', message: 'name must be at least 1 characters long.' },
            ],
            'phone_no': [
                { type: 'required', message: 'phone is required.' }
            ],
            'email': [
                { type: 'required', message: 'email_id is required.' }
            ],
            'address': [
                { type: 'required', message: 'address  is required.' }
            ],
            'city': [
                { type: 'required', message: 'city  is required.' }
            ],
            'state': [
                { type: 'required', message: 'state  is required.' }
            ],
            'hospital': [
                { type: 'required', message: 'hospital  is required.' }
            ],
        };
    }
    HospitalregPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    HospitalregPage.prototype.createForm = function () {
        this.validations_form = this.fb.group({
            // patient_id: ['', Validators.required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    HospitalregPage.prototype.regester = function () {
        var _this = this;
        this.auth.hospreg(this.validations_form.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.status == 'success') {
                    _this.auth.presentToast("registered successfully");
                    _this.nav.pop();
                    _this.router.navigateByUrl('/login');
                }
            }
        });
    };
    HospitalregPage.prototype.back = function () {
        this.nav.pop();
    };
    HospitalregPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hospitalreg',
            template: __webpack_require__(/*! ./hospitalreg.page.html */ "./src/app/hospitalreg/hospitalreg.page.html"),
            styles: [__webpack_require__(/*! ./hospitalreg.page.scss */ "./src/app/hospitalreg/hospitalreg.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], HospitalregPage);
    return HospitalregPage;
}());



/***/ })

}]);
//# sourceMappingURL=hospitalreg-hospitalreg-module.js.map