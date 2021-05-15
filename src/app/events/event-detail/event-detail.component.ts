import { Component } from "@angular/core";
import { EventService } from '../shared/event.service'
@Component({
    templateUrl: './event-detail.component.html',
    styles:[`
        .container{padding-left:20px; padding-right:20px;}
        .event-img{height:100px;}
        `
    ]
})
export class EventDetailComponent
{
    event:any
    constructor(private eventservice:EventService)
    {

    }
    ngOnInit() {
        this.event = this.eventservice.getEvent(1)
    }
    
}