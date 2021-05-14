import { Component } from "@angular/core";

@Component({
    selector:'events-list',
    template:`
        <div>
        <h1>Upcoming Angular 2 Event</h1>
        <hr/>
        <event-thumbnail #thumbnail [event] = "event1">
        </event-thumbnail>
        <button class="btn btn-primary" (click)="thumbnail.logfoo()">click here to log</button>
        </div>
        `
})
export class EventsListcomponent
{
    event1 =  {
        id:1,
        name: 'Angular connect',
        date: '14/05/2021',
        time: '9.30',
        price: 150.50,
        location:{
            address: 'chinthamani',
            city: 'trichy', 
            pin: 620002
        }
        
    }


}   


// event handling from child component
// (eventClick)="handleEventClicked($event)" 
// handleEventClicked(data)
// {
//     alert('received' + data);
// }