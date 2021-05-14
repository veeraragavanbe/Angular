import { Component } from "@angular/core";

@Component({
    selector:'events-list',
    template:`
        <div>
        <h1>Upcoming Angular 2 Event</h1>
        <hr/>
        <event-thumbnail 
        (eventClick)="handleEventClicked($event)" 
        [event] = "event1">
        </event-thumbnail>
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

    handleEventClicked(data)
    {
        alert('received' + data);
    }
}   