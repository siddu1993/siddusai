(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-patentmedicalhistory-patentmedicalhistory-module"],{

/***/ "./src/app/doctor/patentmedicalhistory/patentmedicalhistory.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/doctor/patentmedicalhistory/patentmedicalhistory.module.ts ***!
  \****************************************************************************/
/*! exports provided: PatentmedicalhistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatentmedicalhistoryPageModule", function() { return PatentmedicalhistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patentmedicalhistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patentmedicalhistory.page */ "./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.ts");







var routes = [
    {
        path: '',
        component: _patentmedicalhistory_page__WEBPACK_IMPORTED_MODULE_6__["PatentmedicalhistoryPage"]
    }
];
var PatentmedicalhistoryPageModule = /** @class */ (function () {
    function PatentmedicalhistoryPageModule() {
    }
    PatentmedicalhistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_patentmedicalhistory_page__WEBPACK_IMPORTED_MODULE_6__["PatentmedicalhistoryPage"]]
        })
    ], PatentmedicalhistoryPageModule);
    return PatentmedicalhistoryPageModule;
}());



/***/ }),

/***/ "./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Patient Medical History</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\" >\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  \n\n  \n  \n    <ion-toolbar>\n   \n            <ion-label>Patient ID: {{patient_id}}</ion-label>\n            <!-- <ion-label>Name: {{full_name}}</ion-label> -->\n           \n      \n            <ion-row>\n              <ion-col size=\"4\">\n                <small>   <ion-select [(ngModel)]=\"searchOptions.child_name\" placeholder=\"name\">\n                  <ion-select-option  value=\"\">{{full_name}}</ion-select-option>\n                  <ion-select-option *ngFor=\"let obj of userData\"  value=\"{{obj.name}}\">{{obj.name }}</ion-select-option>\n                </ion-select></small>\n              </ion-col>\n              <ion-col size=\"4\">\n                \n                <small>   <ion-select  [(ngModel)]=\"searchOptions.year\">\n                  <ion-select-option  value=\"\">Select Year</ion-select-option>\n                  <ion-select-option *ngFor=\"let obj of years\"  value=\"{{obj.year}}\">{{obj.year }}</ion-select-option>\n                </ion-select></small>\n          \n                </ion-col>\n        \n                <ion-col size=\"4\">\n                   \n                  <ion-button (click)=\"search()\" size=\"small\">search</ion-button>\n                  \n                    \n                      </ion-col>\n            </ion-row>\n  \n  \n      </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <div  text-center>\n          <u><h6   text-center>Doctors Visits</h6></u>\n        </div>\n      <ion-card   class=\"cardsize\" *ngFor=\"let item of visits\">\n       \n          <ion-item class=\"activated\" lines=\"none\">\n            <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n            <h6 slot=\"start\">Visit Date</h6>\n            <h6 slot=\"end\">{{item.date  | date:'yyyy-MM-dd'}}</h6>\n            \n  \n          </ion-item>\n  \n          <ion-item lines=\"none\">\n            <h6 slot=\"start\">Doctors Name</h6>\n            <h6 slot=\"end\">{{item.docter_name}}</h6>\n          </ion-item>\n          <ion-item  class=\"activated\" lines=\"none\">\n              <h6 slot=\"start\">Blood Pressure</h6>\n              <h6 slot=\"end\">{{item.blood_pressure}}</h6>\n            </ion-item>\n        \n              <ion-item lines=\"none\">\n                <h6 slot=\"start\">Doctor's Commants</h6>\n                <h6 slot=\"end\">{{item.comments}}</h6>\n              </ion-item>\n              <ion-item class=\"activated\" lines=\"none\">\n                  <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n                  <h6 slot=\"start\">MedicinePrescibed</h6>\n                  <h6 slot=\"end\">{{item.medicine_prescribed}}</h6>\n                </ion-item>\n        \n                <ion-item lines=\"none\">\n                  <h6 slot=\"start\">Lab Test Recommended</h6>\n                  <h6 slot=\"end\">{{item.labtest_required}}</h6>\n                </ion-item>\n                <ion-item lines=\"activated\">\n                  <h6 slot=\"start\">Lab Test Name</h6>\n                  <div slot=\"end\">\n                    <small *ngFor=\"let obj of item.test_name\"> <p>{{obj.name}}</p></small>\n                 </div>                \n                </ion-item>\n                \n\n                <ion-item class=\"activated\" lines=\"none\">\n                    <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n                    <h6 slot=\"start\">Reason for Visit</h6>\n                    <h6 slot=\"end\">{{item.reason}}</h6>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                      <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n                      <h6 slot=\"start\">Report Status</h6>\n                      <h6 slot=\"end\" *ngIf=\"item.status=='1'\">Completed</h6>\n                      <h6 slot=\"end\" *ngIf=\"item.status!='1'\">Not Completed</h6>\n                      <h6 slot=\"end\" *ngIf=\"item.status!='1' && item.docter_id ==docter_id && (item.date| date:'ddMMyyyy') == dateee \" (click)=\"editdc(item)\"><u>Edit</u></h6>\n                    \n                    \n                    </ion-item>\n                   \n        </ion-card>\n  \n        <div  text-center>\n          <u><h6  text-center>Lab Visits</h6></u>\n        </div>\n  \n       \n  \n      <ion-card *ngFor=\"let item of lablist\">\n           <ion-item class=\"activated\" lines=\"none\">\n            <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n            <h6 slot=\"start\">Visit Date</h6>\n            <h6 slot=\"end\">{{item.date  | date:'dd-MM-yyyy'}}\n                </h6>\n          </ion-item>\n  \n          <ion-item lines=\"none\">\n            <h6 slot=\"start\">Doctor Name</h6>\n            <h6 slot=\"end\">{{item.docter_name}}</h6>\n          </ion-item>\n          <ion-item class=\"activated\" lines=\"none\">\n              <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n              <h6 slot=\"start\">Lab Test</h6>\n             <small slot=\"end\"> <p   *ngFor=\"let obj of item.data\">{{obj.name}}</p></small>\n            </ion-item>\n          <ion-item lines=\"none\">\n              <h6 slot=\"start\">Result</h6>\n              <h6 slot=\"end\" (click)=\"view(item)\">View</h6>\n            </ion-item>\n       \n     \n   \n  \n  </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-label {\n  color: #ffffff !important; }\n\nion-select {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL3BhdGVudG1lZGljYWxoaXN0b3J5L0Q6XFxuZXdhcHBvbG9cXHNpZGR1c2FpLmdpdFxcdHJ1bmsvc3JjXFxhcHBcXGRvY3RvclxccGF0ZW50bWVkaWNhbGhpc3RvcnlcXHBhdGVudG1lZGljYWxoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRzlCO0VBRUUsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3IvcGF0ZW50bWVkaWNhbGhpc3RvcnkvcGF0ZW50bWVkaWNhbGhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxuXHJcbn1cclxuLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.ts ***!
  \**************************************************************************/
