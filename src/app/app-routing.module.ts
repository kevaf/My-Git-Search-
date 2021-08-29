import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { UserDetsComponent } from './user-dets/user-dets.component';

const routes: Routes = [
  {path:"findUser", component:UserDetsComponent},
  {path:"fetchRepo", component:ReposComponent},
  {path:"", redirectTo:"findUser", pathMatch:""},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
