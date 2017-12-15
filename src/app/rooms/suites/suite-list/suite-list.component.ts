import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Suite } from '../shared/suite.model';
import { SuiteService } from '../shared/suite.service';

@Component({
  selector: 'app-suite-list',
  templateUrl: './suite-list.component.html',
  styleUrls: ['./suite-list.component.css']
})

export class SuiteListComponent implements OnInit {
  suites: Suite[];
  suiteToDelete: Suite;
  role: string = localStorage.getItem('role');
  constructor(private suiteService: SuiteService,
    private router: Router) {
  }

  ngOnInit() {
    this.suiteService.get()
      .subscribe(
      suites => {
        this.suites = suites;
      }
      );
  }

  details(suite: Suite) {
    this.router
      .navigateByUrl('/suite/' + suite.id);
  }

  delete(suite: Suite, $event) {
    this.suiteToDelete = suite;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.suiteToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.suiteService.delete(this.suiteToDelete.id)
      .switchMap(suite => this.suiteService.get())
      .subscribe(suites => {
        this.suites = suites;
      }
      );
    $event.stopPropagation();
  }
}
