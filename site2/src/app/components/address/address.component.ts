import { AddressData } from './../../Models/address-data.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public addressData: AddressData = {
    street: 'Rua Luiz Galvão',
    number: 254,
    complement: '3. andar, saa 306',
    state: 'AC',
    city: 'Rio Branco',
    district: 'Conjunto Castelo Branco',
    zipCode: '69911-262'
  }

  constructor() {

  }

  ngOnInit () {

  }

}
