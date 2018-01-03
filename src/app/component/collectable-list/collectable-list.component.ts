import { Component, OnInit } from '@angular/core';

import { Collectable } from '../../model/collectable.model';
import { CollectionService } from '../../service/collection.service';

import { COLLECTABLES } from '../../data/collectables';

@Component({
  selector: 'app-collectable-list',
  templateUrl: 'collectable-list.component.html',
  styleUrls: ['collectable-list.component.less']
})
export class CollectableListComponent implements OnInit {
  private collectables = COLLECTABLES;

  constructor(
    private collectionService: CollectionService
  ) {  }

  add(item: Collectable) {
    this.collectionService.add(item);
  }

  ngOnInit() {}
}
