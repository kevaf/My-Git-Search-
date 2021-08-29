import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { ReposService } from '../repos.service';
import { UserService } from '../user.service';
import { Users } from '../users';

@Component({
  selector: 'app-user-dets',
  templateUrl: './user-dets.component.html',
  styleUrls: ['./user-dets.component.css']
})
export class UserDetsComponent implements OnInit {

  myUserProfile:Users[]=[];
  myRepo:Repos[]=[];

  constructor( public myUserService:UserService, public myRepoService:ReposService) { }
  findUser(findUser:any){
    this.myUserService.myUserFunction(findUser).then(
      (success)=>{this.myUserProfile=this.myUserService.myUserProfile;
        console.log(this.myUserProfile)
      },
      (error)=>{
        return error;
      });
      this.myRepoService.myRepoFunction(findUser).subscribe(
        (success:any)=>{
          this.myRepo=success;
          return (this.myRepo);
        }
      )
     
  }
  ngOnInit(): void {
    this.findUser("kevaf")
  }

}
