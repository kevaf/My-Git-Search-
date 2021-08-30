import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUserProfile:Users[]=[];
  url="https://api.github.com/users/"
  myAccessToken=`?access_token=${environment.myAccessToken}`;
 
  
  constructor( private http:HttpClient) { }


  myUserFunction(findUser:any){
    interface data{
      login:any;
      avatar_url:any;
      name: any;
      company:any;
      location:any;
      email:any;
      twitter_username:any;
      followers:any;
      following:any;
      public_repos:any;
      bio:any;
    }
    return new Promise <void>((resolve, reject) => {
      this.myUserProfile=[];
      this.http.get<data>(this.url+findUser+this.myAccessToken).toPromise().then(
        (result:any)=>{
          this.myUserProfile.push(result);
          resolve();
        },
        (error)=>{
          reject()
        })
    })
  }
}
