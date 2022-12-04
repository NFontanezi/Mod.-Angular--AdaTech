import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactFormData } from 'src/app/Models/form-data.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit {

 @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>(); //sempre é evento de filho para pai

  public btnDisabled = true;

  public formData: ContactFormData = { // tipar via model por boa pratica
    email: "teste@teste.com.br",                //preciso de uma propriedade para se comunicar com o ng model
    message: "digite seu texto aqui" //ja abre com a mensagem
  }

  constructor() { }

ngOnInit() {
setTimeout(() => {
  this.btnDisabled = false;
}, 5000);
}

  public submitForm(): void {
 // console.log('Formulário enviado!');
 // console.log(this.formData) //usa o ng model
  this.sendForm.emit(this.formData); //emite de volta o formulario ao pai
  }

  public showInputData(event: any): void {
  console.log(event.target.value)
  }

}

