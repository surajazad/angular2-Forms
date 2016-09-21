System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.pageTitle = "Welcome to Employee Registration Portal";
                    this.formActive = true;
                    this._buildForm();
                }
                WelcomeComponent.prototype._buildForm = function () {
                    this.employeeForm = this._formBuilder.group({
                        employeeName: this._formBuilder.control(null),
                        designation: this._formBuilder.control(null),
                        city: this._formBuilder.control(null)
                    });
                };
                WelcomeComponent.prototype.onClearForm = function () {
                    var _this = this;
                    this._buildForm();
                    this.empName = "";
                    this.formActive = false;
                    setTimeout(function () {
                        _this.formActive = true;
                    }, 0);
                };
                WelcomeComponent.prototype.onSubmitForm = function () {
                    console.log(this.employeeForm.value);
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome-app',
                        templateUrl: 'app/home/welcome.component.html',
                        styleUrls: ['app/home/welcome.component.css']
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map