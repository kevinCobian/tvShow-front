import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports      : [ NgFor, CommonModule, RouterOutlet,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvShow';
}