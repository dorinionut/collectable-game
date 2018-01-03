import { Component } from '@angular/core';

import { CollectionService } from './service/collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private collectionService: CollectionService
  ) {}

  reset() {
    this.collectionService.reset();
  }
}
