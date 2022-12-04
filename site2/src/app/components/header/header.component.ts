import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.elementCreated.emit('header') // metodo que emite pro pai a string qdo elemnto for exibido
  }
}


