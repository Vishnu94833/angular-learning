import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
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
    return DropdownComponent;
}());
export { DropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1sZWFybmluZy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pEO0lBSUU7SUFBZ0IsQ0FBQztJQUVqQixvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxRO1FBQVIsS0FBSyxFQUFFOzJEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7c0RBQVM7SUFITixpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsdVVBQXdDOztTQUV6QyxDQUFDO09BQ1csaUJBQWlCLENBUzdCO0lBQUQsd0JBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBkcm9wZG93bkxpc3Q7XG4gIEBJbnB1dCgpIG5nQ2xhc3M7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19