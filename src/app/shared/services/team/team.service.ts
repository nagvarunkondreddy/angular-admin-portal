import { Injectable } from '@angular/core';

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

  constructor() { }

  getTeamDetails(){
    return this.teamMemberData;
  }

  addTeamMember(data:any){
    this.teamMemberData.unshift(data);
    console.log(this.teamMemberData)
  }
}
