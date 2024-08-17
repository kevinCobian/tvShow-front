import { CreateEditDialogComponent } from './../../create-edit-dialog/create-edit-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { TvShowService } from '../../services/tv-show.service';
import { TvShow } from '../../models/tv-show.model';

@Component({
  selector: 'app-tv-show-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss']
})
export class TvShowListComponent implements OnInit {
  tvShows: TvShow[] = [];
  displayedColumns: string[] = ['id', 'name', 'favorite', 'actions'];

  constructor(private tvShowService: TvShowService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows(): void {
    this.tvShowService.getAll().subscribe(data => {
      this.tvShows = data;
    });
  }

  deleteTvShow(id: number): void {
    this.tvShowService.delete(id).subscribe(() => {
      this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateEditDialogComponent, {
      width: '400px',
      data: { name: '', favorite: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tvShowService.create(result).subscribe(() => {
          this.getTvShows(); // Refresh the list after adding
        });
      }
    });
  }

  openEditDialog(tvShow: TvShow): void {
    const dialogRef = this.dialog.open(CreateEditDialogComponent, {
      width: '400px',
      data: { ...tvShow }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tvShowService.update(tvShow.id, result).subscribe(() => {
          this.getTvShows(); // Refresh the list after editing
        });
      }
    });
  }
}
