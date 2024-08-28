import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  listPeople = [
    { name: 'jorge', age: 28 },
    { name: 'Felipe', age: 26 },
    { name: 'Andreas', age: 29 },
    { name: 'Eduardo', age: 30 },
    { name: 'Rodrigo', age: 31 }
  ];

  personSelectedIndex: number | undefined;

  selectPerson(index: number) {
    console.log(index);

    this.personSelectedIndex = index
  }
}
