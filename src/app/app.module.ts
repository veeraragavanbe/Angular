import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { EventsListcomponent} from './events/events-list.component';
import { EventThumbnailComponent} from './events/events-thumbnails.component';
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';
import { EventDetailComponent } from './events/event-detail/event-detail.component'
import {appRoute} from './routes'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListcomponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
