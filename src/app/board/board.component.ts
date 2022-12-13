import { Component, OnInit } from '@angular/core';
import { SharelocationService } from '../sharelocation.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  ele1 = document.getElementById("p1");
  ele2 = document.getElementById("p2");
  loc = [];
  loc1 = 0;
  win = "";
  loc2 = 0;
  x=0;
  elex = document.getElementById("");
  eley = document.getElementById("");
  brd = [1];
  Sizes = [1,2,3,4,5];
  t = false;
  
  // boardq(){
  //   for(let i=1;i<25;i++){
  //     this.brd.push(i+1);
  //   }
  //   console.log(this.brd);
  //   this.t = true
  // }
  // tf(){
  //   return this.t;
  // }

  constructor(private rlocation:SharelocationService){
    this.changeclour()
  }
  ngOnInit(): void {
    this.rlocation.curmessage.subscribe(msg=>this.loc=msg)
   
  }

  changeclour(){
    if(this.loc[0]=="p1"){

      if(this.elex!=null){
        this.elex.style.backgroundColor="white"
      }
      this.ele1 = document.getElementById("p"+this.loc[1]);
      if(this.ele1!=null)
        this.ele1.style.backgroundColor="green"
      console.log("p1")
      this.elex = this.ele1;
      if(this.loc[1]==25){
        this.win = "player 1 wins"
      }

    }
    else{
      if(this.eley!=null){
        this.eley.style.backgroundColor="white"
      }
      this.ele2 = document.getElementById("p"+this.loc[1])
      if(this.ele2!=null)
        this.ele2.style.backgroundColor="yellow"
      console.log("p2")
      this.eley = this.ele2
      if(this.loc[1]==25){
        this.win = "player 2 wins"
      }
    }
    

  }
  func(){
    this.changeclour()
    return true
  }



}
