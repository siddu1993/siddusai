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

module.exports = "<ion-header>\n\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" >\n        <ion-icon name=\"arrow-back\"  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Patient's Doctors Visits</ion-title>\n  </ion-toolbar>\n \n\n  <ion-toolbar>\n\n      <ion-row *ngIf=\"doclist!=''\">\n          <ion-col size=\"3\">\n              <small>   <ion-select [(ngModel)]=\"searchOptions.docter_name\" \n              >\n              <ion-select-option  value=''>Doctor Name</ion-select-option>\n              <ion-select-option value='{{obj.name}}' *ngFor=\"let obj of doclist\">{{obj.name}}</ion-select-option>\n              \n              </ion-select></small>\n            </ion-col>\n            <ion-col size=\"3\">\n                <small> <ion-select [(ngModel)]=\"searchOptions.year\" \n                placeholder=\"eg year\">\n                <ion-select-option  value=''>year</ion-select-option>\n                <ion-select-option value='{{obj.year}}' *ngFor=\"let obj of years\">{{obj.year}}</ion-select-option>\n                \n                </ion-select></small>\n              </ion-col>\n              <ion-col size=\"3\">\n                  <small>   <ion-select [(ngModel)]=\"searchOptions.child_name\">\n                      <ion-select-option  value=\"\">{{full_name}}</ion-select-option>\n                      <ion-select-option *ngFor=\"let obj of child\"  value=\"{{obj.name}}\">{{obj.name }}</ion-select-option>\n                    </ion-select></small>\n                  \n                </ion-col>\n                <ion-col size=\"3\">\n               \n                      <button type=\"button\"  (click)=\"searchData()\" class=\"btn btn-primary btn-sm\">Search</button>\n                   \n              \n                  </ion-col>\n\n    </ion-row>\n    <ion-row *ngIf=\"doclist==''\">\n<div text-center><p>no data found</p></div>\n    </ion-row>\n    \n      </ion-toolbar>\n      <h6>\n     \n        <h6 slot=\"end\">patient id :{{patient_id}}</h6>\n    </h6>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"cardsize\" *ngFor=\"let item of visits\">\n    \n  \n    <ion-item class=\"activated\" lines=\"none\">\n      <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n      <h6 slot=\"start\">Doctor Name</h6>\n      <small slot=\"end\">{{item.docter_name}}</small>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <h6 slot=\"start\">Blood Pressure</h6>\n      <h6 slot=\"end\">{{item.blood_pressure}}</h6>\n    </ion-item>\n\n    <ion-item class=\"activated\" lines=\"none\">\n      <h6 slot=\"start\">Reason for Visit</h6>\n      <h6 slot=\"end\">{{item.reason}}</h6>\n    </ion-item>\n    <ion-item lines=\"none\" >\n      <h6 slot=\"start\">Doctors Comments </h6>\n     <small slot=\"end\"> <p slot=\"end\">{{item.comments}}</p></small>\n    </ion-item>\n    <ion-item class=\"activated\">\n      <h6 slot=\"start\">Medicine Prescribed </h6>\n      <h6 slot=\"end\">{{item.medicine_prescribed}}</h6>\n    </ion-item>\n    <ion-item  lines=\"none\">\n      <h6 slot=\"start\">Lab Test Recommended </h6>\n      <h6 slot=\"end\">{{item.labtest_required}}</h6>\n    </ion-item>\n \n    <ion-item  lines=\"none\">\n      <h6 slot=\"start\">Lab Test Name</h6>\n      <div slot=\"end\">\n        <small *ngFor=\"let obj of item.test_name\"> <p>{{obj.name}}</p></small>\n     </div>                \n    </ion-item>\n\n    <ion-item  class=\"activated\">\n      <h6 slot=\"start\">Date</h6>\n      <h6 slot=\"end\">{{item.date  | date:'dd-MM-yyyy'}}</h6>\n    </ion-item>\n \n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patiandocvisits/patiandocvisits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/patiandocvisits/patiandocvisits.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 25px;\n  color: #ffffff !important;\n  opacity: 1 !important;\n  background-color: #2E8B57 !important; }\n\nion-button {\n  height: 30px; }\n\n.icon-size {\n  height: 35px;\n  width: 35px;\n  color: #ffffff; }\n\nion-select {\n  color: #ffffff; }\n\nion-card {\n  border: 2px solid grey; }\n\n.cardsize {\n  --background-color: #2E8B57!important; }\n\nion-input {\n  border: solid 0.2px gray;\n  border-color: #2E8B57;\n  height: 35px;\n  padding-left: 10px;\n  text-align: center;\n  border-end-end-radius: 0.2px;\n  font-size: 12px;\n  padding: 1px; }\n\n.aligs {\n  padding-left: 10px !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\n.hed {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important;\n  opacity: 1 !important;\n  --background: #138D75!important ; }\n\nion-menu-button {\n  color: #ffffff !important; }\n\nion-input {\n  border: 1px solid greenyellow;\n  color: #ffffff;\n  border-radius: 17px; }\n\n.selector {\n  width: 100px;\n  height: 40px;\n  border: 1px solid greenyellow;\n  padding: 10px;\n  margin-right: 30px;\n  outline-color: #A7D5E4;\n  color: white;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWFuZG9jdmlzaXRzL0Q6XFxuZXdhcHBvbG9cXHNpZGR1c2FpLmdpdFxcdHJ1bmsvc3JjXFxhcHBcXHBhdGlhbmRvY3Zpc2l0c1xccGF0aWFuZG9jdmlzaXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFlBQVc7RUFDWCx5QkFBMEI7RUFDdEIscUJBQXFCO0VBQ3RCLG9DQUFtQyxFQUFBOztBQUUxQztFQUNJLFlBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBRVgsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxxQ0FBbUIsRUFBQTs7QUFJbkI7RUFDRyx3QkFBd0I7RUFDeEIscUJBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdmO0VBQ0ksNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0kseUJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFFSSxnQ0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLHlCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsZ0NBQWEsRUFBQTs7QUFJakI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQWlCdkI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGF0aWFuZG9jdmlzaXRzL3BhdGlhbmRvY3Zpc2l0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2FyZHNpemV7XHJcbi8vICAgICB3aWR0aDogNDAwcHg7XHJcbi8vIH1cclxuXHJcbi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRThCNTchaW1wb3J0YW50O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBoZWlnaHQ6MzBweDsgICBcclxufVxyXG4uaWNvbi1zaXple1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1zZWxlY3R7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG5cclxuIH1cclxuLmNhcmRzaXple1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMkU4QjU3IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICBib3JkZXI6IHNvbGlkIDAuMnB4IGdyYXk7XHJcbiAgICAgICBib3JkZXItY29sb3I6IzJFOEI1NztcclxuICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMC4ycHg7XHJcbiAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICBwYWRkaW5nOiAxcHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmFsaWdze1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgICAgICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICAgIC5oZWR7XHJcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjMkU4QjU3ICFpbXBvcnRhbnRcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgICAgICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzEzOEQ3NSFpbXBvcnRhbnQgO1xyXG4gICAgfVxyXG4gICBcclxuICBcclxuICAgIGlvbi1tZW51LWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG4gICAgLy8gaW9uLXNlbGVjdHtcclxuICAgIC8vICAgICAvLyAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZTZkNGQ0O1xyXG4gICAgLy8gICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgIC8vICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmZmZmIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlvbi1zZWxlY3Qge1xyXG4gICAgLy8gICAgIGJvcmRlcjogIDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgIC8vICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC8vICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLnNlbGVjdG9ye1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgb3V0bGluZS1jb2xvcjojQTdENUU0O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxuICAgIC8vIGlvbi10ZXh0e1xyXG4gICAgLy8gICBjb2xvcjojMTM4RDc1IWltcG9ydGFudCA7ICBcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuICAiXX0= */"

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
                    _this.visits = (res.response).reverse();
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
                    _this.child = (res.response).reverse();
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
                _this.visits = (res.response).reverse();
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