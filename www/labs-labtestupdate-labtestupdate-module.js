(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["labs-labtestupdate-labtestupdate-module"],{

/***/ "./src/app/labs/labtestupdate/labtestupdate.module.ts":
/*!************************************************************!*\
  !*** ./src/app/labs/labtestupdate/labtestupdate.module.ts ***!
  \************************************************************/
/*! exports provided: LabtestupdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabtestupdatePageModule", function() { return LabtestupdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _labtestupdate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labtestupdate.page */ "./src/app/labs/labtestupdate/labtestupdate.page.ts");







var routes = [
    {
        path: '',
        component: _labtestupdate_page__WEBPACK_IMPORTED_MODULE_6__["LabtestupdatePage"]
    }
];
var LabtestupdatePageModule = /** @class */ (function () {
    function LabtestupdatePageModule() {
    }
    LabtestupdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_labtestupdate_page__WEBPACK_IMPORTED_MODULE_6__["LabtestupdatePage"]]
        })
    ], LabtestupdatePageModule);
    return LabtestupdatePageModule;
}());



/***/ }),

/***/ "./src/app/labs/labtestupdate/labtestupdate.page.html":
/*!************************************************************!*\
  !*** ./src/app/labs/labtestupdate/labtestupdate.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Lab Test update</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\" >\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n  \n   \n            <div *ngFor=\"let form_elem of test_res; let i=index\" >\n       <ion-card>\n          {{i}}\n         <ion-item>\n            <small  slot=\"start\"><ion-label>{{form_elem.name}}</ion-label></small>\n            <small  slot=\"end\"><ion-input  [(ngModel)]=\"sname[i]\"    type=\"text\"  placeholder=\"{{form_elem.name}}\"></ion-input></small>\n         </ion-item>\n         <ion-item>\n            <small slot=\"start\"> <ion-label >Units</ion-label></small>\n\n          <small>   <select    [(ngModel)]=\"unit[i]\" >\n              <option *ngFor=\"let obj of read\"  placeholder=\"units\"  value=\"{{obj.unit}}\">{{obj.unit }}</option>\n            </select></small>\n            </ion-item>\n\n             <ion-item>\n                <small slot=\"start\"> <ion-label >Method</ion-label></small>\n    \n              <small>   <select    [(ngModel)]=\"method[i]\" >\n                  <option *ngFor=\"let obj of read\" placeholder=\"units\"  value=\"{{obj.method}}\">{{obj.method }}</option>\n                </select></small>\n                </ion-item> \n            </ion-card>\n           </div>\n\n      \n         <small *ngIf=\"sts!=1\"> <ion-button size=\"small\"  (click)=\"sub()\" >Save</ion-button></small>\n         <small *ngIf=\"sts==1\"> <ion-button size=\"small\"  (click)=\"sub()\" >Update</ion-button></small>\n\n\n     \n      \n\n\n\n    \n    <!-- <div  *ngFor=\"let obj of test_res; let i = index;\" [formGroupName]=\"i\">\n      <label>{{obj.name}}</label>\n      <input formControlName=\"name\" placeholder='obj.name'>\n      <input formControlName=\"description\" placeholder=\"messurement\">\n    <input formControlName=\"price\" placeholder=\"{{Item.price}}\"> \n    </div>\n   -->\n\n\n\n\n\n    <!-- <form [formGroup]=\"labupdateForm\">\n    <ion-item>\n       <small slot=\"start\"> <ion-label>Ref Dr Name:</ion-label></small>\n        <ion-input  formControlName='docter_name' placeholder=\"doctor name\"></ion-input>\n      </ion-item>\n\n\n    <ion-item>\n        <small slot=\"start\">  <ion-label>Test Name:</ion-label></small>\n  <ion-select slot=\"end\" formControlName=\"test_name\" \n  placeholder=\"test name\">\n  <ion-select-option >Blood test</ion-select-option>\n\n  <ion-select-option >Sugar</ion-select-option>\n  <ion-select-option >Dengu</ion-select-option>\n  <ion-select-option >Thiroud</ion-select-option>\n\n  <ion-select-option >Malaria</ion-select-option>\n \n  </ion-select>\n    </ion-item>\n\n  <ion-item>\n      <small slot=\"start\">  <ion-label>Select patient:</ion-label></small>\n\n    <ion-select slot=\"end\" formControlName =\"child_name\">\n        <ion-select-option  value=\"\">{{name}}</ion-select-option>\n        <ion-select-option *ngFor=\"let obj of alllist\"  value=\"{{obj.name}}\">{{obj.name }}</ion-select-option>\n      </ion-select></ion-item>\n\n<div>\n    <h6 padding>Test Results</h6>\n</div>\n\n<ion-card>\n\n    <ion-grid>\n           \n         \n           \n       \n        <ion-row>\n            <ion-col size=\"6\">\n         \n                <ion-item>\n                  <ion-label  position=\"floating\" ><small>Total Cholestrol</small></ion-label>\n                  <ion-input  type=\"number\" formControlName=\"total_cholestrol\"  ></ion-input>\n                  \n                </ion-item>\n                <ng-container *ngFor=\"let validation of validation_messages.total_cholestrol\">\n                    <div class=\"error-message\" *ngIf=\"labupdateForm.get('total_cholestrol').hasError(validation.type) && (labupdateForm.get('total_cholestrol').dirty || labupdateForm.get('total_cholestrol').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                  </ion-col>\n        \n              <ion-col>\n              </ion-col>  \n        </ion-row> \n        <ion-row>   \n        <ion-col size=\"6\">\n         \n          <ion-item>\n            <ion-label  position=\"floating\" ><small>Triglycerides</small></ion-label>\n            <ion-input  type=\"number\" formControlName=\"tri_glycerides\"  ></ion-input>\n            \n          </ion-item>\n          <ng-container *ngFor=\"let validation of validation_messages.tri_glycerides\">\n              <div class=\"error-message\" *ngIf=\"labupdateForm.get('tri_glycerides').hasError(validation.type) && (labupdateForm.get('tri_glycerides').dirty || labupdateForm.get('tri_glycerides').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n            </ion-col>\n  \n        <ion-col>\n         \n      <ion-item >\n        <ion-label  position=\"floating\" ><small>HDL</small></ion-label>\n        <ion-input type=\"number\" formControlName=\"hdl\"  ></ion-input>\n        \n      </ion-item>\n      <ng-container *ngFor=\"let validation of validation_messages.hdl\">\n          <div class=\"error-message\" *ngIf=\"labupdateForm.get('hdl').hasError(validation.type) && (labupdateForm.get('hdl').dirty || labupdateForm.get('hdl').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n        </ion-col>\n  \n      </ion-row>\n      \n\n        <ion-row>\n            <ion-col size=\"6\">\n             \n              <ion-item>\n                <ion-label  position=\"floating\" ><small>No hdl</small></ion-label>\n                <ion-input  type=\"number\" formControlName=\"no_hdl\" ></ion-input>\n                \n              </ion-item>\n              <ng-container *ngFor=\"let validation of validation_messages.no_hdl\">\n                  <div class=\"error-message\" *ngIf=\"labupdateForm.get('no_hdl').hasError(validation.type) && (labupdateForm.get('no_hdl').dirty || labupdateForm.get('no_hdl').touched)\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n                </ion-col>\n                <ion-col size=\"6\">\n             \n                  <ion-item >\n                    <ion-label  position=\"floating\" ><small>LDL</small></ion-label>\n                    <ion-input  type=\"number\"  formControlName=\"ldl\"  ></ion-input>\n                    \n                  </ion-item>\n                  <ng-container *ngFor=\"let validation of validation_messages.ldl\">\n                      <div class=\"error-message\" *ngIf=\"labupdateForm.get('ldl').hasError(validation.type) && (labupdateForm.get('ldl').dirty || labupdateForm.get('ldl').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                      </div>\n                    </ng-container>\n      \n      \n                    </ion-col>\n        </ion-row>\n        <ion-row>\n                    <ion-col size=\"6\">\n                 \n             \n                      <ion-item>\n                        <ion-label position=\"floating\" ><small>Vldl</small></ion-label>\n                        <ion-input   type=\"number\" formControlName=\"vldl\" ></ion-input>\n                        \n                      </ion-item>\n    \n                      <ng-container *ngFor=\"let validation of validation_messages.vldl\">\n                          <div class=\"error-message\" *ngIf=\"labupdateForm.get('vldl').hasError(validation.type) && (labupdateForm.get('vldl').dirty || labupdateForm.get('vldl').touched)\">\n                            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                          </div>\n                        </ng-container>\n                    </ion-col>\n      \n         \n          \n        \n              <ion-col>\n               \n            <ion-item >\n              <ion-label position=\"floating\" ><small>CHOL/HDL ratio</small></ion-label>\n              <ion-input  type=\"number\"  formControlName=\"chol_ratio\"  ></ion-input>\n              \n            </ion-item>\n            <ng-container *ngFor=\"let validation of validation_messages.chol_ratio\">\n                <div class=\"error-message\" *ngIf=\"labupdateForm.get('chol_ratio').hasError(validation.type) && (labupdateForm.get('chol_ratio').dirty || labupdateForm.get('chol_ratio').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n              </ion-col>\n        \n            </ion-row>\n  \n              <div text-center>\n                  <ion-button (click)=\"update(labupdateForm)\"  fill=\"outline\" shape=\"round\"><small>Save</small></ion-button>\n                 \n                          \n                </div>   \n            \n      \n  </ion-grid>\n</ion-card>\n</form> -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/labs/labtestupdate/labtestupdate.page.scss":
/*!************************************************************!*\
  !*** ./src/app/labs/labtestupdate/labtestupdate.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #138D75!important ;\n  opacity: 1 !important; }\n\nion-title {\n  color: #ffffff !important; }\n\nion-icon {\n  color: #ffffff !important; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFicy9sYWJ0ZXN0dXBkYXRlL0Q6XFxuZXdhcHBvbG9cXGFwcG9sby9zcmNcXGFwcFxcbGFic1xcbGFidGVzdHVwZGF0ZVxcbGFidGVzdHVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBYTtFQUNiLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUNJLHlCQUEwQixFQUFBOztBQUU5QjtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFicy9sYWJ0ZXN0dXBkYXRlL2xhYnRlc3R1cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMzhENzUhaW1wb3J0YW50IDtcclxuICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQgOyBcclxufVxyXG4uZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/labs/labtestupdate/labtestupdate.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/labs/labtestupdate/labtestupdate.page.ts ***!
  \**********************************************************/
