import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup } from '@angular/forms';
import { SuiteService } from '../shared/suite.service';
import { Router } from '@angular/router';
import { Suite } from '../shared/suite.model';
=======
import {AuthenticationService} from '../../../login/authentication.service';
import {SuiteService} from '../shared/suite.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Suite} from '../shared/suite.model';
import {Authentication} from '../../../login/authentication.model';
>>>>>>> refs/remotes/origin/Virker

@Component({
  selector: 'app-suite-create',
  templateUrl: './suite-create.component.html',
  styleUrls: ['./suite-create.component.css']
})
export class SuiteCreateComponent implements OnInit {

  suiteGroup: FormGroup;
<<<<<<< HEAD
  constructor(private suiteService: SuiteService,
    private fb: FormBuilder,
    private router: Router) {
    this.suiteGroup = this.fb.group({
      price: '',
      available: '',
      guestId: '',
    })
=======
  authId: number;
  constructor(private suiteService: SuiteService,
              private authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
    this.suiteGroup = this.fb.group({
      price: '',
      available: '',
      name: ''
    });
>>>>>>> refs/remotes/origin/Virker
  }

  ngOnInit() {
  }

  createSuite() {
    const values = this.suiteGroup.value;

<<<<<<< HEAD
    this.suiteService.create({
      price: values.price,
      available: values.available,
      guestId: values.guestId,
    })
      .subscribe(suite => {
        this.suiteGroup.reset();
        this.router.navigateByUrl('/front');
      })
=======
    const authentication: Authentication = {
      username: values.username,
      password: values.password
    };
    const suite: Suite = {
      price: values.price,
      available: values.available,
      name: values.name

    };
    this.suiteService.create(suite)
      .subscribe(suite => {
        this.router.navigateByUrl('/front');
      });
>>>>>>> refs/remotes/origin/Virker
  }
}



