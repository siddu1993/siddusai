(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patientregist-patientregist-module"],{

/***/ "./src/app/patientregist/patientregist.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/patientregist/patientregist.module.ts ***!
  \*******************************************************/
/*! exports provided: PatientregistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientregistPageModule", function() { return PatientregistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patientregist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patientregist.page */ "./src/app/patientregist/patientregist.page.ts");







var routes = [
    {
        path: '',
        component: _patientregist_page__WEBPACK_IMPORTED_MODULE_6__["PatientregistPage"]
    }
];
var PatientregistPageModule = /** @class */ (function () {
    function PatientregistPageModule() {
    }
    PatientregistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_patientregist_page__WEBPACK_IMPORTED_MODULE_6__["PatientregistPage"]]
        })
    ], PatientregistPageModule);
    return PatientregistPageModule;
}());



/***/ }),

/***/ "./src/app/patientregist/patientregist.page.html":
/*!*******************************************************!*\
  !*** ./src/app/patientregist/patientregist.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\" >\n              <ion-icon name=\"arrow-back\"  ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-title>Patient Regisration</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <form [formGroup]=\"validations_form\" (ngSubmit)=\"regester(validations_form)\"  >\n  \n      <ion-card>\n  \n          <ion-grid>\n             \n           \n             \n         \n            <ion-row>\n                <ion-col size=\"6\">\n             \n                    <ion-item>\n                      <ion-label  position=\"floating\" ><small>Doctor Id</small></ion-label>\n                      <ion-input formControlName=\"doctor_id\"  ></ion-input>\n                      \n                    </ion-item>\n                    <ng-container *ngFor=\"let validation of validation_messages.doctor_id\">\n                        <div class=\"error-message\" *ngIf=\"validations_form.get('doctor_id').hasError(validation.type) && (validations_form.get('doctor_id').dirty || validations_form.get('doctor_id').touched)\">\n                          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                        </div>\n                      </ng-container>\n                      </ion-col>\n            \n                  <ion-col>\n                  </ion-col>  \n            </ion-row> \n            <ion-row>   \n            <ion-col size=\"6\">\n             \n              <ion-item>\n                <ion-label  position=\"floating\" ><small>full_name</small></ion-label>\n                <ion-input formControlName=\"full_name\"  ></ion-input>\n                \n              </ion-item>\n              <ng-container *ngFor=\"let validation of validation_messages.full_name\">\n                  <div class=\"error-message\" *ngIf=\"validations_form.get('full_name').hasError(validation.type) && (validations_form.get('full_name').dirty || validations_form.get('full_name').touched)\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n                </ion-col>\n      \n            <ion-col>\n             \n          <ion-item >\n            <ion-label  position=\"floating\" ><small>gender</small></ion-label>\n            <ion-input type=\"number\" formControlName=\"gender\"  ></ion-input>\n            \n          </ion-item>\n          <ng-container *ngFor=\"let validation of validation_messages.gender\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('gender').hasError(validation.type) && (validations_form.get('gender').dirty || validations_form.get('gender').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n            </ion-col>\n      \n          </ion-row>\n          \n  \n            <ion-row>\n                <ion-col size=\"6\">\n                 \n                  <ion-item>\n                    <ion-label  position=\"floating\" ><small>date_of_birth</small></ion-label>\n                    <ion-input formControlName=\"date_of_birth\" ></ion-input>\n                    \n                  </ion-item>\n                  <ng-container *ngFor=\"let validation of validation_messages.date_of_birth\">\n                      <div class=\"error-message\" *ngIf=\"validations_form.get('date_of_birth').hasError(validation.type) && (validations_form.get('date_of_birth').dirty || validations_form.get('date_of_birth').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                      </div>\n                    </ng-container>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                 \n                      <ion-item >\n                        <ion-label  position=\"floating\" ><small>State</small></ion-label>\n                        <ion-input  formControlName=\"state\"  ></ion-input>\n                        \n                      </ion-item>\n                      <ng-container *ngFor=\"let validation of validation_messages.state\">\n                          <div class=\"error-message\" *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n                            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                          </div>\n                        </ng-container>\n          \n          \n                        </ion-col>\n            </ion-row>\n            <ion-row>\n                        <ion-col size=\"6\">\n                     \n                 \n                          <ion-item>\n                            <ion-label position=\"floating\" ><small>Email Id</small></ion-label>\n                            <ion-input   formControlName=\"email\" ></ion-input>\n                            \n                          </ion-item>\n        \n                          <ng-container *ngFor=\"let validation of validation_messages.email\">\n                              <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n          \n             \n              \n            \n                  <ion-col>\n                   \n                <ion-item >\n                  <ion-label position=\"floating\" ><small>Address</small></ion-label>\n                  <ion-input   formControlName=\"address\"  ></ion-input>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.adress\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('adress').hasError(validation.type) && (validations_form.get('adress').dirty || validations_form.get('adress').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n            \n                </ion-row>\n      \n           \n              \n               \n              \n                <ion-row>\n                  \n                      <ion-col size=\"6\">\n                         \n                 \n                        <ion-item>\n                            <ion-label position=\"floating\" ><small>City</small></ion-label>\n                            <ion-input   formControlName=\"city\"  ></ion-input> \n                        </ion-item>\n      \n                        <ng-container *ngFor=\"let validation of validation_messages.city\">\n                            <div class=\"error-message\" *ngIf=\"validations_form.get('city').hasError(validation.type) && (validations_form.get('city').dirty || validations_form.get('city').touched)\">\n                              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                            </div>\n                          </ng-container>\n                      </ion-col>\n                   \n              \n                    \n                      <ion-col size=\"6\">\n                     \n                 \n                          <ion-item>\n  \n                              <ion-label position=\"floating\" ><small>State</small></ion-label>\n                              <ion-input   formControlName=\"state\"  ></ion-input> \n  \n  \n                    \n                          </ion-item>\n        \n                          <ng-container *ngFor=\"let validation of validation_messages.state\">\n                              <div class=\"error-message\" *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n  \n  \n                        <ion-col size=\"6\">\n                     \n                 \n                            <ion-item>\n                                <ion-label position=\"floating\" ><small>phone_no</small></ion-label>\n                                <ion-input   formControlName=\"phone_no\"  ></ion-input> \n                            </ion-item>\n          \n                            <ng-container *ngFor=\"let validation of validation_messages.phone_no\">\n                                <div class=\"error-message\" *ngIf=\"validations_form.get('phone_no').hasError(validation.type) && (validations_form.get('phone_no').dirty || validations_form.get('phone_no').touched)\">\n                                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                                </div>\n                              </ng-container>\n                          </ion-col>\n              \n                  </ion-row>\n                 \n                  <div text-center>\n                      <ion-button (click)=\"regester(validations_form)\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n                     \n                              \n                    </div>   \n                \n          \n      </ion-grid>\n        </ion-card>\n       \n          </form>\n  </ion-content>\n  \n  \n  "

/***/ }),

