import { AdressDataSection } from './../../Models/app-data-section-address.models';
import { AddressData } from './../../Models/address-data.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input () public addressData!: AdressDataSection;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();


  /*
  public endereco: string = 'Rua xxxx';

  public addressData2: AddressData = {
    street: 'Rua Luiz Galvão',
    number: 254,
    complement: '3. andar, saa 306',
    state: 'AC',
    city: 'Rio Branco',
    district: 'Conjunto Castelo Branco',
    zipCode: '69911-262'
  }
*/
  constructor() {

  }

  ngOnInit() {
    this.elementCreated.emit('address')
  }

  public getCity(): void {
   // console.log('Formulário enviado!');
    console.log(this.addressData.data.city) //usa o ng model
    }
/*
 public getCity2(): string {
 return "Santo Andre";//usa o ng model
}
*/


}
