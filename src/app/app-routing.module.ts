import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'users', component: UserProfileComponent },
  { path: '**', redirectTo: 'users' },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
