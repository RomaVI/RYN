import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoARComponent } from './compt/logo-ar/logo-ar.component';
import { HeaderComponent } from './compt/header/header.component';
import { BannerComponent } from './compt/banner/banner.component';
import { PerfilComponent } from './compt/perfil/perfil.component';
import { ExperienciaComponent } from './compt/experiencia/experiencia.component';
import { EstudiosComponent } from './compt/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './compt/hys/hys.component';
import { ProyectsComponent } from './compt/proyects/proyects.component';
import { FooterComponent } from './compt/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LogoARComponent,
    HeaderComponent,
    BannerComponent,
    PerfilComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HysComponent,
    ProyectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