/*! exports provided: PatentmedicalhistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatentmedicalhistoryPage", function() { return PatentmedicalhistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editchdetails_editchdetails_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editchdetails/editchdetails.page */ "./src/app/doctor/editchdetails/editchdetails.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var PatentmedicalhistoryPage = /** @class */ (function () {
    function PatentmedicalhistoryPage(datePipe, modalController, route, nav, auth, menu) {
        this.datePipe = datePipe;
        this.modalController = modalController;
        this.route = route;
        this.nav = nav;
        this.auth = auth;
        this.menu = menu;
        this.searchOptions = {
            year: "",
            child_name: ""
        };
        this.years = [{ year: 2019 }, { year: 2020 }, { year: 2021 }, { year: 2022 }, { year: 2023 }, { year: 2024 }, { year: 2025 }, { year: 2026 }, { year: 2027 }, { year: 2028 }];
        this.patient_id = localStorage.getItem('patient_id');
        this.full_name = localStorage.getItem('full_name');
        this.docter_id = localStorage.getItem('docter_id');
        console.log('222', this.patient_id);
        this.list();
        this.dateee = (this.datePipe.transform(Date.now(), 'ddMMyyyy')).toString();
        console.log('data3333', this.dateee);
    }
    PatentmedicalhistoryPage.prototype.ngOnInit = function () {
        this.labhistory();
        this.patientlisting();
    };
    PatentmedicalhistoryPage.prototype.patientlist = function () {
        var _this = this;
        if (this.child_name == undefined) {
            this.child_name = "";
        }
        this.auth.patientlist({ patient_id: this.patient_id, patient_child: this.child_name }).subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.visits = (res.response).reverse();
                    //  this.name=res.response[0].full_name;
                }
            }
        }, function () {
            _this.auth.presentToast("server failed, server details not exits ");
        });
    };
    PatentmedicalhistoryPage.prototype.search = function () {
        var _this = this;
        this.auth.patient_history({ year: this.searchOptions.year, patient_id: this.patient_id, child_name: this.searchOptions.child_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.visits = (res.response).reverse();
                _this.labhistory();
                console.log(39, _this.visits);
            }
        }, console.log);
    };
    PatentmedicalhistoryPage.prototype.patientlisting = function () {
        var _this = this;
        this.auth.patienthist({ patient_id: this.patient_id, patient_child: this.child_name }).subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.visits = (res.response).reverse();
                    //  this.name=res.response[0].full_name;
                }
            }
        }, function () {
            _this.auth.presentToast("Server failed, Server detils not exits ");
        });
    };
    PatentmedicalhistoryPage.prototype.labhistory = function () {
        var _this = this;
        this.auth.labhistory({ year: this.searchOptions.year, patient_id: this.patient_id, child_name: this.searchOptions.child_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.lablist = (res.response).reverse();
                console.log(39, _this.visits);
            }
            _this.lablist = (res.response).reverse();
        }, console.log);
    };
    PatentmedicalhistoryPage.prototype.editdc = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _editchdetails_editchdetails_page__WEBPACK_IMPORTED_MODULE_5__["EditchdetailsPage"],
                            componentProps: { test_id: JSON.stringify(item) }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.labhistory();
                            _this.patientlisting();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PatentmedicalhistoryPage.prototype.view = function (labobj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.navigate(['/viewlipid'], { queryParams: { test_id: JSON.stringify(labobj) } });
                return [2 /*return*/];
            });
        });
    };
    PatentmedicalhistoryPage.prototype.list = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.findchild({ patient_id: this.patient_id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.userData = res.response;
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("Login failed, Login detils not exits ");
        });
    };
    PatentmedicalhistoryPage.prototype.back = function () {
        this.nav.pop();
    };
    PatentmedicalhistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patentmedicalhistory',
            template: __webpack_require__(/*! ./patentmedicalhistory.page.html */ "./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.html"),
            styles: [__webpack_require__(/*! ./patentmedicalhistory.page.scss */ "./src/app/doctor/patentmedicalhistory/patentmedicalhistory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], PatentmedicalhistoryPage);
    return PatentmedicalhistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-patentmedicalhistory-patentmedicalhistory-module.js.map