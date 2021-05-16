import { templateJitUrl } from "@angular/compiler";
import { summaryForJitFileName } from "@angular/compiler/src/aot/util";
import { Component, Input} from "@angular/core";

@Component ({
    selector: 'event-thumbnail',    
    template: `  <div [routerLink]="['/events', event.id]" class="well thumbnail">
            
                 <h2>{{event?.name}}</h2>
                 <div>Id: {{event?.id}}</div>
                 <div >Date: {{event?.date}}</div>
                 <div [ngStyle]="{'color': event?.time === '8.00 am' ? 'bold' : 'normal'}" [ngSwitch] = "event?.time">
                    Time: {{event?.time}}
                    <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                 </div>
                 <div>Price: \${{event?.price}}</div>
                 <div [hidden] = "!event?.location"  >
                      <span>Location:{{event?.location?.address}}</span>
                 <span class="pad-lef">{{event?.location?.city}},{{event?.location?.pin}}</span>
                </div>
                 <div [hidden] = "!event?.OnlineUrl">
                     Online Url: {{ event.OnlineUrl}}
                </div>
                 
                 </div>
                 `,
                 styles:[`
                 .pad-lef{margin-left: 5px;}
                 .green {color: #003300;}
                 .well div{color: #bbb;}
                 .thumbnail{min-height: 230px;}
                 
                 .bold {font-weight: bold;}
                 `]
})
export class EventThumbnailComponent
{
    @Input() event:any     
}



    // event handling or binding
    // <button class="btn btn-primary" (click)="handleClick()">ClickMe</button> 
    // @Output() eventClick = new EventEmitter

    // handleClick()
    // {
    //     this.eventClick.emit(this.event.name) 
    // }

    //thumbnail variable (template var)

    // logfoo()
    // {
    //     console.log('foo this is veer')
    // }

    //2
    // someProperty:any = "thumbnail 2"


    // used to hide the value if it not present in data arrary or object

    // *ngIf="event?.location"   ==== if the location not present in the array it just hide that element
    
    //  ? before event helps to run code without error. if the data not binded or present in array
    // another way to hidding
    // <div [hidden] = "!event?.location">

    
    // styling element using function
    // getStartClass()
    // {
    //     if(this.event && this.event.time === '8.00 am')
    //         return 'green bold'
    //     return '' 
        
    // }