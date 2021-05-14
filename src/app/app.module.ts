import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListcomponent} from './events/events-list.component';
import { EventThumbnailComponent} from './events/events-thumbnails.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListcomponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
