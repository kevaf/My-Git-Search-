import { Injectable } from '@angular/core';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  myRepo:Repos[]=[];
  url="https://api.github.com/users/"
  myAccessToken=`?access_token=${environment.myAccessToken}`;

  constructor(private http: HttpClient) { }
  myRepoFunction(findUser:any):Observable <any>{
    return this.http.get(this.url+findUser+'/repos'+this.myAccessToken)
  }

}
