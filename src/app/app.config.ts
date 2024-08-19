import { CommonModule, NgForOf } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TvShowHomeComponent } from './components/tv-show-home/tv-show-home.component';

const routes: Routes = [
  { path: '', component: TvShowListComponent },
  { path: 'tv-shows', component: TvShowHomeComponent }
];

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes), provideAnimationsAsync()
  ],
  declarations: [
    AppComponent,
    TvShowListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgForOf,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ]
};
