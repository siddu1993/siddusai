(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\" >\n            <ion-icon name=\"arrow-back\"  ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    <ion-title>Patient Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"validations_form\" >\n\n    <ion-card>\n\n        <ion-grid>\n    \n          <ion-row>\n          <ion-col size=\"6\">\n           \n            <ion-item>\n              <ion-label  position=\"floating\" ><small>full_name</small></ion-label>\n              <ion-input formControlName=\"full_name\"  ></ion-input>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.full_name\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('full_name').hasError(validation.type) && (validations_form.get('full_name').dirty || validations_form.get('full_name').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n              </ion-col>\n              <ion-col size=\"6\">\n           \n                <ion-item>\n                  <ion-label  position=\"floating\" ><small>Password</small></ion-label>\n                  <ion-input formControlName=\"password\"  ></ion-input>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n\n          <ion-col>\n           \n        <ion-item >\n          <ion-label  position=\"floating\" ><small>Age</small></ion-label>\n          <ion-input type=\"number\" formControlName=\"age\"  ></ion-input>\n          \n        </ion-item>\n        <ng-container *ngFor=\"let validation of validation_messages.age\">\n            <div class=\"error-message\" *ngIf=\"validations_form.get('age').hasError(validation.type) && (validations_form.get('age').dirty || validations_form.get('age').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n          </ion-col>\n        </ion-row>\n          <ion-row>\n          <ion-col>\n           \n            <ion-item >\n              <ion-label  position=\"floating\" ><small>Gender</small></ion-label>\n              <ion-select  formControlName=\"sex\" \n             >\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n          \n              </ion-select>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.sex\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('sex').hasError(validation.type) && (validations_form.get('sex').dirty || validations_form.get('sex').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n              </ion-col>\n              </ion-row>\n  \n        \n\n          <ion-row>\n              <ion-col size=\"6\">\n               \n                <ion-item>\n                  <ion-label  position=\"floating\" >Date of birth</ion-label>\n                  <ion-datetime formControlName=\"date_of_birth\" displayFormat=\"DD-MM-YY\" placeholder=\"Select Date\"></ion-datetime>\n                </ion-item>\n\n                \n                <ng-container *ngFor=\"let validation of validation_messages.date_of_birth\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('date_of_birth').hasError(validation.type) && (validations_form.get('date_of_birth').dirty || validations_form.get('date_of_birth').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n                  <ion-col size=\"6\">\n               \n                    <ion-item >\n                      <ion-label  position=\"floating\" ><small>State</small></ion-label>\n                      <ion-input  formControlName=\"state\"  ></ion-input>\n                      \n                    </ion-item>\n                    <ng-container *ngFor=\"let validation of validation_messages.state\">\n                        <div class=\"error-message\" *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n                          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                        </div>\n                      </ng-container>\n        \n        \n                      </ion-col>\n          </ion-row>\n          <ion-row>\n                      <ion-col size=\"6\">\n                   \n               \n                        <ion-item>\n                          <ion-label position=\"floating\" ><small>City</small></ion-label>\n                          <ion-input   formControlName=\"city\" ></ion-input>\n                          \n                        </ion-item>\n      \n                        <ng-container *ngFor=\"let validation of validation_messages.city\">\n                            <div class=\"error-message\" *ngIf=\"validations_form.get('city').hasError(validation.type) && (validations_form.get('city').dirty || validations_form.get('city').touched)\">\n                              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                            </div>\n                          </ng-container>\n                      </ion-col>\n        \n           \n                <ion-col size=\"6\">\n                 \n                  <ion-item>\n                    <ion-label  position=\"floating\" ><small>Email Id</small></ion-label>\n                    <ion-input type=\"email\" formControlName=\"email\" ></ion-input>\n                    \n                  </ion-item>\n\n                  <ng-container *ngFor=\"let validation of validation_messages.email\">\n                      <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                      </div>\n                    </ng-container>\n                    </ion-col>\n          \n                <ion-col>\n                 \n              <ion-item >\n                <ion-label position=\"floating\" ><small>Address</small></ion-label>\n                <ion-input   formControlName=\"address\"  ></ion-input>\n                \n              </ion-item>\n              <ng-container *ngFor=\"let validation of validation_messages.address\">\n                  <div class=\"error-message\" *ngIf=\"validations_form.get('address').hasError(validation.type) && (validations_form.get('address').dirty || validations_form.get('address').touched)\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n                </ion-col>\n          \n              </ion-row>\n              <ion-row>\n                \n                    <ion-col size=\"6\">\n                   \n               \n                      <ion-item>\n                        <ion-label slot=\"start\"  ><small>Insurance</small></ion-label>\n                        <ion-checkbox slot=\"end\" formControlName=\"insurance\"></ion-checkbox>\n                        \n                      </ion-item>\n    \n                      <ng-container *ngFor=\"let validation of validation_messages.insurance\">\n                          <div class=\"error-message\" *ngIf=\"validations_form.get('insurance').hasError(validation.type) && (validations_form.get('insurance').dirty || validations_form.get('insurance').touched)\">\n                            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                          </div>\n                        </ng-container>\n                    </ion-col>\n                 \n            \n                 \n                    <ion-col size=\"6\">\n                   \n               \n                      <ion-item>\n                        <ion-label slot=\"start\"  ><small>phone_no</small></ion-label>\n                        <ion-input  type=\"number\" formControlName=\"phone_no\"  ></ion-input>\n                        \n                      </ion-item>\n    \n                      <ng-container *ngFor=\"let validation of validation_messages.phone_no\">\n                          <div class=\"error-message\" *ngIf=\"validations_form.get('phone_no').hasError(validation.type) && (validations_form.get('phone_no').dirty || validations_form.get('phone_no').touched)\">\n                            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                          </div>\n                        </ng-container>\n                    </ion-col>\n                  </ion-row>\n                <ion-row>\n                    <ion-col>\n           \n                      <ion-item >\n                        <ion-label  position=\"floating\" ><small>security question</small></ion-label>\n                        <ion-select  formControlName=\"question\" \n                       >\n                        <ion-select-option *ngFor=\"let obj of ques\" >{{obj.question}}</ion-select-option>\n                    \n                        </ion-select>\n                        \n                      </ion-item>\n                      <ng-container *ngFor=\"let validation of validation_messages.quest\">\n                          <div class=\"error-message\" *ngIf=\"validations_form.get('quest').hasError(validation.type) && (validations_form.get('quest').dirty || validations_form.get('quest').touched)\">\n                            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                          </div>\n                        </ng-container>\n                        </ion-col>\n\n                        <ion-col >\n           \n                          <ion-item >\n                            <ion-label  position=\"floating\" ><small>anwer</small></ion-label>\n                            <ion-input   formControlName=\"answer\"  ></ion-input>\n                            \n                          </ion-item>\n                          <ng-container *ngFor=\"let validation of validation_messages.answer\">\n                              <div class=\"error-message\" *ngIf=\"validations_form.get('answer').hasError(validation.type) && (validations_form.get('answer').dirty || validations_form.get('answer').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                              </div>\n                            </ng-container>\n                            </ion-col>\n            \n                </ion-row>\n\n               \n                <div text-center>\n                    <ion-button (click)=\"register(validations_form)\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n                   \n                            \n                  </div>   \n              \n        \n    </ion-grid>\n      </ion-card>\n     \n        </form>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 28px; }\n\n.cenimg {\n  height: 71px;\n  padding-top: 10px; }\n\n.sele {\n  padding-top: 30px; }\n\nion-icon {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nsmall {\n  font-size: 63%; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-card {\n  border: 2px solid grey; }\n\n.psw {\n  color: skyblue; }\n\n.ion-content {\n  overflow: hidden; }\n\nion-title {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXG5ld2FwcG9sb1xcc2lkZHVzYWkuZ2l0XFx0cnVuay9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0osRUFBQTs7QUFDQTtFQUNJLFlBQVk7RUFDWixpQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHekI7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0QsZ0JBQWdCLEVBQUE7O0FBRWY7RUFDRyx5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyOHB4XHJcbn1cclxuLmNlbmltZ3tcclxuICAgIGhlaWdodDogNzFweDsgXHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi5zZWxle1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuc21hbGwge1xyXG4gICAgZm9udC1zaXplOiA2MyU7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcblxyXG4gfVxyXG4gLnBzd3tcclxuICAgICBjb2xvcjpza3libHVlO1xyXG4gfVxyXG4gLmlvbi1jb250ZW50e1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG4gaW9uLXRpdGxle1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(modalController, auth, formBuilder, nav) {
        this.modalController = modalController;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.validation_messages = {
            'insurance': [
                // { type: 'required', message: 'upc is required.' },
                { type: 'minlength', message: 'insurence must be at least 1 characters long.' },
                { type: 'maxlength', message: 'insurence cannot be more than 20 characters long.' },
            ],
            'full_name': [
                { type: 'required', message: 'name is required.' },
                { type: 'minlength', message: 'name must be at least 1 characters long.' },
            ],
            'age': [
                { type: 'required', message: 'age is required.' },
            ],
            'sex': [
                { type: 'required', message: 'sex is required.' },
            ],
            'email': [
                { type: 'required', message: 'Email id is required.' },
                { type: 'pattern', message: 'please enter valid email' }
            ],
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
            'phone_no': [
                { type: 'required', message: 'phone_no  is required.' }
            ],
            'password': [
                { type: 'required', message: 'password  is required.' }
            ],
            'quest': [{ type: 'required', message: 'select security question is required.' }],
            'answer': [{ type: 'required', message: 'answer is required' }]
        };
        // this.id= navParams.get("value");
        // console.log(this.id);
        this.validations_form = formBuilder.group({
            full_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date_of_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
                ])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            insurance: [false]
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.question();
    };
    RegisterPage.prototype.register = function (validations_form) {
        var _this = this;
        this.auth.presentLoading();
        console.log(56, validations_form.value);
        this.auth.newpatient(validations_form.value).subscribe(function (res) {
            _this.result = res;
            if (res.status == 'success') {
                _this.auth.presentToast("registered  successfully");
                _this.nav.pop();
            }
            console.log(JSON.stringify(_this.result));
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
    RegisterPage.prototype.back = function () {
        this.nav.pop(); //this.dismiss()
    };
    RegisterPage.prototype.question = function () {
        var _this = this;
        this.auth.presentLoading();
        this.auth.quest().subscribe(function (res) {
            _this.ques = res.response;
            console.log(JSON.stringify(_this.ques));
        }, function (err) {
            console.log(err);
            if (err.error.message.code == "11000") {
                _this.auth.presentToast("err");
            }
            else {
                _this.auth.presentToast(err.error.message.error);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RegisterPage.prototype, "value", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map