/***/ "./src/app/patientregist/patientregist.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/patientregist/patientregist.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHJlZ2lzdC9EOlxccmV0YWlsZXJcXGFwcG9sby9zcmNcXGFwcFxccGF0aWVudHJlZ2lzdFxccGF0aWVudHJlZ2lzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQ0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUVyQjtFQUNFLHlCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudHJlZ2lzdC9wYXRpZW50cmVnaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi10aXRsZXtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/patientregist/patientregist.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/patientregist/patientregist.page.ts ***!
  \*****************************************************/
/*! exports provided: PatientregistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientregistPage", function() { return PatientregistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var PatientregistPage = /** @class */ (function () {
    function PatientregistPage(fb, auth, route, router, nav) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.nav = nav;
        this.validation_messages = {
            'full_name': [
                { type: 'required', message: 'name is required.' },
                { type: 'minlength', message: 'name must be at least 1 characters long.' },
            ],
            'age': [
                { type: 'required', message: 'age is required.' },
            ],
            // 'phone': [
            //     { type: 'required', message: 'phone is required.' }],
            'date_of_birth': [
                { type: 'required', message: 'date_of_birth is required.' },
            ],
            'email_id': [
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
    PatientregistPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    PatientregistPage.prototype.createForm = function () {
        this.validations_form = this.fb.group({
            // patient_id: ['', Validators.required],
            full_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date_of_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    PatientregistPage.prototype.regester = function () {
        var _this = this;
        this.auth.newpatient(this.validations_form.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.status == 'success') {
                    _this.auth.presentToast("registered successfully");
                    _this.nav.pop();
                    _this.router.navigateByUrl('/login');
                }
            }
        });
    };
    PatientregistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patientregist',
            template: __webpack_require__(/*! ./patientregist.page.html */ "./src/app/patientregist/patientregist.page.html"),
            styles: [__webpack_require__(/*! ./patientregist.page.scss */ "./src/app/patientregist/patientregist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], PatientregistPage);
    return PatientregistPage;
}());



/***/ })

}]);
//# sourceMappingURL=patientregist-patientregist-module.js.map