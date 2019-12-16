(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-chckpdetails-chckpdetails-module"],{

/***/ "./src/app/doctor/chckpdetails/chckpdetails.module.ts":
/*!************************************************************!*\
  !*** ./src/app/doctor/chckpdetails/chckpdetails.module.ts ***!
  \************************************************************/
/*! exports provided: ChckpdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChckpdetailsPageModule", function() { return ChckpdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chckpdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chckpdetails.page */ "./src/app/doctor/chckpdetails/chckpdetails.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var routes = [
    {
        path: '',
        component: _chckpdetails_page__WEBPACK_IMPORTED_MODULE_6__["ChckpdetailsPage"]
    }
];
var ChckpdetailsPageModule = /** @class */ (function () {
    function ChckpdetailsPageModule() {
    }
    ChckpdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chckpdetails_page__WEBPACK_IMPORTED_MODULE_6__["ChckpdetailsPage"]]
        })
    ], ChckpdetailsPageModule);
    return ChckpdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/doctor/chckpdetails/chckpdetails.page.html":
/*!************************************************************!*\
  !*** ./src/app/doctor/chckpdetails/chckpdetails.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" >\n        <ion-icon name=\"arrow-back\"  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Doctor  Visits</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n \n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          DoctorId: {{docter_id}}\n        </div>\n        <div class=\"col-sm\">\n          Name    :{{docname}}\n        </div>\n        <div class=\"col-sm\">\n          Patient:{{patient_id}}\n        </div>\n      </div>\n    </div>\n\n\n    <div>\n    <ion-item  lines=\"none\">\n    \n     \n      <u slot='start'> <p   (click)=\"history()\">View History</p></u>\n    </ion-item>\n  </div>\n  <form class=\"col s12 offset-s4\" [formGroup]=\"patientupdateForm\" (ngSubmit)=\"save(patientupdateForm)\">\n\n    <div class=\"container\">\n\n\n      <ion-row *ngIf=\"userData !=''\">\n        \n      <ion-item>\n       <ion-label position=\"floating\">Name</ion-label>\n      <ion-select  formControlName=\"child_name\" \n      >\n      <ion-select-option  value=\"\">{{full_name}}</ion-select-option>\n   \n      <ion-select-option *ngFor=\"let obj of userData\" value=\"{{obj.name }}\">{{obj.name }}</ion-select-option>\n      </ion-select>\n      </ion-item>\n  \n  </ion-row>\n\n\n  <ion-item >\n    <ion-label position=\"floating\">Reason for Visit</ion-label>\n    <ion-input formControlName=\"reason\"></ion-input>\n    </ion-item>\n   \n        <ion-item >\n      <ion-label position=\"floating\" >Blood Pressure</ion-label>\n      <ion-input formControlName=\"blood_pressure\"></ion-input>\n      </ion-item>\n \n        <ion-item >\n      <ion-label position=\"floating\" >Doctor's comments</ion-label>\n      <ion-input  formControlName=\"comments\" ></ion-input>\n      </ion-item>\n  \n   \n\n   \n        <ion-item >\n      <ion-label position=\"floating\">Medicine Prescribed</ion-label>\n      <ion-input formControlName=\"medicine_prescribed\"></ion-input>\n      </ion-item>\n\n    <ion-item >\n      <ion-label >Any Lab Test required?</ion-label>\n      <ion-checkbox  formControlName=\"labtest_required\" (ionChange)=\"check($event)\"></ion-checkbox>\n      \n      </ion-item>\n\n      <ion-item *ngIf=\"ch==true\">\n        <ion-label>Test Name</ion-label>\n        <ionic-selectable\n        formControlName=\"test_name\"\n          [(ngModel)]=\"port\"\n          [items]=\"testname\"\n          [isMultiple]=\"true\"\n\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n\n\n  \n      <ion-item lines=\"none\">\n <ion-button  color=\"primary\"  (click)=\"save(patientupdateForm)\"  shape=\"round\">Submit</ion-button>\n</ion-item>\n    </div>\n</form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/doctor/chckpdetails/chckpdetails.page.scss":
/*!************************************************************!*\
  !*** ./src/app/doctor/chckpdetails/chckpdetails.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL2NoY2twZGV0YWlscy9EOlxcbmV3YXBwb2xvXFxzaWRkdXNhaS5naXRcXHRydW5rL3NyY1xcYXBwXFxkb2N0b3JcXGNoY2twZGV0YWlsc1xcY2hja3BkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kseUJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3IvY2hja3BkZXRhaWxzL2NoY2twZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/doctor/chckpdetails/chckpdetails.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/doctor/chckpdetails/chckpdetails.page.ts ***!
  \**********************************************************/
