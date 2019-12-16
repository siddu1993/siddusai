(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicaldetails-medicaldetails-module"],{

/***/ "./src/app/medicaldetails/medicaldetails.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/medicaldetails/medicaldetails.module.ts ***!
  \*********************************************************/
/*! exports provided: MedicaldetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicaldetailsPageModule", function() { return MedicaldetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medicaldetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medicaldetails.page */ "./src/app/medicaldetails/medicaldetails.page.ts");







var routes = [
    {
        path: '',
        component: _medicaldetails_page__WEBPACK_IMPORTED_MODULE_6__["MedicaldetailsPage"]
    }
];
var MedicaldetailsPageModule = /** @class */ (function () {
    function MedicaldetailsPageModule() {
    }
    MedicaldetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medicaldetails_page__WEBPACK_IMPORTED_MODULE_6__["MedicaldetailsPage"]]
        })
    ], MedicaldetailsPageModule);
    return MedicaldetailsPageModule;
}());



/***/ }),

/***/ "./src/app/medicaldetails/medicaldetails.page.html":
/*!*********************************************************!*\
  !*** ./src/app/medicaldetails/medicaldetails.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\" class=\"menu\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Medical Details</ion-title>\n    <ion-icon padding-left slot=\"end\" (click)=\"add()\" name=\"add-circle\"></ion-icon>\n  </ion-toolbar>\n\n \n\n</ion-header>\n\n<ion-content>\n    <div text-center>\n         \n        <ion-img text-center (click)=\"hosvisit()\" [src]=\"userimg\" class=\"center\"></ion-img>\n  \n     </div>\n\n  <ion-list >\n  \n      <ion-card>\n         \n      <ion-item lines=\"none\">\n        <h6 slot=\"start\">Patient id</h6>\n        <h6 slot=\"end\">{{userData.patient_id}}</h6>\n      </ion-item>\n    \n      <ion-item  lines=\"none\">\n        <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n        <h6 slot=\"start\">Name</h6>\n        <h6 slot=\"end\">{{ userData.full_name}}</h6>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <h6 slot=\"start\">Gender</h6>\n        <h6 slot=\"end\"> {{userData.sex}}</h6>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <h6 slot=\"start\">Age</h6>\n        <h6 slot=\"end\">{{userData.age}}</h6>\n      </ion-item>\n\n      <ion-item  lines=\"none\">\n        <h6 slot=\"start\">Date of Birth</h6>\n        <h6 slot=\"end\">{{userData.date_of_birth  | date:'dd-MM-yyyy'}} </h6>\n      </ion-item>\n      <ion-item lines=\"none\" >\n        <h6 slot=\"start\">Email id</h6>\n        <h6 slot=\"end\">{{ userData.email}}</h6>\n      </ion-item>\n      <!-- <ion-item class=\"activated\">\n        <h6 slot=\"start\">Address</h6>\n        <h6 slot=\"end\">{{userData. address}} </h6>\n      </ion-item>\n      <ion-item  lines=\"none\">\n        <h6 slot=\"start\">City</h6>\n        <h6 slot=\"end\">{{ userData.city}}</h6>\n      </ion-item>\n      <ion-item class=\"activated\">\n        <h6 slot=\"start\">State</h6>\n        <h6 slot=\"end\"> {{ userData.state}}</h6>\n      </ion-item>\n      <ion-item  lines=\"none\">\n        <h6 slot=\"start\" >Insurance</h6>\n        <h6 slot=\"end\">{{userData.insurance}}</h6>\n      </ion-item>\n      <ion-item class=\"activated\">\n        <h6 slot=\"start\">Phone No</h6>\n        <h6 slot=\"end\"> {{userData.phone_no}}</h6>\n      </ion-item> -->\n      <ion-item lines=\"none\">\n\n\n          <ion-text (click)=\"view()\" slot=\"start\" color=\"primary\">\n              <h6><u>View</u></h6>\n            </ion-text>\n         \n       \n      </ion-item>\n      </ion-card>\n\n    <div class=\"container\" >\n      <h6 style=\"color: #ffffff;\"><b>Medical History</b></h6>\n\n<div class=\"scroll\" scrollX=\"true\">\n      <ion-grid>\n        <ion-row>\n            <ion-col size=\"4\">\n                <div class=\"container\" text-center>\n                \n                    <ion-img (click)=\"docvisit()\" [src]=\"doctr\"></ion-img>\n                    <small>   <p class=\"hos\">Doctor visits</p></small>\n                    </div>\n      <!-- <button class=\"btn\" (click)=\"docvisit()\"><i class=\"fa fa-home\"></i> Doctors Visits</button> -->\n    \n      </ion-col>\n      <ion-col size=\"4\">\n\n          <div class=\"container\" text-center>\n                \n              <ion-img (click)=\"labvisits()\" [src]=\"labvisit\"></ion-img>\n              <small>  <p class=\"hos\">Lab visits</p></small>\n              </div>\n     \n      </ion-col>\n    \n      <ion-col size=\"4\">\n          <div class=\"container\" text-center>\n                \n              <ion-img (click)=\"hosvisit()\" [src]=\"hosv\"></ion-img>\n              <small> <p class=\"hos\">Hospital visits</p></small>\n              </div>\n     \n    \n</ion-col>\n      </ion-row>\n      </ion-grid>\n<!-- \n\n      <h5  (click)=\"docvisit()\"><u><ul>Doctors Visits</ul></u></h5>\n      <h5  (click)=\"labvisits()\"><u><ul>Lab Visits</ul></u></h5>\n      <h5  (click)=\"hosvisit()\"><u><ul>Hospital Visits</ul></u></h5> -->\n      </div>\n     </div>\n\n\n    \n\n\n    <div class=\"container\">\n        <h6 style=\"color: #ffffff;\"><b>Patients Ratings</b></h6>\n\n      <div class=\"scroll\" scrollX=\"true\">\n\n\n        <ion-grid>\n          <ion-row>\n              <ion-col size=\"4\">\n                  <div class=\"container\" text-center>\n                  \n                      <ion-img (click)=\"docrate()\" [src]=\"src\"></ion-img>\n                      <small><p class=\"hos\">Doctors</p></small>\n                      </div>\n        <!-- <button class=\"btn\" (click)=\"docvisit()\"><i class=\"fa fa-home\"></i> Doctors Visits</button> -->\n      \n        </ion-col>\n        <ion-col size=\"4\">\n  \n            <div class=\"container\" text-center>\n                  \n                <ion-img (click)=\"lab()\" [src]=\"src\"></ion-img>\n                <small><p class=\"hos\">Lab</p></small>\n                </div>\n       \n        </ion-col>\n      \n        <ion-col size=\"4\">\n            <div class=\"container\" text-center>\n                  \n                <ion-img (click)=\"hos()\" [src]=\"src\"></ion-img>\n                <small><p class=\"hos\">Hospital</p></small>\n                </div>\n       \n      \n  </ion-col>\n        </ion-row>\n        </ion-grid>\n  <!-- \n  \n        <h5  (click)=\"docvisit()\"><u><ul>Doctors Visits</ul></u></h5>\n        <h5  (click)=\"labvisits()\"><u><ul>Lab Visits</ul></u></h5>\n        <h5  (click)=\"hosvisit()\"><u><ul>Hospital Visits</ul></u></h5> -->\n       </div>\n</div>\n\n \n</ion-list>\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/medicaldetails/medicaldetails.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/medicaldetails/medicaldetails.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:rgb(43, 148, 235); }\n\nion-card {\n  --ion-background-color:rgb(50, 52, 146); }\n\n.scroll {\n  overflow: auto; }\n\n.container {\n  width: 132%;\n  padding-right: 0px;\n  padding-left: -1px;\n  margin-right: auto;\n  margin-left: auto; }\n\np {\n  color: #ffffff; }\n\n.i-button {\n  height: 25px;\n  color: #ffffff !important;\n  opacity: 1 !important;\n  background-color: #060768; }\n\nion-button {\n  height: 30px; }\n\nion-item {\n  border-radius: 17px; }\n\n.icon-size {\n  height: 35px;\n  width: 35px;\n  color: #ffffff; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\nion-img {\n  height: 60px;\n  width: 60px; }\n\nh6 {\n  color: #ffffff; }\n\n.backgr {\n  color: #ffffff !important; }\n\n.container {\n  width: 90%;\n  padding-right: 0px;\n  padding-left: -1px;\n  margin-right: auto;\n  margin-left: auto; }\n\nion-select {\n  border: 1px solid greenyellow;\n  color: white;\n  opacity: 1 !important;\n  border-radius: 17px; }\n\nion-input {\n  border: solid 0.2px gray;\n  border-color: #2E8B57;\n  height: 35px;\n  padding-left: 10px;\n  text-align: center;\n  border-end-end-radius: 0.2px;\n  font-size: 12px;\n  padding: 1px; }\n\n.aligs {\n  padding-left: 10px !important; }\n\n.activated {\n  --background: rgb(81, 83, 177)!important ; }\n\nion-toolbar {\n  --background: rgb(6, 7, 104)!important ;\n  opacity: 1 !important; }\n\n.hed {\n  --background: rgb(6, 7, 104)!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important;\n  opacity: 1 !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-menu-button {\n  color: #ffffff !important; }\n\nion-input {\n  border: 1px solid greenyellow;\n  color: #ffffff;\n  border-radius: 17px; }\n\n.btn {\n  background-color: DodgerBlue;\n  border: none;\n  color: white;\n  padding: 12px 16px;\n  font-size: 16px;\n  cursor: pointer; }\n\n/* Darker background on mouse-over */\n\n.btn:hover {\n  background-color: RoyalBlue; }\n\n.selector {\n  width: 100px;\n  height: 40px;\n  border: 1px solid greenyellow;\n  padding: 10px;\n  margin-right: 30px;\n  outline-color: #A7D5E4;\n  color: white;\n  opacity: 1; }\n\n@media screen and (min-height: 360px) and (max-height: 640px) {\n  .hos {\n    padding-right: 101px;\n    padding-left: 5px; } }\n\n@media screen and (min-height: 411px) and (max-height: 823px) {\n  .hos {\n    padding-right: 135px;\n    padding-left: 4px; } }\n\n@media screen and (min-height: 375px) and (max-height: 812px) {\n  .hos {\n    padding-right: 5px; } }\n\n@media screen and (min-height: 414px) and (max-height: 736px) {\n  .container {\n    width: 110%;\n    padding-right: 0px;\n    padding-left: -1px;\n    margin-right: auto;\n    margin-left: auto; }\n  .hos {\n    padding-right: 2px; } }\n\n@media screen and (min-height: 411px) and (max-height: 723px) {\n  .hos {\n    padding-right: 131px; } }\n\n@media screen and (min-height: 411px) and (max-height: 823px) {\n  .container {\n    width: 130%;\n    padding-right: 0px;\n    padding-left: -1px;\n    margin-right: auto;\n    margin-left: auto; }\n  .hos {\n    padding-right: 131px; } }\n\n@media screen and (min-height: 411px) and (max-height: 731px) {\n  .container {\n    width: 130%;\n    padding-right: 0px;\n    padding-left: -1px;\n    margin-right: auto;\n    margin-left: auto; }\n  .hos {\n    padding-right: 107px; } }\n\n@media screen and (min-height: 320px) and (max-height: 568px) {\n  .hos {\n    padding-right: 82px; } }\n\n@media screen and (min-height: 768px) and (max-height: 1024px) {\n  .hos {\n    padding-right: 103px; } }\n\n@media screen and (min-height: 1024px) and (max-height: 1366px) {\n  .container {\n    width: 100%;\n    padding-right: 0px;\n    padding-left: -1px;\n    margin-right: auto;\n    margin-left: auto; }\n  .hos {\n    padding-right: 146px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbGRldGFpbHMvRDpcXG5ld2FwcG9sb1xcc2lkZHVzYWkuZ2l0XFx0cnVuay9zcmNcXGFwcFxcbWVkaWNhbGRldGFpbHNcXG1lZGljYWxkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdDQUF1QixFQUFBOztBQUczQjtFQUNJLHVDQUF1QixFQUFBOztBQUczQjtFQUNJLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxXQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVc7RUFDWCx5QkFBMEI7RUFDdEIscUJBQXFCO0VBQ3RCLHlCQUErQixFQUFBOztBQUV0QztFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLG1CQUFtQixFQUFBOztBQUt2QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBRVgsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLDZCQUE4QjtFQUM5QixZQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUduQjtFQUNHLHdCQUF3QjtFQUN4QixxQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNwQixrQkFBa0I7RUFDaEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2Y7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSx5Q0FBYSxFQUFBOztBQUdqQjtFQUNJLHVDQUFhO0VBQ2IscUJBQW1CLEVBQUE7O0FBRXZCO0VBRUksdUNBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5QkFBMEI7RUFDMUIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRzlCO0VBQ0kseUJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakIsb0NBQUE7O0FBQ0E7RUFDRSwyQkFBMkIsRUFBQTs7QUFnQi9CO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLFVBQVMsRUFBQTs7QUFNYjtFQUdJO0lBQ0ksb0JBQXFCO0lBQ3JCLGlCQUFpQixFQUFBLEVBQ3BCOztBQUdMO0VBR0k7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCLEVBQUEsRUFFcEI7O0FBR0w7RUFHSTtJQUNJLGtCQUFrQixFQUFBLEVBRXJCOztBQUtMO0VBRUk7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxrQkFBa0IsRUFBQSxFQUVyQjs7QUFLTDtFQUlJO0lBQ0ksb0JBQ0osRUFBQSxFQUFDOztBQUlMO0VBR0k7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSyxvQkFBb0IsRUFBQSxFQUV4Qjs7QUFJTDtFQUdJO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksb0JBQW9CLEVBQUEsRUFFdkI7O0FBSUw7RUFHSTtJQUNJLG1CQUVKLEVBQUEsRUFBQzs7QUFJTDtFQUdJO0lBQ0ksb0JBQW9CLEVBQUEsRUFFdkI7O0FBSUw7RUFDSTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQUdyQjtJQUNJLG9CQUFvQixFQUFBLEVBRXZCIiwiZmlsZSI6InNyYy9hcHAvbWVkaWNhbGRldGFpbHMvbWVkaWNhbGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDMsIDE0OCwgMjM1KTtcclxuICAgXHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYig1MCwgNTIsIDE0Nik7XHJcbiBcclxufVxyXG4uc2Nyb2xsIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMzIlIDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogLTFweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6ICNmZmZmZmY7IFxyXG59XHJcbi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDYsIDcsIDEwNCk7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDozMHB4OyAgIFxyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcblxyXG59XHJcblxyXG5cclxuLmljb24tc2l6ZXtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuaW9uLWltZ3tcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG5oNntcclxuICAgIGNvbG9yOiAjZmZmZmZmOyBcclxufVxyXG4uYmFja2dye1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgXHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAtMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIGJvcmRlcjogIDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgXHJcbn1cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgIGJvcmRlcjogc29saWQgMC4ycHggZ3JheTtcclxuICAgICAgIGJvcmRlci1jb2xvcjojMkU4QjU3O1xyXG4gICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMC4ycHg7XHJcbiAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICBwYWRkaW5nOiAxcHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmFsaWdze1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFjdGl2YXRlZHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYig4MSwgODMsIDE3NykhaW1wb3J0YW50IDtcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoNiwgNywgMTA0KSFpbXBvcnRhbnQgO1xyXG4gICAgICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLmhlZHtcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6ICMyRThCNTcgIWltcG9ydGFudFxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDYsIDcsIDEwNCkhaW1wb3J0YW50IDtcclxuICAgICAgICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDsgXHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIERhcmtlciBiYWNrZ3JvdW5kIG9uIG1vdXNlLW92ZXIgKi9cclxuICAgICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogUm95YWxCbHVlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC8vIGlvbi1zZWxlY3R7XHJcbiAgICAvLyAgICAgLy8gLS1wbGFjZWhvbGRlci1jb2xvcjogI2U2ZDRkNDtcclxuICAgIC8vICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAvLyAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZmZmZiBcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpb24tc2VsZWN0IHtcclxuICAgIC8vICAgICBib3JkZXI6ICAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICAvLyAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAvLyAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICBcclxuICAgIC8vIH1cclxuICAgIC5zZWxlY3RvcntcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG91dGxpbmUtY29sb3I6I0E3RDVFNDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICAvLyBpb24tdGV4dHtcclxuICAgIC8vICAgY29sb3I6IzEzOEQ3NSFpbXBvcnRhbnQgOyAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQgOiAzNjBweCkgYW5kIChtYXgtaGVpZ2h0IDogNjQwcHgpIHtcclxuICAgICBcclxuICAgICAgICBcclxuICAgICAgICAuaG9ze1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMDFweCA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodCA6IDQxMXB4KSBhbmQgKG1heC1oZWlnaHQgOiA4MjNweCkge1xyXG4gICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ob3N7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodCA6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQgOiA4MTJweCkge1xyXG4gICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLmhvc3tcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0IDogNDE0cHgpIGFuZCAobWF4LWhlaWdodCA6IDczNnB4KSB7XHJcbiAgICAgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLTFweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvc3tcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQgOiA0MTFweCkgYW5kIChtYXgtaGVpZ2h0IDogNzIzcHgpIHtcclxuICAgICBcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICAuaG9ze1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMzFweFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodCA6IDQxMXB4KSBhbmQgKG1heC1oZWlnaHQgOiA4MjNweCkge1xyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9ze1xyXG4gICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTMxcHg7O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQgOiA0MTFweCkgYW5kIChtYXgtaGVpZ2h0IDogNzMxcHgpIHtcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLTFweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvc3tcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTA3cHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodCA6IDMyMHB4KSBhbmQgKG1heC1oZWlnaHQgOiA1NjhweCkge1xyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgICAuaG9ze1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MnB4XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodCA6IDc2OHB4KSBhbmQgKG1heC1oZWlnaHQgOiAxMDI0cHgpIHtcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLmhvc3tcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAzcHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodCA6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0IDogMTM2NnB4KSB7XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLTFweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5ob3N7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0NnB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/medicaldetails/medicaldetails.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/medicaldetails/medicaldetails.page.ts ***!
  \*******************************************************/
/*! exports provided: MedicaldetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicaldetailsPage", function() { return MedicaldetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _editpatient_editpatient_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editpatient/editpatient.page */ "./src/app/editpatient/editpatient.page.ts");






