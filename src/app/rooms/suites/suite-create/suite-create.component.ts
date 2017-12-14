import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SuiteService } from '../shared/suite.service';
import { Router } from '@angular/router';
import { Suite } from '../shared/suite.model';

@Component({
  selector: 'app-suite-create',
  templateUrl: './suite-create.component.html',
  styleUrls: ['./suite-create.component.css']
})
export class SuiteCreateComponent implements OnInit {

  suiteGroup: FormGroup;
  constructor(private suiteService: SuiteService,
    private fb: FormBuilder,
    private router: Router) {
    this.suiteGroup = this.fb.group({
      price: '',
      available: '',
      guestId: '',
    })
  }

  ngOnInit() {
  }

  createSuite() {
    const values = this.suiteGroup.value;

    this.suiteService.create({
      price: values.price,
      available: values.available,
      guestId: values.guestId,
    })
      .subscribe(suite => {
        this.suiteGroup.reset();
        this.router.navigateByUrl('/front');
      })
  }
}
