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
        name: 'veeraiyan',
        age: 22,
        location:{
            address: 'chinthamani',
            city: 'trichy', 
            pin: 620002
        },
        time: '9.30'
    }
}