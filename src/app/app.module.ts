import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { MeowviesComponent } from './meowvies/meowvies.component';
import { MeowvieService } from './meowvie.service';
import { UserService } from './user.service';
import { MeowvieDetailComponent } from './meowvie-detail/meowvie-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    MeowviesComponent,
    MeowvieDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MeowvieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
