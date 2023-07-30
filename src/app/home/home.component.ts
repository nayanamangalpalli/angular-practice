import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../model/housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../services/housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search by cityname" #filter>
        <button class="primary" type="button" (click)="filterByHousingLocation(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredHousingLocationList"
        [housingLocationChild]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl: string = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  filteredHousingLocationList : HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingService.getAllHousingLocations()
    .then((housingLocationList) => {
      this.housingLocationList = housingLocationList;
      this.filteredHousingLocationList = housingLocationList;
    });
  }

  filterByHousingLocation(city: string) {

    if(!city) {
      this.filteredHousingLocationList = this.housingLocationList;
      return;
    }

    this.filteredHousingLocationList = this.housingLocationList
      .filter( housingLocation => 
        housingLocation.city.toLowerCase().includes(city.toLowerCase()
      ))
  }
}
