import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitments',
  templateUrl: './recruitments.component.html',
  styleUrls: ['./recruitments.component.css']
})
export class RecruitmentsComponent implements OnInit {
  recruitmentTableHeadings = [
    'Name',
    'Date',
    'Applied Domains',
    'Contact Number',
    'Email ID',
  ];
  recruitmentTableData = [
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],

    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
    [
      'Applicant Name',
      '01/10/2021',
      'App Dev, Web Dev',
      '9583739283',
      'applicant@email.com',
    ],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
