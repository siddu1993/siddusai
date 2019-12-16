(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["labpatienthist-labpatienthist-module"],{

/***/ "./src/app/labpatienthist/labpatienthist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/labpatienthist/labpatienthist.module.ts ***!
  \*********************************************************/
/*! exports provided: LabpatienthistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabpatienthistPageModule", function() { return LabpatienthistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _labpatienthist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labpatienthist.page */ "./src/app/labpatienthist/labpatienthist.page.ts");







var routes = [
    {
        path: '',
        component: _labpatienthist_page__WEBPACK_IMPORTED_MODULE_6__["LabpatienthistPage"]
    }
];
var LabpatienthistPageModule = /** @class */ (function () {
    function LabpatienthistPageModule() {
    }
    LabpatienthistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_labpatienthist_page__WEBPACK_IMPORTED_MODULE_6__["LabpatienthistPage"]]
        })
    ], LabpatienthistPageModule);
    return LabpatienthistPageModule;
}());



/***/ }),

/***/ "./src/app/labpatienthist/labpatienthist.page.html":
/*!*********************************************************!*\
  !*** ./src/app/labpatienthist/labpatienthist.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Patient Medical History</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\" >\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  \n\n  \n  \n    <ion-toolbar>\n   \n            <ion-label>Patient ID: {{patient_id}}</ion-label>\n            <!-- <ion-label>Name: {{full_name}}</ion-label> -->\n           \n      \n            <ion-row>\n              <ion-col size=\"4\">\n                <small>   <ion-select [(ngModel)]=\"searchOptions.child_name\">\n                  <ion-select-option  value=\"\">{{full_name}}</ion-select-option>\n                  <ion-select-option *ngFor=\"let obj of userData\"  value=\"{{obj.name}}\">{{obj.name }}</ion-select-option>\n                </ion-select></small>\n              </ion-col>\n              <ion-col size=\"4\">\n                \n                <small>   <ion-select  [(ngModel)]=\"searchOptions.year\">\n                  <ion-select-option  value=\"\">Select Year</ion-select-option>\n                  <ion-select-option *ngFor=\"let obj of years\"  value=\"{{obj.year}}\">{{obj.year }}</ion-select-option>\n                </ion-select></small>\n          \n                </ion-col>\n        \n                <ion-col size=\"4\">\n                   \n                  <ion-button (click)=\"search()\" size=\"small\">search</ion-button>\n                  \n                    \n                      </ion-col>\n            </ion-row>\n  \n  \n      </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <div  text-center>\n          <u><h6   text-center>Doctors Visits</h6></u>\n        </div>\n      <ion-card   class=\"cardsize\" *ngFor=\"let item of visits\"  >\n       \n          <ion-item class=\"activated\" lines=\"none\">\n            <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n            <h6 slot=\"start\">Visit Date</h6>\n            <h6 slot=\"end\">{{item.date  | date:'yyyy-MM-dd'}}</h6>\n            \n  \n          </ion-item>\n  \n          <ion-item lines=\"none\">\n            <h6 slot=\"start\">Doctors Name</h6>\n            <h6 slot=\"end\">{{item.docter_name}}</h6>\n          </ion-item>\n     \n                <ion-item class=\"activated\" lines=\"none\">\n                  <h6 slot=\"start\">Lab Test Name</h6>\n                  <div slot=\"end\">\n                     <small *ngFor=\"let obj of item.test_name\"> <p>{{obj.name}}</p></small>\n                  </div>\n                </ion-item>\n                \n\n          \n                  <ion-item  lines=\"none\" *ngIf=\"item.status=='1'\" >\n                    <h6 slot=\"start\">Status</h6>\n                    <h6 slot=\"end\">Compleated</h6>\n                    <u *ngIf=\"item.status=='1' && item.lab_id ==lab_id && (item.date| date:'ddMMyyyy') == dateee\"  (click)=\"details(item)\"><p>EDIT</p></u>\n                  </ion-item>\n                  <ion-item  lines=\"none\" *ngIf=\"item.status!='1'\" (click)=\"details(item)\">\n                    <h6 slot=\"start\">Status</h6>\n                    <h6 slot=\"end\">Not Completed</h6>\n                    <u   (click)=\"details(item)\"><p>Update</p></u>\n\n                  </ion-item>\n       \n        </ion-card>\n  \n        <!-- <div  text-center>\n          <u><h6  text-center>Lab Visits</h6></u>\n        </div>\n  \n       \n  \n      <ion-card *ngFor=\"let item of lablist\">\n           <ion-item class=\"activated\" lines=\"none\">\n             <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> \n            <h6 slot=\"start\">Visit Date</h6>\n            <h6 slot=\"end\">{{item.date  | date:'dd-MM-yyyy'}}\n                </h6>\n          </ion-item>\n  \n          <ion-item lines=\"none\">\n            <h6 slot=\"start\">Doctor Name</h6>\n            <h6 slot=\"end\">{{item.docter_name}}</h6>\n          </ion-item>\n          <ion-item class=\"activated\" lines=\"none\">\n              <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> \n              <h6 slot=\"start\">Lab Test</h6>\n              <h6 slot=\"end\">{{item.test_name}}</h6>\n            </ion-item>\n          <ion-item lines=\"none\">\n              <h6 slot=\"start\">Result</h6>\n              <h6 slot=\"end\" (click)=\"view(item)\">View</h6>\n            </ion-item>\n       \n     \n   \n  \n  </ion-card> -->\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/labpatienthist/labpatienthist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/labpatienthist/labpatienthist.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body p + h6 {\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFicGF0aWVudGhpc3QvRDpcXG5ld2FwcG9sb1xcc2lkZHVzYWkuZ2l0XFx0cnVuay9zcmNcXGFwcFxcbGFicGF0aWVudGhpc3RcXGxhYnBhdGllbnRoaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhYnBhdGllbnRoaXN0L2xhYnBhdGllbnRoaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgcCtoNntcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/labpatienthist/labpatienthist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/labpatienthist/labpatienthist.page.ts ***!
  \*******************************************************/
