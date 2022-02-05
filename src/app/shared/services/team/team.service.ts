import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../models/team.model';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamMemberData : any = [
    ['../../../assets/images/person-img.jpg', 'Person 1', 'Team Lead', 'Hardware', '9098789098', '2019'], 
    ['../../../assets/images/person-img.jpg', 'Person 2', 'Tech Lead', 'Web Dev', '9098789098', '2019'],
    ['../../../assets/images/person-img.jpg', 'Person 3', 'Tech Lead', 'Hardware', '9098789098', '2019'], 
    ['../../../assets/images/person-img.jpg', 'Person 4', 'Tech Lead', 'App Dev', '9098789098', '2019'],
    ['../../../assets/images/person-img.jpg', 'Person 5', 'Tech Lead', 'Web Dev', '9098789098', '2019'],
    ['../../../assets/images/person-img.jpg', 'Person 6', 'Tech Lead', 'Web Dev', '9098789098', '2019'],
    ['../../../assets/images/person-img.jpg', 'Person 7', 'Tech Lead', 'Web Dev', '9098789098', '2019'],
    ['../../../assets/images/person-img.jpg', 'Person 8', 'Tech Lead', 'Web Dev', '9098789098', '2019'],
    ['../../../assets/images/person-img.jpg', 'Person 9', 'Tech Lead', 'Web Dev', '9098789098', '2019'],
    ['../../../assets/images/person-img.jpg', 'Person 10', 'Tech Lead', 'Web Dev', '9098789098', '2019'],
  ]

  constructor(private http:HttpClient) { }

  getTeamDetails(): Observable<Team[]>{
    return this.http.get<Team[]>(`${AppConfig.TEAM_URL}`);
  }

  addTeamMember(data:any){
    this.teamMemberData.unshift(data);
    console.log(this.teamMemberData)
  }
}
