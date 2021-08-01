import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css'],
})
export class HeadingComponent implements OnInit {
  @Input() heading1: any;
  @Input() addButtonText: any;
  @Input() addButtonDisplay: boolean = false;
  @Input() modalType: any;
  constructor() {}

  ngOnInit(): void {}
}
