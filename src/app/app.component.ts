import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {MessagesComponent} from './messages/messages.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeroesComponent,
    MessagesComponent
  ],
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
