import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { TvShow } from '../models/tv-show.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.scss']
})
export class CreateEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TvShow
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.data);
  }
}
