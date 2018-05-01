import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { MeowviesComponent } from './meowvies/meowvies.component';
import { MeowvieService } from './meowvie.service';
import { MeowvieDetailComponent } from './meowvie-detail/meowvie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MeowviesComponent,
    MeowvieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MeowvieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
