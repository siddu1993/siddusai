(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patiandocvisits-patiandocvisits-module"],{

/***/ "./src/app/patiandocvisits/patiandocvisits.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/patiandocvisits/patiandocvisits.module.ts ***!
  \***********************************************************/
/*! exports provided: PatiandocvisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatiandocvisitsPageModule", function() { return PatiandocvisitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patiandocvisits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patiandocvisits.page */ "./src/app/patiandocvisits/patiandocvisits.page.ts");







var routes = [
    {
        path: '',
        component: _patiandocvisits_page__WEBPACK_IMPORTED_MODULE_6__["PatiandocvisitsPage"]
    }
];
var PatiandocvisitsPageModule = /** @class */ (function () {
    function PatiandocvisitsPageModule() {
    }
    PatiandocvisitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_patiandocvisits_page__WEBPACK_IMPORTED_MODULE_6__["PatiandocvisitsPage"]]
        })
    ], PatiandocvisitsPageModule);
    return PatiandocvisitsPageModule;
}());



/***/ }),

/***/ "./src/app/patiandocvisits/patiandocvisits.page.html":
/*!***********************************************************!*\
  !*** ./src/app/patiandocvisits/patiandocvisits.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" >\n        <ion-icon name=\"arrow-back\"  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Patient's Doctors Visits</ion-title>\n  </ion-toolbar>\n \n\n  <ion-toolbar>\n\n      <ion-row *ngIf=\"doclist!=''\">\n          <ion-col size=\"3\">\n              <small>   <ion-select [(ngModel)]=\"searchOptions.docter_name\" \n              >\n              <ion-select-option  value=''>Doctor Name</ion-select-option>\n              <ion-select-option value='{{obj.name}}' *ngFor=\"let obj of doclist\">{{obj.name}}</ion-select-option>\n              \n              </ion-select></small>\n            </ion-col>\n            <ion-col size=\"3\">\n                <small> <ion-select [(ngModel)]=\"searchOptions.year\" \n                placeholder=\"eg year\">\n                <ion-select-option  value=''>year</ion-select-option>\n                <ion-select-option value='{{obj.year}}' *ngFor=\"let obj of years\">{{obj.year}}</ion-select-option>\n                \n                </ion-select></small>\n              </ion-col>\n              <ion-col size=\"3\">\n                  <small>   <ion-select [(ngModel)]=\"searchOptions.child_name\">\n                      <ion-select-option  value=\"\">{{full_name}}</ion-select-option>\n                      <ion-select-option *ngFor=\"let obj of child\"  value=\"{{obj.name}}\">{{obj.name }}</ion-select-option>\n                    </ion-select></small>\n                  \n                </ion-col>\n                <ion-col size=\"3\">\n               \n                      <button type=\"button\"  (click)=\"searchData()\" class=\"btn btn-primary btn-sm\">Search</button>\n                   \n              \n                  </ion-col>\n\n    </ion-row>\n    <ion-row *ngIf=\"doclist==''\">\n<div text-center><p>no data found</p></div>\n    </ion-row>\n    \n      </ion-toolbar>\n      <h6>\n     \n        <h6 slot=\"end\">patient id :{{patient_id}}</h6>\n    </h6>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"cardsize\" *ngFor=\"let item of visits\">\n    \n  \n    <ion-item class=\"activated\" lines=\"none\">\n      <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n      <h6 slot=\"start\">Doctor Name</h6>\n      <small slot=\"end\">{{item.docter_name}}</small>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <h6 slot=\"start\">Blood Pressure</h6>\n      <h6 slot=\"end\">{{item.blood_pressure}}</h6>\n    </ion-item>\n\n    <ion-item class=\"activated\" lines=\"none\">\n      <h6 slot=\"start\">Reason for Visit</h6>\n      <h6 slot=\"end\">{{item.reason}}</h6>\n    </ion-item>\n    <ion-item lines=\"none\" >\n      <h6 slot=\"start\">Doctors Comments </h6>\n     <small slot=\"end\"> <p slot=\"end\">{{item.comments}}</p></small>\n    </ion-item>\n    <ion-item class=\"activated\">\n      <h6 slot=\"start\">Medicine Prescribed </h6>\n      <h6 slot=\"end\">{{item.medicine_prescribed}}</h6>\n    </ion-item>\n    <ion-item  lines=\"none\">\n      <h6 slot=\"start\">Lab Test Recommended </h6>\n      <h6 slot=\"end\">{{item.labtest_required}}</h6>\n    </ion-item>\n    <ion-item  class=\"activated\">\n      <h6 slot=\"start\">Date</h6>\n      <h6 slot=\"end\">{{item.date  | date:'dd-MM-yyyy'}}</h6>\n    </ion-item>\n \n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patiandocvisits/patiandocvisits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/patiandocvisits/patiandocvisits.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 25px;\n  color: #ffffff !important;\n  opacity: 1 !important;\n  background-color: #2E8B57 !important; }\n\nion-button {\n  height: 30px; }\n\n.icon-size {\n  height: 35px;\n  width: 35px;\n  color: #ffffff; }\n\nion-select {\n  color: #ffffff; }\n\nion-card {\n  border: 2px solid grey; }\n\n.cardsize {\n  --background-color: #2E8B57!important; }\n\nion-input {\n  border: solid 0.2px gray;\n  border-color: #2E8B57;\n  height: 35px;\n  padding-left: 10px;\n  text-align: center;\n  border-end-end-radius: 0.2px;\n  font-size: 12px;\n  padding: 1px; }\n\n.aligs {\n  padding-left: 10px !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\n.hed {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important;\n  opacity: 1 !important;\n  --background: #138D75!important ; }\n\nion-menu-button {\n  color: #ffffff !important; }\n\nion-input {\n  border: 1px solid greenyellow;\n  color: #ffffff;\n  border-radius: 17px; }\n\n.selector {\n  width: 100px;\n  height: 40px;\n  border: 1px solid greenyellow;\n  padding: 10px;\n  margin-right: 30px;\n  outline-color: #A7D5E4;\n  color: white;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWFuZG9jdmlzaXRzL0Q6XFxuZXdhcHBvbG9cXGFwcG9sby9zcmNcXGFwcFxccGF0aWFuZG9jdmlzaXRzXFxwYXRpYW5kb2N2aXNpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksWUFBVztFQUNYLHlCQUEwQjtFQUN0QixxQkFBcUI7RUFDdEIsb0NBQW1DLEVBQUE7O0FBRTFDO0VBQ0ksWUFBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFFWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHFDQUFtQixFQUFBOztBQUluQjtFQUNHLHdCQUF3QjtFQUN4QixxQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2Y7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSx5QkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxnQ0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUV2QjtFQUVJLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kseUJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixnQ0FBYSxFQUFBOztBQUlqQjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBaUJ2QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXRpYW5kb2N2aXNpdHMvcGF0aWFuZG9jdmlzaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jYXJkc2l6ZXtcclxuLy8gICAgIHdpZHRoOiA0MDBweDtcclxuLy8gfVxyXG5cclxuLmktYnV0dG9ue1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFOEI1NyFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDozMHB4OyAgIFxyXG59XHJcbi5pY29uLXNpemV7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcblxyXG4gfVxyXG4uY2FyZHNpemV7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMyRThCNTchaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgIGJvcmRlcjogc29saWQgMC4ycHggZ3JheTtcclxuICAgICAgIGJvcmRlci1jb2xvcjojMkU4QjU3O1xyXG4gICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwLjJweDtcclxuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgIHBhZGRpbmc6IDFweDtcclxuXHJcbiAgICB9XHJcbiAgICAuYWxpZ3N7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLmhlZHtcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6ICMyRThCNTcgIWltcG9ydGFudFxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxuICAgIH1cclxuICAgIGlvbi1idXR0b25ze1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMTM4RDc1IWltcG9ydGFudCA7XHJcbiAgICB9XHJcbiAgIFxyXG4gIFxyXG4gICAgaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICAvLyBpb24tc2VsZWN0e1xyXG4gICAgLy8gICAgIC8vIC0tcGxhY2Vob2xkZXItY29sb3I6ICNlNmQ0ZDQ7XHJcbiAgICAvLyAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgLy8gICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmZmZmYgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaW9uLXNlbGVjdCB7XHJcbiAgICAvLyAgICAgYm9yZGVyOiAgMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgLy8gICAgIGNvbG9yOndoaXRlO1xyXG4gICAgLy8gICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAuc2VsZWN0b3J7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBvdXRsaW5lLWNvbG9yOiNBN0Q1RTQ7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgLy8gaW9uLXRleHR7XHJcbiAgICAvLyAgIGNvbG9yOiMxMzhENzUhaW1wb3J0YW50IDsgIFxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/patiandocvisits/patiandocvisits.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/patiandocvisits/patiandocvisits.page.ts ***!
  \*********************************************************/
