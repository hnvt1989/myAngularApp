"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var signupModel_1 = require('./signupModel');
var SignupFormComponent = (function () {
    function SignupFormComponent() {
        this.countries = ['United States', 'Canada', 'England'];
        this.model = new signupModel_1.SignupModel('John', 'Smith', 'johnsmith@test.com', 'United States');
        this.submitted = false;
    }
    SignupFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    SignupFormComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            templateUrl: 'app/signup-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
//# sourceMappingURL=signup-form.component.js.map