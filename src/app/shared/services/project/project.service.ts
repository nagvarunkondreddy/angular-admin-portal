import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectCardContent : any =[
    { "inputOneLabel": "project 1", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "project 2", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "project 3", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "project 4", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "project 5", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
    { "inputOneLabel": "project 6", "inputFiveLabel": "Some quick example text to build on the card title and make up the bulkof the card's content." },
  ]

  constructor() {
   }

   getProjectCardContent(){
     return this.projectCardContent;
   }

   addNewProjectContent(data:any){
     this.projectCardContent.unshift(data);
     console.log(this.projectCardContent);

   }

   deleteProject(index : any){
     this.projectCardContent.splice(index,1);
   }
}
