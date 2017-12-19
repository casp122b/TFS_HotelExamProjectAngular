import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SuiteService } from '../shared/suite.service';
import { Suite } from '../shared/suite.model';

@Component({
  selector: 'app-suite-detail',
  templateUrl: './suite-detail.component.html',
  styleUrls: ['./suite-detail.component.css']
})
export class SuiteDetailComponent implements OnInit {

    suiteId: number;
    newSuiteGroup: FormGroup;
    constructor(private suiteService: SuiteService,
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute) {
      this.newSuiteGroup = this.fb.group({
        price: '',
        available: '',
        name: ''
      });
    }
  //The params of the route is taken and used to find the corresponding suite. suite.id is grabbed,and put into local variables for later use.
    ngOnInit() {
      this.route.paramMap
        .switchMap(params =>
          this.suiteService.getById(+params.get('id'))
        ).subscribe(suite => this.suiteId = suite.id);
    }
//Edits the choosen suite's properties values with FormGroup and then runs the suiteService.update to update the currentsuite with the updatedSuite and then route it back to our front
    editSuite(  ) {
      const currentSuite = this.suiteId;
      const newValues = this.newSuiteGroup.value;
      const updatedSuite: Suite = {
        id: currentSuite,
        price: newValues.price,
        available: newValues.available,
        name: newValues.name,

      };
      this.suiteService.update(currentSuite, updatedSuite)
        .subscribe(suite => {
          this.newSuiteGroup.reset();
          this.router.navigateByUrl("/front")
        });
    }
}
