(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-docregiser-docregiser-module"],{

/***/ "./src/app/doctor/docregiser/docregiser.module.ts":
/*!********************************************************!*\
  !*** ./src/app/doctor/docregiser/docregiser.module.ts ***!
  \********************************************************/
/*! exports provided: DocregiserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocregiserPageModule", function() { return DocregiserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _docregiser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docregiser.page */ "./src/app/doctor/docregiser/docregiser.page.ts");







var routes = [
    {
        path: '',
        component: _docregiser_page__WEBPACK_IMPORTED_MODULE_6__["DocregiserPage"]
    }
];
var DocregiserPageModule = /** @class */ (function () {
    function DocregiserPageModule() {
    }
    DocregiserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_docregiser_page__WEBPACK_IMPORTED_MODULE_6__["DocregiserPage"]]
        })
    ], DocregiserPageModule);
    return DocregiserPageModule;
}());



/***/ }),

/***/ "./src/app/doctor/docregiser/docregiser.page.html":
/*!********************************************************!*\
  !*** ./src/app/doctor/docregiser/docregiser.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\" >\n            <ion-icon name=\"arrow-back\"  ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    <ion-title>Doctor Regiser</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"validations_form\" >\n\n    <ion-card>\n\n        <ion-grid>\n           \n         \n           \n       \n          <ion-row>\n      \n          \n                <ion-col>\n                </ion-col>  \n          </ion-row> \n          <ion-row>   \n          <ion-col size=\"6\">\n           \n            <ion-item>\n              <ion-label  position=\"floating\" ><small>full_name</small></ion-label>\n              <ion-input formControlName=\"docter_name\"  ></ion-input>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.docter_name\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('docter_name').hasError(validation.type) && (validations_form.get('docter_name').dirty || validations_form.get('docter_name').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n              </ion-col>\n    \n              <ion-col size=\"6\">\n           \n                <ion-item>\n                  <ion-label  position=\"floating\" ><small>Password</small></ion-label>\n                  <ion-input formControlName=\"password\"  ></ion-input>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n\n\n              <ion-col>\n           \n                <ion-item >\n                  <ion-label  position=\"floating\" ><small>Gender</small></ion-label>\n                  <ion-select  formControlName=\"sex\" \n                  >\n                  <ion-select-option value=\"Male\">Male</ion-select-option>\n                  <ion-select-option value=\"FeMale\">FeMale</ion-select-option>\n              \n                  </ion-select>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.sex\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('sex').hasError(validation.type) && (validations_form.get('sex').dirty || validations_form.get('sex').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n    \n        </ion-row>\n        \n\n          <ion-row>\n              <ion-col size=\"6\">\n               \n                <ion-item>\n                  <ion-label  position=\"floating\" ><small>Speciality</small></ion-label>\n                  <ion-input formControlName=\"speciality\" ></ion-input>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.speciality\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('speciality').hasError(validation.type) && (validations_form.get('speciality').dirty || validations_form.get('speciality').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n                \n          </ion-row>\n          <ion-row>\n                      <ion-col size=\"6\">\n                   \n               \n                        <ion-item>\n                          <ion-label position=\"floating\" ><small>Email Id</small></ion-label>\n                          <ion-input   formControlName=\"email\" ></ion-input>\n                          \n                        </ion-item>\n      \n                        <ng-container *ngFor=\"let validation of validation_messages.email\">\n                            <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                            </div>\n                          </ng-container>\n                      </ion-col>\n        \n           \n            \n          \n                <ion-col>\n                 \n              <ion-item >\n                <ion-label position=\"floating\" ><small>Address</small></ion-label>\n                <ion-input   formControlName=\"clinic_address\"  ></ion-input>\n                \n              </ion-item>\n              <ng-container *ngFor=\"let validation of validation_messages.clinic_address\">\n                  <div class=\"error-message\" *ngIf=\"validations_form.get('clinic_address').hasError(validation.type) && (validations_form.get('clinic_address').dirty || validations_form.get('clinic_address').touched)\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n                </ion-col>\n          \n              </ion-row>\n    \n         \n            \n             \n            \n              <ion-row>\n                \n                    <ion-col size=\"6\">\n                       \n               \n                      <ion-item>\n                          <ion-label position=\"floating\" ><small>City</small></ion-label>\n                          <ion-input   formControlName=\"city\"  ></ion-input> \n                      </ion-item>\n    \n                      <ng-container *ngFor=\"let validation of validation_messages.city\">\n                          <div class=\"error-message\" *ngIf=\"validations_form.get('city').hasError(validation.type) && (validations_form.get('city').dirty || validations_form.get('city').touched)\">\n                            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                          </div>\n                        </ng-container>\n                    </ion-col>\n                 \n            \n                  \n                    <ion-col size=\"6\">\n                   \n               \n                        <ion-item>\n\n                            <ion-label position=\"floating\" ><small>State</small></ion-label>\n                            <ion-input   formControlName=\"state\"  ></ion-input> \n\n\n                  \n                        </ion-item>\n      \n                        <ng-container *ngFor=\"let validation of validation_messages.state\">\n                            <div class=\"error-message\" *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n                              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                            </div>\n                          </ng-container>\n                      </ion-col>\n\n\n                      <ion-col size=\"6\">\n                   \n               \n                          <ion-item>\n                              <ion-label position=\"floating\" ><small>Hospital</small></ion-label>\n                              <ion-input   formControlName=\"hospital\"  ></ion-input> \n                          </ion-item>\n        \n                          <ng-container *ngFor=\"let validation of validation_messages.hospital\">\n                              <div class=\"error-message\" *ngIf=\"validations_form.get('hospital').hasError(validation.type) && (validations_form.get('hospital').dirty || validations_form.get('hospital').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n\n                        <ion-col size=\"6\">\n                   \n               \n                          <ion-item>\n                              <ion-label position=\"floating\" ><small>Phone No</small></ion-label>\n                              <ion-input  type=\"number\" formControlName=\"docter_phone\"  ></ion-input> \n                          </ion-item>\n        \n                          <ng-container *ngFor=\"let validation of validation_messages.docter_phone\">\n                              <div class=\"error-message\" *ngIf=\"validations_form.get('docter_phone').hasError(validation.type) && (validations_form.get('docter_phone').dirty || validations_form.get('docter_phone').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n            \n                </ion-row>\n               \n                <div text-center>\n                    <ion-button (click)=\"doctor()\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n                   \n                            \n                  </div>   \n              \n        \n    </ion-grid>\n      </ion-card>\n     \n        </form>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/doctor/docregiser/docregiser.page.scss":
/*!********************************************************!*\
  !*** ./src/app/doctor/docregiser/docregiser.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL2RvY3JlZ2lzZXIvRDpcXG5ld2FwcG9sb1xcYXBwb2xvL3NyY1xcYXBwXFxkb2N0b3JcXGRvY3JlZ2lzZXJcXGRvY3JlZ2lzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9kb2NyZWdpc2VyL2RvY3JlZ2lzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG4uZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/doctor/docregiser/docregiser.page.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor/docregiser/docregiser.page.ts ***!
  \******************************************************/
