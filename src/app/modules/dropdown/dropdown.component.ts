import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() dropdownList;
  @Input() dropdownClass;
  // @Output() dropdownEvent = new EventEmitter<any>(); 
  @Input() myClass: string;
  @Input() datasource: any;
  @Input() selectedItem: any;
  @Input() displayKey: string;
  @Output() dropdownEvent: EventEmitter<any> = new EventEmitter();

  SelectedDropdownItem;
  constructor() { }

  ngOnInit() {
    // this.dropdownList.forEach((item)=>{
    //   console.log(item)
      this.SelectedDropdownItem = this.dropdownList[0].value
    // })

  }

  dropDownClick(event:any) {
    this.dropdownEvent.emit(event)
  }

}
