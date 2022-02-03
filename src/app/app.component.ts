import { NoopAnimationPlayer } from '@angular/animations';
import { Component } from '@angular/core';

class Player {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Snake';

  public playerReady = false; // false unless debugging
  public playerName = '';
}

/*
Małe podsumowanie spotkania:
-do samego typowania przedewszystkim interfejsy (określania jakiego typu dane będą w obiekcie)
-nic sie nie stanie jak użyjecie klasy do typowania obiektu ale klasy to bym zostawił dla obiektów z logiką
-zadanie projektowe: przełączanie pomiędzy stronami za pomocą dyrektywy strukturalnej
-termin zaliczenia: idealnie do końca semestru (na ostatni zjazd)



🙏 use ngModel to build form with validators
🙏 form should be user friendly: display errors and block buttons
🙏 components communication (inputs, outputs): pass collected data between pages/components
🚀 register user interactions and their timing (or any other data than can be use as list)
🚀 display list - filterable and sortable (pipes)

*/
