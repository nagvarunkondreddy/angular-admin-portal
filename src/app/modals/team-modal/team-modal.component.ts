import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamService } from 'src/app/shared/services/team/team.service';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['../modal-1/modal.component.css'],
})
export class TeamModalComponent implements OnInit {
  memberForm = new FormGroup({
    name: new FormControl('',Validators.required),
    domain: new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    joined: new FormControl('',Validators.required),
    profile: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),


  })
  constructor(private teamService : TeamService) {}

  ngOnInit(): void {}

  addMemberDetails(){
  const  dateParts  = this.memberForm.value.joined.split("-");
    const year = dateParts[0];
    const data=['../../../assets/images/person-img.jpg'];
    data.push(this.memberForm.value.name);
    data.push(this.memberForm.value.role);
    data.push(this.memberForm.value.domain);
    data.push(this.memberForm.value.number);
    data.push(year);
    this.teamService.addTeamMember(data);
  }
}
