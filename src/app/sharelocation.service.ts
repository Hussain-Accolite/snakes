import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharelocationService{
  location=[];
  private message = new BehaviorSubject<any>(this.location);
  curmessage = this.message.asObservable();
  changemsg(msg:any){
    console.log(msg)
    this.message.next(msg)
  }
  constructor() { }
  
}
