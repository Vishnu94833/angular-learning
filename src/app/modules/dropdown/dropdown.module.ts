import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownComponent // <-- this!
  ]
})
export class DropdownModule { }
