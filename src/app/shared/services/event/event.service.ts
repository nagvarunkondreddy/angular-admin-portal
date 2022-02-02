import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventCardContent: any =[
    { "inputOneLabel": "event 1", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "event 2", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "event 3", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "event 4", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "event 5", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "event 6", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
  ]

  constructor() { }

  getEventCardContent(){
    return this.eventCardContent;
  }

  addNewEventContent(data:any){
    this.eventCardContent.unshift(data);

  }
  deleteEvent(i :any){
    this.eventCardContent.splice(i,1);
  }
}
