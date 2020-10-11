import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ItemComponent } from './item/item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ItemCreateComponent } from './item/item-create/item-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    ItemComponent,
    ItemCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
