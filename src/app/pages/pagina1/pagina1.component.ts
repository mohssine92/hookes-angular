import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, OnInit  } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component // teclado ctrl+. (opcions) implementar todas la sinterfaces nom implmentadas
  implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
   // de echo las implementacion viene de angular core (hooks de ciclo de vida de un componnet de angular)

   nombre: string = 'Fernando';
   segundos: number = 0;

   /* subscribe a una observable regresa un subscription
    * asi parea almacenar regreso de subscript debe implementar el tipo asi este tipo me ofrece ciertos metodos que puedo hacer
     como el caso este es de limpiar
   */
   timerSubscription!: Subscription;



  /* En el consructor hacemos Injeccionde de dependencias , servicos:providers que ese componente necesita
   * o si occupamos algun inicializacion antes de que el html sea construido
   *
  */
  constructor() {
    console.log('Construcctor')

  }

  /* unico hook que reciba arg
   * No se dispra al momento de instancia : al momento de construccion del componente
   * Se refiere en doc a input de un componente padre hacia hijo (No input html en template del mismo componente)
   * se trata inputs hacia el componente , que vengan desde a fuera , desde un componente padre
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }



  /* se ejecuata antess de los cambios , cuando disparo una funcion de este componente (click butoton)
   * se dispara tambien por deteccion de ciclo de de vida de angular como es el caso de input cuando hago click y salgo siempre que el input html este asociado
     a mi componente
   *
   */
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }


  /* hablo de cambios que podra hacer una funcion disparada por un event click etc
   * cuando ya se hace los cambios y se verifica
   * se dispara tambien por deteccion de ciclo de de vida de angular como es el caso de input cuando hago click y salgo siempre que el input html este asociado
     a mi componente
  */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }



  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }



  /* tambie se dispara al dispara accion ...
   * se dispar despuess dse NgDoCheck
   * se dispara tambien por deteccion de ciclo de de vida de angular como es el caso de input cuando hago click y salgo siempre que el input html este asociado
     a mi componente
  */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }


  /* No se dispra al momento de instancia : al momento de construccion del componente
   * se ejecuta imediatamente cuando el componente va ser destruido por angular
   * es lugar muy util para hacer limpieza de Observables (dejear de emitir valores) , limpieza , purgar informacion
   * destruido refiero a : cuando se occulta este componente por cualquier factor , redericc , if etc ..
  */
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    /* tenemos que ser concientes si dejemaos Observables que son bastantes ruidosos como interval o bien como alguna conexion con fairebae o trabajo mediante sockets
     * es algo que tenemos que estar oendientes de limpiar la subscription
    */
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }



  /* ngOnit es un metodo Hook : podemos decire cuando se suceda algo estamos disparando este metodo de forma automatica
   * un hook es algo que nos permite a nosotros ejecutar funcion o metodo cuando algo sucede en el ciclo de vida de un componente de angular
   * cuando componente sea utulizado - se va dispara constructor y uego ngOnit
   * ngOnit cuando ya el componente esta inicializado y nosotros ya tenemos acceso a html : aqui podemos hacer peticiones _http traer informacion de srevios etc ...
    y llenar props de amnera segura en nuestro componente (especialmente si estas peticiones son asyncronas)
    ** ngOnit gracias se dispara una vez imenediatamente se construye el componente : pues es lugar perfecto para iniciar una Observable que va emitiendo valores
    o escuchando eventos etc , o subscribirme a una obsdervable alojada en un servico que haga cierta peticion http **
   *
  */
  ngOnInit(): void {
    console.log('NgOnit')


    this.timerSubscription = interval(1000).subscribe( i => {

      this.segundos = i;

    })

  }

  guardar(){ // cuando hago click angular tiene que saber que cosas tiene que rendirizar nuevamente
   /*  esta accion de este componnetedispara 3 hookes
    *  ngDoCheck
       ngAfterContentChecked
       ngAfterViewChecked
    *
    */
  }




} // en la realidad nosotros no creamos instancias de componnetes class : lo crea angular , segun programams
