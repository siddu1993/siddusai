(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pateintuserhist-pateintuserhist-module"],{

/***/ "./src/app/pateintuserhist/pateintuserhist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pateintuserhist/pateintuserhist.module.ts ***!
  \***********************************************************/
/*! exports provided: PateintuserhistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PateintuserhistPageModule", function() { return PateintuserhistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pateintuserhist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pateintuserhist.page */ "./src/app/pateintuserhist/pateintuserhist.page.ts");







var routes = [
    {
        path: '',
        component: _pateintuserhist_page__WEBPACK_IMPORTED_MODULE_6__["PateintuserhistPage"]
    }
];
var PateintuserhistPageModule = /** @class */ (function () {
    function PateintuserhistPageModule() {
    }
    PateintuserhistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pateintuserhist_page__WEBPACK_IMPORTED_MODULE_6__["PateintuserhistPage"]]
        })
    ], PateintuserhistPageModule);
    return PateintuserhistPageModule;
}());



/***/ }),

/***/ "./src/app/pateintuserhist/pateintuserhist.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pateintuserhist/pateintuserhist.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Patient Medical History</ion-title>\n\n      <ion-buttons slot=\"start\" class=\"menu\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n\n\n  <ion-toolbar>\n \n          <ion-label>Patient ID: {{patient_id}}</ion-label>\n          <!-- <ion-label>Name: {{full_name}}</ion-label> -->\n         \n    \n          <ion-row>\n            <ion-col size=\"4\">\n              <small>   <ion-select [(ngModel)]=\"searchOptions.child_name\">\n                <ion-select-option  value=\"\">{{full_name}}</ion-select-option>\n                <ion-select-option *ngFor=\"let obj of userData\"  value=\"{{obj.name}}\">{{obj.name }}</ion-select-option>\n              </ion-select></small>\n            </ion-col>\n            <ion-col size=\"4\">\n              \n              <small>   <ion-select  [(ngModel)]=\"searchOptions.year\">\n                <ion-select-option  value=\"\">Select Year</ion-select-option>\n                <ion-select-option *ngFor=\"let obj of years\"  value=\"{{obj.year}}\">{{obj.year }}</ion-select-option>\n              </ion-select></small>\n        \n              </ion-col>\n      \n              <ion-col size=\"4\">\n                 \n                <ion-button (click)=\"search()\" size=\"small\">search</ion-button>\n                \n                  \n                    </ion-col>\n          </ion-row>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div  text-center>\n        <u><h6   text-center>Doctors Visits</h6></u>\n      </div>\n    <ion-card   class=\"cardsize\" *ngFor=\"let item of visits\">\n     \n        <ion-item class=\"activated\" lines=\"none\">\n          <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n         <small slot=\"start\"> <h6 >Visit Date</h6></small>\n          <small slot=\"end\"><h6 >{{item.date  | date:'yyyy-MM-dd'}}</h6></small>\n          \n\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <small slot=\"start\">  <h6 >Doctors Name</h6></small>\n          <small slot=\"end\"> <h6 >{{item.docter_name}}</h6></small>\n        </ion-item>\n        <ion-item  class=\"activated\" lines=\"none\">\n          <small slot=\"start\">   <h6 >Blood Pressure</h6></small>\n          <small slot=\"end\">   <h6 >{{item.blood_pressure}}</h6></small>\n          </ion-item>\n      \n            <ion-item lines=\"none\">\n              <small slot=\"start\"> <h6 >Doctor's Comments</h6></small>\n              <small slot=\"end\"> <h6 >{{item.comments}}</h6></small>\n            </ion-item>\n            <ion-item class=\"activated\" lines=\"none\">\n                <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n                <small slot=\"start\"> <h6 >Medicine Prescibed</h6></small>\n                <small slot=\"end\"> <h6 >{{item.medicine_prescribed}}</h6></small>\n              </ion-item>\n      \n              <ion-item lines=\"none\">\n                <small slot=\"start\"> <h6 >Lab Test Recommended</h6></small>\n                <small slot=\"end\"> <h6 >{{item.labtest_required}}</h6></small>\n              </ion-item>\n              <ion-item class=\"activated\" lines=\"none\">\n                  <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n                  <small slot=\"start\"> <h6 >Reason for Visit</h6></small>\n                  <small slot=\"end\"> <h6 >{{item.reason}}</h6></small>\n                </ion-item>\n        \n       \n     \n      </ion-card>\n\n      <div  text-center>\n        <u><h6  text-center>Lab Visits</h6></u>\n      </div>\n\n     \n\n    <ion-card *ngFor=\"let item of lablist\">\n      \n         <ion-item class=\"activated\" lines=\"none\">\n          <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n          <small slot=\"start\">  <h6 >Visit Date</h6></small>\n          <small slot=\"end\">  <h6 >{{item.date  | date:'yyyy-MM-dd'}}\n              </h6></small>\n        </ion-item>\n\n        <ion-item  lines=\"none\">\n          <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n          <small slot=\"start\">  <h6 >Lab Test</h6></small>\n       <h6 slot=\"end\">{{item.lab_name}}</h6>\n        </ion-item>\n\n        <ion-item class=\"activated\" lines=\"none\">\n          <small slot=\"start\">  <h6 >Doctor Name</h6></small>\n            <small slot=\"end\">  <h6 >{{item.docter_name}}</h6></small>\n        </ion-item>\n\n\n        <ion-item lines=\"none\">\n            <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n            <small slot=\"start\">  <h6 >Lab Test</h6></small>\n            <small slot=\"end\"> <h6  *ngFor=\"let obj of item.data\">{{obj.name}}</h6></small>\n          </ion-item>\n\n          <ion-item  class=\"activated\" lines=\"none\">\n            <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n            <small slot=\"start\">  <h6 >Lab Test</h6></small>\n         <h6 slot=\"end\">{{item.lab_name}}</h6>\n          </ion-item>\n          \n        <ion-item lines=\"none\">\n          <small slot=\"start\">  <h6 >Result</h6></small>\n          <small slot=\"end\" > <h6  (click)='view(item)'>View</h6></small>\n          </ion-item>\n     \n   \n \n\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pateintuserhist/pateintuserhist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pateintuserhist/pateintuserhist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-label {\n  color: #ffffff !important; }\n\nion-menu-button {\n  color: #ffffff !important; }\n\nion-select {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0ZWludHVzZXJoaXN0L0Q6XFxuZXdhcHBvbG9cXGFwcG9sby9zcmNcXGFwcFxccGF0ZWludHVzZXJoaXN0XFxwYXRlaW50dXNlcmhpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBMEIsRUFBQTs7QUFHOUI7RUFDSSx5QkFBMEIsRUFBQTs7QUFHOUI7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhdGVpbnR1c2VyaGlzdC9wYXRlaW50dXNlcmhpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbn1cclxuaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG5cclxufVxyXG5pb24tc2VsZWN0e1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG5cclxufVxyXG4uZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pateintuserhist/pateintuserhist.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pateintuserhist/pateintuserhist.page.ts ***!
  \*********************************************************/
