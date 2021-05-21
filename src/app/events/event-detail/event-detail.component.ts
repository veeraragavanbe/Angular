import { Component } from "@angular/core";
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared/event.model";
import { SessionListComponent } from "./session-list.component";
@Component({
    templateUrl: './event-detail.component.html',
    styles:[`
        .container{padding-left:20px; padding-right:20px;}
        .event-img{height:100px;}
        a{cursor:pointer;}
        `
    ]
})
export class EventDetailComponent
{
    event:IEvent
    addMode:boolean
    constructor(private eventservice:EventService, 
        private route:ActivatedRoute)
    {}


    ngOnInit() {
        this.event = this.eventservice.getEvent(+this.route.snapshot.params['id'])
    }

    addSession()
    {
        this.addMode = true
    }
    
}