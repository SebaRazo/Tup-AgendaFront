import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./public/pages/login/login.module').then(m => m.LoginModule) }, { path: 'details-contacts', loadChildren: () => import('./public/pages/details-contacts/details-contacts.module').then(m => m.DetailsContactsModule) }, { path: 'contacts', loadChildren: () => import('./public/pages/contacts/contacts.module').then(m => m.ContactsModule) }, { path: 'registro', loadChildren: () => import('./public/pages/registro/registro.module').then(m => m.RegistroModule) }, { path: 'add-contact', loadChildren: () => import('./public/pages/add-contact/add-contact.module').then(m => m.AddContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
