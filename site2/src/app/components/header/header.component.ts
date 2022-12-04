import { SearchData } from '../../Models/search-data.models';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  @Output() public sendSearch: EventEmitter<SearchData> = new EventEmitter<SearchData>();

  public searchData: SearchData ={
    field: ""
  }


  ngOnInit() {
    this.elementCreated.emit('header') // metodo que emite pro pai a string qdo elemnto for exibido
  }


  public sendSearchField () : void {
    this.sendSearch.emit(this.searchData)

  }
}


