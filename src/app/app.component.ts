import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {MessagesComponent} from './messages/messages.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MessagesComponent,
    RouterOutlet
  ],
  standalone: true,
  styleUrls: ['./app.component.css']
})


export default class AppComponent {
  messages: string[] = [];
  title:string= "Moses"

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
