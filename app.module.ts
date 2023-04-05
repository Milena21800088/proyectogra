
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { LinkprojectsComponent } from './modules/home/linkprojects/linkprojects.component';

@NgModule({
  declarations: [

    AppComponent,
     HeaderComponent,
     AsideComponent,
     LinkprojectsComponent,
     
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

