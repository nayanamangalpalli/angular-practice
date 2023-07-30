import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../model/housinglocation';
import { HousingService } from '../services/housing.service';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-housing-location-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>

    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label>First Name</label>
          <input type="text" id="first-name" formControlName="firstName">

          <label>Last Name</label>
          <input type="text" formControlName="lastName">

          <label>Email</label>
          <input type="text" formControlName="email">

          <button type="submit" class="primary">Apply Now!</button>
      </form>
    </section>

  </article>
`,
  styleUrls: ['./housing-location-details.component.css']
})
export class HousingLocationDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = -1;
  housingLocation: HousingLocation | undefined;
  housingService: HousingService = inject(HousingService);

  applyForm = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
  
  constructor() { 
    console.log('params', this.route.snapshot.params);
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationByID(this.housingLocationId).then(
      (housingLocation) => this.housingLocation = housingLocation
    );
  }

  submitApplication() {
    console.log('inside submit application')
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
