import { Component, OnInit } from '@angular/core';
import { PlayerblockService } from '../playerblock.service';
import { SharelocationService } from '../sharelocation.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit{
  x=true;
  d=0;
  location = 0;
  randgen(){
    this.d =Math.floor(Math.random()*6);
    this.d+=1;
    this.location = this.d + this.location;
    if(this.location>25){
      this.location = this.location-this.d;
    }
    this.check(this.location)
    this.dis.changemsg(false)
    this.x = true;
    this.sendl.changemsg(["p2",this.location])
  }
  checker(){
    return this.x;
  }
  check(x:number){
    if(x==10){
      this.location=1;
    }
    else if(x==17){
      this.location=7;
    }
    else if(x==23){
      this.location=15;
    }
    else if(x==25){
      console.log("player 2 wins")
    }

  }
  constructor(private dis: PlayerblockService,private sendl:SharelocationService){}
  ngOnInit(): void {
    this.dis.currentmsg.subscribe(msg=>this.x=msg)
    console.log(this.x)
    
  }

}
