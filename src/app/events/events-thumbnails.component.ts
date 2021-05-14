
import { summaryForJitFileName } from "@angular/compiler/src/aot/util";
import { Component, Input } from "@angular/core";

@Component ({
    selector: 'event-thumbnail',    
    template: `  <div class="well">
                 <div>Name: {{event.name}}</div>
                 <div>Id: {{event.id}}</div>
                 <div>Age: {{event.age}}</div>
                 <div>Time: {{event.time}}</div>
                 </div>`
})
export class EventThumbnailComponent
{
    @Input() event:any 
}

