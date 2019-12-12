(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["labs-labvisits-labvisits-module"],{

/***/ "./src/app/labs/labvisits/labvisits.module.ts":
/*!****************************************************!*\
  !*** ./src/app/labs/labvisits/labvisits.module.ts ***!
  \****************************************************/
/*! exports provided: LabvisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabvisitsPageModule", function() { return LabvisitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _labvisits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labvisits.page */ "./src/app/labs/labvisits/labvisits.page.ts");







var routes = [
    {
        path: '',
        component: _labvisits_page__WEBPACK_IMPORTED_MODULE_6__["LabvisitsPage"]
    }
];
var LabvisitsPageModule = /** @class */ (function () {
    function LabvisitsPageModule() {
    }
    LabvisitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_labvisits_page__WEBPACK_IMPORTED_MODULE_6__["LabvisitsPage"]]
        })
    ], LabvisitsPageModule);
    return LabvisitsPageModule;
}());



/***/ }),

/***/ "./src/app/labs/labvisits/labvisits.page.html":
/*!****************************************************!*\
  !*** ./src/app/labs/labvisits/labvisits.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-toolbar>\n  <ion-title>\n   Lab Visits\n  </ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"back()\" >\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n       \n          <!-- <ion-button class=\"i-button\"><small>Search</small></ion-button> -->\n  \n   \n</ion-toolbar>\n<ion-toolbar no-padding>\n  <!-- <ion-row>\n    <ion-col col-3>\n        <ion-select  [(ngModel)]=\"syear\"  \n        placeholder=\"Year\">\n        <ion-select-option  *ngFor=\"let obj of years\"  value=\"{{obj.years}}\">{{obj.years}}</ion-select-option>\n       \n      </ion-select>\n      \n      \n    </ion-col>\n    <ion-col col-3>\n        <button type=\"button\"  (click)=\"Search()\"  class=\"btn btn-primary btn-sm mt-1 \">Search</button>\n      \n      </ion-col>\n  </ion-row> -->\n\n\n  <ion-row>\n      <ion-col size=\"4\" >\n        <small>   <ion-select [(ngModel)]=\"sechild_name\">\n          <ion-select-option  value=\"\">{{full_name}}</ion-select-option>\n          <ion-select-option *ngFor=\"let obj of child\"  value=\"{{obj.name}}\">{{obj.name }}</ion-select-option>\n\n        </ion-select></small>\n      </ion-col>\n\n     \n\n      <ion-col size=\"4\">\n        \n        <small>   <ion-select  [(ngModel)]=\"seyear\">\n          <ion-select-option  value=\"\">Select Year</ion-select-option>\n          <ion-select-option *ngFor=\"let obj of years\"  value=\"{{obj.years}}\">{{obj.years }}</ion-select-option>\n        </ion-select></small>\n  \n        </ion-col>\n\n        <ion-col size=\"4\">\n           \n          <ion-button (click)=\"Search()\" size=\"small\">search</ion-button>\n          \n            \n              </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n        \n</ion-toolbar>\n<h6>patient id: {{patient_id}}</h6>\n\n<ion-content>\n  \n    <ion-card class=\"cardsize\" *ngFor=\"let item of visits\">\n        <ion-item lines=\"none\">\n          <h6 slot=\"start\">Date</h6>\n          <h6 slot=\"end\">{{item.date}}</h6>\n        </ion-item>\n      \n        <ion-item class=\"activated\" lines=\"none\">\n          <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n          <h6 slot=\"start\">Doctor Name</h6>\n          <small slot=\"end\">{{item.docter_name}}</small>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <h6 slot=\"start\">Lab Name</h6>\n            <h6 slot=\"end\">{{item.lab_name}}</h6>\n          </ion-item>\n\n  \n        <ion-item class=\"activated\" lines=\"none\">\n          <h6 slot=\"start\">Lab Test</h6>\n         <small slot=\"end\"><p slot=\"end\" *ngFor=\"let item of item.data\">{{item.name}}</p></small> \n        </ion-item>\n\n      \n        \n        <ion-item >\n          <h6 slot=\"start\">Result</h6>\n         <u slot=\"end\" (click)=\"view(item.data)\"> <h6 >View</h6></u>\n        </ion-item>\n      \n      \n      </ion-card>\n  \n  \n\n  </ion-content>\n\n"

/***/ }),

