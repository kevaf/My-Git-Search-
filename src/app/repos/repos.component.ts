import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  myRepo:Repos[]=[]; 

  constructor( public myRepoService:ReposService) { }
  findRepo(findUser:any){
    this.myRepoService.myRepoFunction(findUser).subscribe(data=>{
        this.myRepo=data;
        console.log(this.myRepo)
        return (this.myRepo)
    })
  }
  ngOnInit(): void {
    this.findRepo("kevaf")
  }

}