/*! exports provided: ChckpdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChckpdetailsPage", function() { return ChckpdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ChckpdetailsPage = /** @class */ (function () {
    function ChckpdetailsPage(activatedRoute, modalController, formBuilder, nav, route, auth, menu) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.route = route;
        this.auth = auth;
        this.menu = menu;
        this.data = "";
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.editdc = params['test_id'];
            if (_this.editdc != undefined) {
                _this.data = JSON.parse(_this.editdc);
                console.log("hi test_id", _this.data);
                if (_this.data != "") {
                    _this.patientupdateForm.patchValue(_this.data);
                    _this.patientupdateForm.value.test_name = _this.data.test_name.name;
                    _this.port = _this.data.test_name;
                }
            }
            // Print the parameter to the console. 
        });
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.full_name = localStorage.getItem("full_name");
        this.patient_id = localStorage.getItem("patient_id");
        this.docname = this.userData.docter_name;
        this.docter_id = this.userData.docter_id;
        this.ch = false;
        this.patientupdateForm = this.formBuilder.group({
            blood_pressure: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medicine_prescribed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            labtest_required: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            child_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            patient_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            docter_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            docter_name: [this.docname],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test_name: ['']
        });
        this.list();
    }
    ChckpdetailsPage.prototype.history = function () {
        this.route.navigateByUrl('/patentmedicalhistory');
    };
    ChckpdetailsPage.prototype.ngOnInit = function () {
        console.log("in patc");
    };
    ChckpdetailsPage.prototype.save = function (patientupdateForm) {
        var _this = this;
        this.patientupdateForm.value.patient_id = this.patient_id;
        this.patientupdateForm.value.docter_id = localStorage.getItem("docter_id");
        this.auth.doctorvisit(patientupdateForm.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.nav.pop();
                    _this.auth.presentToast("saved successfully");
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        });
    };
    ChckpdetailsPage.prototype.view = function () {
        this.route.navigateByUrl('/patentmedicalhistory');
    };
    ChckpdetailsPage.prototype.list = function () {
        var _this = this;
        console.log("in patch");
        this.auth.findchild({ patient_id: this.patient_id }).subscribe(function (res) {
            if (res.status == "success") {
                _this.userData = res.response;
                // localStorage.setItem("full_name",this.name);
                // this.router.navigateByUrl("/patientsearch");
                _this.search();
            }
        });
    };
    ChckpdetailsPage.prototype.check = function (e) {
        console.log(e.detail);
        this.ch = e.detail.checked;
    };
    ChckpdetailsPage.prototype.portChange = function (event) {
        var va = event.value;
        var c = 0;
        for (var i = 0; i < event.value; i++) {
            if (va[i].relation == 0) {
                c++;
            }
        }
        //this.comp(event.value.id);
        this.patientupdateForm.value.test_name = event.value;
        console.log('port:', event.value);
    };
    ChckpdetailsPage.prototype.testbyid = function () {
        var _this = this;
        this.auth.testbyid().subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.testname = res.response;
                }
            }
        });
    };
    ChckpdetailsPage.prototype.back = function () {
        this.nav.pop();
    };
    ChckpdetailsPage.prototype.search = function () {
        var _this = this;
        this.auth.lab_tests().subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.testname = res.response;
                }
            }
        });
    };
    ChckpdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chckpdetails',
            template: __webpack_require__(/*! ./chckpdetails.page.html */ "./src/app/doctor/chckpdetails/chckpdetails.page.html"),
            styles: [__webpack_require__(/*! ./chckpdetails.page.scss */ "./src/app/doctor/chckpdetails/chckpdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], ChckpdetailsPage);
    return ChckpdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-chckpdetails-chckpdetails-module.js.map