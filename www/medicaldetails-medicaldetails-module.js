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

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\" class=\"menu\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Medical Details</ion-title>\n    <ion-icon slot=\"end\" (click)=\"add()\" name=\"add-circle\"></ion-icon>\n  </ion-toolbar>\n\n \n\n</ion-header>\n\n<ion-content>\n    <div text-center>\n         \n        <ion-img text-center (click)=\"hosvisit()\" [src]=\"userimg\" class=\"center\"></ion-img>\n  \n     </div>\n\n  <ion-list >\n  \n      <ion-card>\n         \n      <ion-item lines=\"none\">\n        <h6 slot=\"start\">Patient id</h6>\n        <h6 slot=\"end\">{{userData.patient_id}}</h6>\n      </ion-item>\n    \n      <ion-item  lines=\"none\">\n        <!-- <ion-icon name=\"wifi\" slot=\"start\"></ion-icon> -->\n        <h6 slot=\"start\">Name</h6>\n        <h6 slot=\"end\">{{ userData.full_name}}</h6>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <h6 slot=\"start\">Gender</h6>\n        <h6 slot=\"end\"> {{userData.sex}}</h6>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <h6 slot=\"start\">Age</h6>\n        <h6 slot=\"end\">{{userData.age}}</h6>\n      </ion-item>\n\n      <ion-item  lines=\"none\">\n        <h6 slot=\"start\">Date of Birth</h6>\n        <h6 slot=\"end\">{{userData.date_of_birth  | date:'dd-MM-yyyy'}} </h6>\n      </ion-item>\n      <ion-item lines=\"none\" >\n        <h6 slot=\"start\">Email id</h6>\n        <h6 slot=\"end\">{{ userData.email}}</h6>\n      </ion-item>\n      <!-- <ion-item class=\"activated\">\n        <h6 slot=\"start\">Address</h6>\n        <h6 slot=\"end\">{{userData. address}} </h6>\n      </ion-item>\n      <ion-item  lines=\"none\">\n        <h6 slot=\"start\">City</h6>\n        <h6 slot=\"end\">{{ userData.city}}</h6>\n      </ion-item>\n      <ion-item class=\"activated\">\n        <h6 slot=\"start\">State</h6>\n        <h6 slot=\"end\"> {{ userData.state}}</h6>\n      </ion-item>\n      <ion-item  lines=\"none\">\n        <h6 slot=\"start\" >Insurance</h6>\n        <h6 slot=\"end\">{{userData.insurance}}</h6>\n      </ion-item>\n      <ion-item class=\"activated\">\n        <h6 slot=\"start\">Phone No</h6>\n        <h6 slot=\"end\"> {{userData.phone_no}}</h6>\n      </ion-item> -->\n      <ion-item lines=\"none\">\n\n\n          <ion-text (click)=\"view()\" slot=\"start\" color=\"primary\">\n              <h6><u>View</u></h6>\n            </ion-text>\n         \n       \n      </ion-item>\n      </ion-card>\n\n    <div class=\"container\">\n       \n\n      <h6 style=\"color: #ffffff;\"><b>Medical History</b></h6>\n      <ion-grid>\n        <ion-row>\n            <ion-col size=\"4\">\n                <div class=\"container\" text-center>\n                \n                    <ion-img (click)=\"docvisit()\" [src]=\"doctr\"></ion-img>\n                    <small>   <p>Doctor visits</p></small>\n                    </div>\n      <!-- <button class=\"btn\" (click)=\"docvisit()\"><i class=\"fa fa-home\"></i> Doctors Visits</button> -->\n    \n      </ion-col>\n      <ion-col size=\"4\">\n\n          <div class=\"container\" text-center>\n                \n              <ion-img (click)=\"labvisits()\" [src]=\"labvisit\"></ion-img>\n              <small>  <p>Lab visits</p></small>\n              </div>\n     \n      </ion-col>\n    \n      <ion-col size=\"4\">\n          <div class=\"container\" text-center>\n                \n              <ion-img (click)=\"hosvisit()\" [src]=\"hosv\"></ion-img>\n              <small> <p>Hospital visits</p></small>\n              </div>\n     \n    \n</ion-col>\n      </ion-row>\n      </ion-grid>\n<!-- \n\n      <h5  (click)=\"docvisit()\"><u><ul>Doctors Visits</ul></u></h5>\n      <h5  (click)=\"labvisits()\"><u><ul>Lab Visits</ul></u></h5>\n      <h5  (click)=\"hosvisit()\"><u><ul>Hospital Visits</ul></u></h5> -->\n     </div>\n\n\n    \n\n\n    <div class=\"container\">\n       \n\n        <h6 style=\"color: #ffffff;\"><b>Patients Ratings</b></h6>\n        <ion-grid>\n          <ion-row>\n              <ion-col size=\"4\">\n                  <div class=\"container\" text-center>\n                  \n                      <ion-img (click)=\"docrate()\" [src]=\"src\"></ion-img>\n                      <small><p>Doctors</p></small>\n                      </div>\n        <!-- <button class=\"btn\" (click)=\"docvisit()\"><i class=\"fa fa-home\"></i> Doctors Visits</button> -->\n      \n        </ion-col>\n        <ion-col size=\"4\">\n  \n            <div class=\"container\" text-center>\n                  \n                <ion-img (click)=\"lab()\" [src]=\"src\"></ion-img>\n                <small><p>Lab</p></small>\n                </div>\n       \n        </ion-col>\n      \n        <ion-col size=\"4\">\n            <div class=\"container\" text-center>\n                  \n                <ion-img (click)=\"hos()\" [src]=\"src\"></ion-img>\n                <small><p>Hospital</p></small>\n                </div>\n       \n      \n  </ion-col>\n        </ion-row>\n        </ion-grid>\n  <!-- \n  \n        <h5  (click)=\"docvisit()\"><u><ul>Doctors Visits</ul></u></h5>\n        <h5  (click)=\"labvisits()\"><u><ul>Lab Visits</ul></u></h5>\n        <h5  (click)=\"hosvisit()\"><u><ul>Hospital Visits</ul></u></h5> -->\n       </div>\n\n\n\n \n</ion-list>\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/medicaldetails/medicaldetails.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/medicaldetails/medicaldetails.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:rgb(43, 148, 235); }\n\nion-card {\n  --ion-background-color:rgb(50, 52, 146); }\n\np {\n  color: #ffffff; }\n\n.i-button {\n  height: 25px;\n  color: #ffffff !important;\n  opacity: 1 !important;\n  background-color: #060768; }\n\nion-button {\n  height: 30px; }\n\nion-item {\n  border-radius: 17px; }\n\n.icon-size {\n  height: 35px;\n  width: 35px;\n  color: #ffffff; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\nion-img {\n  height: 60px;\n  width: 60px; }\n\nh6 {\n  color: #ffffff; }\n\n.backgr {\n  color: #ffffff !important; }\n\nion-select {\n  border: 1px solid greenyellow;\n  color: white;\n  opacity: 1 !important;\n  border-radius: 17px; }\n\nion-input {\n  border: solid 0.2px gray;\n  border-color: #2E8B57;\n  height: 35px;\n  padding-left: 10px;\n  text-align: center;\n  border-end-end-radius: 0.2px;\n  font-size: 12px;\n  padding: 1px; }\n\n.aligs {\n  padding-left: 10px !important; }\n\n.activated {\n  --background: rgb(81, 83, 177)!important ; }\n\nion-toolbar {\n  --background: rgb(6, 7, 104)!important ;\n  opacity: 1 !important; }\n\n.hed {\n  --background: rgb(6, 7, 104)!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-buttons {\n  color: #ffffff !important;\n  opacity: 1 !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\nion-menu-button {\n  color: #ffffff !important; }\n\nion-input {\n  border: 1px solid greenyellow;\n  color: #ffffff;\n  border-radius: 17px; }\n\n.btn {\n  background-color: DodgerBlue;\n  border: none;\n  color: white;\n  padding: 12px 16px;\n  font-size: 16px;\n  cursor: pointer; }\n\n/* Darker background on mouse-over */\n\n.btn:hover {\n  background-color: RoyalBlue; }\n\n.selector {\n  width: 100px;\n  height: 40px;\n  border: 1px solid greenyellow;\n  padding: 10px;\n  margin-right: 30px;\n  outline-color: #A7D5E4;\n  color: white;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbGRldGFpbHMvRDpcXG5ld2FwcG9sb1xcYXBwb2xvL3NyY1xcYXBwXFxtZWRpY2FsZGV0YWlsc1xcbWVkaWNhbGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksd0NBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVc7RUFDWCx5QkFBMEI7RUFDdEIscUJBQXFCO0VBQ3RCLHlCQUErQixFQUFBOztBQUV0QztFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLG1CQUFtQixFQUFBOztBQUt2QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBRVgsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0kseUJBQXlCLEVBQUE7O0FBSzdCO0VBQ0ksNkJBQThCO0VBQzlCLFlBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR25CO0VBQ0csd0JBQXdCO0VBQ3hCLHFCQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ3BCLGtCQUFrQjtFQUNoQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZjtFQUNJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLHlDQUFhLEVBQUE7O0FBR2pCO0VBQ0ksdUNBQWE7RUFDYixxQkFBbUIsRUFBQTs7QUFFdkI7RUFFSSx1Q0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLHlCQUEwQjtFQUMxQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSx5QkFBMEIsRUFBQTs7QUFHOUI7RUFDSSx5QkFBMEIsRUFBQTs7QUFFOUI7RUFDSSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQixvQ0FBQTs7QUFDQTtFQUNFLDJCQUEyQixFQUFBOztBQWdCL0I7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVkaWNhbGRldGFpbHMvbWVkaWNhbGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDMsIDE0OCwgMjM1KTtcclxuICAgXHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYig1MCwgNTIsIDE0Nik7XHJcbiBcclxufVxyXG5we1xyXG4gICAgY29sb3I6ICNmZmZmZmY7IFxyXG59XHJcbi5pLWJ1dHRvbntcclxuICAgIGhlaWdodDoyNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDYsIDcsIDEwNCk7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDozMHB4OyAgIFxyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcblxyXG59XHJcblxyXG5cclxuLmljb24tc2l6ZXtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuaW9uLWltZ3tcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG5oNntcclxuICAgIGNvbG9yOiAjZmZmZmZmOyBcclxufVxyXG4uYmFja2dye1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBib3JkZXI6ICAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgIFxyXG59XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICBib3JkZXI6IHNvbGlkIDAuMnB4IGdyYXk7XHJcbiAgICAgICBib3JkZXItY29sb3I6IzJFOEI1NztcclxuICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDAuMnB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgcGFkZGluZzogMXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5hbGlnc3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hY3RpdmF0ZWR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoODEsIDgzLCAxNzcpIWltcG9ydGFudCA7XHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDYsIDcsIDEwNCkhaW1wb3J0YW50IDtcclxuICAgICAgICBvcGFjaXR5OjEhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICAgIC5oZWR7XHJcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjMkU4QjU3ICFpbXBvcnRhbnRcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYig2LCA3LCAxMDQpIWltcG9ydGFudCA7XHJcbiAgICAgICAgb3BhY2l0eToxIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbnN7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7IFxyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICBcclxuICAgIH1cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1tZW51LWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50IDtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBEYXJrZXIgYmFja2dyb3VuZCBvbiBtb3VzZS1vdmVyICovXHJcbiAgICAgIC5idG46aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFJveWFsQmx1ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAvLyBpb24tc2VsZWN0e1xyXG4gICAgLy8gICAgIC8vIC0tcGxhY2Vob2xkZXItY29sb3I6ICNlNmQ0ZDQ7XHJcbiAgICAvLyAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgLy8gICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmZmZmYgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaW9uLXNlbGVjdCB7XHJcbiAgICAvLyAgICAgYm9yZGVyOiAgMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgLy8gICAgIGNvbG9yOndoaXRlO1xyXG4gICAgLy8gICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAuc2VsZWN0b3J7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBvdXRsaW5lLWNvbG9yOiNBN0Q1RTQ7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgLy8gaW9uLXRleHR7XHJcbiAgICAvLyAgIGNvbG9yOiMxMzhENzUhaW1wb3J0YW50IDsgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgXHJcblxyXG4gICJdfQ== */"

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