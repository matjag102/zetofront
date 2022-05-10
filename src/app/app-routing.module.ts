import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DodajSaleComponent } from './admin/dodaj-sale/dodaj-sale.component';
import { GlownaComponent } from './glowna/glowna.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { ProfilComponent } from './profil/profil.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { UzytkownikDashboardComponent } from './uzytkownik/uzytkownik-dashboard/uzytkownik-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

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
    path: 'rezerwacja',
    component: RezerwacjaComponent
  },
  
  
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component: WelcomeComponent,
      },
      {
        path:'profil',
        component: ProfilComponent,
      },
      {
        path:'dodaj-sale',
        component: DodajSaleComponent,
      }
    ]
  },
  {
    path: 'uzytkownik-dashboard',
    component: UzytkownikDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'',
        component: WelcomeComponent,
      },
      {
        path:'profil',
        component: ProfilComponent,
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
