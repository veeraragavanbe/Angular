import { Routes } from "@angular/router";
import { EventsListcomponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";


//export 

export const appRoute: Routes = [
    {path: 'events', component: EventsListcomponent},
    {path: 'events/:id', component: EventDetailComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
    
]   
// 

// const appRoute: Routes =[
//     {
//         path: '', component: EventsListcomponent, pathMatch: 'prefix',
//         children: [
//             {path: 'events', component: EventsListcomponent},
//             {path: 'events/id', component: EventDetailComponent}
        
    
//         ]
//     }
// ]