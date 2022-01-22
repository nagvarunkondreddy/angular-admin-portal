import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamTableHeadings = ['', 'Name', 'Role', 'Domain', 'Number', 'Member Since'];
  teamTableData = [
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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
