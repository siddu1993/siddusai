(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fogotpass-fogotpass-module"],{

/***/ "./src/app/fogotpass/fogotpass.module.ts":
/*!***********************************************!*\
  !*** ./src/app/fogotpass/fogotpass.module.ts ***!
  \***********************************************/
/*! exports provided: FogotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FogotpassPageModule", function() { return FogotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fogotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fogotpass.page */ "./src/app/fogotpass/fogotpass.page.ts");







var routes = [
    {
        path: '',
        component: _fogotpass_page__WEBPACK_IMPORTED_MODULE_6__["FogotpassPage"]
    }
];
var FogotpassPageModule = /** @class */ (function () {
    function FogotpassPageModule() {
    }
    FogotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fogotpass_page__WEBPACK_IMPORTED_MODULE_6__["FogotpassPage"]]
        })
    ], FogotpassPageModule);
    return FogotpassPageModule;
}());



/***/ }),

/***/ "./src/app/fogotpass/fogotpass.page.html":
/*!***********************************************!*\
  !*** ./src/app/fogotpass/fogotpass.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" >\n        <ion-icon name=\"arrow-back\"  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Fogot password</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n    <form [formGroup]=\"validations_form\"  >\n\n\n    <ion-card>\n        <ion-grid>\n          <ion-row>\n          <ion-col size=\"12\">\n           \n            <ion-item>\n              <ion-label  position=\"floating\" >Email</ion-label>\n              <ion-input formControlName=\"email\"  ></ion-input>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n             \n          </ion-col>\n    \n          <ion-col>\n           \n        <ion-item padding-bottom>\n          <ion-label  position=\"floating\" >Date of Birth</ion-label>\n          <ion-input type=\"password\" formControlName=\"dob\"  ></ion-input>\n          \n        </ion-item>\n        <ng-container *ngFor=\"let validation of validation_messages.dob\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('dob').hasError(validation.type) && (validations_form.get('dob').dirty || validations_form.get('dob').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n          </ion-col>\n    \n        </ion-row>\n        \n    </ion-grid>\n      </ion-card>\n      <div text-center >\n\n\n          <ion-col >\n      <div>\n              <ion-button  color=\"primary\"  (click)=\"login(validations_form)\"  [disabled]=\"!validations_form.valid\" shape=\"round\">Forgot password</ion-button>\n      </div>\n            </ion-col>\n          <ion-col >\n            <div padding-top>\n              <b class=\"psw\" [routerLink]=\"['/login']\">Login </b>\n            </div>\n          </ion-col>\n         </div>\n\n         </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fogotpass/fogotpass.page.scss":
/*!***********************************************!*\
  !*** ./src/app/fogotpass/fogotpass.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 28px; }\n\n.cenimg {\n  height: 71px;\n  padding-top: 10px; }\n\n.sele {\n  padding-top: 30px; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-card {\n  border: 2px solid grey; }\n\nion-title {\n  color: #ffffff !important; }\n\n.psw {\n  color: skyblue; }\n\n.ion-content {\n  overflow: hidden; }\n\nion-buttons {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9nb3RwYXNzL0Q6XFxuZXdhcHBvbG9cXGFwcG9sby9zcmNcXGFwcFxcZm9nb3RwYXNzXFxmb2dvdHBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFDSixFQUFBOztBQUNBO0VBQ0ksWUFBWTtFQUNaLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLHlCQUEwQixFQUFBOztBQUc5QjtFQUNJLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBR3pCO0VBQ0cseUJBQTBCLEVBQUE7O0FBRTdCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNELGdCQUFnQixFQUFBOztBQUVmO0VBQ0cseUJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb2dvdHBhc3MvZm9nb3RwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyOHB4XHJcbn1cclxuLmNlbmltZ3tcclxuICAgIGhlaWdodDogNzFweDsgXHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi5zZWxle1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuICAgICAgIFxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuXHJcbiB9XHJcbiBpb24tdGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuIC5wc3d7XHJcbiAgICAgY29sb3I6c2t5Ymx1ZTtcclxuIH1cclxuIC5pb24tY29udGVudHtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuIH1cclxuIGlvbi1idXR0b25ze1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7ICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/fogotpass/fogotpass.page.ts":
/*!*********************************************!*\
  !*** ./src/app/fogotpass/fogotpass.page.ts ***!
  \*********************************************/
/*! exports provided: FogotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FogotpassPage", function() { return FogotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var FogotpassPage = /** @class */ (function () {
    function FogotpassPage(nav, route, auth, formBuilder, menu) {
        this.nav = nav;
        this.route = route;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 1 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 20 characters long.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'dob': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password must be at least 1 characters long.' },
            ],
        };
        this.menu.enable(true);
        this.validations_form = formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                //Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
        });
    }
    FogotpassPage.prototype.ngOnInit = function () {
        console.log(22, localStorage.getItem("token"));
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
    FogotpassPage.prototype.login = function (formData) {
        var _this = this;
        this.auth.presentLoading();
        this.auth.login(formData.value).subscribe(function (res) {
            if (res.status == "success") {
                _this.nav.pop();
                // this.route.navigateByUrl('/list');
            }
            else if (res.status == "error") {
            }
        }, function () {
            // swal("Login failed, Login detils not exits ");
        });
    };
    FogotpassPage.prototype.back = function () {
        this.nav.pop();
    };
    FogotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fogotpass',
            template: __webpack_require__(/*! ./fogotpass.page.html */ "./src/app/fogotpass/fogotpass.page.html"),
            styles: [__webpack_require__(/*! ./fogotpass.page.scss */ "./src/app/fogotpass/fogotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
    ], FogotpassPage);
    return FogotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=fogotpass-fogotpass-module.js.map