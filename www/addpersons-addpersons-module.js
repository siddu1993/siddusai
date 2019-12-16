(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addpersons-addpersons-module"],{

/***/ "./src/app/addpersons/addpersons.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addpersons/addpersons.module.ts ***!
  \*************************************************/
/*! exports provided: AddpersonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpersonsPageModule", function() { return AddpersonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addpersons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addpersons.page */ "./src/app/addpersons/addpersons.page.ts");







var routes = [
    {
        path: '',
        component: _addpersons_page__WEBPACK_IMPORTED_MODULE_6__["AddpersonsPage"]
    }
];
var AddpersonsPageModule = /** @class */ (function () {
    function AddpersonsPageModule() {
    }
    AddpersonsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addpersons_page__WEBPACK_IMPORTED_MODULE_6__["AddpersonsPage"]]
        })
    ], AddpersonsPageModule);
    return AddpersonsPageModule;
}());



/***/ }),

/***/ "./src/app/addpersons/addpersons.page.html":
/*!*************************************************!*\
  !*** ./src/app/addpersons/addpersons.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-toolbar>\n    <ion-title>\n      Add Persons\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" >\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-content>\n      <form [formGroup]=\"validations_form\">\n      <ion-card>\n  \n          <ion-item>\n              <small > <ion-label position=\"floating\">Name</ion-label></small>\n              <ion-input formControlName=\"name\"  ></ion-input>\n\n\n            \n          </ion-item>\n  \n  <ion-item>\n      <small > <ion-label position=\"floating\">gender</ion-label></small>\n  \n  \n  <ion-select  formControlName=\"gender\" \n >\n  <ion-select-option value=\"Male\">Male</ion-select-option>\n  <ion-select-option value=\"Female\">Female</ion-select-option>\n \n  </ion-select>\n  </ion-item>\n  \n  <ion-item>\n      <small > <ion-label position=\"floating\">age</ion-label></small>\n      <ion-input formControlName=\"age\" type='number' ></ion-input>\n\n  </ion-item>\n  \n  <ion-button (click)=\"addUser(validations_form)\"  fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n  </ion-card>\n  </form>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/addpersons/addpersons.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addpersons/addpersons.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcGVyc29ucy9EOlxcbmV3YXBwb2xvXFxzaWRkdXNhaS5naXRcXHRydW5rL3NyY1xcYXBwXFxhZGRwZXJzb25zXFxhZGRwZXJzb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UseUJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UseUJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGRwZXJzb25zL2FkZHBlcnNvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMTM4RDc1IWltcG9ydGFudCA7XHJcbiAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbn1cclxuaW9uLXRpdGxle1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24tYnV0dG9uc3tcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/addpersons/addpersons.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addpersons/addpersons.page.ts ***!
  \***********************************************/
/*! exports provided: AddpersonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpersonsPage", function() { return AddpersonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var AddpersonsPage = /** @class */ (function () {
    function AddpersonsPage(nav, auth, formBuilder, model) {
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.model = model;
        this.patient_id = localStorage.getItem('patient_id');
        this.validations_form = this.formBuilder.group({
            patient_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    AddpersonsPage.prototype.ngOnInit = function () {
    };
    AddpersonsPage.prototype.back = function () {
        this.nav.pop();
    };
    AddpersonsPage.prototype.addUser = function (e) {
        var _this = this;
        this.validations_form.value.patient_id = this.patient_id;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.child(e.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.nav.pop();
                    _this.auth.presentToast("member added successfully");
                    console.log("21", _this.validations_form);
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        });
    };
    AddpersonsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpersons',
            template: __webpack_require__(/*! ./addpersons.page.html */ "./src/app/addpersons/addpersons.page.html"),
            styles: [__webpack_require__(/*! ./addpersons.page.scss */ "./src/app/addpersons/addpersons.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], AddpersonsPage);
    return AddpersonsPage;
}());



/***/ })

}]);
//# sourceMappingURL=addpersons-addpersons-module.js.map