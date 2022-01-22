import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: any ;
  Form = new FormGroup({
    inputOneLabel: new FormControl('',Validators.required),
    inputTwoLabel: new FormControl('',Validators.required),
    inputThreeLabel:new FormControl('',Validators.required),
 inputFourLabel: new FormControl('',Validators.required),
 inputFiveLabel: new FormControl('',Validators.required)


  });
  @Input() inputOneLabel: any;
  @Input() inputOnePlaceholder: any;
  @Input() inputTwoLabel: any;
  @Input() inputTwoPlaceholder: any;
  @Input() inputThreeLabel: any;
  @Input() inputThreeLabelType: any;
  @Input() inputFourLabel: any;
  @Input() inputFiveLabel: any;
  constructor(private ref: ChangeDetectorRef) {}
  images: any = [];

  readImage(e: any) {
    console.log(e.target.files.length);
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        var picReader = new FileReader();
        picReader.readAsDataURL(e.target.files[i]);
        picReader.onload = (events: any) => {
          this.images.push({
            image: events.target.result,
            name: e.target.files[i].name,
          });
        };
      }
    }
  }

  openImageUpload() {
    document.getElementById('pro-image')?.click();
  }

  removeImg(index1: any) {
    const newArray = this.images.filter((url: any, index: any) => {
      if (index != index1) return url;
    });
    this.images = newArray;
  }

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.Form.value)
  }
}
