import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationComponent } from './identification/identification.component';
import { HomeComponent } from './home/home.component';
import { ViewGiftComponent } from './view-gift/view-gift.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ident', component: IdentificationComponent },
  { path: 'discover', component: ViewGiftComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
