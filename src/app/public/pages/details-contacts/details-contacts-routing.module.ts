import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsContactsComponent } from './details-contacts.component';

const routes: Routes = [{ path: '', component: DetailsContactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsContactsRoutingModule { }
