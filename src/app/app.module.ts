import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { GlownaOpisComponent } from './glowna-opis/glowna-opis.component';
import { CarouselModule } from './carousel/carousel.module';
import { GlownaComponent } from './glowna/glowna.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { StopkaComponent } from './stopka/stopka.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UzytkownikDashboardComponent } from './uzytkownik/uzytkownik-dashboard/uzytkownik-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilComponent } from './profil/profil.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatTableModule } from '@angular/material/table';
import { UserSidebarComponent } from './uzytkownik/user-sidebar/user-sidebar.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';
import { DodajSaleComponent } from './admin/dodaj-sale/dodaj-sale.component';
import {MatSelectModule} from '@angular/material/select';
import {FileUploadModule} from 'primeng/fileupload';
import { ManageSaleComponent } from './admin/manage-sale/manage-sale.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfilPomieszczenieComponent } from './profil-pomieszczenie/profil-pomieszczenie.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EdytujSaleComponent } from './admin/edytuj-sale/edytuj-sale.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent,
    RejestracjaComponent,
    KontaktComponent,
    RegulaminComponent,
    GlownaOpisComponent,
    GlownaComponent,
    StopkaComponent,
    AdminDashboardComponent,
    UzytkownikDashboardComponent,
    MenuComponent,
    ProfilComponent,
    SidebarComponent,
    WelcomeComponent,
    UserSidebarComponent,
    RezerwacjaComponent,
    DodajSaleComponent,
    ManageSaleComponent,
    ProfilPomieszczenieComponent,
    EdytujSaleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    FileUploadModule,
    NgxPaginationModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AccordionModule,
    CalendarModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }