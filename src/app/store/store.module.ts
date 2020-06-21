import { StoreComponent } from './store.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from './../../Model/model.module'
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations : [
        StoreComponent
    ],
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ModelModule
    ],
    providers : [

    ],
    exports : [
        StoreComponent
    ]
})

export class StoreModule{}