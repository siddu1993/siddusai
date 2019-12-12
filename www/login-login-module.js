(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-title text-center>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    \n      <ion-row>\n          <ion-col col='6'>\n            <h6 padding-top>Select type :</h6>\n          </ion-col>\n        <ion-col col='6'>\n            <ion-select (ionChange)=\"change($event)\" placeholder=\"Select type\" padding-top padding-left padding-right>\n                <ion-select-option selected value=\"1\">Patient</ion-select-option>\n                <ion-select-option value=\"2\">Doctor</ion-select-option>\n                <ion-select-option value=\"3\">Lab</ion-select-option>\n      \n              </ion-select>\n          </ion-col>\n      </ion-row>\n       \n\n        \n\n <form [formGroup]=\"validations_patient\" *ngIf=\"sel=='1'\">\n  <div text-center >\n      <img class=\"cenimg\"  src=\"assets/images/apollo.png\">\n\n</div>\n  <ion-card >\n    \n\n    <ion-grid>\n      <ion-row>\n      <ion-col size=\"12\">\n       \n        <ion-item>\n          <ion-label  position=\"floating\" >Patient Phone No</ion-label>\n          <ion-input formControlName=\"phone_no\"  ></ion-input>\n          \n        </ion-item>\n        <ng-container *ngFor=\"let validation of validation_messages.phone_no\">\n          <div class=\"error-message\" *ngIf=\"validations_patient.get('phone_no').hasError(validation.type) && (validations_patient.get('phone_no').dirty || validations_patient.get('phone_no').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n        \n      </ion-col>\n      <ion-col size=\"12\">\n       \n        <ion-item>\n          <ion-label  position=\"floating\" >password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" ></ion-input>\n          \n        </ion-item>\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"validations_patient.get('password').hasError(validation.type) && (validations_patient.get('password').dirty || validations_patient.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n        \n      </ion-col>\n\n    </ion-row>\n   \n   \n</ion-grid>\n  </ion-card >\n\n    <div text-center >\n\n\n    <ion-col >\n<div>\n        <ion-button    (click)=\"login(validations_patient,1)\"  [disabled]=\"!validations_patient.valid\" shape=\"round\">Login</ion-button>\n</div>\n      </ion-col>\n      \n\n      <ion-row>\n        <ion-col size=6>\n          <div padding-top>\n              <b class=\"psw\" [routerLink]=\"['/register']\">Sign Up</b><br>\n          </div>\n        </ion-col>\n        <ion-col size=6>\n          <div padding-top>\n            <b class=\"psw\" [routerLink]=\"['/fogotpass']\">Forgot password? </b>\n          </div>\n        </ion-col>\n      </ion-row>\n   </div>\n   </form>\n\n\n\n   <form [formGroup]=\"validations_docter\"   *ngIf=\"sel=='2'\">\n    <div text-center>\n        <img class=\"cenimg\"  src=\"assets/images/apollo.png\">\n  \n  </div>\n    <ion-card >\n      <ion-grid>\n     \n      <ion-row>\n        <ion-col size=\"12\">\n         \n          <ion-item>\n            <ion-label  position=\"floating\" >Doctor Phone No</ion-label>\n            <ion-input formControlName=\"docter_phone\"  ></ion-input>\n            \n          </ion-item>\n          <ng-container *ngFor=\"let validation of validation_messages.docter_phone\">\n            <div class=\"error-message\" *ngIf=\"validations_docter.get('docter_phone').hasError(validation.type) && (validations_docter.get('docter_phone').dirty || validations_docter.get('docter_phone').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n           \n        </ion-col>\n        <ion-col size=\"12\">\n       \n          <ion-item>\n            <ion-label  position=\"floating\" >password</ion-label>\n            <ion-input formControlName=\"password\"  type=\"password\" ></ion-input>\n            \n          </ion-item>\n          <ng-container *ngFor=\"let validation of validation_messages.password\">\n            <div class=\"error-message\" *ngIf=\"validations_docter.get('password').hasError(validation.type) && (validations_docter.get('password').dirty || validations_docter.get('password').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n          \n        </ion-col>\n  \n      </ion-row>\n     \n      \n  </ion-grid>\n    </ion-card>\n  \n      <div text-center >\n  \n  \n      <ion-col >\n  <div>\n          <ion-button (click)=\"login(validations_docter,2)\"  [disabled]=\"!validations_docter.valid\" shape=\"round\">Login</ion-button>\n  </div>\n        </ion-col>\n        \n  \n        <ion-row>\n          <ion-col size=6>\n            <div padding-top>\n                <b class=\"psw\" [routerLink]=\"['/docregiser']\">Sign Up</b><br>\n            </div>\n          </ion-col>\n          <ion-col size=6>\n            <div padding-top>\n              <b class=\"psw\" [routerLink]=\"['/fogotpass']\">Forgot password? </b>\n            </div>\n          </ion-col>\n        </ion-row>\n     </div>\n     </form>\n\n\n\n     <form [formGroup]=\"validations_lab\" *ngIf=\"sel=='3'\"\n       >\n      <div text-center>\n          <img class=\"cenimg\"  src=\"assets/images/apollo.png\">\n    \n    </div>\n      <ion-card>\n        <ion-grid>\n     \n        <ion-row>\n          <ion-col size=\"12\">\n           \n            <ion-item>\n              <ion-label  position=\"floating\" >Lab Phone No</ion-label>\n              <ion-input formControlName=\"lab_phone\"  ></ion-input>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.lab_phone\">\n              <div class=\"error-message\" *ngIf=\"validations_lab.get('lab_phone').hasError(validation.type) && (validations_lab.get('lab_phone').dirty || validations_lab.get('lab_phone').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n             \n          </ion-col>\n          <ion-col size=\"12\">\n       \n            <ion-item>\n              <ion-label  position=\"floating\" >password</ion-label>\n              <ion-input formControlName=\"password\"  type=\"password\" ></ion-input>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <div class=\"error-message\" *ngIf=\"validations_lab.get('password').hasError(validation.type) && (validations_lab.get('password').dirty || validations_lab.get('password').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n            \n          </ion-col>\n    \n        </ion-row>\n        \n    </ion-grid>\n      </ion-card>\n    \n        <div text-center >\n    \n    \n        <ion-col >\n    <div>\n            <ion-button   (click)=\"login(validations_lab,3)\"  [disabled]=\"!validations_lab.valid\" shape=\"round\">Login</ion-button>\n    </div>\n          </ion-col>\n          \n    <ion-row>\n        <ion-col size=6>\n          <div padding-top>\n              <b class=\"psw\" [routerLink]=\"['/addnewlab']\">Sign Up</b><br>\n          </div>\n        </ion-col>\n        <ion-col size=6>\n          <div padding-top>\n            <b class=\"psw\" [routerLink]=\"['/fogotpass']\">Forgot password? </b>\n            <b class=\"psw\" [routerLink]=\"['/hospitalreg']\">Hospital Sign Up  </b>\n\n          </div>\n        </ion-col>\n      </ion-row>\n       </div>\n       </form>\n       \n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 28px; }\n\n.cenimg {\n  height: 150px;\n  width: 150px;\n  padding-top: 0px; }\n\n.sele {\n  padding-top: 30px; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-content {\n  --ion-background-color:$header !important ; }\n\nion-item {\n  --ion-background-color:rgb(211, 208, 208);\n  border-radius: 17px; }\n\nion-button {\n  --background: rgb(4, 110, 78)!important ; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: rgb(4, 110, 78)!important ;\n  opacity: 1 !important; }\n\n.psw {\n  color: #0f0f0f; }\n\n.ion-content {\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXG5ld2FwcG9sb1xcYXBwb2xvL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFDSixFQUFBOztBQUNBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZSxFQUFBOztBQUVuQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHlCQUEwQixFQUFBOztBQUc5QjtFQUNJLDBDQUF1QixFQUFBOztBQU0zQjtFQUNJLHlDQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFNdkI7RUFDSSx3Q0FBYSxFQUFBOztBQUdqQjtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLHlCQUEwQixFQUFBOztBQUc5QjtFQUNJLHdDQUFhO0VBQ1gscUJBQW1CLEVBQUE7O0FBR3hCO0VBQ0ksY0FBcUIsRUFBQTs7QUFFekI7RUFDRCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyOHB4XHJcbn1cclxuLmNlbmltZ3tcclxuICAgIGhlaWdodDogMTUwcHg7IFxyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG59XHJcbi5zZWxle1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6JGhlYWRlciAhaW1wb3J0YW50IDtcclxuICAgICBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbXtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDIxMSwgMjA4LCAyMDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDQsIDExMCwgNzgpIWltcG9ydGFudCA7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG4gICAgICAgXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNCwgMTEwLCA3OCkhaW1wb3J0YW50IDtcclxuICAgICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbiAucHN3e1xyXG4gICAgIGNvbG9yOnJnYigxNSwgMTUsIDE1KTtcclxuIH1cclxuIC5pb24tY29udGVudHtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(nav, route, auth, formBuilder, menu) {
        this.nav = nav;
        this.route = route;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.validation_messages = {
            'phone_no': [
                { type: 'required', message: 'patient_id is required.' },
                { type: 'minlength', message: 'patient_id must be at least 8 characters long.' },
                { type: 'maxlength', message: 'patient_id cannot be more than 12 numbers.' },
            ],
            'password': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password must be at least 1 characters long.' },
                { type: 'maxlength', message: 'password cannot be more than 20 characters long.' },
            ],
            'docter_phone': [
                { type: 'required', message: 'docter_id is required.' },
                { type: 'minlength', message: 'docter_id must be at least 1 characters long.' },
            ],
            'lab_phone': [
                { type: 'required', message: 'lab_id is required.' },
                { type: 'minlength', message: 'lab_id must be at least 1 characters long.' },
            ],
        };
        this.menu.enable(false);
        this.sel = 1;
        this.validations_patient = this.formBuilder.group({
            phone_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.validations_docter = this.formBuilder.group({
            docter_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.validations_lab = this.formBuilder.group({
            lab_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // store_id: ['', Validators.compose([Validators.required])]
    }
    LoginPage.prototype.ngOnInit = function () {
        console.log(22, localStorage.getItem("token"));
        // if(localStorage.getItem("token")!=null){
        //   this.route.navigateByUrl('/home');
        // }
    };
    //   login() {
    //     if (this.validations_form.invalid) {
    //       // Show an alert, input hints or something to inform the user the fields are invalid.
    //       // Let's just return for now
    //       console.log("this is "+this.validations_form.invalid);
    //       return;
    //     }
    //     this.route.navigateByUrl('/list');
    // }
    // login()
    // {
    //   this.route.navigateByUrl('/list');
    // }
    LoginPage.prototype.login = function (formData, ex) {
        var _this = this;
        localStorage.setItem('token', "res.response.token");
        // location.reload();
        this.auth.presentLoading();
        this.auth.login(formData.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.userData = res.response;
                    _this.auth.presentToast("login successfull");
                    _this.nav.pop();
                    if (ex == 1) {
                        localStorage.setItem("userData", JSON.stringify(_this.userData));
                        localStorage.setItem("patient_id", _this.userData.patient_id);
                        localStorage.setItem("full_name", _this.userData.full_name);
                        _this.validations_patient.reset();
                        _this.route.navigateByUrl('/medicaldetails');
                    }
                    if (ex == 2) {
                        localStorage.setItem("userData", JSON.stringify(_this.userData));
                        localStorage.setItem("docter_id", _this.userData.docter_id);
                        localStorage.setItem("docter_phone", JSON.stringify(_this.userData.docter_phone));
                        _this.validations_docter.reset();
                        _this.route.navigateByUrl('/persoaldoc');
                    }
                    if (ex == 3) {
                        _this.validations_lab.reset();
                        localStorage.setItem("lab_id", _this.userData.lab_id);
                        localStorage.setItem("name", _this.userData.name);
                        localStorage.setItem("userData", JSON.stringify(_this.userData));
                        _this.route.navigateByUrl('/labinformation');
                    }
                    // location.reload();
                    // this.route.navigateByUrl('/list');
                }
                else if (res.response == "") {
                    _this.auth.presentToast("no data found");
                    _this.validations_docter.reset;
                }
            }
            if (res.status == 'error') {
                _this.auth.presentToast(res.message);
            }
        }, function (err) {
            console.log(err);
            _this.auth.presentToast("username or password incorrect");
        });
    };
    LoginPage.prototype.reg = function () {
        this.route.navigateByUrl('/register');
    };
    LoginPage.prototype.change = function (e) {
        console.log(e);
        this.sel = e.detail.value;
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map