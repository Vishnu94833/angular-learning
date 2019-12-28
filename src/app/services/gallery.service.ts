import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const uri = 'https://picsum.photos/v2/list';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) { }

  getImages():Observable<any>{
    return this._http.get<any>(uri)
  }
}
