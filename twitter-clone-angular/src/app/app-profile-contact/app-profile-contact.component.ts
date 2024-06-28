import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './app-profile-contact.component.html',
  styleUrls: ['./app-profile-contact.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppProfileContactComponent {
  @Input() user: any = {}; // Initialize user
}