/*! exports provided: PatiandocvisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatiandocvisitsPage", function() { return PatiandocvisitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var PatiandocvisitsPage = /** @class */ (function () {
    function PatiandocvisitsPage(modalController, nav, route, auth, menu) {
        this.modalController = modalController;
        this.nav = nav;
        this.route = route;
        this.auth = auth;
        this.menu = menu;
        this.searchOptions = {
            year: "",
            docter_name: "",
            child_name: ""
        };
        this.years = [{ year: 2019 }, { year: 2020 }, { year: 2021 }, { year: 2022 }, { year: 2023 }, { year: 2024 }, { year: 2025 }, { year: 2026 }, { year: 2027 }, { year: 2028 }];
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.full_name = localStorage.getItem("full_name");
        this.patient_id = localStorage.getItem("patient_id");
        this.patientlist();
    }
    PatiandocvisitsPage.prototype.ngOnInit = function () {
    };
    PatiandocvisitsPage.prototype.back = function () {
        this.nav.pop();
    };
    PatiandocvisitsPage.prototype.patientlist = function () {
        var _this = this;
        this.auth.patienthist({ patient_id: this.patient_id }).subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.visits = res.response;
                    //  this.name=res.response[0].full_name;
                    _this.doctorlist();
                }
            }
        }, function () {
            _this.auth.presentToast("error");
        });
    };
    PatiandocvisitsPage.prototype.doctorlist = function () {
        var _this = this;
        this.auth.doctorlist().subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.doclist = res.response;
                    _this.list();
                }
            }
        }, function () {
            _this.auth.presentToast("error");
        });
    };
    PatiandocvisitsPage.prototype.list = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.findchild({ patient_id: this.patient_id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.child = res.response;
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("Login failed, Login detils not exits ");
        });
    };
    PatiandocvisitsPage.prototype.searchData = function () {
        var _this = this;
        var date = this.searchOptions.year.split('T');
        var newDate = date[0].split('-');
        var day = newDate[1];
        var month = newDate[2];
        var year = newDate[0];
        this.searchOptions.year = year;
        this.auth.patientsearch({ year: this.searchOptions.year, patient_id: this.patient_id, docter_name: this.searchOptions.docter_name, child_name: this.searchOptions.child_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.visits = res.response;
                console.log(39, _this.visits);
            }
        }, console.log);
    };
    PatiandocvisitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patiandocvisits',
            template: __webpack_require__(/*! ./patiandocvisits.page.html */ "./src/app/patiandocvisits/patiandocvisits.page.html"),
            styles: [__webpack_require__(/*! ./patiandocvisits.page.scss */ "./src/app/patiandocvisits/patiandocvisits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], PatiandocvisitsPage);
    return PatiandocvisitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=patiandocvisits-patiandocvisits-module.js.map