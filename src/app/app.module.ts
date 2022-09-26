import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactCardComponent } from './public/components/contact-card/contact-card.component';
import { EditableComponent } from './public/components/editable/editable.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactCardComponent,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
