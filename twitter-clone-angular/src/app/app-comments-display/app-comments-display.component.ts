import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments-display',
  templateUrl: './app-comments-display.component.html',
  styleUrls: ['./app-comments-display.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppCommentsDisplayComponent {
  @Input() comments: any[] = []; // Initialize comments
}
