import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  showLoading:boolean = false;

  constructor(private spinnerService: SpinnerService) { 
    this.init();
  }

  ngOnInit(): void {
  }
  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      this.showLoading = status;
      console.log(status);

    })
  }

}
