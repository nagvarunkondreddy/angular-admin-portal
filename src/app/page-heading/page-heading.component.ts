import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../shared/reducers/current-router.reducer';
import * as currentRouteSelector from '../shared/selector/current-router.selectors';
import { Router } from '@angular/router';

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
  @Input() mobileViewButtonText: any;
  activeRoute: any;
  constructor(private store: Store<State>, private router: Router) {
    this.store
      .pipe(select(currentRouteSelector.getCurrentRoute))
      .subscribe((element) => {
        this.activeRoute = element.name;
      });
  }

  ngOnInit(): void {}

  checkRoute() {
    if (this.activeRoute === 'articles') {
      this.router.navigateByUrl('/text-editor');
    }
  }

  getClassName() {
    if (this.activeRoute === 'text-editor') {
      return 'col-lg-2 offset-lg-4 shiftButton';
    } else {
      return 'col-lg-4 offset-lg-4';
    }
  }

  getIcons() {
    if (this.activeRoute === 'text-editor') {
      return 'bi bi-cloud-upload-fill';
    } else {
      return 'bi bi-plus';
    }
  }
  getClassName1() {
    if (this.activeRoute === 'text-editor') {
      return 'col-6';
    } else {
      return 'col-8';
    }
  }

  getClassName2() {
    if (this.activeRoute === 'text-editor') {
      return 'col-3';
    } else {
      return 'col-4';
    }
  }
}
