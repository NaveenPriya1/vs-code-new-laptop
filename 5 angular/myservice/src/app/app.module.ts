import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './ChangeColorDirective';
import { HighLightDirective } from './HighlightDirectives';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicedemoComponent,
    ChangeColorDirective,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
