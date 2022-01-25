import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angular page';
  welcomeMessage = "Welcome to my first page!";
  isHidden=true
  showComponent() {
    this.isHidden=!this.isHidden
  }
}
