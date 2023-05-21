import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'People List';
  people: Persona[] = [new Persona('Sara', 'Martinez'), new Persona('Rafael', 'Martinez')];
  nameInput: string = '';
  lastNameInput: string = '';

  addPerson(){
    let person1 = new Persona(this.nameInput, this.lastNameInput);
    this.people.push(person1);
  }
}
