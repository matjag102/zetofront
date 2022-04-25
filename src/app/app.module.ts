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
    WelcomeComponent
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
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }