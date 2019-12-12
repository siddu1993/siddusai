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

module.exports = ".i-button {\n  height: 28px; }\n\n.cenimg {\n  height: 71px;\n  padding-top: 10px; }\n\nion-icon {\n  color: #ffffff !important; }\n\n.sele {\n  padding-top: 30px; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-card {\n  border: 2px solid grey; }\n\n.psw {\n  color: skyblue; }\n\n.ion-content {\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL2RvY3JhdGVzL0Q6XFxuZXdhcHBvbG9cXGFwcG9sby9zcmNcXGFwcFxcZG9jdG9yXFxkb2NyYXRlc1xcZG9jcmF0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFDSixFQUFBOztBQUNBO0VBQ0ksWUFBWTtFQUNaLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNELGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZG9jdG9yL2RvY3JhdGVzL2RvY3JhdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyOHB4XHJcbn1cclxuLmNlbmltZ3tcclxuICAgIGhlaWdodDogNzFweDsgXHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59XHJcbi5zZWxle1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTM4RDc1IWltcG9ydGFudCA7XHJcbiAgICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG5cclxuIH1cclxuIC5wc3d7XHJcbiAgICAgY29sb3I6c2t5Ymx1ZTtcclxuIH1cclxuIC5pb24tY29udGVudHtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuIH0iXX0= */"

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
        }, function () {
            swal("Login failed, Login detils not exits ");
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
        }, function () {
            _this.auth.presentToast("error");
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