var MedicaldetailsPage = /** @class */ (function () {
    function MedicaldetailsPage(modalController, nav, router, auth, menu) {
        this.modalController = modalController;
        this.nav = nav;
        this.router = router;
        this.auth = auth;
        this.menu = menu;
        this.tickets = [];
        this.menu.enable(true);
        this.userData = JSON.parse(localStorage.getItem("userData"));
        console.log(123, this.userData);
        this.userimg = 'assets/images/user.png';
        this.src = 'assets/images/rating.png';
        this.hosv = 'assets/images/hosvisit.png';
        this.doctr = 'assets/images/doctr.jpg';
        this.labvisit = 'assets/images/labvisit.png';
    }
    MedicaldetailsPage.prototype.ngOnInit = function () {
    };
    MedicaldetailsPage.prototype.login = function () {
        var _this = this;
        localStorage.setItem('token', "res.response.token");
        // location.reload();
        this.auth.presentLoading();
        this.auth.editaft(this.userData).subscribe(function (res) {
            if (res.status == "success") {
                _this.userData = res.response[0];
                localStorage.setItem("userData", JSON.stringify(_this.userData));
                localStorage.setItem("patient_id", _this.userData.patient_id);
            }
        }, function () {
            _this.auth.presentToast("Server failed");
        });
    };
    MedicaldetailsPage.prototype.add = function () {
        this.router.navigateByUrl("/addpersons");
    };
    MedicaldetailsPage.prototype.docvisit = function () {
        this.router.navigateByUrl("/patiandocvisits");
    };
    MedicaldetailsPage.prototype.docrate = function () {
        this.router.navigateByUrl("/docrates");
    };
    MedicaldetailsPage.prototype.lab = function () {
        this.router.navigateByUrl("/labrate");
    };
    MedicaldetailsPage.prototype.hosvisit = function () {
        this.router.navigateByUrl("/hospvisits");
    };
    MedicaldetailsPage.prototype.hos = function () {
        this.router.navigateByUrl("/hosprate");
    };
    MedicaldetailsPage.prototype.labvisits = function () {
        this.router.navigateByUrl("/labvisits");
    };
    MedicaldetailsPage.prototype.view = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _editpatient_editpatient_page__WEBPACK_IMPORTED_MODULE_5__["EditpatientPage"],
                            componentProps: { value: this.userData }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.login();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MedicaldetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicaldetails',
            template: __webpack_require__(/*! ./medicaldetails.page.html */ "./src/app/medicaldetails/medicaldetails.page.html"),
            styles: [__webpack_require__(/*! ./medicaldetails.page.scss */ "./src/app/medicaldetails/medicaldetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], MedicaldetailsPage);
    return MedicaldetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=medicaldetails-medicaldetails-module.js.map