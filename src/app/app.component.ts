import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {

  } 

  toGooglePaly() {
    window.location.href='https://play.google.com/store/apps/details?id=ru.moygorod.orsk';
  }

  toAppleStore() {
    window.location.href='https://itunes.apple.com/us/app/id1207930011?l=ru&ls=1&mt=8';
  }
}
