import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../model/housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  template: `
  <!-- <section class="listing" *ngFor="let housingLocation of housingLocationChild">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <div class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</div>
  </section> -->
  <section class="listing">
    <img class="listing-photo" [src]="housingLocationChild.photo" alt="Exterior photo of {{housingLocationChild.name}}">
    <h2 class="listing-heading">{{ housingLocationChild.name }}</h2>
    <div class="listing-location">{{ housingLocationChild.city}}, {{housingLocationChild.state }}</div>
    <a [routerLink]= "['/details', housingLocationChild.id]">Learn More...</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input()
  housingLocationChild!: HousingLocation;

}
