import { Component } from '@angular/core';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning';

  constructor(private galleryService:GalleryService){}

  ngOnInit(){
    this.getImages();
  }
  arr = [{value:1,label:'ONE'},{value:2,label:'TWO'},{value:3,label:'THREE'},{value:4,label:'FOUR'}];
  navOptions =[
    { logo:"../assets/images/V_interios_LOGO.png"},
    {
    navbarList:["Home","Careers","Contact Us","About Us"]
  }
  ];

  galleryOptions = []

  navHandler(event){
    console.log(event);
  }
  galleryHandler(event){
    console.log(event);
    
  }
  receiveDropdown($event){
    console.log($event.value);
  }

  getImages(){
   this.galleryService.getImages().subscribe(res=>{
    //  res.forEach(element => {
      this.galleryOptions=res;
    //  });
    console.log(res);
    
   })
    // console.log(images);
    
  }
}
