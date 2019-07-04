import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'nlg-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})

export class BusinessCardComponent implements OnInit {

  @ViewChild('metas') public meat;

  metas = {
    title: 'Project X',
    subTitle: 'Experimental behaviors:',
    subExtra: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    link: {
      d: 'https://github.com/NoLogig/Node-garden/master',
      g: 'https://github.com/NoLogig/Node-garden',
      l: 'https://heroku.apps.com/NoLogig/Node-garden',
    }
  };

  public gitUser$;
  public hide = true;
  public err404: { message: string };
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.max(12)
  ]);
  public matcher = new ErrorStateMatcherComponent();

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  public searchGitUser(gitUser) {
    this.http.get(`https://api.github.com/users/${gitUser}`).subscribe(
      res => {
        this.gitUser$ = res;
      },
      err => {
        this.err404 = { message: 'User Not Found!' };
        this.emailFormControl.setErrors(this.err404);
      }
    );
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class ErrorStateMatcherComponent implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
