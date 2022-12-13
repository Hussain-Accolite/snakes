import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerblockService {
  private message = new BehaviorSubject<boolean>(false)
  currentmsg = this.message.asObservable()
  changemsg(msg:boolean){
    console.log(msg)
    this.message.next(msg)
  }
  constructor() { }
}
