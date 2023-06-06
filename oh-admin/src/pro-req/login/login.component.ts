import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/shared/services/form/forms.service';
import { HttpService } from 'src/shared/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  appUser: any;
  showError: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormsService,
    private httpService: HttpService
  ) {
    this.loginForm = this.formBuilder.initLoginForm();
  }
  ngOnInit() {
    this.httpService.isActiveUser().subscribe((val: any) => {
      if (val?.user) {
        this.httpService.appUser$.next(val?.user);
        this.router.navigate(['/app-home']);
      }
    });
    this.showError = false;
  }

  login() {
    this.httpService.appLogin(this.loginForm.value).subscribe((val: any) => {
      if (val?.status === 400 || val?.status === 404) {
        this.showError = true;
      } else {
        this.httpService.appUser$.next(val);
        this.router.navigate([`/app-home`]);
      }
    });
  }
}
