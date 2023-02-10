import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(/* private placesService:PlacesService */) {
    
    
    /* this.placesService.getNotes().subscribe(res =>{
      console.log(res);
      
    }) */
  }

}
