import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Collectable } from '../model/collectable.model';
import { COLLECTABLES } from '../data/collectables';

@Injectable()
export class CollectionService {
  private bonus: 0;
  private collection: Subject<any> = new Subject();
  private collectedItems = {};
  private score: number;

  constructor() {
    this.bonus = 0;
    this.collectedItems = [];
    this.score = 0;
  }

  add(item: Collectable) {
    this.collectedItems[item.id] = (this.collectedItems[item.id]) ? this.collectedItems[item.id] + 1 : 1;

    this.update();
  }

  get(): Observable<any> {
    return this.collection.asObservable();
  }

  reset(){
    this.collectedItems = [];
    this.update();
  }

  update() {
    this.bonus = 0;
    this.score = 0;
    let collectionResult = [];

    for(let id in this.collectedItems) {

      let item = COLLECTABLES.find(c => c.id == id);

      let itemBonus = (item.bonusForEvery > 0) ? Math.floor(this.collectedItems[id] / item.bonusForEvery) * item.bonusValue : 0;
      let itemScore = item.value * this.collectedItems[id] + itemBonus;

      collectionResult.push({
        id: item.id,
        quantity: this.collectedItems[id],
        score: itemScore
      });

      collectionResult = collectionResult.sort((a,b) => (a.id > b.id) ? 1 : -1);

      this.bonus += itemBonus;
      this.score += itemScore;
    }

    this.collection.next({
      bonus: this.bonus,
      items: collectionResult,
      score: this.score
    });
  }
}