/*! exports provided: PateintuserhistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PateintuserhistPage", function() { return PateintuserhistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _lipidprofile_lipidprofile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lipidprofile/lipidprofile.page */ "./src/app/lipidprofile/lipidprofile.page.ts");






var PateintuserhistPage = /** @class */ (function () {
    function PateintuserhistPage(modalController, route, nav, auth, menu) {
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
        console.log('222', this.patient_id);
        this.labhistory();
        this.patientlisting();
    }
    PateintuserhistPage.prototype.ngOnInit = function () {
        this.list();
    };
    PateintuserhistPage.prototype.patientlist = function () {
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
    PateintuserhistPage.prototype.search = function () {
        var _this = this;
        this.auth.patient_history({ year: this.searchOptions.year, patient_id: this.patient_id, child_name: this.searchOptions.child_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.visits = res.response;
                _this.labhistory();
                console.log(39, _this.visits);
            }
        }, console.log);
    };
    PateintuserhistPage.prototype.patientlisting = function () {
        var _this = this;
        this.auth.patienthist({ patient_id: this.patient_id, patient_child: this.child_name }).subscribe(function (res) {
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
    PateintuserhistPage.prototype.labhistory = function () {
        var _this = this;
        this.auth.labhistory({ year: this.searchOptions.year, patient_id: this.patient_id, child_name: this.searchOptions.child_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.lablist = res.response;
                console.log(39, _this.visits);
            }
            _this.lablist = res.response;
        }, console.log);
    };
    PateintuserhistPage.prototype.view = function (labobj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _lipidprofile_lipidprofile_page__WEBPACK_IMPORTED_MODULE_5__["LipidprofilePage"],
                            componentProps: { value: JSON.stringify(labobj.data) }
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
    PateintuserhistPage.prototype.list = function () {
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
    PateintuserhistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pateintuserhist',
            template: __webpack_require__(/*! ./pateintuserhist.page.html */ "./src/app/pateintuserhist/pateintuserhist.page.html"),
            styles: [__webpack_require__(/*! ./pateintuserhist.page.scss */ "./src/app/pateintuserhist/pateintuserhist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], PateintuserhistPage);
    return PateintuserhistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pateintuserhist-pateintuserhist-module.js.map