import { Component, OnInit } from '@angular/core';

import { Collectable } from '../../model/collectable.model';
import { CollectionService } from '../../service/collection.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: 'scoreboard.component.html',
  styleUrls: ['scoreboard.component.less']
})
export class ScoreboardComponent implements OnInit {
  collection: any;

  constructor(
    private collectionService: CollectionService
  ) {  }

  ngOnInit() {
    this.collectionService.get().subscribe(collection => {
      this.collection = collection;
    });
  }

  reset() {
    this.collectionService.reset();
  }
}
