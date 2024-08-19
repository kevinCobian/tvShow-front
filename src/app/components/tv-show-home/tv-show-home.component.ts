import { Component, OnInit } from '@angular/core';
import { TvShow } from '../../models/tv-show.model';
import { TvShowService } from '../../services/tv-show.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tv-show-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './tv-show-home.component.html',
  styleUrl: './tv-show-home.component.css'
})
export class TvShowHomeComponent implements OnInit {
  tvShows: TvShow[] = [];

  constructor(private tvShowService: TvShowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows(): void {
    this.tvShowService.getAll().subscribe(data => {
      this.tvShows = data;
    });
  }

  goToAdmin() {
    this.router.navigate(['/']);
  }
}
