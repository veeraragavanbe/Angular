import { Routes } from "@angular/router";
import { EventsListcomponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./error/404-page.component";
import { EventRouteActivator } from "./events/event-detail/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service"; 
import { CreateSession } from "./events/event-detail/create-session.component";
//export 

export const appRoute: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListcomponent, resolve: {events:EventListResolver}},
    {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path: 'createsession', component: CreateSession}


    
]   
