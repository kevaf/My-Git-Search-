import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor() { }
  findUser:any;
  

  @Output()
  findEmitter=new EventEmitter<any>();
  findFunction(){
    this.findEmitter.emit(this.findUser);
  }


  ngOnInit(): void {
  }

}
