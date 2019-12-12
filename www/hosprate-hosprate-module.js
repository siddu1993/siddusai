(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hosprate-hosprate-module"],{

/***/ "./src/app/hosprate/hosprate.module.ts":
/*!*********************************************!*\
  !*** ./src/app/hosprate/hosprate.module.ts ***!
  \*********************************************/
/*! exports provided: HospratePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospratePageModule", function() { return HospratePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hosprate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hosprate.page */ "./src/app/hosprate/hosprate.page.ts");







var routes = [
    {
        path: '',
        component: _hosprate_page__WEBPACK_IMPORTED_MODULE_6__["HospratePage"]
    }
];
var HospratePageModule = /** @class */ (function () {
    function HospratePageModule() {
    }
    HospratePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hosprate_page__WEBPACK_IMPORTED_MODULE_6__["HospratePage"]]
        })
    ], HospratePageModule);
    return HospratePageModule;
}());



/***/ }),

/***/ "./src/app/hosprate/hosprate.page.html":
/*!*********************************************!*\
  !*** ./src/app/hosprate/hosprate.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-toolbar>\n  <ion-title>\n    Hospital Rating\n  </ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"back()\" >\n      <ion-icon name=\"arrow-back\"  ></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n<ion-content>\n    <ion-card>\n\n    <form [formGroup]=\"validations_form\">\n      <ion-item>\n        <small > <ion-label position=\"floating\">Select Hospital</ion-label></small>\n\n  <ion-select  formControlName=\"hospital_name\"\n  >\n  <ion-select-option *ngFor=\"let obj of hoslist\">{{obj.name}}</ion-select-option>\n \n</ion-select>\n</ion-item>\n\n<ion-item>\n    <small > <ion-label position=\"floating\">Rating</ion-label></small>\n\n<ion-select  formControlName=\"rating\" \nplaceholder=\"Rating\">\n<ion-select-option value=\"1\">1</ion-select-option>\n<ion-select-option value=\"2\">2</ion-select-option>\n<ion-select-option value=\"3\">3</ion-select-option>\n<ion-select-option value=\"4\">4</ion-select-option>\n<ion-select-option value=\"5\">5</ion-select-option>\n</ion-select>\n</ion-item>\n<ion-item>\n    <small > <ion-label position=\"floating\">Comments</ion-label></small>\n\n  <ion-textarea  formControlName=\"comments\" placeholder=\"Comments\"></ion-textarea>\n</ion-item>\n\n<ion-button (click)=\"rate(validations_form)\" [disabled]=\"!validations_form.valid\" fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n\n    </form>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/hosprate/hosprate.page.scss":
/*!*********************************************!*\
  !*** ./src/app/hosprate/hosprate.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 28px; }\n\n.cenimg {\n  height: 71px;\n  padding-top: 10px; }\n\n.sele {\n  padding-top: 30px; }\n\nion-title {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-card {\n  border: 2px solid grey; }\n\n.psw {\n  color: skyblue; }\n\n.ion-content {\n  overflow: hidden; }\n\nion-buttons {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcHJhdGUvRDpcXG5ld2FwcG9sb1xcYXBwb2xvL3NyY1xcYXBwXFxob3NwcmF0ZVxcaG9zcHJhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFDSixFQUFBOztBQUNBO0VBQ0ksWUFBWTtFQUNaLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLHlCQUEwQixFQUFBOztBQUc5QjtFQUNJLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNELGdCQUFnQixFQUFBOztBQUVmO0VBQ0cseUJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob3NwcmF0ZS9ob3NwcmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaS1idXR0b257XHJcbiAgICBoZWlnaHQ6MjhweFxyXG59XHJcbi5jZW5pbWd7XHJcbiAgICBoZWlnaHQ6IDcxcHg7IFxyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG4uc2VsZXtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG4uZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcblxyXG4gfVxyXG4gLnBzd3tcclxuICAgICBjb2xvcjpza3libHVlO1xyXG4gfVxyXG4gLmlvbi1jb250ZW50e1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG4gaW9uLWJ1dHRvbnN7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/hosprate/hosprate.page.ts":
/*!*******************************************!*\
  !*** ./src/app/hosprate/hosprate.page.ts ***!
  \*******************************************/
/*! exports provided: HospratePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospratePage", function() { return HospratePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var HospratePage = /** @class */ (function () {
    function HospratePage(nav, auth, formBuilder, model) {
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.model = model;
        this.patient_id = localStorage.getItem('patient_id');
        this.validations_form = this.formBuilder.group({
            hospital_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.hoslists();
    }
    HospratePage.prototype.ngOnInit = function () {
    };
    HospratePage.prototype.rate = function (labupdateForm) {
        var _this = this;
        this.validations_form.value.patient_id = this.patient_id;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.hosprate(labupdateForm.value).subscribe(function (res) {
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
            // swal("Login failed, Login detils not exits ");
        });
    };
    HospratePage.prototype.hoslists = function () {
        var _this = this;
        this.auth.hospitalList().subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.hoslist = res.response;
                }
            }
        }, function () {
            _this.auth.presentToast("error");
        });
    };
    HospratePage.prototype.back = function () {
        this.nav.pop();
    };
    HospratePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hosprate',
            template: __webpack_require__(/*! ./hosprate.page.html */ "./src/app/hosprate/hosprate.page.html"),
            styles: [__webpack_require__(/*! ./hosprate.page.scss */ "./src/app/hosprate/hosprate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], HospratePage);
    return HospratePage;
}());



/***/ })

}]);
//# sourceMappingURL=hosprate-hosprate-module.js.map