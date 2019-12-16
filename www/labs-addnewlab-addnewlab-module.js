(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["labs-addnewlab-addnewlab-module"],{

/***/ "./src/app/labs/addnewlab/addnewlab.module.ts":
/*!****************************************************!*\
  !*** ./src/app/labs/addnewlab/addnewlab.module.ts ***!
  \****************************************************/
/*! exports provided: AddnewlabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewlabPageModule", function() { return AddnewlabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addnewlab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addnewlab.page */ "./src/app/labs/addnewlab/addnewlab.page.ts");







var routes = [
    {
        path: '',
        component: _addnewlab_page__WEBPACK_IMPORTED_MODULE_6__["AddnewlabPage"]
    }
];
var AddnewlabPageModule = /** @class */ (function () {
    function AddnewlabPageModule() {
    }
    AddnewlabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addnewlab_page__WEBPACK_IMPORTED_MODULE_6__["AddnewlabPage"]]
        })
    ], AddnewlabPageModule);
    return AddnewlabPageModule;
}());



/***/ }),

/***/ "./src/app/labs/addnewlab/addnewlab.page.html":
/*!****************************************************!*\
  !*** ./src/app/labs/addnewlab/addnewlab.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\" >\n            <ion-icon name=\"arrow-back\"  ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    <ion-title>Lab Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"validations_form\" >\n\n    <ion-card>\n\n        <ion-grid>\n           \n         \n           \n       \n          <ion-row>\n      \n          \n                <ion-col>\n                </ion-col>  \n          </ion-row> \n          <ion-row>   \n          <ion-col size=\"6\">\n           \n            <ion-item>\n              <ion-label  position=\"floating\" ><small>name</small></ion-label>\n              <ion-input formControlName=\"name\"  ></ion-input>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n              </ion-col>\n    \n              <ion-col size=\"6\">\n           \n                <ion-item>\n                  <ion-label  position=\"floating\" ><small>Password</small></ion-label>\n                  <ion-input formControlName=\"password\"  ></ion-input>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n    \n        </ion-row>\n        \n\n    \n          <ion-row>\n                \n        \n           \n            \n          \n                <ion-col size=\"6\">\n                 \n              <ion-item >\n                <ion-label position=\"floating\" ><small>Address</small></ion-label>\n                <ion-input   formControlName=\"address\"  ></ion-input>\n                \n              </ion-item>\n              <ng-container *ngFor=\"let validation of validation_messages.address\">\n                  <div class=\"error-message\" *ngIf=\"validations_form.get('address').hasError(validation.type) && (validations_form.get('address').dirty || validations_form.get('address').touched)\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n                </ion-col>\n                <ion-col size=\"6\">\n                       \n               \n                  <ion-item>\n                      <ion-label position=\"floating\" ><small>phone no</small></ion-label>\n                      <ion-input  type=\"number\" formControlName=\"lab_phone\"  ></ion-input> \n                  </ion-item>\n\n                  <ng-container *ngFor=\"let validation of validation_messages.lab_phone\">\n                      <div class=\"error-message\" *ngIf=\"validations_form.get('lab_phone').hasError(validation.type) && (validations_form.get('lab_phone').dirty || validations_form.get('lab_phone').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                      </div>\n                    </ng-container>\n                </ion-col>\n              </ion-row>\n    \n         \n            \n             \n            \n              <ion-row>\n                \n                    <ion-col size=\"6\">\n                       \n               \n                      <ion-item>\n                          <ion-label position=\"floating\" ><small>City</small></ion-label>\n                          <ion-input   formControlName=\"city\"  ></ion-input> \n                      </ion-item>\n    \n                      <ng-container *ngFor=\"let validation of validation_messages.city\">\n                          <div class=\"error-message\" *ngIf=\"validations_form.get('city').hasError(validation.type) && (validations_form.get('city').dirty || validations_form.get('city').touched)\">\n                            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                          </div>\n                        </ng-container>\n                    </ion-col>\n                 \n            \n                  \n                    <ion-col size=\"6\">\n                   \n               \n                        <ion-item>\n\n                            <ion-label position=\"floating\" ><small>State</small></ion-label>\n                            <ion-input   formControlName=\"state\"  ></ion-input> \n\n\n                  \n                        </ion-item>\n      \n                        <ng-container *ngFor=\"let validation of validation_messages.state\">\n                            <div class=\"error-message\" *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n                              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                            </div>\n                          </ng-container>\n                      </ion-col>\n\n\n                     \n            \n                </ion-row>\n               \n                <div text-center>\n                    <ion-button (click)=\"labregister(validations_form)\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n                   \n                            \n                  </div>   \n              \n        \n    </ion-grid>\n      </ion-card>\n     \n        </form>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/labs/addnewlab/addnewlab.page.scss":
/*!****************************************************!*\
  !*** ./src/app/labs/addnewlab/addnewlab.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFicy9hZGRuZXdsYWIvRDpcXG5ld2FwcG9sb1xcc2lkZHVzYWkuZ2l0XFx0cnVuay9zcmNcXGFwcFxcbGFic1xcYWRkbmV3bGFiXFxhZGRuZXdsYWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkFBMEIsRUFBQTs7QUFFNUI7RUFDRSx5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhYnMvYWRkbmV3bGFiL2FkZG5ld2xhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7ICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/labs/addnewlab/addnewlab.page.ts":
/*!**************************************************!*\
  !*** ./src/app/labs/addnewlab/addnewlab.page.ts ***!
  \**************************************************/
/*! exports provided: AddnewlabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewlabPage", function() { return AddnewlabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var AddnewlabPage = /** @class */ (function () {
    function AddnewlabPage(fb, nav, router, 
    // private formBuilder: FormBuilder,
    auth, route) {
        this.fb = fb;
        this.nav = nav;
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'name is required.' },
                { type: 'minlength', message: 'name must be at least 1 characters long.' },
            ],
            'lab_phone': [
                { type: 'required', message: 'phone_no is required.' },
            ],
            'password': [
                { type: 'required', message: 'password is required.' }
            ],
            'address': [
                { type: 'required', message: 'address is required.' },
            ],
            'city': [
                { type: 'required', message: 'city  is required.' }
            ],
            'state': [
                { type: 'required', message: 'state  is required.' }
            ],
        };
    }
    AddnewlabPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    AddnewlabPage.prototype.createForm = function () {
        this.validations_form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lab_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddnewlabPage.prototype.back = function () {
        this.nav.pop();
    };
    AddnewlabPage.prototype.labregister = function (validations_form) {
        var _this = this;
        this.auth.lab(validations_form.value).subscribe(function (res) {
            if (res.status == "success") {
                _this.nav.pop();
                _this.auth.presentToast("saved successfully");
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
    AddnewlabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addnewlab',
            template: __webpack_require__(/*! ./addnewlab.page.html */ "./src/app/labs/addnewlab/addnewlab.page.html"),
            styles: [__webpack_require__(/*! ./addnewlab.page.scss */ "./src/app/labs/addnewlab/addnewlab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddnewlabPage);
    return AddnewlabPage;
}());



/***/ })

}]);
//# sourceMappingURL=labs-addnewlab-addnewlab-module.js.map