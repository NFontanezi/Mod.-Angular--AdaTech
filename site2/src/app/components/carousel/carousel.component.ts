import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.elementCreated.emit('carrousel') // metodo que emite pro pai a string qdo elemnto for exibido
  }
}
