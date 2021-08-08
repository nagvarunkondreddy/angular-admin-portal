import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { State } from '../shared/reducers/current-router.reducer';
import * as currentRouteSelector from '../shared/selector/current-router.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  routeDetails: any;
  activeElement: any;
  constructor(private router: Router, private store: Store<State>) {
    this.store
      .pipe(select(currentRouteSelector.getCurrentRoute))
      .subscribe((element) => {
        this.removeActiveRouter();
        if (element.name === 'text-editor') {
          this.activeElement = document.getElementById('articles');
        } else {
          this.activeElement = document.getElementById(element.name);
        }

        if (this.activeElement != null) {
          this.activeElement.style.color = 'rgba(255,255,255)';
          this.activeElement.style.fontWeight = '600';
        }
      });
  }

  ngOnInit(): void {}

  removeActiveRouter(): void {
    var tabs = ['projects', 'events', 'articles', 'team', 'recruitment'];
    for (var i = 0; i < tabs.length; i++) {
      var element = document.getElementById(tabs[i]);
      if (element) {
        element.style.color = 'rgba(255,255,255,.55)';
        element.style.fontWeight = '0';
      }
    }
  }
}
