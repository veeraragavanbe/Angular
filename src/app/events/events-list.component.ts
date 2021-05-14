import { Component } from "@angular/core";

@Component({
    selector:'events-list',
    template:`
        <div>
        <h1>Upcoming List</h1>
        <hr/>
        <event-thumbnail [event] = "event1"></event-thumbnail>
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