import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: any;
  @Input() inputOneLabel: any;
  @Input() inputTwoLabel: any;
  @Input() inputThreeLabel: any;
  @Input() inputThreeLabelType: any;
  @Input() inputFourLabel: any;
  @Input() inputFiveLabel: any;
  constructor() {}

  readImage(e: any) {}

  ngOnInit(): void {}
}
