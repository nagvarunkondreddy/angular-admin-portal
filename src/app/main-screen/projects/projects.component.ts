import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isDataAvailable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkData(data:boolean){
    console.log(data)
    // this.isDataAvailable=data;
    // console.log(this.isDataAvailable)

  }

}