/***/ "./src/app/labs/labvisits/labvisits.page.scss":
/*!****************************************************!*\
  !*** ./src/app/labs/labvisits/labvisits.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-button {\n  height: 25px;\n  color: #ffffff !important;\n  opacity: 1 !important;\n  background-color: #2E8B57 !important; }\n\nion-button {\n  height: 30px; }\n\n.icon-size {\n  height: 35px;\n  width: 35px;\n  color: #ffffff; }\n\nion-card {\n  border: 2px solid grey; }\n\n.cardsize {\n  --background-color: #2E8B57!important; }\n\nion-select {\n  border: 1px solid greenyellow;\n  color: white;\n  opacity: 1 !important;\n  border-radius: 17px; }\n\nion-input {\n  border: solid 0.2px gray;\n  border-color: #2E8B57;\n  height: 35px;\n  padding-left: 10px;\n  text-align: center;\n  border-end-end-radius: 0.2px;\n  font-size: 12px;\n  padding: 1px; }\n\n.aligs {\n  padding-left: 10px !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\n.hed {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important;\n  opacity: 1 !important;\n  --background: #138D75!important ; }\n\nion-menu-button {\n  color: #ffffff !important; }\n\nion-input {\n  border: 1px solid greenyellow;\n  color: #ffffff;\n  border-radius: 17px; }\n\n.selector {\n  width: 100px;\n  height: 40px;\n  border: 1px solid greenyellow;\n  padding: 10px;\n  margin-right: 30px;\n  outline-color: #A7D5E4;\n  color: white;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFicy9sYWJ2aXNpdHMvRDpcXG5ld2FwcG9sb1xcYXBwb2xvL3NyY1xcYXBwXFxsYWJzXFxsYWJ2aXNpdHNcXGxhYnZpc2l0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFXO0VBQ1gseUJBQTBCO0VBQ3RCLHFCQUFxQjtFQUN0QixvQ0FBbUMsRUFBQTs7QUFFMUM7RUFDSSxZQUFXLEVBQUE7O0FBRWY7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUVYLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxxQ0FBbUIsRUFBQTs7QUFHdkI7RUFDSSw2QkFBOEI7RUFDOUIsWUFBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFHbkI7RUFDRyx3QkFBd0I7RUFDeEIscUJBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdmO0VBQ0ksNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0kseUJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksZ0NBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFFSSxnQ0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLHlCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsZ0NBQWEsRUFBQTs7QUFJakI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQWlCdkI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFicy9sYWJ2aXNpdHMvbGFidmlzaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jYXJkc2l6ZXtcclxuLy8gICAgIHdpZHRoOiA0MDBweDtcclxuLy8gfVxyXG5cclxuLmktYnV0dG9ue1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFOEI1NyFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDozMHB4OyAgIFxyXG59XHJcbi5pY29uLXNpemV7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuXHJcbiB9XHJcbi5jYXJkc2l6ZXtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzJFOEI1NyFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAgMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICBcclxufVxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgYm9yZGVyOiBzb2xpZCAwLjJweCBncmF5O1xyXG4gICAgICAgYm9yZGVyLWNvbG9yOiMyRThCNTc7XHJcbiAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDAuMnB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgcGFkZGluZzogMXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5hbGlnc3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMTM4RDc1IWltcG9ydGFudCA7XHJcbiAgICAgICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICAuaGVke1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogIzJFOEI1NyAhaW1wb3J0YW50XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMTM4RDc1IWltcG9ydGFudCA7XHJcbiAgICAgICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbnN7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgIH1cclxuICAgXHJcbiAgXHJcbiAgICBpb24tbWVudS1idXR0b257XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuICAgIC8vIGlvbi1zZWxlY3R7XHJcbiAgICAvLyAgICAgLy8gLS1wbGFjZWhvbGRlci1jb2xvcjogI2U2ZDRkNDtcclxuICAgIC8vICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAvLyAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZmZmZiBcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpb24tc2VsZWN0IHtcclxuICAgIC8vICAgICBib3JkZXI6ICAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICAvLyAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAvLyAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICBcclxuICAgIC8vIH1cclxuICAgIC5zZWxlY3RvcntcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG91dGxpbmUtY29sb3I6I0E3RDVFNDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICAvLyBpb24tdGV4dHtcclxuICAgIC8vICAgY29sb3I6IzEzOEQ3NSFpbXBvcnRhbnQgOyAgXHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/labs/labvisits/labvisits.page.ts":
/*!**************************************************!*\
  !*** ./src/app/labs/labvisits/labvisits.page.ts ***!
  \**************************************************/
