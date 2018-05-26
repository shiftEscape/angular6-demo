import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  locations: Array<String> = [];
  selectedLocation: String = '';

  constructor(private listService: ListService) {
    this.listService.getList().subscribe(data => {
      const listHasData = data.filter(x => x.data.length > 0);
      this.locations = this.extractLocations(listHasData);
    });
  }

  extractLocations(list) {
    return list.map(row => row.location);
  }
}
