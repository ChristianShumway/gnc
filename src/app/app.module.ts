import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SlidePrincipalComponent } from './slide-principal/slide-principal.component';
import { MenuComponent } from './menu/menu.component';
import { SlideProductosComponent } from './slide-productos/slide-productos.component';
import { VideoComponent } from './video/video.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'home', component: MenuComponent },
  { path: 'productos/:pid', component: SlideProductosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SlidePrincipalComponent,
    MenuComponent,
    SlideProductosComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
