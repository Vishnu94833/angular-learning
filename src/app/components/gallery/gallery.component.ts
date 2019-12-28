import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  @Input() galleryArray: [];
  @Output() galleryEvent = new EventEmitter();

  public modalImage : string = "";
  public imageId : number = null;
  constructor() { }

  ngOnInit() {
  }

  gallery(event){
    this.imageId = event;
    this.getModalImage(event)
    this.galleryEvent.emit(event);
  }

  getModalImage(id){
    this.galleryArray.forEach((element:any) => {
      if (id === element.id) {
          this.modalImage = element.download_url
      }
    });
  }

}
