import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ProductRepository } from 'src/Model/product.repository';
import { StaticDataSource } from 'src/Model/static.datasource';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [ProductRepository, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
