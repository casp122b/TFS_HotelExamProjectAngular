import { Component, OnInit } from '@angular/core';
import { Suite } from '../shared/suite.model';
import { SuiteService } from '../shared/suite.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-suite-list',
  templateUrl: './suite-list.component.html',
  styleUrls: ['./suite-list.component.css']
})

export class SuiteListComponent implements OnInit {
  nghide = false;
  suite: Suite[];
  suiteToDelete: Suite;
  constructor(private suiteService: SuiteService,
    private router: Router) {
  }

  ngOnInit() {
    this.suiteService.get()
      .subscribe(
      suites => {
        this.suite = suites;
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
      .subscribe(
      suite => {
        this.suite = suite;
      }
      );
    $event.stopPropagation();
  }

  createCustomer() {
    this.router
      .navigateByUrl('/suite/create');
  }


}
