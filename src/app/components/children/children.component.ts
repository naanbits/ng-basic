import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  @Input() mensaje;
  @Output() public saludaPadre = new EventEmitter();
  constructor() { 
  }

  enviarSaludo(){
    this.saludaPadre.emit('hola')
  }

  ngOnInit() {
    console.log(this.mensaje);
  }

}
