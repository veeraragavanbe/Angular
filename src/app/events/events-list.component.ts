import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../common/toastr.service';
import { Component } from "@angular/core";
import { eventNames } from "process";
import { EventService } from "./shared/event.service";



declare let toastr 

@Component({
    // selector:'events-list',
    template:`
        <div>
        <h1>Upcoming Angular 2 Event</h1>
        <hr/>
        <div class='row'>
            <div *ngFor="let event of events" class="col-sm-5">
            <event-thumbnail (click)="handleThumnailClick(event.name)" [event] = "event">
            </event-thumbnail>
            </div>
        </div>
       
        </div>
        `
})
export class EventsListcomponent
{
    events:IEvent

    constructor(private eventservice: EventService, private toastr: ToastrService, private route:ActivatedRoute)
    {
      // this.events = this.eventservice.getEvent()
    }

    ngOnInit() {
          // this.eventservice.getEvents().subscribe(events => { this.events = events })
          this.events = this.route.snapshot.data['events']
      }

      handleThumnailClick(eventName)
      {
        this.toastr.success(eventName)
      }
}   


// event handling from child component
// (eventClick)="handleEventClicked($event)" 
// handleEventClicked(data)
// {
//     alert('received' + data);
// }

// thumbnail variable (template var)
// <button class="btn btn-primary" (click)="thumbnail.logfoo()">click here to log</button>

//2
// <h3>{{thumbnail.someProperty}}</h3>


    // event1 =  {
    //     id:1,
    //     name: 'Angular connect',
    //     date: '14/05/2021',
    //     time: '9.30',
    //     price: 150.50,
    //     location:{
    //         address: 'chinthamani',
    //         city: 'trichy', 
    //         pin: 620002
    //     }
        
    // }


  