import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetsComponent } from './user-dets/user-dets.component';
import { ReposComponent } from './repos/repos.component';
import { FindComponent } from './find/find.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightDirective } from './highlight.directive';
import { TimepassedPipe } from './timepassed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserDetsComponent,
    ReposComponent,
    FindComponent,
    NavBarComponent,
    HighlightDirective,
    TimepassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
