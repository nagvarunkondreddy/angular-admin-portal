import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/services/team/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamTableHeadings = ['', 'Name', 'Role', 'Domain', 'Number', 'Member Since'];
  teamTableIndex = ['name','designation','domain','phone','year'];
  teamTableData : any;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeamData()
  }

  getTeamData(){
this.teamService.getTeamDetails().subscribe(data=>{
  this.teamTableData=data;
});
  }

}
