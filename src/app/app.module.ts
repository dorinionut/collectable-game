import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollectableListComponent } from './component/collectable-list/collectable-list.component';
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';
import { CollectionService } from './service/collection.service';

@NgModule({
  declarations: [
    AppComponent,
    CollectableListComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
