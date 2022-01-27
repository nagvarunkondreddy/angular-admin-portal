import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  constructor() {}

  ngOnInit(): void {}

  memberDetails(){
    console.log(this.memberForm.value);
  }
}
