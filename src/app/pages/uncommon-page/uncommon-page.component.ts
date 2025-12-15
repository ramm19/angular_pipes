import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap, timeout } from 'rxjs';

const client1 = {
  name: 'Ale',
  gender: 'male',
  age: 37,
  address: 'SS EL SV',
};

const client2 = {
  name: 'Maria',
  gender: 'female',
  age: 37,
  address: 'SS EL SV',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export default class UncommonPageComponent {
  //i18n select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18n plural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Alejandro',
    'Felipe',
    'Andres',
    'Pam',
    'Jorge',
    'David',
    'Julio',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //keyvapue app

  profile = {
    name: 'Alejandro',
    age: 37,
    address: 'SS EL SV',
  };

  //async pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
      console.log('promesa finalizada');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap( (value) => console.log('tap:', value))
  );
}
