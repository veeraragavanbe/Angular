import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { EventsListcomponent} from './events/events-list.component';
import { EventThumbnailComponent} from './events/events-thumbnails.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { CreateEventComponent} from './events/create-event.component';
import { Error404Component } from './error/404-page.component';
import { appRoute} from './routes';
import { EventRouteActivator } from './events/event-detail/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service'; 


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListcomponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent)
{
  if (component.isDirty)
    return window.confirm('you have not save this event, do you really want to cancel?')
  return true
  
}
