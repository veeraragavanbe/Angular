import { Component } from "@angular/core";
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from "@angular/router";

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
    constructor(private eventservice:EventService, 
        private route:ActivatedRoute
        )
    {

    }
    ngOnInit() {
        this.event = this.eventservice.getEvent(+this.route.snapshot.params['id'])
    }
    
}