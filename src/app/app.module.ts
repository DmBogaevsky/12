import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './artist/albums/albums.component';
import { DashboardComponent } from './artist/dashboard/dashboard.component';
import { SidebarComponent } from './artist/sidebar/sidebar.component';
import { ProfileComponent } from './artist/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutSidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './artist/home/home.component';
import { TracksComponent } from './artist/tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    HeaderComponent,
    LayoutSidebarComponent,
    HomeComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
