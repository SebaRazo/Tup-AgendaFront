import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsContactsRoutingModule } from './details-contacts-routing.module';
import { DetailsContactsComponent } from './details-contacts.component';


@NgModule({
  declarations: [
    DetailsContactsComponent
  ],
  imports: [
    CommonModule,
    DetailsContactsRoutingModule
  ]
})
export class DetailsContactsModule { }
