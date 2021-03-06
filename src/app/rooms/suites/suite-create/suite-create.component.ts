import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../login/authentication.service';
import { SuiteService } from '../shared/suite.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Suite } from '../shared/suite.model';

@Component({
  selector: 'app-suite-create',
  templateUrl: './suite-create.component.html',
  styleUrls: ['./suite-create.component.css']
})
export class SuiteCreateComponent implements OnInit {
  //Creates a Formgroup we call suiteGroup which we give the 3 properties below
  suiteGroup: FormGroup;
  constructor(private suiteService: SuiteService,
    private fb: FormBuilder,
    private router: Router) {
    this.suiteGroup = this.fb.group({
      price: '',
      available: '',
      name: ''
    });
  }

  ngOnInit() {
  }
  //Creates a suite by using FormGroup and then runs the suiteService.create to create a new suite with the infomation that are in our suiteGroup and then route it back to our front
  createSuite() {
    const values = this.suiteGroup.value;
    const suite: Suite = {
      price: values.price,
      available: values.available,
      name: values.name

    };
    this.suiteService.create(suite)
      .subscribe(suite => {
        this.router.navigateByUrl('/front');
      });
  }
}