/*! exports provided: LabpatienthistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabpatienthistPage", function() { return LabpatienthistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lipidprofile_lipidprofile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lipidprofile/lipidprofile.page */ "./src/app/lipidprofile/lipidprofile.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var LabpatienthistPage = /** @class */ (function () {
    function LabpatienthistPage(datePipe, modalController, route, nav, auth, menu) {
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
        this.lab_id = localStorage.getItem('lab_id');
        this.dateee = (this.datePipe.transform(Date.now(), 'ddMMyyyy')).toString();
        console.log('222', this.patient_id);
        this.labhistory();
        this.patientlisting();
    }
    LabpatienthistPage.prototype.ngOnInit = function () {
        this.list();
    };
    LabpatienthistPage.prototype.patientlist = function () {
        var _this = this;
        if (this.child_name == undefined) {
            this.child_name = "";
        }
        this.auth.patientlist({ patient_id: this.patient_id, patient_child: this.child_name }).subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.visits = res.response;
                    //  this.name=res.response[0].full_name;
                }
            }
        }, function () {
            _this.auth.presentToast("Login failed, Login detils not exits ");
        });
    };
    LabpatienthistPage.prototype.search = function () {
        var _this = this;
        this.auth.patient_history({ year: this.searchOptions.year, patient_id: this.patient_id, child_name: this.searchOptions.child_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.visits = (res.response).reverse();
                _this.labhistory();
                console.log(39, _this.visits);
            }
        }, console.log);
    };
    LabpatienthistPage.prototype.patientlisting = function () {
        var _this = this;
        this.auth.patienthist({ patient_id: this.patient_id, patient_child: this.child_name }).subscribe(function (res) {
            if (res.status == "success") {
                {
                    _this.visits = (res.response).reverse();
                    //  this.name=res.response[0].full_name;
                }
            }
        }, function () {
            _this.auth.presentToast("Server failed, Server details not exits ");
        });
    };
    LabpatienthistPage.prototype.labhistory = function () {
        var _this = this;
        this.auth.labhistory({ year: this.searchOptions.year, patient_id: this.patient_id, child_name: this.searchOptions.child_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.lablist = res.response;
                console.log(39, _this.visits);
            }
            _this.lablist = res.response;
        }, console.log);
    };
    LabpatienthistPage.prototype.view = function (labobj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _lipidprofile_lipidprofile_page__WEBPACK_IMPORTED_MODULE_2__["LipidprofilePage"],
                            componentProps: { value: JSON.stringify(labobj) }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LabpatienthistPage.prototype.list = function () {
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
            _this.auth.presentToast("Server failed, Server details not exits ");
        });
    };
    LabpatienthistPage.prototype.listbyid = function (test_id, list_id, sts, docter_name, lab_name) {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.testbyid({ test_id: test_id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.test_res = res.response;
                    console.log("test_id", _this.test_res);
                    //  condition: true
                    //  name: "Hb or Hbg(Hemoblobin)"
                    //  relation: "5ddf6fc8e8c7682140a140e5"
                    //  __v: 0
                    //  _id: "5ddf72b686eac72658cd0463"
                    _this.route.navigate(['/labtestupdate'], { queryParams: { test_id: JSON.stringify(_this.test_res), _id: list_id, sts: sts, "docter_name": docter_name, "lab_name": lab_name } });
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("Server failed, Server detils not exits ");
        });
    };
    LabpatienthistPage.prototype.details = function (e) {
        this.test_name = e.test_name;
        console.log("66", this.test_name);
        if (this.test_name[0].relation == 0) {
            console.log("66", this.test_name[0].relation);
            this.listbyid(this.test_name[0].id, e._id, e.status, e.docter_name, localStorage.getItem('name'));
        }
        else {
            this.route.navigate(['/labtestupdate'], { queryParams: { sts: e.status, test_id: JSON.stringify(e.test_name), "docter_id": e.docter_id, "docter_name": e.docter_name, "lab_name": localStorage.getItem('name'), "_id": e._id } });
        }
        console.log();
    };
    LabpatienthistPage.prototype.back = function () {
        this.nav.pop();
    };
    LabpatienthistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labpatienthist',
            template: __webpack_require__(/*! ./labpatienthist.page.html */ "./src/app/labpatienthist/labpatienthist.page.html"),
            styles: [__webpack_require__(/*! ./labpatienthist.page.scss */ "./src/app/labpatienthist/labpatienthist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], LabpatienthistPage);
    return LabpatienthistPage;
}());



/***/ })

}]);
//# sourceMappingURL=labpatienthist-labpatienthist-module.js.map