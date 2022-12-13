import { Component, OnInit } from '@angular/core';
import { PlayerblockService } from '../playerblock.service';
import { SharelocationService } from '../sharelocation.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit{
  d=0;
  location = 0;
  cc = false;
  randgen(){
    this.d =Math.floor(Math.random()*6);
    this.d+=1;
    this.location = this.d + this.location;
    if(this.location>25){
      this.location = this.location-this.d;
    }
    this.check(this.location);
    
    this.block.changemsg(false)
    this.cc = true;
    this.sendl.changemsg(["p1",this.location])
  }
  clicked(){
    return this.cc;
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
      console.log("player 1 win");
    }

  }
  constructor(private block:PlayerblockService,private sendl:SharelocationService){}
  ngOnInit(): void {
    this.block.currentmsg.subscribe(msg=>this.cc=msg)
    console.log(this.cc)
  }

}
