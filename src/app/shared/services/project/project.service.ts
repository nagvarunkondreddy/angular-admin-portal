import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { Team } from '../../models/team.model';
import { AppConfig } from '../config/app.config';

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

  constructor(private http:HttpClient) {
   }

   getProjectCardContent():Observable<Project[]>{
     return this.http.get<Project[]>(`${AppConfig.PROJECT_URL}`);
   }

   addNewProjectContent(data:any){
     this.projectCardContent.unshift(data);
     console.log(this.projectCardContent);

   }

   deleteProject(index : any){
     this.projectCardContent.splice(index,1);
   }
}
