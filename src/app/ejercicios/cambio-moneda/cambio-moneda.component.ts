import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambio-moneda',
  templateUrl: './cambio-moneda.component.html',
  styleUrls: ['./cambio-moneda.component.css']
})
export class CambioMonedaComponent implements OnInit {
  cambioUSD = 830;
  cambioEUR = 940;
  constructor() { }

  ngOnInit() {
  }

  calcularUSD(clp) {
    let resultado = clp / this.cambioUSD;

    if(resultado > 100) {
      let nuevoCambioUSD = this.cambioUSD + (this.cambioUSD * 0.1);
      return clp / nuevoCambioUSD;
    }
    return resultado;
  }

}
