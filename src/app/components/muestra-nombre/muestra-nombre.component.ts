import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit { // rol de este componnete en este caso es componente hijo de un componente padre que es componente pagian




  /* recibir arg desde componente padre mediante un input
   * ! confiame siempre vamos a tenber un valor
   *  con esta implementacion va ser conocido por ciclo de vida de angular asi el hook (ngOnchange) se va a disparar
   *  asi gracias al ngOnChanges me va identificar que valor ha tenido input antes y despues
   */
  @Input() nombre!: string;

  constructor() { }

  ngOnInit(): void {
  }


  /* unico hook que reciba arg
   * No se dispra al momento de instancia : al momento de construccion del componente
   * Se refiere en doc a input de un componente padre hacia hijo (No input html en template del mismo componente)
   * se trata inputs hacia el componente , que vengan desde a fuera , desde un componente padre
  */
  ngOnChanges(changes: SimpleChanges ): void {
    console.log(changes)
  }

}
