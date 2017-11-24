import { Component, OnInit } from '@angular/core';
import {Suite} from '../shared/suite.model';
import {SuiteService} from '../shared/suite.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-suite-list',
  templateUrl: './suite-list.component.html',
  styleUrls: ['./suite-list.component.css']
})

export class SuiteListComponent implements OnInit {
  suite: Suite[];
  suiteToDelete: Suite;
  constructor(private suiteService: SuiteService,
              private router: Router) {
  }

  ngOnInit() {
    // Ask for a bunch of code to execute
    this.suiteService.get()
    // Executing and explaning when done let me know
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
    console.log('delete Clicked');
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
