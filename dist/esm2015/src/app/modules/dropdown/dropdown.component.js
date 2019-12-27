import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let DropdownComponent = class DropdownComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], DropdownComponent.prototype, "dropdownList", void 0);
tslib_1.__decorate([
    Input()
], DropdownComponent.prototype, "ngClass", void 0);
DropdownComponent = tslib_1.__decorate([
    Component({
        selector: 'dropdown',
        template: "<!-- <select class={{ngClass}} name=\"\" id=\"\" >\n  <option *ngFor=\"let i of dropdownList\" value=\"i.value\">{{i.label}}</option>\n</select>\n -->\n <select class={{ngClass}}>\n  <option [value]=\"dropdown.value\" *ngFor=\"let dropdown of dropdownList\">\n                 {{dropdown.label}}</option>\n</select>",
        styles: [".select{width:100%;padding:10px;border-radius:5px}"]
    })
], DropdownComponent);
export { DropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1sZWFybmluZy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSTVCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0NBRUYsQ0FBQTtBQVBVO0lBQVIsS0FBSyxFQUFFO3VEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7a0RBQVM7QUFITixpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsdVVBQXdDOztLQUV6QyxDQUFDO0dBQ1csaUJBQWlCLENBUzdCO1NBVFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Ryb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZHJvcGRvd25MaXN0O1xuICBASW5wdXQoKSBuZ0NsYXNzO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==