import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning';

  arr = [{value:1,label:'ONE'},{value:2,label:'TWO'},{value:3,label:'THREE'},{value:4,label:'FOUR'}];

  receiveDropdown($event){
    console.log($event.value);
    
  }
}
