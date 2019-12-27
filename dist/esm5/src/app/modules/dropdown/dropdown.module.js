import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = tslib_1.__decorate([
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
    return DropdownModule;
}());
export { DropdownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1sZWFybmluZy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBV3pEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBVDFCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsaUJBQWlCLENBQUMsWUFBWTthQUMvQjtTQUNGLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEcm9wZG93bkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERyb3Bkb3duQ29tcG9uZW50IC8vIDwtLSB0aGlzIVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTW9kdWxlIHsgfVxuIl19