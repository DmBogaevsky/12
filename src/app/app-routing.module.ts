import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './artist/albums/albums.component';
import { DashboardComponent } from './artist/dashboard/dashboard.component';
import { HomeComponent } from './artist/home/home.component';
import { ProfileComponent } from './artist/profile/profile.component';
import { SidebarComponent } from './artist/sidebar/sidebar.component';
import { TracksComponent } from './artist/tracks/tracks.component';

const routes: Routes = [
  {
    path: "", 
    children: [
        {
            path: "",
            component: SidebarComponent,
            outlet: "sidebar",
        },
        {
            path: "",
            component: HomeComponent
        },
        {
            path: "profile",
            component: ProfileComponent
        },
        {
          path: "dashboard",
          component: DashboardComponent
      },
        {
            path: "albums",
            component: AlbumsComponent
        },
        {
          path: "tracks",
          component: TracksComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
