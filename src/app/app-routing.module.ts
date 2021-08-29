import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { UserDetsComponent } from './user-dets/user-dets.component';

const routes: Routes = [
  {path:"FindUser", component:UserDetsComponent},
  {path:"FetchRepo", component:ReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
