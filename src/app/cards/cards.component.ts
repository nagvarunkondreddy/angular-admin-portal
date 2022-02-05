import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../shared/services/event/event.service';
import { ProjectService } from '../shared/services/project/project.service';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardContent: any;
  @Input() cardImageLocation: any;
  @Input() cardTitle: any;
  constructor(private spinnerService: SpinnerService, private projectService: ProjectService, private eventService : EventService) {


  }

  ngOnInit(): void { 
    if(this.cardTitle === 'Project')
     this.projectService.getProjectCardContent().subscribe((data)=>{
       this.cardContent=data;
     });

    else
     this.eventService.getEventCardContent().subscribe((data)=>{
      this.cardContent=data;
    });;

  }

  deleteCard(i:any){
    if(this.cardTitle === 'Project')
    this.projectService.deleteProject(i);
    else
    this.eventService.deleteEvent(i);
  }

}
