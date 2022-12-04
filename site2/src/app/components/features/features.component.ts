
import { FeatureDataSection } from './../../Models/app-data-section-features.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  @Input () public featureData!: FeatureDataSection;

  public image1: string = "../../../assets/images/feature1.png";
  public image2: string = "../../../assets/images/feature2.png";
  public image3: string = "../../../assets/images/feature3.png";
  public image4: string = "../../../assets/images/feature4.png";

//public image1: string = '../../../assets/images/' + this.featureData.feature1.image;
//  public image2: string = `../../../assets/images/${this.featureData.feature2.image}`;
//  public image3: string = `../../../assets/images/${this.featureData.feature3.image}`;
//  public image4: string = `../../../assets/images/${this.featureData.feature4.image}`;

 /*

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
  */

}


