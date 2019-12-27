import { __decorate } from 'tslib';
import { Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        template: "<h1>\n  <ng-content></ng-content>\n</h1>",
        styles: ["h1{color:red}"]
    })
], HeaderComponent);

let HeaderModule = class HeaderModule {
};
HeaderModule = __decorate([
    NgModule({
        declarations: [HeaderComponent],
        imports: [
            CommonModule
        ],
        exports: [
            HeaderComponent // <-- this!
        ]
    })
], HeaderModule);

let DropdownComponent = class DropdownComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DropdownComponent.prototype, "dropdownList", void 0);
__decorate([
    Input()
], DropdownComponent.prototype, "ngClass", void 0);
DropdownComponent = __decorate([
    Component({
        selector: 'dropdown',
        template: "<!-- <select class={{ngClass}} name=\"\" id=\"\" >\n  <option *ngFor=\"let i of dropdownList\" value=\"i.value\">{{i.label}}</option>\n</select>\n -->\n <select class={{ngClass}}>\n  <option [value]=\"dropdown.value\" *ngFor=\"let dropdown of dropdownList\">\n                 {{dropdown.label}}</option>\n</select>",
        styles: [".select{width:100%;padding:10px;border-radius:5px}"]
    })
], DropdownComponent);

let DropdownModule = class DropdownModule {
};
DropdownModule = __decorate([
    NgModule({
        declarations: [DropdownComponent],
        imports: [
            CommonModule
        ],
        exports: [
            DropdownComponent // <-- this!
        ]
    })
], DropdownModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DropdownModule, HeaderModule, HeaderComponent as ɵa, DropdownComponent as ɵb };
//# sourceMappingURL=angular-learning.js.map
