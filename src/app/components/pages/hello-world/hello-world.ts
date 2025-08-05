import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [],
  templateUrl: './hello-world.html',
})
export class HelloWorld {
  propsInAngular = "Props in angular";

  // https://v17.angular.io/guide/event-binding
  submit() {
    alert("Kappa pride");
  }

  mostrarTitulo = false;
}
