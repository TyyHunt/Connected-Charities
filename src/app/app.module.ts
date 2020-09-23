import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
