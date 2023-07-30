import { Injectable } from '@angular/core';
import { HousingLocation } from '../model/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl: string = 'https://angular.io/assets/images/tutorials/faa';
  readonly jsonServerUrl: string ="http://localhost:3000/locations";

  housingLocationList: HousingLocation[] = [];

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    let data =  await fetch(this.jsonServerUrl);
    return await data.json() ?? [];
  }

  async getHousingLocationByID(id: number): Promise<HousingLocation | undefined> {

    const data = await fetch(this.jsonServerUrl + '/' + id);
    return data.json() ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string, ) {
    console.log(`Application is submitted firstName: ${firstName}, lastName: ${lastName}, email: ${email}`)
  }
}

