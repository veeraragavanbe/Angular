
import { summaryForJitFileName } from "@angular/compiler/src/aot/util";
import { Component, Input } from "@angular/core";

@Component ({
    selector: 'event-thumbnail',    
    template: `  <div class="well">
                 <h2>{{event.name}}</h2>
                 <div>Id: {{event.id}}</div>
                 <div>Date: {{event.date}}</div>
                 <div>Time: {{event.time}}</div>
                 <div>Price: \${{event.price}}</div>
                 <div>Location: <span>{{event.location.address}}</span>
                 <span>&nbsp;</span>
                 <span>{{event.location.city}},{{event.location.pin}}</span></div>
                 <button class="btn btn-primary" (click)="handleClick()">ClickMe</button>
                 </div>
                 `
})
export class EventThumbnailComponent
{
    @Input() event:any 

    handleClick()
    {
        alert('Hello');
    }
}