/*! exports provided: DocregiserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocregiserPage", function() { return DocregiserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");





var DocregiserPage = /** @class */ (function () {
    function DocregiserPage(nav, modalController, auth, formBuilder) {
        this.nav = nav;
        this.modalController = modalController;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.validation_messages = {
            'docter_name': [
                { type: 'required', message: 'name is required.' },
                { type: 'minlength', message: 'name must be at least 1 characters long.' },
            ],
            'age': [
                { type: 'required', message: 'age is required.' },
            ],
            'password': [
                { type: 'required', message: 'password is required.' }
            ],
            'date_of_birth': [
                { type: 'required', message: 'date_of_birth is required.' },
            ],
            'email': [
                { type: 'required', message: 'email_id is required.' }
            ],
            'speciality': [
                { type: 'required', message: 'speciality is required.' }
            ],
            'docter_phone': [
                { type: 'required', message: 'docter_phone is required.' }
            ],
            'clinic_address': [
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
            'sex': [
                { type: 'required', message: 'gender  is required.' }
            ],
        };
        // this.id= navParams.get("value");
        // console.log(this.id);
        this.validations_form = formBuilder.group({
            docter_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            speciality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clinic_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hospital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            docter_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    DocregiserPage.prototype.ngOnInit = function () {
    };
    DocregiserPage.prototype.back = function () {
        this.nav.pop(); //this.dismiss()
    };
    DocregiserPage.prototype.doctor = function () {
        var _this = this;
        this.auth.presentLoading();
        console.log(56, this.validations_form.value);
        this.auth.doctor(this.validations_form.value).subscribe(function (res) {
            _this.result = res;
            if (res.status == 'success') {
                _this.auth.addNewBookData.next(res.response);
                _this.auth.presentToast("Doctor added successfully");
                _this.nav.pop();
            }
        }, function (err) {
            console.log(err);
            if (err.error.message.code == "11000") {
                _this.auth.presentToast("phone number already registered");
            }
            else {
                _this.auth.presentToast(err.error.message.error);
            }
        });
    };
    DocregiserPage.prototype.close = function () {
        this.modalController.dismiss({
            'result': "1"
        });
        //this.dismiss()
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DocregiserPage.prototype, "value", void 0);
    DocregiserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-docregiser',
            template: __webpack_require__(/*! ./docregiser.page.html */ "./src/app/doctor/docregiser/docregiser.page.html"),
            styles: [__webpack_require__(/*! ./docregiser.page.scss */ "./src/app/doctor/docregiser/docregiser.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DocregiserPage);
    return DocregiserPage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-docregiser-docregiser-module.js.map