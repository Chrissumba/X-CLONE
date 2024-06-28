import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  templateUrl: './app-post-card.component.html',
  styleUrls: ['./app-post-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppPostCardComponent {
  @Input() user: any = {}; // Initialize user
  @Input() post: any = {}; // Initialize post
}
