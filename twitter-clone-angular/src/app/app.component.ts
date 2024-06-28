import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppProfileContactComponent } from './app-profile-contact/app-profile-contact.component';
import { AppPostCardComponent } from './app-post-card/app-post-card.component';
import { AppCommentsDisplayComponent } from './app-comments-display/app-comments-display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    AppNavComponent,
    AppProfileContactComponent,
    AppPostCardComponent,
    AppCommentsDisplayComponent
  ]
})
export class AppComponent implements OnInit {
  usersArray: any[] = [];
  postsArray: any[] = [];
  commentsArray: any[] = [];
  selectedUser: any;
  userPosts: any[] = [];
  userComments: any[] = [];

  async ngOnInit() {
    await this.usersAPI();
    await this.postsAPI();
    await this.commentsAPI();
  }

  async usersAPI() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      this.usersArray = await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async commentsAPI() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
      this.commentsArray = await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async postsAPI() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      this.postsArray = await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  onUserChange(event: any) {
    const selectedUserName = event.target.value;
    this.selectedUser = this.usersArray.find(user => user.name === selectedUserName);
    this.userPosts = this.postsArray.filter(post => post.userId === this.selectedUser.id);
    this.userComments = this.commentsArray.filter(comment => comment.postId === this.selectedUser.id);
  }
}
