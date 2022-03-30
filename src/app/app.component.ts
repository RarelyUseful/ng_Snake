import { Component } from '@angular/core';

// class Player {
//   name: string;
//   email: string;

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Snake';

  //public playerReady: boolean = true; // false unless debugging
  //public playerName: string = '';
}

/*
Jak zmienić / zresetować prędkość węża?


*/
