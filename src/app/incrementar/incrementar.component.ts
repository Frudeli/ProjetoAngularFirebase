import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styleUrls: ['./incrementar.component.scss'],
})
export class IncrementarComponent {

  valor: number = 0;
  constructor() { }

  decrement() {
    if (this.valor > 0)
      this.valor--;

    // this.valor = this.valor - 1;
    // this.valor -=;
    // this.valor--;
    // --this.valor;
  }

  increment() {
    this.valor++;

    
  }




}