/*! exports provided: LabvisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabvisitsPage", function() { return LabvisitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_lipidprofile_lipidprofile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lipidprofile/lipidprofile.page */ "./src/app/lipidprofile/lipidprofile.page.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");






var LabvisitsPage = /** @class */ (function () {
    function LabvisitsPage(nav, modalController, route, auth, menu) {
        this.nav = nav;
        this.modalController = modalController;
        this.route = route;
        this.auth = auth;
        this.menu = menu;
        this.years = [{ "years": 2019 }, { "years": 2020 }, { "years": 2021 }, { "years": 2022 }, { "years": 2023 }, { "years": 2024 }, { "years": 2025 }, { "years": 2026 }, { "years": 2027 }, { "years": 2028 }, { "years": 2029 }];
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.full_name = localStorage.getItem("full_name");
        this.patient_id = localStorage.getItem("patient_id");
        this.patientlist();
    }
    LabvisitsPage.prototype.ngOnInit = function () {
    };
    LabvisitsPage.prototype.view = function (labobj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_lipidprofile_lipidprofile_page__WEBPACK_IMPORTED_MODULE_4__["LipidprofilePage"],
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
    LabvisitsPage.prototype.patientlist = function () {
        var _this = this;
        this.auth.labupdate({ patient_id: this.patient_id }).subscribe(function (res) {
            _this.list();
            if (res.status == "success") {
                {
                    _this.visits = res.response;
                    //  this.name=res.response[0].full_name;
                    _this.list();
                }
            }
        }, function () {
            swal("Login failed, Login detils not exits ");
        });
    };
    LabvisitsPage.prototype.Search = function () {
        var _this = this;
        this.auth.labhistory({ year: this.seyear, patient_id: this.patient_id, child_name: this.sechild_name }).subscribe(function (res) {
            if (res.status == 'success') {
                _this.visits = res.response;
                console.log(39, _this.res);
            }
            _this.visits = res.response;
        }, console.log);
    };
    LabvisitsPage.prototype.list = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.findchild({ patient_id: this.patient_id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.child = res.response;
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
                else {
                    _this.child = [];
                }
            }
        }, function () {
            _this.auth.presentToast("Login failed, Login detils not exits ");
        });
    };
    LabvisitsPage.prototype.back = function () {
        this.nav.pop();
    };
    LabvisitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labvisits',
            template: __webpack_require__(/*! ./labvisits.page.html */ "./src/app/labs/labvisits/labvisits.page.html"),
            styles: [__webpack_require__(/*! ./labvisits.page.scss */ "./src/app/labs/labvisits/labvisits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], LabvisitsPage);
    return LabvisitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=labs-labvisits-labvisits-module.js.map