(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-docrates-docrates-module"],{

/***/ "./src/app/doctor/docrates/docrates.module.ts":
/*!****************************************************!*\
  !*** ./src/app/doctor/docrates/docrates.module.ts ***!
  \****************************************************/
/*! exports provided: DocratesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocratesPageModule", function() { return DocratesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _docrates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docrates.page */ "./src/app/doctor/docrates/docrates.page.ts");







var routes = [
    {
        path: '',
        component: _docrates_page__WEBPACK_IMPORTED_MODULE_6__["DocratesPage"]
    }
];
var DocratesPageModule = /** @class */ (function () {
    function DocratesPageModule() {
    }
    DocratesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_docrates_page__WEBPACK_IMPORTED_MODULE_6__["DocratesPage"]]
        })
    ], DocratesPageModule);
    return DocratesPageModule;
}());



/***/ }),

/***/ "./src/app/doctor/docrates/docrates.page.html":
/*!****************************************************!*\
  !*** ./src/app/doctor/docrates/docrates.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-toolbar>\n    <ion-title>\n      Doctor Rating\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" >\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-content>\n      <form [formGroup]=\"validations_form\" >\n      <ion-card>\n  \n          <ion-item>\n              <small > <ion-label position=\"floating\">Doctor Name</ion-label></small>\n  \n              <ion-select  formControlName=\"docter_name\" \n              >\n              <ion-select-option *ngFor=\"let obj of doclist\">{{obj.name}}</ion-select-option>\n            \n            </ion-select>\n            \n          </ion-item>\n  \n  <ion-item>\n      <small > <ion-label position=\"floating\">Rating</ion-label></small>\n  \n  \n  <ion-select  formControlName=\"rating\" \n>\n  <ion-select-option value=\"1\">1</ion-select-option>\n  <ion-select-option value=\"2\">2</ion-select-option>\n  <ion-select-option value=\"3\">3</ion-select-option>\n  <ion-select-option value=\"4\">4</ion-select-option>\n  <ion-select-option value=\"5\">5</ion-select-option>\n  </ion-select>\n  </ion-item>\n  \n  <ion-item>\n      <small > <ion-label position=\"floating\">Comments</ion-label></small>\n  \n    <ion-textarea formControlName=\"comments\"   ></ion-textarea>\n  </ion-item>\n  \n  <ion-button (click)=\"addUser(validations_form)\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n</ion-card>  \n</form>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/doctor/docrates/docrates.page.scss":
/*!****************************************************!*\
  !*** ./src/app/doctor/docrates/docrates.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 28px; }\n\n.cenimg {\n  height: 71px;\n  padding-top: 10px; }\n\nion-icon {\n  color: #ffffff !important; }\n\n.sele {\n  padding-top: 30px; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-card {\n  border: 2px solid grey; }\n\n.psw {\n  color: skyblue; }\n\n.ion-content {\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL2RvY3JhdGVzL0Q6XFxuZXdhcHBvbG9cXHNpZGR1c2FpLmdpdFxcdHJ1bmsvc3JjXFxhcHBcXGRvY3RvclxcZG9jcmF0ZXNcXGRvY3JhdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0osRUFBQTs7QUFDQTtFQUNJLFlBQVk7RUFDWixpQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSxnQ0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLHNCQUFzQixFQUFBOztBQUd6QjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDRCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9kb2NyYXRlcy9kb2NyYXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaS1idXR0b257XHJcbiAgICBoZWlnaHQ6MjhweFxyXG59XHJcbi5jZW5pbWd7XHJcbiAgICBoZWlnaHQ6IDcxcHg7IFxyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG4uc2VsZXtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuXHJcbiB9XHJcbiAucHN3e1xyXG4gICAgIGNvbG9yOnNreWJsdWU7XHJcbiB9XHJcbiAuaW9uLWNvbnRlbnR7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/doctor/docrates/docrates.page.ts":
/*!**************************************************!*\
  !*** ./src/app/doctor/docrates/docrates.page.ts ***!
  \**************************************************/
/*! exports provided: DocratesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocratesPage", function() { return DocratesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");





var DocratesPage = /** @class */ (function () {
    function DocratesPage(nav, auth, formBuilder, model) {
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.model = model;
        this.patient_id = localStorage.getItem('patient_id');
        this.validations_form = this.formBuilder.group({
            docter_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.doctorlist();
    }
    DocratesPage.prototype.ngOnInit = function () {
    };
    DocratesPage.prototype.back = function () {
        this.nav.pop();
    };
    DocratesPage.prototype.addUser = function (labupdateForm) {
        var _this = this;
        this.validations_form.value.patient_id = this.patient_id;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.doctorrating(labupdateForm.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.nav.pop();
                    _this.auth.presentToast("saved successfully");
                    console.log("21", _this.validations_form);
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        });
    };
    DocratesPage.prototype.doctorlist = function () {
        var _this = this;
        this.auth.doctorlist().subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.doclist = res.response;
                }
            }
        });
    };
    DocratesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-docrates',
            template: __webpack_require__(/*! ./docrates.page.html */ "./src/app/doctor/docrates/docrates.page.html"),
            styles: [__webpack_require__(/*! ./docrates.page.scss */ "./src/app/doctor/docrates/docrates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], DocratesPage);
    return DocratesPage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-docrates-docrates-module.js.map