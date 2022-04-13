import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { GlownaComponent } from './glowna/glowna.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { UzytkownikDashboardComponent } from './uzytkownik/uzytkownik-dashboard/uzytkownik-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: GlownaComponent
  },
  {
    path: 'logowanie',
    component: LogowanieComponent
  },
  {
    path: 'rejestracja',
    component: RejestracjaComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'regulamin',
    component: RegulaminComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate:[AdminGuard],
  },
  {
    path: 'uzytkownik-dashboard',
    component: UzytkownikDashboardComponent,
    canActivate:[NormalGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
