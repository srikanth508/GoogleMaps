import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { MobileMapsComponent } from './mobile-maps/mobile-maps.component';


const routes: Routes = [
  { path: '', redirectTo: '/Maps', pathMatch: 'full' },
  { path: 'Maps', component: MapsComponent },
  { path: 'Maps/:id/:date', component: MapsComponent },
  { path: 'MobileMaps/:userid/:orderid', component: MobileMapsComponent },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
