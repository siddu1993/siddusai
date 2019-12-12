(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["labs-labrate-labrate-module"],{

/***/ "./src/app/labs/labrate/labrate.module.ts":
/*!************************************************!*\
  !*** ./src/app/labs/labrate/labrate.module.ts ***!
  \************************************************/
/*! exports provided: LabratePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabratePageModule", function() { return LabratePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _labrate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labrate.page */ "./src/app/labs/labrate/labrate.page.ts");







var routes = [
    {
        path: '',
        component: _labrate_page__WEBPACK_IMPORTED_MODULE_6__["LabratePage"]
    }
];
var LabratePageModule = /** @class */ (function () {
    function LabratePageModule() {
    }
    LabratePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_labrate_page__WEBPACK_IMPORTED_MODULE_6__["LabratePage"]]
        })
    ], LabratePageModule);
    return LabratePageModule;
}());



/***/ }),

/***/ "./src/app/labs/labrate/labrate.page.html":
/*!************************************************!*\
  !*** ./src/app/labs/labrate/labrate.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-toolbar>\n  <ion-title>\n    Lab Rating\n  </ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"back()\" >\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n<ion-content>\n    <form [formGroup]=\"validations_form\"  >\n    \n<ion-card>\n        <ion-item>\n            <small > <ion-label position=\"floating\">Lab Name</ion-label></small>\n\n            <ion-select  formControlName=\"lab_name\" \n            >\n            <ion-select-option *ngFor=\"let obj of lablist\">{{obj.name}}</ion-select-option>\n         \n          </ion-select>\n          \n        </ion-item>\n\n<ion-item>\n    <small > <ion-label position=\"floating\">Rating</ion-label></small>\n\n\n<ion-select  formControlName=\"rating\" \n>\n<ion-select-option value=\"1\">1</ion-select-option>\n<ion-select-option value=\"2\">2</ion-select-option>\n<ion-select-option value=\"3\">3</ion-select-option>\n<ion-select-option value=\"4\">4</ion-select-option>\n<ion-select-option value=\"5\">5</ion-select-option>\n</ion-select>\n</ion-item>\n\n<ion-item>\n    <small > <ion-label position=\"floating\">Comments</ion-label></small>\n\n  <ion-textarea formControlName=\"comments\"   ></ion-textarea>\n</ion-item>\n\n<ion-button (click)=\"addUser(validations_form)\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n</ion-card>\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/labs/labrate/labrate.page.scss":
/*!************************************************!*\
  !*** ./src/app/labs/labrate/labrate.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 28px; }\n\n.cenimg {\n  height: 71px;\n  padding-top: 10px; }\n\n.sele {\n  padding-top: 30px; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-title {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-card {\n  border: 2px solid grey; }\n\n.psw {\n  color: skyblue; }\n\n.ion-content {\n  overflow: hidden; }\n\nion-buttons {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFicy9sYWJyYXRlL0Q6XFxuZXdhcHBvbG9cXGFwcG9sby9zcmNcXGFwcFxcbGFic1xcbGFicmF0ZVxcbGFicmF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUNKLEVBQUE7O0FBQ0E7RUFDSSxZQUFZO0VBQ1osaUJBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBRUUsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHekI7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0QsZ0JBQWdCLEVBQUE7O0FBRWY7RUFDRyx5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhYnMvbGFicmF0ZS9sYWJyYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyOHB4XHJcbn1cclxuLmNlbmltZ3tcclxuICAgIGhlaWdodDogNzFweDsgXHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi5zZWxle1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59XHJcbi5lcnJvci1tZXNzYWdlXHJcbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuXHJcbiB9XHJcbiAucHN3e1xyXG4gICAgIGNvbG9yOnNreWJsdWU7XHJcbiB9XHJcbiAuaW9uLWNvbnRlbnR7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbiB9XHJcbiBpb24tYnV0dG9uc3tcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyAgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/labs/labrate/labrate.page.ts":
/*!**********************************************!*\
  !*** ./src/app/labs/labrate/labrate.page.ts ***!
  \**********************************************/
/*! exports provided: LabratePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabratePage", function() { return LabratePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");





var LabratePage = /** @class */ (function () {
    function LabratePage(nav, auth, formBuilder) {
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.patient_id = localStorage.getItem('patient_id');
        this.validations_form = this.formBuilder.group({
            lab_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.lablists();
    }
    LabratePage.prototype.ngOnInit = function () {
    };
    LabratePage.prototype.back = function () {
        this.nav.pop();
    };
    LabratePage.prototype.addUser = function (labupdateForm) {
        var _this = this;
        this.validations_form.value.patient_id = this.patient_id;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.labrating(labupdateForm.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.nav.pop();
                    _this.auth.presentToast("rated successfully");
                    console.log("21", _this.validations_form);
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            swal("Login failed, Login detils not exits ");
        });
    };
    LabratePage.prototype.lablists = function () {
        var _this = this;
        this.auth.lablist().subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.lablist = res.response;
                }
            }
        }, function () {
            _this.auth.presentToast("error");
        });
    };
    LabratePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labrate',
            template: __webpack_require__(/*! ./labrate.page.html */ "./src/app/labs/labrate/labrate.page.html"),
            styles: [__webpack_require__(/*! ./labrate.page.scss */ "./src/app/labs/labrate/labrate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LabratePage);
    return LabratePage;
}());



/***/ })

}]);
//# sourceMappingURL=labs-labrate-labrate-module.js.map