import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {


  public getDestaque1(): string {
    return `
    <<<<<<<Destaque 1>>>>>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
    dolor arcu, malesuada eget posuere et.
    `
  }
  public getDestaque2(): string {
    return `
    <<<<<<<Destaque 2>>>>>
    Aenean laoreet, felis id sollicitudin fringilla, leo orci
    iaculis eros, et volutpat nunc lacus ut sapien.
    `
  }

  public getDestaque3(): string {
    return `
    <<<<<<<Destaque 3>>>>>
    Aenean non eros congue leo consectetur fermentum. Quisque ut
    dignissim tortor, eget porttitor magna.
    `
  }

  public getDestaque4(): string {
    return `
    <<<<<<<Destaque 4>>>>>
    Duis id odio dapibus, finibus tortor eget, cursus nunc. Morbi
    egestas nisl orci, in cursus ipsum cursus et.
    `
  }

}