/*! exports provided: LabtestupdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabtestupdatePage", function() { return LabtestupdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LabtestupdatePage = /** @class */ (function () {
    function LabtestupdatePage(route, activatedRoute, nav, modalController, auth, formBuilder) {
        var _this = this;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.nav = nav;
        this.modalController = modalController;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.sname = [];
        this.unit = [];
        this.method = [];
        this.validation_messages = {
            'docter_name': [
                // { type: 'required', message: 'upc is required.' },
                { type: 'minlength', message: 'refdoc must be at least 1 characters long.' },
                { type: 'maxlength', message: 'refdoc cannot be more than 20 characters long.' },
                { type: 'validUsername', message: 'Your refdoc has already been taken.' }
            ],
            'test_name': [
                { type: 'required', message: 'testname is required.' },
                { type: 'minlength', message: 'test name must be at least 1 characters long.' },
            ],
            'total_cholestrol': [
                { type: 'required', message: 'total  cholestrol is required.' },
            ],
            'tri_glycerides': [
                { type: 'required', message: 'Triglycerides is required.' },
            ],
            // 'phone': [
            //     { type: 'required', message: 'phone is required.' }],
            'hdl': [
                { type: 'required', message: 'hdl is required.' },
            ],
            'no_hdl': [
                { type: 'required', message: 'no hdl is required.' }
            ],
            'address': [
                { type: 'required', message: 'address  is required.' }
            ],
            'vldl': [
                { type: 'required', message: 'vldl  is required.' }
            ],
            'ldl': [
                { type: 'required', message: 'ldl  is required.' }
            ],
            'chol_ratio': [
                { type: 'required', message: 'chol_ratio  is required.' }
            ],
        };
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.test_res = JSON.parse(params['test_id']);
            _this.docter_id = params['docter_id'];
            _this.docter_name = params['docter_name'];
            _this.lab_name = params['lab_name'];
            _this._id = params['_id'];
            _this.sts = params['sts'];
            console.log("hi test_id", _this.sts); // Print the parameter to the console. 
        });
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.patient_id = localStorage.getItem("patient_id");
        this.name = localStorage.getItem("full_name");
        this.readings();
    }
    LabtestupdatePage.prototype.ngOnInit = function () {
        if (this.sts == "1") {
            this.getval(this._id);
        }
        var _loop_1 = function (i) {
            var group = {};
            this_1.test_res.forEach(function (input_template) {
                group[input_template.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                group[input_template._id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                group[i] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                // this.myFormGroup = new FormGroup(group);
            });
            this_1.myFormGroup[i] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
        };
        var this_1 = this;
        for (var i = 0; i < this.test_res; i++) {
            _loop_1(i);
        }
        // this.orderForm = this.formBuilder.group({
        //   name: '',
        //   email: '',
        //   items: this.test_res
        // });
        //   this.labupdateForm = this.formBuilder.group({
        //     docter_name: new FormControl('', [Validators.required]),
        //     test_name: new FormControl('', [Validators.required]),
        //     total_cholestrol: new FormControl('', [Validators.required]),
        //     tri_glycerides: new FormControl('', [Validators.required]),
        //     hdl: new FormControl('', [Validators.required]),
        //     no_hdl: new FormControl("", [Validators.required]),
        //     ldl: new FormControl('', [Validators.required]),
        //     vldl: new FormControl('', [Validators.required]),
        //     chol_ratio: new FormControl('', [Validators.required]),
        //     patient_id: new FormControl("", [Validators.required]),
        //     child_name: new FormControl("", [Validators.required])
        // });
    };
    LabtestupdatePage.prototype.sub = function () {
        this.val = [];
        for (var i = 0; i < this.test_res.length; i++) {
            this.val.push({ "name": this.test_res[i].name, "unit": this.sname[i] + " " + this.unit[i], "method": this.method[i] });
        }
        console.log('orm', JSON.stringify(this.val));
        if (this.sts == 1) {
            this.updateval();
        }
        else {
            this.readsave();
        }
    };
    LabtestupdatePage.prototype.updateval = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.updateval({ data: this.val, "patient_id": localStorage.getItem("patient_id"), "lab_id": localStorage.getItem("lab_id"), "docter_id": localStorage.getItem("docter_id"),
            "docter_name": this.docter_name, "lab_name": this.lab_name, "_id": this._id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.read = res.response;
                    _this.auth.presentToast("report successfully updated ");
                    _this.route.navigateByUrl("/labinformation");
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("server failed, server details not exits ");
        });
    };
    LabtestupdatePage.prototype.readsave = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.readingsave({ data: this.val, "patient_id": localStorage.getItem("patient_id"), "lab_id": localStorage.getItem("lab_id"), "docter_id": localStorage.getItem("docter_id"),
            "docter_name": this.docter_name, "lab_name": this.lab_name, "_id": this._id }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.read = res.response;
                    _this.auth.presentToast("report successfully added ");
                    _this.route.navigateByUrl("/labinformation");
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("server failed, server details not exits ");
        });
    };
    LabtestupdatePage.prototype.update = function (labupdateForm) {
        var _this = this;
        this.labupdateForm.value.patient_id = this.patient_id;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.updates(labupdateForm.value).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.nav.pop();
                    _this.auth.presentToast("updated successfully");
                    console.log("21", _this.labupdateForm);
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            swal("Login failed, Login detils not exits ");
        });
    };
    LabtestupdatePage.prototype.getval = function (e) {
        var _this = this;
        this.auth.readingedit({ report_id: e }).subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.result = res.response[0].data;
                    var s = [];
                    for (var i = 0; i < _this.result.length; i++) {
                        var r = (_this.result[i].unit).split(" ");
                        _this.sname[i] = r[0];
                        _this.method[i] = _this.result[i].method;
                        _this.unit[i] = r[1];
                    }
                    _this.auth.presentToast("updated successfully");
                    console.log("21", res.response);
                }
            }
        }, function () {
            swal("Login failed, Login detils not exits ");
        });
    };
    LabtestupdatePage.prototype.readings = function () {
        var _this = this;
        // this.labupdateForm .value.docter_id=this.docter_id;
        this.auth.readings().subscribe(function (res) {
            if (res.status == "success") {
                if (res.response != "") {
                    _this.read = res.response;
                    // localStorage.setItem("full_name",this.name);
                    // this.router.navigateByUrl("/patientsearch");
                }
            }
        }, function () {
            _this.auth.presentToast("Login failed, Login detils not exits ");
        });
    };
    LabtestupdatePage.prototype.onSubmit = function () {
    };
    LabtestupdatePage.prototype.back = function () {
        this.nav.pop();
    };
    LabtestupdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labtestupdate',
            template: __webpack_require__(/*! ./labtestupdate.page.html */ "./src/app/labs/labtestupdate/labtestupdate.page.html"),
            styles: [__webpack_require__(/*! ./labtestupdate.page.scss */ "./src/app/labs/labtestupdate/labtestupdate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LabtestupdatePage);
    return LabtestupdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=labs-labtestupdate-labtestupdate-module.js.map