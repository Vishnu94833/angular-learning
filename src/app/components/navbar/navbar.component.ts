import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() navbarOptions : [];
    @Output() navbarClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  navbarEvent(item){
    this.navbarClickEvent.emit(item);
  }

}
